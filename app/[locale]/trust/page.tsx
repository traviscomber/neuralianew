import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Database, Eye, LockKeyhole, RotateCcw, ShieldCheck, UserCheck } from "lucide-react"
import { DEFAULT_LOCALE, isValidLocale, type Locale } from "@/lib/get-locale"
import { buildLocalizedMetadata } from "@/lib/page-metadata"

interface PageProps { params: Promise<{ locale: string }> }

const copy = {
  es: {
    title: "Confianza y seguridad | N3uralia",
    description: "Cómo N3uralia diseña sistemas de IA y software con control de acceso, trazabilidad, autoridad humana, observabilidad y disciplina de producción.",
    eyebrow: "Confianza y seguridad",
    hero: "Sistemas que pueden revisarse, operarse y corregirse.",
    intro: "La confianza no viene de promesas genéricas. Diseñamos cada sistema para que los datos, permisos, decisiones y acciones importantes puedan rastrearse hasta su fuente y queden bajo control operacional.",
    controlLabel: "CONTROL",
    principlesTitle: "Cómo reducimos riesgo operacional",
    principles: [
      ["Datos canónicos antes que IA", "La IA no reemplaza la fuente de verdad operacional. Los datos, reglas y estados críticos se modelan explícitamente y permanecen inspeccionables.", Database],
      ["Permisos y alcance", "Los accesos se diseñan por rol y necesidad. Un agente o automatización no debería actuar fuera del alcance autorizado.", LockKeyhole],
      ["Autoridad humana", "Las decisiones consecuenciales permanecen bajo responsables autorizados. La IA puede preparar, analizar y automatizar pasos sin eliminar el criterio profesional.", UserCheck],
      ["Trazabilidad visible", "Cuando una decisión o acción importa, preservamos evidencia, contexto y flujo para que pueda revisarse.", Eye],
      ["Operación observable", "Los sistemas de producción se instrumentan para detectar fallas, entender qué ocurrió y recuperar la operación.", ShieldCheck],
      ["Rollback y recuperación", "Cambios relevantes usan control de versiones, gates de release y una ruta de reversión cuando corresponde.", RotateCcw],
    ],
    claimsLabel: "AFIRMACIONES",
    claimsTitle: "Certificaciones, SLA y métricas",
    claimsBody: "No presentamos certificaciones de proveedores como si fueran propias ni publicamos garantías universales de disponibilidad, ROI o precisión. Cuando un proyecto requiere SLA, controles regulatorios o métricas de desempeño, se definen y verifican para ese contexto.",
    claims: [
      "No usamos porcentajes de impacto sin una fuente o medición asociada.",
      "No prometemos autonomía total en procesos de alto impacto.",
      "No usamos SOC 2, ISO, HIPAA u otros marcos como sello corporativo si N3uralia no posee esa certificación.",
      "Seguridad y residencia de datos se definen según arquitectura, proveedores y necesidades del proyecto.",
    ],
    evidenceLabel: "EVIDENCIA",
    evidenceTitle: "Qué puede pedir un cliente",
    evidence: ["Arquitectura y flujo de datos documentados.", "Roles, permisos y puntos de aprobación definidos.", "Evidencia de pruebas, build y gates de release cuando aplica.", "Trazabilidad de cambios y responsables.", "Plan de operación, soporte y recuperación acorde al sistema.", "Separación clara entre datos canónicos, inferencias de IA y decisiones humanas."],
    proofLabel: "PRUEBA",
    proofTitle: "Evalúe la evidencia, no el discurso.",
    proofBody: "Nuestros proyectos y productos muestran qué sistemas hemos construido y cómo se conectan con operaciones reales. Para cualquier claim material, preferimos enseñar evidencia o declarar alcance y limitaciones.",
    projects: "Ver proyectos", contact: "Hablar con N3uralia",
  },
  en: {
    title: "Trust and security | N3uralia",
    description: "How N3uralia designs AI systems and software with access control, traceability, human authority, observability and production discipline.",
    eyebrow: "Trust and security",
    hero: "Systems that can be reviewed, operated and corrected.",
    intro: "Trust does not come from generic promises. We design each system so important data, permissions, decisions and actions can be traced to their source and remain under operational control.",
    controlLabel: "CONTROL",
    principlesTitle: "How we reduce operational risk",
    principles: [
      ["Canonical data before AI", "AI does not replace the operational source of truth. Critical data, rules and states are modeled explicitly and remain inspectable.", Database],
      ["Permissions and scope", "Access is designed by role and need. An agent or automation should not act outside its authorized scope.", LockKeyhole],
      ["Human authority", "Consequential decisions remain with authorized owners. AI can prepare, analyze and automate steps without removing professional judgment.", UserCheck],
      ["Visible traceability", "When a decision or action matters, we preserve evidence, context and workflow so it can be reviewed.", Eye],
      ["Observable operations", "Production systems are instrumented to detect failures, understand what happened and recover operations.", ShieldCheck],
      ["Rollback and recovery", "Material changes use version control, release gates and a reversal path when appropriate.", RotateCcw],
    ],
    claimsLabel: "CLAIMS",
    claimsTitle: "Certifications, SLAs and metrics",
    claimsBody: "We do not present provider certifications as our own or publish universal uptime, ROI or accuracy guarantees. When a project requires an SLA, regulatory controls or performance metrics, they are defined and verified for that specific context.",
    claims: ["We do not use impact percentages without a source or associated measurement.", "We do not promise full autonomy for high-impact processes.", "We do not use SOC 2, ISO, HIPAA or similar frameworks as a corporate badge unless N3uralia actually holds that certification.", "Security and data residency are defined according to architecture, providers and project requirements."],
    evidenceLabel: "EVIDENCE",
    evidenceTitle: "What a client can ask for",
    evidence: ["Documented architecture and data flow.", "Defined roles, permissions and approval points.", "Evidence of tests, builds and release gates where applicable.", "Traceability of changes and owners.", "An operating, support and recovery plan appropriate to the system.", "Clear separation between canonical data, AI inference and human decisions."],
    proofLabel: "PROOF",
    proofTitle: "Evaluate the evidence, not the pitch.",
    proofBody: "Our projects and products show what systems we have built and how they connect to real operations. For any material claim, we prefer to show evidence or state scope and limitations.",
    projects: "See projects", contact: "Talk to N3uralia",
  },
} as const

