import { HeroSection } from "@/components/landing/hero-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { UseCasesSection } from "@/components/landing/use-cases-section"
import { TeamSection } from "@/components/landing/team-section"
import { TimezonesSection } from "@/components/landing/timezones-section"
import { FAQSection } from "@/components/landing/faq-section"
import { Footer } from "@/components/landing/footer"
import { ChatWidget } from "@/components/chat/chat-widget"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TestimonialsSection />
      <FeaturesSection />
      <UseCasesSection />
      <TeamSection />
      <TimezonesSection />
      <FAQSection />
      <Footer />
      <ChatWidget />
    </main>
  )
}
