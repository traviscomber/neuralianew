import type { Metadata } from "next"
import { ContactPageClient } from "@/components/contact/contact-page-client"
import { ContactPageFooter } from "@/components/contact/contact-page-footer"

export const metadata: Metadata = {
  title: "Contacto N3uralia | Neuralia - AI Agents, Sistemas Agenticos Fullstack",
  description:
    "Contacta con N3uralia (Neuralia) para implementar sistemas agenticos AI agents. Cuéntanos sobre tu proyecto de arquitectura fullstack y transformación con inteligencia artificial.",
  keywords:
    "contacto n3uralia, neuralia, contactar, AI agents, sistemas agenticos, propuesta, proyecto, fullstack",
}

export default function ContactPage() {
  return (
    <>
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

      <ContactPageFooter />
    </>
  )
}
