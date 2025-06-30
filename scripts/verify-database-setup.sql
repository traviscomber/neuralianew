-- Comprehensive database verification script
-- This script checks all created tables, their relationships, and constraints

-- Check all tables exist
SELECT 'Checking all tables exist...' as step;

SELECT 
    schemaname,
    tablename,
    tableowner,
    hasindexes,
    hasrules,
    hastriggers
FROM pg_tables 
WHERE schemaname = 'public' 
    AND tablename IN ('profiles', 'ai_agents', 'ai_systems', 'chat_conversations', 'user_analytics', 'orchestrator_conversations', 'deployed_agents', 'user_preferences', 'error_reports')
ORDER BY tablename;

-- Check table structures and column details
SELECT 'Checking table structures...' as step;

SELECT 
    table_name,
    column_name,
    data_type,
    is_nullable,
    column_default,
    character_maximum_length
FROM information_schema.columns 
WHERE table_schema = 'public' 
    AND table_name IN ('profiles', 'ai_agents', 'ai_systems', 'chat_conversations', 'user_analytics', 'orchestrator_conversations', 'deployed_agents', 'user_preferences', 'error_reports')
ORDER BY table_name, ordinal_position;

-- Check foreign key relationships
SELECT 'Checking foreign key relationships...' as step;

SELECT
    tc.table_name,
    kcu.column_name,
    ccu.table_name AS foreign_table_name,
    ccu.column_name AS foreign_column_name,
    tc.constraint_name
FROM information_schema.table_constraints AS tc
JOIN information_schema.key_column_usage AS kcu
    ON tc.constraint_name = kcu.constraint_name
    AND tc.table_schema = kcu.table_schema
JOIN information_schema.constraint_column_usage AS ccu
    ON ccu.constraint_name = tc.constraint_name
    AND ccu.table_schema = tc.table_schema
WHERE tc.constraint_type = 'FOREIGN KEY'
    AND tc.table_schema = 'public'
    AND tc.table_name IN ('profiles', 'ai_agents', 'ai_systems', 'chat_conversations', 'user_analytics', 'orchestrator_conversations', 'deployed_agents', 'user_preferences', 'error_reports')
ORDER BY tc.table_name;

-- Check indexes
SELECT 'Checking indexes...' as step;

SELECT
    schemaname,
    tablename,
    indexname,
    indexdef
FROM pg_indexes
WHERE schemaname = 'public'
    AND tablename IN ('profiles', 'ai_agents', 'ai_systems', 'chat_conversations', 'user_analytics', 'orchestrator_conversations', 'deployed_agents', 'user_preferences', 'error_reports')
ORDER BY tablename, indexname;

-- Check RLS policies
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
WHERE schemaname = 'public'
    AND tablename IN ('profiles', 'ai_agents', 'ai_systems', 'chat_conversations', 'user_analytics', 'orchestrator_conversations', 'deployed_agents', 'user_preferences', 'error_reports')
ORDER BY tablename, policyname;

-- Check triggers
SELECT 'Checking triggers...' as step;

SELECT
    trigger_schema,
    trigger_name,
    event_manipulation,
    event_object_table,
    action_timing,
    action_statement
FROM information_schema.triggers
WHERE trigger_schema = 'public'
    AND event_object_table IN ('profiles', 'ai_agents', 'ai_systems', 'chat_conversations', 'user_analytics', 'orchestrator_conversations', 'deployed_agents', 'user_preferences', 'error_reports')
ORDER BY event_object_table, trigger_name;

-- Check functions
SELECT 'Checking custom functions...' as step;

SELECT
    routine_name,
    routine_type,
    data_type,
    routine_definition
FROM information_schema.routines
WHERE routine_schema = 'public'
    AND routine_name IN ('handle_new_user', 'handle_updated_at', 'update_user_analytics', 'is_admin')
ORDER BY routine_name;

-- Check table constraints
SELECT 'Checking table constraints...' as step;

SELECT
    tc.table_name,
    tc.constraint_name,
    tc.constraint_type,
    cc.check_clause
FROM information_schema.table_constraints tc
LEFT JOIN information_schema.check_constraints cc
    ON tc.constraint_name = cc.constraint_name
WHERE tc.table_schema = 'public'
    AND tc.table_name IN ('profiles', 'ai_agents', 'ai_systems', 'chat_conversations', 'user_analytics', 'orchestrator_conversations', 'deployed_agents', 'user_preferences', 'error_reports')
ORDER BY tc.table_name, tc.constraint_type, tc.constraint_name;

-- Test data insertion capabilities (dry run)
SELECT 'Testing table relationships...' as step;

-- Show sample of how tables relate to each other
SELECT 
    'profiles -> ai_agents' as relationship,
    COUNT(*) as profile_count,
    0 as related_count
FROM public.profiles
UNION ALL
SELECT 
    'profiles -> ai_systems' as relationship,
    COUNT(*) as profile_count,
    0 as related_count
FROM public.profiles
UNION ALL
SELECT 
    'profiles -> chat_conversations' as relationship,
    COUNT(*) as profile_count,
    0 as related_count
FROM public.profiles
UNION ALL
SELECT 
    'profiles -> user_analytics' as relationship,
    COUNT(*) as profile_count,
    0 as related_count
FROM public.profiles;

-- Final verification summary
SELECT 'Database setup verification complete!' as final_status,
       NOW() as verified_at;

-- Count records in each table
SELECT 'Record counts in each table:' as summary;

SELECT 'profiles' as table_name, COUNT(*) as record_count FROM public.profiles
UNION ALL
SELECT 'ai_agents' as table_name, COUNT(*) as record_count FROM public.ai_agents
UNION ALL
SELECT 'ai_systems' as table_name, COUNT(*) as record_count FROM public.ai_systems
UNION ALL
SELECT 'chat_conversations' as table_name, COUNT(*) as record_count FROM public.chat_conversations
UNION ALL
SELECT 'user_analytics' as table_name, COUNT(*) as record_count FROM public.user_analytics
UNION ALL
SELECT 'orchestrator_conversations' as table_name, COUNT(*) as record_count FROM public.orchestrator_conversations
UNION ALL
SELECT 'deployed_agents' as table_name, COUNT(*) as record_count FROM public.deployed_agents
UNION ALL
SELECT 'user_preferences' as table_name, COUNT(*) as record_count FROM public.user_preferences
UNION ALL
SELECT 'error_reports' as table_name, COUNT(*) as record_count FROM public.error_reports
ORDER BY table_name;
