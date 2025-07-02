-- Update deployed_agents table to ensure proper structure for data persistence
-- This script ensures the table has all necessary columns for session persistence

-- First, check if the table exists and create it if it doesn't
CREATE TABLE IF NOT EXISTS deployed_agents (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL,
    agent_id TEXT NOT NULL,
    configuration JSONB DEFAULT '{}',
    status TEXT DEFAULT 'deploying' CHECK (status IN ('deploying', 'active', 'inactive', 'error')),
    deployment_progress INTEGER DEFAULT 0 CHECK (deployment_progress >= 0 AND deployment_progress <= 100),
    deployed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    activated_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_deployed_agents_user_id ON deployed_agents(user_id);
CREATE INDEX IF NOT EXISTS idx_deployed_agents_agent_id ON deployed_agents(agent_id);
CREATE INDEX IF NOT EXISTS idx_deployed_agents_status ON deployed_agents(status);
CREATE INDEX IF NOT EXISTS idx_deployed_agents_deployed_at ON deployed_agents(deployed_at DESC);

-- Add composite index for user-specific queries
CREATE INDEX IF NOT EXISTS idx_deployed_agents_user_status ON deployed_agents(user_id, status);

-- Enable Row Level Security (RLS)
ALTER TABLE deployed_agents ENABLE ROW LEVEL SECURITY;

-- Create RLS policies to ensure users can only see their own deployed agents
DROP POLICY IF EXISTS "Users can view their own deployed agents" ON deployed_agents;
CREATE POLICY "Users can view their own deployed agents" ON deployed_agents
    FOR SELECT USING (user_id = auth.uid());

DROP POLICY IF EXISTS "Users can insert their own deployed agents" ON deployed_agents;
CREATE POLICY "Users can insert their own deployed agents" ON deployed_agents
    FOR INSERT WITH CHECK (user_id = auth.uid());

DROP POLICY IF EXISTS "Users can update their own deployed agents" ON deployed_agents;
CREATE POLICY "Users can update their own deployed agents" ON deployed_agents
    FOR UPDATE USING (user_id = auth.uid());

DROP POLICY IF EXISTS "Users can delete their own deployed agents" ON deployed_agents;
CREATE POLICY "Users can delete their own deployed agents" ON deployed_agents
    FOR DELETE USING (user_id = auth.uid());

-- Add trigger to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_deployed_agents_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_update_deployed_agents_updated_at ON deployed_agents;
CREATE TRIGGER trigger_update_deployed_agents_updated_at
    BEFORE UPDATE ON deployed_agents
    FOR EACH ROW
    EXECUTE FUNCTION update_deployed_agents_updated_at();

-- Add some helpful comments
COMMENT ON TABLE deployed_agents IS 'Stores user deployed AI agents with session persistence';
COMMENT ON COLUMN deployed_agents.user_id IS 'References the user who deployed the agent (from Supabase auth)';
COMMENT ON COLUMN deployed_agents.agent_id IS 'References the AI agent from ai_agents table';
COMMENT ON COLUMN deployed_agents.configuration IS 'JSON configuration and settings for the deployed agent';
COMMENT ON COLUMN deployed_agents.status IS 'Current status of the deployed agent';
COMMENT ON COLUMN deployed_agents.deployment_progress IS 'Progress percentage during deployment (0-100)';
