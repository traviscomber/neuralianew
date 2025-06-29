-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop existing tables if they exist (for clean setup)
DROP TABLE IF EXISTS public.user_analytics CASCADE;
DROP TABLE IF EXISTS public.chat_conversations CASCADE;
DROP TABLE IF EXISTS public.ai_systems CASCADE;
DROP TABLE IF EXISTS public.ai_agents CASCADE;
DROP TABLE IF EXISTS public.profiles CASCADE;

-- Create profiles table (extends auth.users)
CREATE TABLE public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    email TEXT,
    full_name TEXT,
    avatar_url TEXT,
    company_name TEXT,
    company_size TEXT CHECK (company_size IN ('1-10', '11-50', '51-200', '201-1000', '1000+')),
    industry TEXT,
    job_title TEXT,
    phone TEXT,
    website TEXT,
    
    -- Subscription & Billing
    subscription_plan TEXT DEFAULT 'free' CHECK (subscription_plan IN ('free', 'starter', 'professional', 'enterprise')),
    subscription_status TEXT DEFAULT 'active' CHECK (subscription_status IN ('active', 'cancelled', 'past_due', 'trialing')),
    subscription_start_date TIMESTAMPTZ,
    subscription_end_date TIMESTAMPTZ,
    billing_email TEXT,
    
    -- Usage & Limits
    monthly_chat_limit INTEGER DEFAULT 100,
    monthly_chats_used INTEGER DEFAULT 0,
    ai_agents_limit INTEGER DEFAULT 3,
    ai_agents_used INTEGER DEFAULT 0,
    ai_systems_limit INTEGER DEFAULT 1,
    ai_systems_used INTEGER DEFAULT 0,
    
    -- Preferences
    email_notifications BOOLEAN DEFAULT true,
    marketing_emails BOOLEAN DEFAULT false,
    timezone TEXT DEFAULT 'UTC',
    language TEXT DEFAULT 'en',
    
    -- Metadata
    onboarding_completed BOOLEAN DEFAULT false,
    last_active_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create AI Agents table
CREATE TABLE public.ai_agents (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    
    -- Agent Details
    name TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('sales-coach', 'hr-advisory', 'technical-support', 'customer-service', 'custom')),
    description TEXT,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'training', 'error')),
    
    -- Configuration
    model_config JSONB DEFAULT '{}',
    training_data JSONB DEFAULT '{}',
    custom_instructions TEXT,
    knowledge_base_urls TEXT[],
    
    -- Performance Metrics
    total_conversations INTEGER DEFAULT 0,
    total_messages INTEGER DEFAULT 0,
    average_response_time DECIMAL DEFAULT 0,
    satisfaction_rating DECIMAL DEFAULT 0,
    resolution_rate DECIMAL DEFAULT 0,
    
    -- Usage Stats
    conversations_this_month INTEGER DEFAULT 0,
    messages_this_month INTEGER DEFAULT 0,
    last_conversation_at TIMESTAMPTZ,
    
    -- Deployment
    deployment_status TEXT DEFAULT 'draft' CHECK (deployment_status IN ('draft', 'deployed', 'updating', 'error')),
    deployment_url TEXT,
    api_key TEXT,
    webhook_url TEXT,
    
    -- Metadata
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    deployed_at TIMESTAMPTZ
);

-- Create AI Systems table
CREATE TABLE public.ai_systems (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    
    -- System Details
    name TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('workflow-automation', 'data-processing', 'integration', 'custom')),
    description TEXT,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'configuring', 'error')),
    
    -- Configuration
    workflow_config JSONB DEFAULT '{}',
    integration_endpoints JSONB DEFAULT '{}',
    data_sources TEXT[],
    output_destinations TEXT[],
    
    -- Performance Metrics
    total_executions INTEGER DEFAULT 0,
    successful_executions INTEGER DEFAULT 0,
    failed_executions INTEGER DEFAULT 0,
    average_execution_time DECIMAL DEFAULT 0,
    data_processed_gb DECIMAL DEFAULT 0,
    
    -- Usage Stats
    executions_this_month INTEGER DEFAULT 0,
    data_processed_this_month_gb DECIMAL DEFAULT 0,
    last_execution_at TIMESTAMPTZ,
    
    -- Deployment
    deployment_status TEXT DEFAULT 'draft' CHECK (deployment_status IN ('draft', 'deployed', 'updating', 'error')),
    deployment_environment TEXT DEFAULT 'production' CHECK (deployment_environment IN ('development', 'staging', 'production')),
    
    -- Metadata
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    deployed_at TIMESTAMPTZ
);

