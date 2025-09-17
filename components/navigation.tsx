"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, MessageCircle, Phone } from "lucide-react"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/lib/language-context"

// Circuit-style logo component
const CircuitLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 120 40" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#64748b" />
        <stop offset="100%" stopColor="#94a3b8" />
      </linearGradient>
    </defs>

    {/* Circuit paths */}
    <path
      d="M8 20 L25 20 M25 15 L25 25 M25 20 L35 20 M35 15 L35 25 M35 20 L45 20"
      stroke="url(#logoGradient)"
      strokeWidth="1.5"
      fill="none"
    />

    {/* Connection nodes */}
    <circle cx="8" cy="20" r="2.5" fill="url(#logoGradient)" />
    <circle cx="25" cy="20" r="2" fill="url(#logoGradient)" />
    <circle cx="35" cy="20" r="2" fill="url(#logoGradient)" />
    <circle cx="45" cy="20" r="2.5" fill="url(#logoGradient)" />

    {/* Branch circuits */}
    <path
      d="M25 15 L30 10 M25 25 L30 30 M35 15 L40 10 M35 25 L40 30"
      stroke="url(#logoGradient)"
      strokeWidth="1"
      fill="none"
    />
    <circle cx="30" cy="10" r="1.5" fill="url(#logoGradient)" />
    <circle cx="30" cy="30" r="1.5" fill="url(#logoGradient)" />
    <circle cx="40" cy="10" r="1.5" fill="url(#logoGradient)" />
    <circle cx="40" cy="30" r="1.5" fill="url(#logoGradient)" />

    {/* Company name */}
    <text x="55" y="25" fill="url(#logoGradient)" fontSize="16" fontWeight="600" fontFamily="system-ui">
      n3uralia
    </text>
  </svg>
)

const translations = {
  en: {
    agents: "Agents",
    systems: "Systems",
    products: "Products",
    clients: "Clients",
    contacts: "Contacts",
    whatsappText: "Hello N3uralia, I'm interested in your AI solutions for my business",
    callUs: "Call Us",
    menu: "Menu",
  },
  es: {
    agents: "Agentes",
    systems: "Sistemas",
    products: "Productos",
    clients: "Clientes",
    contacts: "Contactos",
    whatsappText: "Hola N3uralia, me interesa conocer sus soluciones de IA para mi empresa",
    callUs: "Llamar",
    menu: "Menú",
  },
}

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/agents", label: t.agents },
    { href: "/systems", label: t.systems },
    { href: "/products", label: t.products },
    { href: "/clients", label: t.clients },
    { href: "/contacts", label: t.contacts },
  ]

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t.whatsappText)
    window.open(`https://wa.me/56940946660?text=${message}`, "_blank")
  }

  const handleCallClick = () => {
    window.open("tel:+56940946660", "_self")
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-800/95 backdrop-blur-md shadow-lg border-b border-slate-700/50"
          : "bg-slate-800/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="transition-transform duration-200"
            >
              <CircuitLogo className="h-8 w-auto" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === item.href
                      ? "bg-slate-700 text-white shadow-md"
                      : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                  }`}
                >
                  {item.label}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <LanguageToggle />

            <Button
              onClick={handleCallClick}
              variant="outline"
              size="sm"
              className="border-slate-600 text-slate-300 hover:text-white hover:bg-slate-700 hover:border-slate-500 bg-transparent"
            >
              <Phone className="w-4 h-4 mr-2" />
              {t.callUs}
            </Button>

            <Button
              onClick={handleWhatsAppClick}
              size="sm"
              className="bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-700">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">{t.menu}</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-slate-900 border-slate-700">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-slate-700">
                    <CircuitLogo className="h-8 w-auto" />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsOpen(false)}
                      className="text-slate-400 hover:text-white"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex-1 py-6">
                    <div className="space-y-2">
                      {navItems.map((item) => (
                        <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                          <motion.div
                            whileHover={{ x: 4 }}
                            className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                              pathname === item.href
                                ? "bg-slate-800 text-white border-l-4 border-slate-500"
                                : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                            }`}
                          >
                            {item.label}
                          </motion.div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Actions */}
                  <div className="border-t border-slate-700 pt-6 space-y-3">
                    <Button
                      onClick={handleCallClick}
                      variant="outline"
                      className="w-full border-slate-600 text-slate-300 hover:text-white hover:bg-slate-800 bg-transparent"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      {t.callUs}: +56 9 4094 6660
                    </Button>

                    <Button onClick={handleWhatsAppClick} className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
