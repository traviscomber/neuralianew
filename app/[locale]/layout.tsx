import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import { notFound } from "next/navigation"
import { Inter, Montserrat } from "next/font/google"
import { isValidLocale, LOCALES, DEFAULT_LOCALE } from "@/lib/get-locale"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import { ScrollToTop } from "@/components/scroll-to-top"
import { StructuredData } from "@/components/structured-data"
import "../globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
})

interface LocaleLayoutProps {
  children: ReactNode
  params: { locale: string }
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({
    locale,
  }))
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE

  const titles = {
    es: "N3uralia | Sistemas Agenticos en Produccion",
    en: "N3uralia | Agentic Systems in Production",
  }

  const descriptions = {
    es: "Orquestacion de sistemas agenticos para empresas. Automatizacion inteligente lista para produccion.",
    en: "Agentic systems orchestration for enterprises. Intelligent automation ready for production.",
  }

  return {
    title: titles[locale as keyof typeof titles],
    description: descriptions[locale as keyof typeof descriptions],
    keywords: locale === 'es' 
      ? "sistemas agenticos, IA en produccion, agentes inteligentes, agentes de IA, AI agents, agentes IA, automatizacion empresarial, arquitectura multiagente, inteligencia aumentada, n3uralia, orquestacion de agentes, IA Chile, LATAM, empresa AI"
      : "agentic systems, AI in production, intelligent agents, AI agents, enterprise automation, multi-agent architecture, augmented intelligence, n3uralia, agent orchestration, enterprise AI",
    authors: [{ name: "N3uralia", url: "https://n3uralia.com" }],
    creator: "N3uralia",
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
    openGraph: {
      locale: locale === 'es' ? 'es_CL' : 'en_US',
      type: 'website',
      siteName: 'N3uralia',
      title: locale === 'es' 
        ? "N3uralia - AI Agents & Sistemas Agenticos en Produccion" 
        : "N3uralia - AI Agents & Agentic Systems in Production",
      description: locale === 'es'
        ? "Agentic AI architecture designed for humans. N3uralia AI agents in production with governance, memory, and orchestration."
        : "Agentic AI architecture designed for humans. N3uralia AI agents in production with governance, memory, and orchestration.",
      images: [
        {
          url: "https://n3uralia.com/og-image.png",
          width: 1200,
          height: 630,
          alt: "N3uralia - Sistemas Agenticos en Produccion",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "N3uralia - AI Agents in Production",
      description: "Agentic AI systems for enterprise. N3uralia AI agents, agentes de IA, multi-agent orchestration, production-ready architecture.",
      creator: "@n3uralia",
      site: "@n3uralia",
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    generator: "v0.app",
    referrer: "strict-origin-when-cross-origin",
    category: "technology",
  }
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  // Validate locale - if invalid, return 404
  if (!isValidLocale(params.locale)) {
    notFound()
  }

  // Determine the correct HTML lang attribute based on locale
  const htmlLang = params.locale === 'en' ? 'en' : 'es'

  return (
    <html lang={htmlLang} suppressHydrationWarning className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('n3uralia-theme');
                const html = document.documentElement;
                if (theme === 'light') {
                  html.classList.remove('dark');
                } else {
                  html.classList.add('dark');
                }
              } catch (e) {
                document.documentElement.classList.add('dark');
              }
            `,
          }}
        />
        {/* 
          JSON-LD Structured Data - CONSOLIDATED in StructuredData component
          Removed inline Organization and LocalBusiness schemas to prevent duplicates
          All schemas are now managed in components/structured-data.tsx
        */}
        <StructuredData locale={params.locale} />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange storageKey="n3uralia-theme" themes={["light", "dark", "black"]}>
          <Navigation />
          <main role="main">
            {children}
          </main>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
