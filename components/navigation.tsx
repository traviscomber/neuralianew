"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, MessageCircle } from "lucide-react"
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
        isScrolled ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Optimized for performance */}
          <div className="flex items-center">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 transition-all duration-300">
              <Image
                src="/n3uralia-logo-new.png"
                alt="N3uralia Logo"
                fill
                className="object-contain"
                priority={true}
                quality={90}
                sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 64px"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-600 hover:text-slate-900 transition-colors duration-200 font-medium text-lg"
              >
                {item.label}
              </button>
            ))}
            <Button
              className="bg-slate-900 hover:bg-slate-800 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold px-6 py-2 rounded-lg"
              onClick={() => window.open("https://wa.me/56940946660", "_blank")}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Empezar ahora
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="text-slate-900">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white border-slate-200">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                      <Image
                        src="/n3uralia-logo-new.png"
                        alt="N3uralia Logo"
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 40px, 48px"
                        quality={90}
                      />
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="text-slate-900">
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <div className="flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="text-slate-600 hover:text-slate-900 transition-colors duration-200 font-medium text-left text-lg"
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button
                    className="bg-slate-900 hover:bg-slate-800 text-white border-0 w-full font-semibold py-3 rounded-lg"
                    onClick={() => {
                      window.open("https://wa.me/56940946660", "_blank")
                      setIsOpen(false)
                    }}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Empezar ahora
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
