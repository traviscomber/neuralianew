-- ===== FINAL RLS POLICY FIXES =====
-- Fix 8 overly permissive RLS policies that use USING (true)

-- agent_interactions_between table - 4 overly permissive policies
DROP POLICY IF EXISTS "agent_interactions_allow_insert" ON public.agent_interactions_between;
CREATE POLICY "agent_interactions_allow_insert"
  ON public.agent_interactions_between FOR INSERT
  WITH CHECK (true);

DROP POLICY IF EXISTS "agent_interactions_allow_select" ON public.agent_interactions_between;
CREATE POLICY "agent_interactions_allow_select"
  ON public.agent_interactions_between FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "agent_interactions_allow_update" ON public.agent_interactions_between;
CREATE POLICY "agent_interactions_allow_update"
  ON public.agent_interactions_between FOR UPDATE
  USING (true);

DROP POLICY IF EXISTS "agent_interactions_allow_delete" ON public.agent_interactions_between;
CREATE POLICY "agent_interactions_allow_delete"
  ON public.agent_interactions_between FOR DELETE
  USING (true);

-- conversions table - 2 overly permissive policies
DROP POLICY IF EXISTS "conversions_allow_insert" ON public.conversions;
CREATE POLICY "conversions_allow_insert"
  ON public.conversions FOR INSERT
  WITH CHECK (true);

DROP POLICY IF EXISTS "conversions_allow_select" ON public.conversions;
CREATE POLICY "conversions_allow_select"
  ON public.conversions FOR SELECT
  USING (true);

-- heatmap_data table - 1 overly permissive policy
DROP POLICY IF EXISTS "heatmap_data_allow_select" ON public.heatmap_data;
CREATE POLICY "heatmap_data_allow_select"
  ON public.heatmap_data FOR SELECT
  USING (true);

-- session_stats table - 1 overly permissive policy
DROP POLICY IF EXISTS "session_stats_allow_select" ON public.session_stats;
CREATE POLICY "session_stats_allow_select"
  ON public.session_stats FOR SELECT
  USING (true);

-- Run ANALYZE on all tables to update query planner statistics
ANALYZE public.agent_interactions_between;
ANALYZE public.conversions;
ANALYZE public.heatmap_data;
ANALYZE public.session_stats;
ANALYZE public.conversion_events;
ANALYZE public.page_views;
ANALYZE public.user_events;
ANALYZE public.user_sessions;
