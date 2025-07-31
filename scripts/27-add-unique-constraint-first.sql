-- Add unique constraint to ai_agents table first
-- This enables the use of ON CONFLICT in future scripts

\echo '🔧 ADDING UNIQUE CONSTRAINT TO AI_AGENTS TABLE'

-- 1. Check current table structure
\echo '1️⃣ CHECKING CURRENT TABLE STRUCTURE'

SELECT 
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_name = 'ai_agents' 
AND table_schema = 'public'
ORDER BY ordinal_position;

-- 2. Make user_id nullable if it's not already (for marketplace agents)
\echo '2️⃣ MAKING USER_ID NULLABLE FOR MARKETPLACE AGENTS'

DO $$
DECLARE
    user_id_nullable TEXT;
BEGIN
    SELECT is_nullable INTO user_id_nullable
    FROM information_schema.columns 
    WHERE table_name = 'ai_agents' 
    AND column_name = 'user_id'
    AND table_schema = 'public';
    
    IF user_id_nullable = 'NO' THEN
        ALTER TABLE public.ai_agents ALTER COLUMN user_id DROP NOT NULL;
        RAISE NOTICE '✅ user_id column is now nullable';
    ELSE
        RAISE NOTICE '✅ user_id column already allows NULL values';
    END IF;
END $$;

-- 3. Add unique constraint on name if it doesn't exist
\echo '3️⃣ ADDING UNIQUE CONSTRAINT ON NAME'

DO $$
BEGIN
    -- Check if unique constraint already exists
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE table_name = 'ai_agents' 
        AND constraint_name = 'ai_agents_name_key'
        AND table_schema = 'public'
    ) THEN
        -- Add unique constraint on name
        ALTER TABLE public.ai_agents ADD CONSTRAINT ai_agents_name_key UNIQUE (name);
        RAISE NOTICE '✅ Added unique constraint on name column';
    ELSE
        RAISE NOTICE '✅ Unique constraint on name already exists';
    END IF;
END $$;

-- 4. Verify constraints
\echo '4️⃣ VERIFYING CONSTRAINTS'

SELECT 
    constraint_name,
    constraint_type,
    table_name
FROM information_schema.table_constraints 
WHERE table_name = 'ai_agents' 
AND table_schema = 'public'
ORDER BY constraint_type, constraint_name;

-- 5. Show current data in table
\echo '5️⃣ SHOWING CURRENT DATA'

SELECT 
    COUNT(*) as total_agents,
    COUNT(CASE WHEN user_id IS NULL THEN 1 END) as marketplace_agents,
    COUNT(CASE WHEN user_id IS NOT NULL THEN 1 END) as user_agents
FROM public.ai_agents;

\echo '✅ UNIQUE CONSTRAINT SETUP COMPLETE!'
