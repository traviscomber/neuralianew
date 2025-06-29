-- Create deployed_agents table for storing user's deployed AI agents
CREATE TABLE IF NOT EXISTS public.deployed_agents (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    agent_id TEXT NOT NULL,
    agent_name TEXT NOT NULL,
    agent_description TEXT,
    agent_type TEXT NOT NULL,
    agent_icon TEXT DEFAULT '🤖',
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'paused', 'error', 'deploying')),
    deployment_date TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    last_active TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    uptime_percentage DECIMAL(5,2) DEFAULT 99.9,
    is_orchestrator BOOLEAN DEFAULT FALSE,
    configuration JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    
    -- Ensure unique agent per user
    UNIQUE(user_id, agent_id)
);

-- Enable RLS
ALTER TABLE public.deployed_agents ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own deployed agents" ON public.deployed_agents
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own deployed agents" ON public.deployed_agents
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own deployed agents" ON public.deployed_agents
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own deployed agents" ON public.deployed_agents
    FOR DELETE USING (auth.uid() = user_id);

-- Create updated_at trigger
CREATE TRIGGER handle_deployed_agents_updated_at
    BEFORE UPDATE ON public.deployed_agents
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS deployed_agents_user_id_idx ON public.deployed_agents(user_id);
CREATE INDEX IF NOT EXISTS deployed_agents_status_idx ON public.deployed_agents(status);
CREATE INDEX IF NOT EXISTS deployed_agents_agent_type_idx ON public.deployed_agents(agent_type);
CREATE INDEX IF NOT EXISTS deployed_agents_is_orchestrator_idx ON public.deployed_agents(is_orchestrator);
