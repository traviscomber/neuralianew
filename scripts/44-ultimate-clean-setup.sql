-- ============================================================================
-- ULTIMATE CLEAN ANALYTICS SETUP - ONE SCRIPT TO RULE THEM ALL
-- This safely drops everything and recreates it correctly
-- Run this ONCE to set up your analytics database
-- ============================================================================

-- Step 1: Drop all indexes manually to avoid conflicts
DO $$ 
DECLARE
    r RECORD;
BEGIN
    FOR r IN (
        SELECT indexname 
        FROM pg_indexes 
        WHERE schemaname = 'public' 
        AND indexname LIKE 'idx_%'
    ) LOOP
        EXECUTE 'DROP INDEX IF EXISTS ' || quote_ident(r.indexname) || ' CASCADE';
    END LOOP;
END $$;

-- Step 2: Drop all RLS policies
DO $$ 
DECLARE
    r RECORD;
BEGIN
    FOR r IN (
        SELECT schemaname, tablename, policyname 
        FROM pg_policies 
        WHERE schemaname = 'public'
    ) LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON %I.%I', 
                      r.policyname, r.schemaname, r.tablename);
    END LOOP;
END $$;

-- Step 3: Drop all analytics tables with CASCADE
DROP TABLE IF EXISTS conversion_events CASCADE;
DROP TABLE IF EXISTS user_events CASCADE;
DROP TABLE IF EXISTS page_views CASCADE;
DROP TABLE IF EXISTS performance_metrics CASCADE;
DROP TABLE IF EXISTS user_sessions CASCADE;
DROP TABLE IF EXISTS analytics_conversions CASCADE;
DROP TABLE IF EXISTS analytics_events CASCADE;
DROP TABLE IF EXISTS analytics_page_views CASCADE;
DROP TABLE IF EXISTS analytics_heatmaps CASCADE;
DROP TABLE IF EXISTS analytics_sessions CASCADE;

-- Step 4: Drop all related functions
DROP FUNCTION IF EXISTS update_updated_at_column() CASCADE;
DROP FUNCTION IF EXISTS update_session_activity() CASCADE;
DROP FUNCTION IF EXISTS update_session_conversion() CASCADE;
DROP FUNCTION IF EXISTS update_session_stats() CASCADE;
DROP FUNCTION IF EXISTS update_session_on_event() CASCADE;
DROP FUNCTION IF EXISTS update_session_on_page_view() CASCADE;
DROP FUNCTION IF EXISTS update_session_on_conversion() CASCADE;

-- ============================================================================
-- CREATE CLEAN TABLES
-- ============================================================================

-- Main sessions table - tracks user sessions
CREATE TABLE user_sessions (
    session_id TEXT PRIMARY KEY,
    user_id UUID,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    user_agent TEXT,
    device_type TEXT,
    browser TEXT,
    os TEXT,
    screen_resolution TEXT,
    timezone TEXT,
    language TEXT,
    referrer TEXT,
    active BOOLEAN DEFAULT TRUE,
    last_activity TIMESTAMPTZ DEFAULT NOW()
);

