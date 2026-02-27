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
    caseStudies: isES ? "Casos de Éxito" : "Case Studies",
    about: isES ? "Acerca de" : "About",
    contact: isES ? "Contactar" : "Contact",
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur border-b border-border">
      <div className="w-full max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Left Side: Logo + Desktop Navigation */}
        <div className="flex items-center gap-8 flex-1">
          <Link href={href("/")} className="flex items-center flex-shrink-0">
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
              href={href("/about")} 
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
            >
              {labels.about}
            </Link>
          </div>
        </div>

        {/* Right Side: Contact Button + Language + Theme */}
        <div className="hidden md:flex gap-2 items-center ml-auto">
          {/* Contact Button */}
          <Link
            href={href("/contact")}
            className="px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg text-sm font-medium transition-colors"
          >
            {labels.contact}
          </Link>

          {/* Language Toggle */}
          <Link
            href={hrefLocale("/")}
            className="px-3 py-2 flex items-center gap-2 border border-primary/30 hover:border-primary/60 text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg text-sm font-medium transition-all"
            title={isES ? "Switch to English" : "Cambiar a Español"}
          >
            <Globe className="w-4 h-4" />
            <span>{isES ? "ES" : "EN"}</span>
          </Link>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-foreground ml-auto" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden border-t border-border bg-background w-full max-w-7xl mx-auto px-4 p-4 space-y-2">
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
