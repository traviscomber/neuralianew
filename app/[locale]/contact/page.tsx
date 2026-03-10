import type { Metadata } from "next"
import { isValidLocale, DEFAULT_LOCALE } from "@/lib/get-locale"
import type { Locale } from "@/content/dictionaries"
import { ContactPageClient } from "@/components/contact/contact-page-client"
import { ContactPageFooter } from "@/components/contact/contact-page-footer"
import { SectionBackground } from "@/components/section-background"

interface PageProps {
  params: { locale: string }
}

export const metadata: Metadata = {
  title: "Contacta N3uralia - Implementa Sistemas Agenticos para tu Empresa",
  description:
    "Contacta con N3uralia para implementar sistemas agenticos y living agents en tu empresa. Cuéntanos sobre tu proyecto, necesidades de automatización y transformación digital con IA aumentada.",
  keywords:
    "contacto n3uralia, implementar sistemas agenticos, living agents, consultoría IA, propuesta empresa, proyecto automatización, transformación digital",
}

export default function ContactPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? (params.locale as Locale) : (DEFAULT_LOCALE as Locale)
  return (
    <>
      <SectionBackground section="faq">
      <main className="min-h-screen pt-20 pb-20 px-4 md:px-6 lg:px-8 bg-background">
        <section className="max-w-3xl mx-auto">
          <div className="text-center mb-16 py-12">
            <h1 className="h1-light mb-4 text-foreground">Hablemos de tu proyecto</h1>
            <p className="body text-muted-foreground">
              Cuéntanos qué necesitas construir. Nuestro equipo te responderá con una propuesta clara y realista.
            </p>
          </div>

          <ContactPageClient />

        </section>
      </main>
      </SectionBackground>

      <ContactPageFooter />
    </>
  )
}
