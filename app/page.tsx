"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AuthModal } from "@/components/auth/auth-modal"
import { ThemeToggle } from "@/components/theme-toggle"
import { useAuth } from "@/hooks/use-auth"
import { Menu, X, Brain } from "lucide-react"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { FAQSection } from "@/components/landing/faq-section"
import { Footer } from "@/components/landing/footer"
import { ChatWidget } from "@/components/chat/chat-widget"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const { user, loading } = useAuth()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Brain className="h-8 w-8 text-primary mr-2" />
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Neuralia
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#features"
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Features
                </a>
                <a
                  href="#services"
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Services
                </a>
                <a
                  href="#testimonials"
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Desktop Auth & Theme */}
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              {loading ? (
                <div className="w-20 h-9 bg-muted animate-pulse rounded-md" />
              ) : user ? (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">Welcome, {user.name || user.email}</span>
                  <Button variant="outline" size="sm">
                    Dashboard
                  </Button>
                </div>
              ) : (
                <Button onClick={() => setIsAuthModalOpen(true)} size="sm">
                  Get Started
                </Button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <a
                href="#features"
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                Features
              </a>
              <a
                href="#services"
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
              <div className="pt-4 pb-3 border-t border-border">
                {loading ? (
                  <div className="w-full h-10 bg-muted animate-pulse rounded-md mx-3" />
                ) : user ? (
                  <div className="px-3">
                    <div className="text-sm text-muted-foreground mb-2">Welcome, {user.name || user.email}</div>
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Dashboard
                    </Button>
                  </div>
                ) : (
                  <Button onClick={() => setIsAuthModalOpen(true)} className="mx-3 w-[calc(100%-1.5rem)]">
                    Get Started
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FAQSection />
        <Footer />
        <ChatWidget />
      </main>

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </div>
  )
}
