import { HeroSection } from "@/components/landing/hero-section"
import { ClientLogosSection } from "@/components/landing/client-logos-section"
import { UseCasesSection } from "@/components/landing/use-cases-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { TeamSection } from "@/components/landing/team-section"
import { Footer } from "@/components/landing/footer"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <main>
        <HeroSection />
        <ClientLogosSection />
        <UseCasesSection />
        <FeaturesSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  )
}
