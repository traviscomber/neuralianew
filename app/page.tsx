"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/landing/hero-section"
import { CosmicServicesSection } from "@/components/landing/cosmic-services-section"
import { AgentsAutomationsSection } from "@/components/landing/agents-automations-section"
import { MultitaskSystemsSection } from "@/components/landing/multitask-systems-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { ProductsSection } from "@/components/landing/products-section"
import { OurClientsSection } from "@/components/landing/our-clients-section"
import { SuccessStoriesSection } from "@/components/landing/success-stories-section"
import { TestFreeCTASection } from "@/components/landing/test-free-cta-section"
import { ContactSection } from "@/components/landing/contact-section"
import { Footer } from "@/components/landing/footer"
import { ChatWidget } from "@/components/chat/chat-widget"
import { LanguageProvider } from "@/lib/language-context"

export default function HomePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <HeroSection />
        <CosmicServicesSection />
        <AgentsAutomationsSection />
        <MultitaskSystemsSection />
        <FeaturesSection />
        <ProductsSection />
        <OurClientsSection />
        <SuccessStoriesSection />
        <TestFreeCTASection />
        <ContactSection />
        <Footer />
        <ChatWidget />
      </div>
    </LanguageProvider>
  )
}
