"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navigation() {
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
            {t("nav.home")}
          </Link>
          <Link href="/agents" className="hover:text-blue-600">
            {t("nav.agents")}
          </Link>
          <Link href="/systems" className="hover:text-blue-600">
            {t("nav.systems")}
          </Link>
          <Link href="/products" className="hover:text-blue-600">
            {t("nav.products")}
          </Link>
          <Link href="/clients" className="hover:text-blue-600">
            {t("nav.clients")}
          </Link>
          <Link href="/contacts" className="hover:text-blue-600">
            {t("nav.contact")}
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
            {t("nav.home")}
          </Link>
          <Link href="/agents" onClick={() => setOpen(false)} className="block">
            {t("nav.agents")}
          </Link>
          <Link href="/systems" onClick={() => setOpen(false)} className="block">
            {t("nav.systems")}
          </Link>
          <Link href="/products" onClick={() => setOpen(false)} className="block">
            {t("nav.products")}
          </Link>
          <Link href="/clients" onClick={() => setOpen(false)} className="block">
            {t("nav.clients")}
          </Link>
          <Link href="/contacts" onClick={() => setOpen(false)} className="block">
            {t("nav.contact")}
          </Link>
        </div>
      )}
    </nav>
  )
}