-- Create Chat Conversations table
CREATE TABLE public.chat_conversations (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    
    -- Conversation Details
    chat_type TEXT NOT NULL CHECK (chat_type IN ('agent', 'system', 'general')),
    specific_agent TEXT,
    title TEXT,
    
    -- Messages
    messages JSONB DEFAULT '[]',
    message_count INTEGER DEFAULT 0,
    
    -- Metrics
    duration_seconds INTEGER DEFAULT 0,
    satisfaction_rating INTEGER CHECK (satisfaction_rating >= 1 AND satisfaction_rating <= 5),
    resolved BOOLEAN DEFAULT false,
    escalated BOOLEAN DEFAULT false,
    
    -- Metadata
    started_at TIMESTAMPTZ DEFAULT NOW(),
    ended_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create User Analytics table
CREATE TABLE public.user_analytics (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
    
    -- Date tracking
    date DATE NOT NULL,
    
    -- Usage Metrics
    chats_started INTEGER DEFAULT 0,
    messages_sent INTEGER DEFAULT 0,
    agents_created INTEGER DEFAULT 0,
    systems_created INTEGER DEFAULT 0,
    
    -- Engagement Metrics
    session_duration_minutes INTEGER DEFAULT 0,
    pages_visited INTEGER DEFAULT 0,
    features_used TEXT[] DEFAULT '{}',
    
    -- Performance Metrics
    average_response_time DECIMAL DEFAULT 0,
    satisfaction_ratings DECIMAL[] DEFAULT '{}',
    
    -- Metadata
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    
    -- Ensure one record per user per date
    UNIQUE(user_id, date)
);

-- Create indexes for better performance
CREATE INDEX idx_profiles_email ON public.profiles(email);
CREATE INDEX idx_profiles_subscription_plan ON public.profiles(subscription_plan);
CREATE INDEX idx_profiles_last_active ON public.profiles(last_active_at);

CREATE INDEX idx_ai_agents_user_id ON public.ai_agents(user_id);
CREATE INDEX idx_ai_agents_type ON public.ai_agents(type);
CREATE INDEX idx_ai_agents_status ON public.ai_agents(status);
CREATE INDEX idx_ai_agents_created_at ON public.ai_agents(created_at);

CREATE INDEX idx_ai_systems_user_id ON public.ai_systems(user_id);
CREATE INDEX idx_ai_systems_type ON public.ai_systems(type);
CREATE INDEX idx_ai_systems_status ON public.ai_systems(status);

CREATE INDEX idx_chat_conversations_user_id ON public.chat_conversations(user_id);
CREATE INDEX idx_chat_conversations_chat_type ON public.chat_conversations(chat_type);
CREATE INDEX idx_chat_conversations_started_at ON public.chat_conversations(started_at);

CREATE INDEX idx_user_analytics_user_id ON public.user_analytics(user_id);
CREATE INDEX idx_user_analytics_date ON public.user_analytics(date);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_agents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_systems ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_analytics ENABLE ROW LEVEL SECURITY;

-- Create RLS Policies

-- Profiles policies
CREATE POLICY "Users can view own profile" ON public.profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON public.profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

-- AI Agents policies
CREATE POLICY "Users can view own agents" ON public.ai_agents
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own agents" ON public.ai_agents
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own agents" ON public.ai_agents
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own agents" ON public.ai_agents
    FOR DELETE USING (auth.uid() = user_id);

-- AI Systems policies
CREATE POLICY "Users can view own systems" ON public.ai_systems
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own systems" ON public.ai_systems
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own systems" ON public.ai_systems
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own systems" ON public.ai_systems
    FOR DELETE USING (auth.uid() = user_id);

-- Chat Conversations policies
CREATE POLICY "Users can view own conversations" ON public.chat_conversations
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own conversations" ON public.chat_conversations
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own conversations" ON public.chat_conversations
    FOR UPDATE USING (auth.uid() = user_id);

-- User Analytics policies
CREATE POLICY "Users can view own analytics" ON public.user_analytics
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own analytics" ON public.user_analytics
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own analytics" ON public.user_analytics
    FOR UPDATE USING (auth.uid() = user_id);

-- Create function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, full_name, avatar_url)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name'),
        NEW.raw_user_meta_data->>'avatar_url'
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_ai_agents_updated_at
    BEFORE UPDATE ON public.ai_agents
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_ai_systems_updated_at
    BEFORE UPDATE ON public.ai_systems
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_chat_conversations_updated_at
    BEFORE UPDATE ON public.chat_conversations
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_user_analytics_updated_at
    BEFORE UPDATE ON public.user_analytics
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Insert some sample data for testing (optional)
-- This will only work after a user signs up
/*
INSERT INTO public.ai_agents (user_id, name, type, description, status, total_conversations, satisfaction_rating)
SELECT 
    id,
    'Sales Coach Pro',
    'sales-coach',
    'Advanced sales coaching agent that helps improve close rates and deal strategies.',
    'active',
    156,
    4.8
FROM public.profiles
LIMIT 1;
*/
