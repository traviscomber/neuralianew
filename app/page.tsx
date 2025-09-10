import { HeroSection } from "@/components/landing/hero-section"
import { UseCasesSection } from "@/components/landing/use-cases-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { TeamSection } from "@/components/landing/team-section"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <UseCasesSection />
      <FeaturesSection />
      <TeamSection />
      <Footer />
    </main>
  )
}
