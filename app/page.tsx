"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/landing/hero-section"
import { ServicesSection } from "@/components/landing/services-section"
import { SolutionsSection } from "@/components/landing/solutions-section"
import { FlowSection } from "@/components/landing/flow-section"
import { ClientsSection } from "@/components/landing/clients-section"
import { TrustSection } from "@/components/landing/trust-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { FAQSection } from "@/components/landing/faq-section"
import { ContactSection } from "@/components/landing/contact-section"
import { Footer } from "@/components/landing/footer"
import { LanguageProvider } from "@/lib/language-context"

export default function HomePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <HeroSection />
          <ServicesSection />
          <SolutionsSection />
          <FlowSection />
          <ClientsSection />
          <TrustSection />
          <TestimonialsSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
