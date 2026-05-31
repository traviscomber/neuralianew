import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import { notFound } from "next/navigation"
import { isValidLocale, LOCALES, DEFAULT_LOCALE } from "@/lib/get-locale"

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

  const ogDescriptions = {
    es: "Arquitectura IA agentica diseñada para humanos. Agentes N3uralia en producción con gobernanza, memoria y orquestación.",
    en: "Agentic AI architecture designed for humans. N3uralia AI agents in production with governance, memory, and orchestration.",
  }

  const canonicalUrl = `https://n3uralia.com/${locale}`

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
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es': 'https://n3uralia.com/es',
        'en': 'https://n3uralia.com/en',
      },
    },
    openGraph: {
      locale: locale === 'es' ? 'es_CL' : 'en_US',
      type: 'website',
      siteName: 'N3uralia',
      title: locale === 'es' 
        ? "N3uralia - Sistemas Agenticos en Produccion" 
        : "N3uralia - Agentic Systems in Production",
      description: ogDescriptions[locale as keyof typeof ogDescriptions],
      url: canonicalUrl,
      images: [
        {
          url: "https://n3uralia.com/og-image.png",
          width: 1200,
          height: 630,
          alt: locale === 'es' ? "N3uralia - Sistemas Agenticos en Produccion" : "N3uralia - Agentic Systems in Production",
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale as keyof typeof titles],
      description: descriptions[locale as keyof typeof descriptions],
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

// Locale layout - validates locale and passes children through
// HTML structure is handled by root layout with dynamic lang attribute via script
export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  // Validate locale - if invalid, return 404
  if (!isValidLocale(params.locale)) {
    notFound()
  }

  return (
    <main role="main">
      {children}
    </main>
  )
}
