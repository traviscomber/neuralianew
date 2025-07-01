-- Add trial-related columns to deployed_agents table
DO $$ 
BEGIN
    -- Add is_trial column
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'deployed_agents' AND column_name = 'is_trial') THEN
        ALTER TABLE deployed_agents ADD COLUMN is_trial BOOLEAN DEFAULT false;
    END IF;

    -- Add trial_ends_at column
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'deployed_agents' AND column_name = 'trial_ends_at') THEN
        ALTER TABLE deployed_agents ADD COLUMN trial_ends_at TIMESTAMPTZ;
    END IF;

    -- Add trial_started_at column
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'deployed_agents' AND column_name = 'trial_started_at') THEN
        ALTER TABLE deployed_agents ADD COLUMN trial_started_at TIMESTAMPTZ;
    END IF;

    -- Update existing records to set trial status for recent deployments
    UPDATE deployed_agents 
    SET 
        is_trial = true,
        trial_started_at = created_at,
        trial_ends_at = created_at + INTERVAL '5 days'
    WHERE 
        is_trial IS NULL 
        AND created_at > NOW() - INTERVAL '5 days'
        AND status != 'active';

END $$;

-- Create index for trial queries
CREATE INDEX IF NOT EXISTS idx_deployed_agents_trial_ends_at 
ON deployed_agents(trial_ends_at) 
WHERE is_trial = true;

-- Create function to check expired trials
CREATE OR REPLACE FUNCTION check_expired_trials()
RETURNS void AS $$
BEGIN
    UPDATE deployed_agents 
    SET status = 'expired'
    WHERE 
        is_trial = true 
        AND trial_ends_at < NOW() 
        AND status = 'trial';
END;
$$ LANGUAGE plpgsql;

-- Show updated table structure
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns 
WHERE table_name = 'deployed_agents' 
ORDER BY ordinal_position;

-- Show sample data
SELECT id, name, status, is_trial, trial_ends_at, created_at
FROM deployed_agents 
LIMIT 5;
