import { HeroSection } from "@/components/landing/hero-section"
import { CosmicServicesSection } from "@/components/landing/cosmic-services-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { AgentsAutomationsSection } from "@/components/landing/agents-automations-section"
import { MultitaskSystemsSection } from "@/components/landing/multitask-systems-section"
import { OurClientsSection } from "@/components/landing/our-clients-section"
import { ProductsSection } from "@/components/landing/products-section"
import { DeploySection } from "@/components/landing/deploy-section"
import { WhyTrustSection } from "@/components/landing/why-trust-section"
import { SuccessStoriesSection } from "@/components/landing/success-stories-section"
import { FAQSection } from "@/components/landing/faq-section"
import { ContactSection } from "@/components/landing/contact-section"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CosmicServicesSection />
      <FeaturesSection />
      <AgentsAutomationsSection />
      <MultitaskSystemsSection />
      <OurClientsSection />
      <ProductsSection />
      <DeploySection />
      <WhyTrustSection />
      <SuccessStoriesSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
