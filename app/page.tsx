"use client"

import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { MultitaskSystemsSection } from "@/components/landing/multitask-systems-section"
import { AgentsAutomationsSection } from "@/components/landing/agents-automations-section"
import { CosmicServicesSection } from "@/components/landing/cosmic-services-section"
import { ProductsSection } from "@/components/landing/products-section"
import { ClientsSection } from "@/components/landing/clients-section"
import { SuccessStoriesSection } from "@/components/landing/success-stories-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { FAQSection } from "@/components/landing/faq-section"
import { TestFreeCTASection } from "@/components/landing/test-free-cta-section"
import { ContactSection } from "@/components/landing/contact-section"
import { Footer } from "@/components/landing/footer"
import { ChatWidget } from "@/components/chat/chat-widget"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <MultitaskSystemsSection />
      <AgentsAutomationsSection />
      <CosmicServicesSection />
      <ProductsSection />
      <ClientsSection />
      <SuccessStoriesSection />
      <TestimonialsSection />
      <FAQSection />
      <TestFreeCTASection />
      <ContactSection />
      <Footer />
      <ChatWidget />
    </main>
  )
}
