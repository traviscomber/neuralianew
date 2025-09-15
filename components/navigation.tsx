"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, MessageCircle } from "lucide-react"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/lib/language-context"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language } = useLanguage()

  const navItems = {
    en: [
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: "About", href: "#about" },
      { name: "Contact", href: "#contact" },
    ],
    es: [
      { name: "Inicio", href: "/" },
      { name: "Servicios", href: "/services" },
      { name: "Nosotros", href: "#about" },
      { name: "Contacto", href: "#contact" },
    ],
  }

  const cta = {
    en: "Get Started",
    es: "Comenzar",
  }

  const items = navItems[language]

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">N3</span>
            </div>
            <span className="text-xl font-bold text-black">N3uralia</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-black transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <LanguageToggle />
            <Button asChild className="bg-black hover:bg-gray-800 text-white">
              <a
                href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20saber%20más%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                {cta[language]}
              </a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-gray-600 hover:text-black transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button asChild className="bg-black hover:bg-gray-800 text-white mt-6">
                    <a
                      href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20saber%20más%20sobre%20sus%20servicios"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      {cta[language]}
                    </a>
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
