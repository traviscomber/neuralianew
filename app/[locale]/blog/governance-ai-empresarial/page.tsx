import Link from "next/link"
import { ArrowLeft, Calendar, ShieldCheck, User } from "lucide-react"
import type { Metadata } from "next"

import { SectionBackground } from "@/components/section-background"
import { DEFAULT_LOCALE, isValidLocale, type Locale } from "@/lib/get-locale"
import { buildLocalizedMetadata } from "@/lib/page-metadata"

interface PageProps {
  params: {
    locale: string
  }
}

type Copy = {
  title: string
  description: string
  backLabel: string
  badge: string
  heading: string
  intro: string
  date: string
  readTime: string
  section1Title: string
  section1Body: string
  principlesTitle: string
  principles: Array<{ title: string; body: string }>
  frameworkTitle: string
  frameworkBody: string
  checklistTitle: string
  checklist: string[]
  closingTitle: string
  closingBody: string
  ctaText: string
}

const pageCopy: Record<Locale, Copy> = {
  es: {
    title: "Gobernanza de IA Empresarial | N3uralia Blog",
    description: "Framework de gobernanza para agentes y sistemas de IA en empresas.",
    backLabel: "Volver al blog",
    badge: "Gobernanza",
    heading: "Gobernanza de IA empresarial sin cajas negras",
    intro: "La pregunta no es si responde bien una vez. Es si cada decision queda trazada, revisable y alineada con politicas reales.",
    date: "7 de febrero, 2026",
    readTime: "12 min lectura",
    section1Title: "Por que la gobernanza ya importa",
    section1Body: "La adopcion de IA avanza mas rapido que los controles internos. Eso crea una brecha entre automatizacion y supervisión.",
    principlesTitle: "Cinco capas que funcionan",
    principles: [
      { title: "1. Alcance acotado", body: "Cada agente necesita un mandato preciso y limites claros." },
      { title: "2. Verificacion", body: "Las acciones sensibles deben validarse antes de ejecutar." },
      { title: "3. Trazabilidad", body: "Prompt, contexto, herramientas y salida deben quedar registrados." },
      { title: "4. Roles", body: "No todos los usuarios ni agentes deben tener el mismo acceso." },
      { title: "5. Memoria controlada", body: "La memoria debe ser versionable y revisable." },
    ],
    frameworkTitle: "Como se ve un framework gobernable",
    frameworkBody: "Diseñamos workflows deterministas: spec, plan, agentes acotados, verificacion y memoria actualizada.",
    checklistTitle: "Checklist minimo",
    checklist: [
      "Definir que automatiza la IA y que requiere aprobacion.",
      "Registrar eventos, inputs, outputs y fallos.",
      "Separar prueba, staging y produccion.",
      "Aplicar guardrails por herramienta y sistema legado.",
      "Medir calidad y riesgo con indicadores operativos.",
    ],
    closingTitle: "La confianza se diseña",
    closingBody: "La IA gana valor cuando el negocio puede confiar en ella bajo presion real.",
    ctaText: "Disenar arquitectura gobernable",
  },
  en: {
    title: "Enterprise AI Governance | N3uralia Blog",
    description: "Governance framework for AI agents and enterprise systems.",
    backLabel: "Back to blog",
    badge: "Governance",
    heading: "Enterprise AI governance without black boxes",
    intro: "The question is not whether it answers well once. It is whether each decision is traceable, reviewable, and aligned with policy.",
    date: "February 7, 2026",
    readTime: "12 min read",
    section1Title: "Why governance matters now",
    section1Body: "AI adoption is moving faster than internal controls. That creates a gap between automation and supervision.",
    principlesTitle: "Five layers that work",
    principles: [
      { title: "1. Scoped responsibility", body: "Each agent needs a precise mandate and clear limits." },
      { title: "2. Verification", body: "Sensitive actions should be validated before execution." },
      { title: "3. Traceability", body: "Prompt, context, tools, and output should be logged." },
      { title: "4. Roles", body: "Not every user or agent should have the same access." },
      { title: "5. Controlled memory", body: "Memory should be versioned and reviewable." },
    ],
    frameworkTitle: "What a governable framework looks like",
    frameworkBody: "We design deterministic workflows: spec, plan, scoped agents, verification, and updated memory.",
    checklistTitle: "Minimum checklist",
    checklist: [
      "Define what AI automates and what still requires approval.",
      "Log events, inputs, outputs, and failures.",
      "Separate test, staging, and production.",
      "Apply guardrails per tool and legacy system.",
      "Measure quality and risk with operational metrics.",
    ],
    closingTitle: "Trust is designed",
    closingBody: "AI becomes valuable when the business can trust it under real pressure.",
    ctaText: "Design governable architecture",
  },
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const copy = pageCopy[locale]

  return buildLocalizedMetadata({
    locale,
    path: "/blog/governance-ai-empresarial",
    type: "article",
    title: copy.title,
    description: copy.description,
  })
}

export default function GovernanceAiEmpresarialPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const copy = pageCopy[locale]
  const href = (path: string) => `/${locale}${path}`

  return (
    <SectionBackground section="blog">
      <main className="min-h-screen bg-background pt-32 pb-20">
        <article className="mx-auto max-w-3xl px-4">
          <Link href={href("/blog")} className="mb-8 inline-flex items-center gap-2 text-sm text-primary transition-all hover:gap-3">
            <ArrowLeft className="h-4 w-4" />
            {copy.backLabel}
          </Link>

          <div className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>{copy.badge}</span>
            </div>
            <h1 className="mb-4 text-4xl font-light tracking-tight text-foreground md:text-5xl">{copy.heading}</h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" />{copy.date}</span>
              <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" />N3uralia Team</span>
              <span>{copy.readTime}</span>
            </div>
          </div>

          <div className="space-y-8 text-base leading-7 text-muted-foreground">
            <p>{copy.intro}</p>
            <section className="space-y-4">
              <h2 className="text-2xl font-light text-foreground">{copy.section1Title}</h2>
              <p>{copy.section1Body}</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-light text-foreground">{copy.principlesTitle}</h2>
              <div className="space-y-4">
                {copy.principles.map((item) => (
                  <div key={item.title} className="rounded-[5px] bg-card/50 p-5 backdrop-blur-sm">
                    <h3 className="mb-2 text-lg font-light text-foreground">{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-light text-foreground">{copy.frameworkTitle}</h2>
              <p>{copy.frameworkBody}</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-light text-foreground">{copy.checklistTitle}</h2>
              <ul className="space-y-2 pl-5">
                {copy.checklist.map((item) => (
                  <li key={item} className="list-disc">{item}</li>
                ))}
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-light text-foreground">{copy.closingTitle}</h2>
              <p>{copy.closingBody}</p>
            </section>
          </div>

          <div className="mt-12 border-t border-border pt-8">
            <Link href={href("/contact")} className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              {copy.ctaText}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </main>
    </SectionBackground>
  )
}
