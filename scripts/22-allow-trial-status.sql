-- Update the status constraint to allow 'trial' and 'expired' values
ALTER TABLE deployed_agents 
DROP CONSTRAINT IF EXISTS deployed_agents_status_check;

ALTER TABLE deployed_agents 
ADD CONSTRAINT deployed_agents_status_check 
CHECK (status IN ('deploying', 'active', 'trial', 'expired'));

-- Also ensure the name column exists and is not null
ALTER TABLE deployed_agents 
ADD COLUMN IF NOT EXISTS name TEXT;

-- Update existing records to have a name if they don't
UPDATE deployed_agents 
SET name = agent_name 
WHERE name IS NULL AND agent_name IS NOT NULL;

-- Make name column NOT NULL after updating existing records
ALTER TABLE deployed_agents 
ALTER COLUMN name SET NOT NULL;
