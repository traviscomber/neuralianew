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
    es: "Capacidades técnicas N3uralia | Arquitectura agéntica en producción",
    en: "N3uralia capabilities | Agentic architecture in production",
  }

  const descriptions = {
    es: "Cuatro pilares técnicos: arquitectura agéntica, living agents, coordinación multiagente e inteligencia conversacional.",
    en: "Four technical pillars: agentic architecture, living agents, multi-agent coordination, and conversational intelligence.",
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
