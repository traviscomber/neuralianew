"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { LanguageToggle } from "./language-toggle"
import { useLanguage } from "@/lib/language-context"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    {
      label: language === "en" ? "Agents" : "Agentes",
      href: "#solutions",
    },
    {
      label: language === "en" ? "Systems" : "Sistemas",
      href: "#flow",
    },
    {
      label: language === "en" ? "Products" : "Productos",
      href: "#products",
    },
    {
      label: language === "en" ? "Contacts" : "Contactos",
      href: "#contact",
    },
  ]

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace("#", ""))
    if (element) {
      const navHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight
      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200" : "bg-black shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Minimalist Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                isScrolled ? "bg-black" : "bg-white"
              }`}
            >
              <span className={`text-xl font-bold transition-colors ${isScrolled ? "text-white" : "text-black"}`}>
                N3
              </span>
            </div>
            <div className="flex flex-col">
              <span
                className={`text-xl font-bold tracking-tight transition-colors ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                N3URALIA
              </span>
              <span
                className={`text-xs font-medium transition-colors ${isScrolled ? "text-gray-500" : "text-gray-300"}`}
              >
                Enterprise AI Solutions
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative font-medium transition-all duration-300 ${
                  isScrolled ? "text-gray-700 hover:text-black" : "text-gray-300 hover:text-white"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 hover:w-full"></span>
              </button>
            ))}
            <LanguageToggle />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageToggle />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`transition-colors ${
                    isScrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"
                  }`}
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white border-l border-gray-200">
                <div className="flex flex-col space-y-8 mt-12">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="text-black hover:text-gray-600 transition-colors duration-200 font-medium text-left text-lg"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
