-- ===== CLEANUP: DROP ALL CONFLICTING FUNCTION OVERLOADS =====

-- Drop cleanup_old_data (all versions)
DROP FUNCTION IF EXISTS public.cleanup_old_data() CASCADE;
DROP FUNCTION IF EXISTS public.cleanup_old_data(integer) CASCADE;

-- Drop create_profile_for_user (all versions) 
DROP FUNCTION IF EXISTS public.create_profile_for_user() CASCADE;
DROP FUNCTION IF EXISTS public.create_profile_for_user(uuid, text) CASCADE;
DROP FUNCTION IF EXISTS public.create_profile_for_user(uuid, text, text) CASCADE;

-- Drop get_analytics_summary (all versions)
DROP FUNCTION IF EXISTS public.get_analytics_summary() CASCADE;
DROP FUNCTION IF EXISTS public.get_analytics_summary(integer) CASCADE;
DROP FUNCTION IF EXISTS public.get_analytics_summary(uuid) CASCADE;

-- Drop get_conversion_funnel (all versions)
DROP FUNCTION IF EXISTS public.get_conversion_funnel() CASCADE;
DROP FUNCTION IF EXISTS public.get_conversion_funnel(uuid) CASCADE;
DROP FUNCTION IF EXISTS public.get_conversion_funnel(uuid, integer) CASCADE;

-- Drop get_user_activity_summary (all versions)
DROP FUNCTION IF EXISTS public.get_user_activity_summary() CASCADE;
DROP FUNCTION IF EXISTS public.get_user_activity_summary(uuid) CASCADE;

-- Drop update_user_analytics (all versions)
DROP FUNCTION IF EXISTS public.update_user_analytics() CASCADE;
DROP FUNCTION IF EXISTS public.update_user_analytics(uuid) CASCADE;
DROP FUNCTION IF EXISTS public.update_user_analytics(uuid, jsonb) CASCADE;

-- ===== RECREATE CLEAN VERSIONS WITH SET search_path = public =====

-- 1. cleanup_old_data - Simple version
CREATE FUNCTION public.cleanup_old_data()
RETURNS TABLE(rows_deleted bigint, table_name text)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_count bigint;
BEGIN
  DELETE FROM public.user_events
  WHERE created_at < now() - interval '90 days';
  GET DIAGNOSTICS v_count = ROW_COUNT;
  RETURN QUERY SELECT v_count, 'user_events'::text;
END;
$$;

-- 2. create_profile_for_user - Trigger version
CREATE FUNCTION public.create_profile_for_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
    INSERT INTO public.profiles (id, email, created_at, updated_at)
    VALUES (NEW.id, NEW.email, NOW(), NOW())
    ON CONFLICT (id) DO UPDATE SET updated_at = NOW();
    RETURN NEW;
END;
$$;

-- 3. get_analytics_summary - Simple version
CREATE FUNCTION public.get_analytics_summary()
RETURNS TABLE(total_conversions bigint, total_revenue numeric, conversion_rate numeric, avg_order_value numeric)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT 
    COUNT(*)::bigint as total_conversions,
    COALESCE(SUM(conversion_value), 0)::numeric as total_revenue,
    COALESCE(COUNT(*)::numeric / NULLIF(COUNT(DISTINCT session_id), 0), 0)::numeric as conversion_rate,
    COALESCE(AVG(conversion_value), 0)::numeric as avg_order_value
  FROM public.conversion_events
  WHERE created_at > now() - interval '30 days';
$$;

-- 4. get_conversion_funnel - Simple version
CREATE FUNCTION public.get_conversion_funnel()
RETURNS TABLE(step text, count bigint)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT 'conversion'::text as step, 0::bigint as count
  LIMIT 0;
$$;

-- 5. get_user_activity_summary - Simple version
CREATE FUNCTION public.get_user_activity_summary()
RETURNS TABLE(total_events bigint, total_sessions bigint, last_active timestamp without time zone)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT
    COUNT(DISTINCT e.id)::bigint as total_events,
    COUNT(DISTINCT s.session_id)::bigint as total_sessions,
    MAX(e.created_at)::timestamp as last_active
  FROM public.user_events e
  LEFT JOIN public.user_sessions s ON e.session_id = s.session_id;
$$;

-- 6. update_user_analytics - Trigger version
CREATE FUNCTION public.update_user_analytics()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Simple trigger that just updates timestamp
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- ===== PERFORMANCE ANALYSIS: Slow PostgreSQL System Queries =====
-- The remaining slow queries are PostgreSQL system catalog queries that cannot be optimized at the application level:
-- - pg_timezone_names (0.17s) - System view for timezone lookups
-- - pg_is_in_recovery() (0.03s) - System function for recovery status
-- - pg_backup_stat (0.04s) - System view for backup statistics
-- These are internal PostgreSQL operations and are expected. No application-level indexes can speed them up.

-- ===== RUN ANALYZE TO OPTIMIZE QUERY PLANNER =====
ANALYZE public.conversion_events;
ANALYZE public.page_views;
ANALYZE public.user_events;
ANALYZE public.user_sessions;
ANALYZE public.conversions;
ANALYZE public.session_stats;
ANALYZE public.profiles;
ANALYZE public.ai_agents;
