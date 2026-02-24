"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4">
        {/* Main navbar */}
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image src="/logo-n3uralia.png" alt="N3uralia" width={48} height={48} className="h-12 w-auto" priority />
          </Link>

          {/* Desktop Navigation - Simplified */}
          <div className="hidden md:flex items-center gap-1">
            {/* Capacidades */}
            <Link 
              href="/capabilities" 
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/40 transition-all"
            >
              Capacidades
            </Link>

            {/* Soluciones - Mega Menu */}
            <div className="relative group">
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/40 transition-all flex items-center gap-1.5"
                type="button"
              >
                Soluciones
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {solutionsOpen && (
                <div className="absolute top-12 left-0 bg-card border border-border rounded-xl shadow-lg p-6 min-w-72 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Por Industria</h3>
                      <div className="space-y-1.5">
                        <Link href="/automatizacion-para-empresas" onClick={() => setSolutionsOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded transition-colors">
                          Automatización General
                        </Link>
                        <Link href="/soluciones" onClick={() => setSolutionsOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded transition-colors">
                          Integraciones Legacy
                        </Link>
                      </div>
                    </div>
                    <div className="border-t border-border pt-3">
                      <h3 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Recursos</h3>
                      <div className="space-y-1.5">
                        <Link href="/case-studies" onClick={() => setSolutionsOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded transition-colors">
                          Casos de Éxito
                        </Link>
                        <Link href="/blog" onClick={() => setSolutionsOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded transition-colors">
                          Blog & Guías
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Cómo Trabajamos */}
            <Link 
              href="/como-trabajamos" 
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/40 transition-all"
            >
              Metodología
            </Link>

            {/* Acerca de */}
            <Link 
              href="/about" 
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/40 transition-all"
            >
              Acerca de
            </Link>
          </div>

          {/* CTA - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/56993826127"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg text-sm font-semibold transition-all hover:shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              Contactar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground p-2 hover:bg-muted/50 rounded-lg transition-colors" 
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/80 backdrop-blur-sm py-4 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <Link 
              href="/capabilities" 
              onClick={() => setMobileOpen(false)} 
              className="block px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
            >
              Capacidades
            </Link>

            {/* Mobile Soluciones - Simplified */}
            <div>
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="w-full text-left px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg flex items-center justify-between transition-all"
                type="button"
              >
                Soluciones
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {solutionsOpen && (
                <div className="pl-4 mt-2 space-y-1.5 border-l-2 border-primary/30">
                  <Link 
                    href="/automatizacion-para-empresas" 
                    onClick={() => { setMobileOpen(false); setSolutionsOpen(false) }} 
                    className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-all"
                  >
                    Automatización
                  </Link>
                  <Link 
                    href="/soluciones" 
                    onClick={() => { setMobileOpen(false); setSolutionsOpen(false) }} 
                    className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-all"
                  >
                    Integraciones
                  </Link>
                  <Link 
                    href="/case-studies" 
                    onClick={() => { setMobileOpen(false); setSolutionsOpen(false) }} 
                    className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-all"
                  >
                    Casos de Éxito
                  </Link>
                  <Link 
                    href="/blog" 
                    onClick={() => { setMobileOpen(false); setSolutionsOpen(false) }} 
                    className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-all"
                  >
                    Blog
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/como-trabajamos" 
              onClick={() => setMobileOpen(false)} 
              className="block px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
            >
              Metodología
            </Link>

            <Link 
              href="/about" 
              onClick={() => setMobileOpen(false)} 
              className="block px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
            >
              Acerca de
            </Link>

            <a
              href="https://wa.me/56993826127"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-primary mt-4 border-t border-border/50 pt-4"
            >
              <MessageCircle className="w-4 h-4" />
              Contactar
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
