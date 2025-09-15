import { HeroSection } from "@/components/landing/hero-section"
import { ServicesSection } from "@/components/landing/services-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { ClientsSection } from "@/components/landing/clients-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { FAQSection } from "@/components/landing/faq-section"
import { ContactSection } from "@/components/landing/contact-section"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <ClientsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
