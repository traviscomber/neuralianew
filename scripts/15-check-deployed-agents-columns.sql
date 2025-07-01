-- Check the actual structure of deployed_agents table
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns 
WHERE table_name = 'deployed_agents' 
AND table_schema = 'public'
ORDER BY ordinal_position;

-- Also check constraints
SELECT conname, pg_get_constraintdef(c.oid) 
FROM pg_constraint c 
JOIN pg_class t ON c.conrelid = t.oid 
WHERE t.relname = 'deployed_agents';
