import type { Metadata } from 'next'
import { RetroLanding } from '@/components/retro-landing'
import { DEFAULT_LOCALE, isValidLocale } from '@/lib/get-locale'

interface PageProps { params: { locale: string } }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const title = locale === 'es' ? 'N3uralia | Inteligencia para operaciones complejas' : 'N3uralia | Intelligence for complex operations'
  const description = locale === 'es'
    ? 'Convertimos datos, flujos, documentos e IA en sistemas que mejoran visibilidad, control y ejecución.'
    : 'We turn data, workflows, documents and AI into systems that improve visibility, control and execution.'
  return { title, description, alternates: { canonical: `https://www.n3uralia.com/${locale}` } }
}

export default function LandingPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  return <RetroLanding locale={locale} />
}
