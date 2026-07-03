import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, Blocks, BrainCircuit, CircuitBoard, Layers3, ShieldCheck, Sparkles, Workflow } from "lucide-react"

import { BrandMark, BrandWordmark } from "@/components/brand"
import { Footer } from "@/components/layout/footer"
import { DEFAULT_LOCALE, isValidLocale, type Locale } from "@/lib/get-locale"
import { buildLocalizedMetadata } from "@/lib/page-metadata"

interface PageProps {
  params: {
    locale: string
  }
}

type LocalePageCopy = {
  badge: string
  heroTitle: string
  heroBody: string
  heroPrimary: string
  heroSecondary: string
  routeTitle: string
  routeSubtitle: string
  routeLabel: string
  problemTitle: string
  problemIntro: string
  problems: Array<{ title: string; description: string }>
  capabilitiesTitle: string
  capabilitiesIntro: string
  capabilities: Array<{ title: string; description: string }>
  solutionsTitle: string
  solutionsIntro: string
  routes: Array<{ title: string; description: string; href: string }>
  casesTitle: string
  casesIntro: string
  cases: Array<{ title: string; description: string; href: string }>
  methodTitle: string
  methodIntro: string
  methodSteps: Array<{ title: string; description: string }>
  ctaTitle: string
  ctaBody: string
  ctaPrimary: string
  ctaSecondary: string
}

