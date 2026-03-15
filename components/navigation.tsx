'use client'

import Link from "next/link"
import Image from "next/image"
import { Menu, X, Globe } from "lucide-react"
import { useState } from "react"
import type { Locale } from "@/lib/get-locale"
import { ThemeToggle } from "@/components/theme-toggle"

interface NavigationProps {
  locale?: Locale
}

export default function Navigation({ locale = "es" }: NavigationProps) {
  const [open, setOpen] = useState(false)
  const isES = locale === "es"
  const otherLocale = isES ? "en" : "es"

  const href = (path: string) => `/${locale}${path}`
  const hrefLocale = (path: string) => `/${otherLocale}${path}`

  // Navigation labels
  const labels = {
    capabilities: isES ? "Capacidades" : "Capabilities",
    solutions: isES ? "Soluciones" : "Solutions",
    agentMatrix: "Agent Matrix",
    caseStudies: isES ? "Casos de Éxito" : "Case Studies",
    faq: isES ? "FAQ" : "FAQ",
    about: isES ? "Acerca de" : "About",
    contact: isES ? "Contactar" : "Contact",
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur border-b border-border">
      <div className="w-full max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href={href("/")} className="flex items-center flex-shrink-0">
          <Image src="/logo-n3uralia.png" alt="N3uralia" width={56} height={56} className="h-14 w-auto" priority />
        </Link>

        {/* Desktop Navigation - Spread Between Logo and Contact */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-1">
          <Link 
            href={href("/capabilities")} 
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {labels.capabilities}
          </Link>

          <Link 
            href={href("/solutions")} 
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {labels.solutions}
          </Link>

          <Link 
            href={href("/agent-matrix")} 
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {labels.agentMatrix}
          </Link>

          <Link 
            href={href("/case-studies")} 
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {labels.caseStudies}
          </Link>

          <Link 
            href={href("/faq")} 
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {labels.faq}
          </Link>

          <Link 
            href={href("/about")} 
            className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {labels.about}
          </Link>
        </div>

        {/* Right Controls: Contact + Language + Theme */}
        <div className="hidden md:flex gap-2 items-center flex-shrink-0">
          <Link
            href={href("/contact")}
            className="px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg text-sm font-medium transition-colors"
          >
            {labels.contact}
          </Link>

          <Link
            href={hrefLocale("/")}
            className="px-3 py-2 flex items-center gap-2 border border-primary/30 hover:border-primary/60 text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg text-sm font-medium transition-all"
            title={isES ? "Switch to English" : "Cambiar a Español"}
          >
            <Globe className="w-4 h-4" />
            <span>{isES ? "ES" : "EN"}</span>
          </Link>

          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground ml-auto" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="fixed top-20 left-0 right-0 md:hidden border-t border-border bg-background w-full z-40 px-4 p-4 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
          <Link 
            href={href("/capabilities")} 
            onClick={() => setOpen(false)} 
            className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {labels.capabilities}
          </Link>

          <Link 
            href={isES ? href("/soluciones") : href("/solutions")} 
            onClick={() => setOpen(false)} 
            className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {labels.solutions}
          </Link>

          <Link 
            href={href("/agent-matrix")} 
            onClick={() => setOpen(false)} 
            className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {labels.agentMatrix}
          </Link>

          <Link 
            href={href("/case-studies")} 
            onClick={() => setOpen(false)} 
            className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {labels.caseStudies}
          </Link>

          <Link 
            href={href("/faq")} 
            onClick={() => setOpen(false)} 
            className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {labels.faq}
          </Link>

          <Link 
            href={href("/about")} 
            onClick={() => setOpen(false)} 
            className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
          >
            {labels.about}
          </Link>

          <div className="pt-2 border-t border-border space-y-2">
            <Link 
              href={href("/contact")} 
              onClick={() => setOpen(false)} 
              className="block px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium text-center"
            >
              {labels.contact}
            </Link>
            <Link 
              href={hrefLocale("/")} 
              onClick={() => setOpen(false)} 
              className="block px-3 py-2 flex items-center justify-center gap-2 border border-primary/30 hover:border-primary/60 text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg text-sm font-medium transition-all"
            >
              <Globe className="w-4 h-4" />
              <span>{isES ? "EN" : "ES"}</span>
            </Link>
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
