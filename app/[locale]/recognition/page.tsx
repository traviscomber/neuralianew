import type { Metadata } from 'next'
import { RecognitionPage } from '@/components/recognition-page'
import { RecognitionFooter } from '@/components/recognition-footer'
import { DEFAULT_LOCALE, isValidLocale } from '@/lib/get-locale'

const SITE_URL = 'https://www.n3uralia.com'

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const params = await props.params;
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const isSpanish = locale === 'es'
  const canonicalPath = isSpanish ? '/es/reconocimiento' : '/en/recognition'

  const title = isSpanish
    ? 'Reconocimiento inteligente | Visión computacional | N3uralia'
    : 'Smart Recognition Systems | Computer Vision | N3uralia'
  const description = isSpanish
    ? 'Visión computacional para fauna, ganadería, calidad de producción y seguridad, conectada con flujos operacionales reales.'
    : 'Computer vision for wildlife, cattle, production quality and security, connected to measurable operational workflows.'

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}${canonicalPath}`,
      languages: {
        es: `${SITE_URL}/es/reconocimiento`,
        en: `${SITE_URL}/en/recognition`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${canonicalPath}`,
      type: 'website',
      locale: isSpanish ? 'es_CL' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function Page(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  return (
    <>
      <RecognitionPage locale={locale} />
      <RecognitionFooter locale={locale} />
    </>
  )
}
