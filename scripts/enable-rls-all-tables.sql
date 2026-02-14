-- ===== PHASE 3: ENABLE ROW-LEVEL SECURITY (RLS) ON ALL 27 TABLES =====
-- This script enables RLS on all tables and creates proper access control policies
-- Purpose: Ensure users can only see/modify their own data, improving both security and performance

-- ===== USER-SCOPED TABLES (16 tables) =====
-- These tables store user-specific data and should enforce user_id ownership checks

-- 1. profiles - User profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS profiles_select ON public.profiles;
DROP POLICY IF EXISTS profiles_insert ON public.profiles;
DROP POLICY IF EXISTS profiles_update ON public.profiles;
DROP POLICY IF EXISTS profiles_delete ON public.profiles;

CREATE POLICY profiles_select ON public.profiles FOR SELECT
  USING (auth.uid() = id);
CREATE POLICY profiles_insert ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);
CREATE POLICY profiles_update ON public.profiles FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);
CREATE POLICY profiles_delete ON public.profiles FOR DELETE
  USING (auth.uid() = id);

-- 2. user_analytics - User analytics data
ALTER TABLE public.user_analytics ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS user_analytics_select ON public.user_analytics;
DROP POLICY IF EXISTS user_analytics_insert ON public.user_analytics;
DROP POLICY IF EXISTS user_analytics_update ON public.user_analytics;

CREATE POLICY user_analytics_select ON public.user_analytics FOR SELECT
  USING (auth.uid() = user_id);
CREATE POLICY user_analytics_insert ON public.user_analytics FOR INSERT
  WITH CHECK (auth.uid() = user_id);
CREATE POLICY user_analytics_update ON public.user_analytics FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 3. user_preferences - User preferences
ALTER TABLE public.user_preferences ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS user_preferences_select ON public.user_preferences;
DROP POLICY IF EXISTS user_preferences_insert ON public.user_preferences;
DROP POLICY IF EXISTS user_preferences_update ON public.user_preferences;

CREATE POLICY user_preferences_select ON public.user_preferences FOR SELECT
  USING (auth.uid() = user_id);
CREATE POLICY user_preferences_insert ON public.user_preferences FOR INSERT
  WITH CHECK (auth.uid() = user_id);
CREATE POLICY user_preferences_update ON public.user_preferences FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 4. payments - Payment records
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS payments_select ON public.payments;
DROP POLICY IF EXISTS payments_insert ON public.payments;

CREATE POLICY payments_select ON public.payments FOR SELECT
  USING (auth.uid() = user_id);
CREATE POLICY payments_insert ON public.payments FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- 5. subscriptions - User subscriptions
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS subscriptions_select ON public.subscriptions;
DROP POLICY IF EXISTS subscriptions_insert ON public.subscriptions;
DROP POLICY IF EXISTS subscriptions_update ON public.subscriptions;

CREATE POLICY subscriptions_select ON public.subscriptions FOR SELECT
  USING (auth.uid() = user_id);
CREATE POLICY subscriptions_insert ON public.subscriptions FOR INSERT
  WITH CHECK (auth.uid() = user_id);
CREATE POLICY subscriptions_update ON public.subscriptions FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 6. purchases - User purchases
ALTER TABLE public.purchases ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS purchases_select ON public.purchases;
DROP POLICY IF EXISTS purchases_insert ON public.purchases;

CREATE POLICY purchases_select ON public.purchases FOR SELECT
  USING (auth.uid() = user_id);
CREATE POLICY purchases_insert ON public.purchases FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- 7. payment_methods - User payment methods
ALTER TABLE public.payment_methods ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS payment_methods_select ON public.payment_methods;
DROP POLICY IF EXISTS payment_methods_insert ON public.payment_methods;
DROP POLICY IF EXISTS payment_methods_update ON public.payment_methods;
DROP POLICY IF EXISTS payment_methods_delete ON public.payment_methods;

CREATE POLICY payment_methods_select ON public.payment_methods FOR SELECT
  USING (auth.uid() = user_id);
CREATE POLICY payment_methods_insert ON public.payment_methods FOR INSERT
  WITH CHECK (auth.uid() = user_id);
CREATE POLICY payment_methods_update ON public.payment_methods FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
CREATE POLICY payment_methods_delete ON public.payment_methods FOR DELETE
  USING (auth.uid() = user_id);

-- 8. ai_systems - User AI systems
ALTER TABLE public.ai_systems ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS ai_systems_select ON public.ai_systems;
DROP POLICY IF EXISTS ai_systems_insert ON public.ai_systems;
DROP POLICY IF EXISTS ai_systems_update ON public.ai_systems;
DROP POLICY IF EXISTS ai_systems_delete ON public.ai_systems;

CREATE POLICY ai_systems_select ON public.ai_systems FOR SELECT
  USING (auth.uid() = user_id);
CREATE POLICY ai_systems_insert ON public.ai_systems FOR INSERT
  WITH CHECK (auth.uid() = user_id);
