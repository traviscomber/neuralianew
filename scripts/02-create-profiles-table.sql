-- Create profiles table with proper structure and security
-- This extends the auth.users table with additional user information

-- Drop table if exists (for clean recreation)
DROP TABLE IF EXISTS public.profiles CASCADE;

-- Create profiles table
CREATE TABLE public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    company_name TEXT,
    company_size TEXT,
    industry TEXT,
    job_title TEXT,
    phone TEXT,
    website TEXT,
    
    -- Subscription & Billing
    subscription_plan TEXT DEFAULT 'free',
    subscription_status TEXT DEFAULT 'active',
    subscription_start_date TIMESTAMPTZ,
    subscription_end_date TIMESTAMPTZ,
    billing_email TEXT,
    
    -- Usage & Limits
    monthly_chat_limit INTEGER DEFAULT 100,
    monthly_chats_used INTEGER DEFAULT 0,
    ai_agents_limit INTEGER DEFAULT 3,
    ai_agents_used INTEGER DEFAULT 0,
    ai_systems_limit INTEGER DEFAULT 1,
    ai_systems_used INTEGER DEFAULT 0,
    
    -- Preferences
    email_notifications BOOLEAN DEFAULT true,
    marketing_emails BOOLEAN DEFAULT false,
    timezone TEXT DEFAULT 'UTC',
    language TEXT DEFAULT 'en',
    
    -- Metadata
    onboarding_completed BOOLEAN DEFAULT false,
    last_active_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles
CREATE POLICY "Users can view own profile" ON public.profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON public.profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

-- Create indexes for better performance
CREATE INDEX profiles_email_idx ON public.profiles(email);
CREATE INDEX profiles_company_idx ON public.profiles(company_name);
CREATE INDEX profiles_subscription_idx ON public.profiles(subscription_plan, subscription_status);

-- Grant necessary permissions
GRANT ALL ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;

-- Success message
SELECT 'Profiles table created successfully!' as status;
