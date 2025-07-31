-- Comprehensive Verification Script
-- This script verifies that all database fixes are working correctly

SELECT '=== NEURALIA DATABASE VERIFICATION ===' as status;

-- 1. Check ai_agents table structure
SELECT '1. AI AGENTS TABLE STRUCTURE' as check_type;

SELECT 
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_name = 'ai_agents' 
AND table_schema = 'public'
ORDER BY ordinal_position;

-- 2. Check constraints on ai_agents
SELECT '2. AI AGENTS CONSTRAINTS' as check_type;

SELECT 
    conname as constraint_name,
    contype as constraint_type,
    pg_get_constraintdef(oid) as constraint_definition
FROM pg_constraint 
WHERE conrelid = 'public.ai_agents'::regclass
ORDER BY contype, conname;

-- 3. Test neural agent type insertion
SELECT '3. TESTING NEURAL AGENT TYPE INSERTION' as check_type;

DO $$
BEGIN
    -- Test inserting a neural agent type
    BEGIN
        INSERT INTO public.ai_agents (
            name, type, description, status, user_id, created_at, updated_at
        ) VALUES (
            'Test Neural Executive', 
            'neural-executive', 
            'Test neural agent for verification', 
            'active', 
            NULL, 
            NOW(), 
            NOW()
        );
        
        RAISE NOTICE 'SUCCESS: Neural agent type insertion works!';
        
        -- Clean up test data
        DELETE FROM public.ai_agents WHERE name = 'Test Neural Executive';
        
    EXCEPTION WHEN OTHERS THEN
        RAISE NOTICE 'ERROR: Neural agent insertion failed: %', SQLERRM;
    END;
END $$;

-- 4. Check deployed_agents table structure
SELECT '4. DEPLOYED AGENTS TABLE STRUCTURE' as check_type;

SELECT 
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_name = 'deployed_agents' 
AND table_schema = 'public'
ORDER BY ordinal_position;

-- 5. Test trial deployment
SELECT '5. TESTING TRIAL DEPLOYMENT' as check_type;

DO $$
BEGIN
    -- Test inserting a trial deployment
    BEGIN
        INSERT INTO public.deployed_agents (
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
            'test-user-id',
            'test-neural-ceo',
            'Test Neural CEO',
            'Test Neural CEO',
            'Test deployment for verification',
            'Test deployment for verification',
            'neural-executive',
            '🧠',
            'trial',
            NOW(),
            NOW(),
            NOW() + INTERVAL '5 days'
        );
        
        RAISE NOTICE 'SUCCESS: Trial deployment insertion works!';
        
        -- Clean up test data
        DELETE FROM public.deployed_agents WHERE agent_id = 'test-neural-ceo';
        
    EXCEPTION WHEN OTHERS THEN
        RAISE NOTICE 'ERROR: Trial deployment failed: %', SQLERRM;
    END;
END $$;

-- 6. Check current marketplace agents
SELECT '6. CURRENT MARKETPLACE AGENTS' as check_type;

SELECT 
    name,
    type,
    status,
    user_id,
    created_at
FROM public.ai_agents 
WHERE user_id IS NULL
ORDER BY created_at DESC;

-- 7. Check deployed agents
SELECT '7. CURRENT DEPLOYED AGENTS' as check_type;

SELECT 
    name,
    agent_type,
    status,
    trial_start,
    trial_end,
    deployment_date
FROM public.deployed_agents 
ORDER BY deployment_date DESC
LIMIT 5;

-- 8. Check user_analytics table (if exists)
SELECT '8. USER ANALYTICS TABLE CHECK' as check_type;

DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'user_analytics' AND table_schema = 'public') THEN
        RAISE NOTICE 'User analytics table exists';
        
        -- Show structure
        PERFORM column_name, data_type, is_nullable
        FROM information_schema.columns 
        WHERE table_name = 'user_analytics' 
        AND table_schema = 'public'
        ORDER BY ordinal_position;
    ELSE
        RAISE NOTICE 'User analytics table does not exist';
    END IF;
END $$;

-- 9. Test complete workflow
SELECT '9. TESTING COMPLETE WORKFLOW' as check_type;

DO $$
DECLARE
    agent_id UUID;
    deployment_id UUID;
BEGIN
    -- Step 1: Insert a marketplace agent
    INSERT INTO public.ai_agents (
        name, type, description, status, user_id, created_at, updated_at
    ) VALUES (
        'Workflow Test Agent', 
        'neural-executive', 
        'Complete workflow test agent', 
        'active', 
        NULL, 
        NOW(), 
        NOW()
    ) RETURNING id INTO agent_id;
    
    RAISE NOTICE 'Step 1: Created marketplace agent with ID: %', agent_id;
    
    -- Step 2: Deploy the agent for a user
    INSERT INTO public.deployed_agents (
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
        'workflow-test-user',
        agent_id::text,
        'Workflow Test Agent',
        'Workflow Test Agent',
        'Complete workflow test deployment',
        'Complete workflow test deployment',
        'neural-executive',
        '🧠',
        'trial',
        NOW(),
        NOW(),
        NOW() + INTERVAL '5 days'
    ) RETURNING id INTO deployment_id;
    
    RAISE NOTICE 'Step 2: Deployed agent with deployment ID: %', deployment_id;
    
    -- Step 3: Clean up test data
    DELETE FROM public.deployed_agents WHERE id = deployment_id;
    DELETE FROM public.ai_agents WHERE id = agent_id;
    
    RAISE NOTICE 'Step 3: Cleaned up test data';
    RAISE NOTICE 'SUCCESS: Complete workflow test passed!';
    
EXCEPTION WHEN OTHERS THEN
    RAISE NOTICE 'ERROR: Workflow test failed: %', SQLERRM;
    -- Clean up any partial data
    DELETE FROM public.deployed_agents WHERE user_id = 'workflow-test-user';
    DELETE FROM public.ai_agents WHERE name = 'Workflow Test Agent';
END $$;

-- 10. Final status summary
SELECT '10. VERIFICATION SUMMARY' as check_type;

SELECT 
    'ai_agents' as table_name,
    COUNT(*) as total_records,
    COUNT(CASE WHEN user_id IS NULL THEN 1 END) as marketplace_agents,
    COUNT(CASE WHEN user_id IS NOT NULL THEN 1 END) as user_agents
FROM public.ai_agents

UNION ALL

SELECT 
    'deployed_agents' as table_name,
    COUNT(*) as total_records,
    COUNT(CASE WHEN status = 'trial' THEN 1 END) as trial_deployments,
    COUNT(CASE WHEN status = 'active' THEN 1 END) as active_deployments
FROM public.deployed_agents;

SELECT '=== VERIFICATION COMPLETED ===' as final_status;
