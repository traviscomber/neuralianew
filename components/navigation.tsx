"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/lib/language-context"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language } = useLanguage()

  const content = {
    en: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
      getStarted: "Get Started",
    },
    es: {
      home: "Inicio",
      services: "Servicios",
      about: "Nosotros",
      contact: "Contacto",
      getStarted: "Comenzar",
    },
  }

  const t = content[language]

  const whatsappMessage =
    language === "es"
      ? "Hola, me interesa conocer más sobre las soluciones de IA de N3uralia"
      : "Hello, I'm interested in learning more about N3uralia's AI solutions"

  const whatsappUrl = `https://wa.me/56944444649?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N3</span>
            </div>
            <span className="font-bold text-xl text-black">N3uralia</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-black transition-colors">
              {t.home}
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-black transition-colors">
              {t.services}
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-black transition-colors">
              {t.about}
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-black transition-colors">
              {t.contact}
            </Link>
            <LanguageToggle />
            <Button asChild className="bg-black text-white hover:bg-gray-800">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                {t.getStarted}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageToggle />
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t.home}
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t.services}
              </Link>
              <Link
                href="#about"
                className="text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t.about}
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t.contact}
              </Link>
              <Button asChild className="bg-black text-white hover:bg-gray-800 w-full">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  {t.getStarted}
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
