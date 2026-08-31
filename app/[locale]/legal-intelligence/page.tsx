import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Eye,
  FileSearch,
  Scale,
  ShieldCheck,
  Workflow,
} from "lucide-react"
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
    metadataTitle: "Legal Intelligence | N3uralia",
    metadataDescription:
      "N3uralia agrega una capa de inteligencia sobre los sistemas, documentos y workflows que los equipos legales ya utilizan. El criterio jurídico sigue siendo humano.",
    badge: "N3uralia Intelligence for Legal",
    title: "El criterio sigue siendo suyo. La capa de inteligencia la pone N3uralia.",
    subtitle:
      "No reemplazamos al abogado, al estudio ni su software legal. Conectamos datos, documentos y procesos para preparar mejor la evidencia, detectar cambios, priorizar riesgo y dejar cada decisión trazable.",
    primaryCta: "Conversar sobre un proceso",
    secondaryCta: "Ver cómo trabajamos",
    boundaryTitle: "No competimos con su práctica legal",
    boundaryBody:
      "N3uralia se integra sobre el stack actual del equipo. El abogado mantiene la relación con el cliente, el análisis jurídico y la recomendación profesional. Nuestra función es reducir el trabajo de reunir, estructurar, monitorear y coordinar la información que rodea esa decisión.",
    boundaryItems: [
      "No sustituimos criterio jurídico ni asesoría profesional.",
      "No obligamos a reemplazar DMS, CRM, correo, Drive, SharePoint o software de gestión existente.",
      "No automatizamos decisiones jurídicas consecuenciales sin control humano.",
    ],
    layerTitle: "La capa que agregamos",
    layerIntro:
      "Tomamos procesos donde hoy hay información dispersa, seguimiento manual y decisiones repetitivas, y los convertimos en sistemas operables y auditables.",
    layers: [
      {
        title: "Evidence Intelligence",
        description: "Reunir, clasificar y conectar documentos, señales y fuentes para que la evidencia llegue preparada al profesional.",
        icon: FileSearch,
      },
      {
        title: "Workflow Intelligence",
        description: "Asignaciones, revisiones, aprobaciones, deadlines y escalamiento sin perder el contexto del asunto.",
        icon: Workflow,
      },
      {
        title: "Risk & Monitoring",
        description: "Detectar cambios, excepciones y señales que merecen atención antes de que se conviertan en un problema operativo.",
        icon: Eye,
      },
      {
        title: "Decision Intelligence",
        description: "Casos, evidencia, gobierno, trazabilidad y copilots que ayudan a preparar una decisión; nunca a reemplazarla.",
        icon: BrainCircuit,
      },
    ],
    fitTitle: "Dónde empezamos",
    fitIntro: "No proponemos transformar todo el estudio. Empezamos con un proceso concreto de alto valor y lo mejoramos sobre los sistemas que ya existen.",
    fits: [
      "Propiedad intelectual: pre-screening, investigación, portfolios y vigilancia.",
      "Compliance y regulatorio: cambios, obligaciones, evidencia y seguimiento.",
      "Contratos: extracción, obligaciones, renovaciones, revisiones y contexto.",
      "Litigios y asuntos complejos: evidencia, timelines, responsables y decisiones auditables.",
    ],
    proofEyebrow: "IP Intelligence · Powered by Visual Compare",
    proofTitle: "Una implementación real de esta capa ya existe",
    proofBody:
      "Visual Compare demuestra el modelo en propiedad intelectual: conecta información oficial, evaluación, investigación, monitoreo, casos, revisiones, governance, audit trail y Decision Briefs en un solo flujo. El profesional conserva siempre el criterio final.",
    proofSteps: ["Evaluar", "Investigar", "Monitorear", "Caso", "Revisar", "Decidir"],
    integrationTitle: "Se conecta. No reemplaza.",
    integrationBody:
      "La arquitectura se diseña alrededor de su operación actual. Podemos integrar fuentes internas, gestores documentales, correo, bases de datos, APIs y herramientas de negocio para construir una capa común de inteligencia y control.",
    integrationLabels: ["DMS / SharePoint", "Drive", "Outlook", "CRM / ERP", "Bases internas", "Fuentes regulatorias"],
    outcomeTitle: "Qué compra realmente un equipo legal",
    outcomes: [
      "Menos tiempo preparando información antes del análisis profesional.",
      "Más claridad sobre qué cambió, quién debe actuar y qué está bloqueado.",
      "Decisiones con evidencia, responsables y trazabilidad recuperable.",
      "Una base para incorporar IA sin entregar el control del proceso jurídico.",
    ],
    ctaTitle: "Traiga un proceso. Nosotros encontramos dónde poner inteligencia.",
    ctaBody:
      "La mejor primera conversación no parte con una demo genérica. Parte con un workflow real donde hoy existan documentos dispersos, seguimiento manual, riesgo o decisiones repetitivas.",
    ctaButton: "Agendar diagnóstico",
  },
  en: {
    metadataTitle: "Legal Intelligence | N3uralia",
    metadataDescription:
      "N3uralia adds an intelligence layer on top of the systems, documents, and workflows legal teams already use. Legal judgment remains human.",
    badge: "N3uralia Intelligence for Legal",
    title: "Your expertise stays human. The intelligence layer becomes N3uralia.",
    subtitle:
      "We do not replace counsel, the firm, or its legal software. We connect data, documents, and workflows to prepare evidence, detect change, prioritize risk, and keep decisions traceable.",
    primaryCta: "Discuss a workflow",
    secondaryCta: "See how we work",
    boundaryTitle: "We do not compete with your legal practice",
    boundaryBody:
      "N3uralia integrates on top of the team's current stack. Counsel retains the client relationship, legal analysis, and professional recommendation. We reduce the work required to collect, structure, monitor, and coordinate the information surrounding that decision.",
    boundaryItems: [
      "We do not replace legal judgment or professional advice.",
      "We do not require replacing your DMS, CRM, email, Drive, SharePoint, or matter-management software.",
      "We do not automate consequential legal decisions without human control.",
    ],
    layerTitle: "The layer we add",
    layerIntro:
      "We take workflows where information is fragmented, follow-up is manual, and decisions repeat, then turn them into operable and auditable systems.",
    layers: [
      {
        title: "Evidence Intelligence",
        description: "Collect, classify, and connect documents, signals, and sources so evidence reaches the professional already structured.",
        icon: FileSearch,
      },
      {
        title: "Workflow Intelligence",
        description: "Assignments, reviews, approvals, deadlines, and escalation without losing matter context.",
        icon: Workflow,
      },
      {
        title: "Risk & Monitoring",
        description: "Detect change, exceptions, and signals that deserve attention before they become an operational issue.",
        icon: Eye,
      },
      {
        title: "Decision Intelligence",
        description: "Cases, evidence, governance, traceability, and copilots that help prepare a decision, never replace it.",
        icon: BrainCircuit,
      },
    ],
    fitTitle: "Where we start",
    fitIntro: "We do not propose transforming the entire firm. We start with one high-value workflow and improve it on top of the systems already in place.",
    fits: [
      "Intellectual property: pre-screening, research, portfolios, and monitoring.",
      "Compliance and regulatory: changes, obligations, evidence, and follow-up.",
      "Contracts: extraction, obligations, renewals, reviews, and context.",
      "Litigation and complex matters: evidence, timelines, ownership, and auditable decisions.",
    ],
    proofEyebrow: "IP Intelligence · Powered by Visual Compare",
    proofTitle: "A real implementation of this intelligence layer already exists",
    proofBody:
      "Visual Compare demonstrates the model for intellectual property: it connects official information, evaluation, research, monitoring, cases, reviews, governance, audit trail, and Decision Briefs in one workflow. Professional judgment remains the final authority.",
    proofSteps: ["Evaluate", "Research", "Monitor", "Case", "Review", "Decide"],
    integrationTitle: "It connects. It does not replace.",
    integrationBody:
      "The architecture is designed around your current operation. We can integrate internal sources, document systems, email, databases, APIs, and business tools to build a shared intelligence and control layer.",
    integrationLabels: ["DMS / SharePoint", "Drive", "Outlook", "CRM / ERP", "Internal data", "Regulatory sources"],
    outcomeTitle: "What a legal team is actually buying",
    outcomes: [
      "Less time preparing information before professional analysis.",
      "More clarity on what changed, who needs to act, and what is blocked.",
      "Decisions with recoverable evidence, ownership, and traceability.",
      "A foundation for introducing AI without surrendering control of the legal process.",
    ],
    ctaTitle: "Bring us a workflow. We will find where intelligence belongs.",
    ctaBody:
      "The best first conversation does not start with a generic demo. It starts with a real workflow where documents are fragmented, follow-up is manual, risk exists, or decisions repeat.",
    ctaButton: "Book a diagnostic",
  },
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return buildLocalizedMetadata({
    locale,
    path: "/legal-intelligence",
    title: page.metadataTitle,
    description: page.metadataDescription,
  })
}

