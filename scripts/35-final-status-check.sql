-- Final Status Check - Show Current System State
-- This shows the current state of your neural agent trial system

SELECT '=== NEURALIA SYSTEM STATUS ===' as header;

-- Show all available neural agents in marketplace
SELECT 
    '🤖 MARKETPLACE NEURAL AGENTS' as section,
    name,
    type,
    description,
    status,
    created_at
FROM public.ai_agents 
WHERE user_id IS NULL 
AND type LIKE 'neural-%'
ORDER BY created_at DESC;

-- Show active deployments with trial info
SELECT 
    '⚡ ACTIVE DEPLOYMENTS' as section,
    name,
    agent_type,
    status,
    CASE 
        WHEN status = 'trial' THEN 
            EXTRACT(days FROM (trial_end - NOW()))::text || ' days remaining'
        ELSE 'Active subscription'
    END as trial_status,
    deployment_date
FROM public.deployed_agents 
ORDER BY deployment_date DESC;

-- Show system health
SELECT 
    '📊 SYSTEM HEALTH' as section,
    'ai_agents' as table_name,
    COUNT(*) as total_records,
    COUNT(CASE WHEN type LIKE 'neural-%' THEN 1 END) as neural_agents,
    COUNT(CASE WHEN user_id IS NULL THEN 1 END) as marketplace_ready
FROM public.ai_agents

UNION ALL

SELECT 
    '📊 SYSTEM HEALTH' as section,
    'deployed_agents' as table_name,
    COUNT(*) as total_records,
    COUNT(CASE WHEN status = 'trial' THEN 1 END) as active_trials,
    COUNT(CASE WHEN trial_end > NOW() THEN 1 END) as valid_trials
FROM public.deployed_agents;

SELECT '✅ NEURAL AGENT TRIAL SYSTEM IS READY!' as final_message;
