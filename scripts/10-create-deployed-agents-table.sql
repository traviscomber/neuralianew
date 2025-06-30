-- Create deployed_agents table
CREATE TABLE IF NOT EXISTS deployed_agents (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    agent_id TEXT NOT NULL,
    agent_type TEXT NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    status TEXT NOT NULL DEFAULT 'deploying' CHECK (status IN ('deploying', 'active', 'inactive', 'error')),
    deployment_url TEXT,
    configuration JSONB DEFAULT '{}',
    performance_metrics JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_deployed_agents_user_id ON deployed_agents(user_id);
CREATE INDEX IF NOT EXISTS idx_deployed_agents_agent_id ON deployed_agents(agent_id);
CREATE INDEX IF NOT EXISTS idx_deployed_agents_status ON deployed_agents(status);
CREATE INDEX IF NOT EXISTS idx_deployed_agents_created_at ON deployed_agents(created_at DESC);

-- Create unique constraint to prevent duplicate deployments
CREATE UNIQUE INDEX IF NOT EXISTS idx_deployed_agents_user_agent 
ON deployed_agents(user_id, agent_id) 
WHERE status IN ('deploying', 'active');

-- Enable RLS
ALTER TABLE deployed_agents ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can view their own deployed agents" 
ON deployed_agents FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own deployed agents" 
ON deployed_agents FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own deployed agents" 
ON deployed_agents FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own deployed agents" 
ON deployed_agents FOR DELETE 
USING (auth.uid() = user_id);

-- Create trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_deployed_agents_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_deployed_agents_updated_at
    BEFORE UPDATE ON deployed_agents
    FOR EACH ROW
    EXECUTE FUNCTION update_deployed_agents_updated_at();

-- Grant necessary permissions
GRANT ALL ON deployed_agents TO authenticated;
GRANT ALL ON deployed_agents TO service_role;
