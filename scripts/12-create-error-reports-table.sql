-- Create error_reports table
CREATE TABLE IF NOT EXISTS error_reports (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    error_message TEXT NOT NULL,
    error_stack TEXT,
    metadata JSONB DEFAULT '{}',
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_error_reports_user_id ON error_reports(user_id);
CREATE INDEX IF NOT EXISTS idx_error_reports_created_at ON error_reports(created_at);

-- Enable RLS
ALTER TABLE error_reports ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Users can view their own error reports" ON error_reports
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Allow anonymous error reporting" ON error_reports
    FOR INSERT WITH CHECK (true);

-- Create trigger for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_error_reports_updated_at 
    BEFORE UPDATE ON error_reports 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
