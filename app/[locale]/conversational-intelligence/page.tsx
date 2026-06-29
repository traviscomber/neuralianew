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
    title: "Conversaciones que mueven revenue y operacion",
    subtitle:
      "No se trata de responder mensajes mas rapido. Se trata de convertir conversaciones en una capa operativa conectada con CRM, software interno, equipos y decisiones reales.",
    differentiatorsTitle: "Que la hace distinta",
    differentiators: [
      {
        title: "No es solo un canal",
        description:
          "La conversacion se conecta con tu operacion, no queda flotando en un inbox aislado.",
        icon: Workflow,
      },
      {
        title: "Atribucion real",
        description:
          "Cada conversacion puede medirse como lead, reserva, venta, ticket o accion operativa.",
        icon: TrendingUp,
      },
      {
        title: "Modo hibrido",
        description:
          "El sistema resuelve lo rutinario y escala lo sensible al equipo correcto en el momento correcto.",
        icon: Users,
      },
    ],
    useCasesTitle: "Donde suele pegar fuerte",
    useCases: [
      "Ventas B2B con calificacion, seguimiento y handoff comercial.",
      "Turismo y hospitality con reservas, consultas y coordinacion operativa.",
      "Eventos y experiencias con ventas, dudas y post-evento automatizado.",
      "Operaciones de soporte donde una conversacion activa tareas, validaciones o alertas.",
    ],
    architectureTitle: "De mensaje a accion",
    architecture: [
      {
        title: "Entrada",
        description: "WhatsApp, web, email u otro canal donde ya llegan conversaciones reales.",
      },
      {
        title: "Comprension",
        description: "El sistema entiende contexto, historial e intencion antes de responder o actuar.",
      },
      {
        title: "Decision",
        description: "Define si responder, escalar, actualizar sistemas o activar otro flujo.",
      },
      {
        title: "Accion",
        description: "Crea tareas, actualiza CRM, dispara automatizaciones o registra eventos medibles.",
      },
    ],
    capabilityTitle: "Capacidades core",
    capabilities: [
      {
        title: "Memoria y contexto",
        description: "Responde mejor porque recuerda que paso antes y no empieza de cero cada vez.",
        icon: Zap,
      },
      {
        title: "Integracion con negocio",
        description: "Conversacion conectada con CRM, procesos internos y software operativo.",
        icon: BarChart3,
      },
      {
        title: "Gobernanza",
        description: "Logs, reglas, revisiones y trazabilidad para operar con mas confianza.",
        icon: Shield,
      },
    ],
    ctaTitle: "Si tus conversaciones ya son parte del negocio, tratemoslas como infraestructura",
    ctaSubtitle:
      "Podemos ayudarte a convertir una capa caotica de mensajes en una capa clara de revenue, servicio y operacion.",
    primaryCta: "Solicitar demo",
    secondaryCta: "Ver metodologia",
  },
  en: {
    metadataTitle: "Conversational intelligence | N3uralia",
    metadataDescription:
      "Conversational systems for revenue, operations, and service. AI integrated with memory, traceability, and real software for teams in Chile and LATAM.",
    badge: "Conversational intelligence",
    title: "Conversations that move revenue and operations",
    subtitle:
      "This is not about replying faster. It is about turning conversations into an operational layer connected to CRM, internal software, teams, and real decisions.",
    differentiatorsTitle: "What makes it different",
    differentiators: [
      {
        title: "Not just a channel",
        description:
          "The conversation is connected to your operation instead of floating inside an isolated inbox.",
        icon: Workflow,
      },
      {
        title: "Real attribution",
        description:
          "Each conversation can be measured as a lead, reservation, sale, ticket, or operational action.",
        icon: TrendingUp,
      },
      {
        title: "Hybrid mode",
        description:
          "The system resolves routine work and escalates sensitive moments to the right team at the right time.",
        icon: Users,
      },
    ],
    useCasesTitle: "Where it usually hits hard",
    useCases: [
      "B2B sales with qualification, follow-up, and commercial handoff.",
      "Tourism and hospitality with reservations, inquiries, and operational coordination.",
      "Events and experiences with sales, questions, and post-event automation.",
      "Support operations where a conversation triggers tasks, validations, or alerts.",
    ],
    architectureTitle: "From message to action",
    architecture: [
      {
        title: "Input",
        description: "WhatsApp, web, email, or any channel where real conversations already happen.",
      },
      {
        title: "Understanding",
        description: "The system reads context, history, and intent before it responds or acts.",
      },
      {
        title: "Decision",
        description: "It decides whether to answer, escalate, update systems, or trigger another flow.",
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
        description: "It responds better because it remembers what happened before instead of starting from zero.",
        icon: Zap,
      },
      {
        title: "Business integration",
        description: "Conversation connected to CRM, internal processes, and operational software.",
        icon: BarChart3,
      },
      {
        title: "Governance",
        description: "Logs, rules, reviews, and traceability for stronger operational confidence.",
        icon: Shield,
      },
    ],
    ctaTitle: "If conversations are already part of the business, treat them like infrastructure",
    ctaSubtitle:
      "We can help turn a chaotic messaging layer into a clear revenue, service, and operations layer.",
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
