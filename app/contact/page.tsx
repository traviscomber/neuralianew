"use client"

import { VibeConversation } from "@/components/vibe-selling/vibe-conversation"

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <section className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Conversemos</h1>
          <p className="text-lg text-muted-foreground">
            Sin formularios genéricos. Entendemos lo que necesitas conversando contigo.
          </p>
        </div>

        <VibeConversation />

        <div className="mt-12 pt-12 border-t border-gray-200 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            ¿Prefieres email? Contacta directamente a{" "}
            <a href="mailto:hello@n3uralia.com" className="text-primary font-semibold hover:underline">
              hello@n3uralia.com
            </a>
          </p>
          <p className="text-sm text-muted-foreground">
            O llama al +56 9 9382 6127 en WhatsApp
          </p>
        </div>
      </section>
    </main>
  )
}
