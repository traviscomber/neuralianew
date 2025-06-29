-- Create functions and triggers for automation

-- Function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (
    id,
    email,
    full_name,
    subscription_plan,
    subscription_status,
    monthly_chat_limit,
    monthly_chats_used,
    ai_agents_limit,
    ai_agents_used,
    ai_systems_limit,
    ai_systems_used,
    email_notifications,
    marketing_emails,
    timezone,
    language,
    onboarding_completed,
    created_at,
    updated_at
  )
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    'free',
    'active',
    100,
    0,
    3,
    0,
    1,
    0,
    true,
    false,
    'UTC',
    'en',
    false,
    NOW(),
    NOW()
  );
  
  -- Create initial monthly analytics record
  INSERT INTO public.user_analytics (
    user_id,
    period_type,
    period_start,
    period_end,
    total_chats,
    total_messages,
    chat_types,
    avg_chat_duration_seconds,
    avg_satisfaction_rating,
    total_agents_created,
    total_agents_deployed,
    agent_types,
    avg_agent_satisfaction,
    total_systems_created,
    total_systems_deployed,
    total_system_executions,
    system_success_rate,
    total_logins,
    active_days,
    total_api_calls,
    data_processed_mb,
    avg_response_time_ms,
    total_errors,
    success_rate,
    feature_usage,
    created_at,
    updated_at
  )
  VALUES (
    NEW.id,
    'monthly',
    DATE_TRUNC('month', NOW())::DATE,
    (DATE_TRUNC('month', NOW()) + INTERVAL '1 month - 1 day')::DATE,
    0,
    0,
    '{}',
    0,
    0.00,
    0,
    0,
    '{}',
    0.00,
    0,
    0,
    0,
    100.00,
    1,
    1,
    0,
    0.00,
    0,
    0,
    100.00,
    '{}',
    NOW(),
    NOW()
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to handle updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Function to update user analytics when activities occur
CREATE OR REPLACE FUNCTION public.update_user_analytics()
RETURNS TRIGGER AS $$
DECLARE
  current_month_start DATE;
  current_month_end DATE;
BEGIN
  current_month_start := DATE_TRUNC('month', NOW())::DATE;
  current_month_end := (DATE_TRUNC('month', NOW()) + INTERVAL '1 month - 1 day')::DATE;
  
  -- Ensure monthly analytics record exists
  INSERT INTO public.user_analytics (
    user_id,
    period_type,
    period_start,
    period_end
  )
  VALUES (
    NEW.user_id,
    'monthly',
    current_month_start,
    current_month_end
  )
  ON CONFLICT (user_id, period_type, period_start) DO NOTHING;
  
  -- Update analytics based on table
  IF TG_TABLE_NAME = 'chat_conversations' THEN
    UPDATE public.user_analytics
    SET 
      total_chats = total_chats + 1,
      total_messages = total_messages + COALESCE(NEW.message_count, 0),
      updated_at = NOW()
    WHERE user_id = NEW.user_id 
      AND period_type = 'monthly' 
      AND period_start = current_month_start;
      
  ELSIF TG_TABLE_NAME = 'ai_agents' THEN
    UPDATE public.user_analytics
    SET 
      total_agents_created = total_agents_created + 1,
      total_agents_deployed = CASE 
        WHEN NEW.deployment_status = 'deployed' THEN total_agents_deployed + 1 
        ELSE total_agents_deployed 
      END,
      updated_at = NOW()
    WHERE user_id = NEW.user_id 
      AND period_type = 'monthly' 
      AND period_start = current_month_start;
      
  ELSIF TG_TABLE_NAME = 'ai_systems' THEN
    UPDATE public.user_analytics
    SET 
      total_systems_created = total_systems_created + 1,
      total_systems_deployed = CASE 
        WHEN NEW.deployment_status = 'deployed' THEN total_systems_deployed + 1 
        ELSE total_systems_deployed 
      END,
      updated_at = NOW()
    WHERE user_id = NEW.user_id 
      AND period_type = 'monthly' 
      AND period_start = current_month_start;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user registration
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create triggers for updated_at timestamps
DROP TRIGGER IF EXISTS handle_updated_at_profiles ON public.profiles;
CREATE TRIGGER handle_updated_at_profiles
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS handle_updated_at_ai_agents ON public.ai_agents;
CREATE TRIGGER handle_updated_at_ai_agents
  BEFORE UPDATE ON public.ai_agents
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS handle_updated_at_ai_systems ON public.ai_systems;
CREATE TRIGGER handle_updated_at_ai_systems
  BEFORE UPDATE ON public.ai_systems
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS handle_updated_at_chat_conversations ON public.chat_conversations;
CREATE TRIGGER handle_updated_at_chat_conversations
  BEFORE UPDATE ON public.chat_conversations
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS handle_updated_at_user_analytics ON public.user_analytics;
CREATE TRIGGER handle_updated_at_user_analytics
  BEFORE UPDATE ON public.user_analytics
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Create triggers for analytics updates
DROP TRIGGER IF EXISTS update_analytics_on_chat ON public.chat_conversations;
CREATE TRIGGER update_analytics_on_chat
  AFTER INSERT ON public.chat_conversations
  FOR EACH ROW EXECUTE FUNCTION public.update_user_analytics();

DROP TRIGGER IF EXISTS update_analytics_on_agent ON public.ai_agents;
CREATE TRIGGER update_analytics_on_agent
  AFTER INSERT ON public.ai_agents
  FOR EACH ROW EXECUTE FUNCTION public.update_user_analytics();

DROP TRIGGER IF EXISTS update_analytics_on_system ON public.ai_systems;
CREATE TRIGGER update_analytics_on_system
  AFTER INSERT ON public.ai_systems
  FOR EACH ROW EXECUTE FUNCTION public.update_user_analytics();

-- Success message
SELECT 'Functions and triggers created successfully!' as status;
