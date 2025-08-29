# Neuralia - AI Executive Platform

A modern AI platform for deploying and managing AI executives and agents.

## Features

- 🤖 AI Executive Deployment
- 💬 Real-time Chat Interface
- 🛒 Shopping Cart System
- 🔐 Authentication with Supabase
- 📱 Responsive Design
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14
- **Database**: Supabase
- **Authentication**: Supabase Auth
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **AI Integration**: OpenAI API
- **Deployment**: Vercel

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables (see `.env.example`)
4. Run the development server: `npm run dev`

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anon key
- `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key
- `OPENAI_API_KEY`: Your OpenAI API key
- `NEXT_PUBLIC_SITE_URL`: Your site URL

## Deployment

This project is configured for deployment on Vercel. Simply connect your GitHub repository to Vercel and set the environment variables.

## License

MIT License
