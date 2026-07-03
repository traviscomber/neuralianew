import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BarChart3, Shield, TrendingUp, Users, Workflow, Zap } from "lucide-react"
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
    metadataTitle: "Conversational intelligence | N3uralia",
    metadataDescription:
      "Sistemas conversacionales para revenue, operaciones y servicio. IA integrada con memoria, trazabilidad y software real para equipos en Chile y LATAM.",
    badge: "Conversational intelligence",
    title: "Conversaciones que se convierten en accion",
    subtitle:
      "No se trata de contestar mas rapido. Se trata de conectar la conversacion con CRM, software y decisiones reales.",
    differentiatorsTitle: "Que la hace distinta",
    differentiators: [
      {
        title: "No es solo un canal",
        description: "La conversacion se conecta con tu operacion.",
        icon: Workflow,
      },
      {
        title: "Atribucion real",
        description: "Cada conversacion puede medirse como accion real.",
        icon: TrendingUp,
      },
      {
        title: "Modo hibrido",
        description: "Resuelve lo rutinario y escala lo sensible al equipo correcto.",
        icon: Users,
      },
    ],
    useCasesTitle: "Donde pega fuerte",
    useCases: [
      "Ventas B2B con calificacion y seguimiento.",
      "Turismo y hospitality con reservas y consultas.",
      "Soporte y operaciones donde la conversacion activa tareas.",
    ],
    architectureTitle: "De mensaje a accion",
    architecture: [
      {
        title: "Entrada",
        description: "WhatsApp, web o email donde ya llegan conversaciones reales.",
      },
      {
        title: "Comprension",
        description: "El sistema lee contexto e intencion antes de responder.",
      },
      {
        title: "Decision",
        description: "Define si responder, escalar o activar otro flujo.",
      },
    ],
    capabilityTitle: "Capacidades core",
    capabilities: [
      {
        title: "Memoria y contexto",
        description: "Recuerda lo anterior y no empieza de cero.",
        icon: Zap,
      },
      {
        title: "Integracion con negocio",
        description: "Conectada con CRM, procesos internos y software.",
        icon: BarChart3,
      },
    ],
    ctaTitle: "Si tus conversaciones ya mueven negocio, tratemoslas como infraestructura",
    ctaSubtitle:
      "Podemos ayudarte a convertir mensajes dispersos en una capa clara de trabajo.",
    primaryCta: "Solicitar demo",
    secondaryCta: "Ver metodologia",
  },
  en: {
    metadataTitle: "Conversational intelligence | N3uralia",
    metadataDescription:
      "Conversational systems for revenue, operations, and service. AI integrated with memory, traceability, and real software for teams in Chile and LATAM.",
    badge: "Conversational intelligence",
    title: "Conversations that turn into action",
    subtitle:
      "This is not about replying faster. It is about connecting conversations to CRM, software, and real decisions.",
    differentiatorsTitle: "What makes it different",
    differentiators: [
      {
        title: "Not just a channel",
        description: "The conversation is connected to your operation.",
        icon: Workflow,
      },
      {
        title: "Real attribution",
        description: "Each conversation can be measured as a real action.",
        icon: TrendingUp,
      },
      {
        title: "Hybrid mode",
        description: "It handles routine work and escalates sensitive cases.",
        icon: Users,
      },
    ],
    useCasesTitle: "Where it hits hard",
    useCases: [
      "B2B sales with qualification and follow-up.",
      "Tourism and hospitality with reservations and inquiries.",
      "Support operations where a conversation triggers tasks.",
    ],
    architectureTitle: "From message to action",
    architecture: [
      {
        title: "Input",
        description: "WhatsApp, web, or email where real conversations already happen.",
      },
      {
        title: "Understanding",
        description: "The system reads context and intent before it acts.",
      },
      {
        title: "Decision",
        description: "It decides whether to answer, escalate, or trigger another flow.",
      },
      {
        title: "Action",
        description: "It creates tasks, updates CRM, triggers automations, or records measurable events.",
      },
    ],
    capabilityTitle: "Core capabilities",
    capabilities: [
      {
        title: "Memory and context",
        description: "It remembers what happened before.",
        icon: Zap,
      },
      {
        title: "Business integration",
        description: "Connected with CRM, internal processes, and software.",
        icon: BarChart3,
      },
      {
        title: "Governance",
        description: "Logs, rules, reviews, and traceability for stronger operational confidence.",
        icon: Shield,
      },
    ],
    ctaTitle: "If conversations already drive the business, treat them like infrastructure",
    ctaSubtitle:
      "We can help turn a scattered messaging layer into a clear working layer.",
    primaryCta: "Request demo",
    secondaryCta: "View methodology",
  },
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return buildLocalizedMetadata({
    locale,
    path: "/conversational-intelligence",
    title: page.metadataTitle,
    description: page.metadataDescription,
  })
}

export default function ConversationalIntelligencePage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return (
    <>
      <main className="min-h-screen bg-background pt-20">
        <SectionBackground section="hero" className="border-b border-border">
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 mb-6 bg-primary/5">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-medium text-primary">{page.badge}</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-foreground">{page.title}</h1>
              <p className="body-lg text-muted-foreground max-w-3xl mx-auto">{page.subtitle}</p>
            </div>
          </section>
        </SectionBackground>

        <section className="py-24 px-4 border-b border-border">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
              {page.differentiatorsTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {page.differentiators.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="border border-border rounded-lg p-8 bg-card">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <SectionBackground section="solutions" className="border-b border-border">
          <section className="py-24 px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center text-foreground">{page.useCasesTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {page.useCases.map((item) => (
                  <div key={item} className="border border-border rounded-lg p-6 bg-card">
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </SectionBackground>

        <SectionBackground section="blog" className="border-b border-border">
          <section className="py-24 px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-foreground">{page.architectureTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {page.architecture.map((item, index) => (
                  <div key={item.title} className="border border-border rounded-lg p-8 bg-card">
                    <div className="text-primary font-bold text-sm mb-3">0{index + 1}</div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </SectionBackground>

        <section className="py-24 px-4 border-b border-border">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">{page.capabilityTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {page.capabilities.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="border border-border rounded-lg p-6 bg-card">
                    <Icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">{page.ctaTitle}</h2>
            <p className="body-lg text-muted-foreground mb-8">{page.ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={href(locale, "/contact")}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                {page.primaryCta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href={href(locale, "/como-trabajamos")}
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                {page.secondaryCta}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
