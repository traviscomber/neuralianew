"use client"

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
import { useLanguage } from "@/lib/language-context"

function SectionHeader({ titleKey, subtitleKey }: { titleKey: string; subtitleKey: string }) {
  const { t } = useLanguage()
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">{t(titleKey)}</h2>
      <p className="text-xl text-slate-600">{t(subtitleKey)}</p>
    </div>
  )
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <NewHeroSection />

      <HeroProblemSection />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader titleKey="sections.core_title" subtitleKey="sections.core_subtitle" />
          <AiCoreDiagram />
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionHeader titleKey="sections.capabilities_title" subtitleKey="sections.capabilities_subtitle" />
          <CapabilitiesGrid />
        </div>
      </section>

      <InteractiveDemoSection />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader titleKey="sections.outcomes_title" subtitleKey="sections.outcomes_subtitle" />
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
