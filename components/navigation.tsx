"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/lib/language-context"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: language === "en" ? "Services" : "Servicios", href: "#services" },
    { name: language === "en" ? "Process" : "Proceso", href: "#flow" },
    { name: language === "en" ? "Testimonials" : "Testimonios", href: "#testimonials" },
    { name: language === "en" ? "FAQ" : "FAQ", href: "#faq" },
    { name: language === "en" ? "Contact" : "Contacto", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace("#", ""))
    if (element) {
      const navHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
              <span className="text-lg font-bold text-black">N3</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white">N3URALIA</span>
              <span className="text-xs text-gray-400 font-medium">Enterprise AI Solutions</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-white font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageToggle />
            <Button
              onClick={() => window.open("https://wa.me/56940946660", "_blank")}
              className="bg-white hover:bg-gray-100 text-black font-medium px-6 py-2 rounded-xl transition-all duration-300 hover:scale-105"
            >
              {language === "en" ? "Get Started" : "Comenzar"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <LanguageToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-gray-300 hover:bg-gray-800"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-black border-t border-gray-800 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-gray-300 hover:text-white font-medium py-2 transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-800">
                <Button
                  onClick={() => {
                    window.open("https://wa.me/56940946660", "_blank")
                    setIsOpen(false)
                  }}
                  className="w-full bg-white hover:bg-gray-100 text-black font-medium py-3 rounded-xl"
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
