-- Add trial-related columns to deployed_agents table
-- This script adds support for 5-day free trials

-- Add trial columns if they don't exist
ALTER TABLE deployed_agents 
ADD COLUMN IF NOT EXISTS is_trial BOOLEAN DEFAULT false;

ALTER TABLE deployed_agents 
ADD COLUMN IF NOT EXISTS trial_ends_at TIMESTAMPTZ;

ALTER TABLE deployed_agents 
ADD COLUMN IF NOT EXISTS upgraded_at TIMESTAMPTZ;

ALTER TABLE deployed_agents 
ADD COLUMN IF NOT EXISTS payment_status VARCHAR(50) DEFAULT 'pending';

-- Update existing records to have proper trial status
UPDATE deployed_agents 
SET is_trial = true, 
    payment_status = 'trial'
WHERE payment_status = 'pending' OR payment_status IS NULL;

-- Create function to check if trial is expired
CREATE OR REPLACE FUNCTION is_trial_expired(trial_end TIMESTAMPTZ)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN trial_end IS NOT NULL AND trial_end < NOW();
END;
$$ LANGUAGE plpgsql;

-- Create function to get agent status
CREATE OR REPLACE FUNCTION get_agent_status(
    p_status VARCHAR,
    p_is_trial BOOLEAN,
    p_trial_ends_at TIMESTAMPTZ
)
RETURNS VARCHAR AS $$
BEGIN
    -- Check if trial has expired
    IF p_is_trial AND p_trial_ends_at IS NOT NULL AND p_trial_ends_at < NOW() THEN
        RETURN 'expired';
    END IF;
    
    -- Check if it's on trial
    IF p_is_trial AND p_trial_ends_at IS NOT NULL AND p_trial_ends_at > NOW() THEN
        RETURN 'trial';
    END IF;
    
    -- Return the current status
    RETURN p_status;
END;
$$ LANGUAGE plpgsql;

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_deployed_agents_trial_ends_at 
ON deployed_agents(trial_ends_at);

CREATE INDEX IF NOT EXISTS idx_deployed_agents_payment_status 
ON deployed_agents(payment_status);

-- Show table structure
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns 
WHERE table_name = 'deployed_agents' 
ORDER BY ordinal_position;

-- Show sample data
SELECT id, agent_id, name, status, is_trial, trial_ends_at, payment_status, created_at 
FROM deployed_agents 
ORDER BY created_at DESC 
LIMIT 5;
