-- Comprehensive Database Verification Script
-- Run this to check if everything is properly set up

DO $$
BEGIN
    RAISE NOTICE '🔍 STARTING COMPREHENSIVE DATABASE VERIFICATION';
END $$;

-- 1. Check all required tables exist
DO $$
BEGIN
    RAISE NOTICE '1️⃣ CHECKING REQUIRED TABLES';
END $$;

WITH required_tables AS (
    SELECT unnest(ARRAY[
        'profiles', 'ai_agents', 'deployed_agents', 
        'chat_conversations', 'user_analytics', 'purchases', 'error_reports'
    ]) as table_name
),
existing_tables AS (
    SELECT table_name
    FROM information_schema.tables 
    WHERE table_schema = 'public'
)
SELECT 
    rt.table_name,
    CASE 
        WHEN et.table_name IS NOT NULL THEN '✅ EXISTS'
        ELSE '❌ MISSING'
    END as status
FROM required_tables rt
LEFT JOIN existing_tables et ON rt.table_name = et.table_name
ORDER BY rt.table_name;

-- 2. Check table structures and row counts
DO $$
BEGIN
    RAISE NOTICE '2️⃣ CHECKING TABLE STRUCTURES AND DATA';
END $$;

SELECT 
    'profiles' as table_name,
    COUNT(*) as row_count,
    'User profiles from auth' as description
FROM public.profiles
UNION ALL
SELECT 
    'ai_agents' as table_name,
    COUNT(*) as row_count,
    'Available agents in marketplace' as description
FROM public.ai_agents
UNION ALL
SELECT 
    'deployed_agents' as table_name,
    COUNT(*) as row_count,
    'User deployed agents' as description
FROM public.deployed_agents
UNION ALL
SELECT 
    'chat_conversations' as table_name,
    COUNT(*) as row_count,
    'Chat conversations' as description
FROM public.chat_conversations
UNION ALL
SELECT 
    'user_analytics' as table_name,
    COUNT(*) as row_count,
    'User analytics data' as description
FROM public.user_analytics
UNION ALL
SELECT 
    'purchases' as table_name,
    COUNT(*) as row_count,
    'Purchase records' as description
FROM public.purchases
UNION ALL
SELECT 
    'error_reports' as table_name,
    COUNT(*) as row_count,
    'Error reports' as description
FROM public.error_reports
ORDER BY table_name;

-- 3. Check RLS is enabled on all tables
DO $$
BEGIN
    RAISE NOTICE '3️⃣ CHECKING ROW LEVEL SECURITY';
END $$;

SELECT
    schemaname,
    tablename,
    rowsecurity as rls_enabled,
    CASE 
        WHEN rowsecurity THEN '✅ RLS ENABLED'
        ELSE '❌ RLS DISABLED'
    END as rls_status
FROM pg_tables
WHERE schemaname = 'public'
    AND tablename IN ('profiles', 'ai_agents', 'deployed_agents', 'chat_conversations', 'user_analytics', 'purchases', 'error_reports')
ORDER BY tablename;

-- 4. Check deployed_agents table structure specifically
DO $$
BEGIN
    RAISE NOTICE '4️⃣ CHECKING DEPLOYED_AGENTS TABLE STRUCTURE';
END $$;

SELECT 
    column_name,
    data_type,
    is_nullable,
    column_default,
    CASE 
        WHEN column_name IN ('trial_start', 'trial_end') THEN '⏰ TRIAL COLUMNS'
        WHEN column_name = 'status' THEN '📊 STATUS COLUMN'
        WHEN column_name LIKE '%_id' THEN '🔗 REFERENCE COLUMN'
        ELSE '📝 DATA COLUMN'
    END as column_purpose
FROM information_schema.columns 
WHERE table_schema = 'public' 
    AND table_name = 'deployed_agents'
ORDER BY ordinal_position;

-- 5. Sample data verification (using 'type' instead of 'category')
DO $$
BEGIN
    RAISE NOTICE '5️⃣ CHECKING SAMPLE DATA';
END $$;

SELECT 
    name,
    type,
    LEFT(description, 80) || '...' as description_preview,
    status,
    '✅ SAMPLE AGENT' as agent_status
FROM public.ai_agents
WHERE status = 'active' AND user_id IS NULL
ORDER BY type, name;

-- 6. Check ai_agents table structure
DO $$
BEGIN
    RAISE NOTICE '6️⃣ CHECKING AI_AGENTS TABLE STRUCTURE';
END $$;

SELECT 
    column_name,
    data_type,
    is_nullable,
    column_default,
    CASE 
        WHEN column_name = 'type' THEN '🏷️ AGENT TYPE'
        WHEN column_name = 'status' THEN '📊 STATUS COLUMN'
        WHEN column_name LIKE '%_id' THEN '🔗 REFERENCE COLUMN'
        WHEN column_name IN ('model_config', 'training_data') THEN '⚙️ CONFIG COLUMN'
        ELSE '📝 DATA COLUMN'
    END as column_purpose
FROM information_schema.columns 
WHERE table_schema = 'public' 
    AND table_name = 'ai_agents'
ORDER BY ordinal_position;

-- 7. Check constraints on ai_agents
DO $$
BEGIN
    RAISE NOTICE '7️⃣ CHECKING AI_AGENTS CONSTRAINTS';
END $$;

SELECT 
    constraint_name,
    constraint_type,
    '✅ ACTIVE' as status
FROM information_schema.table_constraints 
WHERE table_name = 'ai_agents'
AND table_schema = 'public'
ORDER BY constraint_type;

-- 8. Final health summary
DO $$
BEGIN
    RAISE NOTICE '8️⃣ FINAL HEALTH SUMMARY';
END $$;

WITH health_check AS (
    SELECT 
        (SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'public' AND table_name IN ('profiles', 'ai_agents', 'deployed_agents', 'chat_conversations', 'user_analytics', 'purchases', 'error_reports')) as tables_count,
        (SELECT COUNT(*) FROM pg_policies WHERE schemaname = 'public') as policies_count,
        (SELECT COUNT(*) FROM information_schema.triggers WHERE trigger_schema = 'public') as triggers_count,
        (SELECT COUNT(*) FROM information_schema.routines WHERE routine_schema = 'public' AND routine_name IN ('handle_new_user', 'handle_updated_at', 'update_user_analytics')) as functions_count,
        (SELECT COUNT(*) FROM public.ai_agents WHERE status = 'active' AND user_id IS NULL) as sample_agents_count
)
SELECT 
    '🏥 DATABASE HEALTH REPORT' as report_title,
    tables_count as tables_created,
    policies_count as rls_policies,
    triggers_count as active_triggers,
    functions_count as custom_functions,
    sample_agents_count as sample_agents,
    CASE 
        WHEN tables_count = 7 AND sample_agents_count >= 10
        THEN '✅ EXCELLENT - All systems operational'
        WHEN tables_count = 7 AND sample_agents_count >= 5
        THEN '⚠️ GOOD - Minor issues detected'
        ELSE '❌ NEEDS ATTENTION - Critical components missing'
    END as overall_health,
    NOW() as checked_at
FROM health_check;

DO $$
BEGIN
    RAISE NOTICE '🎉 DATABASE VERIFICATION COMPLETE!';
END $$;
