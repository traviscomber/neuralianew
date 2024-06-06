import type { Metadata } from "next"
import type { ReactNode } from "react"
import Navigation from "@/components/navigation"
import { ScrollToTop } from "@/components/scroll-to-top"
import { FloatingChatWidget } from "@/components/floating-chat-widget"
import { LanguageSwitcher } from "@/components/layout/language-switcher"
import { ThemeProvider } from "@/components/theme-provider"
import { isValidLocale, LOCALES, DEFAULT_LOCALE } from "@/lib/get-locale"

interface LocaleLayoutProps {
  children: ReactNode
  params: { locale: string }
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({
    locale,
  }))
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE

  const titles = {
    es: "N3uralia | Sistemas de IA en produccion",
    en: "N3uralia | Production AI systems",
  }

  const descriptions = {
    es: "Sistemas de IA, workflows agenticos y software en produccion para equipos en Chile y LATAM.",
    en: "Production AI systems, agentic workflows, and software automation for teams in Chile and LATAM.",
  }

  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `https://n3uralia.com/${locale}`,
      languages: {
        es: "https://n3uralia.com/es",
        en: "https://n3uralia.com/en",
      },
    },
    openGraph: {
      locale: locale === "es" ? "es_CL" : "en_US",
      localeAlternate: locale === "es" ? ["en_US"] : ["es_CL"],
    },
  }
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Navigation locale={locale} />
      {children}
      <ScrollToTop />
      <FloatingChatWidget />
      <LanguageSwitcher />
    </ThemeProvider>
  )
}
