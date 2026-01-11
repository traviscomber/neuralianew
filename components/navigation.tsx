"use client"

import Link from "next/link"
import { Menu, X, Globe, MessageCircle } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"

export function Navigation() {
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { language, setLanguage } = useLanguage()

  const navContent = {
    es: {
      inicio: "Inicio",
      capacidades: "Capacidades",
      resultados: "Resultados",
      acerca: "Acerca de",
      contacto: "Contacto",
    },
    en: {
      inicio: "Home",
      capacidades: "Capabilities",
      resultados: "Results",
      acerca: "About",
      contacto: "Contact",
    },
  }

  const t = navContent[language]
  const whatsappNumber = "56993826127"
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          N3uralia
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-sm hover:text-gray-600 transition-colors">
            {t.inicio}
          </Link>
          <Link href="/capabilities" className="text-sm hover:text-gray-600 transition-colors">
            {t.capacidades}
          </Link>
          <Link href="/outcomes" className="text-sm hover:text-gray-600 transition-colors">
            {t.resultados}
          </Link>
          <Link href="/about" className="text-sm hover:text-gray-600 transition-colors">
            {t.acerca}
          </Link>
          <Link href="/contact" className="text-sm hover:text-gray-600 transition-colors">
            {t.contacto}
          </Link>

          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 text-sm hover:text-gray-600 transition-colors cursor-pointer"
              type="button"
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium">{language.toUpperCase()}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-lg shadow-lg p-2 min-w-24 z-10">
                <button
                  onClick={() => {
                    setLanguage("es")
                    setLangOpen(false)
                  }}
                  type="button"
                  className={`block w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-100 cursor-pointer ${
                    language === "es" ? "font-bold text-black" : "text-gray-600"
                  }`}
                >
                  Español
                </button>
                <button
                  onClick={() => {
                    setLanguage("en")
                    setLangOpen(false)
                  }}
                  type="button"
                  className={`block w-full text-left px-3 py-2 text-sm rounded hover:bg-gray-100 cursor-pointer ${
                    language === "en" ? "font-bold text-black" : "text-gray-600"
                  }`}
                >
                  English
                </button>
              </div>
            )}
          </div>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-black text-white hover:bg-gray-900 rounded-lg text-sm transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden border-t bg-white p-4 space-y-3">
          <Link href="/" onClick={() => setOpen(false)} className="block text-sm">
            {t.inicio}
          </Link>
          <Link href="/capabilities" onClick={() => setOpen(false)} className="block text-sm">
            {t.capacidades}
          </Link>
          <Link href="/outcomes" onClick={() => setOpen(false)} className="block text-sm">
            {t.resultados}
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block text-sm">
            {t.acerca}
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block text-sm">
            {t.contacto}
          </Link>

          <div className="pt-3 border-t">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-sm font-medium mb-2 cursor-pointer hover:text-gray-600 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>

            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 text-sm font-medium mt-2 cursor-pointer"
              type="button"
            >
              <Globe className="w-4 h-4" />
              {language.toUpperCase()}
            </button>
            {langOpen && (
              <div className="space-y-2 ml-4">
                <button
                  onClick={() => {
                    setLanguage("es")
                    setLangOpen(false)
                    setOpen(false)
                  }}
                  type="button"
                  className={`block text-sm cursor-pointer ${language === "es" ? "font-bold" : "text-gray-600"}`}
                >
                  Español
                </button>
                <button
                  onClick={() => {
                    setLanguage("en")
                    setLangOpen(false)
                    setOpen(false)
                  }}
                  type="button"
                  className={`block text-sm cursor-pointer ${language === "en" ? "font-bold" : "text-gray-600"}`}
                >
                  English
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
