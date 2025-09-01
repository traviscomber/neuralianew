"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-md border-b border-gray-800" : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={scrollToTop} className="flex items-center">
              <Image src="/n3uralia-logo-new.png" alt="N3uralia" width={120} height={40} className="h-8 w-auto" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={scrollToTop}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("casos-de-exito")}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Casos de Éxito
              </button>
              <button
                onClick={() => scrollToSection("equipo")}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Equipo
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("footer")}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                Contáctenos
              </button>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link
              href="https://wa.me/56912345678?text=Hola%20N3uralia,%20quiero%20implementar%20IA%20en%20mi%20empresa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black border-t border-gray-800"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-white hover:bg-gray-800 block px-3 py-2 text-base font-medium w-full text-left transition-colors"
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection("casos-de-exito")}
                  className="text-gray-300 hover:text-white hover:bg-gray-800 block px-3 py-2 text-base font-medium w-full text-left transition-colors"
                >
                  Casos de Éxito
                </button>
                <button
                  onClick={() => scrollToSection("equipo")}
                  className="text-gray-300 hover:text-white hover:bg-gray-800 block px-3 py-2 text-base font-medium w-full text-left transition-colors"
                >
                  Equipo
                </button>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-gray-300 hover:text-white hover:bg-gray-800 block px-3 py-2 text-base font-medium w-full text-left transition-colors"
                >
                  FAQ
                </button>
                <button
                  onClick={() => scrollToSection("footer")}
                  className="text-gray-300 hover:text-white hover:bg-gray-800 block px-3 py-2 text-base font-medium w-full text-left transition-colors"
                >
                  Contáctenos
                </button>
                <div className="pt-2">
                  <Link
                    href="https://wa.me/56912345678?text=Hola%20N3uralia,%20quiero%20implementar%20IA%20en%20mi%20empresa"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Contactar por WhatsApp
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
