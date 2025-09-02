"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Bot, MessageSquare, Users, Zap, Phone } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"
import Link from "next/link"

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
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const navigationItems = [
    { id: "inicio", label: "Inicio", icon: Bot },
    { id: "casos-de-uso", label: "Casos de Éxito", icon: Zap },
    { id: "equipo", label: "Equipo", icon: Users },
    { id: "faq", label: "FAQ", icon: MessageSquare },
    { id: "contacto", label: "Contacto", icon: Phone },
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
              onClick={() => scrollToSection("inicio")}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <Image src="/n3uralia-logo-new.png" alt="N3uralia Logo" width={32} height={32} className="rounded-lg" />
              <div className="hidden sm:block">
                <div className="text-xl font-bold text-white">N3uralia</div>
                <div className="text-xs text-slate-400 -mt-1">Agentes Conversacionales Inteligentes</div>
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
            {/* WhatsApp Contact */}
            <Button
              size="sm"
              className="hidden sm:flex bg-green-600 hover:bg-green-700 text-white border-0"
              onClick={() => window.open("https://wa.me/56900000000", "_blank")}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu */}
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
                    <span className="text-lg font-bold text-white">N3uralia</span>
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
                        window.open("https://wa.me/56900000000", "_blank")
                        setIsMobileMenuOpen(false)
                      }}
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Contactar por WhatsApp
                    </Button>
                  </div>

                  <div className="pt-4 space-y-2">
                    <div className="text-sm text-slate-400">Enlaces Adicionales:</div>
                    <div className="space-y-2">
                      <Link
                        href="/llmo-content"
                        className="block text-sm text-blue-400 hover:text-blue-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Contenido LLMO
                      </Link>
                      <Link
                        href="/ai-search-simulation"
                        className="block text-sm text-purple-400 hover:text-purple-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Simulación Búsqueda IA
                      </Link>
                      <Link
                        href="/test-chat"
                        className="block text-sm text-green-400 hover:text-green-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Demo Chat
                      </Link>
                    </div>
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
