-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Drop existing functions first to avoid return type conflicts
DROP FUNCTION IF EXISTS get_analytics_summary(INTEGER);
DROP FUNCTION IF EXISTS get_conversion_rates(INTEGER);
DROP FUNCTION IF EXISTS update_session_stats();

-- Drop existing tables if they exist (in correct order)
DROP TABLE IF EXISTS conversion_events CASCADE;
DROP TABLE IF EXISTS user_events CASCADE;
DROP TABLE IF EXISTS heatmap_data CASCADE;
DROP TABLE IF EXISTS performance_metrics CASCADE;
DROP TABLE IF EXISTS page_views CASCADE;
DROP TABLE IF EXISTS user_sessions CASCADE;
DROP TABLE IF EXISTS session_stats CASCADE;

-- Create user_sessions table first
CREATE TABLE user_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id TEXT NOT NULL UNIQUE,
    user_agent TEXT,
    ip_address INET,
    country TEXT,
    city TEXT,
    device_type TEXT,
    browser TEXT,
    os TEXT,
    screen_resolution TEXT,
    referrer TEXT,
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create page_views table
CREATE TABLE page_views (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id TEXT NOT NULL,
    page_url TEXT NOT NULL,
    page_title TEXT,
    referrer TEXT,
    load_time INTEGER,
    time_on_page INTEGER DEFAULT 0,
    scroll_depth INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    FOREIGN KEY (session_id) REFERENCES user_sessions(session_id) ON DELETE CASCADE
);

-- Create user_events table
CREATE TABLE user_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id TEXT NOT NULL,
    event_type TEXT NOT NULL,
    event_data JSONB DEFAULT '{}',
    page_url TEXT,
    element_selector TEXT,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    FOREIGN KEY (session_id) REFERENCES user_sessions(session_id) ON DELETE CASCADE
);

-- Create heatmap_data table
CREATE TABLE heatmap_data (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id TEXT NOT NULL,
    page_url TEXT NOT NULL,
    x_coordinate INTEGER NOT NULL,
    y_coordinate INTEGER NOT NULL,
    viewport_width INTEGER,
    viewport_height INTEGER,
    device_type TEXT,
    element_selector TEXT,
    click_timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    FOREIGN KEY (session_id) REFERENCES user_sessions(session_id) ON DELETE CASCADE
);

-- Create performance_metrics table
CREATE TABLE performance_metrics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id TEXT NOT NULL,
    page_url TEXT NOT NULL,
    metric_name TEXT NOT NULL,
    metric_value DECIMAL(10,2) NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    FOREIGN KEY (session_id) REFERENCES user_sessions(session_id) ON DELETE CASCADE
);

-- Create conversion_events table
CREATE TABLE conversion_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id TEXT NOT NULL,
    conversion_type TEXT NOT NULL,
    conversion_value DECIMAL(10,2) DEFAULT 0,
    page_url TEXT,
    element_selector TEXT,
    additional_data JSONB DEFAULT '{}',
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    FOREIGN KEY (session_id) REFERENCES user_sessions(session_id) ON DELETE CASCADE
);

