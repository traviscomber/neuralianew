# Neuralia Landing Page

A modern, responsive landing page for Neuralia AI platform built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for styling
- 🔐 **Supabase Authentication** 
- 🛒 **Shopping Cart** functionality
- 📱 **Responsive Design**
- 🌙 **Dark Mode** support
- 🎯 **TypeScript** for type safety
- 📊 **Admin Dashboard**
- 💬 **AI Chat Integration**

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/traviscomber/neuralianew.git
cd neuralianew
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
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
- `NEXT_PUBLIC_SITE_URL`: Your site URL

4. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

\`\`\`
├── app/                    # Next.js 14 App Router
│   ├── api/               # API routes
│   ├── admin/             # Admin pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # UI components (shadcn/ui)
│   ├── landing/          # Landing page components
│   ├── auth/             # Authentication components
│   └── chat/             # Chat components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── types/                # TypeScript type definitions
└── public/               # Static assets
\`\`\`

## Technologies Used

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: Supabase
- **Authentication**: Supabase Auth
- **AI Integration**: OpenAI API
- **Deployment**: Vercel

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env.local` file in the root directory:

\`\`\`env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# OpenAI
OPENAI_API_KEY=your_openai_api_key

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\`\`\`

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set up environment variables in Vercel dashboard
4. Deploy!

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@neuralia.com or join our Discord community.
