# Environment Setup Guide

## Required Environment Variables

### Supabase Configuration
1. **NEXT_PUBLIC_SUPABASE_URL**: Your Supabase project URL
   - Found in: Supabase Dashboard > Settings > API
   - Format: `https://your-project-id.supabase.co`

2. **NEXT_PUBLIC_SUPABASE_ANON_KEY**: Your Supabase anonymous key
   - Found in: Supabase Dashboard > Settings > API
   - This is safe to expose in the browser

3. **SUPABASE_SERVICE_ROLE_KEY**: Your Supabase service role key
   - Found in: Supabase Dashboard > Settings > API
   - Keep this secret! Only use server-side

### OpenAI Configuration
4. **OPENAI_API_KEY**: Your OpenAI API key
   - Get from: https://platform.openai.com/api-keys
   - Required for AI chat functionality

### Site Configuration
5. **NEXT_PUBLIC_SITE_URL**: Your site URL
   - Development: `http://localhost:3000`
   - Production: Your actual domain

## Setup Steps

1. Copy `.env.example` to `.env.local`
2. Fill in all the required values
3. Restart your development server
4. Run the database setup scripts in order

## Database Setup

Run these SQL scripts in your Supabase SQL editor in order:

1. `scripts/01-setup-extensions.sql`
2. `scripts/02-create-profiles-table.sql`
3. `scripts/03-create-ai-agents-table.sql`
4. `scripts/04-create-ai-systems-table.sql`
5. `scripts/05-create-chat-conversations-table.sql`
6. `scripts/06-create-user-analytics-table.sql`
7. `scripts/07-create-functions-and-triggers.sql`

## Verification

After setup, you should be able to:
- Sign up/sign in users
- Create and deploy AI agents
- Store chat conversations
- Track user analytics

## Troubleshooting

- **Auth errors**: Check your Supabase URL and keys
- **Database errors**: Ensure all tables are created with proper RLS policies
- **AI chat errors**: Verify your OpenAI API key is valid
