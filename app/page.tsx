import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/landing/hero-section"
import { SolutionsSection } from "@/components/landing/solutions-section"
import { FlowSection } from "@/components/landing/flow-section"
import { ProductsSection } from "@/components/landing/products-section"
import { ClientsSection } from "@/components/landing/clients-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { DeploySection } from "@/components/landing/deploy-section"
import { FAQSection } from "@/components/landing/faq-section"
import { ContactSection } from "@/components/landing/contact-section"
import { Footer } from "@/components/landing/footer"
import { LanguageProvider } from "@/lib/language-context"

export default function HomePage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main>
          <HeroSection />
          <SolutionsSection />
          <FlowSection />
          <ProductsSection />
          <ClientsSection />
          <TestimonialsSection />
          <DeploySection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