const pageCopy: Record<Locale, LocalePageCopy> = {
  es: {
    badge: "IA y software para operaciones reales",
    heroTitle: "Construimos sistemas que el equipo puede entender, operar y ampliar.",
    heroBody: "Partimos de la operación y la convertimos en un sistema claro.",
    heroPrimary: "Ver capacidades",
    heroSecondary: "Hablar con N3uralia",
    routeTitle: "Recorrido simple",
    routeSubtitle: "Lee la página en este orden.",
    routeLabel: "Ir a la sección",
    problemTitle: "Qué intentamos resolver",
    problemIntro: "Primero identificamos la fricción antes de pensar en pantallas.",
    problems: [
      { title: "Silos operativos", description: "La información vive en chats, documentos y herramientas aisladas." },
      { title: "Poca trazabilidad", description: "No siempre queda claro quién hizo qué, cuándo y por qué." },
      { title: "Automatización débil", description: "Hay tareas repetitivas que siguen dependiendo de trabajo manual." },
    ],
    capabilitiesTitle: "Capacidades principales",
    capabilitiesIntro: "Bloques listos para diseño visual y navegación simple.",
    capabilities: [
      { title: "Arquitectura agéntica", description: "Agentes con memoria, herramientas y reglas de operación." },
      { title: "Living agents", description: "Sistemas que aprenden del uso y mejoran con contexto." },
      { title: "Integración", description: "Conexión con CRM, ERP, documentos y flujos existentes." },
      { title: "Conversación", description: "Interfaces claras para operar con menos fricción." },
      { title: "Observabilidad", description: "Estado, métricas y trazabilidad en un mismo lugar." },
      { title: "Gobernanza", description: "Permisos, límites y control de decisiones sensibles." },
    ],
    solutionsTitle: "Rutas de solución",
    solutionsIntro: "Tres puertas de entrada simples para ubicar el tipo de trabajo.",
    routes: [
      { title: "Diagnóstico", description: "Mapeamos la operación y detectamos el primer problema resoluble.", href: "/contact" },
      { title: "Diseño del sistema", description: "Definimos módulos, flujos y criterio de implementación.", href: "/capabilities" },
      { title: "Ejecución", description: "Pasamos a casos concretos, entregables y validación con negocio.", href: "/soluciones" },
    ],
    casesTitle: "Casos de referencia",
    casesIntro: "Pruebas cortas para mostrar contexto y resultado.",
    cases: [
      { title: "EcoSuelosLab", description: "Automatización aplicada a educación y trazabilidad.", href: "/case-studies/ecosuelolab" },
      { title: "Despega tu Carrera", description: "Soporte conversacional y gestión de aprendizaje.", href: "/case-studies/despega-tu-carrera" },
      { title: "BlackSwan Facility Core", description: "Operación crítica con control y visibilidad.", href: "/case-studies/blackswan-facility-core" },
    ],
    methodTitle: "Método de trabajo",
    methodIntro: "Una secuencia mínima para pasar de diagnóstico a producción.",
    methodSteps: [
      { title: "1. Diagnosticar", description: "Entender el flujo real, el volumen y el riesgo operativo." },
      { title: "2. Diseñar", description: "Definir sistema, información, permisos y prioridades." },
      { title: "3. Construir", description: "Llevarlo a producción con validación continua." },
    ],
    ctaTitle: "La landing ya tiene una base clara",
    ctaBody: "Cuando quieras, pasamos al diseño visual y al refinamiento de marca.",
    ctaPrimary: "Ver soluciones",
    ctaSecondary: "Agendar diagnóstico",
  },
  en: {
    badge: "AI and software for real operations",
    heroTitle: "We build systems the team can understand, operate, and extend.",
    heroBody: "We start from the operation and turn it into a clear system.",
    heroPrimary: "View capabilities",
    heroSecondary: "Talk to N3uralia",
    routeTitle: "Simple route",
    routeSubtitle: "Read the page in this order.",
    routeLabel: "Go to section",
    problemTitle: "What we are solving",
    problemIntro: "We identify friction before thinking about screens.",
    problems: [
      { title: "Operational silos", description: "Information lives in chats, documents, and disconnected tools." },
      { title: "Low traceability", description: "It is not always clear who did what, when, and why." },
      { title: "Weak automation", description: "Repetitive work still depends on manual execution." },
    ],
    capabilitiesTitle: "Main capabilities",
    capabilitiesIntro: "Blocks ready for visual design and simple navigation.",
    capabilities: [
      { title: "Agentic architecture", description: "Agents with memory, tools, and operating rules." },
      { title: "Living agents", description: "Systems that learn from use and improve with context." },
      { title: "Integration", description: "Connection to CRM, ERP, documents, and existing flows." },
      { title: "Conversation", description: "Clear interfaces that reduce operational friction." },
      { title: "Observability", description: "State, metrics, and traceability in one place." },
      { title: "Governance", description: "Permissions, limits, and control over sensitive decisions." },
    ],
    solutionsTitle: "Solution paths",
    solutionsIntro: "Three simple entry points that clarify the type of work.",
    routes: [
      { title: "Diagnosis", description: "We map the operation and surface the first solvable problem.", href: "/contact" },
      { title: "System design", description: "We define modules, flows, and implementation criteria.", href: "/capabilities" },
      { title: "Execution", description: "We move into concrete cases, deliverables, and business validation.", href: "/soluciones" },
    ],
    casesTitle: "Reference cases",
    casesIntro: "Short proofs that show context and outcome.",
    cases: [
      { title: "EcoSuelosLab", description: "Automation applied to education and traceability.", href: "/case-studies/ecosuelolab" },
      { title: "Despega tu Carrera", description: "Conversational support and learning management.", href: "/case-studies/despega-tu-carrera" },
      { title: "BlackSwan Facility Core", description: "Critical operations with control and visibility.", href: "/case-studies/blackswan-facility-core" },
    ],
    methodTitle: "Working method",
    methodIntro: "A minimal sequence from diagnosis to production.",
    methodSteps: [
      { title: "1. Diagnose", description: "Understand the real flow, volume, and operational risk." },
      { title: "2. Design", description: "Define system, information, permissions, and priorities." },
      { title: "3. Build", description: "Take it to production with continuous validation." },
    ],
    ctaTitle: "The landing now has a clear base",
    ctaBody: "When you are ready, we can move to visual design and brand refinement.",
    ctaPrimary: "View solutions",
    ctaSecondary: "Book diagnosis",
  },
}

