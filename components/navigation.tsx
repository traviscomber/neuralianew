"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          N3uralia
        </Link>

        <div className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-blue-600">
            {language === "en" ? "Home" : "Inicio"}
          </Link>
          <Link href="/capabilities" className="hover:text-blue-600">
            {language === "en" ? "Capabilities" : "Capacidades"}
          </Link>
          <Link href="/outcomes" className="hover:text-blue-600">
            {language === "en" ? "Outcomes" : "Resultados"}
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            {language === "en" ? "About" : "Acerca de"}
          </Link>
          <Link href="/pricing" className="hover:text-blue-600">
            {language === "en" ? "Pricing" : "Precios"}
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            {language === "en" ? "Contact" : "Contacto"}
          </Link>
        </div>

        <Button variant="ghost" size="sm" onClick={() => setLanguage(language === "es" ? "en" : "es")}>
          {language === "es" ? "EN" : "ES"}
        </Button>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white p-4 space-y-4">
          <Link href="/" onClick={() => setOpen(false)} className="block">
            {language === "en" ? "Home" : "Inicio"}
          </Link>
          <Link href="/capabilities" onClick={() => setOpen(false)} className="block">
            {language === "en" ? "Capabilities" : "Capacidades"}
          </Link>
          <Link href="/outcomes" onClick={() => setOpen(false)} className="block">
            {language === "en" ? "Outcomes" : "Resultados"}
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block">
            {language === "en" ? "About" : "Acerca de"}
          </Link>
          <Link href="/pricing" onClick={() => setOpen(false)} className="block">
            {language === "en" ? "Pricing" : "Precios"}
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block">
            {language === "en" ? "Contact" : "Contacto"}
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navigation
