"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, MessageCircle, Sparkles } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 80
      const elementPosition = element.offsetTop - navHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
    setIsOpen(false)
  }

  const navItems = [
    { label: "Inicio", href: "hero" },
    { label: "Casos de Éxito", href: "use-cases" },
    { label: "FAQ", href: "faq" },
    { label: "Contacto", href: "contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/95 backdrop-blur-md border-b border-slate-800/50 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <Image src="/n3uralia-logo-new.png" alt="N3uralia Logo" fill className="object-contain" priority />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                N3uralia
              </span>
              <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open("https://wa.me/56940946660", "_blank")}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat en Vivo
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-slate-900 border-slate-800">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="relative w-8 h-8">
                      <Image src="/n3uralia-logo-new.png" alt="N3uralia Logo" fill className="object-contain" />
                    </div>
                    <span className="text-xl font-bold text-white">N3uralia</span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="text-white">
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <div className="flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="text-slate-300 hover:text-white transition-colors duration-200 font-medium text-left"
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 w-full"
                    onClick={() => {
                      window.open("https://wa.me/56940946660", "_blank")
                      setIsOpen(false)
                    }}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat en Vivo
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
