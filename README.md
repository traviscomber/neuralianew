# Neuralia - AI Agent Platform

A modern AI agent platform built with Next.js, Supabase, and OpenAI.

## Features

- 🤖 AI Agent Marketplace
- 🔐 Authentication with Supabase
- 💳 Shopping Cart & Purchases
- 📱 Responsive Design
- 🎨 Modern UI with Tailwind CSS
- 🌙 Dark Mode Support

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

## Deployment

This project is configured for deployment on Vercel. Simply connect your GitHub repository to Vercel and it will automatically deploy.

## Tech Stack

- **Framework**: Next.js 15
- **Database**: Supabase
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **AI**: OpenAI API
- **Authentication**: Supabase Auth
- **Deployment**: Vercel
