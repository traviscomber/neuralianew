# Development Setup Guide

Complete guide to setting up your local development environment for Neuralia.

## Prerequisites

Before you begin, ensure you have the following installed:

### Required
- **Node.js** 18.17+ ([Download](https://nodejs.org/))
- **npm** or **pnpm** 8.0+ (comes with Node.js)
- **Git** ([Download](https://git-scm.com/))
- **VS Code** or preferred code editor

### Optional but Recommended
- **Docker** - For database containerization
- **Vercel CLI** - For deployment testing
- **Postman/Insomnia** - For API testing

### System Requirements
- **RAM:** 4GB minimum (8GB recommended)
- **Disk Space:** 2GB for node_modules
- **OS:** macOS, Linux, or Windows (with WSL2)

---

## Step 1: Clone the Repository

```bash
git clone https://github.com/traviscomber/neuralianew.git
cd neuralianew
```

---

## Step 2: Install Dependencies

### Using npm
```bash
npm install
```

### Using pnpm (recommended for faster installs)
```bash
pnpm install
```

### Using Yarn
```bash
yarn install
```

**Note:** The `.npmrc` file is configured to use legacy peer dependencies. This is normal.

---

## Step 3: Configure Environment Variables

### Create .env.local file
```bash
cp .env.example .env.local
```

### Fill in the required values

Edit `.env.local` with your actual credentials:

```dotenv
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# OpenAI Configuration
OPENAI_API_KEY=sk-your-openai-key-here

# Email Configuration (Resend)
RESEND_API_KEY=re_your-resend-key-here

# Analytics & Monitoring
NEXT_PUBLIC_SENTRY_DSN=https://your-sentry-dsn@sentry.io/project-id
NEXT_PUBLIC_GA_ID=G-your-ga-id

# Application URLs
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_SENTRY=false

# Node Environment
NODE_ENV=development
```

### Getting Your API Keys

#### Supabase Keys
1. Go to [supabase.com](https://supabase.com)
2. Create/access your project
3. Navigate to **Settings → API**
4. Copy the `URL` and `anon key`
5. Go to **Settings → API → Service Role Key** for the service role key

#### OpenAI API Key
1. Visit [platform.openai.com](https://platform.openai.com)
2. Sign in or create account
3. Go to **API keys**
4. Click **Create new secret key**
5. Copy the key (save it securely!)

#### Resend API Key
1. Go to [resend.com](https://resend.com)
2. Sign up/Login
3. Navigate to **API Keys**
4. Create new key
5. Copy the key

#### Sentry DSN
1. Visit [sentry.io](https://sentry.io)
2. Create project (Next.js)
3. Copy the DSN provided
4. (Optional for development)

#### Google Analytics ID
1. Visit [analytics.google.com](https://analytics.google.com)
2. Create property for your site
3. Get the Measurement ID (G-xxxxxxxxxx)
4. (Optional for development)

---

## Step 4: Start Development Server

```bash
npm run dev
```

The application will be available at: **http://localhost:3000**

### Verify It's Running
- ✅ No errors in terminal
- ✅ Page loads at http://localhost:3000
- ✅ Can toggle between Spanish (/es) and English (/en)
- ✅ Network tab shows no 404 errors

---

## Available Scripts

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server (requires build first)
npm start

# Run linting
npm run lint

# Fix linting issues automatically
npm run lint:fix

# Type check (catch TypeScript errors)
npm run type-check

# Clean install (removes node_modules and cache)
npm run clean
```

---

## Project Structure

```
neuralianew/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   └── [locale]/          # Language-scoped routes
│       ├── page.tsx       # Homepage
│       ├── layout.tsx     # Locale layout
│       └── [route]/       # Dynamic routes
├── components/            # Reusable React components
│   ├── ui/               # Base UI components
│   ├── landing/          # Landing page sections
│   └── ...
├── content/              # Data & translations
│   ├── dictionaries.ts  # i18n translations
│   └── caseStudies.ts   # Case study data
├── lib/                  # Utility functions
│   ├── utils.ts         # Helper functions
│   └── ...
├── hooks/                # Custom React hooks
├── types/                # TypeScript definitions
├── public/               # Static assets (images, fonts)
├── styles/               # Global CSS
├── middleware.ts         # Next.js middleware
├── next.config.mjs       # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS config
├── tsconfig.json         # TypeScript config
└── package.json          # Dependencies
```

---

## Development Workflow

### Creating a New Component

```typescript
// components/MyComponent.tsx
import { ReactNode } from 'react'

interface MyComponentProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export function MyComponent({ children, variant = 'primary' }: MyComponentProps) {
  return (
    <div className={`component ${variant}`}>
      {children}
    </div>
  )
}
```

### Creating a New Page

```typescript
// app/[locale]/my-page/page.tsx
import { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { getDict, type Locale } from '@/content/dictionaries'

interface PageProps {
  params: { locale: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = params.locale as Locale
  const dict = getDict(locale)
  
  return {
    title: 'My Page',
    description: 'Page description',
  }
}

export default function MyPage({ params }: PageProps) {
  const locale = params.locale as Locale
  const dict = getDict(locale)
  
  return (
    <>
      <Nav locale={locale} />
      <main>
        <h1>My Page</h1>
        <p>Content here</p>
      </main>
      <Footer locale={locale} />
    </>
  )
}
```

### Adding a Translation

1. Open `/content/dictionaries.ts`
2. Find the section you want to add to
3. Add your key and values for both `es` and `en`:

```typescript
export const DICTS: Record<Locale, Dict> = {
  es: {
    nav: {
      myNewKey: "Valor en Español",
    },
  },
  en: {
    nav: {
      myNewKey: "Value in English",
    },
  },
}
```

### Using Tailwind CSS

```typescript
// Components automatically support Tailwind classes
<div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
  <h2 className="text-2xl font-bold text-gray-900">Title</h2>
  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
    Action
  </button>
</div>
```

---

## Debugging

### VS Code Debugger Setup

1. Create `.vscode/launch.json`:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js",
      "type": "node",
      "request": "launch",
      "runtimeExecutable": "npm",
      "runtimeArgs": ["run", "dev"],
      "console": "integratedTerminal"
    }
  ]
}
```

2. Press `F5` to start debugging

### Browser DevTools
- Open DevTools in browser (F12)
- Use **React DevTools** extension for component inspection
- Use **Console** tab for debugging `console.log()` statements

### Common Debug Techniques

```typescript
// Log component renders
console.log('Component rendered', props)

// Log state changes
console.log('State updated:', state)

// Inspect object structure
console.table(data)

// Timing operations
console.time('myTimer')
// ... code to measure
console.timeEnd('myTimer')
```

---

## Testing

### Running Type Check
```bash
npm run type-check
```

### Running Linter
```bash
npm run lint
```

### Manual Testing Checklist
- [ ] Page loads without errors
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Spanish and English toggle works
- [ ] All links are functional
- [ ] Forms submit correctly
- [ ] API calls return expected data

---

## Troubleshooting

### Issue: "Port 3000 already in use"
```bash
# Kill the process using port 3000
# macOS/Linux:
lsof -ti:3000 | xargs kill -9

# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port:
npm run dev -- -p 3001
```

### Issue: Module not found errors
```bash
# Clear cache and reinstall
npm run clean
npm install
npm run dev
```

### Issue: TypeScript errors but code looks correct
```bash
# Restart TypeScript server in VS Code
Cmd+Shift+P → TypeScript: Restart TS Server
```

### Issue: Styling not applying
```bash
# Make sure Tailwind is processing the file:
# 1. Check if file path matches tailwind.config.ts content pattern
# 2. Check for typos in class names
# 3. Restart dev server: Ctrl+C then npm run dev
```

### Issue: Environment variables not loading
```bash
# Ensure .env.local is in root directory
# Restart dev server after changing .env.local
# Variables prefixed with NEXT_PUBLIC_ are available in browser
```

---

## Performance Tips

### Monitor Bundle Size
```bash
npm run build
# Check output for any warnings about large chunks
```

### Optimize Images
- Use `/public` folder for static images
- Use `next/image` component for dynamic images
- Consider WebP format for better compression

### Optimize Fonts
- Use system fonts when possible
- Load custom fonts from `/public/fonts`
- Use `font-display: swap` for better performance

---

## Next Steps

1. ✅ Complete setup following this guide
2. ✅ Read [ARCHITECTURE.md](../ARCHITECTURE.md) to understand project structure
3. ✅ Review [CODE_STYLE_GUIDE.md](CODE_STYLE_GUIDE.md) for coding standards
4. ✅ Start developing! 🚀

---

## Getting Help

- **Documentation:** Check [DOCUMENTATION_INDEX.md](../DOCUMENTATION_INDEX.md)
- **Common Issues:** See [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
- **Code Questions:** Review [CODE_STYLE_GUIDE.md](CODE_STYLE_GUIDE.md)
- **Deployment:** See production docs

---

**Happy coding! 💻**
