import { HeroSection } from "@/components/landing/hero-section"
import { CosmicServicesSection } from "@/components/landing/cosmic-services-section"
import { AgentsAutomationsSection } from "@/components/landing/agents-automations-section"
import { MultitaskSystemsSection } from "@/components/landing/multitask-systems-section"
import { SuccessStoriesSection } from "@/components/landing/success-stories-section"
import { OurClientsSection } from "@/components/landing/our-clients-section"
import { ProductsSection } from "@/components/landing/products-section"
import { DeploySection } from "@/components/landing/deploy-section"
import { WhyTrustSection } from "@/components/landing/why-trust-section"
import { FAQSection } from "@/components/landing/faq-section"
import { ContactSection } from "@/components/landing/contact-section"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CosmicServicesSection />
      <AgentsAutomationsSection />
      <MultitaskSystemsSection />
      <SuccessStoriesSection />
      <OurClientsSection />
      <ProductsSection />
      <DeploySection />
      <WhyTrustSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
