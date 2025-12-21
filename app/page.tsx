import { NewHeroSection } from "@/components/landing/new-hero-section"
import { AiCoreDiagram } from "@/components/landing/ai-core-diagram"
import { CapabilitiesGrid } from "@/components/landing/capabilities-grid"
import { OutcomesShowcase } from "@/components/landing/outcomes-showcase"
import { FeaturesChileSection } from "@/components/landing/features-section-chile"
import { FaqChileSection } from "@/components/landing/faq-chile-section"
import { Footer } from "@/components/landing/footer"
import { HeroProblemSection } from "@/components/landing/hero-problem-section"
import { InteractiveDemoSection } from "@/components/landing/interactive-demo-section"
import { SocialProofSection } from "@/components/landing/social-proof-section"
import { ComparisonSection } from "@/components/landing/comparison-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <NewHeroSection />

      <HeroProblemSection />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">The N3uralia Core</h2>
            <p className="text-xl text-slate-600">Five interconnected systems orchestrated as one</p>
          </div>
          <AiCoreDiagram />
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Five Doors Into AI</h2>
            <p className="text-xl text-slate-600">Complete capabilities for every part of your infrastructure</p>
          </div>
          <CapabilitiesGrid />
        </div>
      </section>

      <InteractiveDemoSection />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Real Outcomes</h2>
            <p className="text-xl text-slate-600">From cities to enterprises, proven impact</p>
          </div>
          <OutcomesShowcase />
        </div>
      </section>

      <ComparisonSection />

      <SocialProofSection />

      <FeaturesChileSection />

      <FaqChileSection />

      <Footer />
    </main>
  )
}
