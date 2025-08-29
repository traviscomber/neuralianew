# Neuralia - AI Executive Agents

Deploy AI executives that think, decide, and execute like seasoned business leaders.

## Features

- 🧠 **Neural Executive Agents** - AI-powered business executives with specialized expertise
- 🚀 **Instant Deployment** - Deploy agents in seconds with one-click setup
- 💬 **Interactive Chat** - Communicate with your AI executives in real-time
- 📊 **Business Intelligence** - Get strategic insights and data-driven recommendations
- 🔒 **Secure & Private** - Enterprise-grade security with data privacy protection
- 🌍 **Global Market Expertise** - Agents trained on international business practices
- 🤖 **AI Agent Marketplace** - A modern AI agent marketplace built with Next.js, Supabase, and TypeScript
- 🔐 **Authentication with Supabase** - Secure user authentication
- 🛒 **Shopping Cart Functionality** - Easily manage purchases
- 📱 **Responsive Design** - Accessible on all devices
- 🎨 **Modern UI with Tailwind CSS** - Sleek and intuitive user interface

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **AI**: OpenAI GPT-4
- **Deployment**: Vercel
- **UI Animation**: Framer Motion

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
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `OPENAI_API_KEY`
- `NEXT_PUBLIC_OPENAI_API_KEY`
- `NEXT_PUBLIC_SITE_URL`

4. Set up the database:
Run the SQL scripts in the `scripts/` directory in your Supabase SQL editor.

5. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Dashboard pages
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Radix UI components
│   ├── auth/             # Authentication components
│   ├── chat/             # Chat components
│   ├── landing/          # Landing page components
│   └── cart/             # Shopping cart components
├── hooks/                # Custom React hooks
├── lib/                  # Utility libraries
├── scripts/              # Database scripts
├── types/                # TypeScript type definitions
└── public/               # Static assets
\`\`\`

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | Yes |
| `OPENAI_API_KEY` | OpenAI API key | Yes |
| `NEXT_PUBLIC_OPENAI_API_KEY` | OpenAI API key (client-side) | Yes |
| `NEXT_PUBLIC_SITE_URL` | Site URL for redirects | Yes |

## Database Setup

The application uses Supabase as the database. Run the SQL scripts in the `scripts/` directory to set up the required tables:

1. `01-setup-extensions.sql` - Enable required PostgreSQL extensions
2. `02-create-profiles-table.sql` - User profiles table
3. `03-create-ai-agents-table.sql` - AI agents configuration
4. `04-create-ai-systems-table.sql` - AI systems management
5. `05-create-chat-conversations-table.sql` - Chat conversations
6. `06-create-user-analytics-table.sql` - User analytics
7. `07-create-functions-and-triggers.sql` - Database functions and triggers

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

### Manual Deployment

\`\`\`bash
npm run build
npm start
\`\`\`

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@neuralia.com or join our Discord community.

## Roadmap

- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Custom agent training
- [ ] API integrations
- [ ] Mobile app
- [ ] Enterprise features

---

Built with ❤️ by the Neuralia team
