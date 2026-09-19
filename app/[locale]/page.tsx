import type { Metadata } from 'next'
import { RetroLanding } from '@/components/retro-landing'
import { DEFAULT_LOCALE, isValidLocale } from '@/lib/get-locale'

interface PageProps { params: Promise<{ locale: string }> }

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const title = locale === 'es' ? 'N3uralia | IA, automatización y software para empresas en Chile' : 'N3uralia | AI, automation and software for real operations'
  const description = locale === 'es'
    ? 'N3uralia diseña sistemas de IA, automatización y software para empresas en Chile: operaciones, documentos, datos, reconocimiento e integraciones.'
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
