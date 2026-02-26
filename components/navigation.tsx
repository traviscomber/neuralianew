'use client'

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import type { Locale } from "@/lib/get-locale"

interface NavigationProps {
  locale?: Locale
}

export default function Navigation({ locale = "es" }: NavigationProps) {
  const [open, setOpen] = useState(false)
  const isES = locale === "es"

  const href = (path: string) => `/${locale}${path}`

  // Navigation labels
  const labels = {
    capabilities: isES ? "Capacidades" : "Capabilities",
    solutions: isES ? "Soluciones" : "Solutions",
    caseStudies: isES ? "Casos de Éxito" : "Case Studies",
    platform: isES ? "Plataforma" : "Platform",
    labs: "Labs",
    about: isES ? "Acerca de" : "About",
    contact: isES ? "Contactar" : "Contact",
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href={href("/")} className="flex items-center">
          <Image src="/logo-n3uralia.png" alt="N3uralia" width={56} height={56} className="h-14 w-auto" priority />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-1 items-center">
          <Link 
            href={href("/capabilities")} 
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {labels.capabilities}
          </Link>

          <Link 
            href={href("/soluciones")} 
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {labels.solutions}
          </Link>

          <Link 
            href={href("/case-studies")} 
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {labels.caseStudies}
          </Link>

          <Link 
            href={href("/platform")} 
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {labels.platform}
          </Link>

          <Link 
            href={href("/labs")} 
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {labels.labs}
          </Link>

          <Link 
            href={href("/about")} 
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {labels.about}
          </Link>

          {/* Contact Button */}
          <Link
            href={href("/contact")}
            className="ml-4 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg text-sm font-medium transition-colors"
          >
            {labels.contact}
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
            href={href("/capabilities")} 
            onClick={() => setOpen(false)} 
            className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {labels.capabilities}
          </Link>

          <Link 
            href={href("/soluciones")} 
            onClick={() => setOpen(false)} 
            className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {labels.solutions}
          </Link>

          <Link 
            href={href("/case-studies")} 
            onClick={() => setOpen(false)} 
            className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {labels.caseStudies}
          </Link>

          <Link 
            href={href("/platform")} 
            onClick={() => setOpen(false)} 
            className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {labels.platform}
          </Link>

          <Link 
            href={href("/labs")} 
            onClick={() => setOpen(false)} 
            className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {labels.labs}
          </Link>

          <Link 
            href={href("/about")} 
            onClick={() => setOpen(false)} 
            className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {labels.about}
          </Link>

          <div className="pt-2 border-t border-border">
            <Link 
              href={href("/contact")} 
              onClick={() => setOpen(false)} 
              className="block px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium text-center"
            >
              {labels.contact}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
