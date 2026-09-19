import type { Metadata } from 'next'
import { permanentRedirect } from 'next/navigation'
import { ProductsPage } from '@/components/retro-catalog-pages'
import { DEFAULT_LOCALE, isValidLocale, type Locale } from '@/lib/get-locale'
import { buildLocalizedMetadata } from '@/lib/page-metadata'
import { absoluteUrl } from '@/lib/site'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const locale: Locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const canonicalPath = locale === 'es' ? '/es/productos' : '/en/products'
  const metadata = buildLocalizedMetadata({
    locale,
    path: locale === 'es' ? '/productos' : '/products',
    title: locale === 'es' ? 'Productos de IA, automatización y software | N3uralia' : 'AI, automation and software products | N3uralia',
    description: locale === 'es'
      ? 'Productos N3uralia para operaciones, documentos, minería, flotas, imágenes y agentes especializados.'
      : 'N3uralia AI and software products for operational intelligence, documents, mining, fleets, imaging and specialized agents.',
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

export default async function Page(props: PageProps) {
  const params = await props.params;
  const locale: Locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  if (locale === 'es') permanentRedirect('/es/productos')
  const canonical = absoluteUrl('/en/products')
  const schema = locale === 'en' ? {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${canonical}#collection`,
        url: canonical,
        name: 'N3uralia AI, automation and software products',
        description: 'N3uralia AI and software products for operational intelligence, documents, mining, fleets, imaging and specialized agents.',
        isPartOf: { '@id': 'https://www.n3uralia.com/#website' },
        about: [
          'Operational intelligence',
          'Workflow automation',
          'Document intelligence',
          'Mining operations software',
          'AI agents'
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'N3uralia', item: 'https://www.n3uralia.com/en' },
          { '@type': 'ListItem', position: 2, name: 'Products', item: canonical },
        ],
      },
    ],
  } : null

  return (
    <>
      {schema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /> : null}
      <ProductsPage locale={locale} />
    </>
  )
}
