-- Fix complete user flow: profile button, deployed agents, and navigation

-- 1. Ensure profiles table exists and has correct structure
CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL,
    name TEXT,
    avatar_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Ensure deployed_agents table has all required columns
ALTER TABLE deployed_agents 
ADD COLUMN IF NOT EXISTS agent_name TEXT,
ADD COLUMN IF NOT EXISTS agent_description TEXT,
ADD COLUMN IF NOT EXISTS icon TEXT DEFAULT '🤖';

-- 3. Create or replace function to auto-create profiles
CREATE OR REPLACE FUNCTION create_profile_for_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO profiles (id, email, name, created_at, updated_at)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)),
        NOW(),
        NOW()
    )
    ON CONFLICT (id) DO NOTHING;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 4. Create trigger to auto-create profiles
DROP TRIGGER IF EXISTS create_profile_trigger ON auth.users;
CREATE TRIGGER create_profile_trigger
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION create_profile_for_user();

-- 5. Enable RLS on profiles
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- 6. Create RLS policies for profiles
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
CREATE POLICY "Users can view own profile" ON profiles
    FOR SELECT USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
CREATE POLICY "Users can update own profile" ON profiles
    FOR UPDATE USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
CREATE POLICY "Users can insert own profile" ON profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

-- 7. Ensure deployed_agents RLS policies are correct
DROP POLICY IF EXISTS "Users can view own deployed agents" ON deployed_agents;
CREATE POLICY "Users can view own deployed agents" ON deployed_agents
    FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own deployed agents" ON deployed_agents;
CREATE POLICY "Users can insert own deployed agents" ON deployed_agents
    FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own deployed agents" ON deployed_agents;
CREATE POLICY "Users can update own deployed agents" ON deployed_agents
    FOR UPDATE USING (auth.uid() = user_id);

-- 8. Create profiles for existing users who don't have them
INSERT INTO profiles (id, email, name, created_at, updated_at)
SELECT 
    u.id,
    u.email,
    COALESCE(u.raw_user_meta_data->>'name', split_part(u.email, '@', 1)),
    u.created_at,
    NOW()
FROM auth.users u
LEFT JOIN profiles p ON u.id = p.id
WHERE p.id IS NULL
ON CONFLICT (id) DO NOTHING;

-- 9. Update deployed_agents to ensure all have proper names and icons
UPDATE deployed_agents 
SET 
    agent_name = COALESCE(agent_name, name, 'AI Agent'),
    agent_description = COALESCE(agent_description, description, 'AI Executive Assistant'),
    icon = COALESCE(icon, 
        CASE 
            WHEN agent_id LIKE '%ceo%' THEN '👔'
            WHEN agent_id LIKE '%cmo%' THEN '📈'
            WHEN agent_id LIKE '%cto%' THEN '⚡'
            WHEN agent_id LIKE '%cfo%' THEN '💰'
            WHEN agent_id LIKE '%sales%' THEN '🎯'
            WHEN agent_id LIKE '%hr%' THEN '👥'
            ELSE '🤖'
        END
    )
WHERE agent_name IS NULL OR agent_description IS NULL OR icon IS NULL;

-- 10. Verify the setup
SELECT 'Profiles table' as table_name, count(*) as count FROM profiles
UNION ALL
SELECT 'Deployed agents table' as table_name, count(*) as count FROM deployed_agents
UNION ALL
SELECT 'Users with profiles' as table_name, count(*) as count 
FROM auth.users u 
JOIN profiles p ON u.id = p.id;

-- 11. Show sample data
SELECT 
    'Sample deployed agents:' as info,
    da.id,
    da.user_id,
    da.agent_id,
    da.name,
    da.icon,
    da.status,
    da.trial_start,
    da.trial_end
FROM deployed_agents da
LIMIT 5;

COMMIT;
