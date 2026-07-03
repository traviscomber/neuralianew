import type { Metadata } from "next"
import { isValidLocale, DEFAULT_LOCALE } from "@/lib/get-locale"
import { CapabilitiesPageClient } from "@/components/capabilities/capabilities-page-client"
import { buildLocalizedMetadata } from "@/lib/page-metadata"

interface PageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE

  const titles = {
    es: "Capacidades tecnicas N3uralia | Arquitectura agentica en produccion",
    en: "N3uralia capabilities | Agentic architecture in production",
  }

  const descriptions = {
    es: "Seis pilares tecnicos: arquitectura agentica, living agents, coordinacion multiagente, inteligencia conversacional y sistemas de conocimiento.",
    en: "Six technical pillars: agentic architecture, living agents, multi-agent coordination, conversational intelligence, and knowledge systems.",
  }

  return buildLocalizedMetadata({
    locale,
    title: titles[locale],
    description: descriptions[locale],
    path: "/capabilities",
  })
}

export default function CapabilitiesPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  return <CapabilitiesPageClient locale={locale} />
}