-- Create session_stats table
CREATE TABLE session_stats (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id TEXT NOT NULL UNIQUE,
    total_page_views INTEGER DEFAULT 0,
    total_events INTEGER DEFAULT 0,
    total_time_spent INTEGER DEFAULT 0,
    bounce_rate DECIMAL(5,2) DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_user_sessions_session_id ON user_sessions(session_id);
CREATE INDEX idx_user_sessions_created_at ON user_sessions(created_at);
CREATE INDEX idx_user_sessions_country ON user_sessions(country);
CREATE INDEX idx_user_sessions_device_type ON user_sessions(device_type);

CREATE INDEX idx_page_views_session_id ON page_views(session_id);
CREATE INDEX idx_page_views_page_url ON page_views(page_url);
CREATE INDEX idx_page_views_created_at ON page_views(created_at);

CREATE INDEX idx_user_events_session_id ON user_events(session_id);
CREATE INDEX idx_user_events_event_type ON user_events(event_type);
CREATE INDEX idx_user_events_timestamp ON user_events(timestamp);

CREATE INDEX idx_heatmap_data_session_id ON heatmap_data(session_id);
CREATE INDEX idx_heatmap_data_page_url ON heatmap_data(page_url);
CREATE INDEX idx_heatmap_data_coordinates ON heatmap_data(x_coordinate, y_coordinate);

CREATE INDEX idx_performance_metrics_session_id ON performance_metrics(session_id);
CREATE INDEX idx_performance_metrics_metric_name ON performance_metrics(metric_name);

CREATE INDEX idx_conversion_events_session_id ON conversion_events(session_id);
CREATE INDEX idx_conversion_events_type ON conversion_events(conversion_type);
CREATE INDEX idx_conversion_events_timestamp ON conversion_events(timestamp);

CREATE INDEX idx_session_stats_session_id ON session_stats(session_id);

-- Enable Row Level Security
ALTER TABLE user_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE heatmap_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE performance_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversion_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE session_stats ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for anonymous users
CREATE POLICY "Allow anonymous operations on user_sessions" ON user_sessions FOR ALL TO anon USING (true);
CREATE POLICY "Allow anonymous operations on page_views" ON page_views FOR ALL TO anon USING (true);
CREATE POLICY "Allow anonymous operations on user_events" ON user_events FOR ALL TO anon USING (true);
CREATE POLICY "Allow anonymous operations on heatmap_data" ON heatmap_data FOR ALL TO anon USING (true);
CREATE POLICY "Allow anonymous operations on performance_metrics" ON performance_metrics FOR ALL TO anon USING (true);
CREATE POLICY "Allow anonymous operations on conversion_events" ON conversion_events FOR ALL TO anon USING (true);
CREATE POLICY "Allow anonymous operations on session_stats" ON session_stats FOR ALL TO anon USING (true);

-- Create RLS policies for authenticated users
CREATE POLICY "Allow authenticated operations on user_sessions" ON user_sessions FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow authenticated operations on page_views" ON page_views FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow authenticated operations on user_events" ON user_events FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow authenticated operations on heatmap_data" ON heatmap_data FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow authenticated operations on performance_metrics" ON performance_metrics FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow authenticated operations on conversion_events" ON conversion_events FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow authenticated operations on session_stats" ON session_stats FOR ALL TO authenticated USING (true);

-- Create new analytics summary function
CREATE OR REPLACE FUNCTION get_analytics_summary_new(hours_back INTEGER DEFAULT 24)
RETURNS TABLE (
    total_sessions BIGINT,
    total_page_views BIGINT,
    total_events BIGINT,
    avg_session_duration DECIMAL,
    bounce_rate DECIMAL
) AS $$
BEGIN
    RETURN QUERY
    WITH session_data AS (
        SELECT 
            us.session_id,
            COUNT(pv.id) as page_views,
            COALESCE(MAX(pv.time_on_page), 0) as session_duration
        FROM user_sessions us
        LEFT JOIN page_views pv ON us.session_id = pv.session_id
        WHERE us.created_at >= NOW() - (hours_back || ' hours')::INTERVAL
        GROUP BY us.session_id
    )
    SELECT 
        COUNT(DISTINCT sd.session_id)::BIGINT,
        SUM(sd.page_views)::BIGINT,
        (SELECT COUNT(*) FROM user_events WHERE timestamp >= NOW() - (hours_back || ' hours')::INTERVAL)::BIGINT,
        AVG(sd.session_duration)::DECIMAL(10,2),
        (COUNT(CASE WHEN sd.page_views = 1 THEN 1 END) * 100.0 / NULLIF(COUNT(*), 0))::DECIMAL(5,2)
    FROM session_data sd;
END;
$$ LANGUAGE plpgsql;

-- Create new conversion rates function
CREATE OR REPLACE FUNCTION get_conversion_rates_new(hours_back INTEGER DEFAULT 24)
RETURNS TABLE (
    conversion_type TEXT,
    total_conversions BIGINT,
    conversion_rate DECIMAL
) AS $$
BEGIN
    RETURN QUERY
    WITH conversion_data AS (
        SELECT 
            ce.conversion_type,
            COUNT(DISTINCT ce.session_id) as conversions
        FROM conversion_events ce
        WHERE ce.timestamp >= NOW() - (hours_back || ' hours')::INTERVAL
        GROUP BY ce.conversion_type
    ),
    session_count AS (
        SELECT COUNT(DISTINCT session_id) as total
        FROM user_sessions
        WHERE created_at >= NOW() - (hours_back || ' hours')::INTERVAL
    )
    SELECT 
        cd.conversion_type,
        cd.conversions,
        (cd.conversions * 100.0 / NULLIF(sc.total, 0))::DECIMAL(5,2)
    FROM conversion_data cd
    CROSS JOIN session_count sc;
END;
$$ LANGUAGE plpgsql;

-- Create trigger function for session stats
CREATE OR REPLACE FUNCTION update_session_stats_new()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO session_stats (session_id, total_page_views, total_events)
    VALUES (NEW.session_id, 0, 0)
    ON CONFLICT (session_id) DO NOTHING;
    
    IF TG_TABLE_NAME = 'page_views' THEN
        UPDATE session_stats 
        SET total_page_views = total_page_views + 1,
            updated_at = NOW()
        WHERE session_id = NEW.session_id;
    ELSIF TG_TABLE_NAME = 'user_events' THEN
        UPDATE session_stats 
        SET total_events = total_events + 1,
            updated_at = NOW()
        WHERE session_id = NEW.session_id;
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers
CREATE TRIGGER trigger_update_session_stats_page_views
    AFTER INSERT ON page_views
    FOR EACH ROW EXECUTE FUNCTION update_session_stats_new();

CREATE TRIGGER trigger_update_session_stats_events
    AFTER INSERT ON user_events
    FOR EACH ROW EXECUTE FUNCTION update_session_stats_new();

-- Insert sample data for testing
INSERT INTO user_sessions (session_id, user_agent, country, device_type, browser, os) VALUES
('sample-session-1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36', 'United States', 'desktop', 'Chrome', 'Windows'),
('sample-session-2', 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)', 'Canada', 'mobile', 'Safari', 'iOS'),
('sample-session-3', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)', 'United Kingdom', 'desktop', 'Safari', 'macOS');

INSERT INTO page_views (session_id, page_url, page_title, load_time) VALUES
('sample-session-1', '/', 'Home Page', 1200),
('sample-session-1', '/contacts', 'Contact Us', 800),
('sample-session-2', '/', 'Home Page', 1500),
('sample-session-3', '/products', 'Products', 900);

INSERT INTO user_events (session_id, event_type, page_url) VALUES
('sample-session-1', 'click', '/'),
('sample-session-1', 'scroll', '/contacts'),
('sample-session-2', 'click', '/'),
('sample-session-3', 'form_submit', '/products');

INSERT INTO conversion_events (session_id, conversion_type, page_url) VALUES
('sample-session-1', 'contact_form', '/contacts'),
('sample-session-2', 'hero_cta', '/'),
('sample-session-3', 'demo_request', '/products');

-- Grant permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO anon, authenticated;

-- Verify tables were created successfully
SELECT 
    schemaname,
    tablename,
    tableowner
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename IN ('user_sessions', 'page_views', 'user_events', 'heatmap_data', 'performance_metrics', 'conversion_events', 'session_stats')
ORDER BY tablename;
