import type { Metadata } from 'next'
import { permanentRedirect } from 'next/navigation'
import { ProjectsPage } from '@/components/retro-catalog-pages'
import { DEFAULT_LOCALE, isValidLocale, type Locale } from '@/lib/get-locale'
import { buildLocalizedMetadata } from '@/lib/page-metadata'
import { absoluteUrl } from '@/lib/site'

interface PageProps {
  params: { locale: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const canonicalPath = locale === 'es' ? '/es/proyectos' : '/en/projects'
  const metadata = buildLocalizedMetadata({
    locale,
    path: locale === 'es' ? '/proyectos' : '/projects',
    title: locale === 'es' ? 'Proyectos de IA y software | N3uralia' : 'AI and software projects | N3uralia',
    description: locale === 'es'
      ? 'Proyectos de N3uralia en operaciones, minería, transporte, facilities, agtech, seguridad y software empresarial.'
      : 'N3uralia projects across operations, mining, transport, facilities, agtech, security and enterprise software.',
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

export default function Page({ params }: PageProps) {
  const locale: Locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  if (locale === 'es') permanentRedirect('/es/proyectos')
  return <ProjectsPage locale={locale} />
}
