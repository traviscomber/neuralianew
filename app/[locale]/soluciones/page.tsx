import type { Metadata } from "next"
import Link from "next/link"
import {
  Activity,
  ArrowRight,
  Bot,
  Building2,
  CheckCircle2,
  Database,
  Eye,
  Factory,
  FileText,
  LayoutGrid,
  Package,
  ScanLine,
  ShieldCheck,
  Truck,
  Users,
  Workflow,
} from "lucide-react"
import { SolutionsFitExplorer } from "@/components/solutions-fit-explorer"
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
    metadataTitle: "Soluciones | N3uralia",
    metadataDescription:
      "Sistemas de IA y software para operaciones reales: inteligencia operacional, automatización, asistentes, documentos, reconocimiento e interfaces internas.",
    heroEyebrow: "01 / SOLUCIONES PARA OPERACIONES REALES",
    heroTitle: "Sistemas de IA y software para operaciones reales.",
    heroBody:
      "N3uralia construye sistemas operativos que conectan datos, flujos, documentos, IA y personas para que los equipos vean qué está pasando, actúen más rápido y escalen con control.",
    heroPrimary: "Encontrar la solución correcta",
    heroSecondary: "Agendar diagnóstico",
    heroMap: [
      { label: "Datos", note: "Fuentes · sistemas · evidencia", icon: Database },
      { label: "Workflow", note: "Estados · handoffs · alertas", icon: Workflow },
      { label: "Inteligencia", note: "Contexto · IA · reconocimiento", icon: Activity },
      { label: "Acción", note: "Decisiones · respuesta · control", icon: CheckCircle2 },
    ],
    solveEyebrow: "02 / QUÉ RESOLVEMOS",
    solveTitle: "Resolvemos fricción operacional.",
    problems: [
      {
        title: "Vacíos de visibilidad",
        text: "Los datos viven en planillas, email, capturas y herramientas desconectadas.",
        icon: Eye,
      },
      {
        title: "Coordinación manual",
        text: "Los equipos pierden tiempo copiando, validando, notificando y persiguiendo actualizaciones.",
        icon: Workflow,
      },
      {
        title: "Respuesta lenta",
        text: "Clientes, operadores o proveedores esperan porque la información llega tarde al lugar correcto.",
        icon: Users,
      },
      {
        title: "Falta de trazabilidad",
        text: "Aprobaciones, documentos, excepciones y decisiones son difíciles de auditar o reproducir.",
        icon: ShieldCheck,
      },
    ],
    layersEyebrow: "03 / CAPAS DE SOLUCIÓN",
    layersTitle: "Elige primero la capa que necesita tu operación.",
    layersBody:
      "No todo problema necesita una plataforma completa. Empezamos por la capa que elimina la fricción más valiosa y la conectamos con lo que ya existe.",
    bestWhen: "Funciona mejor cuando",
    explore: "Explorar",
    startDiagnosis: "Iniciar diagnóstico",
    layers: [
      {
        title: "Inteligencia Operacional",
        text: "Dashboards, centros de control y capas de visibilidad para equipos que necesitan una sola versión de la realidad.",
        best: "La operación está fragmentada entre reportes, sistemas y responsables.",
        icon: LayoutGrid,
      },
      {
        title: "Automatización de Flujos",
        text: "Aprobaciones, alertas, handoffs y procesos recurrentes que no deberían depender de seguimiento manual.",
        best: "Un proceso repetible consume tiempo, genera errores o se tranca siempre en el mismo punto.",
        icon: Workflow,
      },
      {
        title: "Asistentes de IA",
        text: "Asistentes entrenados sobre contexto operacional, documentos y datos para responder, guiar y acelerar equipos.",
        best: "Las personas necesitan respuestas rápidas, pero el contexto está disperso o cambia por rol.",
        icon: Bot,
      },
      {
        title: "Inteligencia Documental",
        text: "Extracción, clasificación, validación y trazabilidad para operaciones intensivas en documentos.",
        best: "Leer, copiar, validar o buscar documentos consume horas y retrasa decisiones.",
        icon: FileText,
      },
      {
        title: "Sistemas de Reconocimiento",
        text: "Visión computacional para fauna, calidad productiva, ganadería, seguridad y señales visuales operacionales.",
        best: "Imágenes o video contienen eventos que hoy dependen de revisión manual o se detectan demasiado tarde.",
        icon: ScanLine,
      },
      {
        title: "Plataformas Internas",
        text: "Portales y sistemas a medida que conectan usuarios, datos, permisos, workflows y reporting.",
        best: "La operación ya no cabe bien en herramientas aisladas y necesita una capa propia de coordinación.",
        icon: Building2,
      },
    ],
    sectorsEyebrow: "05 / SOLUCIONES POR SECTOR",
    sectorsTitle: "Dónde vemos el mejor fit.",
    sectorsBody:
      "Los sectores ayudan a contextualizar la solución. La lógica central sigue siendo la fricción operacional y la capa que conviene activar primero.",
    sectorLabels: { friction: "Fricción", layer: "Capa probable", outcome: "Resultado" },
    sectors: [
      {
        title: "Retail y e-commerce",
        friction: "Catálogo, soporte y coordinación entre canales.",
        layer: "Automatización de Flujos + Asistentes de IA",
        outcome: "Más conversión, menos fricción operacional.",
        icon: Package,
      },
      {
        title: "Minería y recursos",
        friction: "Alertas, trazabilidad, monitoreo y continuidad operacional.",
        layer: "Inteligencia Operacional + Plataformas Internas",
        outcome: "Más visibilidad, menos respuesta tardía.",
        icon: Activity,
      },
      {
        title: "Manufactura",
        friction: "Flujos de planta, calidad, documentación y handoffs.",
        layer: "Automatización + Reconocimiento + Inteligencia Documental",
        outcome: "Más continuidad y procesos auditables.",
        icon: Factory,
      },
      {
        title: "Hospitality y turismo",
        friction: "Reservas, servicio, respuesta a huéspedes y coordinación interna.",
        layer: "Asistentes de IA + Automatización de Flujos",
        outcome: "Respuesta más rápida y mejor coordinación.",
        icon: Users,
      },
      {
        title: "Logística y supply chain",
        friction: "Tracking, excepciones, handoffs y decisiones operativas.",
        layer: "Inteligencia Operacional + Automatización",
        outcome: "Más control y menos puntos ciegos.",
        icon: Truck,
      },
      {
        title: "Servicios regulados",
        friction: "Documentos, validaciones, trazabilidad y control.",
        layer: "Inteligencia Documental + Plataformas Internas",
        outcome: "Más gobernanza y menos riesgo operacional.",
        icon: ShieldCheck,
      },
    ],
    entryEyebrow: "06 / FORMAS DE ENTRADA",
    entryTitle: "Cómo solemos entrar.",
    entryBody:
      "El punto de entrada depende de cuánto conoces el problema, cuánto riesgo puedes asumir y qué tan integrada debe quedar la solución desde el primer día.",
    bestFor: "Mejor para",
    entries: [
      {
        title: "Piloto operativo",
        text: "Un workflow concreto, una integración prioritaria y una métrica clara.",
        best: "Alcance acotado, entrega rápida y riesgo controlado.",
      },
      {
        title: "Sistema de producción",
        text: "Arquitectura, integraciones y una capa operativa que permanece.",
        best: "Problema de alto valor ya conocido, continuidad operacional y gobernanza real.",
      },
      {
        title: "Modernización con IA",
        text: "Automatización e inteligencia sobre el software existente sin reescribir todo.",
        best: "Integración progresiva, victorias visibles y menor disrupción.",
      },
    ],
    proofEyebrow: "07 / PRUEBA EN PRODUCCIÓN",
    proofTitle: "Prueba en producción.",
    proofBody: "No hablamos solo de industrias. Construimos sistemas que viven fuera del laboratorio.",
    proofLabels: { problem: "Problema", system: "Sistema", outcome: "Resultado", view: "Ver caso" },
    proofs: [
      {
        title: "Ecosuelolab",
        problem: "Datos y alertas agrícolas dispersos entre fuentes operativas.",
        system: "Monitoreo conectado con alertas y automatización operacional.",
        outcome: "La evidencia llega a una capa útil de seguimiento y respuesta.",
        path: "/case-studies/ecosuelolab",
      },
      {
        title: "Despega Tu Carrera",
        problem: "Una experiencia de orientación necesitaba contexto, escala y recorridos guiados.",
        system: "Producto full-stack con experiencias asistidas por IA.",
        outcome: "Una operación digital estructurada para crecer con mayor consistencia.",
        path: "/case-studies/despega-tu-carrera",
      },
      {
        title: "Blackswan Facility Core",
        problem: "Equipos hospitality necesitaban coordinar trabajo y responder más rápido.",
        system: "Software operativo para tareas, estados y coordinación diaria.",
        outcome: "Una capa común para organizar la operación y reducir fricción de handoff.",
        path: "/case-studies/blackswan-facility-core",
      },
      {
        title: "Recognition Systems",
        problem: "La evidencia visual puede llegar más rápido de lo que un equipo puede revisarla manualmente.",
        system: "Visión computacional conectada a workflows para fauna, calidad, agricultura y seguridad.",
        outcome: "Las detecciones se convierten en señales operacionales utilizables.",
        path: "/recognition",
      },
    ],
    finalEyebrow: "08 / SIGUIENTE PASO",
    finalTitle: "Empieza con la fricción que tu equipo ya siente.",
    finalBody:
      "Cuéntanos dónde se está rompiendo la visibilidad, coordinación o control. Identificaremos el primer sistema que vale la pena validar.",
    finalPrimary: "Agendar diagnóstico",
    finalSecondary: "Hablar con N3uralia",
  },
  en: {
    metadataTitle: "Solutions | N3uralia",
    metadataDescription:
      "AI and software systems for real operations: operational intelligence, automation, assistants, documents, recognition, and internal platforms.",
    heroEyebrow: "01 / SOLUTIONS FOR REAL OPERATIONS",
    heroTitle: "AI and software systems for real operations.",
    heroBody:
      "N3uralia builds operational systems that connect data, workflows, documents, AI and people — so teams can see what is happening, act faster and scale with control.",
    heroPrimary: "Find the right solution",
    heroSecondary: "Book diagnosis",
    heroMap: [
      { label: "Data", note: "Sources · systems · evidence", icon: Database },
      { label: "Workflow", note: "States · handoffs · alerts", icon: Workflow },
      { label: "Intelligence", note: "Context · AI · recognition", icon: Activity },
      { label: "Action", note: "Decisions · response · control", icon: CheckCircle2 },
    ],
    solveEyebrow: "02 / WHAT WE SOLVE",
    solveTitle: "We solve operational friction.",
    problems: [
      {
        title: "Visibility gaps",
        text: "Data lives in spreadsheets, email, screenshots and disconnected tools.",
        icon: Eye,
      },
      {
        title: "Manual coordination",
        text: "Teams spend too much time copying, validating, notifying and chasing updates.",
        icon: Workflow,
      },
      {
        title: "Slow response",
        text: "Customers, operators or suppliers wait because information reaches the right place too late.",
        icon: Users,
      },
      {
        title: "Lack of traceability",
        text: "Approvals, documents, exceptions and decisions are hard to audit or reproduce.",
        icon: ShieldCheck,
      },
    ],
    layersEyebrow: "03 / CORE SOLUTION LAYERS",
    layersTitle: "Choose the layer your operation needs first.",
    layersBody:
      "Not every problem needs a full platform. We start with the layer that removes the most valuable friction and connect it to what already exists.",
    bestWhen: "Best when",
    explore: "Explore",
    startDiagnosis: "Start diagnosis",
    layers: [
      {
        title: "Operational Intelligence",
        text: "Dashboards, command centers and visibility layers for teams that need one version of reality.",
        best: "The operation is fragmented across reports, systems and owners.",
        icon: LayoutGrid,
      },
      {
        title: "Workflow Automation",
        text: "Approvals, alerts, handoffs and recurring operational processes that should not depend on manual follow-up.",
        best: "A repeatable process consumes time, creates errors or gets stuck in the same place.",
        icon: Workflow,
      },
      {
        title: "AI Assistants",
        text: "Assistants trained on operational context, documents and data to answer, guide and accelerate teams.",
        best: "People need fast answers but context is scattered or changes by role.",
        icon: Bot,
      },
      {
        title: "Document Intelligence",
        text: "Extraction, classification, validation and traceability for document-heavy operations.",
        best: "Reading, copying, validating or finding documents consumes hours and delays decisions.",
        icon: FileText,
      },
      {
        title: "Recognition Systems",
        text: "Computer vision for wildlife, production quality, livestock, security and visual operational signals.",
        best: "Images or video contain events that depend on manual review or are detected too late.",
        icon: ScanLine,
      },
      {
        title: "Internal Platforms",
        text: "Custom portals and systems that connect users, data, permissions, workflows and reporting.",
        best: "The operation no longer fits isolated tools and needs its own coordination layer.",
        icon: Building2,
      },
    ],
    sectorsEyebrow: "05 / SOLUTIONS BY SECTOR",
    sectorsTitle: "Where we see the strongest fit.",
    sectorsBody:
      "Sectors provide context for the solution. The core logic is still the operational friction and the layer worth activating first.",
    sectorLabels: { friction: "Friction", layer: "Likely layer", outcome: "Outcome" },
    sectors: [
      {
        title: "Retail and e-commerce",
        friction: "Catalog, support and channel coordination.",
        layer: "Workflow Automation + AI Assistants",
        outcome: "More conversion, less operational drag.",
        icon: Package,
      },
      {
        title: "Mining and resources",
        friction: "Alerts, traceability, monitoring and operational continuity.",
        layer: "Operational Intelligence + Internal Platforms",
        outcome: "More visibility, less delayed response.",
        icon: Activity,
      },
      {
        title: "Manufacturing",
        friction: "Plant workflows, quality, documentation and cross-team handoffs.",
        layer: "Automation + Recognition + Document Intelligence",
        outcome: "More continuity and auditable processes.",
        icon: Factory,
      },
      {
        title: "Hospitality and tourism",
        friction: "Reservations, service operations, guest response and internal coordination.",
        layer: "AI Assistants + Workflow Automation",
        outcome: "Faster response and stronger coordination.",
        icon: Users,
      },
      {
        title: "Logistics and supply chain",
        friction: "Tracking, exceptions, handoffs and operational decisions.",
        layer: "Operational Intelligence + Automation",
        outcome: "More control, fewer blind spots.",
        icon: Truck,
      },
      {
        title: "Regulated services",
        friction: "Document-heavy processes, validations, traceability and control.",
        layer: "Document Intelligence + Internal Platforms",
        outcome: "More governance, less operational risk.",
        icon: ShieldCheck,
      },
    ],
    entryEyebrow: "06 / ENTRY PATHS",
    entryTitle: "How we usually enter.",
    entryBody:
      "The entry point depends on how well the problem is understood, how much risk you can take and how integrated the first solution needs to be.",
    bestFor: "Best for",
    entries: [
      {
        title: "Operational pilot",
        text: "One concrete workflow, one priority integration and one clear metric.",
        best: "Focused scope, fast delivery and controlled risk.",
      },
      {
        title: "Production system",
        text: "Architecture, integrations and an operating layer that lasts.",
        best: "Known high-value problem, operational continuity and real governance.",
      },
      {
        title: "AI-enabled modernization",
        text: "Automation and intelligence on top of existing software without a full rewrite.",
        best: "Progressive integration, visible wins and lower disruption.",
      },
    ],
    proofEyebrow: "07 / PRODUCTION PROOF",
    proofTitle: "Production proof.",
    proofBody: "We do not only talk about industries. We build systems that live outside the lab.",
    proofLabels: { problem: "Problem", system: "System built", outcome: "Outcome", view: "View case" },
    proofs: [
      {
        title: "Ecosuelolab",
        problem: "Agricultural data and alerts were scattered across operational sources.",
        system: "Connected monitoring with alerts and operational automation.",
        outcome: "Evidence reaches a usable layer for follow-up and response.",
        path: "/case-studies/ecosuelolab",
      },
      {
        title: "Despega Tu Carrera",
        problem: "A career-guidance experience needed context, scale and guided journeys.",
        system: "Full-stack product with AI-guided experiences.",
        outcome: "A structured digital operation designed to scale with more consistency.",
        path: "/case-studies/despega-tu-carrera",
      },
      {
        title: "Blackswan Facility Core",
        problem: "Hospitality teams needed to coordinate work and respond faster.",
        system: "Operational software for tasks, states and daily coordination.",
        outcome: "A common operating layer that reduces handoff friction.",
        path: "/case-studies/blackswan-facility-core",
      },
      {
        title: "Recognition Systems",
        problem: "Visual evidence can arrive faster than a team can inspect it manually.",
        system: "Computer vision connected to workflows for wildlife, quality, agriculture and security.",
        outcome: "Detections become usable operational signals instead of isolated model outputs.",
        path: "/recognition",
      },
    ],
    finalEyebrow: "08 / NEXT MOVE",
    finalTitle: "Start with the friction your team already feels.",
    finalBody:
      "Tell us where visibility, coordination or control is breaking down. We will identify the first system worth validating.",
    finalPrimary: "Book diagnosis",
    finalSecondary: "Talk to N3uralia",
  },
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return buildLocalizedMetadata({
    locale,
    title: page.metadataTitle,
    description: page.metadataDescription,
    path: "/soluciones",
  })
}

