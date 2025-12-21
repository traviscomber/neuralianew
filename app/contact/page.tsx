"use client"

import { ContactFormChile } from "@/components/landing/contact-form-chile"
import { Footer } from "@/components/landing/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ContactFormChile />
        </div>
      </section>
      <Footer />
    </main>
  )
}
