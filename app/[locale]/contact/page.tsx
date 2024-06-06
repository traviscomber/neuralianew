import type { Metadata } from "next"
import { ContactPageClient } from "@/components/contact/contact-page-client"
import { ContactPageFooter } from "@/components/contact/contact-page-footer"
import { SectionBackground } from "@/components/section-background"
import { DEFAULT_LOCALE, isValidLocale, type Locale } from "@/lib/get-locale"

interface PageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE

  const titles = {
    es: "Contacto | N3uralia",
    en: "Contact | N3uralia",
  }

  const descriptions = {
    es: "Hablemos de tu proyecto de IA, automatizacion o software. N3uralia responde con una propuesta tecnica clara.",
    en: "Talk to N3uralia about your AI, automation, or software project. We reply with a clear technical proposal.",
  }

  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `https://n3uralia.com/${locale}/contact`,
      languages: {
        es: "https://n3uralia.com/es/contact",
        en: "https://n3uralia.com/en/contact",
      },
    },
  }
}

export default function ContactPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const isES = locale === "es"

  return (
    <>
      <SectionBackground section="faq">
        <main className="min-h-screen pt-20 pb-20 px-4 md:px-6 lg:px-8 bg-background">
          <section className="max-w-3xl mx-auto">
            <div className="text-center mb-16 py-12">
              <h1 className="h1-light mb-4 text-foreground">
                {isES ? "Hablemos de tu proyecto" : "Tell us about your project"}
              </h1>
              <p className="body text-muted-foreground">
                {isES
                  ? "Comparte contexto, prioridad y objetivos. Respondemos con una propuesta clara, realista y pensada para produccion."
                  : "Share your context, priority, and goals. We will respond with a clear and production-minded proposal."}
              </p>
            </div>

            <ContactPageClient locale={locale as Locale} />
          </section>
        </main>
      </SectionBackground>

      <ContactPageFooter />
    </>
  )
}
