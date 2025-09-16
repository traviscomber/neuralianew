"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle } from "lucide-react"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/lib/language-context"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language } = useLanguage()

  const content = {
    en: {
      agents: "Agents",
      systems: "Systems",
      products: "Products",
      clients: "Clients",
      contacts: "Contacts",
      getStarted: "Get Started",
    },
    es: {
      agents: "Agentes",
      systems: "Sistemas",
      products: "Productos",
      clients: "Clientes",
      contacts: "Contactos",
      getStarted: "Comenzar",
    },
  }

  const t = content[language]

  const whatsappMessage =
    language === "es"
      ? "Hola, me interesa conocer más sobre las soluciones de IA de N3uralia"
      : "Hello, I'm interested in learning more about N3uralia's AI solutions"

  const whatsappUrl = `https://wa.me/56944444649?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <circle cx="8" cy="8" r="2" fill="currentColor" />
                <circle cx="20" cy="8" r="2" fill="currentColor" />
                <circle cx="32" cy="8" r="2" fill="currentColor" />
                <circle cx="8" cy="20" r="2" fill="currentColor" />
                <circle cx="20" cy="20" r="2" fill="currentColor" />
                <circle cx="32" cy="20" r="2" fill="currentColor" />
                <circle cx="8" cy="32" r="2" fill="currentColor" />
                <circle cx="20" cy="32" r="2" fill="currentColor" />
                <circle cx="32" cy="32" r="2" fill="currentColor" />
                <path d="M8 10v8M20 10v8M32 10v8M8 22v8M20 22v8M32 22v8" stroke="currentColor" strokeWidth="1" />
                <path d="M10 8h8M22 8h8M10 20h8M22 20h8M10 32h8M22 32h8" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>
            <span className="font-bold text-xl text-white">N3uralia</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/agents" className="text-gray-300 hover:text-white transition-colors">
              {t.agents}
            </Link>
            <Link href="/systems" className="text-gray-300 hover:text-white transition-colors">
              {t.systems}
            </Link>
            <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
              {t.products}
            </Link>
            <Link href="/clients" className="text-gray-300 hover:text-white transition-colors">
              {t.clients}
            </Link>
            <Link href="/contacts" className="text-gray-300 hover:text-white transition-colors">
              {t.contacts}
            </Link>
            <LanguageToggle />
            <Button asChild className="bg-blue-600 text-white hover:bg-blue-700">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                {t.getStarted}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:bg-gray-700"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <Link
                href="/agents"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t.agents}
              </Link>
              <Link
                href="/systems"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t.systems}
              </Link>
              <Link
                href="/products"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t.products}
              </Link>
              <Link
                href="/clients"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t.clients}
              </Link>
              <Link
                href="/contacts"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {t.contacts}
              </Link>
              <Button asChild className="bg-blue-600 text-white hover:bg-blue-700 w-full">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  {t.getStarted}
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
