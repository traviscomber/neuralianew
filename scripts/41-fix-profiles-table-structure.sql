-- Fix profiles table structure and complete user flow

-- 1. First, let's see what columns actually exist in profiles
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'profiles' AND table_schema = 'public'
ORDER BY ordinal_position;

-- 2. Add missing columns to profiles table if they don't exist
DO $$ 
BEGIN
    -- Add name column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'profiles' AND column_name = 'name') THEN
        ALTER TABLE profiles ADD COLUMN name TEXT;
    END IF;
    
    -- Add avatar_url column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'profiles' AND column_name = 'avatar_url') THEN
        ALTER TABLE profiles ADD COLUMN avatar_url TEXT;
    END IF;
    
    -- Add created_at column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'profiles' AND column_name = 'created_at') THEN
        ALTER TABLE profiles ADD COLUMN created_at TIMESTAMPTZ DEFAULT NOW();
    END IF;
    
    -- Add updated_at column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'profiles' AND column_name = 'updated_at') THEN
        ALTER TABLE profiles ADD COLUMN updated_at TIMESTAMPTZ DEFAULT NOW();
    END IF;
END $$;

-- 3. Add missing columns to deployed_agents table if they don't exist
DO $$ 
BEGIN
    -- Add agent_name column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'deployed_agents' AND column_name = 'agent_name') THEN
        ALTER TABLE deployed_agents ADD COLUMN agent_name TEXT;
    END IF;
    
    -- Add agent_description column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'deployed_agents' AND column_name = 'agent_description') THEN
        ALTER TABLE deployed_agents ADD COLUMN agent_description TEXT;
    END IF;
    
    -- Add icon column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'deployed_agents' AND column_name = 'icon') THEN
        ALTER TABLE deployed_agents ADD COLUMN icon TEXT DEFAULT '🤖';
    END IF;
    
    -- Add name column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'deployed_agents' AND column_name = 'name') THEN
        ALTER TABLE deployed_agents ADD COLUMN name TEXT;
    END IF;
    
    -- Add description column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name = 'deployed_agents' AND column_name = 'description') THEN
        ALTER TABLE deployed_agents ADD COLUMN description TEXT;
    END IF;
END $$;

-- 4. Create or replace function to auto-create profiles
CREATE OR REPLACE FUNCTION create_profile_for_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO profiles (id, email, name, created_at, updated_at)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'name', NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1)),
        NOW(),
        NOW()
    )
    ON CONFLICT (id) DO UPDATE SET
        email = EXCLUDED.email,
        name = COALESCE(profiles.name, EXCLUDED.name),
        updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 5. Create trigger to auto-create profiles
DROP TRIGGER IF EXISTS create_profile_trigger ON auth.users;
CREATE TRIGGER create_profile_trigger
    AFTER INSERT OR UPDATE ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION create_profile_for_user();

-- 6. Enable RLS on profiles if not already enabled
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- 7. Create RLS policies for profiles
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
CREATE POLICY "Users can view own profile" ON profiles
    FOR SELECT USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
CREATE POLICY "Users can update own profile" ON profiles
    FOR UPDATE USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
CREATE POLICY "Users can insert own profile" ON profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

-- 8. Enable RLS on deployed_agents if not already enabled
ALTER TABLE deployed_agents ENABLE ROW LEVEL SECURITY;

-- 9. Create RLS policies for deployed_agents
DROP POLICY IF EXISTS "Users can view own deployed agents" ON deployed_agents;
CREATE POLICY "Users can view own deployed agents" ON deployed_agents
    FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own deployed agents" ON deployed_agents;
CREATE POLICY "Users can insert own deployed agents" ON deployed_agents
    FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own deployed agents" ON deployed_agents;
CREATE POLICY "Users can update own deployed agents" ON deployed_agents
    FOR UPDATE USING (auth.uid() = user_id);

-- 10. Create profiles for existing users who don't have them
INSERT INTO profiles (id, email, name, created_at, updated_at)
SELECT 
    u.id,
    u.email,
    COALESCE(u.raw_user_meta_data->>'name', u.raw_user_meta_data->>'full_name', split_part(u.email, '@', 1)),
    u.created_at,
    NOW()
FROM auth.users u
LEFT JOIN profiles p ON u.id = p.id
WHERE p.id IS NULL
ON CONFLICT (id) DO UPDATE SET
    email = EXCLUDED.email,
    name = COALESCE(profiles.name, EXCLUDED.name),
    updated_at = NOW();

-- 11. Update deployed_agents to ensure all have proper names and icons
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
    ),
    name = COALESCE(name, agent_name, 'AI Agent'),
    description = COALESCE(description, agent_description, 'AI Executive Assistant')
WHERE agent_name IS NULL OR agent_description IS NULL OR icon IS NULL OR name IS NULL OR description IS NULL;

-- 12. Show the final table structures
SELECT 'Profiles table structure:' as info;
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'profiles' AND table_schema = 'public'
ORDER BY ordinal_position;

SELECT 'Deployed agents table structure:' as info;
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'deployed_agents' AND table_schema = 'public'
ORDER BY ordinal_position;

-- 13. Verify the setup
SELECT 'Data counts:' as info;
SELECT 'Profiles' as table_name, count(*) as count FROM profiles
UNION ALL
SELECT 'Deployed agents' as table_name, count(*) as count FROM deployed_agents
UNION ALL
SELECT 'Users with profiles' as table_name, count(*) as count 
FROM auth.users u 
JOIN profiles p ON u.id = p.id;

-- 14. Show sample data if any exists
SELECT 'Sample profiles:' as info;
SELECT id, email, name, created_at FROM profiles LIMIT 3;

SELECT 'Sample deployed agents:' as info;
SELECT id, user_id, agent_id, name, icon, status FROM deployed_agents LIMIT 3;

SELECT 'Setup completed successfully!' as status;
