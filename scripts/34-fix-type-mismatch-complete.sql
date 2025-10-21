-- ============================================
-- COMPLETE DATABASE SETUP - FIX TYPE MISMATCH
-- Drop everything and recreate with correct types
-- ============================================

-- Drop all tables
DROP TABLE IF EXISTS analytics_heatmaps CASCADE;
DROP TABLE IF EXISTS analytics_conversions CASCADE;
DROP TABLE IF EXISTS analytics_page_views CASCADE;
DROP TABLE IF EXISTS analytics_events CASCADE;
DROP TABLE IF EXISTS analytics_sessions CASCADE;
DROP TABLE IF EXISTS purchases CASCADE;

-- ============================================
-- PURCHASES TABLE
-- ============================================
CREATE TABLE purchases (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    agent_id UUID,
    product_name TEXT NOT NULL,
    amount NUMERIC(10,2) NOT NULL,
    currency TEXT DEFAULT 'USD',
    status TEXT DEFAULT 'completed',
    payment_method TEXT,
    transaction_id TEXT,
    metadata JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE purchases ENABLE ROW LEVEL SECURITY;

CREATE POLICY "purchases_select_own" ON purchases FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "purchases_insert_own" ON purchases FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
CREATE POLICY "purchases_update_own" ON purchases FOR UPDATE TO authenticated USING (auth.uid() = user_id);

CREATE INDEX idx_purchases_user_id ON purchases(user_id);
CREATE INDEX idx_purchases_created_at ON purchases(created_at);

-- ============================================
-- ANALYTICS SESSIONS TABLE (session_id as TEXT)
-- ============================================
CREATE TABLE analytics_sessions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    session_id TEXT UNIQUE NOT NULL,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    ip_address INET,
    user_agent TEXT,
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
    language TEXT,
    timezone TEXT,
    screen_resolution TEXT,
    viewport_size TEXT,
    is_mobile BOOLEAN DEFAULT false,
    is_tablet BOOLEAN DEFAULT false,
    is_desktop BOOLEAN DEFAULT true,
    is_bot BOOLEAN DEFAULT false,
    session_duration INTEGER DEFAULT 0,
    page_views_count INTEGER DEFAULT 0,
    events_count INTEGER DEFAULT 0,
    has_conversion BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_analytics_sessions_session_id ON analytics_sessions(session_id);
CREATE INDEX idx_analytics_sessions_user_id ON analytics_sessions(user_id);
CREATE INDEX idx_analytics_sessions_created_at ON analytics_sessions(created_at);
CREATE INDEX idx_analytics_sessions_device_type ON analytics_sessions(device_type);

-- ============================================
-- ANALYTICS EVENTS TABLE
-- ============================================
CREATE TABLE analytics_events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    session_id TEXT NOT NULL,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    event_type TEXT NOT NULL,
    event_name TEXT NOT NULL,
    page_url TEXT,
    page_title TEXT,
    element_id TEXT,
    element_class TEXT,
    element_text TEXT,
    click_coordinates JSONB,
    scroll_depth INTEGER,
    time_on_page INTEGER,
    custom_properties JSONB,
    conversion_value NUMERIC(10,2),
    conversion_currency TEXT,
    ab_test_variant TEXT,
    funnel_step TEXT,
    error_message TEXT,
    performance_metrics JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_analytics_events_session_id ON analytics_events(session_id);
CREATE INDEX idx_analytics_events_user_id ON analytics_events(user_id);
CREATE INDEX idx_analytics_events_event_name ON analytics_events(event_name);
CREATE INDEX idx_analytics_events_event_type ON analytics_events(event_type);
CREATE INDEX idx_analytics_events_created_at ON analytics_events(created_at);

-- Add foreign key constraint AFTER index is created
ALTER TABLE analytics_events 
    ADD CONSTRAINT fk_analytics_events_session 
    FOREIGN KEY (session_id) 
    REFERENCES analytics_sessions(session_id) 
    ON DELETE CASCADE;

-- ============================================
-- ANALYTICS PAGE VIEWS TABLE
-- ============================================
CREATE TABLE analytics_page_views (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    session_id TEXT NOT NULL,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    page_url TEXT NOT NULL,
    page_title TEXT,
    referrer TEXT,
    entry_page BOOLEAN DEFAULT false,
    exit_page BOOLEAN DEFAULT false,
    time_on_page INTEGER,
    scroll_depth INTEGER,
    bounce BOOLEAN DEFAULT false,
    conversion BOOLEAN DEFAULT false,
    load_time INTEGER,
    dom_ready_time INTEGER,
    first_paint_time INTEGER,
    largest_contentful_paint INTEGER,
    cumulative_layout_shift NUMERIC(10,4),
    first_input_delay INTEGER,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_analytics_page_views_session_id ON analytics_page_views(session_id);
CREATE INDEX idx_analytics_page_views_user_id ON analytics_page_views(user_id);
CREATE INDEX idx_analytics_page_views_page_url ON analytics_page_views(page_url);
CREATE INDEX idx_analytics_page_views_created_at ON analytics_page_views(created_at);

ALTER TABLE analytics_page_views 
    ADD CONSTRAINT fk_analytics_page_views_session 
    FOREIGN KEY (session_id) 
    REFERENCES analytics_sessions(session_id) 
    ON DELETE CASCADE;

-- ============================================
-- ANALYTICS CONVERSIONS TABLE
-- ============================================
CREATE TABLE analytics_conversions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    session_id TEXT NOT NULL,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    conversion_type TEXT NOT NULL,
    conversion_name TEXT NOT NULL,
    conversion_value NUMERIC(10,2) DEFAULT 0,
    conversion_currency TEXT DEFAULT 'USD',
    page_url TEXT,
    funnel_stage TEXT,
    time_to_conversion INTEGER,
    attribution_source TEXT,
    attribution_medium TEXT,
    attribution_campaign TEXT,
    custom_properties JSONB,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_analytics_conversions_session_id ON analytics_conversions(session_id);
CREATE INDEX idx_analytics_conversions_user_id ON analytics_conversions(user_id);
CREATE INDEX idx_analytics_conversions_type ON analytics_conversions(conversion_type);
CREATE INDEX idx_analytics_conversions_created_at ON analytics_conversions(created_at);

ALTER TABLE analytics_conversions 
    ADD CONSTRAINT fk_analytics_conversions_session 
    FOREIGN KEY (session_id) 
    REFERENCES analytics_sessions(session_id) 
    ON DELETE CASCADE;

-- ============================================
-- ANALYTICS HEATMAPS TABLE
-- ============================================
CREATE TABLE analytics_heatmaps (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    session_id TEXT NOT NULL,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    page_url TEXT NOT NULL,
    click_x INTEGER NOT NULL,
    click_y INTEGER NOT NULL,
    element_tag TEXT,
    element_id TEXT,
    element_class TEXT,
    viewport_width INTEGER,
    viewport_height INTEGER,
    device_type TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_analytics_heatmaps_session_id ON analytics_heatmaps(session_id);
CREATE INDEX idx_analytics_heatmaps_page_url ON analytics_heatmaps(page_url);
CREATE INDEX idx_analytics_heatmaps_created_at ON analytics_heatmaps(created_at);

ALTER TABLE analytics_heatmaps 
    ADD CONSTRAINT fk_analytics_heatmaps_session 
    FOREIGN KEY (session_id) 
    REFERENCES analytics_sessions(session_id) 
    ON DELETE CASCADE;

-- ============================================
-- ENABLE RLS ON ALL TABLES
-- ============================================
ALTER TABLE analytics_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_conversions ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_heatmaps ENABLE ROW LEVEL SECURITY;

-- ============================================
-- CREATE RLS POLICIES
-- ============================================

-- Analytics Sessions Policies
CREATE POLICY "allow_public_insert_sessions" 
    ON analytics_sessions FOR INSERT 
    TO anon, authenticated 
    WITH CHECK (true);

CREATE POLICY "allow_public_select_sessions" 
    ON analytics_sessions FOR SELECT 
    TO anon, authenticated 
    USING (true);

CREATE POLICY "allow_public_update_sessions" 
    ON analytics_sessions FOR UPDATE 
    TO anon, authenticated 
    USING (true);

-- Analytics Events Policies
CREATE POLICY "allow_public_insert_events" 
    ON analytics_events FOR INSERT 
    TO anon, authenticated 
    WITH CHECK (true);

CREATE POLICY "allow_public_select_events" 
    ON analytics_events FOR SELECT 
    TO anon, authenticated 
    USING (true);

-- Analytics Page Views Policies
CREATE POLICY "allow_public_insert_page_views" 
    ON analytics_page_views FOR INSERT 
    TO anon, authenticated 
    WITH CHECK (true);

CREATE POLICY "allow_public_select_page_views" 
    ON analytics_page_views FOR SELECT 
    TO anon, authenticated 
    USING (true);

CREATE POLICY "allow_public_update_page_views" 
    ON analytics_page_views FOR UPDATE 
    TO anon, authenticated 
    USING (true);

-- Analytics Conversions Policies
CREATE POLICY "allow_public_insert_conversions" 
    ON analytics_conversions FOR INSERT 
    TO anon, authenticated 
    WITH CHECK (true);

CREATE POLICY "allow_public_select_conversions" 
    ON analytics_conversions FOR SELECT 
    TO anon, authenticated 
    USING (true);

-- Analytics Heatmaps Policies
CREATE POLICY "allow_public_insert_heatmaps" 
    ON analytics_heatmaps FOR INSERT 
    TO anon, authenticated 
    WITH CHECK (true);

CREATE POLICY "allow_public_select_heatmaps" 
    ON analytics_heatmaps FOR SELECT 
    TO anon, authenticated 
    USING (true);

-- ============================================
-- CREATE TRIGGERS
-- ============================================

-- Update session stats when event is inserted
CREATE OR REPLACE FUNCTION update_session_stats()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE analytics_sessions
    SET 
        events_count = events_count + 1,
        updated_at = NOW()
    WHERE session_id = NEW.session_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_session_on_event ON analytics_events;
CREATE TRIGGER update_session_on_event
    AFTER INSERT ON analytics_events
    FOR EACH ROW 
    EXECUTE FUNCTION update_session_stats();

-- Update page view count when page view is inserted
CREATE OR REPLACE FUNCTION update_page_view_count()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE analytics_sessions
    SET 
        page_views_count = page_views_count + 1,
        updated_at = NOW()
    WHERE session_id = NEW.session_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_session_on_page_view ON analytics_page_views;
CREATE TRIGGER update_session_on_page_view
    AFTER INSERT ON analytics_page_views
    FOR EACH ROW 
    EXECUTE FUNCTION update_page_view_count();

-- Update conversion flag when conversion happens
CREATE OR REPLACE FUNCTION update_conversion_flag()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE analytics_sessions
    SET 
        has_conversion = true,
        updated_at = NOW()
    WHERE session_id = NEW.session_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_session_on_conversion ON analytics_conversions;
CREATE TRIGGER update_session_on_conversion
    AFTER INSERT ON analytics_conversions
    FOR EACH ROW 
    EXECUTE FUNCTION update_conversion_flag();

-- ============================================
-- INSERT SAMPLE DATA
-- ============================================
INSERT INTO analytics_sessions (session_id, device_type, browser, os, is_desktop, landing_page, language, timezone)
VALUES 
    ('sample_session_desktop', 'desktop', 'Chrome', 'Windows', true, '/', 'en', 'America/New_York'),
    ('sample_session_mobile', 'mobile', 'Safari', 'iOS', false, '/products', 'en', 'America/Los_Angeles');

INSERT INTO analytics_events (session_id, event_type, event_name, page_url, page_title)
VALUES 
    ('sample_session_desktop', 'page_view', 'Landing Page View', '/', 'N3uralia - AI Automation'),
    ('sample_session_mobile', 'page_view', 'Products Page View', '/products', 'Products - N3uralia');

-- ============================================
-- VERIFICATION
-- ============================================
DO $$ 
DECLARE
    sessions_count INT;
    events_count INT;
    page_views_count INT;
    conversions_count INT;
    heatmaps_count INT;
    purchases_count INT;
BEGIN
    SELECT COUNT(*) INTO sessions_count FROM analytics_sessions;
    SELECT COUNT(*) INTO events_count FROM analytics_events;
    SELECT COUNT(*) INTO page_views_count FROM analytics_page_views;
    SELECT COUNT(*) INTO conversions_count FROM analytics_conversions;
    SELECT COUNT(*) INTO heatmaps_count FROM analytics_heatmaps;
    SELECT COUNT(*) INTO purchases_count FROM purchases;
    
    RAISE NOTICE '========================================';
    RAISE NOTICE '✅ DATABASE SETUP COMPLETE!';
    RAISE NOTICE '========================================';
    RAISE NOTICE 'Tables created:';
    RAISE NOTICE '  - purchases (% rows)', purchases_count;
    RAISE NOTICE '  - analytics_sessions (% rows)', sessions_count;
    RAISE NOTICE '  - analytics_events (% rows)', events_count;
    RAISE NOTICE '  - analytics_page_views (% rows)', page_views_count;
    RAISE NOTICE '  - analytics_conversions (% rows)', conversions_count;
    RAISE NOTICE '  - analytics_heatmaps (% rows)', heatmaps_count;
    RAISE NOTICE '========================================';
    RAISE NOTICE 'All foreign keys use TEXT for session_id';
    RAISE NOTICE 'All RLS policies created';
    RAISE NOTICE 'All triggers created';
    RAISE NOTICE '========================================';
END $$;
