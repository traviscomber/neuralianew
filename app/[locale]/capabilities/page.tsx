import type { Metadata } from "next"
import { isValidLocale, DEFAULT_LOCALE } from "@/lib/get-locale"
import { CapabilitiesPageClient } from "@/components/capabilities/capabilities-page-client"

interface PageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const isES = locale === 'es'

  const titles = {
    es: "Capacidades Técnicas N3uralia | Arquitectura Agentica en Producción",
    en: "N3uralia Capabilities | Agentic Architecture in Production",
  }

  const descriptions = {
    es: "6 pilares técnicos: arquitectura agentica, living agents, orquestación multi-agente, inteligencia conversacional, síntesis de conocimiento.",
    en: "6 technical pillars: agentic architecture, living agents, multi-agent coordination, conversational intelligence, knowledge synthesis.",
  }

  return {
    title: titles[locale as keyof typeof titles],
    description: descriptions[locale as keyof typeof descriptions],
  }
}

export default function CapabilitiesPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  return <CapabilitiesPageClient locale={locale as 'es' | 'en'} />
}