export default function SolucionesPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return (
    <main className="retro-page min-h-screen pt-20">
      <section className="border-b border-[rgba(118,214,214,.16)]">
        <div className="retro-shell grid gap-12 py-16 md:py-24 lg:grid-cols-[1.04fr_.96fr] lg:items-center">
          <div>
            <small>{page.heroEyebrow}</small>
            <h1 className="mt-6 max-w-5xl text-[clamp(44px,6vw,82px)]">{page.heroTitle}</h1>
            <p className="mt-7 max-w-3xl text-[16px] leading-8 text-[var(--n3-text-muted)]">{page.heroBody}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#solution-layers" className="retro-button retro-button-primary w-full gap-2 sm:w-auto">
                {page.heroPrimary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={href(locale, "/diagnostico")} className="retro-button w-full sm:w-auto">
                {page.heroSecondary}
              </Link>
            </div>
          </div>

          <div className="relative border border-[rgba(168,217,216,.22)] bg-[var(--n3-deep)] p-5 md:p-7">
            <span aria-hidden className="retro-corners"><i/><i/><i/><i/></span>
            <div className="flex items-center justify-between gap-4 border-b border-[rgba(118,214,214,.16)] pb-5">
              <span className="telemetry">N3 / OPERATIONAL SYSTEM MAP</span>
              <span className="telemetry">LIVE PATH</span>
            </div>
            <div className="relative mt-6 grid gap-px bg-[rgba(118,214,214,.16)] sm:grid-cols-2">
              {page.heroMap.map((node, index) => {
                const Icon = node.icon
                return (
                  <div key={node.label} className="min-h-[150px] bg-[var(--n3-black)] p-5">
                    <div className="flex items-center justify-between gap-3">
                      <Icon className="h-5 w-5 text-[var(--n3-teal-soft)]" />
                      <span className="telemetry">0{index + 1}</span>
                    </div>
                    <p className="mt-9 font-[var(--font-rajdhani)] text-[19px] uppercase tracking-[.12em] text-[var(--n3-text-light)]">
                      {node.label}
                    </p>
                    <p className="mt-2 text-[11px] leading-5 text-[var(--n3-text-muted)]">{node.note}</p>
                  </div>
                )
              })}
            </div>
            <div className="mt-5 flex items-center gap-3">
              <span className="h-px flex-1 bg-[rgba(118,214,214,.18)]" />
              <span className="telemetry">DATA → WORKFLOW → INTELLIGENCE → ACTION</span>
              <span className="h-px flex-1 bg-[rgba(118,214,214,.18)]" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(118,214,214,.16)] py-20 md:py-24">
        <div className="retro-shell">
          <div className="grid gap-5 lg:grid-cols-[.62fr_1.38fr] lg:items-end">
            <small>{page.solveEyebrow}</small>
            <h2 className="max-w-4xl text-[clamp(34px,4.2vw,58px)]">{page.solveTitle}</h2>
          </div>
          <div className="mt-12 grid gap-px bg-[rgba(118,214,214,.16)] md:grid-cols-2 lg:grid-cols-4">
            {page.problems.map((problem, index) => {
              const Icon = problem.icon
              return (
                <article key={problem.title} className="min-h-[230px] bg-[var(--n3-dark-surface)] p-6 md:p-7">
                  <div className="flex items-center justify-between">
                    <Icon className="h-5 w-5 text-[var(--n3-teal-soft)]" />
                    <span className="telemetry">0{index + 1}</span>
                  </div>
                  <h3 className="mt-12 text-[23px]">{problem.title}</h3>
                  <p className="mt-5 text-[13px] leading-6 text-[var(--n3-text-muted)]">{problem.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="solution-layers" className="scroll-mt-28 border-b border-[rgba(118,214,214,.16)] py-20 md:py-24">
        <div className="retro-shell">
          <div className="grid gap-6 lg:grid-cols-[.62fr_1.38fr] lg:items-end">
            <small>{page.layersEyebrow}</small>
            <div>
              <h2 className="max-w-4xl text-[clamp(34px,4.2vw,58px)]">{page.layersTitle}</h2>
              <p className="mt-5 max-w-3xl text-[14px] leading-7 text-[var(--n3-text-muted)]">{page.layersBody}</p>
            </div>
          </div>

          <div className="mt-12 grid gap-px bg-[rgba(118,214,214,.16)] md:grid-cols-2 lg:grid-cols-3">
            {page.layers.map((layer, index) => {
              const Icon = layer.icon
              return (
                <article key={layer.title} className="flex min-h-[360px] flex-col bg-[var(--n3-dark-surface)] p-6 md:p-7">
                  <div className="flex items-center justify-between">
                    <Icon className="h-6 w-6 text-[var(--n3-teal-soft)]" />
                    <span className="telemetry">0{index + 1}</span>
                  </div>
                  <h3 className="mt-10 text-[25px]">{layer.title}</h3>
                  <p className="mt-5 text-[13px] leading-6 text-[var(--n3-text-muted)]">{layer.text}</p>
                  <div className="mt-7 border-t border-[rgba(118,214,214,.16)] pt-5">
                    <p className="telemetry">{page.bestWhen}</p>
                    <p className="mt-3 text-[12px] leading-6 text-[var(--n3-text-muted)]">{layer.best}</p>
                  </div>
                  <div className="mt-auto flex flex-wrap gap-x-5 gap-y-3 border-t border-[rgba(118,214,214,.16)] pt-5">
                    <Link href="#quick-selector" className="inline-flex min-h-11 items-center gap-2 font-[var(--font-rajdhani)] text-[12px] uppercase tracking-[.12em] text-[var(--n3-teal-soft)] hover:text-[var(--n3-text-light)]">
                      {page.explore}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <Link href={href(locale, "/diagnostico")} className="inline-flex min-h-11 items-center font-[var(--font-rajdhani)] text-[12px] uppercase tracking-[.12em] text-[var(--n3-text-muted)] hover:text-[var(--n3-text-light)]">
                      {page.startDiagnosis}
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <SolutionsFitExplorer locale={locale} />

      <section className="border-b border-[rgba(118,214,214,.16)] py-20 md:py-24">
        <div className="retro-shell">
          <div className="grid gap-6 lg:grid-cols-[.62fr_1.38fr] lg:items-end">
            <small>{page.sectorsEyebrow}</small>
            <div>
              <h2 className="max-w-4xl text-[clamp(34px,4.2vw,58px)]">{page.sectorsTitle}</h2>
              <p className="mt-5 max-w-3xl text-[14px] leading-7 text-[var(--n3-text-muted)]">{page.sectorsBody}</p>
            </div>
          </div>

          <div className="mt-12 grid gap-px bg-[rgba(118,214,214,.16)] md:grid-cols-2 lg:grid-cols-3">
            {page.sectors.map((sector, index) => {
              const Icon = sector.icon
              return (
                <article key={sector.title} className="min-h-[315px] bg-[var(--n3-black)] p-6 md:p-7">
                  <div className="flex items-center justify-between">
                    <Icon className="h-5 w-5 text-[var(--n3-teal-soft)]" />
                    <span className="telemetry">0{index + 1}</span>
                  </div>
                  <h3 className="mt-9 text-[23px]">{sector.title}</h3>
                  <dl className="mt-6 space-y-4 border-t border-[rgba(118,214,214,.16)] pt-5">
                    <div>
                      <dt className="telemetry">{page.sectorLabels.friction}</dt>
                      <dd className="mt-2 text-[12px] leading-6 text-[var(--n3-text-muted)]">{sector.friction}</dd>
                    </div>
                    <div>
                      <dt className="telemetry">{page.sectorLabels.layer}</dt>
                      <dd className="mt-2 text-[12px] leading-6 text-[var(--n3-teal-soft)]">{sector.layer}</dd>
                    </div>
                    <div>
                      <dt className="telemetry">{page.sectorLabels.outcome}</dt>
                      <dd className="mt-2 text-[12px] leading-6 text-[var(--n3-text-muted)]">{sector.outcome}</dd>
                    </div>
                  </dl>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(118,214,214,.16)] py-20 md:py-24">
        <div className="retro-shell">
          <div className="grid gap-6 lg:grid-cols-[.62fr_1.38fr] lg:items-end">
            <small>{page.entryEyebrow}</small>
            <div>
              <h2 className="max-w-4xl text-[clamp(34px,4.2vw,58px)]">{page.entryTitle}</h2>
              <p className="mt-5 max-w-3xl text-[14px] leading-7 text-[var(--n3-text-muted)]">{page.entryBody}</p>
            </div>
          </div>
          <div className="mt-12 grid gap-px bg-[rgba(118,214,214,.16)] md:grid-cols-3">
            {page.entries.map((entry, index) => (
              <article key={entry.title} className="min-h-[280px] bg-[var(--n3-dark-surface)] p-7">
                <span className="telemetry">0{index + 1}</span>
                <h3 className="mt-10 text-[25px]">{entry.title}</h3>
                <p className="mt-5 text-[13px] leading-6 text-[var(--n3-text-muted)]">{entry.text}</p>
                <div className="mt-7 border-t border-[rgba(118,214,214,.16)] pt-5">
                  <p className="telemetry">{page.bestFor}</p>
                  <p className="mt-3 text-[12px] leading-6 text-[var(--n3-teal-soft)]">{entry.best}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[rgba(118,214,214,.16)] py-20 md:py-24">
        <div className="retro-shell">
          <div className="grid gap-6 lg:grid-cols-[.62fr_1.38fr] lg:items-end">
            <small>{page.proofEyebrow}</small>
            <div>
              <h2 className="max-w-4xl text-[clamp(34px,4.2vw,58px)]">{page.proofTitle}</h2>
              <p className="mt-5 max-w-3xl text-[14px] leading-7 text-[var(--n3-text-muted)]">{page.proofBody}</p>
            </div>
          </div>

          <div className="mt-12 grid gap-px bg-[rgba(118,214,214,.16)] md:grid-cols-2">
            {page.proofs.map((proof, index) => (
              <article key={proof.title} className="flex min-h-[340px] flex-col bg-[var(--n3-black)] p-6 md:p-7">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-[25px]">{proof.title}</h3>
                  <span className="telemetry">0{index + 1}</span>
                </div>
                <dl className="mt-7 space-y-5 border-t border-[rgba(118,214,214,.16)] pt-5">
                  <div>
                    <dt className="telemetry">{page.proofLabels.problem}</dt>
                    <dd className="mt-2 text-[12px] leading-6 text-[var(--n3-text-muted)]">{proof.problem}</dd>
                  </div>
                  <div>
                    <dt className="telemetry">{page.proofLabels.system}</dt>
                    <dd className="mt-2 text-[12px] leading-6 text-[var(--n3-text-light)]">{proof.system}</dd>
                  </div>
                  <div>
                    <dt className="telemetry">{page.proofLabels.outcome}</dt>
                    <dd className="mt-2 text-[12px] leading-6 text-[var(--n3-teal-soft)]">{proof.outcome}</dd>
                  </div>
                </dl>
                <Link href={href(locale, proof.path)} className="mt-auto inline-flex min-h-11 items-center gap-2 border-t border-[rgba(118,214,214,.16)] pt-5 font-[var(--font-rajdhani)] text-[12px] uppercase tracking-[.12em] text-[var(--n3-teal-soft)] hover:text-[var(--n3-text-light)]">
                  {page.proofLabels.view}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="retro-shell border-y border-[rgba(118,214,214,.2)] py-12 md:py-16">
          <small>{page.finalEyebrow}</small>
          <div className="mt-5 grid gap-9 lg:grid-cols-[1fr_.8fr] lg:items-end">
            <div>
              <h2 className="max-w-4xl text-[clamp(36px,4.8vw,64px)]">{page.finalTitle}</h2>
              <p className="mt-6 max-w-2xl text-[14px] leading-7 text-[var(--n3-text-muted)]">{page.finalBody}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link href={href(locale, "/diagnostico")} className="retro-button retro-button-primary w-full gap-2 sm:w-auto">
                {page.finalPrimary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={href(locale, "/contact")} className="retro-button w-full sm:w-auto">
                {page.finalSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
