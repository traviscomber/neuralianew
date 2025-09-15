import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/landing/hero-section"
import { ServicesSection } from "@/components/landing/services-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { ClientsSection } from "@/components/landing/clients-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { FaqSection } from "@/components/landing/faq-section"
import { ContactSection } from "@/components/landing/contact-section"
import { Footer } from "@/components/landing/footer"
import { LanguageProvider } from "@/lib/language-context"

export default function HomePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navigation />
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <ClientsSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
        <Footer />
      </div>
    </LanguageProvider>
  )
}
