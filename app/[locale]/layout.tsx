import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Navigation from '@/components/navigation'
import { CanonicalFooter } from '@/components/canonical-footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { ThemeProvider } from '@/components/theme-provider'
import { isValidLocale, LOCALES, DEFAULT_LOCALE } from '@/lib/get-locale'

interface LocaleLayoutProps {
  children: ReactNode
  params: { locale: string }
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const titles = {
    es: 'N3uralia | IA y software para operaciones reales',
    en: 'N3uralia | AI and software for real operations',
  }
  const descriptions = {
    es: 'Sistemas de IA, flujos agénticos y software en producción para equipos en Chile y LATAM.',
    en: 'Production AI systems, agentic workflows, and software automation for teams in Chile and LATAM.',
  }

  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `https://www.n3uralia.com/${locale}`,
      languages: { es: 'https://www.n3uralia.com/es', en: 'https://www.n3uralia.com/en' },
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      locale: locale === 'es' ? 'es_CL' : 'en_US',
      type: 'website',
    },
  }
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const skipLabel = locale === 'es' ? 'Saltar al contenido principal' : 'Skip to main content'

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
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
    </ThemeProvider>
  )
}
