-- Add missing trial columns so the code can write to them.
-- Run this once in Supabase (or via the “Run” button) before testing deployments.

ALTER TABLE deployed_agents
ADD COLUMN IF NOT EXISTS trial_start timestamptz,
ADD COLUMN IF NOT EXISTS trial_end   timestamptz;
