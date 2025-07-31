-- Debug Authentication System
-- This script helps diagnose authentication issues

-- 1. Check if auth schema exists and is properly configured
SELECT 
    schemaname,
    tablename,
    tableowner
FROM pg_tables 
WHERE schemaname = 'auth'
ORDER BY tablename;

-- 2. Check auth.users table structure
SELECT 
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_schema = 'auth' 
AND table_name = 'users'
ORDER BY ordinal_position;

-- 3. Check if there are any users in the system
SELECT 
    id,
    email,
    email_confirmed_at,
    created_at,
    updated_at,
    last_sign_in_at
FROM auth.users
ORDER BY created_at DESC
LIMIT 10;

-- 4. Check profiles table and its relationship to auth.users
SELECT 
    column_name,
    data_type,
    is_nullable,
    column_default
FROM information_schema.columns 
WHERE table_schema = 'public' 
AND table_name = 'profiles'
ORDER BY ordinal_position;

-- 5. Check if profiles are being created for users
SELECT 
    u.id as user_id,
    u.email,
    u.created_at as user_created,
    p.id as profile_id,
    p.full_name,
    p.created_at as profile_created
FROM auth.users u
LEFT JOIN public.profiles p ON u.id = p.id
ORDER BY u.created_at DESC
LIMIT 10;

-- 6. Check RLS policies on profiles table
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies 
WHERE schemaname = 'public' 
AND tablename = 'profiles';

-- 7. Check if RLS is enabled on profiles table
SELECT 
    schemaname,
    tablename,
    rowsecurity
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename = 'profiles';

-- 8. Test basic auth functions (separate queries to avoid type conflicts)
SELECT 'auth.uid() result:' as info, auth.uid()::text as value;
SELECT 'auth.role() result:' as info, auth.role()::text as value;

-- 9. Check deployed_agents table RLS
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies 
WHERE schemaname = 'public' 
AND tablename = 'deployed_agents';

-- 10. Summary report (fixed type casting)
SELECT 
    'Database Status' as check_type,
    CASE 
        WHEN EXISTS (SELECT 1 FROM pg_tables WHERE schemaname = 'auth' AND tablename = 'users') 
        THEN '✅ Auth schema exists'
        ELSE '❌ Auth schema missing'
    END as status
UNION ALL
SELECT 
    'Profiles Table',
    CASE 
        WHEN EXISTS (SELECT 1 FROM pg_tables WHERE schemaname = 'public' AND tablename = 'profiles') 
        THEN '✅ Profiles table exists'
        ELSE '❌ Profiles table missing'
    END
UNION ALL
SELECT 
    'User Count',
    COALESCE((SELECT COUNT(*)::text FROM auth.users), '0') || ' users'
UNION ALL
SELECT 
    'Profile Count',
    COALESCE((SELECT COUNT(*)::text FROM public.profiles), '0') || ' profiles';
