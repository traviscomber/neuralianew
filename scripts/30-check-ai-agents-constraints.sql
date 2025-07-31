-- Check ai_agents table structure and constraints
SELECT 'TABLE STRUCTURE' as info_type;

-- Show table structure
SELECT 
    column_name,
    data_type,
    is_nullable,
    column_default,
    character_maximum_length
FROM information_schema.columns 
WHERE table_name = 'ai_agents' 
ORDER BY ordinal_position;

SELECT 'CONSTRAINTS' as info_type;

-- Show all constraints on ai_agents table
SELECT 
    tc.constraint_name,
    tc.constraint_type,
    kcu.column_name,
    cc.check_clause
FROM information_schema.table_constraints tc
LEFT JOIN information_schema.key_column_usage kcu 
    ON tc.constraint_name = kcu.constraint_name
LEFT JOIN information_schema.check_constraints cc 
    ON tc.constraint_name = cc.constraint_name
WHERE tc.table_name = 'ai_agents'
ORDER BY tc.constraint_type, tc.constraint_name;

SELECT 'CHECK CONSTRAINTS DETAILS' as info_type;

-- Show detailed check constraints
SELECT 
    constraint_name,
    check_clause
FROM information_schema.check_constraints
WHERE constraint_name IN (
    SELECT constraint_name 
    FROM information_schema.table_constraints 
    WHERE table_name = 'ai_agents' AND constraint_type = 'CHECK'
);

SELECT 'CURRENT DATA' as info_type;

-- Show current agents in table
SELECT 
    id,
    name,
    type,
    user_id,
    created_at
FROM ai_agents 
ORDER BY created_at DESC
LIMIT 10;

SELECT 'AGENT TYPES IN USE' as info_type;

-- Show what types are currently in use
SELECT 
    type,
    COUNT(*) as count
FROM ai_agents 
GROUP BY type
ORDER BY count DESC;

SELECT 'TABLE EXISTS CHECK' as info_type;

-- Verify table exists
SELECT 
    table_name,
    table_type
FROM information_schema.tables 
WHERE table_name = 'ai_agents';
