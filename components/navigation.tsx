"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [open, setOpen] = useState(false)

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

          <Link 
            href="/soluciones" 
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            Soluciones
          </Link>

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

          {/* Mobile Solutions Link */}
          <Link 
            href="/soluciones" 
            onClick={() => setOpen(false)} 
            className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            Soluciones
          </Link>

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
