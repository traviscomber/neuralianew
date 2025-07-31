-- Insert Sample Marketplace Agents Safely
-- This script adds 10 professional AI agents to the marketplace

-- Check if agents already exist before inserting
SELECT 'CHECKING EXISTING AGENTS:' as info;

SELECT COUNT(*) as existing_agent_count FROM public.ai_agents WHERE user_id IS NULL;

DO $$
DECLARE
    agent_count INTEGER;
BEGIN
    RAISE NOTICE 'Starting safe insertion of sample agents...';
    
    -- Check current agent count
    SELECT COUNT(*) INTO agent_count FROM public.ai_agents WHERE user_id IS NULL;
    RAISE NOTICE 'Current marketplace agents: %', agent_count;

    -- Insert Neural CEO if not exists
    IF NOT EXISTS (SELECT 1 FROM public.ai_agents WHERE name = 'Neural CEO') THEN
        INSERT INTO public.ai_agents (
            name, type, description, status, user_id, 
            created_at, updated_at
        ) VALUES (
            'Neural CEO', 
            'neural-executive', 
            'AI-powered Chief Executive Officer specializing in strategic decision-making, business planning, and organizational leadership. Provides executive-level insights and guidance.',
            'active', 
            NULL,
            NOW(),
            NOW()
        );
        RAISE NOTICE 'Inserted Neural CEO';
    ELSE
        RAISE NOTICE 'Neural CEO already exists';
    END IF;

    -- Insert Neural CMO if not exists
    IF NOT EXISTS (SELECT 1 FROM public.ai_agents WHERE name = 'Neural CMO') THEN
        INSERT INTO public.ai_agents (
            name, type, description, status, user_id, 
            created_at, updated_at
        ) VALUES (
            'Neural CMO', 
            'neural-marketing', 
            'AI-powered Chief Marketing Officer expert in digital marketing strategies, brand management, customer acquisition, and market analysis. Drives growth through data-driven marketing.',
            'active', 
            NULL,
            NOW(),
            NOW()
        );
        RAISE NOTICE 'Inserted Neural CMO';
    ELSE
        RAISE NOTICE 'Neural CMO already exists';
    END IF;

    -- Insert Neural CTO if not exists
    IF NOT EXISTS (SELECT 1 FROM public.ai_agents WHERE name = 'Neural CTO') THEN
        INSERT INTO public.ai_agents (
            name, type, description, status, user_id, 
            created_at, updated_at
        ) VALUES (
            'Neural CTO', 
            'neural-technical', 
            'AI-powered Chief Technology Officer specializing in technical architecture, software development, infrastructure planning, and technology strategy. Guides technical decisions.',
            'active', 
            NULL,
            NOW(),
            NOW()
        );
        RAISE NOTICE 'Inserted Neural CTO';
    ELSE
        RAISE NOTICE 'Neural CTO already exists';
    END IF;

    -- Insert Neural CFO if not exists
    IF NOT EXISTS (SELECT 1 FROM public.ai_agents WHERE name = 'Neural CFO') THEN
        INSERT INTO public.ai_agents (
            name, type, description, status, user_id, 
            created_at, updated_at
        ) VALUES (
            'Neural CFO', 
            'neural-finance', 
            'AI-powered Chief Financial Officer expert in financial planning, budgeting, investment analysis, and risk management. Provides strategic financial guidance and insights.',
            'active', 
            NULL,
            NOW(),
            NOW()
        );
        RAISE NOTICE 'Inserted Neural CFO';
    ELSE
        RAISE NOTICE 'Neural CFO already exists';
    END IF;

    -- Insert Neural Sales Director if not exists
    IF NOT EXISTS (SELECT 1 FROM public.ai_agents WHERE name = 'Neural Sales Director') THEN
        INSERT INTO public.ai_agents (
            name, type, description, status, user_id, 
            created_at, updated_at
        ) VALUES (
            'Neural Sales Director', 
            'neural-sales', 
            'AI-powered Sales Director specializing in sales strategy, lead generation, customer relationship management, and revenue optimization. Drives sales performance and growth.',
            'active', 
            NULL,
            NOW(),
            NOW()
        );
        RAISE NOTICE 'Inserted Neural Sales Director';
    ELSE
        RAISE NOTICE 'Neural Sales Director already exists';
    END IF;

    -- Insert Neural HR Manager if not exists
    IF NOT EXISTS (SELECT 1 FROM public.ai_agents WHERE name = 'Neural HR Manager') THEN
        INSERT INTO public.ai_agents (
            name, type, description, status, user_id, 
            created_at, updated_at
        ) VALUES (
            'Neural HR Manager', 
            'neural-hr', 
            'AI-powered Human Resources Manager expert in talent acquisition, employee development, performance management, and organizational culture. Optimizes human capital.',
            'active', 
            NULL,
            NOW(),
            NOW()
        );
        RAISE NOTICE 'Inserted Neural HR Manager';
    ELSE
        RAISE NOTICE 'Neural HR Manager already exists';
    END IF;

    -- Insert Neural Data Analyst if not exists
    IF NOT EXISTS (SELECT 1 FROM public.ai_agents WHERE name = 'Neural Data Analyst') THEN
        INSERT INTO public.ai_agents (
            name, type, description, status, user_id, 
            created_at, updated_at
        ) VALUES (
            'Neural Data Analyst', 
            'neural-analytics', 
            'AI-powered Data Analyst specializing in data visualization, statistical analysis, predictive modeling, and business intelligence. Transforms data into actionable insights.',
            'active', 
            NULL,
            NOW(),
            NOW()
        );
        RAISE NOTICE 'Inserted Neural Data Analyst';
    ELSE
        RAISE NOTICE 'Neural Data Analyst already exists';
    END IF;

    -- Insert Neural Customer Success if not exists
    IF NOT EXISTS (SELECT 1 FROM public.ai_agents WHERE name = 'Neural Customer Success') THEN
        INSERT INTO public.ai_agents (
            name, type, description, status, user_id, 
            created_at, updated_at
        ) VALUES (
            'Neural Customer Success', 
            'neural-support', 
            'AI-powered Customer Success Manager expert in customer onboarding, retention strategies, support optimization, and relationship management. Ensures customer satisfaction.',
            'active', 
            NULL,
            NOW(),
            NOW()
        );
        RAISE NOTICE 'Inserted Neural Customer Success';
    ELSE
        RAISE NOTICE 'Neural Customer Success already exists';
    END IF;

    -- Insert Neural Product Manager if not exists
    IF NOT EXISTS (SELECT 1 FROM public.ai_agents WHERE name = 'Neural Product Manager') THEN
        INSERT INTO public.ai_agents (
            name, type, description, status, user_id, 
            created_at, updated_at
        ) VALUES (
            'Neural Product Manager', 
            'neural-product', 
            'AI-powered Product Manager specializing in product strategy, roadmap planning, feature prioritization, and user experience optimization. Drives product success.',
            'active', 
            NULL,
            NOW(),
            NOW()
        );
        RAISE NOTICE 'Inserted Neural Product Manager';
    ELSE
        RAISE NOTICE 'Neural Product Manager already exists';
    END IF;

    -- Insert Neural Operations Director if not exists
    IF NOT EXISTS (SELECT 1 FROM public.ai_agents WHERE name = 'Neural Operations Director') THEN
        INSERT INTO public.ai_agents (
            name, type, description, status, user_id, 
            created_at, updated_at
        ) VALUES (
            'Neural Operations Director', 
            'neural-operations', 
            'AI-powered Operations Director expert in process optimization, supply chain management, quality control, and operational efficiency. Streamlines business operations.',
            'active', 
            NULL,
            NOW(),
            NOW()
        );
        RAISE NOTICE 'Inserted Neural Operations Director';
    ELSE
        RAISE NOTICE 'Neural Operations Director already exists';
    END IF;

    RAISE NOTICE 'Sample agents insertion process completed!';
END $$;

-- Verify all agents were inserted
SELECT 'VERIFICATION - TOTAL AGENTS:' as info;
SELECT COUNT(*) as total_agents FROM public.ai_agents;

SELECT 'VERIFICATION - MARKETPLACE AGENTS (NULL user_id):' as info;
SELECT COUNT(*) as marketplace_agents FROM public.ai_agents WHERE user_id IS NULL;

SELECT 'VERIFICATION - AGENT TYPES:' as info;
SELECT 
    type,
    COUNT(*) as count
FROM public.ai_agents 
GROUP BY type
ORDER BY type;

SELECT 'VERIFICATION - ALL AGENTS:' as info;
SELECT 
    name,
    type,
    status,
    user_id,
    created_at
FROM public.ai_agents 
ORDER BY created_at DESC;

SELECT 'SAMPLE AGENTS INSERTION COMPLETED!' as final_status;
