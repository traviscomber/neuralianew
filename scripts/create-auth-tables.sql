-- Supabase-specific auth tables setup
-- This script is designed to work with Supabase's built-in auth system

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create profiles table that works with Supabase auth.users
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    email TEXT UNIQUE,
    full_name TEXT,
    avatar_url TEXT,
    company_name TEXT,
    company_size TEXT,
    industry TEXT,
    role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin', 'moderator')),
    subscription_plan TEXT DEFAULT 'free',
    total_agents INTEGER DEFAULT 0,
    total_systems INTEGER DEFAULT 0,
    total_conversations INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    preferences JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_profiles_email ON public.profiles(email);
CREATE INDEX IF NOT EXISTS idx_profiles_role ON public.profiles(role);
CREATE INDEX IF NOT EXISTS idx_profiles_subscription ON public.profiles(subscription_plan);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Drop existing policies first to avoid conflicts
DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can delete their own profile" ON public.profiles;

-- Create policies for Supabase RLS
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles
    FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile" ON public.profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can delete their own profile" ON public.profiles
    FOR DELETE USING (auth.uid() = id);

-- Create function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, full_name, avatar_url)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
        COALESCE(NEW.raw_user_meta_data->>'avatar_url', '')
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updated_at
DROP TRIGGER IF EXISTS update_profiles_updated_at ON public.profiles;
CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Create admin check function (simplified to avoid column reference issues)
CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID DEFAULT auth.uid())
RETURNS BOOLEAN AS $$
DECLARE
    user_role TEXT;
BEGIN
    IF user_id IS NULL THEN
        RETURN FALSE;
    END IF;
    
    SELECT p.role INTO user_role 
    FROM public.profiles p 
    WHERE p.id = user_id;
    
    RETURN COALESCE(user_role = 'admin', FALSE);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Success message
DO $$
BEGIN
    RAISE NOTICE 'Supabase auth tables created successfully!';
    RAISE NOTICE 'Profiles table: ✓';
    RAISE NOTICE 'RLS policies: ✓';
    RAISE NOTICE 'Auth triggers: ✓';
    RAISE NOTICE 'Admin functions: ✓';
END $$;
