-- N3uralia Database Security & Performance Audit Fix
-- This script addresses:
-- 1. Security issues: role mutable search_path vulnerabilities
-- 2. Performance issues: slow queries and missing indexes
-- 3. RLS policy gaps on critical tables

-- ============================================================================
-- SECURITY FIXES: Remove role mutable search_path vulnerability
-- ============================================================================
-- The issue: Functions with "role mutable search_path" allow privilege escalation
-- Fix: Redefine functions with SECURITY INVOKER (default) or add IMMUTABLE/STABLE

ALTER FUNCTION public.mark_conversion(uuid, text, numeric, jsonb) SECURITY INVOKER;
ALTER FUNCTION public.update_conversion_flag(uuid, boolean) SECURITY INVOKER;
ALTER FUNCTION public.update_page_view_count(text) SECURITY INVOKER;
ALTER FUNCTION public.handle_agent_analytics(uuid, jsonb) SECURITY INVOKER;
ALTER FUNCTION public.get_analytics_summary(uuid, date, date) SECURITY INVOKER;
ALTER FUNCTION public.get_conversion_funnel(uuid, date, date) SECURITY INVOKER;

-- ============================================================================
-- PERFORMANCE FIXES: Add critical indexes for slow queries
-- ============================================================================

-- Index for pg_timezone_names query (0.24s, 13 calls)
-- This is a system table, but we can optimize by using timezone_name() function
-- No action needed - this is system catalog

-- Index for conversion events queries
CREATE INDEX IF NOT EXISTS idx_conversions_created_at ON conversions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_conversions_user_session ON conversions(user_id, session_id);
CREATE INDEX IF NOT EXISTS idx_conversion_events_created_at ON conversion_events(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_conversion_events_user_id ON conversion_events(user_id);

-- Index for page views queries
CREATE INDEX IF NOT EXISTS idx_page_views_created_at ON page_views(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_page_views_session_id ON page_views(session_id);
CREATE INDEX IF NOT EXISTS idx_page_views_user_id ON page_views(user_id);

-- Index for user events queries
CREATE INDEX IF NOT EXISTS idx_user_events_created_at ON user_events(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_user_events_user_session ON user_events(user_id, session_id);

-- Index for agent interactions
CREATE INDEX IF NOT EXISTS idx_agent_interactions_created_at ON agent_interactions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_agent_interactions_agent_id ON agent_interactions(agent_id);

-- Index for session stats
CREATE INDEX IF NOT EXISTS idx_session_stats_created_at ON session_stats(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_session_stats_session_id ON session_stats(session_id);

-- ============================================================================
-- RLS SECURITY ENHANCEMENTS: Add missing policies on critical tables
-- ============================================================================

-- ai_agents table - Add user ownership RLS
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'ai_agents' AND policyname = 'Users can view own agents'
  ) THEN
    CREATE POLICY "Users can view own agents" ON public.ai_agents
      FOR SELECT USING (user_id = auth.uid());
  END IF;
END
$$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'ai_agents' AND policyname = 'Users can create agents'
  ) THEN
    CREATE POLICY "Users can create agents" ON public.ai_agents
      FOR INSERT WITH CHECK (user_id = auth.uid());
  END IF;
END
$$;

-- ai_systems table - Add user ownership RLS
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'ai_systems' AND policyname = 'Users can view own systems'
  ) THEN
    CREATE POLICY "Users can view own systems" ON public.ai_systems
      FOR SELECT USING (user_id = auth.uid());
  END IF;
END
$$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'ai_systems' AND policyname = 'Users can create systems'
  ) THEN
    CREATE POLICY "Users can create systems" ON public.ai_systems
      FOR INSERT WITH CHECK (user_id = auth.uid());
  END IF;
END
$$;

-- chat_conversations table - Add user ownership RLS
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'chat_conversations' AND policyname = 'Users can view own conversations'
  ) THEN
    CREATE POLICY "Users can view own conversations" ON public.chat_conversations
      FOR SELECT USING (user_id = auth.uid());
  END IF;
END
$$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'chat_conversations' AND policyname = 'Users can create conversations'
  ) THEN
    CREATE POLICY "Users can create conversations" ON public.chat_conversations
      FOR INSERT WITH CHECK (user_id = auth.uid());
  END IF;
END
$$;

-- deployed_agents table - Add user ownership RLS
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'deployed_agents' AND policyname = 'Users can view own deployed agents'
  ) THEN
    CREATE POLICY "Users can view own deployed agents" ON public.deployed_agents
      FOR SELECT USING (user_id = auth.uid());
  END IF;
END
$$;

-- agent_interactions_between table - Add RLS for agent relationships
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'agent_interactions_between' AND policyname = 'Users can view interactions with own agents'
  ) THEN
    CREATE POLICY "Users can view interactions with own agents" ON public.agent_interactions_between
      FOR SELECT USING (
        agent_id_1 IN (SELECT id FROM public.living_agents WHERE user_id = auth.uid())
        OR agent_id_2 IN (SELECT id FROM public.living_agents WHERE user_id = auth.uid())
      );
  END IF;
END
$$;

-- orchestrator_conversations table - Add user ownership RLS
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'orchestrator_conversations' AND policyname = 'Users can view own orchestrator conversations'
  ) THEN
    CREATE POLICY "Users can view own orchestrator conversations" ON public.orchestrator_conversations
      FOR SELECT USING (user_id = auth.uid());
  END IF;
END
$$;

-- ============================================================================
-- PERFORMANCE OPTIMIZATION: Query optimization hints
-- ============================================================================

-- Vacuum and analyze all tables to update statistics
VACUUM ANALYZE;

-- ============================================================================
-- AUDIT: Verify all changes
-- ============================================================================

-- Check function volatility (should be SECURITY INVOKER or STABLE/IMMUTABLE)
SELECT 
  p.proname as function_name,
  p.prosecdef as is_security_definer,
  p.provolatile::text as volatility,
  n.nspname as schema_name
FROM pg_proc p
JOIN pg_namespace n ON p.pronamespace = n.oid
WHERE n.nspname = 'public' 
  AND p.proname IN (
    'mark_conversion',
    'update_conversion_flag',
    'update_page_view_count',
    'handle_agent_analytics',
    'get_analytics_summary',
    'get_conversion_funnel'
  )
ORDER BY p.proname;

-- Check all created indexes
SELECT
  t.tablename,
  i.indexname,
  ix.indisunique,
  ix.indisprimary
FROM pg_indexes i
JOIN pg_class ic ON ic.relname = i.indexname
JOIN pg_index ix ON ix.indexrelid = ic.oid
JOIN pg_class t ON t.oid = ix.indrelid
WHERE i.schemaname = 'public'
  AND i.indexname LIKE 'idx_%'
ORDER BY t.tablename, i.indexname;
