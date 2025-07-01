-- Add trial-related columns to deployed_agents table
DO $$ 
BEGIN
    -- Add is_trial column
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'deployed_agents' AND column_name = 'is_trial') THEN
        ALTER TABLE deployed_agents ADD COLUMN is_trial BOOLEAN DEFAULT false;
        COMMENT ON COLUMN deployed_agents.is_trial IS 'Whether this agent is on a trial period';
    END IF;

    -- Add trial_ends_at column
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'deployed_agents' AND column_name = 'trial_ends_at') THEN
        ALTER TABLE deployed_agents ADD COLUMN trial_ends_at TIMESTAMPTZ;
        COMMENT ON COLUMN deployed_agents.trial_ends_at IS 'When the trial period ends';
    END IF;

    -- Add trial_started_at column
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'deployed_agents' AND column_name = 'trial_started_at') THEN
        ALTER TABLE deployed_agents ADD COLUMN trial_started_at TIMESTAMPTZ;
    END IF;

    -- Add expires_at column (for paid subscriptions)
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'deployed_agents' AND column_name = 'expires_at') THEN
        ALTER TABLE deployed_agents ADD COLUMN expires_at TIMESTAMPTZ;
        COMMENT ON COLUMN deployed_agents.expires_at IS 'When the paid subscription expires';
    END IF;

    -- Add payment_status column
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'deployed_agents' AND column_name = 'payment_status') THEN
        ALTER TABLE deployed_agents ADD COLUMN payment_status TEXT DEFAULT 'trial';
        COMMENT ON COLUMN deployed_agents.payment_status IS 'Payment status: trial, paid, expired';
    END IF;

    -- Add usdt_tx_hash column for payment tracking
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'deployed_agents' AND column_name = 'usdt_tx_hash') THEN
        ALTER TABLE deployed_agents ADD COLUMN usdt_tx_hash TEXT;
        COMMENT ON COLUMN deployed_agents.usdt_tx_hash IS 'USDT transaction hash for payment verification';
    END IF;

    -- Update existing records to set trial status for recent deployments
    UPDATE deployed_agents 
    SET 
        is_trial = true,
        trial_started_at = created_at,
        trial_ends_at = created_at + INTERVAL '5 days',
        payment_status = 'trial'
    WHERE 
        is_trial IS NULL 
        AND created_at > NOW() - INTERVAL '5 days'
        AND status != 'active';

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

    -- Show sample data
    SELECT id, name, status, is_trial, trial_ends_at, payment_status, created_at
    FROM deployed_agents 
    LIMIT 5;

END $$;
