import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/landing/hero-section"
import { ServicesSection } from "@/components/landing/services-section"
import { FlowSection } from "@/components/landing/flow-section"
import { SolutionsSection } from "@/components/landing/solutions-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { ClientsSection } from "@/components/landing/clients-section"
import { ProductsSection } from "@/components/landing/products-section"
import { DeploySection } from "@/components/landing/deploy-section"
import { TrustSection } from "@/components/landing/trust-section"
import { FAQSection } from "@/components/landing/faq-section"
import { ContactSection } from "@/components/landing/contact-section"
import { TeamSection } from "@/components/landing/team-section"
import { TechnicalFeaturesSection } from "@/components/landing/technical-features-section"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <FlowSection />
      <SolutionsSection />
      <TestimonialsSection />
      <ClientsSection />
      <ProductsSection />
      <TeamSection />
      <TechnicalFeaturesSection />
      <DeploySection />
      <TrustSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
