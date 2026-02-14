-- ===== PHASE 2: ADD PERFORMANCE INDEXES =====
-- This script adds 30+ indexes to optimize query performance on high-traffic tables
-- Expected improvement: 50-100x faster queries on indexed columns

-- ===== HIGH-TRAFFIC ANALYTICS TABLES (Priority 1 - CRITICAL) =====

-- conversion_events indexes
CREATE INDEX IF NOT EXISTS idx_conversion_events_user_id_created ON public.conversion_events(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_conversion_events_session_id_created ON public.conversion_events(session_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_conversion_events_type_created ON public.conversion_events(conversion_type, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_conversion_events_created ON public.conversion_events(created_at DESC);

-- user_events indexes
CREATE INDEX IF NOT EXISTS idx_user_events_user_id_created ON public.user_events(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_user_events_session_id_created ON public.user_events(session_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_user_events_type_created ON public.user_events(event_type, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_user_events_created ON public.user_events(created_at DESC);

-- page_views indexes
CREATE INDEX IF NOT EXISTS idx_page_views_user_id_created ON public.page_views(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_page_views_session_id_created ON public.page_views(session_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_page_views_created ON public.page_views(created_at DESC);

-- user_sessions indexes
CREATE INDEX IF NOT EXISTS idx_user_sessions_user_id_created ON public.user_sessions(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_user_sessions_created ON public.user_sessions(created_at DESC);

-- session_stats indexes
CREATE INDEX IF NOT EXISTS idx_session_stats_session_id_created ON public.session_stats(session_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_session_stats_created ON public.session_stats(created_at DESC);

-- heatmap_data indexes
CREATE INDEX IF NOT EXISTS idx_heatmap_data_session_id_created ON public.heatmap_data(session_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_heatmap_data_page_url ON public.heatmap_data(page_url);

-- conversions indexes
CREATE INDEX IF NOT EXISTS idx_conversions_session_id_created ON public.conversions(session_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_conversions_type_created ON public.conversions(conversion_type, created_at DESC);

-- ===== USER/PROFILE TABLES (Priority 2 - HIGH) =====

-- profiles indexes
CREATE INDEX IF NOT EXISTS idx_profiles_email ON public.profiles(email);
CREATE INDEX IF NOT EXISTS idx_profiles_created ON public.profiles(created_at DESC);

-- payments indexes
CREATE INDEX IF NOT EXISTS idx_payments_user_id_created ON public.payments(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_payments_status_user ON public.payments(status, user_id);

-- subscriptions indexes
CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id_created ON public.subscriptions(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_subscriptions_status ON public.subscriptions(status);
CREATE INDEX IF NOT EXISTS idx_subscriptions_current_period ON public.subscriptions(current_period_end);

-- purchases indexes
CREATE INDEX IF NOT EXISTS idx_purchases_user_id_created ON public.purchases(user_id, created_at DESC);

-- payment_methods indexes
CREATE INDEX IF NOT EXISTS idx_payment_methods_user_id ON public.payment_methods(user_id);

-- ===== AI/AGENT TABLES (Priority 3 - MEDIUM) =====

-- ai_systems indexes
CREATE INDEX IF NOT EXISTS idx_ai_systems_user_id_status ON public.ai_systems(user_id, status);
CREATE INDEX IF NOT EXISTS idx_ai_systems_status_created ON public.ai_systems(status, created_at DESC);

-- ai_agents indexes
CREATE INDEX IF NOT EXISTS idx_ai_agents_user_id_status ON public.ai_agents(user_id, status);

-- deployed_agents indexes
CREATE INDEX IF NOT EXISTS idx_deployed_agents_user_id_status ON public.deployed_agents(user_id, status);

-- living_agents indexes
CREATE INDEX IF NOT EXISTS idx_living_agents_user_id_status ON public.living_agents(user_id, status);
CREATE INDEX IF NOT EXISTS idx_living_agents_created ON public.living_agents(created_at DESC);

-- living_agent_sessions indexes
CREATE INDEX IF NOT EXISTS idx_living_agent_sessions_user_id ON public.living_agent_sessions(user_id);

-- chat_conversations indexes
CREATE INDEX IF NOT EXISTS idx_chat_conversations_user_id_created ON public.chat_conversations(user_id, created_at DESC);

-- orchestrator_conversations indexes
CREATE INDEX IF NOT EXISTS idx_orchestrator_conversations_user_id_created ON public.orchestrator_conversations(user_id, created_at DESC);

-- ===== SYSTEM/REFERENCE TABLES (Priority 4 - LOW) =====

-- agent_interactions indexes
CREATE INDEX IF NOT EXISTS idx_agent_interactions_created ON public.agent_interactions(created_at DESC);

-- agent_interactions_between indexes
CREATE INDEX IF NOT EXISTS idx_agent_interactions_between_created ON public.agent_interactions_between(created_at DESC);

-- agent_reflections indexes
CREATE INDEX IF NOT EXISTS idx_agent_reflections_created ON public.agent_reflections(created_at DESC);

-- personality_evolution indexes
CREATE INDEX IF NOT EXISTS idx_personality_evolution_created ON public.personality_evolution(created_at DESC);

-- living_agent_archetypes indexes
CREATE INDEX IF NOT EXISTS idx_living_agent_archetypes_created ON public.living_agent_archetypes(created_at DESC);

-- error_reports indexes
CREATE INDEX IF NOT EXISTS idx_error_reports_user_id_created ON public.error_reports(user_id, created_at DESC);

-- ===== ANALYZE ALL TABLES FOR QUERY PLANNER OPTIMIZATION =====
-- This updates statistics used by PostgreSQL query planner for optimal execution plans

ANALYZE public.conversion_events;
ANALYZE public.user_events;
ANALYZE public.page_views;
ANALYZE public.user_sessions;
ANALYZE public.session_stats;
ANALYZE public.heatmap_data;
ANALYZE public.conversions;
ANALYZE public.profiles;
ANALYZE public.payments;
ANALYZE public.subscriptions;
ANALYZE public.purchases;
ANALYZE public.payment_methods;
ANALYZE public.ai_systems;
ANALYZE public.ai_agents;
ANALYZE public.deployed_agents;
ANALYZE public.living_agents;
ANALYZE public.living_agent_sessions;
ANALYZE public.chat_conversations;
ANALYZE public.orchestrator_conversations;
ANALYZE public.agent_interactions;
ANALYZE public.agent_interactions_between;
ANALYZE public.agent_reflections;
ANALYZE public.personality_evolution;
ANALYZE public.living_agent_archetypes;
ANALYZE public.error_reports;

-- ===== VERIFY INDEX CREATION =====
-- List all created indexes
SELECT 
  schemaname,
  tablename,
  indexname,
  indexdef
FROM pg_indexes 
WHERE schemaname = 'public' 
AND indexname LIKE 'idx_%'
ORDER BY tablename, indexname;
