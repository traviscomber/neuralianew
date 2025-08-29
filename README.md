# Neuralia - AI Executive Platform

A modern Next.js application for deploying and managing AI executive agents.

## Features

- 🤖 AI Executive Agents marketplace
- 🔐 Secure authentication with Supabase
- 💳 Shopping cart and deployment system
- 🎨 Modern UI with Tailwind CSS and shadcn/ui
- 📱 Fully responsive design
- 🌙 Dark mode support
- ⚡ Fast performance with Next.js 14

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **AI Integration**: OpenAI API
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- OpenAI API key

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/traviscomber/neuralianew.git
cd neuralianew
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env.local
\`\`\`

Fill in your environment variables:
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anon key
- `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase service role key
- `OPENAI_API_KEY`: Your OpenAI API key
- `NEXT_PUBLIC_SITE_URL`: Your site URL (https://n3uralia.com)

4. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Database Setup

The application uses Supabase as the database. Run the SQL scripts in the `scripts/` directory to set up the required tables:

1. `01-setup-extensions.sql` - Enable required extensions
2. `02-create-profiles-table.sql` - User profiles
3. `03-create-ai-agents-table.sql` - AI agents catalog
4. `04-create-ai-systems-table.sql` - AI systems
5. `05-create-chat-conversations-table.sql` - Chat history
6. `06-create-user-analytics-table.sql` - User analytics
7. `07-create-functions-and-triggers.sql` - Database functions
8. `08-insert-sample-data.sql` - Sample data

## Deployment

The application is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Set the environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## Environment Variables

Required environment variables for production:

\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
OPENAI_API_KEY=your-openai-key
NEXT_PUBLIC_OPENAI_API_KEY=your-openai-key
NEXT_PUBLIC_SITE_URL=https://n3uralia.com
\`\`\`

## Features

### Authentication
- Sign up/Sign in with email and password
- Password reset functionality
- Protected routes and user sessions
- Automatic profile creation

### AI Agents Marketplace
- Browse available AI executive agents
- Detailed agent information and features
- Shopping cart functionality
- Agent deployment system

### Dashboard
- User profile management
- Deployed agents overview
- Chat with deployed agents
- Usage analytics

### Chat System
- Real-time chat with AI agents
- Message history
- Typing indicators
- Responsive chat interface

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@n3uralia.com or open an issue on GitHub.
