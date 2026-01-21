"use client"

import { ContactConversation } from "@/components/contact/contact-conversation"
import { Footer } from "@/components/layout/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20 pb-20 px-4 md:px-6 lg:px-8 bg-background">
      <section className="max-w-3xl mx-auto">
        <div className="text-center mb-16 py-12">
          <h1 className="h1-light mb-4 text-foreground">Hablemos de tu proyecto</h1>
          <p className="body text-muted-foreground">
            Cuéntanos qué necesitas construir. Nuestro equipo te responderá con una propuesta clara y realista.
          </p>
        </div>

        <ContactConversation />

        <div className="mt-12 pt-12 border-t border-border text-center">
          <p className="text-sm text-muted-foreground mb-4">
            ¿Prefieres contacto directo?{" "}
            <a href="https://wa.me/56993826127" className="text-primary font-semibold hover:underline" target="_blank" rel="noopener noreferrer">
              WhatsApp +56 9 9382 6127
            </a>
          </p>
          <p className="text-sm text-muted-foreground">
            O envía un email a{" "}
            <a href="mailto:hello@n3uralia.com" className="text-primary font-semibold hover:underline">
              hello@n3uralia.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
