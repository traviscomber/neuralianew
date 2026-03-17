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
    title: isES ? "Capacidades Técnicas N3uralia - Arquitectura Agentica, Living Agents, Orquestación" : "N3uralia Capabilities - Agentic Architecture, Living Agents, Multi-Agent Orchestration",
    description: isES
      ? "Descubre las 6 capacidades técnicas de N3uralia: arquitectura agentica escalable, living agents que aprenden, orquestación multi-agente, inteligencia conversacional avanzada, síntesis de conocimiento en tiempo real. Listo para producción."
      : "Explore N3uralia's 6 technical capabilities: scalable agentic architecture, learning living agents, multi-agent orchestration, advanced conversational intelligence, real-time knowledge synthesis. Production-ready AI agents.",
    keywords: isES
      ? "capacidades n3uralia, arquitectura agentica, living agents, orquestación multi-agente, inteligencia conversacional, síntesis de conocimiento, sistemas agenticos, agentes IA"
      : "n3uralia capabilities, agentic architecture, living agents, multi-agent orchestration, conversational AI, knowledge synthesis, agentic systems, AI agents",
    canonical: `https://n3uralia.com/${locale}/capabilities`,
    locale,
  })
}

export default function CapabilitiesPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  return <CapabilitiesPageClient locale={locale} />
}
