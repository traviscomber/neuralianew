-- Check current user session and authentication
-- This helps debug why the user can't see their deployed agents

-- 1. Check auth.users table (Supabase auth)
SELECT 'Checking auth.users...' as step;

SELECT 
    id,
    email,
    created_at,
    last_sign_in_at,
    email_confirmed_at
FROM auth.users 
ORDER BY created_at DESC
LIMIT 5;

-- 2. Check profiles table and match with auth.users
SELECT 'Checking profiles vs auth.users...' as step;

SELECT 
    au.id as auth_id,
    au.email as auth_email,
    p.id as profile_id,
    p.email as profile_email,
    p.name as profile_name
FROM auth.users au
LEFT JOIN profiles p ON au.id = p.id
ORDER BY au.created_at DESC
LIMIT 5;

-- 3. Check for orphaned deployed agents (agents without valid users)
SELECT 'Checking for orphaned deployed agents...' as step;

SELECT 
    da.id,
    da.user_id,
    da.name,
    da.status,
    CASE 
        WHEN p.id IS NULL THEN 'ORPHANED - No profile'
        WHEN au.id IS NULL THEN 'ORPHANED - No auth user'
        ELSE 'OK'
    END as user_status
FROM deployed_agents da
LEFT JOIN profiles p ON da.user_id = p.id
LEFT JOIN auth.users au ON da.user_id = au.id
ORDER BY da.created_at DESC;

-- 4. Show deployed agents with full user info
SELECT 'Deployed agents with user info...' as step;

SELECT 
    da.id as deployment_id,
    da.agent_id,
    da.name as agent_name,
    da.status,
    da.trial_start,
    da.trial_end,
    au.email as user_email,
    p.name as user_name,
    da.created_at as deployed_at
FROM deployed_agents da
JOIN profiles p ON da.user_id = p.id
JOIN auth.users au ON da.user_id = au.id
ORDER BY da.created_at DESC;
