import { HeroSection } from "@/components/landing/hero-section"
import { ServicesSection } from "@/components/landing/services-section"
import { SolutionsSection } from "@/components/landing/solutions-section"
import { ClientsSection } from "@/components/landing/clients-section"
import { TeamSection } from "@/components/landing/team-section"
import { ContactSection } from "@/components/landing/contact-section"
import { FaqSection } from "@/components/landing/faq-section"
import { Footer } from "@/components/landing/footer"
import { ChatWidget } from "@/components/chat/chat-widget"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ServicesSection />
      <SolutionsSection />
      <ClientsSection />
      <TeamSection />
      <ContactSection />
      <FaqSection />
      <Footer />
      <ChatWidget />
    </main>
  )
}
