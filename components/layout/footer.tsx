"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { BrandMark, BrandWordmark } from "@/components/brand"

type Locale = "es" | "en"

function getLocaleFromPath(pathname: string | null): Locale {
  if (pathname?.startsWith("/en")) return "en"
  return "es"
}

export function Footer() {
  const pathname = usePathname()
  const locale = getLocaleFromPath(pathname)
  const isES = locale === "es"
  const homeHref = (hash: string) => `/${locale}${hash}`
  const pageHref = (path: string) => `/${locale}${path}`

  const landingLinks = [
    { href: homeHref("#flow"), label: isES ? "Cómo funciona" : "How it works" },
    { href: homeHref("#role-map"), label: isES ? "Para quién" : "For whom" },
    { href: homeHref("#platform-preview"), label: isES ? "Plataforma" : "Platform" },
    { href: homeHref("#solutions"), label: isES ? "Soluciones" : "Solutions" },
    { href: homeHref("#case-studies"), label: isES ? "Proyectos" : "Projects" },
    { href: homeHref("#how-we-work"), label: isES ? "Método" : "Method" },
  ]

  const resourceLinks = [
    { href: pageHref("/soluciones"), label: isES ? "Soluciones por sector" : "Solutions by sector" },
    { href: pageHref("/case-studies"), label: isES ? "Casos de uso" : "Case studies" },
    { href: pageHref("/blog"), label: isES ? "Biblioteca" : "Library" },
    { href: pageHref("/contact"), label: isES ? "Contacto" : "Contact" },
  ]

  return (
    <footer className="border-t border-[#d8e5e2] bg-[#f7faf8] px-5 py-14 text-[#243331] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-[#d8e5e2] bg-white/75 p-6 shadow-[0_34px_110px_-80px_#173634] backdrop-blur md:p-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
            <div>
              <Link href={homeHref("#top")} className="inline-flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#789b96]" aria-label="N3uralia">
                <BrandMark className="h-11 w-11 rounded-2xl text-[#789b96]" />
                <BrandWordmark className="text-2xl text-[#789b96]" />
              </Link>
              <p className="mt-5 max-w-sm text-sm leading-7 text-[#65706d]">
                {isES
                  ? "Software e IA para operaciones reales: sistemas que conectan datos, personas y decisiones sin convertir tu operación en otra maqueta."
                  : "Software and AI for real operations: systems that connect data, people, and decisions without turning your operation into another mockup."}
              </p>
              <div className="mt-5 inline-flex rounded-full border border-[#d8e5e2] bg-[#eef5f2] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#789b96]">
                Santiago, Chile · LATAM
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">
                {isES ? "Inicio" : "Landing"}
              </p>
              <ul className="mt-5 space-y-3 text-sm text-[#65706d]">
                {landingLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition-colors hover:text-[#173634] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#789b96]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">
                {isES ? "Explorar" : "Explore"}
              </p>
              <ul className="mt-5 space-y-3 text-sm text-[#65706d]">
                {resourceLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition-colors hover:text-[#173634] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#789b96]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.5rem] border border-[#d8e5e2] bg-[#fbfbfa] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">
                {isES ? "Contacto" : "Contact"}
              </p>
              <ul className="mt-5 space-y-3 text-sm text-[#65706d]">
                <li><a href="mailto:info@n3uralia.com" className="transition-colors hover:text-[#173634] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#789b96]">info@n3uralia.com</a></li>
                <li><a href="https://wa.me/56993826127" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#173634] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#789b96]">WhatsApp: +56 9 9382 6127</a></li>
                <li><a href="https://linkedin.com/company/n3uralia" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#173634] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#789b96]">LinkedIn</a></li>
              </ul>
              <Link href={pageHref("/contact")} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#173634] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#244946] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789b96]">
                {isES ? "Agendar diagnóstico" : "Book diagnosis"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-sm text-[#8a9693] md:flex-row md:items-center md:justify-between">
          <p>{isES ? `© ${new Date().getFullYear()} N3uralia. Todos los derechos reservados.` : `© ${new Date().getFullYear()} N3uralia. All rights reserved.`}</p>
          <p>{isES ? "Diseñado para operaciones con datos, procesos y presión real." : "Designed for operations with data, process, and real pressure."}</p>
        </div>
      </div>
    </footer>
  )
}
