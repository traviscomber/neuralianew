-- Fix user portal issues by ensuring proper user setup and data

-- 1. Create missing profiles for auth users
INSERT INTO profiles (id, email, name, created_at, updated_at)
SELECT 
    au.id,
    au.email,
    COALESCE(au.raw_user_meta_data->>'name', split_part(au.email, '@', 1)),
    au.created_at,
    NOW()
FROM auth.users au
LEFT JOIN profiles p ON au.id = p.id
WHERE p.id IS NULL
ON CONFLICT (id) DO NOTHING;

-- 2. Update any deployed agents with missing user references
UPDATE deployed_agents 
SET user_id = (SELECT id FROM profiles LIMIT 1)
WHERE user_id IS NULL 
AND EXISTS (SELECT 1 FROM profiles);

-- 3. Create a sample deployed agent for testing if none exist
DO $$
DECLARE
    sample_user_id uuid;
BEGIN
    -- Get a user ID
    SELECT id INTO sample_user_id FROM profiles LIMIT 1;
    
    IF sample_user_id IS NOT NULL THEN
        -- Insert sample agents if none exist for this user
        INSERT INTO deployed_agents (
            user_id,
            agent_id,
            name,
            agent_name,
            description,
            agent_description,
            agent_type,
            icon,
            status,
            deployment_date,
            trial_start,
            trial_end
        )
        SELECT 
            sample_user_id,
            'sample-' || generate_random_uuid()::text,
            'Sample CEO Agent',
            'Sample CEO Agent',
            'Strategic leadership and decision-making AI for testing',
            'Strategic leadership and decision-making AI for testing',
            'neural-executive',
            '👔',
            'trial',
            NOW(),
            NOW(),
            NOW() + INTERVAL '5 days'
        WHERE NOT EXISTS (
            SELECT 1 FROM deployed_agents WHERE user_id = sample_user_id
        );
        
        RAISE NOTICE 'Sample agent created for user: %', sample_user_id;
    END IF;
END $$;

-- 4. Verify the fix
SELECT 'Verification - Users with deployed agents:' as step;

SELECT 
    p.email,
    p.name,
    COUNT(da.id) as agent_count
FROM profiles p
LEFT JOIN deployed_agents da ON p.id = da.user_id
GROUP BY p.id, p.email, p.name
ORDER BY agent_count DESC;
