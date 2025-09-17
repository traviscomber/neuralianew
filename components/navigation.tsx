"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, MessageCircle } from "lucide-react"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language } = useLanguage()

  const content = {
    en: {
      menuItems: [
        { label: "Agents", href: "/agents" },
        { label: "Systems", href: "/systems" },
        { label: "Products", href: "/products" },
        { label: "Clients", href: "/clients" },
        { label: "Contacts", href: "/contacts" },
      ],
      whatsappText: "Contact WA",
    },
    es: {
      menuItems: [
        { label: "Agentes", href: "/agents" },
        { label: "Sistemas", href: "/systems" },
        { label: "Productos", href: "/products" },
        { label: "Clientes", href: "/clients" },
        { label: "Contactos", href: "/contacts" },
      ],
      whatsappText: "Contactar WA",
    },
  }

  const t = content[language]
  const whatsappNumber = "+56940946660"

  const openWhatsApp = () => {
    const message = encodeURIComponent(`Hello! I'm interested in learning more about N3uralia's AI solutions.`)
    window.open(`https://wa.me/${whatsappNumber.replace("+", "")}?text=${message}`, "_blank")
  }

  return (
    <nav className="bg-slate-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center">
              <svg viewBox="0 0 240 80" className="h-16 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Circuit pattern */}
                <g stroke="currentColor" strokeWidth="1.5" fill="none">
                  <circle cx="20" cy="40" r="3" fill="currentColor" />
                  <circle cx="40" cy="25" r="2" fill="currentColor" />
                  <circle cx="40" cy="55" r="2" fill="currentColor" />
                  <circle cx="60" cy="40" r="2" fill="currentColor" />

                  <line x1="23" y1="40" x2="37" y2="25" />
                  <line x1="23" y1="40" x2="37" y2="55" />
                  <line x1="42" y1="25" x2="58" y2="40" />
                  <line x1="42" y1="55" x2="58" y2="40" />
                  <line x1="62" y1="40" x2="75" y2="40" />
                </g>

                {/* Text */}
                <text
                  x="85"
                  y="50"
                  className="fill-current text-2xl font-bold"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  n3uralia
                </text>
              </svg>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {t.menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
            <Button
              onClick={openWhatsApp}
              variant="outline"
              size="sm"
              className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 bg-transparent"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              {t.whatsappText}
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-slate-800 text-white border-slate-700">
                <div className="flex flex-col space-y-6 mt-8">
                  {t.menuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button
                    onClick={() => {
                      openWhatsApp()
                      setIsOpen(false)
                    }}
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 mt-6"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {t.whatsappText}
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
