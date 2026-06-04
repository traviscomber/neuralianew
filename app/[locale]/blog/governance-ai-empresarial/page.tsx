import Link from "next/link"
import { ArrowLeft, Calendar, ShieldCheck, User } from "lucide-react"
import type { Metadata } from "next"

import { SectionBackground } from "@/components/section-background"
import { DEFAULT_LOCALE, isValidLocale } from "@/lib/get-locale"

interface PageProps {
  params: {
    locale: string
  }
}

const pageCopy = {
  es: {
    title: "Gobernanza de IA Empresarial | N3uralia Blog",
    description:
      "Framework de gobernanza para agentes y sistemas de IA en empresas chilenas y LATAM: trazabilidad, seguridad, compliance y control operativo.",
    backLabel: "Volver al blog",
    badge: "Gobernanza",
    heading: "Gobernanza de IA empresarial sin cajas negras",
    intro:
      "Los agentes pueden acelerar operaciones, ventas y soporte, pero sin governance clara terminan ampliando riesgo operativo. En producciÃ³n, la pregunta no es si el sistema responde bien una vez. La pregunta es si cada decisiÃ³n queda trazada, revisable y alineada con polÃ­ticas reales de negocio.",
    date: "7 de febrero, 2026",
    readTime: "12 min lectura",
    section1Title: "Por quÃ© governance ya es una prioridad",
    section1Body:
      "En Chile y LATAM, la adopciÃ³n de IA estÃ¡ creciendo mÃ¡s rÃ¡pido que los controles internos. Eso crea una brecha: equipos que automatizan tareas crÃ­ticas sin un marco comÃºn para permisos, revisiÃ³n, auditorÃ­a y escalamiento. Cuando esa brecha aparece en finanzas, operaciones o atenciÃ³n, el costo reputacional supera cualquier ahorro inicial.",
    principlesTitle: "Cinco capas que sÃ­ funcionan en producciÃ³n",
    principles: [
      {
        title: "1. Alcance acotado",
        body:
          "Cada agente necesita un mandato preciso: quÃ© puede hacer, quÃ© no puede hacer y quÃ© sistemas puede tocar. Sin lÃ­mites explÃ­citos, el modelo termina improvisando fuera del proceso.",
      },
      {
        title: "2. VerificaciÃ³n antes de ejecutar",
        body:
          "Las acciones de alto impacto no deben depender de una sola respuesta del agente. Se validan con reglas, test, hooks o revisiÃ³n humana segÃºn el riesgo del flujo.",
      },
      {
        title: "3. Trazabilidad completa",
        body:
          "Prompt, contexto, herramientas usadas, salida generada y acciÃ³n tomada deben quedar registrados. Si una empresa no puede reconstruir el camino de una decisiÃ³n, no tiene gobierno real.",
      },
      {
        title: "4. Roles y aprobaciones",
        body:
          "No todo usuario ni todo agente debe tener el mismo nivel de acceso. La separaciÃ³n entre observaciÃ³n, recomendaciÃ³n y ejecuciÃ³n es una de las defensas mÃ¡s efectivas.",
      },
      {
        title: "5. Memoria controlada",
        body:
          "Aprender de ejecuciones pasadas es Ãºtil solo si esa memoria es versionable, revisable y limpia. La memoria sin controles acumula errores y sesgos operativos.",
      },
    ],
    frameworkTitle: "CÃ³mo se ve un framework gobernable",
    frameworkBody:
      "En N3uralia, la forma mÃ¡s sÃ³lida de operar agentes no es pedirles que inventen su orquestaciÃ³n cada vez. Es diseÃ±ar workflows deterministas: spec, plan, agentes acotados, verificaciÃ³n, PR y memoria actualizada. Ese patrÃ³n convierte automatizaciÃ³n frÃ¡gil en infraestructura revisable.",
    checklistTitle: "Checklist mÃ­nimo para empresas",
    checklist: [
      "Definir quÃ© decisiones puede automatizar la IA y cuÃ¡les requieren aprobaciÃ³n.",
      "Registrar eventos, inputs, outputs y fallos en una bitÃ¡cora operativa.",
      "Separar entornos de prueba, staging y producciÃ³n para agentes.",
      "Aplicar guardrails por herramienta, repositorio, base de datos o sistema legado.",
      "Medir calidad y riesgo con indicadores operativos, no solo con demos.",
    ],
    closingTitle: "La confianza no se promete, se diseÃ±a",
    closingBody:
      "La IA empresarial gana valor cuando el negocio puede confiar en ella bajo presiÃ³n real. Governance no frena la velocidad; la hace sostenible. El objetivo no es tener agentes mÃ¡s llamativos, sino sistemas que un equipo de operaciones, tecnologÃ­a o compliance pueda sostener todos los dÃ­as.",
    ctaText: "DiseÃ±ar arquitectura gobernable",
  },
  en: {
    title: "Enterprise AI Governance | N3uralia Blog",
    description:
      "A practical governance framework for AI agents and enterprise systems: traceability, security, compliance, approvals and operational control.",
    backLabel: "Back to blog",
    badge: "Governance",
    heading: "Enterprise AI governance without black boxes",
    intro:
      "Agents can accelerate operations, sales and support, but without clear governance they expand operational risk. In production, the question is not whether the system answers well once. The real question is whether every decision is traceable, reviewable and aligned with business policy.",
    date: "February 7, 2026",
    readTime: "12 min read",
    section1Title: "Why governance is already urgent",
    section1Body:
      "Across Chile and LATAM, AI adoption is moving faster than internal controls. That creates a gap: teams automate critical workflows without a shared model for permissions, review, auditability and escalation. When that gap reaches finance, operations or customer experience, reputational cost quickly exceeds early efficiency gains.",
    principlesTitle: "Five layers that work in production",
    principles: [
      {
        title: "1. Scoped responsibility",
        body:
          "Each agent needs a precise mandate: what it can do, what it cannot do and which systems it can access. Without explicit limits, the model starts improvising outside the workflow.",
      },
      {
        title: "2. Verification before execution",
        body:
          "High-impact actions should not depend on a single agent response. They need validation through rules, tests, hooks or human review depending on workflow risk.",
      },
      {
        title: "3. Full traceability",
        body:
          "Prompt, context, tools used, generated output and resulting action should all be logged. If a company cannot reconstruct how a decision happened, it does not have real governance.",
      },
      {
        title: "4. Roles and approvals",
        body:
          "Not every user and not every agent should have the same access level. Separating observation, recommendation and execution is one of the strongest protections.",
      },
      {
        title: "5. Controlled memory",
        body:
          "Learning from prior runs is useful only when memory is versioned, reviewable and clean. Memory without controls accumulates errors and operational bias.",
      },
    ],
    frameworkTitle: "What a governable framework looks like",
    frameworkBody:
      "At N3uralia, the strongest way to run agents is not to let them reinvent orchestration every time. It is to design deterministic workflows: spec, plan, scoped agents, verification, PR and memory update. That pattern turns fragile automation into reviewable infrastructure.",
    checklistTitle: "Minimum checklist for enterprise teams",
    checklist: [
      "Define which decisions AI may automate and which still require approval.",
      "Log events, inputs, outputs and failures in an operational audit trail.",
      "Separate test, staging and production environments for agents.",
      "Apply guardrails per tool, repository, database or legacy system.",
      "Measure quality and risk with operational KPIs, not only demos.",
    ],
    closingTitle: "Trust is designed, not declared",
    closingBody:
      "Enterprise AI becomes valuable when the business can trust it under real pressure. Governance does not slow teams down; it makes speed sustainable. The goal is not to have flashier agents, but systems that operations, engineering and compliance teams can support every day.",
    ctaText: "Design governable architecture",
  },
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const copy = pageCopy[locale]

  return {
    title: copy.title,
    description: copy.description,
  }
}

export default function GovernanceAiEmpresarialPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const copy = pageCopy[locale]
  const href = (path: string) => `/${locale}${path}`

  return (
    <SectionBackground section="blog">
      <main className="min-h-screen bg-background pt-32 pb-20">
        <article className="mx-auto max-w-3xl px-4">
          <Link
            href={href("/blog")}
            className="mb-8 inline-flex items-center gap-2 text-sm text-primary transition-all hover:gap-3"
          >
            <ArrowLeft className="h-4 w-4" />
            {copy.backLabel}
          </Link>

          <div className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>{copy.badge}</span>
            </div>
            <h1 className="mb-4 text-4xl font-light tracking-tight text-foreground md:text-5xl">
              {copy.heading}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {copy.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <User className="h-4 w-4" />
                N3uralia Team
              </span>
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
              <ul className="space-y-3 pl-5">
                {copy.checklist.map((item) => (
                  <li key={item} className="list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-light text-foreground">{copy.closingTitle}</h2>
              <p>{copy.closingBody}</p>
            </section>
          </div>

          <div className="mt-12 rounded-[5px] bg-card/60 p-6 backdrop-blur-sm">
            <p className="mb-4 text-muted-foreground">{copy.closingBody}</p>
            <Link
              href={href("/contact")}
              className="inline-flex items-center rounded-[5px] bg-primary px-5 py-3 text-sm text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-90"
            >
              {copy.ctaText}
            </Link>
          </div>
        </article>
      </main>
    </SectionBackground>
  )
}
