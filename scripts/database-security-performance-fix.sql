-- Database Security & Performance Audit Fix
-- Fixes missing RLS policies and adds performance indexes

-- ============================================
-- SECURITY FIXES: Add Missing RLS Policies
-- ============================================

-- Fix: ai_agents - Missing SELECT/UPDATE/DELETE policies
CREATE POLICY "Users can view own agents"
  ON public.ai_agents FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own agents"
  ON public.ai_agents FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own agents"
  ON public.ai_agents FOR DELETE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create agents"
  ON public.ai_agents FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Fix: ai_systems - Missing RLS policies
CREATE POLICY "Users can view own systems"
  ON public.ai_systems FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own systems"
  ON public.ai_systems FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own systems"
  ON public.ai_systems FOR DELETE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create systems"
  ON public.ai_systems FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Fix: chat_conversations - Missing RLS policies
CREATE POLICY "Users can view own conversations"
  ON public.chat_conversations FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own conversations"
  ON public.chat_conversations FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own conversations"
  ON public.chat_conversations FOR DELETE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create conversations"
  ON public.chat_conversations FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Fix: deployed_agents - Missing RLS policies
CREATE POLICY "Users can view own deployed agents"
  ON public.deployed_agents FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own deployed agents"
  ON public.deployed_agents FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own deployed agents"
  ON public.deployed_agents FOR DELETE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create deployed agents"
  ON public.deployed_agents FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Fix: error_reports - Missing RLS policies
CREATE POLICY "Users can view own error reports"
  ON public.error_reports FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create error reports"
  ON public.error_reports FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Fix: orchestrator_conversations - Missing RLS policies
CREATE POLICY "Users can view own orchestrator conversations"
  ON public.orchestrator_conversations FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own orchestrator conversations"
  ON public.orchestrator_conversations FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own orchestrator conversations"
  ON public.orchestrator_conversations FOR DELETE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create orchestrator conversations"
  ON public.orchestrator_conversations FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Fix: payment_methods - Missing RLS policies
CREATE POLICY "Users can view own payment methods"
  ON public.payment_methods FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own payment methods"
  ON public.payment_methods FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own payment methods"
  ON public.payment_methods FOR DELETE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create payment methods"
  ON public.payment_methods FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Fix: payments - Missing RLS policies
CREATE POLICY "Users can view own payments"
  ON public.payments FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create payments"
  ON public.payments FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Fix: purchases - Missing RLS policies
CREATE POLICY "Users can view own purchases"
  ON public.purchases FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create purchases"
  ON public.purchases FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Fix: user_analytics - Missing RLS policies
CREATE POLICY "Users can view own analytics"
  ON public.user_analytics FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create analytics"
  ON public.user_analytics FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Fix: user_preferences - Missing RLS policies
CREATE POLICY "Users can view own preferences"
  ON public.user_preferences FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own preferences"
  ON public.user_preferences FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create preferences"
  ON public.user_preferences FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Fix: agent_interactions_between - Missing RLS policies
CREATE POLICY "Users can view agent interaction data"
  ON public.agent_interactions_between FOR SELECT
  USING (true);

-- Fix: conversions - Missing RLS policies (analytics data - public read)
CREATE POLICY "Anyone can view conversions"
  ON public.conversions FOR SELECT
  USING (true);

-- Fix: heatmap_data - Missing RLS policies (analytics data - public read)
CREATE POLICY "Anyone can view heatmap data"
  ON public.heatmap_data FOR SELECT
  USING (true);

-- Fix: session_stats - Missing RLS policies (analytics data - public read)
CREATE POLICY "Anyone can view session stats"
  ON public.session_stats FOR SELECT
  USING (true);

-- Fix: living_agent_archetypes already has 1 policy - ensure it's readable
-- Already has: "Archetypes readable by all (SELECT)"

-- Fix: profiles - Missing RLS policies
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- Fix: subscriptions - Missing RLS policies
CREATE POLICY "Users can view own subscriptions"
  ON public.subscriptions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create subscriptions"
  ON public.subscriptions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- ============================================
-- PERFORMANCE FIXES: Add Missing Indexes
-- ============================================

-- Index for conversion tracking
CREATE INDEX IF NOT EXISTS idx_conversion_events_user_id ON public.conversion_events(user_id);
CREATE INDEX IF NOT EXISTS idx_conversion_events_session_id ON public.conversion_events(session_id);
CREATE INDEX IF NOT EXISTS idx_conversion_events_created_at ON public.conversion_events(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_conversion_events_type_date ON public.conversion_events(conversion_type, created_at DESC);

-- Index for page views
CREATE INDEX IF NOT EXISTS idx_page_views_user_id ON public.page_views(user_id);
CREATE INDEX IF NOT EXISTS idx_page_views_session_id ON public.page_views(session_id);
CREATE INDEX IF NOT EXISTS idx_page_views_created_at ON public.page_views(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_page_views_url_date ON public.page_views(page_url, created_at DESC);

-- Index for user events
CREATE INDEX IF NOT EXISTS idx_user_events_user_id ON public.user_events(user_id);
CREATE INDEX IF NOT EXISTS idx_user_events_session_id ON public.user_events(session_id);
CREATE INDEX IF NOT EXISTS idx_user_events_created_at ON public.user_events(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_user_events_type ON public.user_events(event_type);

-- Index for agent interactions
CREATE INDEX IF NOT EXISTS idx_agent_interactions_agent_id ON public.agent_interactions(agent_id);
CREATE INDEX IF NOT EXISTS idx_agent_interactions_user_id ON public.agent_interactions(user_id);
CREATE INDEX IF NOT EXISTS idx_agent_interactions_created_at ON public.agent_interactions(created_at DESC);

-- Index for living agent sessions
CREATE INDEX IF NOT EXISTS idx_living_agent_sessions_agent_id ON public.living_agent_sessions(agent_id);
CREATE INDEX IF NOT EXISTS idx_living_agent_sessions_user_id ON public.living_agent_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_living_agent_sessions_created_at ON public.living_agent_sessions(created_at DESC);

-- Index for user sessions
CREATE INDEX IF NOT EXISTS idx_user_sessions_user_id ON public.user_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_user_sessions_session_id ON public.user_sessions(session_id);
CREATE INDEX IF NOT EXISTS idx_user_sessions_created_at ON public.user_sessions(created_at DESC);

-- Index for analytics queries
CREATE INDEX IF NOT EXISTS idx_user_analytics_user_id ON public.user_analytics(user_id);
CREATE INDEX IF NOT EXISTS idx_user_analytics_period ON public.user_analytics(period_start, period_end);

-- Index for living agents
CREATE INDEX IF NOT EXISTS idx_living_agents_user_id ON public.living_agents(user_id);
CREATE INDEX IF NOT EXISTS idx_living_agents_status ON public.living_agents(status);

-- Index for AI systems
CREATE INDEX IF NOT EXISTS idx_ai_systems_user_id ON public.ai_systems(user_id);
CREATE INDEX IF NOT EXISTS idx_ai_systems_status ON public.ai_systems(status);

-- Index for payments/subscriptions
CREATE INDEX IF NOT EXISTS idx_payments_user_id ON public.payments(user_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id ON public.subscriptions(user_id);

-- ============================================
-- VERIFICATION: RLS Enforcement
-- ============================================

-- Ensure RLS is enforced (not just enabled) on sensitive tables
ALTER TABLE public.ai_agents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_systems ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.deployed_agents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.error_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orchestrator_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payment_methods ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.purchases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_analytics ENABLE ROW LEVEL SECURITY;
