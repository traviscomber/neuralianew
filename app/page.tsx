"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/landing/hero-section"
import { UseCasesSection } from "@/components/landing/use-cases-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { FAQSection } from "@/components/landing/faq-section"
import { Footer } from "@/components/landing/footer"
import { ChatWidget } from "@/components/chat/chat-widget"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <HeroSection />
        <UseCasesSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FAQSection />
      </main>

      <Footer />
      <ChatWidget />
    </div>
  )
}
