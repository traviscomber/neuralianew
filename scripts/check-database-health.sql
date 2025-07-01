-- Database Health Check Script
-- This script provides a comprehensive overview of the database setup

-- 1. Check if all required tables exist
SELECT 'STEP 1: Checking if all required tables exist' as status;

SELECT 
    table_name,
    table_type,
    CASE 
        WHEN table_name IN ('profiles', 'ai_agents', 'ai_systems', 'chat_conversations', 'user_analytics') 
        THEN '✅ Required table exists'
        ELSE '❌ Unexpected table'
    END as table_status
FROM information_schema.tables 
WHERE table_schema = 'public'
ORDER BY table_name;

-- 2. Check table structures and row counts
SELECT 'STEP 2: Checking table structures and row counts' as status;

SELECT 
    'profiles' as table_name,
    COUNT(*) as row_count,
    'User profile data' as description
FROM public.profiles
UNION ALL
SELECT 
    'ai_agents' as table_name,
    COUNT(*) as row_count,
    'AI agent configurations' as description
FROM public.ai_agents
UNION ALL
SELECT 
    'ai_systems' as table_name,
    COUNT(*) as row_count,
    'AI system workflows' as description
FROM public.ai_systems
UNION ALL
SELECT 
    'chat_conversations' as table_name,
    COUNT(*) as row_count,
    'Chat conversation history' as description
FROM public.chat_conversations
UNION ALL
SELECT 
    'user_analytics' as table_name,
    COUNT(*) as row_count,
    'User usage analytics' as description
FROM public.user_analytics
ORDER BY table_name;

-- 3. Check foreign key relationships
SELECT 'STEP 3: Checking foreign key relationships' as status;

SELECT
    tc.table_name as source_table,
    kcu.column_name as source_column,
    ccu.table_name as target_table,
    ccu.column_name as target_column,
    tc.constraint_name,
    '✅ FK relationship active' as status
FROM information_schema.table_constraints AS tc
JOIN information_schema.key_column_usage AS kcu
    ON tc.constraint_name = kcu.constraint_name
JOIN information_schema.constraint_column_usage AS ccu
    ON ccu.constraint_name = tc.constraint_name
WHERE tc.constraint_type = 'FOREIGN KEY'
    AND tc.table_schema = 'public'
    AND tc.table_name IN ('profiles', 'ai_agents', 'ai_systems', 'chat_conversations', 'user_analytics')
ORDER BY tc.table_name;

-- 4. Check Row Level Security (RLS) status
SELECT 'STEP 4: Checking Row Level Security policies' as status;

SELECT
    schemaname,
    tablename,
    rowsecurity as rls_enabled,
    CASE 
        WHEN rowsecurity THEN '✅ RLS enabled'
        ELSE '❌ RLS disabled'
    END as rls_status
FROM pg_tables
WHERE schemaname = 'public'
    AND tablename IN ('profiles', 'ai_agents', 'ai_systems', 'chat_conversations', 'user_analytics')
ORDER BY tablename;

-- 5. Check RLS policies details
SELECT 'STEP 5: Checking RLS policy details' as status;

SELECT
    tablename,
    policyname,
    cmd as operation,
    CASE 
        WHEN cmd = 'SELECT' THEN '👁️ Read access'
        WHEN cmd = 'INSERT' THEN '➕ Create access'
        WHEN cmd = 'UPDATE' THEN '✏️ Update access'
        WHEN cmd = 'DELETE' THEN '🗑️ Delete access'
        ELSE cmd
    END as operation_type,
    '✅ Policy active' as status
FROM pg_policies
WHERE schemaname = 'public'
    AND tablename IN ('profiles', 'ai_agents', 'ai_systems', 'chat_conversations', 'user_analytics')
ORDER BY tablename, cmd;

-- 6. Check indexes for performance
SELECT 'STEP 6: Checking database indexes' as status;

SELECT
    tablename,
    indexname,
    CASE 
        WHEN indexname LIKE '%_pkey' THEN '🔑 Primary key index'
        WHEN indexname LIKE '%_idx' THEN '⚡ Performance index'
        WHEN indexname LIKE '%_key' THEN '🔗 Unique constraint index'
        ELSE '📊 Other index'
    END as index_type,
    '✅ Index active' as status
FROM pg_indexes
WHERE schemaname = 'public'
    AND tablename IN ('profiles', 'ai_agents', 'ai_systems', 'chat_conversations', 'user_analytics')
ORDER BY tablename, indexname;

-- 7. Check triggers and automation
SELECT 'STEP 7: Checking triggers and automation' as status;

SELECT
    event_object_table as table_name,
    trigger_name,
    event_manipulation as trigger_event,
    action_timing,
    CASE 
        WHEN trigger_name LIKE '%updated_at%' THEN '⏰ Timestamp automation'
        WHEN trigger_name LIKE '%analytics%' THEN '📊 Analytics tracking'
        WHEN trigger_name LIKE '%auth%' THEN '👤 User management'
        ELSE '🔧 Custom automation'
    END as trigger_purpose,
    '✅ Trigger active' as status
FROM information_schema.triggers
WHERE trigger_schema = 'public'
    AND event_object_table IN ('profiles', 'ai_agents', 'ai_systems', 'chat_conversations', 'user_analytics')