const sectionAnchors = [
  { href: "#problema", label: { es: "Problema", en: "Problem" } },
  { href: "#capacidades", label: { es: "Capacidades", en: "Capabilities" } },
  { href: "#soluciones", label: { es: "Soluciones", en: "Solutions" } },
  { href: "#contacto", label: { es: "Contacto", en: "Contact" } },
] as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const title = locale === "es" ? "N3uralia | IA y software para operaciones reales" : "N3uralia | AI and software for real operations"
  const description = locale === "es" ? "Landing principal de N3uralia, estructurada para explicar la propuesta, las capacidades y los siguientes pasos." : "N3uralia's main landing page, structured to explain the proposal, capabilities, and next steps."

  return buildLocalizedMetadata({ locale, path: "/", title, description })
}

function SectionHeader({ title, intro, locale }: { title: string; intro: string; locale: Locale }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8aa39d]">{locale === "es" ? "Sección" : "Section"}</p>
      <h2 className="mt-3 text-3xl font-light leading-tight tracking-[-0.04em] text-[#173634] md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-[#65706d]">{intro}</p>
    </div>
  )
}

export default function HomePage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const copy = pageCopy[locale]

  return (
    <main className="min-h-screen bg-[#fbfbfa] pt-28 text-[#243331]">
      <section id="top" className="px-4 pb-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          <div className="rounded-[2.5rem] border border-[#d8e5e2] bg-white p-8 shadow-[0_40px_140px_-96px_#173634] md:p-12">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#d8e5e2] bg-[#fbfbfa] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#789b96]">
              <BrandMark className="h-6 w-6 rounded-lg text-[#789b96]" />
              {copy.badge}
            </div>
            <h1 className="mt-8 max-w-4xl text-balance text-5xl font-light leading-[0.96] tracking-[-0.05em] text-[#173634] md:text-7xl">{copy.heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-[#65706d]">{copy.heroBody}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={`/${locale}/capabilities`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#173634] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
                {copy.heroPrimary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d8e5e2] bg-white px-6 py-3 text-sm font-semibold text-[#526e69] transition-transform hover:-translate-y-0.5 hover:border-[#789b96] hover:text-[#173634]">
                {copy.heroSecondary}
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <div className="rounded-[1.4rem] border border-[#d8e5e2] bg-[#f7faf8] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8aa39d]">{locale === "es" ? "Foco" : "Focus"}</p>
                <p className="mt-2 text-sm leading-6 text-[#526e69]">{locale === "es" ? "Operación, claridad y control." : "Operations, clarity, and control."}</p>
              </div>
              <div className="rounded-[1.4rem] border border-[#d8e5e2] bg-[#f7faf8] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8aa39d]">{locale === "es" ? "Entrega" : "Delivery"}</p>
                <p className="mt-2 text-sm leading-6 text-[#526e69]">{locale === "es" ? "Bloques listos para diseñar." : "Blocks ready for design."}</p>
              </div>
              <div className="rounded-[1.4rem] border border-[#d8e5e2] bg-[#f7faf8] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8aa39d]">{locale === "es" ? "Idioma" : "Language"}</p>
                <p className="mt-2 text-sm leading-6 text-[#526e69]">{locale === "es" ? "ES en /es y EN en /en." : "ES on /es and EN on /en."}</p>
              </div>
            </div>
          </div>

          <aside className="rounded-[2.5rem] border border-[#d8e5e2] bg-[#173634] p-8 text-white shadow-[0_40px_140px_-96px_#173634] md:p-10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8fb2aa]">{copy.routeTitle}</p>
                <h2 className="mt-3 text-3xl font-light leading-tight">{copy.routeSubtitle}</h2>
              </div>
              <BrandWordmark className="hidden h-10 text-[#8fb2aa] md:block" />
            </div>
            <div className="mt-8 grid gap-3">
              {sectionAnchors.map((item) => (
                <a key={item.href} href={item.href} className="group flex items-center justify-between rounded-[1.1rem] border border-white/10 bg-white/6 px-4 py-3 text-sm transition-colors hover:bg-white/10">
                  <span>{item.label[locale]}</span>
                  <span className="text-xs uppercase tracking-[0.18em] text-[#8fb2aa]">{copy.routeLabel}</span>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="problema" className="border-y border-[#d8e5e2] bg-white px-4 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title={copy.problemTitle} intro={copy.problemIntro} locale={locale} />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {copy.problems.map((item) => (
              <article key={item.title} className="rounded-[1.8rem] border border-[#d8e5e2] bg-[#fbfbfa] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8aa39d]">{locale === "es" ? "Señal" : "Signal"}</p>
                <h3 className="mt-3 text-2xl font-semibold text-[#173634]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#65706d]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="capacidades" className="px-4 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title={copy.capabilitiesTitle} intro={copy.capabilitiesIntro} locale={locale} />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {copy.capabilities.map((item) => {
              const iconMap = {
                "Arquitectura agéntica": Blocks,
                "Living agents": BrainCircuit,
                Integration: CircuitBoard,
                Integración: CircuitBoard,
                Conversation: Sparkles,
                Conversación: Sparkles,
                Observability: Workflow,
                Observabilidad: Workflow,
                Governance: ShieldCheck,
                Gobernanza: ShieldCheck,
              } as const
              const Icon = iconMap[item.title as keyof typeof iconMap] ?? Layers3

              return (
                <article key={item.title} className="rounded-[1.8rem] border border-[#d8e5e2] bg-white p-6 shadow-[0_22px_80px_-72px_#173634]">
                  <Icon className="h-6 w-6 text-[#789b96]" />
                  <h3 className="mt-4 text-2xl font-semibold text-[#173634]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#65706d]">{item.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="soluciones" className="border-y border-[#d8e5e2] bg-[#edf4f1] px-4 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title={copy.solutionsTitle} intro={copy.solutionsIntro} locale={locale} />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {copy.routes.map((item) => (
              <Link key={item.title} href={`/${locale}${item.href}`} className="group rounded-[1.8rem] border border-[#d8e5e2] bg-white p-6 transition-transform hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-[#173634]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#65706d]">{item.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#789b96]">
                  {locale === "es" ? "Abrir sección" : "Open section"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="casos" className="px-4 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title={copy.casesTitle} intro={copy.casesIntro} locale={locale} />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {copy.cases.map((item) => (
              <Link key={item.title} href={`/${locale}${item.href}`} className="group rounded-[1.8rem] border border-[#d8e5e2] bg-white p-6 transition-transform hover:-translate-y-1 hover:border-[#b8d1cc]">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8aa39d]">{locale === "es" ? "Caso" : "Case"}</p>
                <h3 className="mt-3 text-2xl font-semibold text-[#173634]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#65706d]">{item.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#789b96]">
                  {locale === "es" ? "Ver referencia" : "View reference"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="metodo" className="border-y border-[#d8e5e2] bg-[#173634] px-4 py-20 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8fb2aa]">{locale === "es" ? "Sección" : "Section"}</p>
            <h2 className="mt-3 text-3xl font-light leading-tight tracking-[-0.04em] text-white md:text-5xl">{copy.methodTitle}</h2>
            <p className="mt-4 text-base leading-8 text-white/75">{copy.methodIntro}</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {copy.methodSteps.map((item) => (
              <article key={item.title} className="rounded-[1.8rem] border border-white/10 bg-white/6 p-6">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/75">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="px-4 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.2rem] border border-[#d8e5e2] bg-white p-8 shadow-[0_32px_120px_-90px_#173634] md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8aa39d]">{locale === "es" ? "Siguiente paso" : "Next step"}</p>
                <h2 className="mt-4 text-4xl font-light leading-tight tracking-[-0.04em] text-[#173634] md:text-6xl">{copy.ctaTitle}</h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[#65706d]">{copy.ctaBody}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link href={`/${locale}/soluciones`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#173634] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5">
                  {copy.ctaPrimary}
                </Link>
                <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d8e5e2] bg-white px-6 py-3 text-sm font-semibold text-[#526e69] transition-transform hover:-translate-y-0.5 hover:border-[#789b96] hover:text-[#173634]">
                  {copy.ctaSecondary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
