import type { Metadata } from "next"
import { isValidLocale, DEFAULT_LOCALE } from "@/lib/get-locale"
import type { Locale } from "@/content/dictionaries"
import { CapabilitiesPageClient } from "@/components/capabilities/capabilities-page-client"
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
    title: isES ? "Capacidades Técnicas N3uralia" : "N3uralia Capabilities",
    description: isES
      ? "6 pilares técnicos: arquitectura agentica, living agents, orquestación multi-agente, inteligencia conversacional, síntesis de conocimiento."
      : "6 technical pillars: agentic architecture, living agents, multi-agent coordination, conversational intelligence, knowledge synthesis.",
    keywords: isES
      ? "capacidades, arquitectura agentica, living agents, orquestación, inteligencia conversacional"
      : "capabilities, agentic architecture, living agents, orchestration, conversational intelligence",
    canonical: `https://n3uralia.com/${locale}/capabilities`,
    locale,
  })
}

export default function CapabilitiesPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  return <CapabilitiesPageClient locale={locale} />
}
