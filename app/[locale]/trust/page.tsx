import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Database, Eye, LockKeyhole, RotateCcw, ShieldCheck, UserCheck } from "lucide-react"
import { DEFAULT_LOCALE, isValidLocale, type Locale } from "@/lib/get-locale"
import { buildLocalizedMetadata } from "@/lib/page-metadata"

interface PageProps {
  params: {
    locale: string
  }
}

const content = {
  es: {
    title: "Confianza y seguridad | N3uralia",
    description:
      "Cómo N3uralia diseña sistemas de IA y software con control de acceso, trazabilidad, autoridad humana, observabilidad y disciplina de producción.",
    eyebrow: "Confianza y seguridad",
    hero: "Sistemas que pueden revisarse, operarse y corregirse.",
    intro:
      "La confianza no viene de promesas genéricas. Diseñamos cada sistema para que los datos, permisos, decisiones y acciones importantes puedan rastrearse hasta su fuente y queden bajo control operacional.",
    principlesTitle: "Cómo reducimos riesgo operacional",
    principles: [
      {
        title: "Datos canónicos antes que IA",
        body: "La IA no reemplaza la fuente de verdad operacional. Los datos, reglas y estados críticos se modelan explícitamente y permanecen inspeccionables.",
        icon: Database,
      },
      {
        title: "Permisos y alcance",
        body: "Los accesos se diseñan por rol y necesidad. Un agente o automatización no debería poder actuar fuera del alcance que el proceso le autoriza.",
        icon: LockKeyhole,
      },
      {
        title: "Autoridad humana",
        body: "Las decisiones consecuenciales permanecen bajo responsables autorizados. La IA puede preparar, analizar y automatizar pasos sin eliminar el criterio profesional.",
        icon: UserCheck,
      },
      {
        title: "Trazabilidad visible",
        body: "Cuando una decisión o acción importa, registramos la evidencia, el contexto y el flujo que la produjo para que pueda revisarse.",
        icon: Eye,
      },
      {
        title: "Operación observable",
        body: "Los sistemas de producción se instrumentan para detectar fallas, entender qué ocurrió y recuperar la operación sin depender de una caja negra.",
        icon: ShieldCheck,
      },
      {
        title: "Rollback y recuperación",
        body: "Cambios relevantes se trabajan con control de versiones, gates de release y una ruta de reversión cuando el sistema o la operación lo requieren.",
        icon: RotateCcw,
      },
    ],
    claimsTitle: "Cómo tratamos certificaciones, SLA y métricas",
    claimsBody:
      "N3uralia no presenta certificaciones de proveedores de nube o herramientas como si fueran certificaciones propias. Tampoco publicamos garantías de disponibilidad, ROI o precisión como afirmaciones universales. Cuando un proyecto requiere SLA, controles regulatorios o métricas de desempeño, se definen y verifican para ese contexto específico.",
    claimsItems: [
      "No usamos porcentajes de impacto sin una fuente o medición asociada.",
      "No prometemos autonomía total en procesos de alto impacto.",
      "No usamos SOC 2, ISO, HIPAA u otros marcos como sello corporativo si N3uralia no posee esa certificación.",
      "La seguridad y residencia de datos se definen según arquitectura, proveedores y necesidades del proyecto.",
    ],
    deliveryTitle: "Qué puede pedir un cliente",
    deliveryItems: [
      "Arquitectura y flujo de datos documentados.",
      "Definición de roles, permisos y puntos de aprobación.",
      "Evidencia de pruebas, build y gates de release cuando aplica.",
      "Trazabilidad de cambios y responsables.",
      "Plan de operación, soporte y recuperación acorde al sistema.",
      "Separación clara entre datos canónicos, inferencias de IA y decisiones humanas.",
    ],
    proofTitle: "Evalúe la evidencia, no el discurso.",
    proofBody:
      "Nuestros proyectos y productos muestran qué sistemas hemos construido y cómo se conectan con operaciones reales. Para cualquier claim material, preferimos enseñar la evidencia o declarar el alcance y las limitaciones.",
    projects: "Ver proyectos",
    contact: "Hablar con N3uralia",
  },
  en: {
    title: "Trust and security | N3uralia",
    description:
      "How N3uralia designs AI systems and software with access control, traceability, human authority, observability and production discipline.",
    eyebrow: "Trust and security",
    hero: "Systems that can be reviewed, operated and corrected.",
    intro:
      "Trust does not come from generic promises. We design each system so important data, permissions, decisions and actions can be traced to their source and remain under operational control.",
    principlesTitle: "How we reduce operational risk",
    principles: [
      {
        title: "Canonical data before AI",
        body: "AI does not replace the operational source of truth. Critical data, rules and states are modeled explicitly and remain inspectable.",
        icon: Database,
      },
      {
        title: "Permissions and scope",
        body: "Access is designed by role and need. An agent or automation should not be able to act outside the scope authorized by the process.",
        icon: LockKeyhole,
      },
      {
        title: "Human authority",
        body: "Consequential decisions remain with authorized owners. AI can prepare, analyze and automate steps without removing professional judgment.",
        icon: UserCheck,
      },
      {
        title: "Visible traceability",
        body: "When a decision or action matters, we preserve the evidence, context and workflow that produced it so it can be reviewed.",
        icon: Eye,
      },
      {
        title: "Observable operations",
        body: "Production systems are instrumented to detect failures, understand what happened and recover without depending on a black box.",
        icon: ShieldCheck,
      },
      {
        title: "Rollback and recovery",
        body: "Material changes use version control, release gates and a reversal path when the system or operation requires it.",
        icon: RotateCcw,
      },
    ],
    claimsTitle: "How we handle certifications, SLAs and metrics",
    claimsBody:
      "N3uralia does not present cloud-provider or tooling certifications as if they were our own. We also do not publish uptime, ROI or accuracy guarantees as universal claims. When a project requires an SLA, regulatory controls or performance metrics, they are defined and verified for that specific context.",
    claimsItems: [
      "We do not use impact percentages without a source or associated measurement.",
      "We do not promise full autonomy for high-impact processes.",
      "We do not use SOC 2, ISO, HIPAA or similar frameworks as a corporate badge unless N3uralia actually holds that certification.",
      "Security and data residency are defined according to architecture, providers and project requirements.",
    ],
    deliveryTitle: "What a client can ask for",
    deliveryItems: [
      "Documented architecture and data flow.",
      "Defined roles, permissions and approval points.",
      "Evidence of tests, builds and release gates where applicable.",
      "Traceability of changes and owners.",
      "An operating, support and recovery plan appropriate to the system.",
      "Clear separation between canonical data, AI inference and human decisions.",
    ],
    proofTitle: "Evaluate the evidence, not the pitch.",
    proofBody:
      "Our projects and products show what systems we have built and how they connect to real operations. For any material claim, we prefer to show the evidence or state the scope and limitations.",
    projects: "See projects",
    contact: "Talk to N3uralia",
  },
} as const

