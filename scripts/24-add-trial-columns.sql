-- Add trial_start and trial_end columns to deployed_agents table if they don't exist
ALTER TABLE deployed_agents 
ADD COLUMN IF NOT EXISTS trial_start TIMESTAMPTZ,
ADD COLUMN IF NOT EXISTS trial_end TIMESTAMPTZ;

-- Update existing records to have trial dates if they don't have them
UPDATE deployed_agents 
SET 
  trial_start = COALESCE(trial_start, deployment_date),
  trial_end = COALESCE(trial_end, deployment_date + INTERVAL '5 days')
WHERE trial_start IS NULL OR trial_end IS NULL;

-- Ensure status column allows 'trial' and 'expired' values
ALTER TABLE deployed_agents 
DROP CONSTRAINT IF EXISTS deployed_agents_status_check;

ALTER TABLE deployed_agents 
ADD CONSTRAINT deployed_agents_status_check 
CHECK (status IN ('deploying', 'active', 'trial', 'expired', 'inactive'));
