import type { Metadata } from "next"
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
    es: "N3uralia | Sistemas Agenticos en Producción",
    en: "N3uralia | Agentic Systems in Production",
  }

  const descriptions = {
    es: "Orquestación de sistemas agenticos para empresas. Automatización inteligente lista para producción.",
    en: "Agentic systems orchestration for enterprises. Intelligent automation ready for production.",
  }

  // DO NOT set canonical/og:url here - each page sets its own
  // Layout metadata is merged with page metadata, and we want pages to control their own canonical
  return {
    title: titles[locale as keyof typeof titles],
    description: descriptions[locale as keyof typeof descriptions],
    // No alternates.canonical here - pages define their own
    // No openGraph.url here - pages define their own
    openGraph: {
      locale: locale === 'es' ? 'es_CL' : 'en_US',
      type: 'website',
      siteName: 'N3uralia',
    },
  }
}

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
