import { HeroSection } from "@/components/landing/hero-section"
import { CosmicServicesSection } from "@/components/landing/cosmic-services-section"
import { AgentsAutomationsSection } from "@/components/landing/agents-automations-section"
import { MultitaskSystemsSection } from "@/components/landing/multitask-systems-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { ClientsSection } from "@/components/landing/clients-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { FAQSection } from "@/components/landing/faq-section"
import { ContactSection } from "@/components/landing/contact-section"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <CosmicServicesSection />
      <AgentsAutomationsSection />
      <MultitaskSystemsSection />
      <FeaturesSection />
      <ClientsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
