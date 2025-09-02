import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/landing/hero-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { UseCasesSection } from "@/components/landing/use-cases-section"
import { TechnicalFeaturesSection } from "@/components/landing/technical-features-section"
import { TeamSection } from "@/components/landing/team-section"
import { TimezonesSection } from "@/components/landing/timezones-section"
import { FAQSection } from "@/components/landing/faq-section"
import { Footer } from "@/components/landing/footer"
import { LLMOOptimizedContent } from "@/components/landing/llmo-optimized-content"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
      <Navigation />

      {/* LLMO Optimized Content - Hidden but crawlable */}
      <LLMOOptimizedContent />

      <main>
        <HeroSection />
        <TestimonialsSection />
        <FeaturesSection />
        <UseCasesSection />
        <TechnicalFeaturesSection />
        <TeamSection />
        <TimezonesSection />
        <FAQSection />
      </main>

      <Footer />
    </div>
  )
}