export default function LegalIntelligencePage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return (
    <>
      <main className="min-h-screen bg-background pt-20">
        <SectionBackground section="hero" className="border-b border-border">
          <section className="px-4 py-24 sm:py-32">
            <div className="container mx-auto max-w-6xl">
              <div className="max-w-4xl">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-2">
                  <Scale className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">{page.badge}</span>
                </div>
                <h1 className="max-w-5xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                  {page.title}
                </h1>
                <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">{page.subtitle}</p>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Link href={href(locale, "/contact")} className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                    {page.primaryCta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href={href(locale, "/soluciones")} className="inline-flex items-center justify-center rounded-lg border border-border bg-background/60 px-7 py-3.5 font-semibold text-foreground transition-colors hover:bg-muted">
                    {page.secondaryCta}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </SectionBackground>

        <section className="border-b border-border px-4 py-24">
          <div className="container mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{page.boundaryTitle}</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">{page.boundaryBody}</p>
            </div>
            <div className="space-y-3">
              {page.boundaryItems.map((item) => (
                <div key={item} className="flex gap-3 border-b border-border py-5 last:border-b-0">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-foreground/85">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionBackground section="workflow" className="border-b border-border">
          <section className="px-4 py-24">
            <div className="container mx-auto max-w-6xl">
              <div className="mb-14 max-w-3xl">
                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{page.layerTitle}</h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{page.layerIntro}</p>
              </div>
              <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
                {page.layers.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="bg-card p-8 sm:p-10">
                      <Icon className="mb-8 h-6 w-6 text-primary" />
                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        </SectionBackground>

        <section className="border-b border-border px-4 py-24">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{page.fitTitle}</h2>
                <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{page.fitIntro}</p>
              </div>
              <div className="divide-y divide-border border-y border-border">
                {page.fits.map((item, index) => (
                  <div key={item} className="grid grid-cols-[42px_1fr] gap-4 py-5">
                    <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                    <p className="text-foreground/90">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SectionBackground section="capabilities" className="border-b border-border">
          <section className="px-4 py-24">
            <div className="container mx-auto max-w-6xl">
              <div className="rounded-2xl border border-primary/20 bg-card/80 p-8 sm:p-12 lg:p-16">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{page.proofEyebrow}</div>
                <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                  <div>
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{page.proofTitle}</h2>
                    <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">{page.proofBody}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {page.proofSteps.map((step, index) => (
                      <div key={step} className="border border-border bg-background/70 px-4 py-4">
                        <div className="font-mono text-[10px] text-muted-foreground">0{index + 1}</div>
                        <div className="mt-2 text-sm font-medium text-foreground">{step}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SectionBackground>

        <section className="border-b border-border px-4 py-24">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{page.integrationTitle}</h2>
                <p className="mt-5 leading-relaxed text-muted-foreground">{page.integrationBody}</p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {page.integrationLabels.map((label) => (
                  <div key={label} className="flex min-h-24 items-end border border-border bg-card p-5 text-sm font-medium text-foreground">
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border px-4 py-24">
          <div className="container mx-auto max-w-6xl">
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{page.outcomeTitle}</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {page.outcomes.map((item, index) => (
                <div key={item} className="border-t border-border pt-6">
                  <div className="font-mono text-xs text-primary">0{index + 1}</div>
                  <p className="mt-4 max-w-lg text-lg leading-relaxed text-foreground/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SectionBackground section="hero">
          <section className="px-4 py-24 sm:py-32">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">{page.ctaTitle}</h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{page.ctaBody}</p>
              <Link href={href(locale, "/contact")} className="mt-10 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                {page.ctaButton}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </SectionBackground>
      </main>
      <Footer />
    </>
  )
}
