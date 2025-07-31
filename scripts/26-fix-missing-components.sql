-- Fix Missing Database Components
-- Run this if verification shows missing components

SELECT '🔧 FIXING MISSING DATABASE COMPONENTS' as status;

-- 1. Add missing columns to deployed_agents if they don't exist
SELECT '1️⃣ CHECKING AND ADDING MISSING COLUMNS' as step;

-- Add trial columns if missing
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'deployed_agents' AND column_name = 'trial_start') THEN
        ALTER TABLE public.deployed_agents ADD COLUMN trial_start TIMESTAMP WITH TIME ZONE;
    END IF;
    
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'deployed_agents' AND column_name = 'trial_end') THEN
        ALTER TABLE public.deployed_agents ADD COLUMN trial_end TIMESTAMP WITH TIME ZONE;
    END IF;
END $$;

-- 2. Update status constraint to include trial and expired
SELECT '2️⃣ UPDATING STATUS CONSTRAINTS' as step;

DO $$
BEGIN
    -- Drop existing constraint if it exists
    IF EXISTS (SELECT 1 FROM information_schema.table_constraints WHERE table_name = 'deployed_agents' AND constraint_name = 'deployed_agents_status_check') THEN
        ALTER TABLE public.deployed_agents DROP CONSTRAINT deployed_agents_status_check;
    END IF;
    
    -- Add new constraint with trial and expired
    ALTER TABLE public.deployed_agents ADD CONSTRAINT deployed_agents_status_check 
        CHECK (status IN ('active', 'paused', 'error', 'deploying', 'trial', 'expired'));
END $$;

-- 3. Ensure sample agents exist (FIXED: Remove ON CONFLICT since no unique constraint exists)
SELECT '3️⃣ ENSURING SAMPLE AGENTS EXIST' as step;

-- First check if agents already exist to avoid duplicates
DO $$
BEGIN
    -- Insert Neural CEO if not exists
    IF NOT EXISTS (SELECT 1 FROM public.ai_agents WHERE name = 'Neural CEO') THEN
        INSERT INTO public.ai_agents (name, type, description, status, user_id) 
        VALUES ('Neural CEO', 'neural-executive', 'AI-powered Chief Executive Officer for strategic decision making', 'active', NULL);
    END IF;
    
    -- Insert Neural CMO if not exists
    IF NOT EXISTS (SELECT 1 FROM public.ai_agents WHERE name = 'Neural CMO') THEN
        INSERT INTO public.ai_agents (name, type, description, status, user_id) 
        VALUES ('Neural CMO', 'neural-executive', 'AI-powered Chief Marketing Officer for marketing strategy', 'active', NULL);
    END IF;
    
    -- Insert Neural CTO if not exists
    IF NOT EXISTS (SELECT 1 FROM public.ai_agents WHERE name = 'Neural CTO') THEN
        INSERT INTO public.ai_agents (name, type, description, status, user_id) 
        VALUES ('Neural CTO', 'neural-executive', 'AI-powered Chief Technology Officer for technical leadership', 'active', NULL);
    END IF;
    
    -- Insert Neural CFO if not exists
    IF NOT EXISTS (SELECT 1 FROM public.ai_agents WHERE name = 'Neural CFO') THEN
        INSERT INTO public.ai_agents (name, type, description, status, user_id) 
        VALUES ('Neural CFO', 'neural-executive', 'AI-powered Chief Financial Officer for financial management', 'active', NULL);
    END IF;
    
    -- Insert Neural CHRO if not exists
    IF NOT EXISTS (SELECT 1 FROM public.ai_agents WHERE name = 'Neural CHRO') THEN
        INSERT INTO public.ai_agents (name, type, description, status, user_id) 
        VALUES ('Neural CHRO', 'neural-executive', 'AI-powered Chief Human Resources Officer for people management', 'active', NULL);
    END IF;
    
    -- Insert Neural COO if not exists
    IF NOT EXISTS (SELECT 1 FROM public.ai_agents WHERE name = 'Neural COO') THEN
        INSERT INTO public.ai_agents (name, type, description, status, user_id) 
        VALUES ('Neural COO', 'neural-executive', 'AI-powered Chief Operating Officer for operational excellence', 'active', NULL);
    END IF;
    
    -- Insert Sales Coach Pro if not exists
    IF NOT EXISTS (SELECT 1 FROM public.ai_agents WHERE name = 'Sales Coach Pro') THEN
        INSERT INTO public.ai_agents (name, type, description, status, user_id) 
        VALUES ('Sales Coach Pro', 'sales-coach', 'Advanced AI sales coaching and training assistant', 'active', NULL);
    END IF;
    
    -- Insert HR Advisory Bot if not exists
    IF NOT EXISTS (SELECT 1 FROM public.ai_agents WHERE name = 'HR Advisory Bot') THEN
        INSERT INTO public.ai_agents (name, type, description, status, user_id) 
        VALUES ('HR Advisory Bot', 'hr-advisory', 'Comprehensive HR support and policy guidance', 'active', NULL);
    END IF;
    
    -- Insert Tech Support AI if not exists
    IF NOT EXISTS (SELECT 1 FROM public.ai_agents WHERE name = 'Tech Support AI') THEN
        INSERT INTO public.ai_agents (name, type, description, status, user_id) 
        VALUES ('Tech Support AI', 'technical-support', 'Advanced technical support and troubleshooting', 'active', NULL);
    END IF;
    
    -- Insert Customer Service AI if not exists
    IF NOT EXISTS (SELECT 1 FROM public.ai_agents WHERE name = 'Customer Service AI') THEN
        INSERT INTO public.ai_agents (name, type, description, status, user_id) 
        VALUES ('Customer Service AI', 'customer-service', 'Professional customer service and support', 'active', NULL);
    END IF;
