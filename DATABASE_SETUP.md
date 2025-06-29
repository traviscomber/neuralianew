# Database Setup Instructions

Follow these steps to set up your Supabase database for the Neuralia application.

## Prerequisites

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key from Settings → API
3. Set up your environment variables (see ENVIRONMENT_SETUP.md)

## Step-by-Step Setup

### 1. Access SQL Editor

1. Go to your Supabase project dashboard
2. Navigate to "SQL Editor" in the left sidebar
3. You'll run each script in order

### 2. Execute Scripts in Order

Run the following scripts **in this exact order**:

#### Script 1: Setup Extensions
\`\`\`sql
-- Copy and paste the content from scripts/01-setup-extensions.sql
\`\`\`

#### Script 2: Create Profiles Table
\`\`\`sql
-- Copy and paste the content from scripts/02-create-profiles-table.sql
\`\`\`

#### Script 3: Create AI Agents Table
\`\`\`sql
-- Copy and paste the content from scripts/03-create-ai-agents-table.sql
\`\`\`

#### Script 4: Create AI Systems Table
\`\`\`sql
-- Copy and paste the content from scripts/04-create-ai-systems-table.sql
\`\`\`

#### Script 5: Create Chat Conversations Table
\`\`\`sql
-- Copy and paste the content from scripts/05-create-chat-conversations-table.sql
\`\`\`

#### Script 6: Create User Analytics Table
\`\`\`sql
-- Copy and paste the content from scripts/06-create-user-analytics-table.sql
\`\`\`

#### Script 7: Create Functions and Triggers
\`\`\`sql
-- Copy and paste the content from scripts/07-create-functions-and-triggers.sql
\`\`\`

#### Script 8: Insert Sample Data (Optional)
\`\`\`sql
-- Copy and paste the content from scripts/08-insert-sample-data.sql
-- Remember to replace 'YOUR_USER_ID_HERE' with actual user IDs after signup
\`\`\`

### 3. Verify Setup

After running all scripts, verify your setup:

1. Go to "Table Editor" in Supabase
2. You should see these tables:
   - `profiles`
   - `ai_agents`
   - `ai_systems`
   - `chat_conversations`
   - `user_analytics`

3. Check that Row Level Security (RLS) is enabled on all tables
4. Verify that the triggers are working by signing up a test user

### 4. Test the Setup

1. Deploy your application with the environment variables set
2. Sign up for a new account
3. Check that a profile was automatically created in the `profiles` table
4. Test the authentication flows (login, logout, password reset)

## Troubleshooting

### Common Issues

1. **Permission Denied**: Make sure you're running the scripts as the project owner
2. **Function Already Exists**: The scripts use `CREATE OR REPLACE` to handle this
3. **Trigger Errors**: Make sure the functions are created before the triggers
4. **RLS Policies**: Ensure all policies are created after enabling RLS

### Checking Your Setup

\`\`\`sql
-- Check if all tables exist
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('profiles', 'ai_agents', 'ai_systems', 'chat_conversations', 'user_analytics');

-- Check if RLS is enabled
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public' 
AND rowsecurity = true;

-- Check if triggers exist
SELECT trigger_name, event_object_table 
FROM information_schema.triggers 
WHERE trigger_schema = 'public';
\`\`\`

## Next Steps

After completing the database setup:

1. Test user registration and profile creation
2. Test the chat functionality
3. Create some AI agents and systems through the UI
4. Monitor the analytics data collection

## Support

If you encounter issues:

1. Check the Supabase logs in your project dashboard
2. Verify your environment variables are set correctly
3. Ensure your database URL and keys are valid
4. Check that your project has the necessary permissions
