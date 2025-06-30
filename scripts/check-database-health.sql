-- Database Health Check Script for Neuralia Platform
-- This script provides comprehensive health monitoring for all database components

-- Check if all required tables exist
SELECT 
    'Table Existence Check' as check_type,
    CASE 
        WHEN COUNT(*) = 9 THEN 'PASS'
        ELSE 'FAIL'
    END as status,
    COUNT(*) as tables_found,
    'Expected 9 tables' as expected
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN (
    'profiles', 'ai_agents', 'ai_systems', 'chat_conversations', 
    'user_analytics', 'orchestrator_conversations', 'deployed_agents', 
    'user_preferences', 'error_reports'
);

-- Check Row Level Security policies
SELECT 
    'RLS Policies Check' as check_type,
    CASE 
        WHEN COUNT(*) >= 20 THEN 'PASS'
        ELSE 'FAIL'
    END as status,
    COUNT(*) as policies_found,
    'Expected 20+ RLS policies' as expected
FROM pg_policies 
WHERE schemaname = 'public';

-- Check database triggers
SELECT 
    'Triggers Check' as check_type,
    CASE 
        WHEN COUNT(*) >= 10 THEN 'PASS'
        ELSE 'FAIL'
    END as status,
    COUNT(*) as triggers_found,
    'Expected 10+ triggers' as expected
FROM information_schema.triggers 
WHERE trigger_schema = 'public';

-- Check custom functions
SELECT 
    'Custom Functions Check' as check_type,
    CASE 
        WHEN COUNT(*) >= 4 THEN 'PASS'
        ELSE 'FAIL'
    END as status,
    COUNT(*) as functions_found,
    'Expected 4+ custom functions' as expected
FROM information_schema.routines 
WHERE routine_schema = 'public' 
AND routine_type = 'FUNCTION'
AND routine_name IN ('handle_new_user', 'is_admin', 'update_user_analytics', 'handle_updated_at');

-- Check foreign key constraints
SELECT 
    'Foreign Keys Check' as check_type,
    CASE 
        WHEN COUNT(*) >= 8 THEN 'PASS'
        ELSE 'FAIL'
    END as status,
    COUNT(*) as constraints_found,
    'Expected 8+ foreign key constraints' as expected
FROM information_schema.table_constraints 
WHERE constraint_schema = 'public' 
AND constraint_type = 'FOREIGN KEY';

-- Check indexes for performance
SELECT 
    'Performance Indexes Check' as check_type,
    CASE 
        WHEN COUNT(*) >= 15 THEN 'PASS'
        ELSE 'FAIL'
    END as status,
    COUNT(*) as indexes_found,
    'Expected 15+ indexes' as expected
FROM pg_indexes 
WHERE schemaname = 'public';

-- Detailed table information
SELECT 
    t.table_name,
    COALESCE(s.n_tup_ins, 0) as inserts,
    COALESCE(s.n_tup_upd, 0) as updates,
    COALESCE(s.n_tup_del, 0) as deletes,
    COALESCE(s.n_live_tup, 0) as live_rows,
    COALESCE(s.n_dead_tup, 0) as dead_rows,
    CASE 
        WHEN s.n_live_tup > 0 THEN 
            ROUND((s.n_dead_tup::float / s.n_live_tup::float) * 100, 2)
        ELSE 0 
    END as dead_row_percentage
FROM information_schema.tables t
LEFT JOIN pg_stat_user_tables s ON s.relname = t.table_name
WHERE t.table_schema = 'public' 
AND t.table_name IN (
    'profiles', 'ai_agents', 'ai_systems', 'chat_conversations', 
    'user_analytics', 'orchestrator_conversations', 'deployed_agents', 
    'user_preferences', 'error_reports'
)
ORDER BY t.table_name;

-- Check RLS policies by table
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual
FROM pg_policies 
WHERE schemaname = 'public'
ORDER BY tablename, policyname;

-- Check table permissions
SELECT 
    t.table_name,
    t.privilege_type,
    t.grantee
FROM information_schema.table_privileges t
WHERE t.table_schema = 'public'
AND t.table_name IN (
    'profiles', 'ai_agents', 'ai_systems', 'chat_conversations', 
    'user_analytics', 'orchestrator_conversations', 'deployed_agents', 
    'user_preferences', 'error_reports'
)
ORDER BY t.table_name, t.privilege_type;

-- Database size and performance metrics
SELECT 
    pg_size_pretty(pg_database_size(current_database())) as database_size,
    (SELECT COUNT(*) FROM pg_stat_activity WHERE state = 'active') as active_connections,
    (SELECT setting FROM pg_settings WHERE name = 'max_connections') as max_connections;

-- Check for any constraint violations or issues
SELECT 
    conname as constraint_name,
    contype as constraint_type,
    conrelid::regclass as table_name
FROM pg_constraint 
WHERE connamespace = 'public'::regnamespace
AND contype IN ('f', 'c', 'u', 'p')
ORDER BY conrelid::regclass, contype;

-- Final health summary
SELECT 
    'OVERALL HEALTH STATUS' as summary,
    CASE 
        WHEN (
            SELECT COUNT(*) FROM information_schema.tables 
            WHERE table_schema = 'public' 
            AND table_name IN (
                'profiles', 'ai_agents', 'ai_systems', 'chat_conversations', 
                'user_analytics', 'orchestrator_conversations', 'deployed_agents', 
                'user_preferences', 'error_reports'
            )
        ) = 9 
        AND (SELECT COUNT(*) FROM pg_policies WHERE schemaname = 'public') >= 20
        AND (SELECT COUNT(*) FROM information_schema.triggers WHERE trigger_schema = 'public') >= 10
        THEN 'HEALTHY - All systems operational'
        ELSE 'NEEDS ATTENTION - Some components missing'
    END as status,
    NOW() as checked_at;
