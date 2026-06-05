"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { EmailContactDialog } from "@/components/contact/email-contact-dialog"

type Locale = "es" | "en"

function getLocaleFromPath(pathname: string | null): Locale {
  if (pathname?.startsWith("/en")) {
    return "en"
  }
  return "es"
}

export function Footer() {
  const [emailDialogOpen, setEmailDialogOpen] = useState(false)
  const pathname = usePathname()
  const locale = getLocaleFromPath(pathname)
  const isES = locale === "es"
  const href = (path: string) => `/${locale}${path}`

  return (
    <footer className="bg-background text-foreground py-12 border-t border-border px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <p className="font-bold mb-2 text-foreground">N3uralia</p>
            <p className="text-xs text-primary font-medium mb-3">
              {isES ? "Ingenieria de IA para empresas" : "AI engineering for teams"}
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              {isES
                ? "Sistemas de IA, workflows agenticos y software listo para produccion en Chile y LATAM."
                : "Production AI systems, agentic workflows, and software automation for teams in Chile and LATAM."}
            </p>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>{isES ? "Base: Santiago, Chile" : "Based in Santiago, Chile"}</p>
              <p>{isES ? "Cobertura: Chile y LATAM" : "Coverage: Chile and LATAM"}</p>
              <p>{isES ? "Especialidad: IA aplicada y software" : "Focus: applied AI and software"}</p>
            </div>
          </div>

          <div>
            <p className="font-bold mb-4 text-foreground">{isES ? "Empresa" : "Company"}</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={href("/about")} className="hover:text-foreground transition-colors">
                  {isES ? "Acerca de" : "About"}
                </Link>
              </li>
              <li>
                <Link href={href("/como-trabajamos")} className="hover:text-foreground transition-colors">
                  {isES ? "Como trabajamos" : "How we work"}
                </Link>
              </li>
              <li>
                <Link href={href("/faq")} className="hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href={href("/case-studies")} className="hover:text-foreground transition-colors">
                  {isES ? "Casos de exito" : "Case studies"}
                </Link>
              </li>
              <li>
                <Link href={href("/contact")} className="hover:text-foreground transition-colors">
                  {isES ? "Contacto" : "Contact"}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold mb-4 text-foreground">{isES ? "Soluciones" : "Solutions"}</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={href("/soluciones")} className="hover:text-foreground transition-colors">
                  {isES ? "Todas las soluciones" : "All solutions"}
                </Link>
              </li>
              <li>
                <Link href={href("/capabilities")} className="hover:text-foreground transition-colors">
                  {isES ? "Capacidades" : "Capabilities"}
                </Link>
              </li>
              <li>
                <Link href={href("/automatizacion-para-empresas")} className="hover:text-foreground transition-colors">
                  {isES ? "Automatizacion empresarial" : "Business automation"}
                </Link>
              </li>
              <li>
                <Link href={href("/integraciones-empresariales")} className="hover:text-foreground transition-colors">
                  {isES ? "Integraciones" : "Integrations"}
                </Link>
              </li>
              <li>
                <Link href={href("/automatizacion-ventas-leads")} className="hover:text-foreground transition-colors">
                  {isES ? "Ventas y leads" : "Sales and leads"}
                </Link>
              </li>
              <li>
                <Link href={href("/operaciones-autonomas")} className="hover:text-foreground transition-colors">
                  {isES ? "Operaciones 24/7" : "24/7 operations"}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold mb-4 text-foreground">{isES ? "Contacto" : "Contact"}</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <button
                  onClick={() => setEmailDialogOpen(true)}
                  className="hover:text-foreground transition-colors text-left"
                >
                  Email: info@n3uralia.com
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/56993826127"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  WhatsApp: +56 9 9382 6127
                </a>
              </li>
              <li className="pt-2 border-t border-border">
                <p className="text-xs font-medium mb-2">{isES ? "Redes" : "Social"}</p>
                <div className="flex gap-3">
                  <a
                    href="https://twitter.com/n3uralia"
                    className="hover:text-primary transition-colors text-xs"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://linkedin.com/company/n3uralia"
                    className="hover:text-primary transition-colors text-xs"
                  >
                    LinkedIn
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-xs text-muted-foreground">
            <div>
              <p className="font-medium text-foreground mb-2">{isES ? "Que hacemos" : "What we build"}</p>
              <p>
                {isES
                  ? "Desarrollamos sistemas de IA en produccion, automatizacion gobernada y software para operaciones reales."
                  : "We build production AI systems, governed automation, and software for real operations."}
              </p>
            </div>
            <div>
              <p className="font-medium text-foreground mb-2">{isES ? "Temas clave" : "Core topics"}</p>
              <p>
                Agentic AI | Multi-agent systems | AI memory | Context engineering | Enterprise automation | Full-stack software
              </p>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground border-t border-border pt-4">
            <p>
              {isES
                ? `(c) ${new Date().getFullYear()} N3uralia. Todos los derechos reservados.`
                : `(c) ${new Date().getFullYear()} N3uralia. All rights reserved.`}
            </p>
          </div>
        </div>
      </div>

      <EmailContactDialog open={emailDialogOpen} onOpenChange={setEmailDialogOpen} />
    </footer>
  )
}
