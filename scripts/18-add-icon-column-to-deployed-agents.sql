-- Add missing 'icon' column to deployed_agents table
-- This fixes the "Could not find the 'icon' column" error

-- Add the icon column if it doesn't exist
DO $$ 
BEGIN
    -- Check if icon column exists, if not add it
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'deployed_agents' 
        AND column_name = 'icon'
        AND table_schema = 'public'
    ) THEN
        ALTER TABLE public.deployed_agents ADD COLUMN icon TEXT DEFAULT '🤖';
        
        -- Update existing rows to have a default icon if they don't have one
        UPDATE public.deployed_agents 
        SET icon = '🤖' 
        WHERE icon IS NULL;
        
        RAISE NOTICE 'Added icon column to deployed_agents table';
    ELSE
        RAISE NOTICE 'Icon column already exists in deployed_agents table';
    END IF;
END $$;

-- Add index for better performance on icon queries
CREATE INDEX IF NOT EXISTS idx_deployed_agents_icon ON public.deployed_agents(icon);

-- Add comment for documentation
COMMENT ON COLUMN public.deployed_agents.icon IS 'Emoji or icon representation for the deployed agent';
