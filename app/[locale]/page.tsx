import type { Metadata } from 'next'
import { RetroLanding } from '@/components/retro-landing'
import { DEFAULT_LOCALE, isValidLocale } from '@/lib/get-locale'

interface PageProps { params: Promise<{ locale: string }> }

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const title = locale === 'es' ? 'N3uralia | Sistemas operativos con IA para industrias' : 'N3uralia | AI-native operating systems for real industries'
  const description = locale === 'es'
    ? 'N3uralia construye sistemas operativos verticales con IA para empresas en Chile, combinando datos, automatización, software, reconocimiento y control operacional.'
    : 'N3uralia builds AI-native vertical operating systems that connect data, workflows, software, recognition and human control for real operations.'
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
        'x-default': enUrl,
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