END $$;

-- 4. Update existing deployed agents with trial data if missing
SELECT '4️⃣ UPDATING EXISTING DEPLOYED AGENTS' as step;

UPDATE public.deployed_agents 
SET 
    trial_start = COALESCE(trial_start, deployment_date),
    trial_end = COALESCE(trial_end, deployment_date + INTERVAL '5 days')
WHERE trial_start IS NULL OR trial_end IS NULL;

-- 5. Ensure all required functions exist
SELECT '5️⃣ ENSURING REQUIRED FUNCTIONS EXIST' as step;

-- Recreate handle_new_user function if missing
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, full_name, avatar_url)
    VALUES (
        NEW.id,
        NEW.email,
        NEW.raw_user_meta_data->>'full_name',
        NEW.raw_user_meta_data->>'avatar_url'
    );
    
    INSERT INTO public.user_analytics (user_id)
    VALUES (NEW.id);
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Recreate handle_updated_at function if missing
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Recreate update_user_analytics function if missing
CREATE OR REPLACE FUNCTION public.update_user_analytics()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_TABLE_NAME = 'deployed_agents' THEN
        UPDATE public.user_analytics 
        SET 
            total_agents = (SELECT COUNT(*) FROM public.deployed_agents WHERE user_id = NEW.user_id),
            updated_at = NOW()
        WHERE user_id = NEW.user_id;
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 6. Recreate missing triggers
SELECT '6️⃣ RECREATING MISSING TRIGGERS' as step;

-- Auth trigger
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Updated at triggers
DROP TRIGGER IF EXISTS handle_deployed_agents_updated_at ON public.deployed_agents;
CREATE TRIGGER handle_deployed_agents_updated_at
    BEFORE UPDATE ON public.deployed_agents
    FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Analytics trigger
DROP TRIGGER IF EXISTS update_analytics_on_agent_deploy ON public.deployed_agents;
CREATE TRIGGER update_analytics_on_agent_deploy
    AFTER INSERT ON public.deployed_agents
    FOR EACH ROW EXECUTE FUNCTION public.update_user_analytics();

-- 7. Add unique constraint on ai_agents name for future use
SELECT '7️⃣ ADDING UNIQUE CONSTRAINT ON AI_AGENTS NAME' as step;

DO $$
BEGIN
    -- Add unique constraint on name if it doesn't exist
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE table_name = 'ai_agents' 
        AND constraint_name = 'ai_agents_name_key'
    ) THEN
        ALTER TABLE public.ai_agents ADD CONSTRAINT ai_agents_name_key UNIQUE (name);
    END IF;
END $$;

-- 8. Verify sample data was inserted
SELECT '8️⃣ VERIFYING SAMPLE DATA' as step;

SELECT 
    name,
    type,
    status,
    '✅ AGENT READY' as agent_status
FROM public.ai_agents
WHERE status = 'active'
ORDER BY type, name;

SELECT '✅ MISSING COMPONENTS FIXED SUCCESSFULLY!' as final_status;
