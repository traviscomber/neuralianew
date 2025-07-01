-- Create deployed_agents table for session persistence
-- This table stores user deployed AI agents with full session persistence

-- Drop table if exists (for clean setup)
DROP TABLE IF EXISTS deployed_agents CASCADE;

-- Create the deployed_agents table
CREATE TABLE deployed_agents (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL,
    agent_id TEXT NOT NULL,
    agent_type TEXT NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    configuration JSONB DEFAULT '{}',
    status TEXT DEFAULT 'active' CHECK (status IN ('deploying', 'active', 'inactive', 'error')),
    progress INTEGER DEFAULT 100 CHECK (progress >= 0 AND progress <= 100),
    deployed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    activated_at TIMESTAMP WITH TIME ZONE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Constraints
    UNIQUE(user_id, agent_id)
);

-- Create indexes for better query performance
CREATE INDEX idx_deployed_agents_user_id ON deployed_agents(user_id);
CREATE INDEX idx_deployed_agents_agent_id ON deployed_agents(agent_id);
CREATE INDEX idx_deployed_agents_status ON deployed_agents(status);
CREATE INDEX idx_deployed_agents_deployed_at ON deployed_agents(deployed_at DESC);
CREATE INDEX idx_deployed_agents_user_status ON deployed_agents(user_id, status);

-- Enable Row Level Security (RLS)
ALTER TABLE deployed_agents ENABLE ROW LEVEL SECURITY;

-- Create RLS policies to ensure users can only access their own deployed agents
CREATE POLICY "Users can view their own deployed agents" ON deployed_agents
    FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can insert their own deployed agents" ON deployed_agents
    FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own deployed agents" ON deployed_agents
    FOR UPDATE USING (user_id = auth.uid());

CREATE POLICY "Users can delete their own deployed agents" ON deployed_agents
    FOR DELETE USING (user_id = auth.uid());

-- Create function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_deployed_agents_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update the updated_at timestamp
CREATE TRIGGER trigger_update_deployed_agents_updated_at
    BEFORE UPDATE ON deployed_agents
    FOR EACH ROW
    EXECUTE FUNCTION update_deployed_agents_updated_at();

-- Add helpful comments
COMMENT ON TABLE deployed_agents IS 'Stores user deployed AI agents with session persistence across logins';
COMMENT ON COLUMN deployed_agents.user_id IS 'References the user who deployed the agent (from Supabase auth.users)';
COMMENT ON COLUMN deployed_agents.agent_id IS 'Unique identifier for the AI agent type';
COMMENT ON COLUMN deployed_agents.agent_type IS 'Type/category of the AI agent';
COMMENT ON COLUMN deployed_agents.configuration IS 'JSON configuration and settings for the deployed agent';
COMMENT ON COLUMN deployed_agents.status IS 'Current status of the deployed agent (deploying, active, inactive, error)';
COMMENT ON COLUMN deployed_agents.progress IS 'Deployment progress percentage (0-100)';

-- Insert some sample data for testing (optional)
-- This will be inserted with actual user IDs when users deploy agents
