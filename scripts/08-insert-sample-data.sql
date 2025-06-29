-- Insert sample data for testing (optional)
-- This will create some sample AI agents and systems for demonstration

-- Note: This script should be run after users have signed up
-- The user_id values will need to be replaced with actual user IDs from your auth.users table

-- Sample AI Agents (uncomment and modify user_id after user signup)
/*
INSERT INTO public.ai_agents (user_id, name, type, description, status, total_conversations, satisfaction_rating)
VALUES 
    ('YOUR_USER_ID_HERE', 'Sales Coach Pro', 'sales-coach', 'Advanced sales coaching agent that helps improve close rates and deal strategies.', 'active', 156, 4.8),
    ('YOUR_USER_ID_HERE', 'HR Advisory Assistant', 'hr-advisory', 'Comprehensive HR support for employee relations, policies, and compliance.', 'active', 89, 4.6),
    ('YOUR_USER_ID_HERE', 'Technical Support Bot', 'technical-support', 'Expert technical support for troubleshooting and problem resolution.', 'active', 234, 4.7);
*/

-- Sample AI Systems (uncomment and modify user_id after user signup)
/*
INSERT INTO public.ai_systems (user_id, name, type, description, status, total_executions, successful_executions)
VALUES 
    ('YOUR_USER_ID_HERE', 'Lead Processing Workflow', 'workflow-automation', 'Automated lead qualification and routing system.', 'active', 1250, 1198),
    ('YOUR_USER_ID_HERE', 'Customer Data Integration', 'integration', 'Syncs customer data across CRM, support, and marketing platforms.', 'active', 890, 876);
*/

-- Success message
SELECT 'Sample data insertion script ready (modify user_id values as needed)!' as status;
