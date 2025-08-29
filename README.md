# Neuralia - AI Executive Platform

Deploy AI executives that understand your business context and deliver results.

## Features

- 🤖 AI Executive Deployment
- 💼 Business Context Understanding
- 📊 Real-time Analytics
- 🔒 Enterprise Security
- 🌐 Global Deployment
- 📱 Mobile Responsive

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables (see `.env.example`)
4. Run development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key
- `OPENAI_API_KEY` - Your OpenAI API key
- `NEXT_PUBLIC_SITE_URL` - Your site URL (https://n3uralia.com)

## Deployment

This project is configured for deployment on Vercel with the custom domain `n3uralia.com`.

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Database**: Supabase
- **Authentication**: Supabase Auth
- **AI**: OpenAI GPT-4
- **Deployment**: Vercel

## License

MIT License
