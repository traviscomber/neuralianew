"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X, MessageCircle } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [open, setOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [learningOpen, setLearningOpen] = useState(false)

  const navItems = {
    capacidades: "Capacidades",
    livingAgents: "Living Agents",
    sistemasProduccion: "Sistemas en Producción",
    soluciones: "Soluciones",
    centroAprendizaje: "Centro de Aprendizaje",
    acerca: "Acerca de",
    nuestroEnfoque: "Nuestro Enfoque",
    paraEmpresas: "Para Empresas",
    paraStartups: "Para Startups",
    paraDesarrolladores: "Para Desarrolladores",
    conceptos: "Conceptos Fundamentales",
    guiasTecnicas: "Guías Técnicas",
    recursos: "Recursos",
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center h-16">
          <Image src="/logo-n3uralia.png" alt="N3uralia" width={64} height={64} className="h-16 w-auto" priority />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-2 items-center">
          {/* Tier 1: Core Products */}
          <Link 
            href="/capabilities" 
            className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {navItems.capacidades}
          </Link>
          
          {/* Tier 1: Flagship Offerings */}
          <div className="flex gap-0 items-center border-l border-r border-border/30 px-2 mx-1">
            <Link 
              href="/living-agents" 
              className="px-3 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-all"
            >
              {navItems.livingAgents}
            </Link>
            <Link 
              href="/studies/production-grade-agentic-systems" 
              className="px-3 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-all"
            >
              {navItems.sistemasProduccion}
            </Link>
          </div>
          
          {/* Tier 2: Solutions Dropdown */}
          <div className="relative">
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all flex items-center gap-1.5"
              type="button"
            >
              {navItems.soluciones}
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
                <Link
                  href="/soluciones"
                  onClick={() => setSolutionsOpen(false)}
                  className="block px-3 py-2 text-sm font-semibold text-primary hover:bg-muted rounded transition-colors mb-2 border-b border-border pb-2"
                >
                  Ver Todas las Soluciones
                </Link>
                <div className="text-xs uppercase tracking-wider text-muted-foreground px-3 py-2 font-semibold">Por Segmento:</div>
                <Link
                  href="/soluciones#para-empresas"
                  onClick={() => setSolutionsOpen(false)}
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors"
                >
                  {navItems.paraEmpresas}
                </Link>
                <Link
                  href="/soluciones#para-startups"
                  onClick={() => setSolutionsOpen(false)}
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors"
                >
                  {navItems.paraStartups}
                </Link>
                <Link
                  href="/soluciones#para-desarrolladores"
                  onClick={() => setSolutionsOpen(false)}
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors"
                >
                  {navItems.paraDesarrolladores}
                </Link>
              </div>
            )}
          </div>

          {/* Tier 3: Learning Hub Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLearningOpen(!learningOpen)}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all flex items-center gap-1.5"
              type="button"
            >
              {navItems.centroAprendizaje}
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${learningOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            {learningOpen && (
              <div className="absolute top-12 left-0 bg-card border border-border rounded-lg shadow-xl p-2 min-w-64 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <Link
                  href="/learning-hub"
                  onClick={() => setLearningOpen(false)}
                  className="block px-3 py-2 text-sm font-semibold text-primary hover:bg-muted rounded transition-colors mb-2 border-b border-border pb-2"
                >
                  {navItems.centroAprendizaje}
                </Link>
                <Link
                  href="/studies"
                  onClick={() => setLearningOpen(false)}
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors"
                >
                  {navItems.conceptos}
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setLearningOpen(false)}
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors"
                >
                  {navItems.guiasTecnicas}
                </Link>
                <Link
                  href="/outcomes"
                  onClick={() => setLearningOpen(false)}
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors"
                >
                  {navItems.recursos}
                </Link>
              </div>
            )}
          </div>

          {/* Tier 4: Company Info */}
          <Link 
            href="/about" 
            className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {navItems.acerca}
          </Link>
          <Link 
            href="/como-trabajamos" 
            className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {navItems.nuestroEnfoque}
          </Link>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/56993826127"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg text-sm transition-colors font-medium"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

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
            {navItems.capacidades}
          </Link>

          {/* Offerings Group - Mobile */}
          <div className="my-1 py-2 border-y border-border/30">
            <Link 
              href="/living-agents" 
              onClick={() => setOpen(false)} 
              className="block px-3 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-all"
            >
              {navItems.livingAgents}
            </Link>
            <Link 
              href="/studies/production-grade-agentic-systems" 
              onClick={() => setOpen(false)} 
              className="block px-3 py-2 text-sm font-medium text-primary hover:bg-primary/10 rounded-lg transition-all"
            >
              {navItems.sistemasProduccion}
            </Link>
          </div>
          
          {/* Mobile Solutions Submenu */}
          <button
            onClick={() => setSolutionsOpen(!solutionsOpen)}
            className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg flex items-center justify-between transition-all"
            type="button"
          >
            {navItems.soluciones}
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
                {navItems.paraEmpresas}
              </Link>
              <Link 
                href="/para-startups" 
                onClick={() => { setOpen(false); setSolutionsOpen(false) }} 
                className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-all"
              >
                {navItems.paraStartups}
              </Link>
              <Link 
                href="/para-desarrolladores" 
                onClick={() => { setOpen(false); setSolutionsOpen(false) }} 
                className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-all"
              >
                {navItems.paraDesarrolladores}
              </Link>
            </div>
          )}

          {/* Mobile Learning Hub Submenu */}
          <button
            onClick={() => setLearningOpen(!learningOpen)}
            className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg flex items-center justify-between transition-all"
            type="button"
          >
            {navItems.centroAprendizaje}
            <svg 
              className={`w-4 h-4 transition-transform duration-200 ${learningOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
          {learningOpen && (
            <div className="pl-6 space-y-1.5 border-l-2 border-primary/30">
              <Link 
                href="/learning-hub" 
                onClick={() => { setOpen(false); setLearningOpen(false) }} 
                className="block px-2 py-1.5 text-sm font-semibold text-primary transition-all"
              >
                {navItems.centroAprendizaje}
              </Link>
              <Link 
                href="/studies" 
                onClick={() => { setOpen(false); setLearningOpen(false) }} 
                className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-all"
              >
                {navItems.conceptos}
              </Link>
              <Link 
                href="/blog" 
                onClick={() => { setOpen(false); setLearningOpen(false) }} 
                className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-all"
              >
                {navItems.guiasTecnicas}
              </Link>
              <Link 
                href="/outcomes" 
                onClick={() => { setOpen(false); setLearningOpen(false) }} 
                className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-all"
              >
                {navItems.recursos}
              </Link>
            </div>
          )}

          <Link 
            href="/about" 
            onClick={() => setOpen(false)} 
            className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {navItems.acerca}
          </Link>
          <Link 
            href="/como-trabajamos" 
            onClick={() => setOpen(false)} 
            className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {navItems.nuestroEnfoque}
          </Link>

          <a
            href="https://wa.me/56993826127"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 px-3 py-2 text-sm text-primary font-medium"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navigation
