import { Suspense } from "react"
import dynamic from "next/dynamic"
import Navigation from "@/components/navigation"
import { HeroSection } from "@/components/landing/hero-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { FAQSection } from "@/components/landing/faq-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { UseCasesSection } from "@/components/landing/use-cases-section"
import { TechnicalFeaturesSection } from "@/components/landing/technical-features-section"
import { TeamSection } from "@/components/landing/team-section"
import { TimezonesSection } from "@/components/landing/timezones-section"
import { Footer } from "@/components/landing/footer"

// Dynamic imports with proper loading states
const DynamicHeroSection = dynamic(() => import("@/components/landing/hero-section"), {
  loading: () => (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <div className="w-96 h-12 bg-muted animate-pulse rounded mx-auto" />
          <div className="w-80 h-6 bg-muted animate-pulse rounded mx-auto" />
          <div className="w-40 h-12 bg-muted animate-pulse rounded mx-auto" />
        </div>
      </div>
    </div>
  ),
})

const DynamicTestimonialsSection = dynamic(() => import("@/components/landing/testimonials-section"), {
  loading: () => (
    <div className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-64 h-10 bg-muted animate-pulse rounded mx-auto mb-4" />
          <div className="w-96 h-6 bg-muted animate-pulse rounded mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-card p-6 rounded-lg border">
              <div className="space-y-4">
                <div className="w-full h-20 bg-muted animate-pulse rounded" />
                <div className="w-32 h-6 bg-muted animate-pulse rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
})

const DynamicFAQSection = dynamic(() => import("@/components/landing/faq-section"), {
  loading: () => (
    <div className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-80 h-10 bg-slate-700 animate-pulse rounded mx-auto mb-4" />
          <div className="w-96 h-6 bg-slate-700 animate-pulse rounded mx-auto" />
        </div>
        <div className="space-y-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-slate-800 p-6 rounded-lg">
              <div className="w-full h-6 bg-slate-700 animate-pulse rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
})

const DynamicFeaturesSection = dynamic(() => import("@/components/landing/features-section"), {
  loading: () => (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-64 h-10 bg-muted animate-pulse rounded mx-auto mb-4" />
          <div className="w-96 h-6 bg-muted animate-pulse rounded mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-card p-6 rounded-lg border">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-muted animate-pulse rounded" />
                <div className="w-32 h-6 bg-muted animate-pulse rounded" />
                <div className="w-full h-16 bg-muted animate-pulse rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
})

const DynamicUseCasesSection = dynamic(() => import("@/components/landing/use-cases-section"), {
  loading: () => (
    <div className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-64 h-10 bg-muted animate-pulse rounded mx-auto mb-4" />
          <div className="w-96 h-6 bg-muted animate-pulse rounded mx-auto" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-card p-8 rounded-lg border">
              <div className="space-y-6">
                <div className="w-48 h-8 bg-muted animate-pulse rounded" />
                <div className="w-full h-64 bg-muted animate-pulse rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
})

const DynamicTechnicalFeaturesSection = dynamic(() => import("@/components/landing/technical-features-section"), {
  loading: () => (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-80 h-10 bg-muted animate-pulse rounded mx-auto mb-4" />
          <div className="w-96 h-6 bg-muted animate-pulse rounded mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="bg-card p-6 rounded-lg border">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-muted animate-pulse rounded" />
                <div className="w-32 h-6 bg-muted animate-pulse rounded" />
                <div className="w-full h-12 bg-muted animate-pulse rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
})

const DynamicTeamSection = dynamic(() => import("@/components/landing/team-section"), {
  loading: () => (
    <div className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-64 h-10 bg-muted animate-pulse rounded mx-auto mb-4" />
          <div className="w-96 h-6 bg-muted animate-pulse rounded mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-card p-6 rounded-lg border text-center">
              <div className="space-y-4">
                <div className="w-24 h-24 bg-muted animate-pulse rounded-full mx-auto" />
                <div className="w-32 h-6 bg-muted animate-pulse rounded mx-auto" />
                <div className="w-24 h-4 bg-muted animate-pulse rounded mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
})

const DynamicTimezonesSection = dynamic(() => import("@/components/landing/timezones-section"), {
  loading: () => (
    <div className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-80 h-10 bg-muted animate-pulse rounded mx-auto mb-4" />
          <div className="w-96 h-6 bg-muted animate-pulse rounded mx-auto" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 bg-muted animate-pulse rounded-full mx-auto mb-4" />
              <div className="w-20 h-4 bg-muted animate-pulse rounded mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
})

const DynamicFooter = dynamic(() => import("@/components/landing/footer"), {
  loading: () => (
    <div className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="w-24 h-6 bg-slate-700 animate-pulse rounded" />
              <div className="space-y-2">
                <div className="w-32 h-4 bg-slate-700 animate-pulse rounded" />
                <div className="w-28 h-4 bg-slate-700 animate-pulse rounded" />
                <div className="w-36 h-4 bg-slate-700 animate-pulse rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
})

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        <section id="hero">
          <Suspense fallback={<DynamicHeroSection />}>
            <HeroSection />
          </Suspense>
        </section>

        <section id="testimonials">
          <Suspense fallback={<DynamicTestimonialsSection />}>
            <TestimonialsSection />
          </Suspense>
        </section>

        <section id="faq">
          <Suspense fallback={<DynamicFAQSection />}>
            <FAQSection />
          </Suspense>
        </section>

        <section id="features">
          <Suspense fallback={<DynamicFeaturesSection />}>
            <FeaturesSection />
          </Suspense>
        </section>

        <section id="use-cases">
          <Suspense fallback={<DynamicUseCasesSection />}>
            <UseCasesSection />
          </Suspense>
        </section>

        <section id="technical-features">
          <Suspense fallback={<DynamicTechnicalFeaturesSection />}>
            <TechnicalFeaturesSection />
          </Suspense>
        </section>

        <section id="team">
          <Suspense fallback={<DynamicTeamSection />}>
            <TeamSection />
          </Suspense>
        </section>

        <section id="timezones">
          <Suspense fallback={<DynamicTimezonesSection />}>
            <TimezonesSection />
          </Suspense>
        </section>
      </main>

      <section id="footer">
        <Suspense fallback={<DynamicFooter />}>
          <Footer />
        </Suspense>
      </section>
    </div>
  )
}
