-- Fix AI Agents Table Structure
-- This script makes user_id nullable and adds unique constraint on name

-- Make user_id nullable in ai_agents table
DO $$
BEGIN
    ALTER TABLE public.ai_agents ALTER COLUMN user_id DROP NOT NULL;
    RAISE NOTICE 'Made ai_agents.user_id nullable';
EXCEPTION WHEN OTHERS THEN
    RAISE NOTICE 'Could not make user_id nullable: %', SQLERRM;
END $$;

-- Add unique constraint on name (if it doesn't exist)
DO $$
BEGIN
    ALTER TABLE public.ai_agents ADD CONSTRAINT ai_agents_name_unique UNIQUE (name);
    RAISE NOTICE 'Added unique constraint on ai_agents.name';
EXCEPTION WHEN duplicate_object THEN
    RAISE NOTICE 'Unique constraint on name already exists';
EXCEPTION WHEN OTHERS THEN
    RAISE NOTICE 'Could not add unique constraint: %', SQLERRM;
END $$;

-- Test that NULL user_id inserts work
DO $$
BEGIN
    BEGIN
        INSERT INTO public.ai_agents (name, type, description, status, user_id, created_at, updated_at)
        VALUES ('Test NULL User Agent', 'sales-coach', 'Test description for NULL user_id', 'active', NULL, NOW(), NOW());
        
        RAISE NOTICE 'SUCCESS: NULL user_id insert works';
        
        -- Clean up test data
        DELETE FROM public.ai_agents WHERE name = 'Test NULL User Agent';
        
    EXCEPTION WHEN OTHERS THEN
        RAISE NOTICE 'ERROR: NULL user_id insert failed: %', SQLERRM;
    END;
END $$;

-- Show current table structure
SELECT 'UPDATED TABLE STRUCTURE:' as info;
SELECT 
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_name = 'ai_agents' 
AND table_schema = 'public'
ORDER BY ordinal_position;

-- Show current constraints
SELECT 'CURRENT CONSTRAINTS:' as info;
SELECT 
    conname as constraint_name,
    contype as constraint_type,
    pg_get_constraintdef(oid) as constraint_definition
FROM pg_constraint 
WHERE conrelid = 'public.ai_agents'::regclass
ORDER BY contype, conname;

SELECT 'AI AGENTS TABLE FIX COMPLETED!' as final_status;
