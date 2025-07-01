-- Add deployment_date column to deployed_agents table
-- This column is needed for tracking when agents were deployed

-- First, check if the column already exists
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'deployed_agents' 
        AND column_name = 'deployment_date'
        AND table_schema = 'public'
    ) THEN
        -- Add the deployment_date column
        ALTER TABLE public.deployed_agents 
        ADD COLUMN deployment_date TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL;
        
        -- Update existing records to have deployment_date = created_at
        UPDATE public.deployed_agents 
        SET deployment_date = created_at 
        WHERE deployment_date IS NULL;
        
        -- Add index for better query performance
        CREATE INDEX IF NOT EXISTS idx_deployed_agents_deployment_date 
        ON public.deployed_agents(deployment_date DESC);
        
        -- Add comment
        COMMENT ON COLUMN public.deployed_agents.deployment_date IS 'Timestamp when the agent was deployed';
        
        RAISE NOTICE 'deployment_date column added successfully to deployed_agents table';
    ELSE
        RAISE NOTICE 'deployment_date column already exists in deployed_agents table';
    END IF;
END $$;

-- Verify the column was added
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns 
WHERE table_name = 'deployed_agents' 
AND column_name = 'deployment_date'
AND table_schema = 'public';
