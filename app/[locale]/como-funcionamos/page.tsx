import type { Metadata } from "next"
import { isValidLocale, DEFAULT_LOCALE } from "@/lib/get-locale"
import type { Locale } from "@/content/dictionaries"
import { HowWeWorkPageClient } from "@/components/how-we-work/how-we-work-page-client"
import { generatePageMetadata } from "@/lib/metadata-utils"

interface PageProps {
  params: {
    locale: string
  }
}

export function generateMetadata({ params }: PageProps): Metadata {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"

  return generatePageMetadata({
    title: isES 
      ? "Cómo Implementamos - Proceso 4 Semanas" 
      : "How We Implement - 4-Week Process",
    description: isES
      ? "Descubre exactamente cómo implementamos agentes IA en tu empresa. Desde diagnóstico inicial hasta producción 24/7 en 4 semanas. Sin sorpresas, sin retrasos."
      : "Learn exactly how we implement AI agents in your company. From initial diagnosis to 24/7 production in 4 weeks. No surprises, no delays.",
    keywords: isES
      ? "implementación IA, proceso 4 semanas, agentes IA, cómo funciona, roadmap, timeline"
      : "AI implementation, 4-week process, AI agents, how it works, roadmap, timeline",
    canonical: `https://n3uralia.com/${locale}/como-funcionamos`,
    locale,
  })
}

export default function HowWeWorkPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  return <HowWeWorkPageClient locale={locale} />
}
