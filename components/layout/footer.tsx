"use client"

import Link from "next/link"
import { useState } from "react"
import { EmailContactDialog } from "@/components/contact/email-contact-dialog"
import { useParams } from "next/navigation"
import { isValidLocale, DEFAULT_LOCALE } from "@/lib/get-locale"
import type { Locale } from "@/content/dictionaries"

export function Footer() {
  const [emailDialogOpen, setEmailDialogOpen] = useState(false)
  const params = useParams()
  const localeParam = (params?.locale as string) || DEFAULT_LOCALE
  const locale = isValidLocale(localeParam) ? (localeParam as Locale) : (DEFAULT_LOCALE as Locale)
  const isES = locale === "es"

  const href = (path: string) => `/${locale}${path}`

  const footerContent = {
    es: {
      brandTagline: "Plataforma de IA Empresarial",
      brandDesc: "Soluciones de IA inteligentes para empresas chilenas. Agentes en producción, automatización y sistemas full-stack.",
      location: "Ubicación",
      sector: "Sector",
      specialty: "Especialidad",
      company: "Empresa",
      solutions: "Soluciones",
      contact: "Contacto",
      all_solutions: "Todas las Soluciones",
      general_automation: "Automatización General",
      sales_leads: "Sales & Leads",
      operations_24_7: "Operaciones 24/7",
      integrations: "Integraciones",
      email_us: "📧 Envíanos un email",
      whatsapp: "💬 WhatsApp: +56 9 9382 6127",
      follow_us: "Síguenos",
      about_title: "Sobre N3uralia",
      about_desc: "N3uralia es una plataforma de IA de próxima generación para empresas. Desarrollamos agentes inteligentes, sistemas de coordinación multi-agente y soluciones full-stack production-ready.",
      tech_title: "Tecnologías",
      tech_desc: "Agentic AI • Multi-Agent Systems • AI Memory • Context Engineering • Automatización Empresarial • Full-Stack Development • Production-Ready • Chile",
      copyright: "© 2026 N3uralia (Neuralia). Todos los derechos reservados.",
      trademark: "N3uralia es una marca registrada. Neuralia es el nombre alternativo de la plataforma.",
      santiago: "Santiago, Chile",
      ai_software: "Inteligencia Artificial, Software Enterprise",
      multiagent: "Agentes Multi-Agent, Automatización IA",
    },
    en: {
      brandTagline: "Enterprise AI Platform",
      brandDesc: "Intelligent AI solutions for Chilean companies. Production-ready agents, automation and full-stack systems.",
      location: "Location",
      sector: "Sector",
      specialty: "Specialty",
      company: "Company",
      solutions: "Solutions",
      contact: "Contact",
      all_solutions: "All Solutions",
      general_automation: "General Automation",
      sales_leads: "Sales & Leads",
      operations_24_7: "24/7 Operations",
      integrations: "Integrations",
      email_us: "📧 Email us",
      whatsapp: "💬 WhatsApp: +56 9 9382 6127",
      follow_us: "Follow us",
      about_title: "About N3uralia",
      about_desc: "N3uralia is a next-generation AI platform for enterprises. We develop intelligent agents, multi-agent coordination systems, and production-ready full-stack solutions.",
      tech_title: "Technologies",
      tech_desc: "Agentic AI • Multi-Agent Systems • AI Memory • Context Engineering • Business Automation • Full-Stack Development • Production-Ready • Chile",
      copyright: "© 2026 N3uralia (Neuralia). All rights reserved.",
      trademark: "N3uralia is a registered trademark. Neuralia is the alternative name for the platform.",
      santiago: "Santiago, Chile",
      ai_software: "Artificial Intelligence, Enterprise Software",
      multiagent: "Multi-Agent Systems, AI Automation",
    },
  }

  const t = isES ? footerContent.es : footerContent.en

  return (
    <footer className="bg-background text-foreground py-12 border-t border-border px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Identity Section */}
          <div>
            <p className="font-bold mb-2 text-foreground">N3uralia</p>
            <p className="text-xs text-primary font-medium mb-3">{t.brandTagline}</p>
            <p className="text-muted-foreground text-sm mb-4">{t.brandDesc}</p>
            <div className="text-xs text-muted-foreground space-y-1">
              <p><strong>{t.location}:</strong> {t.santiago}</p>
              <p><strong>{t.sector}:</strong> {t.ai_software}</p>
              <p><strong>{t.specialty}:</strong> {t.multiagent}</p>
            </div>
          </div>
          
          <div>
            <p className="font-bold mb-4 text-foreground">{t.company}</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={href("/")} className="hover:text-foreground transition-colors">
                  {isES ? "Inicio" : "Home"}
                </Link>
              </li>
              <li>
                <Link href={href("/capabilities")} className="hover:text-foreground transition-colors">
                  {isES ? "Capacidades" : "Capabilities"}
                </Link>
              </li>
              <li>
                <Link href={href("/case-studies")} className="hover:text-foreground transition-colors">
                  {isES ? "Casos de Éxito" : "Case Studies"}
                </Link>
              </li>
              <li>
                <Link href={href("/studies")} className="hover:text-foreground transition-colors">
                  {isES ? "Estudios" : "Studies"}
                </Link>
              </li>
              <li>
                <Link href={href("/faq")} className="hover:text-foreground transition-colors">
                  {isES ? "FAQ" : "FAQ"}
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
            <p className="font-bold mb-4 text-foreground">{t.solutions}</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href={href("/soluciones")} className="hover:text-foreground transition-colors">
                  {t.all_solutions}
                </Link>
              </li>
              <li>
                <Link href={href("/automatizacion-para-empresas")} className="hover:text-foreground transition-colors">
                  {t.general_automation}
                </Link>
              </li>
              <li>
                <Link href={href("/automatizacion-ventas-leads")} className="hover:text-foreground transition-colors">
                  {t.sales_leads}
                </Link>
              </li>
              <li>
                <Link href={href("/operaciones-autonomas")} className="hover:text-foreground transition-colors">
                  {t.operations_24_7}
                </Link>
              </li>
              <li>
                <Link href={href("/integraciones-empresariales")} className="hover:text-foreground transition-colors">
                  {t.integrations}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <p className="font-bold mb-4 text-foreground">{t.contact}</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <button
                  onClick={() => setEmailDialogOpen(true)}
                  className="hover:text-foreground transition-colors text-left cursor-pointer"
                >
                  {t.email_us}
                </button>
              </li>
              <li>
                <a 
                  href="https://wa.me/56993826127?text=Hola%20N3uralia,%20me%20gustaría%20conocer%20más%20sobre%20vuestras%20soluciones%20de%20IA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  {t.whatsapp}
                </a>
              </li>
              <li className="pt-2 border-t border-border">
                <p className="text-xs font-medium mb-2">{t.follow_us}</p>
                <div className="flex gap-3">
                  <a 
                    href="https://twitter.com/n3uralia" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-primary transition-colors text-xs"
                  >
                    Twitter
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/n3uralia" 
                    target="_blank" 
                    rel="noopener noreferrer" 
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
              <p className="font-medium text-foreground mb-2">{t.about_title}</p>
              <p>{t.about_desc}</p>
            </div>
            <div>
              <p className="font-medium text-foreground mb-2">{t.tech_title}</p>
              <p>{t.tech_desc}</p>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground border-t border-border pt-4">
            <p>{t.copyright}</p>
            <p className="text-xs mt-2">{t.trademark}</p>
          </div>
        </div>
      </div>

      <EmailContactDialog open={emailDialogOpen} onOpenChange={setEmailDialogOpen} />
    </footer>
  )
}
