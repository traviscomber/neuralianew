import type { Metadata } from "next"
import { LivingAgentsContent } from "./content"
import { SectionBackground } from "@/components/section-background"
import { DEFAULT_LOCALE, isValidLocale } from "@/lib/get-locale"
import { buildLocalizedMetadata } from "@/lib/page-metadata"

interface PageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE

  return buildLocalizedMetadata({
    locale,
    path: "/living-agents",
    title: "Living Agents | N3uralia",
    description:
      locale === "es"
        ? "Sistema de agentes con memoria, arquetipos y evolucion contextual para equipos que exploran interaccion persistente y operable."
        : "A system of agents with memory, archetypes, and contextual evolution for teams exploring persistent, operable interactions.",
  })
}

export default function LivingAgentsPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE

  return (
    <SectionBackground section="hero">
      <LivingAgentsContent locale={locale} />
    </SectionBackground>
  )
}
