-- Analytics Database Setup Script
-- Version: 28 (Final Corrected)
-- This script creates a robust analytics system with proper error handling

BEGIN;

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop existing constraints that might conflict
DO $$ 
BEGIN
    -- Drop foreign key constraint if it exists
    IF EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE constraint_name = 'analytics_sessions_user_id_fkey' 
        AND table_name = 'analytics_sessions'
    ) THEN
        ALTER TABLE analytics_sessions DROP CONSTRAINT analytics_sessions_user_id_fkey;
    END IF;
    
    -- Drop unique constraint if it exists
    IF EXISTS (
        SELECT 1 FROM information_schema.table_constraints 
        WHERE constraint_name = 'analytics_sessions_session_id_key' 
        AND table_name = 'analytics_sessions'
    ) THEN
        ALTER TABLE analytics_sessions DROP CONSTRAINT analytics_sessions_session_id_key;
    END IF;
EXCEPTION
    WHEN OTHERS THEN
        -- Ignore errors if constraints don't exist
        RAISE NOTICE 'Some constraints may not exist, continuing...';
END $$;

-- Create analytics_sessions table with TEXT primary key
CREATE TABLE IF NOT EXISTS analytics_sessions (
    id TEXT PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    session_start TIMESTAMPTZ DEFAULT NOW(),
    last_activity TIMESTAMPTZ DEFAULT NOW(),
    user_agent TEXT,
    ip_address INET,
    referrer TEXT,
    landing_page TEXT,
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    utm_term TEXT,
    utm_content TEXT,
    device_type TEXT,
    browser TEXT,
    os TEXT,
    country TEXT,
    city TEXT,
    language TEXT DEFAULT 'en',
    timezone TEXT,
    screen_resolution TEXT,
    viewport_size TEXT,
    is_mobile BOOLEAN DEFAULT false,
    is_tablet BOOLEAN DEFAULT false,
    is_desktop BOOLEAN DEFAULT true,
    is_bot BOOLEAN DEFAULT false,
    session_duration INTEGER DEFAULT 0,
    page_views INTEGER DEFAULT 0,
    bounce_rate DECIMAL(5,2) DEFAULT 0.00,
    conversion_events INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create analytics_events table
CREATE TABLE IF NOT EXISTS analytics_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id TEXT REFERENCES analytics_sessions(id) ON DELETE CASCADE,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    event_name TEXT NOT NULL,
    event_properties JSONB DEFAULT '{}',
    page_url TEXT,
    page_title TEXT,
    element_id TEXT,
    element_class TEXT,
    element_text TEXT,
    click_coordinates JSONB,
    scroll_depth INTEGER,
    time_on_page INTEGER,
    custom_properties JSONB DEFAULT '{}',
    conversion_value DECIMAL(10,2),
    conversion_currency TEXT DEFAULT 'USD',
    ab_test_variant TEXT,
    funnel_step TEXT,
    error_message TEXT,
    performance_metrics JSONB DEFAULT '{}',
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create analytics_conversions table
CREATE TABLE IF NOT EXISTS analytics_conversions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id TEXT REFERENCES analytics_sessions(id) ON DELETE CASCADE,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    conversion_type TEXT NOT NULL,
    conversion_name TEXT NOT NULL,
    conversion_value DECIMAL(10,2) DEFAULT 0,
    conversion_currency TEXT DEFAULT 'USD',
    page_url TEXT,
    funnel_step TEXT,
    attribution_source TEXT,
    attribution_medium TEXT,
    attribution_campaign TEXT,
    time_to_conversion INTEGER,
    custom_properties JSONB DEFAULT '{}',
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create analytics_heatmaps table
CREATE TABLE IF NOT EXISTS analytics_heatmaps (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id TEXT REFERENCES analytics_sessions(id) ON DELETE CASCADE,
    page_url TEXT NOT NULL,
    element_selector TEXT,
    click_x INTEGER,
    click_y INTEGER,
    viewport_width INTEGER,
    viewport_height INTEGER,
    device_type TEXT,
    interaction_type TEXT DEFAULT 'click',
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create performance indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_analytics_sessions_user_id ON analytics_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_analytics_sessions_created_at ON analytics_sessions(created_at);
CREATE INDEX IF NOT EXISTS idx_analytics_sessions_last_activity ON analytics_sessions(last_activity);
CREATE INDEX IF NOT EXISTS idx_analytics_sessions_language ON analytics_sessions(language);
CREATE INDEX IF NOT EXISTS idx_analytics_sessions_device_type ON analytics_sessions(device_type);

CREATE INDEX IF NOT EXISTS idx_analytics_events_session_id ON analytics_events(session_id);
CREATE INDEX IF NOT EXISTS idx_analytics_events_user_id ON analytics_events(user_id);
CREATE INDEX IF NOT EXISTS idx_analytics_events_event_name ON analytics_events(event_name);
CREATE INDEX IF NOT EXISTS idx_analytics_events_timestamp ON analytics_events(timestamp);
CREATE INDEX IF NOT EXISTS idx_analytics_events_page_url ON analytics_events(page_url);

CREATE INDEX IF NOT EXISTS idx_analytics_conversions_session_id ON analytics_conversions(session_id);
CREATE INDEX IF NOT EXISTS idx_analytics_conversions_user_id ON analytics_conversions(user_id);
CREATE INDEX IF NOT EXISTS idx_analytics_conversions_type ON analytics_conversions(conversion_type);
CREATE INDEX IF NOT EXISTS idx_analytics_conversions_timestamp ON analytics_conversions(timestamp);

CREATE INDEX IF NOT EXISTS idx_analytics_heatmaps_session_id ON analytics_heatmaps(session_id);
CREATE INDEX IF NOT EXISTS idx_analytics_heatmaps_page_url ON analytics_heatmaps(page_url);
CREATE INDEX IF NOT EXISTS idx_analytics_heatmaps_timestamp ON analytics_heatmaps(timestamp);

-- Enable Row Level Security (RLS)
ALTER TABLE analytics_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_conversions ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_heatmaps ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for analytics_sessions
DROP POLICY IF EXISTS "Users can view their own sessions" ON analytics_sessions;
CREATE POLICY "Users can view their own sessions" ON analytics_sessions
    FOR SELECT USING (auth.uid() = user_id OR user_id IS NULL);

DROP POLICY IF EXISTS "Users can insert sessions" ON analytics_sessions;
CREATE POLICY "Users can insert sessions" ON analytics_sessions
    FOR INSERT WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

DROP POLICY IF EXISTS "Users can update their own sessions" ON analytics_sessions;
CREATE POLICY "Users can update their own sessions" ON analytics_sessions
    FOR UPDATE USING (auth.uid() = user_id OR user_id IS NULL);

-- Create RLS policies for analytics_events
DROP POLICY IF EXISTS "Users can view their own events" ON analytics_events;
CREATE POLICY "Users can view their own events" ON analytics_events
    FOR SELECT USING (auth.uid() = user_id OR user_id IS NULL);

DROP POLICY IF EXISTS "Users can insert events" ON analytics_events;
CREATE POLICY "Users can insert events" ON analytics_events
    FOR INSERT WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

-- Create RLS policies for analytics_conversions
DROP POLICY IF EXISTS "Users can view their own conversions" ON analytics_conversions;
CREATE POLICY "Users can view their own conversions" ON analytics_conversions
    FOR SELECT USING (auth.uid() = user_id OR user_id IS NULL);

DROP POLICY IF EXISTS "Users can insert conversions" ON analytics_conversions;
CREATE POLICY "Users can insert conversions" ON analytics_conversions
    FOR INSERT WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

-- Create RLS policies for analytics_heatmaps
DROP POLICY IF EXISTS "Users can view heatmap data" ON analytics_heatmaps;
CREATE POLICY "Users can view heatmap data" ON analytics_heatmaps
    FOR SELECT USING (true);

DROP POLICY IF EXISTS "Users can insert heatmap data" ON analytics_heatmaps;
CREATE POLICY "Users can insert heatmap data" ON analytics_heatmaps
    FOR INSERT WITH CHECK (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for analytics_sessions updated_at
DROP TRIGGER IF EXISTS update_analytics_sessions_updated_at ON analytics_sessions;
CREATE TRIGGER update_analytics_sessions_updated_at
    BEFORE UPDATE ON analytics_sessions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Create function for session activity tracking
CREATE OR REPLACE FUNCTION update_session_activity()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE analytics_sessions 
    SET 
        last_activity = NOW(),
        updated_at = NOW(),
        page_views = page_views + 1
    WHERE id = NEW.session_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updating session activity on events
DROP TRIGGER IF EXISTS trigger_update_session_activity ON analytics_events;
CREATE TRIGGER trigger_update_session_activity
    AFTER INSERT ON analytics_events
    FOR EACH ROW
    EXECUTE FUNCTION update_session_activity();

-- Create function for conversion tracking
CREATE OR REPLACE FUNCTION track_conversion()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE analytics_sessions 
    SET 
        conversion_events = conversion_events + 1,
        updated_at = NOW()
    WHERE id = NEW.session_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for conversion tracking
DROP TRIGGER IF EXISTS trigger_track_conversion ON analytics_conversions;
CREATE TRIGGER trigger_track_conversion
    AFTER INSERT ON analytics_conversions
    FOR EACH ROW
    EXECUTE FUNCTION track_conversion();

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE ON analytics_sessions TO anon, authenticated;
GRANT SELECT, INSERT ON analytics_events TO anon, authenticated;
GRANT SELECT, INSERT ON analytics_conversions TO anon, authenticated;
GRANT SELECT, INSERT ON analytics_heatmaps TO anon, authenticated;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;

-- Insert sample session for testing
INSERT INTO analytics_sessions (
    id,
    user_agent,
    referrer,
    landing_page,
    device_type,
    browser,
    os,
    language
) VALUES (
    'sample_session_' || extract(epoch from now())::text,
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'https://google.com',
    '/',
    'desktop',
    'Chrome',
    'Windows',
    'en'
) ON CONFLICT (id) DO NOTHING;

-- Verify the setup
DO $$
DECLARE
    table_count INTEGER;
    index_count INTEGER;
    policy_count INTEGER;
BEGIN
    -- Count tables
    SELECT COUNT(*) INTO table_count
    FROM information_schema.tables
    WHERE table_name IN ('analytics_sessions', 'analytics_events', 'analytics_conversions', 'analytics_heatmaps')
    AND table_schema = 'public';
    
    -- Count indexes
    SELECT COUNT(*) INTO index_count
    FROM pg_indexes
    WHERE tablename LIKE 'analytics_%'
    AND schemaname = 'public';
    
    -- Count policies
    SELECT COUNT(*) INTO policy_count
    FROM pg_policies
    WHERE tablename LIKE 'analytics_%'
    AND schemaname = 'public';
    
    RAISE NOTICE 'Analytics Setup Complete:';
    RAISE NOTICE '- Tables created: %', table_count;
    RAISE NOTICE '- Indexes created: %', index_count;
    RAISE NOTICE '- RLS policies created: %', policy_count;
    
    IF table_count = 4 THEN
        RAISE NOTICE 'SUCCESS: All analytics tables created successfully!';
    ELSE
        RAISE WARNING 'WARNING: Expected 4 tables, found %', table_count;
    END IF;
END $$;

COMMIT;
