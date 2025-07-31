-- Debug script to check the complete deployment flow
-- This will help us understand why deployments aren't working

-- 1. Check current user authentication
SELECT 'Checking authentication setup...' as step;

SELECT 
    schemaname,
    tablename,
    tableowner
FROM pg_tables 
WHERE schemaname = 'auth' 
ORDER BY tablename;

-- 2. Check profiles table structure and data
SELECT 'Checking profiles table...' as step;

SELECT 
    COUNT(*) as total_profiles,
    COUNT(CASE WHEN email IS NOT NULL THEN 1 END) as profiles_with_email,
    COUNT(CASE WHEN name IS NOT NULL THEN 1 END) as profiles_with_name
FROM profiles;

-- Show recent profiles
SELECT 
    id,
    email,
    name,
    created_at
FROM profiles 
ORDER BY created_at DESC 
LIMIT 5;

-- 3. Check deployed_agents table structure
SELECT 'Checking deployed_agents table structure...' as step;

SELECT 
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_name = 'deployed_agents' 
ORDER BY ordinal_position;

-- 4. Check all deployed agents
SELECT 'Checking all deployed agents...' as step;

SELECT 
    da.id,
    da.user_id,
    p.email as user_email,
    da.agent_id,
    da.name,
    da.status,
    da.deployment_date,
    da.trial_start,
    da.trial_end,
    da.created_at
FROM deployed_agents da
LEFT JOIN profiles p ON da.user_id = p.id
ORDER BY da.created_at DESC;

-- 5. Check for any constraints that might be blocking inserts
SELECT 'Checking table constraints...' as step;

SELECT 
    tc.constraint_name,
    tc.constraint_type,
    kcu.column_name,
    cc.check_clause
FROM information_schema.table_constraints tc
LEFT JOIN information_schema.key_column_usage kcu 
    ON tc.constraint_name = kcu.constraint_name
LEFT JOIN information_schema.check_constraints cc 
    ON tc.constraint_name = cc.constraint_name
WHERE tc.table_name = 'deployed_agents'
ORDER BY tc.constraint_type, tc.constraint_name;

-- 6. Test inserting a sample deployment
SELECT 'Testing sample deployment...' as step;

DO $$
DECLARE
    test_user_id uuid;
    deployment_id uuid;
    profile_exists boolean := false;
BEGIN
    -- Get or create a test user
    SELECT id INTO test_user_id FROM profiles LIMIT 1;
    
    IF test_user_id IS NULL THEN
        -- Create a test profile
        test_user_id := gen_random_uuid();
        INSERT INTO profiles (id, email, name) 
        VALUES (test_user_id, 'test@neuralia.com', 'Test User');
        RAISE NOTICE 'Created test profile with ID: %', test_user_id;
    ELSE
        RAISE NOTICE 'Using existing profile with ID: %', test_user_id;
    END IF;
    
    -- Try to insert a test deployment
    BEGIN
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
            'test-ceo-agent-' || extract(epoch from now()),
            'Test CEO Agent',
            'Test CEO Agent',
            'Test deployment for debugging',
            'Test deployment for debugging',
            'neural-executive',
            '👔',
            'trial',
            NOW(),
            NOW(),
            NOW() + INTERVAL '5 days'
        ) RETURNING id INTO deployment_id;
        
        RAISE NOTICE 'Successfully created test deployment with ID: %', deployment_id;
        
        -- Clean up the test deployment
        DELETE FROM deployed_agents WHERE id = deployment_id;
        RAISE NOTICE 'Cleaned up test deployment';
        
    EXCEPTION WHEN OTHERS THEN
        RAISE NOTICE 'Failed to create test deployment: % %', SQLSTATE, SQLERRM;
    END;
END $$;

-- 7. Check RLS policies
SELECT 'Checking Row Level Security policies...' as step;

SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies 
WHERE tablename IN ('profiles', 'deployed_agents')
ORDER BY tablename, policyname;

-- 8. Final summary
SELECT 'Deployment flow summary...' as step;

SELECT 
    'Profiles' as table_name,
    COUNT(*) as record_count
FROM profiles
UNION ALL
SELECT 
    'Deployed Agents' as table_name,
    COUNT(*) as record_count
FROM deployed_agents
UNION ALL
SELECT 
    'Trial Agents' as table_name,
    COUNT(*) as record_count
FROM deployed_agents 
WHERE status = 'trial';
