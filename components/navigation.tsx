"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X, Globe, MessageCircle } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [language, setLanguage] = useState("es")

  const navContent = {
    es: {
      inicio: "Inicio",
      capacidades: "Capacidades",
      coordinacion: "Coordinación",
      livingAgents: "Living Agents",
      sistemasProduccion: "Sistemas en Producción",
      soluciones: "Soluciones",
      resultados: "Resultados",
      acerca: "Acerca de",
      contacto: "Contacto",
      paraEmpresas: "Para Empresas",
      paraStartups: "Para Startups",
      paraDesarrolladores: "Para Desarrolladores",
      constellationDemo: "Demostración Constelación", // Added for mobile submenu
    },
    en: {
      inicio: "Home",
      capacidades: "Capabilities",
      coordinacion: "Coordination",
      livingAgents: "Living Agents",
      sistemasProduccion: "Production Systems",
      soluciones: "Solutions",
      resultados: "Results",
      acerca: "About",
      contacto: "Contact",
      paraEmpresas: "For Enterprise",
      paraStartups: "For Startups",
      paraDesarrolladores: "For Developers",
      constellationDemo: "Constellation Demo", // Added for mobile submenu
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
        <div className="hidden md:flex gap-1 items-center">
          <Link 
            href="/capabilities" 
            className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {t.capacidades}
          </Link>
          
          {/* Offerings Group */}
          <div className="flex gap-0 items-center border-l border-r border-border/30 px-2 mx-2">
            <Link 
              href="/living-agents" 
              className="px-3 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-all"
            >
              {t.livingAgents}
            </Link>

            <Link 
              href="/studies/production-grade-agentic-systems" 
              className="px-3 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-all"
            >
              {t.sistemasProduccion}
            </Link>
          </div>
          
          {/* Solutions Dropdown */}
          <div className="relative">
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer"
              type="button"
            >
              {t.soluciones}
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            {solutionsOpen && (
              <div className="absolute top-12 left-0 bg-card border border-border rounded-lg shadow-xl p-2 min-w-64 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="text-xs uppercase tracking-wider text-muted-foreground px-3 py-2 font-semibold">Dirigido a:</div>
                <Link
                  href="/para-empresas"
                  onClick={() => setSolutionsOpen(false)}
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors"
                >
                  {t.paraEmpresas}
                </Link>
                <Link
                  href="/para-startups"
                  onClick={() => setSolutionsOpen(false)}
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors"
                >
                  {t.paraStartups}
                </Link>
                <Link
                  href="/para-desarrolladores"
                  onClick={() => setSolutionsOpen(false)}
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors"
                >
                  {t.paraDesarrolladores}
                </Link>
              </div>
            )}
          </div>
          
          <Link 
            href="/outcomes" 
            className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {t.resultados}
          </Link>
          <Link 
            href="/about" 
            className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {t.acerca}
          </Link>
          <Link 
            href="/contact" 
            className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
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
          <div className="md:hidden border-t border-border bg-background p-4 space-y-2 max-h-[calc(100vh-6rem)] overflow-y-auto">
            <Link 
              href="/capabilities" 
              onClick={() => setOpen(false)} 
              className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
            >
              {t.capacidades}
            </Link>

            {/* Offerings Group - Mobile */}
            <div className="my-1 py-2 border-y border-border/30">
              <Link 
                href="/living-agents" 
                onClick={() => setOpen(false)} 
                className="block px-3 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-all"
              >
                {t.livingAgents}
              </Link>

              <Link 
                href="/studies/production-grade-agentic-systems" 
                onClick={() => setOpen(false)} 
                className="block px-3 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-all"
              >
                {t.sistemasProduccion}
              </Link>
            </div>
            
            {/* Mobile Solutions Submenu */}
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg flex items-center justify-between transition-all"
              type="button"
            >
              {t.soluciones}
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            {solutionsOpen && (
              <div className="pl-6 space-y-1.5 border-l-2 border-primary/30">
                <Link 
                  href="/para-empresas" 
                  onClick={() => { setOpen(false); setSolutionsOpen(false) }} 
                  className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-all"
                >
                  {t.paraEmpresas}
                </Link>
                <Link 
                  href="/para-startups" 
                  onClick={() => { setOpen(false); setSolutionsOpen(false) }} 
                  className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-all"
                >
                  {t.paraStartups}
                </Link>
                <Link 
                  href="/para-desarrolladores" 
                  onClick={() => { setOpen(false); setSolutionsOpen(false) }} 
                  className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-all"
                >
                  {t.paraDesarrolladores}
                </Link>
              </div>
            )}
            
            <Link 
              href="/outcomes" 
              onClick={() => setOpen(false)} 
              className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
            >
              {t.resultados}
            </Link>
            <Link 
              href="/about" 
              onClick={() => setOpen(false)} 
              className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
            >
              {t.acerca}
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setOpen(false)} 
              className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
            >
              {t.contacto}
            </Link>

            <div className="pt-3 border-t border-border space-y-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>

              <button
                onClick={() => setLangOpen(!langOpen)}
                className="w-full text-left flex items-center justify-between text-sm font-medium px-3 py-2 text-foreground hover:bg-muted/50 rounded-lg transition-all"
                type="button"
              >
                <span className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  {language.toUpperCase()}
                </span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              {langOpen && (
                <div className="space-y-1.5 pl-6 border-l-2 border-muted">
                  <button
                    onClick={() => {
                      setLanguage("es")
                      setLangOpen(false)
                      setOpen(false)
                    }}
                    type="button"
                    className={`block px-2 py-1.5 text-sm transition-all ${language === "es" ? "font-bold text-foreground" : "text-muted-foreground hover:text-foreground"}`}
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
                    className={`block px-2 py-1.5 text-sm transition-all ${language === "en" ? "font-bold text-foreground" : "text-muted-foreground hover:text-foreground"}`}
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
