import { HeroSection } from "@/components/landing/hero-section"
import { CosmicServicesSection } from "@/components/landing/cosmic-services-section"
import { AgentsAutomationsSection } from "@/components/landing/agents-automations-section"
import { MultitaskSystemsSection } from "@/components/landing/multitask-systems-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { ProductsSection } from "@/components/landing/products-section"
import { OurClientsSection } from "@/components/landing/our-clients-section"
import { SuccessStoriesSection } from "@/components/landing/success-stories-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { TestFreeCTASection } from "@/components/landing/test-free-cta-section"
import { ContactSection } from "@/components/landing/contact-section"
import { Footer } from "@/components/landing/footer"
import { Navigation } from "@/components/navigation"
import { ChatWidget } from "@/components/chat/chat-widget"

export default function HomePage() {
  return (
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
      <TestimonialsSection />
      <TestFreeCTASection />
      <ContactSection />
      <Footer />
      <ChatWidget />
    </div>
  )
}
