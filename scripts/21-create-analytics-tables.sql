-- Drop existing tables if they exist to avoid conflicts
DROP TABLE IF EXISTS ab_tests CASCADE;
DROP TABLE IF EXISTS conversions CASCADE;
DROP TABLE IF EXISTS heatmap_data CASCADE;
DROP TABLE IF EXISTS user_sessions CASCADE;
DROP TABLE IF EXISTS user_analytics CASCADE;

-- Create user_sessions table first (referenced by other tables)
CREATE TABLE user_sessions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    session_id TEXT UNIQUE NOT NULL,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    start_time TIMESTAMPTZ DEFAULT NOW(),
    end_time TIMESTAMPTZ,
    page_views INTEGER DEFAULT 0,
    total_time INTEGER DEFAULT 0, -- in milliseconds
    bounce_rate BOOLEAN DEFAULT FALSE,
    conversion_count INTEGER DEFAULT 0,
    device_info JSONB DEFAULT '{}',
    location JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create user_analytics table for tracking all user events
CREATE TABLE user_analytics (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    session_id TEXT NOT NULL,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    event_type TEXT NOT NULL CHECK (event_type IN ('page_view', 'click', 'scroll', 'form_submit', 'conversion', 'heatmap', 'ab_test', 'page_unload')),
    event_data JSONB DEFAULT '{}',
    page_url TEXT NOT NULL,
    user_agent TEXT,
    ip_address TEXT,
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    device_type TEXT CHECK (device_type IN ('desktop', 'tablet', 'mobile')),
    browser TEXT,
    country TEXT,
    city TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    FOREIGN KEY (session_id) REFERENCES user_sessions(session_id) ON DELETE CASCADE
);

-- Create heatmap_data table for tracking click heatmaps
CREATE TABLE heatmap_data (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    session_id TEXT NOT NULL,
    page_url TEXT NOT NULL,
    element_selector TEXT,
    click_x INTEGER NOT NULL,
    click_y INTEGER NOT NULL,
    viewport_width INTEGER NOT NULL,
    viewport_height INTEGER NOT NULL,
    scroll_depth INTEGER DEFAULT 0,
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    device_type TEXT CHECK (device_type IN ('desktop', 'tablet', 'mobile')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    FOREIGN KEY (session_id) REFERENCES user_sessions(session_id) ON DELETE CASCADE
);

-- Create conversions table for tracking conversion events
CREATE TABLE conversions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    session_id TEXT NOT NULL,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    conversion_type TEXT NOT NULL CHECK (conversion_type IN ('whatsapp_click', 'form_submit', 'email_signup', 'demo_request', 'contact_form', 'hero_cta', 'services_cta')),
    conversion_value DECIMAL(10,2),
    source_page TEXT NOT NULL,
    funnel_step INTEGER DEFAULT 1,
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    user_data JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    FOREIGN KEY (session_id) REFERENCES user_sessions(session_id) ON DELETE CASCADE
);

-- Create ab_tests table for A/B testing tracking
CREATE TABLE ab_tests (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    test_name TEXT NOT NULL,
    variant TEXT NOT NULL,
    session_id TEXT NOT NULL,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    page_url TEXT NOT NULL,
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    converted BOOLEAN DEFAULT FALSE,
    conversion_timestamp TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    FOREIGN KEY (session_id) REFERENCES user_sessions(session_id) ON DELETE CASCADE
);

-- Create indexes for better performance
CREATE INDEX idx_user_sessions_session_id ON user_sessions(session_id);
CREATE INDEX idx_user_sessions_start_time ON user_sessions(start_time);
CREATE INDEX idx_user_sessions_user_id ON user_sessions(user_id);

CREATE INDEX idx_user_analytics_session_id ON user_analytics(session_id);
CREATE INDEX idx_user_analytics_timestamp ON user_analytics(timestamp);
CREATE INDEX idx_user_analytics_event_type ON user_analytics(event_type);
CREATE INDEX idx_user_analytics_page_url ON user_analytics(page_url);
CREATE INDEX idx_user_analytics_device_type ON user_analytics(device_type);

CREATE INDEX idx_heatmap_data_session_id ON heatmap_data(session_id);
CREATE INDEX idx_heatmap_data_page_url ON heatmap_data(page_url);
CREATE INDEX idx_heatmap_data_timestamp ON heatmap_data(timestamp);
CREATE INDEX idx_heatmap_data_device_type ON heatmap_data(device_type);

CREATE INDEX idx_conversions_session_id ON conversions(session_id);
CREATE INDEX idx_conversions_timestamp ON conversions(timestamp);
CREATE INDEX idx_conversions_type ON conversions(conversion_type);
CREATE INDEX idx_conversions_source_page ON conversions(source_page);

