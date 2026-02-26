import type { Metadata } from "next"
import type { ReactNode } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import { ScrollToTop } from "@/components/scroll-to-top"
import { FloatingChatWidget } from "@/components/floating-chat-widget"
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
    es: "N3uralia | Sistemas Agenticos en Producción",
    en: "N3uralia | Agentic Systems in Production",
  }

  const descriptions = {
    es: "Orquestación de sistemas agenticos para empresas. Automatización inteligente lista para producción.",
    en: "Agentic systems orchestration for enterprises. Intelligent automation ready for production.",
  }

  return {
    title: titles[locale as keyof typeof titles],
    description: descriptions[locale as keyof typeof descriptions],
    alternates: {
      canonical: `https://n3uralia.com/${locale}`,
      languages: {
        "es": "https://n3uralia.com/es",
        "en": "https://n3uralia.com/en",
      },
    },
  }
}

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE

  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Navigation locale={locale} />
        <main role="main">
          {children}
        </main>
        <ScrollToTop />
        <FloatingChatWidget />
      </ThemeProvider>
    </>
  )
}
