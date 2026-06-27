"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

type Locale = "es" | "en"

function getLocaleFromPath(pathname: string | null): Locale {
  if (pathname?.startsWith("/en")) {
    return "en"
  }
  return "es"
}

export function Footer() {
  const pathname = usePathname()
  const locale = getLocaleFromPath(pathname)
  const isES = locale === "es"
  const href = (hash: string) => `/${locale}${hash}`

  return (
    <footer className="border-t border-border bg-background px-4 py-14 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">N3uralia</p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              {isES
                ? "Ingeniería de IA para operaciones reales en Chile y LATAM."
                : "AI engineering for real operations in Chile and LATAM."}
            </p>
            <div className="mt-4 space-y-1 text-sm text-muted-foreground">
              <p>{isES ? "Base: Santiago, Chile" : "Based in Santiago, Chile"}</p>
              <p>{isES ? "Cobertura: Chile y LATAM" : "Coverage: Chile and LATAM"}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
              {isES ? "Secciones" : "Sections"}
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href={href("#capabilities")} className="transition-colors hover:text-foreground">
                  {isES ? "Capacidades" : "Capabilities"}
                </Link>
              </li>
              <li>
                <Link href={href("#soluciones")} className="transition-colors hover:text-foreground">
                  {isES ? "Soluciones" : "Solutions"}
                </Link>
              </li>
              <li>
                <Link href={href("#casos")} className="transition-colors hover:text-foreground">
                  {isES ? "Casos" : "Cases"}
                </Link>
              </li>
              <li>
                <Link href={href("#contacto")} className="transition-colors hover:text-foreground">
                  {isES ? "Contacto" : "Contact"}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
              {isES ? "Contacto" : "Contact"}
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:info@n3uralia.com" className="transition-colors hover:text-foreground">
                  info@n3uralia.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/56993826127"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  WhatsApp: +56 9 9382 6127
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/n3uralia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
          <p>
            {isES
              ? `© ${new Date().getFullYear()} N3uralia. Todos los derechos reservados.`
              : `© ${new Date().getFullYear()} N3uralia. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  )
}