CREATE INDEX idx_ab_tests_test_name ON ab_tests(test_name);
CREATE INDEX idx_ab_tests_session_id ON ab_tests(session_id);
CREATE INDEX idx_ab_tests_timestamp ON ab_tests(timestamp);

-- Create function to update session end time
CREATE OR REPLACE FUNCTION update_session_end_time()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE user_sessions 
    SET end_time = NEW.timestamp, updated_at = NOW()
    WHERE session_id = NEW.session_id;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update session end time
CREATE TRIGGER trigger_update_session_end_time
    AFTER INSERT ON user_analytics
    FOR EACH ROW
    EXECUTE FUNCTION update_session_end_time();

-- Create function to calculate conversion rate
CREATE OR REPLACE FUNCTION get_conversion_rate(
    time_range INTERVAL DEFAULT INTERVAL '24 hours',
    page_filter TEXT DEFAULT NULL
)
RETURNS DECIMAL AS $$
DECLARE
    total_sessions INTEGER;
    total_conversions INTEGER;
    conversion_rate DECIMAL;
BEGIN
    -- Get total unique sessions in time range
    SELECT COUNT(DISTINCT session_id) INTO total_sessions
    FROM user_analytics
    WHERE timestamp >= NOW() - time_range
    AND (page_filter IS NULL OR page_url = page_filter);
    
    -- Get total conversions in time range
    SELECT COUNT(*) INTO total_conversions
    FROM conversions
    WHERE timestamp >= NOW() - time_range
    AND (page_filter IS NULL OR source_page = page_filter);
    
    -- Calculate conversion rate
    IF total_sessions > 0 THEN
        conversion_rate := (total_conversions::DECIMAL / total_sessions::DECIMAL) * 100;
    ELSE
        conversion_rate := 0;
    END IF;
    
    RETURN ROUND(conversion_rate, 2);
END;
$$ LANGUAGE plpgsql;

-- Create function to get funnel analysis
CREATE OR REPLACE FUNCTION get_funnel_analysis(
    time_range INTERVAL DEFAULT INTERVAL '24 hours'
)
RETURNS TABLE(
    step INTEGER,
    step_name TEXT,
    visitors INTEGER,
    conversion_rate DECIMAL
) AS $$
BEGIN
    RETURN QUERY
    WITH funnel_steps AS (
        SELECT 1 as step, 'Landing Page' as step_name, '^/$' as page_pattern
        UNION ALL
        SELECT 2, 'Services View', '^/(services|products|agents|systems)'
        UNION ALL
        SELECT 3, 'Contact Intent', '^/contact'
        UNION ALL
        SELECT 4, 'Conversion', '.*'
    ),
    step_visitors AS (
        SELECT 
            fs.step,
            fs.step_name,
            COUNT(DISTINCT ua.session_id) as visitors
        FROM funnel_steps fs
        LEFT JOIN user_analytics ua ON ua.page_url ~ fs.page_pattern
            AND ua.timestamp >= NOW() - time_range
            AND ua.event_type = 'page_view'
        GROUP BY fs.step, fs.step_name
    ),
    conversion_visitors AS (
        SELECT COUNT(DISTINCT session_id) as total_conversions
        FROM conversions
        WHERE timestamp >= NOW() - time_range
    )
    SELECT 
        sv.step,
        sv.step_name,
        sv.visitors,
        CASE 
            WHEN sv.step = 4 THEN 
                CASE WHEN (SELECT visitors FROM step_visitors WHERE step = 1) > 0 
                THEN ROUND((cv.total_conversions::DECIMAL / (SELECT visitors FROM step_visitors WHERE step = 1)::DECIMAL) * 100, 2)
                ELSE 0 END
            WHEN LAG(sv.visitors) OVER (ORDER BY sv.step) > 0 THEN 
                ROUND((sv.visitors::DECIMAL / LAG(sv.visitors) OVER (ORDER BY sv.step)::DECIMAL) * 100, 2)
            ELSE 0 
        END as conversion_rate
    FROM step_visitors sv
    CROSS JOIN conversion_visitors cv
    ORDER BY sv.step;
END;
$$ LANGUAGE plpgsql;

-- Grant permissions
GRANT SELECT, INSERT, UPDATE ON user_analytics TO authenticated;
GRANT SELECT, INSERT, UPDATE ON user_sessions TO authenticated;
GRANT SELECT, INSERT, UPDATE ON heatmap_data TO authenticated;
GRANT SELECT, INSERT, UPDATE ON conversions TO authenticated;
GRANT SELECT, INSERT, UPDATE ON ab_tests TO authenticated;

-- Grant usage on sequences
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO authenticated;

-- Insert sample session for testing
INSERT INTO user_sessions (session_id, device_info) VALUES 
('sample_session_123', '{"type": "desktop", "browser": "Chrome"}');
