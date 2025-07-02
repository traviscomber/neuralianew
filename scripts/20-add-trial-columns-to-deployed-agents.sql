-- Add trial-related columns to deployed_agents table

-- Add is_trial column
ALTER TABLE deployed_agents 
ADD COLUMN IF NOT EXISTS is_trial BOOLEAN DEFAULT false;

-- Add trial_ends_at column
ALTER TABLE deployed_agents 
ADD COLUMN IF NOT EXISTS trial_ends_at TIMESTAMPTZ;

-- Add trial_started_at column
ALTER TABLE deployed_agents 
ADD COLUMN IF NOT EXISTS trial_started_at TIMESTAMPTZ;

-- Add expires_at column (for paid subscriptions)
ALTER TABLE deployed_agents 
ADD COLUMN IF NOT EXISTS expires_at TIMESTAMPTZ;

-- Add payment_status column
ALTER TABLE deployed_agents 
ADD COLUMN IF NOT EXISTS payment_status TEXT DEFAULT 'trial';

-- Add usdt_tx_hash column for payment tracking
ALTER TABLE deployed_agents 
ADD COLUMN IF NOT EXISTS usdt_tx_hash TEXT;

-- Update existing records to set trial status for recent deployments
UPDATE deployed_agents 
SET 
    is_trial = true,
    trial_started_at = created_at,
    trial_ends_at = created_at + INTERVAL '5 days',
    payment_status = 'trial'
WHERE 
    is_trial IS NULL 
    AND created_at > NOW() - INTERVAL '5 days';

-- Create index for trial queries
CREATE INDEX IF NOT EXISTS idx_deployed_agents_trial_ends_at 
ON deployed_agents(trial_ends_at) 
WHERE is_trial = true;

-- Create index for payment status queries
CREATE INDEX IF NOT EXISTS idx_deployed_agents_payment_status 
ON deployed_agents(payment_status);

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
