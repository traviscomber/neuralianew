import type { Metadata } from 'next'
import { DemoContent } from './content'
import { SectionBackground } from '@/components/section-background'
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
    path: "/living-agents/demo",
    type: "website",
    title: "Living Agents Demo | N3uralia (Neuralia) - Chat Interactivo",
    description: "Conversa con los 5 arquetipos de Living Agents. Observa cómo evolucionan sus personalidades a través de interacciones en tiempo real.",
  })
}

export default function DemoPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE

  return (
    <SectionBackground section="hero">
      <DemoContent locale={locale} />
    </SectionBackground>
  )
}
