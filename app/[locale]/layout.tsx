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

  // Use canonical URL based on actual route - NOT /es for all routes
  const canonicalUrl = `https://n3uralia.com/${locale}`

  return {
    title: titles[locale as keyof typeof titles],
    description: descriptions[locale as keyof typeof descriptions],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "es": "https://n3uralia.com/es",
        "en": "https://n3uralia.com/en",
      },
    },
    openGraph: {
      title: titles[locale as keyof typeof titles],
      description: descriptions[locale as keyof typeof descriptions],
      url: canonicalUrl,
      locale: locale === 'es' ? 'es_CL' : 'en_US',
      type: 'website',
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
