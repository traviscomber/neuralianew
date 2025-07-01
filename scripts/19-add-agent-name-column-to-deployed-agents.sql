-- Add agent_name column to deployed_agents table
-- This script safely adds the missing agent_name column

DO $$ 
BEGIN
    -- Check if agent_name column exists, if not add it
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'deployed_agents' 
        AND column_name = 'agent_name'
        AND table_schema = 'public'
    ) THEN
        ALTER TABLE public.deployed_agents 
        ADD COLUMN agent_name TEXT NOT NULL DEFAULT 'Unnamed Agent';
        
        RAISE NOTICE 'Added agent_name column to deployed_agents table';
    ELSE
        RAISE NOTICE 'agent_name column already exists in deployed_agents table';
    END IF;

    -- Check if agent_description column exists, if not add it
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'deployed_agents' 
        AND column_name = 'agent_description'
        AND table_schema = 'public'
    ) THEN
        ALTER TABLE public.deployed_agents 
        ADD COLUMN agent_description TEXT;
        
        RAISE NOTICE 'Added agent_description column to deployed_agents table';
    ELSE
        RAISE NOTICE 'agent_description column already exists in deployed_agents table';
    END IF;

    -- Check if agent_type column exists, if not add it
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'deployed_agents' 
        AND column_name = 'agent_type'
        AND table_schema = 'public'
    ) THEN
        ALTER TABLE public.deployed_agents 
        ADD COLUMN agent_type TEXT NOT NULL DEFAULT 'general';
        
        RAISE NOTICE 'Added agent_type column to deployed_agents table';
    ELSE
        RAISE NOTICE 'agent_type column already exists in deployed_agents table';
    END IF;

    -- Update existing records to have proper values
    UPDATE public.deployed_agents 
    SET agent_name = COALESCE(agent_name, 'Unnamed Agent')
    WHERE agent_name IS NULL OR agent_name = '';

    UPDATE public.deployed_agents 
    SET agent_type = COALESCE(agent_type, 'general')
    WHERE agent_type IS NULL OR agent_type = '';

END $$;

-- Verify the table structure
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_name = 'deployed_agents' 
AND table_schema = 'public'
ORDER BY ordinal_position;

-- Show sample data to verify
SELECT id, agent_id, user_id, agent_name, agent_description, agent_type, icon, status, created_at
FROM public.deployed_agents
LIMIT 5;
