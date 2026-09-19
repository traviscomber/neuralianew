import type { Metadata } from "next"
import { isValidLocale, DEFAULT_LOCALE } from "@/lib/get-locale"
import { CapabilitiesPageClient } from "@/components/capabilities/capabilities-page-client"
import { buildLocalizedMetadata } from "@/lib/page-metadata"

interface PageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE

  const titles = {
    es: "Capacidades técnicas de IA y software | N3uralia",
    en: "AI and software technical capabilities | N3uralia",
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

export default async function CapabilitiesPage(props: PageProps) {
  const params = await props.params;
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  return <CapabilitiesPageClient locale={locale} />
}
