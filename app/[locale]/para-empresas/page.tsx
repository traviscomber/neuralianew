import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Building2, CheckCircle2, Shield, Workflow } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import { SectionBackground } from "@/components/section-background"
import { DEFAULT_LOCALE, isValidLocale, type Locale } from "@/lib/get-locale"
import { buildLocalizedMetadata } from "@/lib/page-metadata"

interface PageProps {
  params: {
    locale: string
  }
}

function href(locale: Locale, path: string) {
  return `/${locale}${path}`
}

const content = {
  es: {
    metadataTitle: "IA para empresas | N3uralia",
    metadataDescription:
      "N3uralia construye sistemas de IA, automatizacion e integraciones para empresas medianas y grandes en Chile y LATAM.",
    badge: "Para equipos empresariales",
    title: "IA para empresas que ya no pueden operar con parches",
    subtitle:
      "Trabajamos con empresas que necesitan arquitectura, integracion y control. No se trata de sumar un bot mas. Se trata de mejorar como funciona la operacion completa.",
    fitTitle: "Donde vemos mejor fit",
    fitItems: [
      "Operaciones con volumen, excepciones y coordinacion entre multiples equipos.",
      "Stacks con ERP, CRM, planillas, software legacy o procesos manuales que hoy chocan entre si.",
      "Lideres que necesitan trazabilidad, ownership y una capa seria para pasar de piloto a produccion.",
    ],
    capabilitiesTitle: "Lo que solemos construir",
    capabilities: [
      {
        title: "Automatizacion operacional",
        description: "Workflows que reducen seguimiento manual y dejan mas claro que pasa, quien actua y cuando.",
      },
      {
        title: "Integraciones empresariales",
        description: "Conexiones entre sistemas criticos para que los datos y decisiones no queden partidos por area.",
      },
      {
        title: "Sistemas con IA gobernable",
        description: "Agentes y capas de inteligencia con reglas, monitoreo y control operacional real.",
      },
      {
        title: "Software full-stack",
        description: "Dashboards, APIs, paneles y productos internos cuando el problema necesita una base tecnica mas fuerte.",
      },
    ],
    reasonsTitle: "Por que esto importa a nivel empresa",
    reasons: [
      "Mas continuidad operacional en procesos criticos.",
      "Menos retrabajo entre areas comerciales, operativas y financieras.",
      "Mejor base para escalar automatizacion, analitica e IA sobre sistemas reales.",
    ],
    ctaTitle: "Si la operacion ya te pide mas estructura, conversemos",
    ctaSubtitle:
      "Podemos ayudarte a definir si lo correcto es una integracion puntual, un piloto operativo o una arquitectura completa para produccion.",
    primaryCta: "Agendar conversacion",
    secondaryCta: "Ver soluciones",
  },
  en: {
    metadataTitle: "AI for enterprises | N3uralia",
    metadataDescription:
      "N3uralia builds AI systems, automation, and integrations for mid-market and enterprise teams across Chile and LATAM.",
    badge: "For enterprise teams",
    title: "AI for companies that can no longer operate on patches",
    subtitle:
      "We work with companies that need architecture, integration, and control. This is not about adding one more bot. It is about improving how the full operation works.",
    fitTitle: "Where we see the strongest fit",
    fitItems: [
      "Operations with volume, exceptions, and coordination across multiple teams.",
      "Stacks with ERP, CRM, spreadsheets, legacy software, or manual workflows that currently collide with each other.",
      "Leaders who need traceability, ownership, and a serious layer to move from pilot to production.",
    ],
    capabilitiesTitle: "What we usually build",
    capabilities: [
      {
        title: "Operational automation",
        description: "Workflows that reduce manual follow-up and make it clearer what is happening, who acts, and when.",
      },
      {
        title: "Enterprise integrations",
        description: "Connections across critical systems so data and decisions are not fragmented by department.",
      },
      {
        title: "Governed AI systems",
        description: "Agents and intelligence layers with rules, monitoring, and real operational control.",
      },
      {
        title: "Full-stack software",
        description: "Dashboards, APIs, internal panels, and products when the problem needs a stronger technical base.",
      },
    ],
    reasonsTitle: "Why this matters at enterprise level",
    reasons: [
      "More operational continuity in critical processes.",
      "Less rework across commercial, operational, and financial teams.",
      "A stronger base for automation, analytics, and AI on top of real systems.",
    ],
    ctaTitle: "If the operation is already asking for more structure, let's talk",
    ctaSubtitle:
      "We can help define whether the right move is a point integration, an operational pilot, or a full production architecture.",
    primaryCta: "Book a conversation",
    secondaryCta: "View solutions",
  },
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return buildLocalizedMetadata({
    locale,
    path: "/para-empresas",
    title: page.metadataTitle,
    description: page.metadataDescription,
  })
}

export default function ParaEmpresasPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return (
    <>
      <main className="min-h-screen pt-20 bg-background">
        <SectionBackground section="hero" className="border-b border-border">
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-6 bg-primary/5">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-primary">{page.badge}</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">{page.title}</h1>
              <p className="body-lg text-muted-foreground max-w-3xl mx-auto">{page.subtitle}</p>
            </div>
          </section>
        </SectionBackground>

        <section className="py-24 px-4 border-b border-border">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">{page.fitTitle}</h2>
            <div className="space-y-4">
              {page.fitItems.map((item) => (
                <div key={item} className="rounded-lg border border-border bg-card p-6 flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionBackground section="workflow" className="border-b border-border">
          <section className="py-24 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-4">{page.capabilitiesTitle}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {page.capabilities.map((item) => (
                  <div key={item.title} className="rounded-lg border border-border bg-card p-8">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                      <Workflow className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </SectionBackground>

        <section className="py-24 px-4 border-b border-border">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-foreground mb-10 text-center">{page.reasonsTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {page.reasons.map((item) => (
                <div key={item} className="rounded-lg border border-border bg-card p-8">
                  <Building2 className="w-7 h-7 text-primary mb-4" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionBackground section="capabilities">
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-3xl text-center">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-6">{page.ctaTitle}</h2>
              <p className="text-muted-foreground mb-10">{page.ctaSubtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={href(locale, "/contact")}
                  className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  {page.primaryCta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={href(locale, "/soluciones")}
                  className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors text-center"
                >
                  {page.secondaryCta}
                </Link>
              </div>
            </div>
          </section>
        </SectionBackground>
      </main>

      <Footer />
    </>
  )
}
