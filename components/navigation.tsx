"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X, Globe, MessageCircle } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [language, setLanguage] = useState("es")

  const navContent = {
    es: {
      inicio: "Inicio",
      capacidades: "Capacidades",
      coordinacion: "Coordinación",
      livingAgents: "Living Agents",
      resultados: "Resultados",
      acerca: "Acerca de",
      contacto: "Contacto",
    },
    en: {
      inicio: "Home",
      capacidades: "Capabilities",
      coordinacion: "Coordination",
      livingAgents: "Living Agents",
      resultados: "Results",
      acerca: "About",
      contacto: "Contact",
    },
  }

  const t = navContent[language]
  const whatsappNumber = "56993826127"
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center h-16">
          <Image src="/logo-n3uralia.png" alt="N3uralia" width={64} height={64} className="h-16 w-auto" priority />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/capabilities" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {t.capacidades}
          </Link>
          <Link href="/coordination" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {t.coordinacion}
          </Link>
          <Link href="/living-agents" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {t.livingAgents}
          </Link>
          <Link href="/outcomes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {t.resultados}
          </Link>
          <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {t.acerca}
          </Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {t.contacto}
          </Link>

          <div className="relative hidden">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              type="button"
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium">{language.toUpperCase()}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-8 bg-card border border-border rounded-lg shadow-lg p-2 min-w-24 z-10">
                <button
                  onClick={() => {
                    setLanguage("es")
                    setLangOpen(false)
                  }}
                  type="button"
                  className={`block w-full text-left px-3 py-2 text-sm rounded hover:bg-muted cursor-pointer ${
                    language === "es" ? "font-bold text-foreground" : "text-muted-foreground"
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
                  className={`block w-full text-left px-3 py-2 text-sm rounded hover:bg-muted cursor-pointer ${
                    language === "en" ? "font-bold text-foreground" : "text-muted-foreground"
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
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg text-sm transition-colors font-medium"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

        {/* Mobile Navigation */}
        {open && (
          <div className="md:hidden border-t border-border bg-background p-4 space-y-3">
            <Link href="/capabilities" onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground">
              {t.capacidades}
            </Link>
            <Link href="/coordination" onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground">
              {t.coordinacion}
            </Link>
            <Link href="/living-agents" onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground">
              {t.livingAgents}
            </Link>
            <Link href="/outcomes" onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground">
              {t.resultados}
            </Link>
            <Link href="/about" onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground">
              {t.acerca}
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="block text-sm text-muted-foreground hover:text-foreground">
              {t.contacto}
            </Link>

          <div className="pt-3 border-t border-border">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 text-sm font-medium mb-2 cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>

            <button
              onClick={() => setLangOpen(!langOpen)}
              className="hidden flex items-center gap-2 text-sm font-medium mt-2 cursor-pointer text-foreground"
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
                  className={`block text-sm cursor-pointer ${language === "es" ? "font-bold text-foreground" : "text-muted-foreground"}`}
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
                  className={`block text-sm cursor-pointer ${language === "en" ? "font-bold text-foreground" : "text-muted-foreground"}`}
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
