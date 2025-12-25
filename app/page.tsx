"use client"

import { MinimalistHero } from "@/components/landing/minimalist-hero"
import { MinimalistCore } from "@/components/landing/minimalist-core"
import { MinimalistClients } from "@/components/landing/minimalist-clients"
import { MinimalistTestimonials } from "@/components/landing/minimalist-testimonials"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <MinimalistHero />
      <MinimalistCore />
      <MinimalistClients />
      <MinimalistTestimonials />
      <Footer />
    </main>
  )
}
