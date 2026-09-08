import type { Metadata } from 'next'
import { permanentRedirect } from 'next/navigation'
import { ProductsPage } from '@/components/retro-catalog-pages'
import { DEFAULT_LOCALE, isValidLocale, type Locale } from '@/lib/get-locale'
import { buildLocalizedMetadata } from '@/lib/page-metadata'
import { absoluteUrl } from '@/lib/site'

interface PageProps {
  params: { locale: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const canonicalPath = locale === 'es' ? '/es/productos' : '/en/products'
  const metadata = buildLocalizedMetadata({
    locale,
    path: locale === 'es' ? '/productos' : '/products',
    title: locale === 'es' ? 'Productos de IA y software | N3uralia' : 'AI and software products | N3uralia',
    description: locale === 'es'
      ? 'Productos N3uralia para operaciones, documentos, minería, flotas, imágenes y agentes especializados.'
      : 'N3uralia products for operations, documents, mining, fleets, imaging and specialized agents.',
  })

  return {
    ...metadata,
    alternates: {
      canonical: absoluteUrl(canonicalPath),
      languages: {
        es: absoluteUrl('/es/productos'),
        en: absoluteUrl('/en/products'),
      },
    },
    openGraph: {
      ...metadata.openGraph,
      url: absoluteUrl(canonicalPath),
    },
  }
}

export default function Page({ params }: PageProps) {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  if (locale === 'en') permanentRedirect('/en/products')
  return <ProductsPage locale={locale} />
}
