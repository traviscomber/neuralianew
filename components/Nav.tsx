'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { buildLocalizedPath, type Locale } from "@/lib/get-locale"

interface NavigationProps {
  locale?: Locale
}

const NAV_COPY = {
  es: {
    home: "Inicio",
    solutions: "Soluciones",
    cases: "Casos",
    contact: "Contacto",
    cta: "Agendar diagnostico",
    language: "Idioma",
  },
  en: {
    home: "Home",
    solutions: "Solutions",
    cases: "Cases",
    contact: "Contact",
    cta: "Book diagnosis",
    language: "Language",
  },
} as const

export function Nav({ locale = "en" }: NavigationProps) {
  const pathname = usePathname() || `/${locale}`
  const copy = NAV_COPY[locale]
  const currentPath = pathname.startsWith(`/${locale}`) ? pathname : `/${locale}`

  const items = [
    { href: `/${locale}`, label: copy.home },
    { href: `/${locale}/soluciones`, label: copy.solutions },
    { href: `/${locale}/case-studies`, label: copy.cases },
    { href: `/${locale}/contact`, label: copy.contact },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-[#d8e5e2] bg-white/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-3 text-[#173634] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#789b96]"
          aria-label="N3uralia"
        >
          <span className="grid h-11 w-11 place-items-center rounded-full border border-[#d8e5e2] bg-[#173634]">
            <Image
              src="/n3uralia-brand/n3uralia-mark.png"
              alt=""
              width={984}
              height={943}
              className="h-6 w-6 object-contain"
            />
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-[#526e69]">N3uralia</span>
        </Link>

        <nav className="flex flex-1 flex-wrap items-center gap-2 text-sm font-medium text-[#526e69] lg:justify-center">
          {items.map((item) => {
            const active = currentPath === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={[
                  "rounded-full px-4 py-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#789b96]",
                  active
                    ? "bg-[#173634] text-white"
                    : "bg-transparent text-[#526e69] hover:bg-[#eef5f2] hover:text-[#173634]",
                ].join(" ")}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden text-xs font-semibold uppercase tracking-[0.24em] text-[#8aa39d] xl:block">
            {copy.language}
          </span>
          <div className="inline-flex rounded-full border border-[#d8e5e2] bg-white p-1 shadow-sm">
            <Link
              href={buildLocalizedPath(currentPath, "es")}
              className={[
                "rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors",
                locale === "es" ? "bg-[#173634] text-white" : "text-[#526e69] hover:text-[#173634]",
              ].join(" ")}
              aria-current={locale === "es" ? "true" : undefined}
            >
              ES
            </Link>
            <Link
              href={buildLocalizedPath(currentPath, "en")}
              className={[
                "rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors",
                locale === "en" ? "bg-[#173634] text-white" : "text-[#526e69] hover:text-[#173634]",
              ].join(" ")}
              aria-current={locale === "en" ? "true" : undefined}
            >
              EN
            </Link>
          </div>
          <Link
            href={`/${locale}/contact`}
            className="hidden items-center gap-2 rounded-full bg-[#8fb2aa] px-4 py-2 text-sm font-semibold text-[#06100f] transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            {copy.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  )
}
