-- Check current AI agents table structure and constraints
SELECT 
    table_name,
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_name = 'ai_agents' 
ORDER BY ordinal_position;

-- Check constraints on ai_agents table
SELECT 
    tc.constraint_name,
    tc.constraint_type,
    kcu.column_name,
    ccu.table_name AS foreign_table_name,
    ccu.column_name AS foreign_column_name
FROM information_schema.table_constraints AS tc 
JOIN information_schema.key_column_usage AS kcu
    ON tc.constraint_name = kcu.constraint_name
    AND tc.table_schema = kcu.table_schema
LEFT JOIN information_schema.constraint_column_usage AS ccu
    ON ccu.constraint_name = tc.constraint_name
    AND ccu.table_schema = tc.table_schema
WHERE tc.table_name = 'ai_agents';

-- Check indexes on ai_agents table
SELECT 
    indexname,
    indexdef
FROM pg_indexes 
WHERE tablename = 'ai_agents';

-- Sample data from ai_agents table
SELECT 
    id,
    name,
    description,
    agent_type,
    created_at,
    updated_at
FROM ai_agents 
LIMIT 5;