function pathFor(locale: Locale, esPath: string, enPath = esPath) {
  return `/${locale}${locale === "es" ? esPath : enPath}`
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return buildLocalizedMetadata({
    locale,
    title: page.title,
    description: page.description,
    path: "/trust",
  })
}

export default function TrustPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return (
    <main className="retro-page min-h-screen pt-20">
      <section className="retro-dark border-b border-[rgba(118,214,214,.16)]">
        <div className="retro-shell py-24">
          <small>{page.eyebrow}</small>
          <h1 className="mt-6 max-w-5xl text-[clamp(44px,5.5vw,78px)]">{page.hero}</h1>
          <p className="mt-7 max-w-3xl text-[16px] text-[var(--n3-text-muted)]">{page.intro}</p>
        </div>
      </section>

      <section className="border-b border-[rgba(118,214,214,.16)] py-20">
        <div className="retro-shell">
          <div className="mb-12 grid gap-4 lg:grid-cols-[.65fr_1.35fr] lg:items-end">
            <small>01 / CONTROL</small>
            <h2 className="text-[clamp(34px,4vw,56px)]">{page.principlesTitle}</h2>
          </div>
          <div className="grid gap-px bg-[rgba(118,214,214,.16)] md:grid-cols-2 lg:grid-cols-3">
            {page.principles.map((item, index) => {
              const Icon = item.icon
              return (
                <article key={item.title} className="min-h-[260px] bg-[var(--n3-dark-surface)] p-7">
                  <div className="mb-10 flex items-center justify-between">
                    <Icon className="h-7 w-7 text-[var(--n3-teal-soft)]" />
                    <span className="telemetry">0{index + 1}</span>
                  </div>
                  <h3 className="text-[22px] text-[var(--n3-text-light)]">{item.title}</h3>
                  <p className="mt-5 text-[13px] text-[var(--n3-text-muted)]">{item.body}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(118,214,214,.16)] py-20">
        <div className="retro-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <small>02 / CLAIMS</small>
            <h2 className="mt-5 text-[clamp(34px,4vw,56px)]">{page.claimsTitle}</h2>
            <p className="mt-6 max-w-xl text-[14px] text-[var(--n3-text-muted)]">{page.claimsBody}</p>
          </div>
          <div className="border-t border-[rgba(118,214,214,.16)]">
            {page.claimsItems.map((item) => (
              <div key={item} className="flex gap-4 border-b border-[rgba(118,214,214,.16)] py-6">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--n3-teal-soft)]" />
                <p className="text-[14px] text-[var(--n3-text-muted)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(118,214,214,.16)] py-20">
        <div className="retro-shell grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <small>03 / EVIDENCE</small>
            <h2 className="mt-5 text-[clamp(34px,4vw,56px)]">{page.deliveryTitle}</h2>
          </div>
          <div className="grid gap-px bg-[rgba(118,214,214,.16)] md:grid-cols-2">
            {page.deliveryItems.map((item) => (
              <div key={item} className="bg-[var(--n3-dark-surface)] p-6">
                <p className="text-[14px] text-[var(--n3-text-muted)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="retro-shell relative border-y border-[rgba(118,214,214,.2)] py-16">
          <span aria-hidden className="retro-corners"><i/><i/><i/><i/></span>
          <small>04 / PROOF</small>
          <div className="mt-5 grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-end">
            <div>
              <h2 className="max-w-4xl text-[clamp(36px,4.5vw,62px)]">{page.proofTitle}</h2>
              <p className="mt-6 max-w-2xl text-[14px] text-[var(--n3-text-muted)]">{page.proofBody}</p>
            </div>
            <div className="button-row lg:justify-end">
              <Link href={pathFor(locale, "/proyectos", "/projects")} className="retro-button retro-button-primary gap-2">
                {page.projects}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={`/${locale}/contact`} className="retro-button">
                {page.contact}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
