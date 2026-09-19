import type { Metadata } from 'next'
import { permanentRedirect } from 'next/navigation'
import { ProjectsPage } from '@/components/retro-catalog-pages'
import { DEFAULT_LOCALE, isValidLocale, type Locale } from '@/lib/get-locale'
import { buildLocalizedMetadata } from '@/lib/page-metadata'
import { absoluteUrl } from '@/lib/site'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const locale: Locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const canonicalPath = locale === 'es' ? '/es/proyectos' : '/en/projects'
  const metadata = buildLocalizedMetadata({
    locale,
    path: locale === 'es' ? '/proyectos' : '/projects',
    title: locale === 'es' ? 'Proyectos de IA, automatización y software | N3uralia' : 'AI, automation and software projects | N3uralia',
    description: locale === 'es'
      ? 'Proyectos de N3uralia en operaciones, minería, transporte, facilities, agtech, seguridad y software empresarial.'
      : 'Real N3uralia implementations across AI, workflow automation, mining, transport, facilities, agtech, security and enterprise software.',
  })

  return {
    ...metadata,
    alternates: {
      canonical: absoluteUrl(canonicalPath),
      languages: {
        es: absoluteUrl('/es/proyectos'),
        en: absoluteUrl('/en/projects'),
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
  if (locale === 'es') permanentRedirect('/es/proyectos')
  const canonical = absoluteUrl('/en/projects')
  const schema = locale === 'en' ? {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${canonical}#collection`,
        url: canonical,
        name: 'N3uralia AI, automation and software projects',
        description: 'Real N3uralia implementations across AI, workflow automation, mining, transport, facilities, agtech, security and enterprise software.',
        isPartOf: { '@id': 'https://www.n3uralia.com/#website' },
        about: [
          'Operational intelligence',
          'Workflow automation',
          'Production AI systems',
          'Recognition systems',
          'Enterprise software'
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'N3uralia', item: 'https://www.n3uralia.com/en' },
          { '@type': 'ListItem', position: 2, name: 'Projects', item: canonical },
        ],
      },
    ],
  } : null

  return (
    <>
      {schema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /> : null}
      <ProjectsPage locale={locale} />
    </>
  )
}
