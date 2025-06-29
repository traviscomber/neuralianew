-- Enable necessary extensions for the application
-- Run this first to set up required PostgreSQL extensions

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Success message
SELECT 'Extensions setup completed!' as status;
