-- Create deployed_agents table for tracking user's deployed AI agents
CREATE TABLE IF NOT EXISTS deployed_agents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    agent_id TEXT NOT NULL, -- matches the agent type/id from the frontend
    agent_type TEXT NOT NULL CHECK (agent_type IN (
        'ceo-neural-agent',
        'hr-advisory', 
        'sales-coach',
        'customer-service',
        'technical-support',
        'marketing',
        'analytics'
    )),
    name TEXT NOT NULL,
    description TEXT,
    icon TEXT,
    color TEXT,
    status TEXT NOT NULL DEFAULT 'deploying' CHECK (status IN ('deploying', 'active', 'inactive', 'error')),
    deployment_url TEXT,
    configuration JSONB DEFAULT '{}',
    performance_metrics JSONB DEFAULT '{}',
    uptime TEXT DEFAULT '99.9%',
    last_active TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    deployed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_deployed_agents_user_id ON deployed_agents(user_id);
CREATE INDEX IF NOT EXISTS idx_deployed_agents_agent_type ON deployed_agents(agent_type);
CREATE INDEX IF NOT EXISTS idx_deployed_agents_status ON deployed_agents(status);
CREATE INDEX IF NOT EXISTS idx_deployed_agents_deployed_at ON deployed_agents(deployed_at DESC);

-- Enable Row Level Security
ALTER TABLE deployed_agents ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can view their own deployed agents" ON deployed_agents
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own deployed agents" ON deployed_agents
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own deployed agents" ON deployed_agents
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own deployed agents" ON deployed_agents
    FOR DELETE USING (auth.uid() = user_id);

-- Create trigger for updating updated_at timestamp
CREATE TRIGGER update_deployed_agents_updated_at
    BEFORE UPDATE ON deployed_agents
    FOR EACH ROW
    EXECUTE FUNCTION handle_updated_at();

-- Grant permissions
GRANT ALL ON deployed_agents TO authenticated;
GRANT ALL ON deployed_agents TO service_role;

-- Add comments for documentation
COMMENT ON TABLE deployed_agents IS 'Stores information about AI agents that users have deployed';
COMMENT ON COLUMN deployed_agents.agent_id IS 'Unique identifier matching the frontend agent configuration';
COMMENT ON COLUMN deployed_agents.configuration IS 'JSON configuration specific to this deployed agent';
COMMENT ON COLUMN deployed_agents.performance_metrics IS 'JSON object storing performance data and analytics';
COMMENT ON COLUMN deployed_agents.uptime IS 'String representation of agent uptime percentage';
