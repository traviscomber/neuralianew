"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

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
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
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
            <Link href="/" className="text-gray-600 hover:text-black transition-colors">
              {t.nav.home}
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-black transition-colors">
              {t.nav.services}
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-black transition-colors">
              {t.nav.about}
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-black transition-colors">
              {t.nav.contact}
            </Link>

            {/* Language Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 text-sm ${language === "en" ? "text-black font-semibold" : "text-gray-500"}`}
              >
                EN
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => setLanguage("es")}
                className={`px-2 py-1 text-sm ${language === "es" ? "text-black font-semibold" : "text-gray-500"}`}
              >
                ES
              </button>
            </div>

            <Button className="bg-black hover:bg-gray-800 text-white" asChild>
              <a
                href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20conocer%20más%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                {t.cta}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-600 hover:text-black transition-colors">
                {t.nav.home}
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-black transition-colors">
                {t.nav.services}
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-black transition-colors">
                {t.nav.about}
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-black transition-colors">
                {t.nav.contact}
              </Link>

              <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setLanguage("en")}
                    className={`px-2 py-1 text-sm ${language === "en" ? "text-black font-semibold" : "text-gray-500"}`}
                  >
                    EN
                  </button>
                  <span className="text-gray-300">|</span>
                  <button
                    onClick={() => setLanguage("es")}
                    className={`px-2 py-1 text-sm ${language === "es" ? "text-black font-semibold" : "text-gray-500"}`}
                  >
                    ES
                  </button>
                </div>

                <Button className="bg-black hover:bg-gray-800 text-white" asChild>
                  <a
                    href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20conocer%20más%20sobre%20sus%20servicios"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {t.cta}
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
