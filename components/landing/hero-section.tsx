"use client"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { AuthModal } from "@/components/auth/auth-modal"
import { useState } from "react"

export function HeroSection() {
  const [showAuthModal, setShowAuthModal] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Deploy AI Executives That
          <span className="text-blue-600 dark:text-blue-400"> Think, Decide & Execute</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Stop managing tasks. Start deploying AI agents that operate like your best executives - making strategic
          decisions and driving results autonomously.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-3" onClick={() => setShowAuthModal(true)}>
            Deploy Your First AI Executive
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
            Watch Demo
          </Button>
        </div>
      </div>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </section>
  )
}
