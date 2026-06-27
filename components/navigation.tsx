'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import type { Locale } from "@/lib/get-locale"

interface NavigationProps {
  locale?: Locale
}

type NavItem = {
  href: string
  label: string
}

export default function Navigation({ locale = "es" }: NavigationProps) {
  const [open, setOpen] = useState(false)
  const isES = locale === "es"
  const href = (hash: string) => `/${locale}${hash}`

  const items: NavItem[] = [
    { href: href("#capabilities"), label: isES ? "Capacidades" : "Capabilities" },
    { href: href("#soluciones"), label: isES ? "Soluciones" : "Solutions" },
    { href: href("#casos"), label: isES ? "Casos" : "Cases" },
    { href: href("#contacto"), label: isES ? "Contacto" : "Contact" },
  ]

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={href("#top")} className="flex items-center gap-3">
          <Image
            src="/logo-n3uralia.png"
            alt="N3uralia"
            width={56}
            height={56}
            className="h-14 w-auto"
            priority
          />
          <div className="hidden sm:block">
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
              N3uralia
            </p>
            <p className="text-sm font-medium text-foreground">
              {isES ? "IA aplicada" : "Applied AI"}
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={href("#contacto")}
            className="ml-3 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {isES ? "Agendar diagnóstico" : "Book a diagnosis"}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 text-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border/70 bg-background px-4 pb-4 pt-3 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={href("#contacto")}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-2xl bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {isES ? "Agendar diagnóstico" : "Book a diagnosis"}
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  )
}
