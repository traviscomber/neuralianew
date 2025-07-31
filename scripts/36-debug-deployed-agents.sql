-- Debug script to check deployed agents visibility issue
-- This will help us understand why deployed agents aren't showing up

-- 1. Check if deployed_agents table exists and has correct structure
SELECT 'Checking deployed_agents table structure...' as step;

SELECT 
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_name = 'deployed_agents' 
ORDER BY ordinal_position;

-- 2. Check all deployed agents (regardless of user)
SELECT 'Checking all deployed agents...' as step;

SELECT 
    id,
    user_id,
    agent_id,
    name,
    status,
    deployment_date,
    trial_start,
    trial_end,
    created_at
FROM deployed_agents 
ORDER BY created_at DESC;

-- 3. Check profiles table to see user IDs
SELECT 'Checking user profiles...' as step;

SELECT 
    id,
    email,
    name,
    created_at
FROM profiles 
ORDER BY created_at DESC
LIMIT 5;

-- 4. Check if there are any deployed agents with trial status
SELECT 'Checking trial agents...' as step;

SELECT 
    COUNT(*) as total_deployed,
    COUNT(CASE WHEN status = 'trial' THEN 1 END) as trial_agents,
    COUNT(CASE WHEN status = 'active' THEN 1 END) as active_agents,
    COUNT(CASE WHEN status = 'expired' THEN 1 END) as expired_agents
FROM deployed_agents;

-- 5. Check recent deployments (last 24 hours)
SELECT 'Checking recent deployments...' as step;

SELECT 
    da.*,
    p.email as user_email
FROM deployed_agents da
LEFT JOIN profiles p ON da.user_id = p.id
WHERE da.created_at > NOW() - INTERVAL '24 hours'
ORDER BY da.created_at DESC;

-- 6. Test inserting a sample deployed agent for debugging
SELECT 'Testing sample deployment...' as step;

-- First, get a user ID to test with
DO $$
DECLARE
    test_user_id uuid;
    deployment_id uuid;
BEGIN
    -- Get the first user from profiles
    SELECT id INTO test_user_id FROM profiles LIMIT 1;
    
    IF test_user_id IS NOT NULL THEN
        -- Insert a test deployment
        INSERT INTO deployed_agents (
            user_id,
            agent_id,
            name,
            agent_name,
            description,
            agent_description,
            agent_type,
            icon,
            status,
            deployment_date,
            trial_start,
            trial_end
        ) VALUES (
            test_user_id,
            'debug-ceo-agent',
            'Debug CEO Agent',
            'Debug CEO Agent',
            'Test CEO agent for debugging',
            'Test CEO agent for debugging',
            'neural-executive',
            '👔',
            'trial',
            NOW(),
            NOW(),
            NOW() + INTERVAL '5 days'
        ) RETURNING id INTO deployment_id;
        
        RAISE NOTICE 'Created test deployment with ID: %', deployment_id;
        RAISE NOTICE 'For user ID: %', test_user_id;
    ELSE
        RAISE NOTICE 'No users found in profiles table';
    END IF;
END $$;

-- 7. Final check - show all deployed agents again
SELECT 'Final check - all deployed agents...' as step;

SELECT 
    da.id,
    da.user_id,
    p.email as user_email,
    da.agent_id,
    da.name,
    da.status,
    da.trial_start,
    da.trial_end,
    CASE 
        WHEN da.trial_end > NOW() THEN EXTRACT(days FROM da.trial_end - NOW())
        ELSE 0
    END as days_remaining
FROM deployed_agents da
LEFT JOIN profiles p ON da.user_id = p.id
ORDER BY da.created_at DESC;