CREATE POLICY ai_systems_update ON public.ai_systems FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
CREATE POLICY ai_systems_delete ON public.ai_systems FOR DELETE
  USING (auth.uid() = user_id);

-- 9. ai_agents - User AI agents
ALTER TABLE public.ai_agents ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS ai_agents_select ON public.ai_agents;
DROP POLICY IF EXISTS ai_agents_insert ON public.ai_agents;
DROP POLICY IF EXISTS ai_agents_update ON public.ai_agents;
DROP POLICY IF EXISTS ai_agents_delete ON public.ai_agents;

CREATE POLICY ai_agents_select ON public.ai_agents FOR SELECT
  USING (auth.uid() = user_id);
CREATE POLICY ai_agents_insert ON public.ai_agents FOR INSERT
  WITH CHECK (auth.uid() = user_id);
CREATE POLICY ai_agents_update ON public.ai_agents FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
CREATE POLICY ai_agents_delete ON public.ai_agents FOR DELETE
  USING (auth.uid() = user_id);

-- 10. deployed_agents - User deployed agents
ALTER TABLE public.deployed_agents ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS deployed_agents_select ON public.deployed_agents;
DROP POLICY IF EXISTS deployed_agents_insert ON public.deployed_agents;
DROP POLICY IF EXISTS deployed_agents_update ON public.deployed_agents;

CREATE POLICY deployed_agents_select ON public.deployed_agents FOR SELECT
  USING (auth.uid() = user_id);
CREATE POLICY deployed_agents_insert ON public.deployed_agents FOR INSERT
  WITH CHECK (auth.uid() = user_id);
CREATE POLICY deployed_agents_update ON public.deployed_agents FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 11. living_agents - User living agents
ALTER TABLE public.living_agents ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS living_agents_select ON public.living_agents;
DROP POLICY IF EXISTS living_agents_insert ON public.living_agents;
DROP POLICY IF EXISTS living_agents_update ON public.living_agents;
DROP POLICY IF EXISTS living_agents_delete ON public.living_agents;

CREATE POLICY living_agents_select ON public.living_agents FOR SELECT
  USING (auth.uid() = user_id);
CREATE POLICY living_agents_insert ON public.living_agents FOR INSERT
  WITH CHECK (auth.uid() = user_id);
CREATE POLICY living_agents_update ON public.living_agents FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
CREATE POLICY living_agents_delete ON public.living_agents FOR DELETE
  USING (auth.uid() = user_id);

-- 12. living_agent_sessions - User living agent sessions
ALTER TABLE public.living_agent_sessions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS living_agent_sessions_select ON public.living_agent_sessions;
DROP POLICY IF EXISTS living_agent_sessions_insert ON public.living_agent_sessions;
DROP POLICY IF EXISTS living_agent_sessions_update ON public.living_agent_sessions;

CREATE POLICY living_agent_sessions_select ON public.living_agent_sessions FOR SELECT
  USING (auth.uid() = user_id);
CREATE POLICY living_agent_sessions_insert ON public.living_agent_sessions FOR INSERT
  WITH CHECK (auth.uid() = user_id);
CREATE POLICY living_agent_sessions_update ON public.living_agent_sessions FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 13. chat_conversations - User chat conversations
ALTER TABLE public.chat_conversations ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS chat_conversations_select ON public.chat_conversations;
DROP POLICY IF EXISTS chat_conversations_insert ON public.chat_conversations;
DROP POLICY IF EXISTS chat_conversations_update ON public.chat_conversations;

CREATE POLICY chat_conversations_select ON public.chat_conversations FOR SELECT
  USING (auth.uid() = user_id);
CREATE POLICY chat_conversations_insert ON public.chat_conversations FOR INSERT
  WITH CHECK (auth.uid() = user_id);
CREATE POLICY chat_conversations_update ON public.chat_conversations FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 14. orchestrator_conversations - User orchestrator conversations
ALTER TABLE public.orchestrator_conversations ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS orchestrator_conversations_select ON public.orchestrator_conversations;
DROP POLICY IF EXISTS orchestrator_conversations_insert ON public.orchestrator_conversations;
DROP POLICY IF EXISTS orchestrator_conversations_update ON public.orchestrator_conversations;

CREATE POLICY orchestrator_conversations_select ON public.orchestrator_conversations FOR SELECT
  USING (auth.uid() = user_id);
CREATE POLICY orchestrator_conversations_insert ON public.orchestrator_conversations FOR INSERT
  WITH CHECK (auth.uid() = user_id);
CREATE POLICY orchestrator_conversations_update ON public.orchestrator_conversations FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 15. error_reports - User error reports
ALTER TABLE public.error_reports ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS error_reports_select ON public.error_reports;
DROP POLICY IF EXISTS error_reports_insert ON public.error_reports;

CREATE POLICY error_reports_select ON public.error_reports FOR SELECT
  USING (auth.uid() = user_id);
