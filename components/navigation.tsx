"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button onClick={scrollToTop} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">Neuralia</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={scrollToTop}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Diferencias
            </button>
            <button
              onClick={() => scrollToSection("success-cases")}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Casos de Éxito
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Equipo
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              FAQ
            </button>

            <ThemeToggle />

            <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
              <a
                href="https://wa.me/56940946660"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={scrollToTop}
                className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Diferencias
              </button>
              <button
                onClick={() => scrollToSection("success-cases")}
                className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Casos de Éxito
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                Equipo
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                FAQ
              </button>
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <a
                    href="https://wa.me/56940946660"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
