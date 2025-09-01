import { Suspense } from "react"
import dynamic from "next/dynamic"
import Navigation from "@/components/navigation"

// Static imports for critical sections
import HeroSection from "@/components/landing/hero-section"
import TestimonialsSection from "@/components/landing/testimonials-section"
import FAQSection from "@/components/landing/faq-section"

// Dynamic imports for non-critical sections
const FeaturesSection = dynamic(() => import("@/components/landing/features-section"), {
  ssr: true,
})

const UseCasesSection = dynamic(() => import("@/components/landing/use-cases-section"), {
  ssr: true,
})

const TechnicalFeaturesSection = dynamic(() => import("@/components/landing/technical-features-section"), {
  ssr: true,
})

const TeamSection = dynamic(() => import("@/components/landing/team-section"), {
  ssr: true,
})

const TimezonesSection = dynamic(() => import("@/components/landing/timezones-section"), {
  ssr: true,
})

const Footer = dynamic(() => import("@/components/landing/footer"), {
  ssr: true,
})

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <section id="hero">
          <HeroSection />
        </section>

        <section id="testimonials">
          <TestimonialsSection />
        </section>

        <section id="faq">
          <FAQSection />
        </section>

        <section id="features">
          <Suspense fallback={<div className="py-20 bg-background" />}>
            <FeaturesSection />
          </Suspense>
        </section>

        <section id="use-cases">
          <Suspense fallback={<div className="py-20 bg-muted/30" />}>
            <UseCasesSection />
          </Suspense>
        </section>

        <section id="technical-features">
          <Suspense fallback={<div className="py-20 bg-background" />}>
            <TechnicalFeaturesSection />
          </Suspense>
        </section>

        <section id="team">
          <Suspense fallback={<div className="py-20 bg-muted/30" />}>
            <TeamSection />
          </Suspense>
        </section>

        <section id="timezones">
          <Suspense fallback={<div className="py-20 bg-background" />}>
            <TimezonesSection />
          </Suspense>
        </section>
      </main>

      <section id="footer">
        <Suspense fallback={<div className="bg-slate-900 py-16" />}>
          <Footer />
        </Suspense>
      </section>
    </div>
  )
}
