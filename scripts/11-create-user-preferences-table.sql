-- Create user_preferences table
CREATE TABLE IF NOT EXISTS user_preferences (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    preferred_name TEXT NOT NULL,
    communication_style TEXT NOT NULL DEFAULT 'friendly' CHECK (communication_style IN ('professional', 'friendly', 'casual')),
    agent_preferences JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id)
);

-- Enable RLS
ALTER TABLE user_preferences ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own preferences" ON user_preferences
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own preferences" ON user_preferences
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own preferences" ON user_preferences
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own preferences" ON user_preferences
    FOR DELETE USING (auth.uid() = user_id);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updated_at
CREATE TRIGGER update_user_preferences_updated_at
    BEFORE UPDATE ON user_preferences
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_user_preferences_user_id ON user_preferences(user_id);
CREATE INDEX IF NOT EXISTS idx_user_preferences_created_at ON user_preferences(created_at);

-- Grant permissions
GRANT ALL ON user_preferences TO authenticated;
GRANT ALL ON user_preferences TO service_role;

-- Add comments for documentation
COMMENT ON TABLE user_preferences IS 'Stores user preferences for personalized experience';
COMMENT ON COLUMN user_preferences.preferred_name IS 'User preferred name for personalized interactions';
COMMENT ON COLUMN user_preferences.communication_style IS 'Preferred communication style for AI agents';
COMMENT ON COLUMN user_preferences.agent_preferences IS 'JSON object storing agent-specific preferences';
