-- Create error_reports table for tracking application errors
-- This table stores error information for debugging and monitoring

CREATE TABLE IF NOT EXISTS error_reports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    error_message TEXT NOT NULL,
    stack_trace TEXT,
    metadata JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add comments for documentation
COMMENT ON TABLE error_reports IS 'Stores application errors for debugging and monitoring';
COMMENT ON COLUMN error_reports.user_id IS 'User who encountered the error (nullable for anonymous errors)';
COMMENT ON COLUMN error_reports.error_message IS 'The error message that was displayed';
COMMENT ON COLUMN error_reports.stack_trace IS 'Full stack trace of the error';
COMMENT ON COLUMN error_reports.metadata IS 'Additional context like URL, user agent, component info';

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_error_reports_user_id ON error_reports(user_id);
CREATE INDEX IF NOT EXISTS idx_error_reports_created_at ON error_reports(created_at DESC);

-- Enable Row Level Security
ALTER TABLE error_reports ENABLE ROW LEVEL SECURITY;

-- RLS Policies
-- Users can view their own error reports
CREATE POLICY "Users can view own error reports" ON error_reports
    FOR SELECT USING (auth.uid() = user_id);

-- Anyone can insert error reports (for anonymous error reporting)
CREATE POLICY "Anyone can report errors" ON error_reports
    FOR INSERT WITH CHECK (true);

-- Users can update their own error reports
CREATE POLICY "Users can update own error reports" ON error_reports
    FOR UPDATE USING (auth.uid() = user_id);

-- Add trigger for updated_at
CREATE TRIGGER handle_updated_at_error_reports
    BEFORE UPDATE ON error_reports
    FOR EACH ROW
    EXECUTE FUNCTION handle_updated_at();

-- Grant permissions
GRANT ALL ON error_reports TO authenticated;
GRANT ALL ON error_reports TO service_role;

-- Insert a test error report
INSERT INTO error_reports (error_message, stack_trace, metadata) VALUES (
    'Test error report',
    'Error: Test error\n    at testFunction (test.js:1:1)',
    '{"url": "/test", "userAgent": "Test Browser", "component": "TestComponent"}'
);

SELECT 'Error reports table created successfully' as status;
