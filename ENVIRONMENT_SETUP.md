# Environment Variables Setup

## Required Environment Variables

To run this application, you need to set up the following environment variables:

### 1. Supabase Configuration

You'll need to create a Supabase project and get these values from your project settings:

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous/public key
- `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key (for server-side operations)

### 2. Site Configuration

- `NEXT_PUBLIC_SITE_URL`: Your site's URL (e.g., `https://yoursite.com` or `http://localhost:3000` for development)

### 3. OpenAI Configuration

If you're using the AI chat features:

- `OPENAI_API_KEY`: Your OpenAI API key (server-side only, never exposed to client)

## How to Set Environment Variables

### For Local Development

1. Copy `.env.example` to `.env.local`
2. Fill in your actual values
3. Never commit `.env.local` to version control

### For Vercel Deployment

1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. Add each variable with its corresponding value
4. Make sure to set the environment (Production, Preview, Development)

### For Other Hosting Platforms

Refer to your hosting platform's documentation for setting environment variables.

## Getting Supabase Credentials

1. Go to [supabase.com](https://supabase.com)
2. Create a new project or select an existing one
3. Go to Settings > API
4. Copy the Project URL and anon/public key
5. For the service role key, copy it from the same API settings page

## Security Notes

- Never expose service role keys or API keys in client-side code
- Use `NEXT_PUBLIC_` prefix only for variables that are safe to expose to the browser
- OpenAI API keys should only be used server-side (API routes, Server Actions)
- Keep your `.env.local` file in `.gitignore`
- Rotate your keys regularly for security

## OpenAI API Key Security

The OpenAI API key is used server-side only in:
- API routes (`/api/chat/route.ts`)
- Server Actions (if any)

It is never exposed to the client-side code, ensuring your API key remains secure.
