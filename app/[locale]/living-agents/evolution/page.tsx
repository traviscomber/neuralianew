import type { Metadata } from 'next'
import { EvolutionPageContent } from './content'
import { DEFAULT_LOCALE, isValidLocale } from "@/lib/get-locale"
import { buildLocalizedMetadata } from "@/lib/page-metadata"

interface PageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE

  return buildLocalizedMetadata({
    locale,
    path: "/living-agents/evolution",
    type: "website",
    title: "Evolución de Living Agents | N3uralia (Neuralia)",
    description: "Visualiza la evolución de personalidad de los agentes a lo largo del tiempo. Gráficos, métricas y hitos de desarrollo.",
  })
}

export default function EvolutionPage() {
  return <EvolutionPageContent />
}
