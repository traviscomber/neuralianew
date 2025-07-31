-- Fix User Analytics Trigger to Handle NULL user_id
-- This script makes user_analytics.user_id nullable and updates the trigger

-- First, make user_analytics.user_id nullable
DO $$
BEGIN
    -- Check if user_analytics table exists
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'user_analytics' AND table_schema = 'public') THEN
        -- Make user_id nullable in user_analytics table
        ALTER TABLE public.user_analytics ALTER COLUMN user_id DROP NOT NULL;
        RAISE NOTICE 'Made user_analytics.user_id nullable';
    ELSE
        RAISE NOTICE 'user_analytics table does not exist, skipping';
    END IF;
END $$;

-- Check if there's a trigger on ai_agents that creates analytics
DO $$
DECLARE
    trigger_exists boolean;
BEGIN
    SELECT EXISTS (
        SELECT 1 FROM information_schema.triggers 
        WHERE event_object_table = 'ai_agents' 
        AND trigger_name LIKE '%analytics%'
    ) INTO trigger_exists;
    
    IF trigger_exists THEN
        RAISE NOTICE 'Found analytics trigger on ai_agents table';
    ELSE
        RAISE NOTICE 'No analytics trigger found on ai_agents table';
    END IF;
END $$;

-- Create or replace a safe analytics function that handles NULL user_id
CREATE OR REPLACE FUNCTION handle_ai_agent_analytics()
RETURNS TRIGGER AS $$
BEGIN
    -- Only create analytics for user-owned agents (not marketplace agents)
    IF NEW.user_id IS NOT NULL THEN
        -- Check if user_analytics table exists before inserting
        IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'user_analytics' AND table_schema = 'public') THEN
            INSERT INTO public.user_analytics (
                user_id,
                event_type,
                event_data,
                created_at
            ) VALUES (
                NEW.user_id,
                'agent_created',
                json_build_object(
                    'agent_id', NEW.id,
                    'agent_name', NEW.name,
                    'agent_type', NEW.type
                ),
                NOW()
            );
        END IF;
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger if it doesn't exist
DO $$
BEGIN
    -- Drop existing trigger if it exists
    DROP TRIGGER IF EXISTS ai_agent_analytics_trigger ON public.ai_agents;
    
    -- Create new safe trigger
    CREATE TRIGGER ai_agent_analytics_trigger
        AFTER INSERT ON public.ai_agents
        FOR EACH ROW
        EXECUTE FUNCTION handle_ai_agent_analytics();
        
    RAISE NOTICE 'Created safe analytics trigger';
END $$;

-- Test the fix with a sample marketplace agent (will be rolled back)
DO $$
BEGIN
    BEGIN
        INSERT INTO public.ai_agents (name, type, description, status, user_id, created_at, updated_at)
        VALUES ('Test Marketplace Agent', 'neural-executive', 'Test description', 'active', NULL, NOW(), NOW());
        
        RAISE NOTICE 'SUCCESS: Marketplace agent with NULL user_id inserted successfully';
        
        -- Clean up test data
        DELETE FROM public.ai_agents WHERE name = 'Test Marketplace Agent';
        
    EXCEPTION WHEN OTHERS THEN
        RAISE NOTICE 'ERROR: Still having issues with NULL user_id: %', SQLERRM;
    END;
END $$;

SELECT 'USER ANALYTICS TRIGGER FIX COMPLETED!' as final_status;
