import type { Metadata } from "next"
import Link from "next/link"
import {
  Activity,
  ArrowRight,
  Bot,
  Building2,
  CheckCircle2,
  Database,
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
import { SolutionsFocus } from "@/components/solutions-focus"
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

function Corners() {
  return <span aria-hidden className="retro-corners"><i/><i/><i/><i/></span>
}

function SectionIntro({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[310px_minmax(0,1fr)] lg:gap-16 lg:items-start">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <small>{eyebrow}</small>
      </div>
      <div>
        <h2 className="max-w-4xl text-[clamp(36px,4.6vw,64px)]">{title}</h2>
        {body ? <p className="mt-6 max-w-3xl text-[14px] leading-7 text-[var(--n3-text-muted)]">{body}</p> : null}
      </div>
    </div>
  )
}

function MediaPlaceholder({ label, code, className = "" }: { label: string; code: string; className?: string }) {
  return (
    <div aria-hidden className={`relative overflow-hidden border border-[rgba(168,217,216,.22)] bg-[var(--n3-deep)] ${className}`.trim()}>
      <Corners />
      <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "linear-gradient(rgba(118,214,214,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(118,214,214,.055) 1px, transparent 1px)", backgroundSize: "34px 34px" }} />
      <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-4 border-b border-[rgba(118,214,214,.16)] pb-4">
        <span className="telemetry">{code}</span>
        <span className="telemetry">IMAGE PLACEHOLDER</span>
      </div>
      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-5">
        <div>
          <span className="block h-2 w-2 rounded-full bg-[var(--n3-teal)] shadow-[0_0_16px_rgba(69,209,207,.36)]" />
          <p className="mt-3 max-w-[280px] font-[var(--font-rajdhani)] text-[18px] uppercase tracking-[.12em] text-[var(--n3-text-light)]">{label}</p>
        </div>
        <span className="telemetry">POSITION / LOCKED</span>
      </div>
      <span className="scan-line" />
    </div>
  )
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
        iconPath: "/n3uralia-retro/icons/friction-visibility.svg",
      },
      {
        title: "Coordinación manual",
        text: "Los equipos pierden tiempo copiando, validando, notificando y persiguiendo actualizaciones.",
        iconPath: "/n3uralia-retro/icons/friction-coordination.svg",
      },
      {
        title: "Respuesta lenta",
        text: "Clientes, operadores o proveedores esperan porque la información llega tarde al lugar correcto.",
        iconPath: "/n3uralia-retro/icons/friction-response.svg",
      },
      {
        title: "Falta de trazabilidad",
        text: "Aprobaciones, documentos, excepciones y decisiones son difíciles de auditar o reproducir.",
        iconPath: "/n3uralia-retro/icons/friction-traceability.svg",
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
    finalEyebrow: "07 / SIGUIENTE PASO",
    finalTitle: "Empieza con la fricción que tu equipo ya siente.",
    finalBody:
      "Cuéntanos dónde se está rompiendo la visibilidad, coordinación o control. Identificaremos el primer sistema que vale la pena validar.",
    finalPrimary: "Agendar diagnóstico",
    finalSecondary: "Hablar con N3uralia",
    placeholders: {
      layers: "Visual de capa de solución",
      entry: "Arquitectura de entrada",
      final: "Marco de diagnóstico",
    },
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
        iconPath: "/n3uralia-retro/icons/friction-visibility.svg",
      },
      {
        title: "Manual coordination",
        text: "Teams spend too much time copying, validating, notifying and chasing updates.",
        iconPath: "/n3uralia-retro/icons/friction-coordination.svg",
      },
      {
        title: "Slow response",
        text: "Customers, operators or suppliers wait because information reaches the right place too late.",
        iconPath: "/n3uralia-retro/icons/friction-response.svg",
      },
      {
        title: "Lack of traceability",
        text: "Approvals, documents, exceptions and decisions are hard to audit or reproduce.",
        iconPath: "/n3uralia-retro/icons/friction-traceability.svg",
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
    finalEyebrow: "07 / NEXT MOVE",
    finalTitle: "Start with the friction your team already feels.",
    finalBody:
      "Tell us where visibility, coordination or control is breaking down. We will identify the first system worth validating.",
    finalPrimary: "Book diagnosis",
    finalSecondary: "Talk to N3uralia",
    placeholders: {
      layers: "Solution-layer visual",
      entry: "Entry architecture",
      final: "Diagnosis framework",
    },
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
    <main className="retro-page min-h-screen">
      <section className="retro-hero retro-dark border-b border-[rgba(118,214,214,.16)]">
        <div className="retro-shell hero-grid">
          <div className="hero-copy">
            <small>{page.heroEyebrow}</small>
            <h1>{page.heroTitle}</h1>
            <p>{page.heroBody}</p>
            <div className="button-row">
              <Link href="#solution-layers" className="retro-button retro-button-primary gap-2">
                {page.heroPrimary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={href(locale, "/diagnostico")} className="retro-button">
                {page.heroSecondary}
              </Link>
            </div>
          </div>

          <div className="hero-photo border border-[rgba(168,217,216,.2)] bg-[var(--n3-deep)]">
            <Corners />
            <div className="absolute inset-0 grid grid-cols-2 gap-px bg-[rgba(118,214,214,.14)] p-px">
              {page.heroMap.map((node, index) => {
                const Icon = node.icon
                return (
                  <div key={node.label} className="relative flex min-h-[180px] flex-col justify-between bg-[var(--n3-black)] p-5 md:p-6">
                    <div className="flex items-center justify-between gap-4">
                      <Icon className="h-5 w-5 text-[var(--n3-teal-soft)]" />
                      <span className="telemetry">0{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-[var(--font-rajdhani)] text-[19px] uppercase tracking-[.12em] text-[var(--n3-text-light)]">{node.label}</p>
                      <p className="mt-2 text-[11px] leading-5 text-[var(--n3-text-muted)]">{node.note}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <span className="scan-line" />
          </div>
        </div>
      </section>

      <section className="retro-dark border-b border-[rgba(118,214,214,.16)] py-24 md:py-32">
        <div className="retro-shell">
          <SectionIntro eyebrow={page.solveEyebrow} title={page.solveTitle} />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4 xl:gap-6">
            {page.problems.map((problem, index) => (
              <SolutionsFocus key={problem.title} index={index} className="h-full !filter-none">
                <article className="group relative isolate flex h-full min-h-[330px] flex-col overflow-hidden border border-[rgba(118,214,214,.22)] bg-[var(--n3-deep)] p-6 transition duration-300 hover:-translate-y-[3px] hover:border-[rgba(168,217,216,.62)] hover:bg-[#081313] hover:shadow-[0_0_0_1px_rgba(69,209,207,.08),0_0_30px_rgba(69,209,207,.09),inset_0_0_34px_rgba(69,209,207,.035)] md:min-h-[390px] md:p-7">
                  <span className="pointer-events-none absolute inset-3 border-y border-[rgba(118,214,214,.035)]" aria-hidden />
                  <div className="relative z-[1] flex items-center">
                    <span className="grid h-24 w-24 shrink-0 place-items-center border border-[rgba(168,217,216,.28)] bg-[rgba(3,6,6,.62)] transition duration-300 group-hover:-translate-y-0.5 group-hover:border-[rgba(168,217,216,.72)] group-hover:bg-[rgba(3,6,6,.82)] group-hover:drop-shadow-[0_0_7px_rgba(69,209,207,.34)] md:h-28 md:w-28">
                      <img src={problem.iconPath} alt="" className="h-[76px] w-[76px] md:h-[88px] md:w-[88px]" />
                    </span>
                  </div>
                  <h3 className="relative z-[1] mt-8 text-[26px] leading-[1.12] tracking-[.13em] md:mt-10 md:text-[clamp(24px,2.15vw,31px)]">{problem.title}</h3>
                  <p className="relative z-[1] mt-5 max-w-[30ch] text-[14px] leading-[1.7] text-[var(--n3-text-muted)] md:mt-[22px] md:text-[13px] md:leading-[1.75]">{problem.text}</p>
                  <span aria-hidden className="relative z-[1] mt-auto pt-7 md:pt-[30px]">
                    <span className="relative block h-px w-full bg-[rgba(118,214,214,.2)] before:absolute before:-top-0.5 before:left-0 before:h-[5px] before:w-[5px] before:bg-[var(--n3-teal)] before:shadow-[0_0_8px_rgba(69,209,207,.35)] after:absolute after:-top-0.5 after:right-0 after:h-[5px] after:w-[5px] after:bg-[var(--n3-teal)] after:opacity-50 after:shadow-[0_0_8px_rgba(69,209,207,.35)]" />
                  </span>
                </article>
              </SolutionsFocus>
            ))}
          </div>
        </div>
      </section>

      <section id="solution-layers" className="retro-dark expertise-scan scroll-mt-28 border-b border-[rgba(118,214,214,.16)] py-24 md:py-32">
        <div className="retro-shell">
          <SectionIntro eyebrow={page.layersEyebrow} title={page.layersTitle} body={page.layersBody} />
          <div className="mt-10 border-t border-[rgba(118,214,214,.16)]">
            {page.layers.map((layer, index) => {
              const Icon = layer.icon
              return (
                <SolutionsFocus key={layer.title} index={index}>
                  <article className="expertise-row">
                    <div className="hidden lg:block">
                      <p className="telemetry">{`SYS 0${index + 1}`}</p>
                      <p className="telemetry mt-2">STATUS ACTIVE</p>
                      <p className="telemetry mt-2">SYNCED</p>
                    </div>
                    <div className="expertise-graphic">
                      <MediaPlaceholder label={page.placeholders.layers} code={`LAYER / 0${index + 1}`} className="h-full" />
                    </div>
                    <div className="expertise-copy">
                      <span>0{index + 1} —</span>
                      <div className="mt-3 flex items-center gap-3 text-[var(--n3-teal-soft)]">
                        <Icon className="h-5 w-5" />
                        <span className="telemetry">SOLUTION LAYER</span>
                      </div>
                      <h2>{layer.title}</h2>
                      <p>{layer.text}</p>
                      <div className="border-t border-[rgba(118,214,214,.16)] pt-4">
                        <span className="telemetry">{page.bestWhen}</span>
                        <p className="!mb-0 !mt-3 text-[12px] leading-6 text-[var(--n3-text-muted)]">{layer.best}</p>
                      </div>
                      <div className="mt-5 flex flex-wrap gap-3">
                        <Link href="#quick-selector" className="retro-button gap-2">
                          {page.explore}
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                        <Link href={href(locale, "/diagnostico")} className="retro-button">
                          {page.startDiagnosis}
                        </Link>
                      </div>
                    </div>
                  </article>
                </SolutionsFocus>
              )
            })}
          </div>
        </div>
      </section>

      <SolutionsFitExplorer locale={locale} />

      <section className="retro-dark border-b border-[rgba(118,214,214,.16)] py-24 md:py-32">
        <div className="retro-shell">
          <SectionIntro eyebrow={page.sectorsEyebrow} title={page.sectorsTitle} body={page.sectorsBody} />
          <div className="mt-14 grid gap-px bg-[rgba(118,214,214,.16)] md:grid-cols-2 lg:grid-cols-3">
            {page.sectors.map((sector, index) => {
              const Icon = sector.icon
              return (
                <SolutionsFocus key={sector.title} index={index} className="h-full">
                  <article className="flex h-full min-h-[330px] flex-col bg-[var(--n3-black)] p-6 md:p-7">
                    <div className="flex items-center justify-between">
                      <span className="grid h-10 w-10 place-items-center border border-[rgba(168,217,216,.18)] text-[var(--n3-teal-soft)]"><Icon className="h-4 w-4" /></span>
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
                </SolutionsFocus>
              )
            })}
          </div>
        </div>
      </section>

      <section className="retro-dark method border-b border-[rgba(118,214,214,.16)] !py-24 md:!py-32">
        <div className="retro-shell method-grid">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <small>{page.entryEyebrow}</small>
            <h2>{page.entryTitle}</h2>
            <p className="max-w-lg text-[14px] leading-7 text-[var(--n3-text-muted)]">{page.entryBody}</p>
            <div className="radar mt-8">
              <MediaPlaceholder label={page.placeholders.entry} code="ENTRY / ARCH" className="h-full" />
            </div>
          </div>
          <div className="timeline">
            {page.entries.map((entry, index) => (
              <SolutionsFocus key={entry.title} index={index}>
                <article className="timeline-step min-h-[190px]">
                  <span>0{index + 1}</span>
                  <h3>{entry.title}</h3>
                  <p className="mt-4 max-w-xl !text-[13px] !leading-6">{entry.text}</p>
                  <div className="mt-5 border-t border-[rgba(118,214,214,.14)] pt-4">
                    <span className="telemetry">{page.bestFor}</span>
                    <p className="mt-2 max-w-xl !text-[12px] !leading-6 !text-[var(--n3-teal-soft)]">{entry.best}</p>
                  </div>
                </article>
              </SolutionsFocus>
            ))}
          </div>
        </div>
      </section>

      <section className="retro-dark diagnosis !py-24 md:!py-32">
        <div className="retro-shell diagnosis-grid items-center">
          <div>
            <small>{page.finalEyebrow}</small>
            <h2>{page.finalTitle}</h2>
            <p>{page.finalBody}</p>
            <div className="button-row">
              <Link href={href(locale, "/diagnostico")} className="retro-button retro-button-primary gap-2">
                {page.finalPrimary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={href(locale, "/contact")} className="retro-button">
                {page.finalSecondary}
              </Link>
            </div>
          </div>
          <MediaPlaceholder label={page.placeholders.final} code="NEXT / DIAGNOSIS" className="min-h-[430px]" />
        </div>
      </section>
    </main>
  )
}
