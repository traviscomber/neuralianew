-- Test: Just the RLS policies that should work
-- These tables have user_id column

-- ai_agents
CREATE POLICY "Users can view own agents"
  ON public.ai_agents FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create agents"
  ON public.ai_agents FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- ai_systems  
CREATE POLICY "Users can view own systems"
  ON public.ai_systems FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create systems"
  ON public.ai_systems FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- chat_conversations
CREATE POLICY "Users can view own conversations"
  ON public.chat_conversations FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create conversations"
  ON public.chat_conversations FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- deployed_agents
CREATE POLICY "Users can view own deployed agents"
  ON public.deployed_agents FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create deployed agents"
  ON public.deployed_agents FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- error_reports
CREATE POLICY "Users can view own error reports"
  ON public.error_reports FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create error reports"
  ON public.error_reports FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- orchestrator_conversations
CREATE POLICY "Users can view own orchestrator conversations"
  ON public.orchestrator_conversations FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create orchestrator conversations"
  ON public.orchestrator_conversations FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- payment_methods
CREATE POLICY "Users can view own payment methods"
  ON public.payment_methods FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create payment methods"
  ON public.payment_methods FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- payments
CREATE POLICY "Users can view own payments"
  ON public.payments FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create payments"
  ON public.payments FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- purchases
CREATE POLICY "Users can view own purchases"
  ON public.purchases FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create purchases"
  ON public.purchases FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- subscriptions
CREATE POLICY "Users can view own subscriptions"
  ON public.subscriptions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create subscriptions"
  ON public.subscriptions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- user_analytics
CREATE POLICY "Users can view own analytics"
  ON public.user_analytics FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create analytics"
  ON public.user_analytics FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- user_preferences
CREATE POLICY "Users can view own preferences"
  ON public.user_preferences FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create preferences"
  ON public.user_preferences FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- profiles (has id column, not user_id)
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- ============================================
-- PERFORMANCE INDEXES
-- ============================================

CREATE INDEX IF NOT EXISTS idx_conversion_events_user_id ON public.conversion_events(user_id);
CREATE INDEX IF NOT EXISTS idx_conversion_events_session_id ON public.conversion_events(session_id);
CREATE INDEX IF NOT EXISTS idx_conversion_events_created_at ON public.conversion_events(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_page_views_user_id ON public.page_views(user_id);
CREATE INDEX IF NOT EXISTS idx_page_views_session_id ON public.page_views(session_id);
CREATE INDEX IF NOT EXISTS idx_page_views_created_at ON public.page_views(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_user_events_user_id ON public.user_events(user_id);
CREATE INDEX IF NOT EXISTS idx_user_events_session_id ON public.user_events(session_id);
CREATE INDEX IF NOT EXISTS idx_user_events_created_at ON public.user_events(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_agent_interactions_agent_id ON public.agent_interactions(agent_id);
CREATE INDEX IF NOT EXISTS idx_agent_interactions_created_at ON public.agent_interactions(created_at DESC);

CREATE INDEX IF NOT EXISTS idx_living_agent_sessions_agent_id ON public.living_agent_sessions(agent_id);
CREATE INDEX IF NOT EXISTS idx_living_agent_sessions_user_id ON public.living_agent_sessions(user_id);

CREATE INDEX IF NOT EXISTS idx_user_sessions_user_id ON public.user_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_user_sessions_session_id ON public.user_sessions(session_id);

CREATE INDEX IF NOT EXISTS idx_user_analytics_user_id ON public.user_analytics(user_id);
CREATE INDEX IF NOT EXISTS idx_living_agents_user_id ON public.living_agents(user_id);
CREATE INDEX IF NOT EXISTS idx_ai_systems_user_id ON public.ai_systems(user_id);
CREATE INDEX IF NOT EXISTS idx_payments_user_id ON public.payments(user_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id ON public.subscriptions(user_id);
