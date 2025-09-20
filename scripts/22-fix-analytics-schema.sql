-- Drop existing tables if they exist
DROP TABLE IF EXISTS conversion_events CASCADE;
DROP TABLE IF EXISTS heatmap_data CASCADE;
DROP TABLE IF EXISTS user_events CASCADE;
DROP TABLE IF EXISTS user_sessions CASCADE;

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create user_sessions table
CREATE TABLE user_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id TEXT NOT NULL UNIQUE,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    user_agent TEXT,
    browser TEXT,
    os TEXT,
    device_type TEXT,
    screen_resolution TEXT,
    language TEXT,
    timezone TEXT,
    country TEXT,
    city TEXT,
    referrer TEXT,
    utm_source TEXT,
    utm_medium TEXT,
    utm_campaign TEXT,
    utm_term TEXT,
    utm_content TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    last_activity TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user_events table
CREATE TABLE user_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id TEXT NOT NULL REFERENCES user_sessions(session_id) ON DELETE CASCADE,
    event_type TEXT NOT NULL,
    event_data JSONB,
    page_url TEXT,
    page_title TEXT,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

-- Create heatmap_data table
CREATE TABLE heatmap_data (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id TEXT NOT NULL REFERENCES user_sessions(session_id) ON DELETE CASCADE,
    page_url TEXT NOT NULL,
    x_coordinate INTEGER NOT NULL,
    y_coordinate INTEGER NOT NULL,
    viewport_width INTEGER,
    viewport_height INTEGER,
    element_selector TEXT,
    click_type TEXT DEFAULT 'click',
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create conversion_events table
CREATE TABLE conversion_events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id TEXT NOT NULL REFERENCES user_sessions(session_id) ON DELETE CASCADE,
    conversion_type TEXT NOT NULL,
    conversion_value DECIMAL(10,2) DEFAULT 0,
    conversion_data JSONB,
    page_url TEXT,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

-- Create indexes for better performance
CREATE INDEX idx_user_sessions_session_id ON user_sessions(session_id);
CREATE INDEX idx_user_sessions_created_at ON user_sessions(created_at);
CREATE INDEX idx_user_events_session_id ON user_events(session_id);
CREATE INDEX idx_user_events_timestamp ON user_events(timestamp);
CREATE INDEX idx_user_events_event_type ON user_events(event_type);
CREATE INDEX idx_heatmap_data_session_id ON heatmap_data(session_id);
CREATE INDEX idx_heatmap_data_page_url ON heatmap_data(page_url);
CREATE INDEX idx_conversion_events_session_id ON conversion_events(session_id);
CREATE INDEX idx_conversion_events_type ON conversion_events(conversion_type);

-- Enable Row Level Security
ALTER TABLE user_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE heatmap_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversion_events ENABLE ROW LEVEL SECURITY;

-- Create RLS policies (allow all operations for now)
CREATE POLICY "Allow all operations on user_sessions" ON user_sessions FOR ALL USING (true);
CREATE POLICY "Allow all operations on user_events" ON user_events FOR ALL USING (true);
CREATE POLICY "Allow all operations on heatmap_data" ON heatmap_data FOR ALL USING (true);
CREATE POLICY "Allow all operations on conversion_events" ON conversion_events FOR ALL USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for user_sessions
CREATE TRIGGER update_user_sessions_updated_at 
    BEFORE UPDATE ON user_sessions 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
