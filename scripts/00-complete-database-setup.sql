-- Complete Database Setup Script
-- Run this to set up the entire Neuralia database from scratch

SELECT '🚀 STARTING COMPLETE DATABASE SETUP' as status;

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. Create profiles table
SELECT '1️⃣ CREATING PROFILES TABLE' as step;

CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    billing_address JSONB,
    payment_method JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile" ON public.profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

-- 2. Create ai_agents table
SELECT '2️⃣ CREATING AI_AGENTS TABLE' as step;

CREATE TABLE IF NOT EXISTS public.ai_agents (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    
    -- Agent Details
    name TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('sales-coach', 'hr-advisory', 'technical-support', 'customer-service', 'neural-executive', 'custom')),
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

ALTER TABLE public.ai_agents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own agents" ON public.ai_agents
    FOR SELECT USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Users can create own agents" ON public.ai_agents
    FOR INSERT WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Users can update own agents" ON public.ai_agents
    FOR UPDATE USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Users can delete own agents" ON public.ai_agents
    FOR DELETE USING (auth.uid() = user_id);

-- 3. Create deployed_agents table
SELECT '3️⃣ CREATING DEPLOYED_AGENTS TABLE' as step;

CREATE TABLE IF NOT EXISTS public.deployed_agents (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    agent_id TEXT NOT NULL,
    agent_name TEXT NOT NULL,
    name TEXT NOT NULL,
    agent_description TEXT,
    description TEXT,
    agent_type TEXT NOT NULL,
    agent_icon TEXT DEFAULT '🤖',
    icon TEXT DEFAULT '🤖',
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'paused', 'error', 'deploying', 'trial', 'expired')),
    deployment_date TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    last_active TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    uptime_percentage DECIMAL(5,2) DEFAULT 99.9,
    is_orchestrator BOOLEAN DEFAULT FALSE,
    configuration JSONB DEFAULT '{}'::jsonb,
    trial_start TIMESTAMP WITH TIME ZONE,
    trial_end TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    
    UNIQUE(user_id, agent_id)
);

ALTER TABLE public.deployed_agents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own deployed agents" ON public.deployed_agents
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own deployed agents" ON public.deployed_agents
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own deployed agents" ON public.deployed_agents
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own deployed agents" ON public.deployed_agents
    FOR DELETE USING (auth.uid() = user_id);

-- 4. Create chat_conversations table
SELECT '4️⃣ CREATING CHAT_CONVERSATIONS TABLE' as step;