function projectsPath(locale: Locale) { return `/${locale}/${locale === "es" ? "proyectos" : "projects"}` }

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = copy[locale]
  return buildLocalizedMetadata({ locale, title: page.title, description: page.description, path: "/trust" })
}

export default async function TrustPage(props: PageProps) {
  const params = await props.params
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = copy[locale]
  return <main className="retro-page min-h-screen pt-20">
    <section className="retro-dark border-b border-[rgba(118,214,214,.16)]"><div className="retro-shell py-24"><small>{page.eyebrow}</small><h1 className="mt-6 max-w-5xl text-[clamp(44px,5.5vw,78px)]">{page.hero}</h1><p className="mt-7 max-w-3xl text-[16px] text-[var(--n3-text-muted)]">{page.intro}</p></div></section>
    <section className="border-b border-[rgba(118,214,214,.16)] py-20"><div className="retro-shell"><div className="mb-12 grid gap-4 lg:grid-cols-[.65fr_1.35fr] lg:items-end"><small>01 / {page.controlLabel}</small><h2 className="text-[clamp(34px,4vw,56px)]">{page.principlesTitle}</h2></div><div className="grid gap-px bg-[rgba(118,214,214,.16)] md:grid-cols-2 lg:grid-cols-3">{page.principles.map(([title, body, Icon], i) => <article key={title} className="min-h-[260px] bg-[var(--n3-dark-surface)] p-7"><div className="mb-10 flex items-center justify-between"><Icon className="h-7 w-7 text-[var(--n3-teal-soft)]" aria-hidden/><span className="telemetry">0{i+1}</span></div><h3 className="text-[22px] text-[var(--n3-text-light)]">{title}</h3><p className="mt-5 text-[13px] text-[var(--n3-text-muted)]">{body}</p></article>)}</div></div></section>
    <section className="border-b border-[rgba(118,214,214,.16)] py-20"><div className="retro-shell grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><small>02 / {page.claimsLabel}</small><h2 className="mt-5 text-[clamp(34px,4vw,56px)]">{page.claimsTitle}</h2><p className="mt-6 max-w-xl text-[14px] text-[var(--n3-text-muted)]">{page.claimsBody}</p></div><div className="border-t border-[rgba(118,214,214,.16)]">{page.claims.map(item => <div key={item} className="flex gap-4 border-b border-[rgba(118,214,214,.16)] py-6"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--n3-teal-soft)]" aria-hidden/><p className="text-[14px] text-[var(--n3-text-muted)]">{item}</p></div>)}</div></div></section>
    <section className="border-b border-[rgba(118,214,214,.16)] py-20"><div className="retro-shell grid gap-12 lg:grid-cols-[.65fr_1.35fr]"><div><small>03 / {page.evidenceLabel}</small><h2 className="mt-5 text-[clamp(34px,4vw,56px)]">{page.evidenceTitle}</h2></div><div className="grid gap-px bg-[rgba(118,214,214,.16)] md:grid-cols-2">{page.evidence.map(item => <div key={item} className="bg-[var(--n3-dark-surface)] p-6"><p className="text-[14px] text-[var(--n3-text-muted)]">{item}</p></div>)}</div></div></section>
    <section className="py-24"><div className="retro-shell relative border-y border-[rgba(118,214,214,.2)] py-16"><small>04 / {page.proofLabel}</small><div className="mt-5 grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-end"><div><h2 className="max-w-4xl text-[clamp(36px,4.5vw,62px)]">{page.proofTitle}</h2><p className="mt-6 max-w-2xl text-[14px] text-[var(--n3-text-muted)]">{page.proofBody}</p></div><div className="button-row lg:justify-end"><Link href={projectsPath(locale)} className="retro-button retro-button-primary gap-2">{page.projects}<ArrowRight className="h-4 w-4" aria-hidden/></Link><Link href={`/${locale}/contact`} className="retro-button">{page.contact}</Link></div></div></div></section>
  </main>
}
