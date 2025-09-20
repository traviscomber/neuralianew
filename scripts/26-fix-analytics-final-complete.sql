-- Drop existing analytics tables if they exist
DROP TABLE IF EXISTS conversion_events CASCADE;
DROP TABLE IF EXISTS performance_metrics CASCADE;
DROP TABLE IF EXISTS heatmap_data CASCADE;
DROP TABLE IF EXISTS user_events CASCADE;
DROP TABLE IF EXISTS page_views CASCADE;
DROP TABLE IF EXISTS session_stats CASCADE;
DROP TABLE IF EXISTS user_sessions CASCADE;

-- Enable UUID extension if not exists
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create user_sessions table with all required columns
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
    language TEXT,
    timezone TEXT,
    referrer TEXT,
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    utm_term TEXT,
    utm_content TEXT,
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
    CONSTRAINT fk_page_views_session FOREIGN KEY (session_id) REFERENCES user_sessions(session_id) ON DELETE CASCADE
);

-- Create user_events table
CREATE TABLE user_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id TEXT NOT NULL,
    event_type TEXT NOT NULL,
    event_data JSONB DEFAULT '{}',
    page_url TEXT,
    page_title TEXT,
    element_selector TEXT,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT fk_user_events_session FOREIGN KEY (session_id) REFERENCES user_sessions(session_id) ON DELETE CASCADE
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
    CONSTRAINT fk_heatmap_data_session FOREIGN KEY (session_id) REFERENCES user_sessions(session_id) ON DELETE CASCADE
);

-- Create performance_metrics table
CREATE TABLE performance_metrics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id TEXT NOT NULL,
    page_url TEXT NOT NULL,
    metric_name TEXT NOT NULL,
    metric_value DECIMAL(10,2) NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT fk_performance_metrics_session FOREIGN KEY (session_id) REFERENCES user_sessions(session_id) ON DELETE CASCADE
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
    CONSTRAINT fk_conversion_events_session FOREIGN KEY (session_id) REFERENCES user_sessions(session_id) ON DELETE CASCADE
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
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT fk_session_stats_session FOREIGN KEY (session_id) REFERENCES user_sessions(session_id) ON DELETE CASCADE
);

-- Create indexes for better performance
CREATE INDEX idx_user_sessions_session_id ON user_sessions(session_id);
CREATE INDEX idx_user_sessions_created_at ON user_sessions(created_at);
CREATE INDEX idx_page_views_session_id ON page_views(session_id);
CREATE INDEX idx_page_views_created_at ON page_views(created_at);
CREATE INDEX idx_user_events_session_id ON user_events(session_id);
CREATE INDEX idx_user_events_event_type ON user_events(event_type);
CREATE INDEX idx_user_events_timestamp ON user_events(timestamp);
CREATE INDEX idx_heatmap_data_session_id ON heatmap_data(session_id);
CREATE INDEX idx_heatmap_data_page_url ON heatmap_data(page_url);
CREATE INDEX idx_performance_metrics_session_id ON performance_metrics(session_id);
CREATE INDEX idx_conversion_events_session_id ON conversion_events(session_id);
CREATE INDEX idx_conversion_events_type ON conversion_events(conversion_type);

-- Enable Row Level Security
ALTER TABLE user_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE heatmap_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE performance_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversion_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE session_stats ENABLE ROW LEVEL SECURITY;

-- Create RLS policies (allow all operations for development)
CREATE POLICY "Allow all operations" ON user_sessions FOR ALL USING (true);
CREATE POLICY "Allow all operations" ON page_views FOR ALL USING (true);
CREATE POLICY "Allow all operations" ON user_events FOR ALL USING (true);
CREATE POLICY "Allow all operations" ON heatmap_data FOR ALL USING (true);
CREATE POLICY "Allow all operations" ON performance_metrics FOR ALL USING (true);
CREATE POLICY "Allow all operations" ON conversion_events FOR ALL USING (true);
CREATE POLICY "Allow all operations" ON session_stats FOR ALL USING (true);

-- Grant permissions to anon and authenticated users
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at columns
CREATE TRIGGER update_user_sessions_updated_at 
    BEFORE UPDATE ON user_sessions 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_session_stats_updated_at 
    BEFORE UPDATE ON session_stats 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
