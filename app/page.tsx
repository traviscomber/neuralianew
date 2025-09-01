import { HeroSection } from "@/components/landing/hero-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { FAQSection } from "@/components/landing/faq-section"
import { UseCasesSection } from "@/components/landing/use-cases-section"
import { TechnicalFeaturesSection } from "@/components/landing/technical-features-section"
import { TeamSection } from "@/components/landing/team-section"
import { TimezonesSection } from "@/components/landing/timezones-section"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TestimonialsSection />
      <FeaturesSection />
      <FAQSection />
      <UseCasesSection />
      <TechnicalFeaturesSection />
      <TeamSection />
      <TimezonesSection />
      <Footer />
    </main>
  )
}
