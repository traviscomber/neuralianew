-- Drop existing table and policies if they exist
DROP POLICY IF EXISTS "Users can view own analytics" ON public.user_analytics;
DROP POLICY IF EXISTS "Users can insert own analytics" ON public.user_analytics;
DROP POLICY IF EXISTS "Users can update own analytics" ON public.user_analytics;
DROP POLICY IF EXISTS "Users can delete own analytics" ON public.user_analytics;
DROP TABLE IF EXISTS public.user_analytics;

-- Create user_analytics table
CREATE TABLE public.user_analytics (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    period_type TEXT NOT NULL CHECK (period_type IN ('daily', 'weekly', 'monthly', 'yearly')),
    period_start DATE NOT NULL,
    period_end DATE NOT NULL,
    
    -- Chat analytics
    total_chats INTEGER DEFAULT 0 NOT NULL,
    total_messages INTEGER DEFAULT 0 NOT NULL,
    chat_types JSONB DEFAULT '{}'::jsonb,
    avg_chat_duration_seconds INTEGER DEFAULT 0,
    avg_satisfaction_rating DECIMAL(3,2) DEFAULT 0.00 CHECK (avg_satisfaction_rating >= 0 AND avg_satisfaction_rating <= 5),
    
    -- Agent analytics
    total_agents_created INTEGER DEFAULT 0 NOT NULL,
    total_agents_deployed INTEGER DEFAULT 0 NOT NULL,
    agent_types JSONB DEFAULT '{}'::jsonb,
    avg_agent_satisfaction DECIMAL(3,2) DEFAULT 0.00 CHECK (avg_agent_satisfaction >= 0 AND avg_agent_satisfaction <= 5),
    
    -- System analytics
    total_systems_created INTEGER DEFAULT 0 NOT NULL,
    total_systems_deployed INTEGER DEFAULT 0 NOT NULL,
    total_system_executions INTEGER DEFAULT 0 NOT NULL,
    system_success_rate DECIMAL(5,2) DEFAULT 100.00 CHECK (system_success_rate >= 0 AND system_success_rate <= 100),
    
    -- Usage analytics
    total_logins INTEGER DEFAULT 0 NOT NULL,
    active_days INTEGER DEFAULT 0 NOT NULL,
    total_api_calls INTEGER DEFAULT 0 NOT NULL,
    data_processed_mb DECIMAL(10,2) DEFAULT 0.00,
    
    -- Performance analytics
    avg_response_time_ms INTEGER DEFAULT 0,
    total_errors INTEGER DEFAULT 0 NOT NULL,
    success_rate DECIMAL(5,2) DEFAULT 100.00 CHECK (success_rate >= 0 AND success_rate <= 100),
    
    -- Feature usage (JSONB to track which features are used most)
    feature_usage JSONB DEFAULT '{}'::jsonb,
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
    
    -- Unique constraint to prevent duplicate analytics for same period
    UNIQUE(user_id, period_type, period_start)
);

-- Enable Row Level Security
ALTER TABLE public.user_analytics ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can view own analytics" ON public.user_analytics
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own analytics" ON public.user_analytics
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own analytics" ON public.user_analytics
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own analytics" ON public.user_analytics
    FOR DELETE USING (auth.uid() = user_id);

-- Create indexes for performance
CREATE INDEX idx_user_analytics_user_id ON public.user_analytics(user_id);
CREATE INDEX idx_user_analytics_period ON public.user_analytics(period_type, period_start);
CREATE INDEX idx_user_analytics_created_at ON public.user_analytics(created_at);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_user_analytics_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
CREATE TRIGGER trigger_update_user_analytics_updated_at
    BEFORE UPDATE ON public.user_analytics
    FOR EACH ROW
    EXECUTE FUNCTION update_user_analytics_updated_at();

-- Grant permissions
GRANT ALL ON public.user_analytics TO authenticated;
GRANT ALL ON public.user_analytics TO service_role;

-- Success message
SELECT 'User Analytics table created successfully!' as status;
