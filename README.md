# NeuralIA Landing Page

A modern, AI-powered landing page built with Next.js 15, Supabase, and the AI SDK.

## Features

- 🚀 **Modern Design**: Beautiful gradient backgrounds with animated particles
- 🤖 **AI Chat Widget**: Interactive chat with OpenAI integration
- 🔐 **Authentication**: Complete auth flow with Supabase
- 📱 **Responsive**: Works perfectly on all devices
- ⚡ **Fast**: Built with Next.js 15 and optimized for performance
- 🎨 **Animations**: Smooth animations and transitions
- 🛡️ **Secure**: Row-level security with Supabase

## Tech Stack

- **Framework**: Next.js 15
- **Database**: Supabase
- **AI**: OpenAI with AI SDK
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Authentication**: Supabase Auth
- **TypeScript**: Full type safety

## Getting Started

### Prerequisites

- Node.js 18+ 
- Supabase account
- OpenAI API key

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
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

Add your environment variables:
\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
OPENAI_API_KEY=your_openai_api_key
\`\`\`

4. Set up the database:
- Go to your Supabase dashboard
- Navigate to SQL Editor
- Run the script from `scripts/setup-complete-database.sql`

5. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── auth/              # Authentication components
│   ├── chat/              # Chat widget components
│   └── ui/                # shadcn/ui components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── scripts/               # Database scripts
└── public/                # Static assets
\`\`\`

## Key Features

### Authentication
- Sign up with email confirmation
- Sign in with email/password
- Password reset functionality
- Protected routes and user sessions

### AI Chat System
- Interactive chat widget
- OpenAI integration with AI SDK
- Conversation history
- Question limits with WhatsApp fallback

### Database Schema
- User profiles
- Chat conversations
- AI agents and systems
- Row-level security (RLS)

### UI/UX
- Animated background particles
- Gradient text effects
- Smooth scrolling
- Mobile-responsive design
- Loading states and error handling

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Manual Deployment

1. Build the project:
\`\`\`bash
npm run build
\`\`\`

2. Start the production server:
\`\`\`bash
npm start
\`\`\`

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key | Yes |
| `OPENAI_API_KEY` | Your OpenAI API key | Yes |

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email contact@neuralia.ai or join our Discord community.
