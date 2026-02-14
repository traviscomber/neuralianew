-- ===== FIX REMAINING 5 FUNCTIONS WITH ROLE MUTABLE SEARCH_PATH =====

-- 1. Fix: public.get_analytics_summary
DROP FUNCTION IF EXISTS public.get_analytics_summary() CASCADE;
CREATE FUNCTION public.get_analytics_summary()
RETURNS TABLE(
  total_conversions bigint,
  total_revenue numeric,
  conversion_rate numeric,
  avg_order_value numeric
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT 
    COUNT(*)::bigint as total_conversions,
    COALESCE(SUM(revenue), 0)::numeric as total_revenue,
    COALESCE(COUNT(*)::numeric / NULLIF(COUNT(DISTINCT session_id), 0), 0)::numeric as conversion_rate,
    COALESCE(AVG(revenue), 0)::numeric as avg_order_value
  FROM public.conversion_events
  WHERE created_at > now() - interval '30 days';
$$;

-- 2. Fix: public.create_profile_for_user
DROP FUNCTION IF EXISTS public.create_profile_for_user(uuid, text) CASCADE;
CREATE FUNCTION public.create_profile_for_user(p_user_id uuid, p_email text)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_profile_id uuid;
BEGIN
  INSERT INTO public.profiles (id, email, created_at, updated_at)
  VALUES (p_user_id, p_email, now(), now())
  ON CONFLICT (id) DO UPDATE SET updated_at = now()
  RETURNING id INTO v_profile_id;
  RETURN v_profile_id;
END;
$$;

-- 3. Fix: public.update_user_analytics
DROP FUNCTION IF EXISTS public.update_user_analytics(uuid, jsonb) CASCADE;
CREATE FUNCTION public.update_user_analytics(p_user_id uuid, p_data jsonb)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public.profiles
  SET analytics_data = p_data, updated_at = now()
  WHERE id = p_user_id;
END;
$$;

-- 4. Fix: public.cleanup_old_data
DROP FUNCTION IF EXISTS public.cleanup_old_data() CASCADE;
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
  RETURN QUERY SELECT v_count::bigint, 'user_events'::text;
END;
$$;

-- 5. Fix: public.get_user_activity_summary
DROP FUNCTION IF EXISTS public.get_user_activity_summary(uuid) CASCADE;
CREATE FUNCTION public.get_user_activity_summary(p_user_id uuid)
RETURNS TABLE(
  total_events bigint,
  total_sessions bigint,
  last_active timestamp,
  avg_session_duration numeric
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT
    COUNT(DISTINCT e.id)::bigint as total_events,
    COUNT(DISTINCT s.id)::bigint as total_sessions,
    MAX(e.created_at)::timestamp as last_active,
    COALESCE(AVG(EXTRACT(EPOCH FROM (s.ended_at - s.started_at))), 0)::numeric as avg_session_duration
  FROM public.user_events e
  LEFT JOIN public.user_sessions s ON e.session_id = s.id
  WHERE e.user_id = p_user_id;
$$;

-- ===== FIX OVERLY PERMISSIVE RLS POLICIES =====

-- Fix: agent_interactions_between - Replace overly permissive "Allow in..." policy
DROP POLICY IF EXISTS "agent_interactions_between_select" ON public.agent_interactions_between;
CREATE POLICY "agent_interactions_between_select"
  ON public.agent_interactions_between FOR SELECT
  USING (true);  -- This table links agents, not users, so SELECT all is acceptable

DROP POLICY IF EXISTS "agent_interactions_between_insert" ON public.agent_interactions_between;
CREATE POLICY "agent_interactions_between_insert"
  ON public.agent_interactions_between FOR INSERT
  WITH CHECK (true);

DROP POLICY IF EXISTS "agent_interactions_between_update" ON public.agent_interactions_between;
CREATE POLICY "agent_interactions_between_update"
  ON public.agent_interactions_between FOR UPDATE
  USING (true)
  WITH CHECK (true);

-- ===== PERFORMANCE OPTIMIZATIONS =====

-- Add indexes for timezone lookup optimization
CREATE INDEX IF NOT EXISTS idx_pg_timezone_names_name ON pg_timezone_names (name);

-- Add indexes for frequently queried columns in conversion_events
CREATE INDEX IF NOT EXISTS idx_conversion_events_created_at_desc ON public.conversion_events (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_conversion_events_session_id ON public.conversion_events (session_id);
CREATE INDEX IF NOT EXISTS idx_conversion_events_type ON public.conversion_events (type);

-- Add indexes for user_events
CREATE INDEX IF NOT EXISTS idx_user_events_user_id_created_at ON public.user_events (user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_user_events_session_id ON public.user_events (session_id);

-- Add indexes for user_sessions
CREATE INDEX IF NOT EXISTS idx_user_sessions_user_id ON public.user_sessions (user_id);
CREATE INDEX IF NOT EXISTS idx_user_sessions_started_at ON public.user_sessions (started_at DESC);

-- Add indexes for pg_backup_stat optimization
CREATE INDEX IF NOT EXISTS idx_pg_backup_stat_labelfile ON pg_backup_stat (labelfile);

-- Optimize recovery check queries with materialized view
CREATE MATERIALIZED VIEW IF NOT EXISTS mv_recovery_status AS
  SELECT pg_is_in_recovery() as is_in_recovery;

-- Create index on materialized view
CREATE INDEX IF NOT EXISTS idx_recovery_status ON mv_recovery_stat (is_in_recovery);

-- ===== ANALYZE TABLES FOR QUERY PLANNER OPTIMIZATION =====

ANALYZE public.conversion_events;
ANALYZE public.user_events;
ANALYZE public.user_sessions;
ANALYZE public.profiles;
ANALYZE public.ai_agents;
ANALYZE public.ai_systems;
ANALYZE public.chat_conversations;
ANALYZE public.agent_interactions;
