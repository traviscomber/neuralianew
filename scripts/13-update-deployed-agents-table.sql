-- Update deployed_agents table to ensure proper structure for data persistence
-- This script ensures the table has all necessary columns for session persistence

-- First, check if the table exists and create it if it doesn't
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
    deployment_progress INTEGER DEFAULT 0 CHECK (deployment_progress >= 0 AND deployment_progress <= 100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    
    -- Ensure unique agent per user
    UNIQUE(user_id, agent_id)
);

-- Add missing columns if they don't exist
DO $$ 
BEGIN
    -- Add agent_name column if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'deployed_agents' 
        AND column_name = 'agent_name'
        AND table_schema = 'public'
    ) THEN
        ALTER TABLE public.deployed_agents ADD COLUMN agent_name TEXT NOT NULL DEFAULT 'Unnamed Agent';
    END IF;

    -- Add agent_description column if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'deployed_agents' 
        AND column_name = 'agent_description'
        AND table_schema = 'public'
    ) THEN
        ALTER TABLE public.deployed_agents ADD COLUMN agent_description TEXT;
    END IF;

    -- Add agent_type column if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'deployed_agents' 
        AND column_name = 'agent_type'
        AND table_schema = 'public'
    ) THEN
        ALTER TABLE public.deployed_agents ADD COLUMN agent_type TEXT NOT NULL DEFAULT 'general';
    END IF;

    -- Add agent_icon column if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'deployed_agents' 
        AND column_name = 'agent_icon'
        AND table_schema = 'public'
    ) THEN
        ALTER TABLE public.deployed_agents ADD COLUMN agent_icon TEXT DEFAULT '🤖';
    END IF;

    -- Add deployment_date column if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'deployed_agents' 
        AND column_name = 'deployment_date'
        AND table_schema = 'public'
    ) THEN
        ALTER TABLE public.deployed_agents ADD COLUMN deployment_date TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL;
    END IF;

    -- Add last_active column if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'deployed_agents' 
        AND column_name = 'last_active'
        AND table_schema = 'public'
    ) THEN
        ALTER TABLE public.deployed_agents ADD COLUMN last_active TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL;
    END IF;

    -- Add uptime_percentage column if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'deployed_agents' 
        AND column_name = 'uptime_percentage'
        AND table_schema = 'public'
    ) THEN
        ALTER TABLE public.deployed_agents ADD COLUMN uptime_percentage DECIMAL(5,2) DEFAULT 99.9;
    END IF;

    -- Add is_orchestrator column if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'deployed_agents' 
        AND column_name = 'is_orchestrator'
        AND table_schema = 'public'
    ) THEN
        ALTER TABLE public.deployed_agents ADD COLUMN is_orchestrator BOOLEAN DEFAULT FALSE;
    END IF;

    -- Add deployment_progress column if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'deployed_agents' 
        AND column_name = 'deployment_progress'
        AND table_schema = 'public'
    ) THEN
        ALTER TABLE public.deployed_agents ADD COLUMN deployment_progress INTEGER DEFAULT 0 CHECK (deployment_progress >= 0 AND deployment_progress <= 100);
    END IF;

    -- Update status column constraint if needed
    BEGIN
        ALTER TABLE public.deployed_agents DROP CONSTRAINT IF EXISTS deployed_agents_status_check;
        ALTER TABLE public.deployed_agents ADD CONSTRAINT deployed_agents_status_check 
            CHECK (status IN ('active', 'paused', 'error', 'deploying'));
    EXCEPTION
        WHEN OTHERS THEN
            -- Constraint might already exist or column might not exist
            NULL;
    END;

END $$;

-- Add indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_deployed_agents_user_id ON public.deployed_agents(user_id);
CREATE INDEX IF NOT EXISTS idx_deployed_agents_agent_id ON public.deployed_agents(agent_id);
CREATE INDEX IF NOT EXISTS idx_deployed_agents_status ON public.deployed_agents(status);
CREATE INDEX IF NOT EXISTS idx_deployed_agents_deployment_date ON public.deployed_agents(deployment_date DESC);
CREATE INDEX IF NOT EXISTS idx_deployed_agents_user_status ON public.deployed_agents(user_id, status);
CREATE INDEX IF NOT EXISTS idx_deployed_agents_agent_type ON public.deployed_agents(agent_type);
CREATE INDEX IF NOT EXISTS idx_deployed_agents_is_orchestrator ON public.deployed_agents(is_orchestrator);

-- Enable Row Level Security (RLS)
ALTER TABLE public.deployed_agents ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view their own deployed agents" ON public.deployed_agents;
DROP POLICY IF EXISTS "Users can insert their own deployed agents" ON public.deployed_agents;
DROP POLICY IF EXISTS "Users can update their own deployed agents" ON public.deployed_agents;
DROP POLICY IF EXISTS "Users can delete their own deployed agents" ON public.deployed_agents;

-- Create RLS policies to ensure users can only see their own deployed agents
CREATE POLICY "Users can view their own deployed agents" ON public.deployed_agents
    FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can insert their own deployed agents" ON public.deployed_agents
    FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own deployed agents" ON public.deployed_agents
    FOR UPDATE USING (user_id = auth.uid());

CREATE POLICY "Users can delete their own deployed agents" ON public.deployed_agents
    FOR DELETE USING (user_id = auth.uid());

-- Create or replace the updated_at trigger function
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add trigger to automatically update the updated_at timestamp
DROP TRIGGER IF EXISTS handle_deployed_agents_updated_at ON public.deployed_agents;
CREATE TRIGGER handle_deployed_agents_updated_at
    BEFORE UPDATE ON public.deployed_agents
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- Add helpful comments
COMMENT ON TABLE public.deployed_agents IS 'Stores user deployed AI agents with session persistence';
COMMENT ON COLUMN public.deployed_agents.user_id IS 'References the user who deployed the agent (from Supabase auth)';
COMMENT ON COLUMN public.deployed_agents.agent_id IS 'References the AI agent from ai_agents table';
COMMENT ON COLUMN public.deployed_agents.agent_name IS 'Display name for the deployed agent';
COMMENT ON COLUMN public.deployed_agents.agent_description IS 'Description of what the agent does';
COMMENT ON COLUMN public.deployed_agents.agent_type IS 'Type/category of the agent';
COMMENT ON COLUMN public.deployed_agents.agent_icon IS 'Emoji or icon for the agent';
COMMENT ON COLUMN public.deployed_agents.configuration IS 'JSON configuration and settings for the deployed agent';
COMMENT ON COLUMN public.deployed_agents.status IS 'Current status of the deployed agent';
COMMENT ON COLUMN public.deployed_agents.deployment_progress IS 'Progress percentage during deployment (0-100)';
COMMENT ON COLUMN public.deployed_agents.deployment_date IS 'When the agent was deployed';
COMMENT ON COLUMN public.deployed_agents.last_active IS 'Last time the agent was active';
COMMENT ON COLUMN public.deployed_agents.uptime_percentage IS 'Agent uptime percentage';
COMMENT ON COLUMN public.deployed_agents.is_orchestrator IS 'Whether this agent is an orchestrator';
