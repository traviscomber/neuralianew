import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/landing/hero-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { UseCasesSection } from "@/components/landing/use-cases-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { TeamSection } from "@/components/landing/team-section"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navigation />
      <HeroSection />
      <TestimonialsSection />
      <UseCasesSection />
      <FeaturesSection />
      <TeamSection />
      <Footer />
    </main>
  )
}
