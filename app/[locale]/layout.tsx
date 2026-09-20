import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Navigation from '@/components/navigation'
import { CanonicalFooter } from '@/components/canonical-footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { isValidLocale, LOCALES, DEFAULT_LOCALE } from '@/lib/get-locale'

interface LocaleLayoutProps {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata(props: LocaleLayoutProps): Promise<Metadata> {
  const params = await props.params
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const titles = {
    es: 'N3uralia | Sistemas operativos verticales con IA',
    en: 'N3uralia | AI-native vertical operating systems',
  }
  const descriptions = {
    es: 'Sistemas operativos verticales con IA que conectan datos, flujos, software, reconocimiento y control humano para operaciones reales.',
    en: 'AI-native vertical operating systems connecting data, workflows, software, recognition and human control for real-world operations.',
  }

  return {
    title: titles[locale],
    description: descriptions[locale],
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      locale: locale === 'es' ? 'es_CL' : 'en_US',
      alternateLocale: locale === 'es' ? ['en_US'] : ['es_CL'],
      type: 'website',
    },
  }
}

export default async function LocaleLayout(props: LocaleLayoutProps) {
  const params = await props.params
  const { children } = props
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const skipLabel = locale === 'es' ? 'Saltar al contenido principal' : 'Skip to main content'

  return (
    <>
      <a
        href="#main-content"
        className="pointer-events-none fixed left-4 top-4 z-[100] -translate-y-24 border border-[#a8d9d8] bg-[#030606] px-5 py-3 font-[var(--font-rajdhani)] text-xs uppercase tracking-[0.14em] text-[#d8e0df] opacity-0 outline-none transition focus:pointer-events-auto focus:translate-y-0 focus:opacity-100 focus:ring-2 focus:ring-[#a8d9d8] focus:ring-offset-2 focus:ring-offset-[#030606]"
      >
        {skipLabel}
      </a>
      <Navigation locale={locale} />
      <div id="main-content" tabIndex={-1} className="scroll-mt-28 outline-none">
        {children}
      </div>
      <CanonicalFooter locale={locale} />
      <ScrollToTop />
    </>
  )
}
