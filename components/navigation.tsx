"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [open, setOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo-n3uralia.png" alt="N3uralia" width={56} height={56} className="h-14 w-auto" priority />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-1 items-center">
          <Link 
            href="/capabilities" 
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            Capacidades
          </Link>

          {/* Solutions & Automation - Merged Dropdown */}
          <div className="relative">
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all flex items-center gap-1.5"
              type="button"
            >
              Soluciones
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
            </button>
            {solutionsOpen && (
              <div className="absolute top-12 left-0 bg-card border border-border rounded-lg shadow-xl p-3 min-w-56 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                {/* By Industry */}
                <div className="mb-3 pb-3 border-b border-border/50">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide px-2 mb-2">Por Industria</p>
                  <Link href="/soluciones" onClick={() => setSolutionsOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded transition-colors">
                    Ver Todas las Industrias
                  </Link>
                  <Link href="/retail" onClick={() => setSolutionsOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded transition-colors">
                    Retail & E-commerce
                  </Link>
                  <Link href="/manufactura" onClick={() => setSolutionsOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded transition-colors">
                    Manufactura
                  </Link>
                  <Link href="/finanzas" onClick={() => setSolutionsOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded transition-colors">
                    Servicios Financieros
                  </Link>
                </div>

                {/* Use Cases */}
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide px-2 mb-2">Casos de Uso</p>
                  <Link href="/automatizacion-ventas" onClick={() => setSolutionsOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded transition-colors">
                    Ventas & Leads
                  </Link>
                  <Link href="/integraciones-legacy" onClick={() => setSolutionsOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded transition-colors">
                    Integraciones Legacy
                  </Link>
                  <Link href="/operaciones-24-7" onClick={() => setSolutionsOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded transition-colors">
                    Operaciones 24/7
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link 
            href="/case-studies" 
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            Casos de Éxito
          </Link>

          <Link 
            href="/about" 
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            Acerca de
          </Link>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="ml-4 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg text-sm font-medium transition-colors"
          >
            Contactar
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden border-t border-border bg-background p-4 space-y-2">
          <Link 
            href="/capabilities" 
            onClick={() => setOpen(false)} 
            className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            Capacidades
          </Link>

          {/* Mobile Solutions Button */}
          <button
            onClick={() => setSolutionsOpen(!solutionsOpen)}
            className="w-full text-left px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg flex items-center justify-between transition-all"
            type="button"
          >
            Soluciones
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
          </button>
          {solutionsOpen && (
            <div className="pl-6 space-y-1.5 border-l-2 border-primary/30">
              <Link 
                href="/soluciones" 
                onClick={() => { setOpen(false); setSolutionsOpen(false) }} 
                className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-all"
              >
                Ver Todas
              </Link>
              <Link 
                href="/retail" 
                onClick={() => { setOpen(false); setSolutionsOpen(false) }} 
                className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-all"
              >
                Retail & E-commerce
              </Link>
              <Link 
                href="/manufactura" 
                onClick={() => { setOpen(false); setSolutionsOpen(false) }} 
                className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-all"
              >
                Manufactura
              </Link>
              <Link 
                href="/finanzas" 
                onClick={() => { setOpen(false); setSolutionsOpen(false) }} 
                className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-all"
              >
                Servicios Financieros
              </Link>
              <Link 
                href="/automatizacion-ventas" 
                onClick={() => { setOpen(false); setSolutionsOpen(false) }} 
                className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-all"
              >
                Ventas & Leads
              </Link>
              <Link 
                href="/integraciones-legacy" 
                onClick={() => { setOpen(false); setSolutionsOpen(false) }} 
                className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-all"
              >
                Integraciones Legacy
              </Link>
              <Link 
                href="/operaciones-24-7" 
                onClick={() => { setOpen(false); setSolutionsOpen(false) }} 
                className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-all"
              >
                Operaciones 24/7
              </Link>
            </div>
          )}

          <Link 
            href="/case-studies" 
            onClick={() => setOpen(false)} 
            className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            Casos de Éxito
          </Link>

          <Link 
            href="/about" 
            onClick={() => setOpen(false)} 
            className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            Acerca de
          </Link>

          <div className="pt-2 border-t border-border">
            <Link 
              href="/contact" 
              onClick={() => setOpen(false)} 
              className="block px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium text-center"
            >
              Contactar
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
