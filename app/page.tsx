import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/landing/hero-section"
import { ServicesSection } from "@/components/landing/services-section"
import { UseCasesSection } from "@/components/landing/use-cases-section"
import { TechnicalFeaturesSection } from "@/components/landing/technical-features-section"
import { ContactSection } from "@/components/landing/contact-section"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <UseCasesSection />
      <TechnicalFeaturesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
