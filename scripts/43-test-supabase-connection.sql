-- Test Supabase connection and configuration
-- This script helps diagnose authentication issues

-- 1. Check if auth schema exists and is accessible
SELECT 
  'Auth schema check' as test_name,
  CASE 
    WHEN EXISTS (SELECT 1 FROM information_schema.schemata WHERE schema_name = 'auth') 
    THEN '✅ Auth schema exists'
    ELSE '❌ Auth schema missing'
  END as result;

-- 2. Check auth.users table
SELECT 
  'Auth users table' as test_name,
  CASE 
    WHEN EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'auth' AND table_name = 'users') 
    THEN '✅ Auth users table exists'
    ELSE '❌ Auth users table missing'
  END as result;

-- 3. Check if we can query auth.users (basic RLS test)
SELECT 
  'Auth users access' as test_name,
  CASE 
    WHEN (SELECT COUNT(*) FROM auth.users) >= 0
    THEN '✅ Can access auth.users'
    ELSE '❌ Cannot access auth.users'
  END as result;

-- 4. Check profiles table exists
SELECT 
  'Profiles table' as test_name,
  CASE 
    WHEN EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'profiles') 
    THEN '✅ Profiles table exists'
    ELSE '❌ Profiles table missing'
  END as result;

-- 5. Check deployed_agents table
SELECT 
  'Deployed agents table' as test_name,
  CASE 
    WHEN EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'deployed_agents') 
    THEN '✅ Deployed agents table exists'
    ELSE '❌ Deployed agents table missing'
  END as result;

-- 6. Check RLS policies on profiles
SELECT 
  'Profiles RLS policies' as test_name,
  CASE 
    WHEN (SELECT COUNT(*) FROM pg_policies WHERE tablename = 'profiles') > 0
    THEN '✅ Profiles has RLS policies'
    ELSE '⚠️ Profiles missing RLS policies'
  END as result;

-- 7. Check RLS policies on deployed_agents
SELECT 
  'Deployed agents RLS policies' as test_name,
  CASE 
    WHEN (SELECT COUNT(*) FROM pg_policies WHERE tablename = 'deployed_agents') > 0
    THEN '✅ Deployed agents has RLS policies'
    ELSE '⚠️ Deployed agents missing RLS policies'
  END as result;

-- 8. Show current database configuration
SELECT 
  'Database info' as test_name,
  CONCAT(
    'Database: ', current_database(), 
    ', Version: ', version()
  ) as result;

-- 9. Check if we have any users
SELECT 
  'User count' as test_name,
  CONCAT('Total users: ', COUNT(*)) as result
FROM auth.users;

-- 10. Check recent auth activity (if any)
SELECT 
  'Recent auth activity' as test_name,
  CASE 
    WHEN (SELECT COUNT(*) FROM auth.users WHERE created_at > NOW() - INTERVAL '24 hours') > 0
    THEN CONCAT('✅ ', (SELECT COUNT(*) FROM auth.users WHERE created_at > NOW() - INTERVAL '24 hours'), ' users created in last 24h')
    ELSE '⚠️ No recent user activity'
  END as result;
