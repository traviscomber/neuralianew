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
    title: isES 
      ? "IA Conversacional Responsable - Capacidades N3uralia" 
      : "Responsible Conversational AI - N3uralia Capabilities",
    description: isES
      ? "Sistemas de IA conductualmente seguros, culturalmente adaptados y medibles en impacto humano. Agentes inteligentes con arquitectura agentica, living agents, orquestación multi-agente, síntesis de conocimiento. Listo para producción."
      : "Behaviorally safe, culturally adapted AI systems measurable in real human impact. Intelligent agents with agentic architecture, living agents, multi-agent orchestration, knowledge synthesis. Production-ready.",
    keywords: isES
      ? "IA responsable, agentes conversacionales, arquitectura agentica, seguridad conductual, living agents, orquestación multi-agente, inteligencia conversacional, sistemas agenticos, IA Chile"
      : "responsible AI, conversational agents, agentic architecture, behavioral safety, living agents, multi-agent orchestration, conversational intelligence, agentic systems",
    canonical: `https://n3uralia.com/${locale}/capabilities`,
    locale,
  })
}

export default function CapabilitiesPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  return <CapabilitiesPageClient locale={locale} />
}
