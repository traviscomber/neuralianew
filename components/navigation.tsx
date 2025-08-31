"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Inicio", href: "#" },
    { name: "Casos de Éxito", href: "#success-cases" },
    { name: "¿Por qué Neuralia?", href: "#features" },
    { name: "Equipo", href: "#team" },
    { name: "FAQ", href: "#faq" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Neuralia
            </button>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
                  onClick={item.href === "#" ? scrollToTop : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <a
                href="https://wa.me/56940946660?text=¡Hola!%20Me%20interesa%20implementar%20IA%20conversacional%20en%20mi%20negocio.%20¿Podrían%20contarme%20más%20sobre%20Neuralia?"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-purple-600 p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium"
                  onClick={() => {
                    setIsOpen(false)
                    if (item.href === "#") {
                      scrollToTop()
                    }
                  }}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <a
                    href="https://wa.me/56940946660?text=¡Hola!%20Me%20interesa%20implementar%20IA%20conversacional%20en%20mi%20negocio.%20¿Podrían%20contarme%20más%20sobre%20Neuralia?"
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
