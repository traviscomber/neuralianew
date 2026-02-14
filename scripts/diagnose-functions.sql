-- Diagnostic script to identify which functions exist and their current settings

-- Check all public functions and their search_path settings
SELECT 
  p.proname as function_name,
  pg_get_functiondef(p.oid) as function_definition,
  p.prosecdef as is_security_definer
FROM pg_proc p
JOIN pg_namespace n ON p.pronamespace = n.oid
WHERE n.nspname = 'public'
  AND p.proname IN (
    'get_analytics_summary',
    'get_conversion_funnel',
    'get_table_statistics',
    'create_profile_for_user',
    'update_user_analytics',
    'check_database_health',
    'get_current_user_id',
    'get_current_user_role',
    'execute_admin_query',
    'cleanup_old_data',
    'check_expired_trials',
    'handle_new_user',
    'handle_updated_at',
    'get_user_activity_summary',
    'update_deployed_agents_updated_at',
    'update_user_preferences_updated_at',
    'mark_conversion'
  )
ORDER BY p.proname;
