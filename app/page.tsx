import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/landing/hero-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { UseCasesSection } from "@/components/landing/use-cases-section"
import { TeamSection } from "@/components/landing/team-section"
import { FAQSection } from "@/components/landing/faq-section"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="use-cases">
        <UseCasesSection />
      </section>
      <section id="team">
        <TeamSection />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      <Footer />
    </main>
  )
}
