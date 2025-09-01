"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.location.href = `/#${sectionId}`
    }
    setIsOpen(false)
  }

  const handleLogoClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      window.location.href = "/"
    }
  }

  useEffect(() => {
    if (isHomePage && window.location.hash) {
      const sectionId = window.location.hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }, [isHomePage])

  const navItems = [
    { name: "Inicio", id: "hero" },
    { name: "Testimonios", id: "testimonials" },
    { name: "Servicios", id: "features" },
    { name: "FAQ", id: "faq" },
    { name: "Casos de Uso", id: "use-cases" },
    { name: "Tecnología", id: "technical-features" },
    { name: "Equipo", id: "team" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg p-1"
          >
            <Image src="/n3uralia-logo.png" alt="N3uralia Logo" width={40} height={40} className="w-10 h-10" />
            <span className="text-xl font-bold text-white">N3uralia</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded px-2 py-1"
              >
                {item.name}
              </button>
            ))}
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
            >
              <a
                href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20implementar%20IA%20en%20mi%20negocio"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contactar
              </a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black border-gray-800">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-left py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded px-2"
                    >
                      {item.name}
                    </button>
                  ))}
                  <Button
                    asChild
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 mt-4"
                  >
                    <a
                      href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20implementar%20IA%20en%20mi%20negocio"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contactar
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
