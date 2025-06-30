-- Create AI Systems table for managing user's AI systems

-- Drop existing table and policies if they exist
DROP POLICY IF EXISTS "Users can view own systems" ON public.ai_systems;
DROP POLICY IF EXISTS "Users can create own systems" ON public.ai_systems;
DROP POLICY IF EXISTS "Users can update own systems" ON public.ai_systems;
DROP POLICY IF EXISTS "Users can delete own systems" ON public.ai_systems;
DROP TABLE IF EXISTS public.ai_systems;

CREATE TABLE public.ai_systems (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    
    -- System Details
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    description TEXT,
    status TEXT DEFAULT 'active',
    
    -- Configuration
    workflow_config JSONB DEFAULT '{}',
    integration_endpoints JSONB DEFAULT '{}',
    data_sources TEXT[],
    output_destinations TEXT[],
    
    -- Performance Metrics
    total_executions INTEGER DEFAULT 0,
    successful_executions INTEGER DEFAULT 0,
    failed_executions INTEGER DEFAULT 0,
    average_execution_time DECIMAL DEFAULT 0,
    data_processed_gb DECIMAL DEFAULT 0,
    
    -- Usage Stats
    executions_this_month INTEGER DEFAULT 0,
    data_processed_this_month_gb DECIMAL DEFAULT 0,
    last_execution_at TIMESTAMPTZ,
    
    -- Deployment
    deployment_status TEXT DEFAULT 'draft',
    deployment_environment TEXT DEFAULT 'production',
    
    -- Metadata
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    deployed_at TIMESTAMPTZ
);

-- Add CHECK constraints after table creation
ALTER TABLE public.ai_systems ADD CONSTRAINT ai_systems_type_check 
    CHECK (type IN ('workflow-automation', 'data-processing', 'integration', 'custom'));

ALTER TABLE public.ai_systems ADD CONSTRAINT ai_systems_status_check 
    CHECK (status IN ('active', 'inactive', 'configuring', 'error'));

ALTER TABLE public.ai_systems ADD CONSTRAINT ai_systems_deployment_status_check 
    CHECK (deployment_status IN ('draft', 'deployed', 'updating', 'error'));

ALTER TABLE public.ai_systems ADD CONSTRAINT ai_systems_deployment_environment_check 
    CHECK (deployment_environment IN ('development', 'staging', 'production'));

-- Enable Row Level Security
ALTER TABLE public.ai_systems ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can view own systems" ON public.ai_systems
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own systems" ON public.ai_systems
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own systems" ON public.ai_systems
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own systems" ON public.ai_systems
    FOR DELETE USING (auth.uid() = user_id);

-- Create indexes for performance
CREATE INDEX ai_systems_user_id_idx ON public.ai_systems(user_id);
CREATE INDEX ai_systems_type_idx ON public.ai_systems(type);
CREATE INDEX ai_systems_status_idx ON public.ai_systems(status);
CREATE INDEX ai_systems_deployment_status_idx ON public.ai_systems(deployment_status);

-- Create trigger for updating updated_at timestamp
CREATE TRIGGER update_ai_systems_updated_at
    BEFORE UPDATE ON public.ai_systems
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Grant permissions
GRANT ALL ON public.ai_systems TO authenticated;
GRANT ALL ON public.ai_systems TO service_role;

-- Success message
SELECT 'AI Systems table created successfully!' as status;
