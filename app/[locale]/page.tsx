import type { Metadata } from 'next'
import { RetroLanding } from '@/components/retro-landing'
import { DEFAULT_LOCALE, isValidLocale } from '@/lib/get-locale'

interface PageProps { params: Promise<{ locale: string }> }

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const title = locale === 'es' ? 'N3uralia | Inteligencia para operaciones complejas' : 'N3uralia | Intelligence for complex operations'
  const description = locale === 'es'
    ? 'Convertimos datos, flujos, documentos e IA en sistemas que mejoran visibilidad, control y ejecución.'
    : 'We turn data, workflows, documents and AI into systems that improve visibility, control and execution.'
  const esUrl = 'https://www.n3uralia.com/es'
  const enUrl = 'https://www.n3uralia.com/en'
  const canonical = locale === 'es' ? esUrl : enUrl

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        'es-CL': esUrl,
        es: esUrl,
        en: enUrl,
        'en-US': enUrl,
        'x-default': esUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      locale: locale === 'es' ? 'es_CL' : 'en_US',
      alternateLocale: locale === 'es' ? ['en_US'] : ['es_CL'],
      type: 'website',
    },
  }
}

export default async function LandingPage(props: PageProps) {
  const params = await props.params
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  return <RetroLanding locale={locale} />
}
