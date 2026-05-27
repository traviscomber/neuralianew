import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import { notFound } from "next/navigation"
import { Inter, Montserrat } from "next/font/google"
import { isValidLocale, LOCALES, DEFAULT_LOCALE } from "@/lib/get-locale"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import { ScrollToTop } from "@/components/scroll-to-top"
import { StructuredData } from "@/components/structured-data"
import { StructuredCitations } from "@/components/structured-citations"
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
        {/* JSON-LD Schema for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "N3uralia",
              "alternateName": "Neuralia",
              "url": "https://n3uralia.com",
              "logo": "https://n3uralia.com/logo-n3uralia.png",
              "description": params.locale === 'es' 
                ? "Plataforma de sistemas agenticos listos para produccion. Inteligencia aumentada que trabaja con humanos, sin reemplazar."
                : "Platform for production-ready agentic systems. Augmented intelligence that works with humans, without replacing them.",
              "sameAs": [
                "https://twitter.com/n3uralia",
                "https://linkedin.com/company/n3uralia"
              ],
              "areaServed": [
                { "@type": "Country", "name": "Chile" },
                { "@type": "Country", "name": "Peru" },
                { "@type": "Country", "name": "Colombia" },
                { "@type": "Country", "name": "Mexico" }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Sales",
                "email": "info@n3uralia.com",
                "url": "https://n3uralia.com/contact"
              },
              "foundingDate": "2023",
              "knowsAbout": [
                "Agentic AI",
                "Multi-Agent Systems",
                "AI Orchestration",
                "AI Infrastructure",
                "Enterprise AI",
                "Agent Operations"
              ]
            }),
          }}
        />
        {/* JSON-LD Schema for LocalBusiness (Chile Focus) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "N3uralia",
              "image": "https://n3uralia.com/logo-n3uralia.png",
              "description": params.locale === 'es'
                ? "Sistemas agenticos en produccion para empresas en Chile y LATAM"
                : "Agentic systems in production for companies in Chile and LATAM",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CL",
                "addressRegion": "Santiago",
                "streetAddress": "Santiago, Chile"
              },
              "telephone": "+56993826127",
              "url": "https://n3uralia.com",
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "42"
              }
            }),
          }}
        />
        <StructuredData />
        <StructuredCitations />
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
