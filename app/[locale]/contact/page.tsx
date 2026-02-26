import type { Metadata } from "next"
import { ContactPageClient } from "@/components/contact/contact-page-client"
import { ContactPageFooter } from "@/components/contact/contact-page-footer"
import { isValidLocale, DEFAULT_LOCALE } from "@/lib/get-locale"

interface PageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const isES = locale === 'es'

  const titles = {
    es: "Contacto N3uralia | Hablemos de Tu Proyecto",
    en: "Contact N3uralia | Let's Talk About Your Project",
  }

  const descriptions = {
    es: "Contacta con N3uralia para implementar sistemas agenticos. Cuéntanos sobre tu proyecto y recibe una propuesta clara.",
    en: "Contact N3uralia to implement agentic systems. Tell us about your project and get a clear proposal.",
  }

  return {
    title: titles[locale as keyof typeof titles],
    description: descriptions[locale as keyof typeof descriptions],
  }
}

export default function ContactPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE

  return (
    <>
      <main className="min-h-screen pt-20 pb-20 px-4 md:px-6 lg:px-8 bg-background">
        <section className="max-w-3xl mx-auto">
          <div className="text-center mb-16 py-12">
            <h1 className="text-5xl font-bold mb-4 text-foreground">
              {locale === 'es' ? "Hablemos de tu proyecto" : "Let's talk about your project"}
            </h1>
            <p className="text-lg text-muted-foreground">
              {locale === 'es' 
                ? "Cuéntanos qué necesitas construir. Nuestro equipo te responderá con una propuesta clara y realista."
                : "Tell us what you need to build. Our team will respond with a clear and realistic proposal."}
            </p>
          </div>

          <ContactPageClient locale={locale as 'es' | 'en'} />
        </section>
      </main>

      <ContactPageFooter />
    </>
  )
}
