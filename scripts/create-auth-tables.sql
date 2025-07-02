-- Create auth-related tables and functions
-- This script sets up the basic authentication infrastructure

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Note: auth.users table is managed by Supabase and cannot be modified directly
-- We can only reference it in our custom tables

-- Create a public function to get the current user's ID (alternative to auth.uid())
CREATE OR REPLACE FUNCTION public.get_current_user_id() RETURNS uuid
    LANGUAGE sql STABLE SECURITY DEFINER
    AS $$
  select auth.uid()
$$;

-- Create a public function to get the current user's role (alternative to auth.role())
CREATE OR REPLACE FUNCTION public.get_current_user_role() RETURNS text
    LANGUAGE sql STABLE SECURITY DEFINER
    AS $$
  select 
    coalesce(
        nullif(current_setting('request.jwt.claim.role', true), ''),
        (nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'role')
    )::text
$$;

-- Success message
SELECT 'Auth tables setup completed!' as status;
