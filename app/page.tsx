import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { UseCasesSection } from "@/components/landing/use-cases-section"
import { TechnicalFeaturesSection } from "@/components/landing/technical-features-section"
import { ArchitectureSection } from "@/components/landing/architecture-section"
import { TimezonesSection } from "@/components/landing/timezones-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { TeamSection } from "@/components/landing/team-section"
import { FAQSection } from "@/components/landing/faq-section"
import { Footer } from "@/components/landing/footer"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navigation />
      <main className="bg-white dark:bg-slate-950">
        <HeroSection />
        <FeaturesSection />
        <UseCasesSection />
        <TechnicalFeaturesSection />
        <ArchitectureSection />
        <TimezonesSection />
        <TestimonialsSection />
        <TeamSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
