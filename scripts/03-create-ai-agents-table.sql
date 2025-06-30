-- Create AI Agents table for managing user's AI agents

-- Drop existing table and policies if they exist
DROP POLICY IF EXISTS "Users can view own agents" ON public.ai_agents;
DROP POLICY IF EXISTS "Users can create own agents" ON public.ai_agents;
DROP POLICY IF EXISTS "Users can update own agents" ON public.ai_agents;
DROP POLICY IF EXISTS "Users can delete own agents" ON public.ai_agents;
DROP TABLE IF EXISTS public.ai_agents;

CREATE TABLE public.ai_agents (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    
    -- Agent Details
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    description TEXT,
    status TEXT DEFAULT 'active',
    
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
    deployment_status TEXT DEFAULT 'draft',
    deployment_url TEXT,
    api_key TEXT,
    webhook_url TEXT,
    
    -- Metadata
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    deployed_at TIMESTAMPTZ
);

-- Add CHECK constraints after table creation
ALTER TABLE public.ai_agents ADD CONSTRAINT ai_agents_type_check 
    CHECK (type IN ('sales-coach', 'hr-advisory', 'technical-support', 'customer-service', 'custom'));

ALTER TABLE public.ai_agents ADD CONSTRAINT ai_agents_status_check 
    CHECK (status IN ('active', 'inactive', 'training', 'error'));

ALTER TABLE public.ai_agents ADD CONSTRAINT ai_agents_deployment_status_check 
    CHECK (deployment_status IN ('draft', 'deployed', 'updating', 'error'));

-- Enable Row Level Security
ALTER TABLE public.ai_agents ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can view own agents" ON public.ai_agents
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own agents" ON public.ai_agents
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own agents" ON public.ai_agents
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own agents" ON public.ai_agents
    FOR DELETE USING (auth.uid() = user_id);

-- Create indexes for performance
CREATE INDEX ai_agents_user_id_idx ON public.ai_agents(user_id);
CREATE INDEX ai_agents_type_idx ON public.ai_agents(type);
CREATE INDEX ai_agents_status_idx ON public.ai_agents(status);
CREATE INDEX ai_agents_deployment_status_idx ON public.ai_agents(deployment_status);

-- Create trigger for updating updated_at timestamp
CREATE TRIGGER update_ai_agents_updated_at
    BEFORE UPDATE ON public.ai_agents
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Grant permissions
GRANT ALL ON public.ai_agents TO authenticated;
GRANT ALL ON public.ai_agents TO service_role;

-- Success message
SELECT 'AI Agents table created successfully!' as status;
