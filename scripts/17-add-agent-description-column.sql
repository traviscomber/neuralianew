-- 17-add-agent-description-column.sql
-- Adds agent_description to deployed_agents if it doesn't exist.
-- Safe to run multiple times.

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM   information_schema.columns
    WHERE  table_name = 'deployed_agents'
    AND    column_name = 'agent_description'
  )
  THEN
    ALTER TABLE deployed_agents
      ADD COLUMN agent_description text;
  END IF;
END
$$;