CREATE POLICY error_reports_insert ON public.error_reports FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- 16. user_sessions - User sessions (user_id based)
ALTER TABLE public.user_sessions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS user_sessions_select ON public.user_sessions;
DROP POLICY IF EXISTS user_sessions_insert ON public.user_sessions;

CREATE POLICY user_sessions_select ON public.user_sessions FOR SELECT
  USING (auth.uid() = user_id);
CREATE POLICY user_sessions_insert ON public.user_sessions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- ===== SESSION-SCOPED TABLES (6 tables) =====
-- These tables store analytics/tracking data that should be publicly readable but controlled for writing

-- 17. conversion_events - Conversion events (analytics)
ALTER TABLE public.conversion_events ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS conversion_events_select ON public.conversion_events;
DROP POLICY IF EXISTS conversion_events_insert ON public.conversion_events;

CREATE POLICY conversion_events_select ON public.conversion_events FOR SELECT
  USING (true);
CREATE POLICY conversion_events_insert ON public.conversion_events FOR INSERT
  WITH CHECK (true);

-- 18. conversions - Conversions (analytics)
ALTER TABLE public.conversions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS conversions_select ON public.conversions;
DROP POLICY IF EXISTS conversions_insert ON public.conversions;

CREATE POLICY conversions_select ON public.conversions FOR SELECT
  USING (true);
CREATE POLICY conversions_insert ON public.conversions FOR INSERT
  WITH CHECK (true);

-- 19. page_views - Page views (analytics)
ALTER TABLE public.page_views ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS page_views_select ON public.page_views;
DROP POLICY IF EXISTS page_views_insert ON public.page_views;

CREATE POLICY page_views_select ON public.page_views FOR SELECT
  USING (true);
CREATE POLICY page_views_insert ON public.page_views FOR INSERT
  WITH CHECK (true);

-- 20. user_events - User events (analytics)
ALTER TABLE public.user_events ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS user_events_select ON public.user_events;
DROP POLICY IF EXISTS user_events_insert ON public.user_events;

CREATE POLICY user_events_select ON public.user_events FOR SELECT
  USING (true);
CREATE POLICY user_events_insert ON public.user_events FOR INSERT
  WITH CHECK (true);

-- 21. session_stats - Session stats (analytics)
ALTER TABLE public.session_stats ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS session_stats_select ON public.session_stats;
DROP POLICY IF EXISTS session_stats_insert ON public.session_stats;

CREATE POLICY session_stats_select ON public.session_stats FOR SELECT
  USING (true);
CREATE POLICY session_stats_insert ON public.session_stats FOR INSERT
  WITH CHECK (true);

-- 22. heatmap_data - Heatmap data (analytics)
ALTER TABLE public.heatmap_data ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS heatmap_data_select ON public.heatmap_data;
DROP POLICY IF EXISTS heatmap_data_insert ON public.heatmap_data;

CREATE POLICY heatmap_data_select ON public.heatmap_data FOR SELECT
  USING (true);
CREATE POLICY heatmap_data_insert ON public.heatmap_data FOR INSERT
  WITH CHECK (true);

-- ===== SYSTEM/REFERENCE TABLES (5 tables) =====
-- These tables store system/reference data that should be publicly readable

-- 23. agent_interactions - Agent interactions (reference)
ALTER TABLE public.agent_interactions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS agent_interactions_select ON public.agent_interactions;

CREATE POLICY agent_interactions_select ON public.agent_interactions FOR SELECT
  USING (true);

-- 24. agent_interactions_between - Agent interactions between (reference)
ALTER TABLE public.agent_interactions_between ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS agent_interactions_between_select ON public.agent_interactions_between;

CREATE POLICY agent_interactions_between_select ON public.agent_interactions_between FOR SELECT
  USING (true);

-- 25. agent_reflections - Agent reflections (reference)
ALTER TABLE public.agent_reflections ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS agent_reflections_select ON public.agent_reflections;

CREATE POLICY agent_reflections_select ON public.agent_reflections FOR SELECT
  USING (true);

-- 26. personality_evolution - Personality evolution (reference)
ALTER TABLE public.personality_evolution ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS personality_evolution_select ON public.personality_evolution;

CREATE POLICY personality_evolution_select ON public.personality_evolution FOR SELECT
  USING (true);

-- 27. living_agent_archetypes - Living agent archetypes (reference)
ALTER TABLE public.living_agent_archetypes ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS living_agent_archetypes_select ON public.living_agent_archetypes;

CREATE POLICY living_agent_archetypes_select ON public.living_agent_archetypes FOR SELECT
  USING (true);

-- ===== VERIFICATION =====
-- List all tables with RLS status
SELECT 
  schemaname,
  tablename,
  rowsecurity
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY tablename;

-- Count RLS policies per table
SELECT
  schemaname,
  tablename,
  COUNT(*) as policy_count
FROM pg_policies
WHERE schemaname = 'public'
GROUP BY schemaname, tablename
ORDER BY tablename;
