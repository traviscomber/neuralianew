"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language } = useLanguage()

  const navItems = [
    {
      label: language === "en" ? "Services" : "Servicios",
      href: "#services",
    },
    {
      label: language === "en" ? "Process" : "Proceso",
      href: "#flow",
    },
    {
      label: language === "en" ? "Clients" : "Clientes",
      href: "#clients",
    },
    {
      label: language === "en" ? "Trust" : "Confianza",
      href: "#trust",
    },
    {
      label: language === "en" ? "Contact" : "Contacto",
      href: "#contact",
    },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={scrollToTop} className="flex items-center">
              <Image
                src="/n3uralia-logo-new.png"
                alt="Neuralia Logo"
                width={120}
                height={40}
                className="h-8 w-auto hover:opacity-80 transition-opacity cursor-pointer"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <LanguageToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation with Slide Animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`px-2 pt-2 pb-3 space-y-1 bg-black border-t border-gray-800 transform transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left transition-all duration-200 ease-in-out transform ${
                  isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
