"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const navItems = [
    { label: language === "en" ? "Solutions" : "Soluciones", href: "#solutions" },
    { label: language === "en" ? "Products" : "Productos", href: "#products" },
    { label: language === "en" ? "Clients" : "Clientes", href: "#clients" },
    { label: language === "en" ? "Contact" : "Contacto", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace("#", ""))
    if (element) {
      const navHeight = isMobile ? 70 : 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo - Optimized for mobile */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Image
              src="/n3uralia-logo-new.png"
              alt="N3uralia"
              width={32}
              height={32}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <span className="text-lg sm:text-2xl font-light text-gray-900 tracking-wider">N3URALIA</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm lg:text-base px-2 py-1 rounded-md hover:bg-gray-50"
              >
                {item.label}
              </button>
            ))}
            <LanguageToggle />
            <Button
              onClick={() => window.open("https://wa.me/56940946660", "_blank")}
              className="bg-gray-900 hover:bg-gray-800 text-white px-4 lg:px-6 py-2 rounded-full border-0 text-sm lg:text-base"
            >
              {language === "en" ? "Get Started" : "Comenzar"}
            </Button>
          </div>

          {/* Mobile menu button - Larger touch target */}
          <div className="md:hidden flex items-center space-x-3">
            <LanguageToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 border-0 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Enhanced for touch */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors font-medium py-3 px-4 rounded-lg text-base"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
                <Button
                  onClick={() => {
                    window.open("https://wa.me/56940946660", "_blank")
                    setIsOpen(false)
                  }}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full border-0 text-base min-h-[48px]"
                >
                  {language === "en" ? "Get Started" : "Comenzar"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
