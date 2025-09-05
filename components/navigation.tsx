"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Bot, MessageSquare, Users, Zap, Phone } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setIsMobileMenuOpen(false)
    }
  }

  const navigationItems = [
    { id: "hero", label: "Inicio", icon: Bot },
    { id: "use-cases", label: "Casos de Éxito", icon: Zap },
    { id: "team", label: "Equipo", icon: Users },
    { id: "faq", label: "FAQ", icon: MessageSquare },
    { id: "contact", label: "Contacto", icon: Phone },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-950/95 backdrop-blur-md border-b border-slate-800/50 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <Image src="/n3uralia-logo-new.png" alt="N3uralia Logo" width={32} height={32} className="rounded-lg" />
              <div className="hidden sm:block">
                <div className="text-xs text-slate-400">Agentes Conversacionales Inteligentes</div>
              </div>
            </button>
            <Badge className="hidden md:flex bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
              Full Stack IA Systems
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  className="text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200"
                  onClick={() => scrollToSection(item.id)}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Button>
              )
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            <Button
              size="sm"
              className="hidden sm:flex bg-green-600 hover:bg-green-700 text-white border-0"
              onClick={() => window.open("https://wa.me/56940946660", "_blank")}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>

            <ThemeToggle />

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden text-slate-300">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-slate-950 border-slate-800">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/n3uralia-logo-new.png"
                      alt="N3uralia Logo"
                      width={24}
                      height={24}
                      className="rounded"
                    />
                    <span className="text-sm text-slate-400">Agentes IA</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-slate-400"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="space-y-4">
                  {navigationItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <Button
                        key={item.id}
                        variant="ghost"
                        className="w-full justify-start text-slate-300 hover:text-white hover:bg-slate-800/50"
                        onClick={() => scrollToSection(item.id)}
                      >
                        <Icon className="w-4 h-4 mr-3" />
                        {item.label}
                      </Button>
                    )
                  })}

                  <div className="pt-4 border-t border-slate-800">
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700 text-white border-0"
                      onClick={() => {
                        window.open("https://wa.me/56940946660", "_blank")
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Contactar por WhatsApp
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
