-- Verify AI Agents table structure and setup

-- 1. Check table structure
SELECT 
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_schema = 'public' 
AND table_name = 'ai_agents'
ORDER BY ordinal_position;

-- 2. Check if table exists and count records
SELECT 
    'ai_agents table exists' as status,
    COUNT(*) as record_count
FROM public.ai_agents;

-- 3. Check RLS policies
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual
FROM pg_policies 
WHERE tablename = 'ai_agents';

-- 4. Check indexes
SELECT 
    indexname,
    indexdef
FROM pg_indexes 
WHERE tablename = 'ai_agents' 
AND schemaname = 'public';

-- 5. Check constraints
SELECT 
    constraint_name,
    constraint_type
FROM information_schema.table_constraints 
WHERE table_name = 'ai_agents' 
AND table_schema = 'public';

-- Success message
SELECT 'AI Agents table verification complete!' as final_status;