CREATE TABLE IF NOT EXISTS public.chat_conversations (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    agent_id TEXT NOT NULL,
    title TEXT,
    messages JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.chat_conversations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own conversations" ON public.chat_conversations
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own conversations" ON public.chat_conversations
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own conversations" ON public.chat_conversations
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own conversations" ON public.chat_conversations
    FOR DELETE USING (auth.uid() = user_id);

-- 5. Create user_analytics table
SELECT '5️⃣ CREATING USER_ANALYTICS TABLE' as step;

CREATE TABLE IF NOT EXISTS public.user_analytics (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    total_agents INTEGER DEFAULT 0,
    total_conversations INTEGER DEFAULT 0,
    total_messages INTEGER DEFAULT 0,
    monthly_usage JSONB DEFAULT '{}'::jsonb,
    cost_savings DECIMAL DEFAULT 0,
    efficiency_score DECIMAL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    
    UNIQUE(user_id)
);

ALTER TABLE public.user_analytics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own analytics" ON public.user_analytics
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own analytics" ON public.user_analytics
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own analytics" ON public.user_analytics
    FOR UPDATE USING (auth.uid() = user_id);

-- 6. Create purchases table
SELECT '6️⃣ CREATING PURCHASES TABLE' as step;

CREATE TABLE IF NOT EXISTS public.purchases (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    agent_id TEXT NOT NULL,
    amount DECIMAL NOT NULL,
    currency TEXT DEFAULT 'USD',
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed', 'refunded')),
    stripe_payment_intent_id TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.purchases ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own purchases" ON public.purchases
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own purchases" ON public.purchases
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- 7. Create error_reports table
SELECT '7️⃣ CREATING ERROR_REPORTS TABLE' as step;

CREATE TABLE IF NOT EXISTS public.error_reports (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    error_type TEXT NOT NULL,
    error_message TEXT NOT NULL,
    stack_trace TEXT,
    user_agent TEXT,
    url TEXT,
    additional_data JSONB DEFAULT '{}'::jsonb,
    resolved BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.error_reports ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own error reports" ON public.error_reports
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own error reports" ON public.error_reports
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- 8. Create functions
SELECT '8️⃣ CREATING FUNCTIONS' as step;

-- Function to handle new user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, full_name, avatar_url)
    VALUES (
        NEW.id,
        NEW.email,
        NEW.raw_user_meta_data->>'full_name',
        NEW.raw_user_meta_data->>'avatar_url'
    );
    
    INSERT INTO public.user_analytics (user_id)
    VALUES (NEW.id);
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to handle updated_at timestamps
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Function to update user analytics
CREATE OR REPLACE FUNCTION public.update_user_analytics()
RETURNS TRIGGER AS $$
BEGIN
    -- Update analytics when agents are deployed
    IF TG_TABLE_NAME = 'deployed_agents' THEN
        UPDATE public.user_analytics 
        SET 
            total_agents = (SELECT COUNT(*) FROM public.deployed_agents WHERE user_id = NEW.user_id),
            updated_at = NOW()
        WHERE user_id = NEW.user_id;
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 9. Create triggers
SELECT '9️⃣ CREATING TRIGGERS' as step;

-- Trigger for new user registration
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Triggers for updated_at timestamps
DROP TRIGGER IF EXISTS handle_profiles_updated_at ON public.profiles;
CREATE TRIGGER handle_profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS handle_ai_agents_updated_at ON public.ai_agents;
CREATE TRIGGER handle_ai_agents_updated_at
    BEFORE UPDATE ON public.ai_agents
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS handle_deployed_agents_updated_at ON public.deployed_agents;
CREATE TRIGGER handle_deployed_agents_updated_at
    BEFORE UPDATE ON public.deployed_agents
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS handle_chat_conversations_updated_at ON public.chat_conversations;
CREATE TRIGGER handle_chat_conversations_updated_at
    BEFORE UPDATE ON public.chat_conversations
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS handle_user_analytics_updated_at ON public.user_analytics;
CREATE TRIGGER handle_user_analytics_updated_at
    BEFORE UPDATE ON public.user_analytics
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS handle_purchases_updated_at ON public.purchases;
CREATE TRIGGER handle_purchases_updated_at
    BEFORE UPDATE ON public.purchases
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Trigger for analytics updates
DROP TRIGGER IF EXISTS update_analytics_on_agent_deploy ON public.deployed_agents;
CREATE TRIGGER update_analytics_on_agent_deploy
    AFTER INSERT ON public.deployed_agents
    FOR EACH ROW EXECUTE FUNCTION public.update_user_analytics();

-- 10. Create indexes
SELECT '🔟 CREATING PERFORMANCE INDEXES' as step;

CREATE INDEX IF NOT EXISTS ai_agents_user_id_idx ON public.ai_agents(user_id);
CREATE INDEX IF NOT EXISTS ai_agents_type_idx ON public.ai_agents(type);
CREATE INDEX IF NOT EXISTS ai_agents_status_idx ON public.ai_agents(status);

CREATE INDEX IF NOT EXISTS deployed_agents_user_id_idx ON public.deployed_agents(user_id);
CREATE INDEX IF NOT EXISTS deployed_agents_status_idx ON public.deployed_agents(status);
CREATE INDEX IF NOT EXISTS deployed_agents_agent_type_idx ON public.deployed_agents(agent_type);

CREATE INDEX IF NOT EXISTS chat_conversations_user_id_idx ON public.chat_conversations(user_id);
CREATE INDEX IF NOT EXISTS chat_conversations_agent_id_idx ON public.chat_conversations(agent_id);

CREATE INDEX IF NOT EXISTS user_analytics_user_id_idx ON public.user_analytics(user_id);

CREATE INDEX IF NOT EXISTS purchases_user_id_idx ON public.purchases(user_id);
CREATE INDEX IF NOT EXISTS purchases_status_idx ON public.purchases(status);

CREATE INDEX IF NOT EXISTS error_reports_user_id_idx ON public.error_reports(user_id);
CREATE INDEX IF NOT EXISTS error_reports_resolved_idx ON public.error_reports(resolved);

-- 11. Insert sample data
SELECT '1️⃣1️⃣ INSERTING SAMPLE DATA' as step;

INSERT INTO public.ai_agents (name, type, description, status, user_id) VALUES
('Neural CEO', 'neural-executive', 'AI-powered Chief Executive Officer for strategic decision making', 'active', NULL),
('Neural CMO', 'neural-executive', 'AI-powered Chief Marketing Officer for marketing strategy', 'active', NULL),
('Neural CTO', 'neural-executive', 'AI-powered Chief Technology Officer for technical leadership', 'active', NULL),
('Neural CFO', 'neural-executive', 'AI-powered Chief Financial Officer for financial management', 'active', NULL),
('Neural CHRO', 'neural-executive', 'AI-powered Chief Human Resources Officer for people management', 'active', NULL),
('Neural COO', 'neural-executive', 'AI-powered Chief Operating Officer for operational excellence', 'active', NULL),
('Sales Coach Pro', 'sales-coach', 'Advanced AI sales coaching and training assistant', 'active', NULL),
('HR Advisory Bot', 'hr-advisory', 'Comprehensive HR support and policy guidance', 'active', NULL),
('Tech Support AI', 'technical-support', 'Advanced technical support and troubleshooting', 'active', NULL),
('Customer Service AI', 'customer-service', 'Professional customer service and support', 'active', NULL)
ON CONFLICT DO NOTHING;

-- Grant permissions
SELECT '1️⃣2️⃣ GRANTING PERMISSIONS' as step;

GRANT ALL ON ALL TABLES IN SCHEMA public TO authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO authenticated;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA public TO authenticated;

GRANT ALL ON ALL TABLES IN SCHEMA public TO service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO service_role;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA public TO service_role;

SELECT '✅ COMPLETE DATABASE SETUP FINISHED SUCCESSFULLY!' as final_status;
