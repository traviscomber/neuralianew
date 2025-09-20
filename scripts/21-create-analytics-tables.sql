-- Create analytics tables for comprehensive tracking
-- This script creates all necessary tables for user analytics, heatmaps, and conversion tracking

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_stat_statements";

-- User Sessions Table
CREATE TABLE IF NOT EXISTS user_sessions (
    session_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    start_time TIMESTAMPTZ DEFAULT NOW(),
    end_time TIMESTAMPTZ,
    duration_seconds INTEGER,
    page_views INTEGER DEFAULT 0,
    device_info JSONB DEFAULT '{}',
    browser_info JSONB DEFAULT '{}',
    location JSONB DEFAULT '{}',
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    referrer TEXT,
    ip_address INET,
    user_agent TEXT,
    is_bot BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Page Views Table
CREATE TABLE IF NOT EXISTS page_views (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id UUID REFERENCES user_sessions(session_id) ON DELETE CASCADE,
    page_url TEXT NOT NULL,
    page_title TEXT,
    referrer TEXT,
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    load_time_ms INTEGER,
    scroll_depth INTEGER DEFAULT 0,
    time_on_page_seconds INTEGER DEFAULT 0,
    exit_page BOOLEAN DEFAULT FALSE,
    bounce BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- User Events Table (clicks, scrolls, form interactions)
CREATE TABLE IF NOT EXISTS user_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id UUID REFERENCES user_sessions(session_id) ON DELETE CASCADE,
    page_url TEXT NOT NULL,
    event_type TEXT NOT NULL, -- 'click', 'scroll', 'form_submit', 'form_focus', 'hover'
    element_selector TEXT,
    element_text TEXT,
    element_attributes JSONB DEFAULT '{}',
    coordinates JSONB DEFAULT '{}', -- {x, y, viewport_width, viewport_height}
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    event_data JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Heatmap Data Table
CREATE TABLE IF NOT EXISTS heatmap_data (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id UUID REFERENCES user_sessions(session_id) ON DELETE CASCADE,
    page_url TEXT NOT NULL,
    element_selector TEXT,
    click_x INTEGER NOT NULL,
    click_y INTEGER NOT NULL,
    viewport_width INTEGER NOT NULL,
    viewport_height INTEGER NOT NULL,
    device_type TEXT, -- 'desktop', 'tablet', 'mobile'
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Conversions Table
CREATE TABLE IF NOT EXISTS conversions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id UUID REFERENCES user_sessions(session_id) ON DELETE CASCADE,
    conversion_type TEXT NOT NULL, -- 'whatsapp_click', 'hero_cta', 'contact_form', etc.
    conversion_value DECIMAL(10,2),
    source_page TEXT NOT NULL,
    target_element TEXT,
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    conversion_data JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Performance Metrics Table
CREATE TABLE IF NOT EXISTS performance_metrics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id UUID REFERENCES user_sessions(session_id) ON DELETE CASCADE,
    page_url TEXT NOT NULL,
    metric_name TEXT NOT NULL, -- 'FCP', 'LCP', 'CLS', 'FID', 'TTFB'
    metric_value DECIMAL(10,3),
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- User Behavior Patterns Table
CREATE TABLE IF NOT EXISTS user_behavior_patterns (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id UUID REFERENCES user_sessions(session_id) ON DELETE CASCADE,
    pattern_type TEXT NOT NULL, -- 'scroll_pattern', 'click_pattern', 'navigation_pattern'
    pattern_data JSONB NOT NULL,
    confidence_score DECIMAL(3,2), -- 0.00 to 1.00
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_user_sessions_start_time ON user_sessions(start_time);
CREATE INDEX IF NOT EXISTS idx_user_sessions_user_id ON user_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_user_sessions_device_info ON user_sessions USING GIN(device_info);

CREATE INDEX IF NOT EXISTS idx_page_views_session_id ON page_views(session_id);
CREATE INDEX IF NOT EXISTS idx_page_views_timestamp ON page_views(timestamp);
CREATE INDEX IF NOT EXISTS idx_page_views_page_url ON page_views(page_url);

CREATE INDEX IF NOT EXISTS idx_user_events_session_id ON user_events(session_id);
CREATE INDEX IF NOT EXISTS idx_user_events_timestamp ON user_events(timestamp);
CREATE INDEX IF NOT EXISTS idx_user_events_event_type ON user_events(event_type);
CREATE INDEX IF NOT EXISTS idx_user_events_page_url ON user_events(page_url);

CREATE INDEX IF NOT EXISTS idx_heatmap_data_session_id ON heatmap_data(session_id);
CREATE INDEX IF NOT EXISTS idx_heatmap_data_page_url ON heatmap_data(page_url);
CREATE INDEX IF NOT EXISTS idx_heatmap_data_timestamp ON heatmap_data(timestamp);

CREATE INDEX IF NOT EXISTS idx_conversions_session_id ON conversions(session_id);
CREATE INDEX IF NOT EXISTS idx_conversions_timestamp ON conversions(timestamp);
CREATE INDEX IF NOT EXISTS idx_conversions_type ON conversions(conversion_type);
CREATE INDEX IF NOT EXISTS idx_conversions_source_page ON conversions(source_page);

CREATE INDEX IF NOT EXISTS idx_performance_metrics_session_id ON performance_metrics(session_id);
CREATE INDEX IF NOT EXISTS idx_performance_metrics_timestamp ON performance_metrics(timestamp);
CREATE INDEX IF NOT EXISTS idx_performance_metrics_name ON performance_metrics(metric_name);

-- Create functions for analytics calculations
CREATE OR REPLACE FUNCTION get_conversion_rate(
    time_range TEXT DEFAULT '24 hours',
    page_filter TEXT DEFAULT NULL
)
RETURNS DECIMAL(5,2) AS $$
DECLARE
    total_sessions INTEGER;
    total_conversions INTEGER;
    conversion_rate DECIMAL(5,2);
BEGIN
    -- Get total sessions in time range
    SELECT COUNT(DISTINCT session_id) INTO total_sessions
    FROM user_sessions
    WHERE start_time >= NOW() - INTERVAL time_range;
    
    -- Get total conversions in time range
    IF page_filter IS NOT NULL THEN
        SELECT COUNT(*) INTO total_conversions
        FROM conversions
        WHERE timestamp >= NOW() - INTERVAL time_range
        AND source_page = page_filter;
    ELSE
        SELECT COUNT(*) INTO total_conversions
        FROM conversions
        WHERE timestamp >= NOW() - INTERVAL time_range;
    END IF;
    
    -- Calculate conversion rate
    IF total_sessions > 0 THEN
        conversion_rate := (total_conversions::DECIMAL / total_sessions::DECIMAL) * 100;
    ELSE
        conversion_rate := 0;
    END IF;
    
    RETURN ROUND(conversion_rate, 2);
END;
$$ LANGUAGE plpgsql;

-- Function for funnel analysis
CREATE OR REPLACE FUNCTION get_funnel_analysis(
    time_range TEXT DEFAULT '24 hours'
)
RETURNS TABLE(
    step_name TEXT,
    step_order INTEGER,
    users_count INTEGER,
    conversion_rate DECIMAL(5,2)
) AS $$
BEGIN
    RETURN QUERY
    WITH funnel_steps AS (
        SELECT 
            'page_view' as step_name,
            1 as step_order,
            COUNT(DISTINCT session_id) as users_count
        FROM page_views 
        WHERE timestamp >= NOW() - INTERVAL time_range
        
        UNION ALL
        
        SELECT 
            'engagement' as step_name,
            2 as step_order,
            COUNT(DISTINCT session_id) as users_count
        FROM user_events 
        WHERE timestamp >= NOW() - INTERVAL time_range
        AND event_type IN ('click', 'scroll')
        
        UNION ALL
        
        SELECT 
            'conversion' as step_name,
            3 as step_order,
            COUNT(DISTINCT session_id) as users_count
        FROM conversions 
        WHERE timestamp >= NOW() - INTERVAL time_range
    ),
    total_users AS (
        SELECT users_count as total FROM funnel_steps WHERE step_order = 1
    )
    SELECT 
        f.step_name,
        f.step_order,
        f.users_count,
        CASE 
            WHEN t.total > 0 THEN ROUND((f.users_count::DECIMAL / t.total::DECIMAL) * 100, 2)
            ELSE 0::DECIMAL(5,2)
        END as conversion_rate
    FROM funnel_steps f
    CROSS JOIN total_users t
    ORDER BY f.step_order;
END;
$$ LANGUAGE plpgsql;

-- Function to update session duration
CREATE OR REPLACE FUNCTION update_session_duration()
RETURNS TRIGGER AS $$
BEGIN
    -- Update session duration when page views are added
    UPDATE user_sessions 
    SET 
        end_time = NEW.timestamp,
        duration_seconds = EXTRACT(EPOCH FROM (NEW.timestamp - start_time))::INTEGER,
        page_views = page_views + 1,
        updated_at = NOW()
    WHERE session_id = NEW.session_id;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic session updates
DROP TRIGGER IF EXISTS trigger_update_session_duration ON page_views;
CREATE TRIGGER trigger_update_session_duration
    AFTER INSERT ON page_views
    FOR EACH ROW
    EXECUTE FUNCTION update_session_duration();

-- Function to detect and mark bot sessions
CREATE OR REPLACE FUNCTION detect_bot_sessions()
RETURNS VOID AS $$
BEGIN
    UPDATE user_sessions 
    SET is_bot = TRUE
    WHERE (
        user_agent ILIKE '%bot%' OR
        user_agent ILIKE '%crawler%' OR
        user_agent ILIKE '%spider%' OR
        user_agent ILIKE '%scraper%' OR
        duration_seconds < 2 OR
        page_views > 50
    ) AND is_bot = FALSE;
END;
$$ LANGUAGE plpgsql;

-- Create a function to clean old analytics data (older than 90 days)
CREATE OR REPLACE FUNCTION cleanup_old_analytics_data()
RETURNS VOID AS $$
BEGIN
    DELETE FROM performance_metrics WHERE created_at < NOW() - INTERVAL '90 days';
    DELETE FROM user_behavior_patterns WHERE created_at < NOW() - INTERVAL '90 days';
    DELETE FROM heatmap_data WHERE created_at < NOW() - INTERVAL '90 days';
    DELETE FROM user_events WHERE created_at < NOW() - INTERVAL '90 days';
    DELETE FROM conversions WHERE created_at < NOW() - INTERVAL '90 days';
    DELETE FROM page_views WHERE created_at < NOW() - INTERVAL '90 days';
    DELETE FROM user_sessions WHERE created_at < NOW() - INTERVAL '90 days';
END;
$$ LANGUAGE plpgsql;

-- Insert sample data for testing
INSERT INTO user_sessions (session_id, start_time, device_info, browser_info, location, utm_source, referrer) VALUES
(uuid_generate_v4(), NOW() - INTERVAL '2 hours', '{"type": "desktop", "os": "Windows"}', '{"name": "Chrome", "version": "120"}', '{"country": "US", "city": "New York"}', 'google', 'https://google.com'),
(uuid_generate_v4(), NOW() - INTERVAL '1 hour', '{"type": "mobile", "os": "iOS"}', '{"name": "Safari", "version": "17"}', '{"country": "CA", "city": "Toronto"}', 'direct', null),
(uuid_generate_v4(), NOW() - INTERVAL '30 minutes', '{"type": "tablet", "os": "Android"}', '{"name": "Chrome", "version": "119"}', '{"country": "UK", "city": "London"}', 'social', 'https://linkedin.com');

-- Grant necessary permissions
GRANT ALL ON ALL TABLES IN SCHEMA public TO authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO authenticated;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO authenticated;

-- Create RLS policies for security
ALTER TABLE user_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE heatmap_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversions ENABLE ROW LEVEL SECURITY;
ALTER TABLE performance_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_behavior_patterns ENABLE ROW LEVEL SECURITY;

-- Allow all operations for authenticated users (adjust as needed for your security requirements)
CREATE POLICY "Allow all for authenticated users" ON user_sessions FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow all for authenticated users" ON page_views FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow all for authenticated users" ON user_events FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow all for authenticated users" ON heatmap_data FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow all for authenticated users" ON conversions FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow all for authenticated users" ON performance_metrics FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow all for authenticated users" ON user_behavior_patterns FOR ALL TO authenticated USING (true);

-- Allow anonymous access for analytics collection
CREATE POLICY "Allow anonymous analytics" ON user_sessions FOR INSERT TO anon USING (true);
CREATE POLICY "Allow anonymous analytics" ON page_views FOR INSERT TO anon USING (true);
CREATE POLICY "Allow anonymous analytics" ON user_events FOR INSERT TO anon USING (true);
CREATE POLICY "Allow anonymous analytics" ON heatmap_data FOR INSERT TO anon USING (true);
CREATE POLICY "Allow anonymous analytics" ON conversions FOR INSERT TO anon USING (true);
CREATE POLICY "Allow anonymous analytics" ON performance_metrics FOR INSERT TO anon USING (true);

COMMENT ON TABLE user_sessions IS 'Tracks user sessions with device, browser, and location information';
COMMENT ON TABLE page_views IS 'Records individual page views with performance metrics';
COMMENT ON TABLE user_events IS 'Captures user interactions like clicks, scrolls, and form submissions';
COMMENT ON TABLE heatmap_data IS 'Stores click coordinates for heatmap visualization';
COMMENT ON TABLE conversions IS 'Tracks conversion events and goals';
COMMENT ON TABLE performance_metrics IS 'Records web performance metrics like Core Web Vitals';
COMMENT ON TABLE user_behavior_patterns IS 'Analyzes user behavior patterns using AI/ML';
