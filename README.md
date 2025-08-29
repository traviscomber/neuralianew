# Neuralia - AI Agent Platform

A modern AI agent marketplace built with Next.js, Supabase, and TypeScript.

## Features

- 🤖 AI Agent Marketplace
- 🔐 Authentication with Supabase
- 🛒 Shopping Cart Functionality
- 💬 AI Chat Integration
- 🎨 Modern UI with Tailwind CSS
- 📱 Responsive Design
- 🌙 Dark Mode Support

## Tech Stack

- **Framework:** Next.js 14
- **Database:** Supabase
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Authentication:** Supabase Auth
- **TypeScript:** Full type safety
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/your-username/neuralia-landing.git
cd neuralia-landing
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env.local
\`\`\`

4. Update the environment variables in `.env.local` with your Supabase credentials.

5. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
OPENAI_API_KEY=your_openai_api_key
NEXT_PUBLIC_SITE_URL=https://n3uralia.com
\`\`\`

## Database Setup

The application uses Supabase as the database. Make sure to set up the following tables:

- `profiles` - User profiles
- `ai_agents` - Available AI agents
- `deployed_agents` - User deployed agents
- `purchases` - Purchase history
- `chat_conversations` - Chat history

## Deployment

The easiest way to deploy is using Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set up environment variables in Vercel dashboard
4. Deploy!

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
