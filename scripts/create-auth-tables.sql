-- Create auth-related tables and functions
-- This script sets up the basic authentication infrastructure

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Note: auth.users table is managed by Supabase and cannot be modified directly
-- We can only reference it in our custom tables

-- Create a public function to get the current user's ID (if using Supabase)
-- This is a safe alternative that works with standard permissions
CREATE OR REPLACE FUNCTION get_current_user_id() RETURNS uuid
    LANGUAGE sql STABLE SECURITY DEFINER
    AS $$
  SELECT COALESCE(
    (current_setting('request.jwt.claims', true)::json->>'sub')::uuid,
    NULL
  );
$$;

-- Create a public function to get the current user's role
CREATE OR REPLACE FUNCTION get_current_user_role() RETURNS text
    LANGUAGE sql STABLE SECURITY DEFINER
    AS $$
  SELECT COALESCE(
    current_setting('request.jwt.claims', true)::json->>'role',
    'anon'
  );
$$;

-- Create a helper function to check if user is authenticated
CREATE OR REPLACE FUNCTION is_authenticated() RETURNS boolean
    LANGUAGE sql STABLE SECURITY DEFINER
    AS $$
  SELECT get_current_user_id() IS NOT NULL;
$$;

-- Success message
SELECT 'Auth helper functions created successfully!' as status;