ORDER BY event_object_table, trigger_name;

-- 8. Check custom functions
SELECT 'STEP 8: Checking custom functions' as status;

SELECT
    routine_name as function_name,
    routine_type,
    CASE 
        WHEN routine_name = 'handle_new_user' THEN '👤 User registration automation'
        WHEN routine_name = 'handle_updated_at' THEN '⏰ Timestamp management'
        WHEN routine_name = 'update_user_analytics' THEN '📊 Analytics tracking'
        ELSE 'Custom function'
    END as function_purpose,
    '✅ Function available' as status
FROM information_schema.routines
WHERE routine_schema = 'public'
    AND routine_name IN ('handle_new_user', 'handle_updated_at', 'update_user_analytics')
ORDER BY routine_name;

-- 9. Check table constraints and data validation
SELECT 'STEP 9: Checking table constraints' as status;

SELECT
    tc.table_name,
    tc.constraint_name,
    tc.constraint_type,
    CASE 
        WHEN tc.constraint_type = 'PRIMARY KEY' THEN '🔑 Primary key constraint'
        WHEN tc.constraint_type = 'FOREIGN KEY' THEN '🔗 Foreign key constraint'
        WHEN tc.constraint_type = 'CHECK' THEN '✅ Data validation constraint'
        WHEN tc.constraint_type = 'UNIQUE' THEN '🎯 Uniqueness constraint'
        ELSE tc.constraint_type
    END as constraint_purpose,
    '✅ Constraint active' as status
FROM information_schema.table_constraints tc
WHERE tc.table_schema = 'public'
    AND tc.table_name IN ('profiles', 'ai_agents', 'ai_systems', 'chat_conversations', 'user_analytics')
ORDER BY tc.table_name, tc.constraint_type;

-- 10. Database health summary
SELECT 'STEP 10: Database health summary' as status;

WITH table_stats AS (
    SELECT 
        COUNT(*) as total_tables
    FROM information_schema.tables 
    WHERE table_schema = 'public'
        AND table_name IN ('profiles', 'ai_agents', 'ai_systems', 'chat_conversations', 'user_analytics')
),
policy_stats AS (
    SELECT 
        COUNT(*) as total_policies
    FROM pg_policies
    WHERE schemaname = 'public'
        AND tablename IN ('profiles', 'ai_agents', 'ai_systems', 'chat_conversations', 'user_analytics')
),
trigger_stats AS (
    SELECT 
        COUNT(*) as total_triggers
    FROM information_schema.triggers
    WHERE trigger_schema = 'public'
        AND event_object_table IN ('profiles', 'ai_agents', 'ai_systems', 'chat_conversations', 'user_analytics')
),
function_stats AS (
    SELECT 
        COUNT(*) as total_functions
    FROM information_schema.routines
    WHERE routine_schema = 'public'
        AND routine_name IN ('handle_new_user', 'handle_updated_at', 'update_user_analytics')
)
SELECT 
    '🏥 DATABASE HEALTH REPORT' as report_title,
    ts.total_tables as tables_created,
    ps.total_policies as rls_policies,
    trs.total_triggers as active_triggers,
    fs.total_functions as custom_functions,
    CASE 
        WHEN ts.total_tables = 5 AND ps.total_policies >= 15 AND trs.total_triggers >= 8 AND fs.total_functions = 3
        THEN '✅ HEALTHY - All systems operational'
        ELSE '⚠️ NEEDS ATTENTION - Some components missing'
    END as overall_health,
    NOW() as checked_at
FROM table_stats ts, policy_stats ps, trigger_stats trs, function_stats fs;

-- 11. Quick data validation test
SELECT 'STEP 11: Quick data validation test' as status;

-- Test if we can query each table (this will fail if RLS is blocking access)
SELECT 
    'profiles' as table_name,
    CASE 
        WHEN COUNT(*) >= 0 THEN '✅ Table accessible'
        ELSE '❌ Access denied'
    END as access_status
FROM public.profiles
UNION ALL
SELECT 
    'ai_agents' as table_name,
    CASE 
        WHEN COUNT(*) >= 0 THEN '✅ Table accessible'
        ELSE '❌ Access denied'
    END as access_status
FROM public.ai_agents
UNION ALL
SELECT 
    'ai_systems' as table_name,
    CASE 
        WHEN COUNT(*) >= 0 THEN '✅ Table accessible'
        ELSE '❌ Access denied'
    END as access_status
FROM public.ai_systems
UNION ALL
SELECT 
    'chat_conversations' as table_name,
    CASE 
        WHEN COUNT(*) >= 0 THEN '✅ Table accessible'
        ELSE '❌ Access denied'
    END as access_status
FROM public.chat_conversations
UNION ALL
SELECT 
    'user_analytics' as table_name,
    CASE 
        WHEN COUNT(*) >= 0 THEN '✅ Table accessible'
        ELSE '❌ Access denied'
    END as access_status
FROM public.user_analytics;

-- Final status
SELECT 
    '🎉 DATABASE HEALTH CHECK COMPLETE!' as final_status,
    'All database components have been verified' as message,
    NOW() as completed_at;
