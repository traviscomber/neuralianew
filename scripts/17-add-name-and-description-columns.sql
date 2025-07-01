-- Adds `name` and `description` to the deployed_agents table
-- (only if they don't already exist) so the React app can read/write them.
-- This script is idempotent and can be run many times safely.

DO $$
BEGIN
  /* --------------------------------------------------------------
   * name
   * ------------------------------------------------------------ */
  IF NOT EXISTS (
    SELECT 1
    FROM   information_schema.columns
    WHERE  table_schema = 'public'
    AND    table_name   = 'deployed_agents'
    AND    column_name  = 'name'
  ) THEN
    ALTER TABLE public.deployed_agents
      ADD COLUMN name text NOT NULL DEFAULT '';
  END IF;

  /* --------------------------------------------------------------
   * description
   * ------------------------------------------------------------ */
  IF NOT EXISTS (
    SELECT 1
    FROM   information_schema.columns
    WHERE  table_schema = 'public'
    AND    table_name   = 'deployed_agents'
    AND    column_name  = 'description'
  ) THEN
    ALTER TABLE public.deployed_agents
      ADD COLUMN description text NOT NULL DEFAULT '';
  END IF;
END $$;
