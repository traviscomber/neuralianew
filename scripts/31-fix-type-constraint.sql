-- Fix Type Constraint to Allow Neural Agent Types
-- This script updates the ai_agents type constraint to include all neural agent types

-- First, drop the existing type constraint
DO $$
BEGIN
    -- Drop the existing type constraint if it exists
    IF EXISTS (
        SELECT 1 FROM pg_constraint 
        WHERE conname = 'ai_agents_type_check' 
        AND conrelid = 'public.ai_agents'::regclass
    ) THEN
        ALTER TABLE public.ai_agents DROP CONSTRAINT ai_agents_type_check;
        RAISE NOTICE 'Dropped existing ai_agents_type_check constraint';
    ELSE
        RAISE NOTICE 'No existing ai_agents_type_check constraint found';
    END IF;
END $$;

-- Add new type constraint with all neural agent types
ALTER TABLE public.ai_agents 
ADD CONSTRAINT ai_agents_type_check 
CHECK (type IN (
    'neural-executive',
    'neural-marketing', 
    'neural-technical',
    'neural-finance',
    'neural-sales',
    'neural-hr',
    'neural-analytics',
    'neural-support',
    'neural-product',
    'neural-operations',
    'sales-coach',
    'hr-advisory',
    'technical-support',
    'customer-service',
    'data-analyst',
    'business-consultant',
    'project-manager',
    'content-creator'
));

-- Test the new constraint with a sample insert (will be rolled back)
DO $$
BEGIN
    -- Test that neural types are now allowed
    BEGIN
        INSERT INTO public.ai_agents (name, type, description, status, user_id, created_at, updated_at)
        VALUES ('Test Neural Agent', 'neural-executive', 'Test description', 'active', NULL, NOW(), NOW());
        
        -- If we get here, the constraint allows neural types
        RAISE NOTICE 'SUCCESS: Neural agent types are now allowed';
        
        -- Clean up test data
        DELETE FROM public.ai_agents WHERE name = 'Test Neural Agent';
        
    EXCEPTION WHEN check_violation THEN
        RAISE NOTICE 'ERROR: Neural agent types still not allowed';
    END;
END $$;

-- Show the new constraint
SELECT 'NEW TYPE CONSTRAINT:' as info;
SELECT 
    conname as constraint_name,
    pg_get_constraintdef(oid) as definition
FROM pg_constraint 
WHERE conrelid = 'public.ai_agents'::regclass 
AND contype = 'c'
AND conname = 'ai_agents_type_check';

SELECT 'TYPE CONSTRAINT FIX COMPLETED!' as final_status;
