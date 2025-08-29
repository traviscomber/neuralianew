# Neuralia - AI Executive Platform

A modern AI platform for deploying and managing AI executives and agents.

## Features

- 🤖 AI Executive Chat Interface
- 🛒 Agent Marketplace
- 👤 User Authentication with Supabase
- 💳 Shopping Cart Functionality
- 📱 Responsive Design
- 🎨 Modern UI with Tailwind CSS

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables (see `.env.example`)
4. Run the development server: `npm run dev`

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
- `OPENAI_API_KEY`: Your OpenAI API key (server-side only)

## Deployment

This project is configured for deployment on Vercel with automatic builds from the main branch.

## Tech Stack

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Supabase
- OpenAI API
- Radix UI Components
