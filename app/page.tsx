import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { UseCasesSection } from "@/components/landing/use-cases-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { FAQSection } from "@/components/landing/faq-section"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <FeaturesSection />
        <UseCasesSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
