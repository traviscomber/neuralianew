"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language } = useLanguage()

  const content = {
    en: {
      nav: {
        home: "Home",
        services: "Services",
        about: "About",
        contact: "Contact",
      },
      cta: "Get Started",
    },
    es: {
      nav: {
        home: "Inicio",
        services: "Servicios",
        about: "Nosotros",
        contact: "Contacto",
      },
      cta: "Comenzar",
    },
  }

  const t = content[language]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N3</span>
            </div>
            <span className="text-xl font-bold text-black">N3uralia</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-black transition-colors font-medium">
              {t.nav.home}
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-black transition-colors font-medium">
              {t.nav.services}
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-black transition-colors font-medium">
              {t.nav.about}
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-black transition-colors font-medium">
              {t.nav.contact}
            </Link>
          </div>

          {/* Desktop CTA & Language Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
            <Button className="bg-black hover:bg-gray-800 text-white font-semibold" asChild>
              <a
                href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20comenzar%20con%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                {t.cta}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-black transition-colors">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-black transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.home}
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-black transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.services}
              </Link>
              <Link
                href="#about"
                className="text-gray-700 hover:text-black transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.about}
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-black transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t.nav.contact}
              </Link>
              <Button className="bg-black hover:bg-gray-800 text-white font-semibold w-full" asChild>
                <a
                  href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20comenzar%20con%20sus%20servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {t.cta}
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