-- Page views table - tracks which pages users visit
CREATE TABLE page_views (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id TEXT NOT NULL,
    user_id UUID,
    page_url TEXT NOT NULL,
    page_title TEXT,
    referrer TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- User events table - tracks user interactions (clicks, scrolls, etc.)
CREATE TABLE user_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id TEXT NOT NULL,
    user_id UUID,
    event_type TEXT NOT NULL,
    event_name TEXT NOT NULL,
    event_data JSONB,
    page_url TEXT,
    element_id TEXT,
    element_class TEXT,
    element_text TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Conversion events table - tracks conversions (signups, purchases, etc.)
CREATE TABLE conversion_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id TEXT NOT NULL,
    user_id UUID,
    conversion_type TEXT NOT NULL,
    conversion_value DECIMAL(10, 2) DEFAULT 0,
    conversion_data JSONB,
    page_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- ============================================================================
-- ADD FOREIGN KEY CONSTRAINTS
-- ============================================================================

ALTER TABLE page_views 
    ADD CONSTRAINT fk_page_views_session 
    FOREIGN KEY (session_id) 
    REFERENCES user_sessions(session_id) 
    ON DELETE CASCADE;

ALTER TABLE user_events 
    ADD CONSTRAINT fk_user_events_session 
    FOREIGN KEY (session_id) 
    REFERENCES user_sessions(session_id) 
    ON DELETE CASCADE;

ALTER TABLE conversion_events 
    ADD CONSTRAINT fk_conversion_events_session 
    FOREIGN KEY (session_id) 
    REFERENCES user_sessions(session_id) 
    ON DELETE CASCADE;

-- ============================================================================
-- CREATE PERFORMANCE INDEXES
-- ============================================================================

-- Session indexes
CREATE INDEX idx_user_sessions_user_id ON user_sessions(user_id);
CREATE INDEX idx_user_sessions_created_at ON user_sessions(created_at);
CREATE INDEX idx_user_sessions_active ON user_sessions(active);

-- Page view indexes
CREATE INDEX idx_page_views_session_id ON page_views(session_id);
CREATE INDEX idx_page_views_created_at ON page_views(created_at);
CREATE INDEX idx_page_views_page_url ON page_views(page_url);

-- Event indexes
CREATE INDEX idx_user_events_session_id ON user_events(session_id);
CREATE INDEX idx_user_events_event_type ON user_events(event_type);
CREATE INDEX idx_user_events_created_at ON user_events(created_at);

-- Conversion indexes
CREATE INDEX idx_conversion_events_session_id ON conversion_events(session_id);
CREATE INDEX idx_conversion_events_type ON conversion_events(conversion_type);
CREATE INDEX idx_conversion_events_created_at ON conversion_events(created_at);

-- ============================================================================
-- ENABLE ROW LEVEL SECURITY
-- ============================================================================

ALTER TABLE user_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversion_events ENABLE ROW LEVEL SECURITY;

-- ============================================================================
-- CREATE RLS POLICIES (Allow all for now - tighten in production)
-- ============================================================================

-- Session policies
CREATE POLICY "user_sessions_insert" ON user_sessions FOR INSERT WITH CHECK (true);
CREATE POLICY "user_sessions_select" ON user_sessions FOR SELECT USING (true);
CREATE POLICY "user_sessions_update" ON user_sessions FOR UPDATE USING (true);

-- Page view policies
CREATE POLICY "page_views_insert" ON page_views FOR INSERT WITH CHECK (true);
CREATE POLICY "page_views_select" ON page_views FOR SELECT USING (true);

-- Event policies
CREATE POLICY "user_events_insert" ON user_events FOR INSERT WITH CHECK (true);
CREATE POLICY "user_events_select" ON user_events FOR SELECT USING (true);

-- Conversion policies
CREATE POLICY "conversion_events_insert" ON conversion_events FOR INSERT WITH CHECK (true);
CREATE POLICY "conversion_events_select" ON conversion_events FOR SELECT USING (true);

-- ============================================================================
-- CREATE TRIGGER FUNCTION FOR UPDATED_AT
-- ============================================================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============================================================================
-- CREATE TRIGGER
-- ============================================================================

CREATE TRIGGER update_user_sessions_updated_at
    BEFORE UPDATE ON user_sessions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- INSERT TEST DATA
-- ============================================================================

INSERT INTO user_sessions (session_id, device_type, browser, os, language)
VALUES ('test_' || extract(epoch from now())::bigint, 'desktop', 'Chrome', 'macOS', 'en-US')
ON CONFLICT (session_id) DO NOTHING;

-- ============================================================================
-- VERIFY SETUP
-- ============================================================================

SELECT 
    '✅ SETUP COMPLETE!' as status,
    (SELECT count(*) FROM user_sessions) as sessions,
    (SELECT count(*) FROM page_views) as page_views,
    (SELECT count(*) FROM user_events) as events,
    (SELECT count(*) FROM conversion_events) as conversions;

-- ============================================================================
-- END OF SCRIPT
-- ============================================================================
