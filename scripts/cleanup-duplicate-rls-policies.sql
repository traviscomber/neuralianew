-- ===== CLEANUP DUPLICATE RLS POLICIES =====
-- The problem: Many tables have 3-10 RLS policies doing the same thing
-- This causes: 14 security warnings + 8+ performance issues
-- Solution: Drop all policies and recreate ONE clean policy per operation (SELECT, INSERT, UPDATE, DELETE)

-- agent_interactions_between: Has 10 policies, consolidate to 3
DROP POLICY IF EXISTS "Allow viewing agent interactions" ON public.agent_interactions_between;
DROP POLICY IF EXISTS "agent_interactions_allow_update" ON public.agent_interactions_between;
DROP POLICY IF EXISTS "Allow updating agent interactions" ON public.agent_interactions_between;
DROP POLICY IF EXISTS "Allow inserting agent interactions" ON public.agent_interactions_between;
DROP POLICY IF EXISTS "agent_interactions_between_select" ON public.agent_interactions_between;
DROP POLICY IF EXISTS "agent_interactions_between_insert" ON public.agent_interactions_between;
DROP POLICY IF EXISTS "agent_interactions_between_update" ON public.agent_interactions_between;
DROP POLICY IF EXISTS "agent_interactions_allow_insert" ON public.agent_interactions_between;
DROP POLICY IF EXISTS "agent_interactions_allow_select" ON public.agent_interactions_between;
DROP POLICY IF EXISTS "agent_interactions_allow_delete" ON public.agent_interactions_between;

CREATE POLICY "agent_interactions_between_select" ON public.agent_interactions_between FOR SELECT USING (true);
CREATE POLICY "agent_interactions_between_insert" ON public.agent_interactions_between FOR INSERT WITH CHECK (true);
CREATE POLICY "agent_interactions_between_update" ON public.agent_interactions_between FOR UPDATE USING (true);

-- conversions: Has 5 policies, consolidate to 3
DROP POLICY IF EXISTS "Allow inserting conversions" ON public.conversions;
DROP POLICY IF EXISTS "conversions_allow_select" ON public.conversions;
DROP POLICY IF EXISTS "conversions_allow_insert" ON public.conversions;
DROP POLICY IF EXISTS "Allow viewing conversions" ON public.conversions;
DROP POLICY IF EXISTS "Allow updating conversions" ON public.conversions;

CREATE POLICY "conversions_select" ON public.conversions FOR SELECT USING (true);
CREATE POLICY "conversions_insert" ON public.conversions FOR INSERT WITH CHECK (true);
CREATE POLICY "conversions_update" ON public.conversions FOR UPDATE USING (true);

-- heatmap_data: Has 3 policies, consolidate to 2
DROP POLICY IF EXISTS "heatmap_data_allow_select" ON public.heatmap_data;
DROP POLICY IF EXISTS "Allow inserting heatmap data" ON public.heatmap_data;
DROP POLICY IF EXISTS "Allow viewing heatmap data" ON public.heatmap_data;

CREATE POLICY "heatmap_data_select" ON public.heatmap_data FOR SELECT USING (true);
CREATE POLICY "heatmap_data_insert" ON public.heatmap_data FOR INSERT WITH CHECK (true);

-- session_stats: Has 3 policies, consolidate to 2
DROP POLICY IF EXISTS "session_stats_allow_select" ON public.session_stats;
DROP POLICY IF EXISTS "Allow inserting session stats" ON public.session_stats;
DROP POLICY IF EXISTS "Allow viewing session stats" ON public.session_stats;

CREATE POLICY "session_stats_select" ON public.session_stats FOR SELECT USING (true);
CREATE POLICY "session_stats_insert" ON public.session_stats FOR INSERT WITH CHECK (true);

-- page_views: Has 2 policies, clean up naming
DROP POLICY IF EXISTS "page_views_select" ON public.page_views;
DROP POLICY IF EXISTS "page_views_insert" ON public.page_views;

CREATE POLICY "page_views_select" ON public.page_views FOR SELECT USING (auth.uid() = user_id OR user_id IS NULL);
CREATE POLICY "page_views_insert" ON public.page_views FOR INSERT WITH CHECK (true);

-- conversion_events: Has 2 policies, clean up naming
DROP POLICY IF EXISTS "conversion_events_insert" ON public.conversion_events;
DROP POLICY IF EXISTS "conversion_events_select" ON public.conversion_events;

CREATE POLICY "conversion_events_select" ON public.conversion_events FOR SELECT USING (auth.uid() = user_id OR user_id IS NULL);
CREATE POLICY "conversion_events_insert" ON public.conversion_events FOR INSERT WITH CHECK (true);

-- user_events: Has 2 policies, clean up naming
DROP POLICY IF EXISTS "user_events_select" ON public.user_events;
DROP POLICY IF EXISTS "user_events_insert" ON public.user_events;

CREATE POLICY "user_events_select" ON public.user_events FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "user_events_insert" ON public.user_events FOR INSERT WITH CHECK (true);

-- user_sessions: Has 2 policies, clean up naming
DROP POLICY IF EXISTS "user_sessions_select" ON public.user_sessions;
DROP POLICY IF EXISTS "user_sessions_insert" ON public.user_sessions;

CREATE POLICY "user_sessions_select" ON public.user_sessions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "user_sessions_insert" ON public.user_sessions FOR INSERT WITH CHECK (true);

-- ===== OPTIMIZE QUERY PERFORMANCE =====
ANALYZE public.agent_interactions_between;
ANALYZE public.conversions;
ANALYZE public.heatmap_data;
ANALYZE public.session_stats;
ANALYZE public.page_views;
ANALYZE public.conversion_events;
ANALYZE public.user_events;
ANALYZE public.user_sessions;
