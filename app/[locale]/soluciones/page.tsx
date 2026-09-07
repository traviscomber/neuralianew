import type { Metadata } from "next"
import Link from "next/link"
import {
  Activity,
  ArrowRight,
  Boxes,
  CheckCircle2,
  Clock3,
  Database,
  Factory,
  FileSearch,
  Gauge,
  ListChecks,
  MessageSquareText,
  Network,
  Package,
  Repeat2,
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
    <div className="grid gap-8 lg:grid-cols-[270px_minmax(0,1fr)] lg:items-start lg:gap-16">
      <div className="lg:sticky lg:top-28 lg:self-start"><small>{eyebrow}</small></div>
      <div>
        <h2 className="max-w-4xl text-[clamp(36px,4.6vw,64px)]">{title}</h2>
        {body ? <p className="mt-6 max-w-3xl text-[14px] leading-7 text-[var(--n3-text-muted)]">{body}</p> : null}
      </div>
    </div>
  )
}

function SystemMap({ locale }: { locale: Locale }) {
  const labels = locale === "es"
    ? ["Datos", "Workflow", "Inteligencia", "Acción"]
    : ["Data", "Workflow", "Intelligence", "Action"]
  const icons = [Database, Workflow, Activity, CheckCircle2]

  return (
    <div className="relative min-h-[330px] overflow-hidden border border-[rgba(168,217,216,.22)] bg-[var(--n3-deep)] p-6 sm:min-h-[360px] sm:p-8">
      <Corners />
      <div className="absolute inset-x-10 top-1/2 hidden h-px -translate-y-1/2 bg-[rgba(118,214,214,.28)] sm:block" />
      <div className="relative grid h-full min-h-[280px] grid-cols-2 items-center gap-5 sm:grid-cols-4 sm:gap-3">
        {labels.map((label, index) => {
          const Icon = icons[index]
          return (
            <div key={label} className="relative flex flex-col items-center text-center">
              {index === 2 ? <span className="absolute -inset-5 border border-[rgba(118,214,214,.12)]" aria-hidden /> : null}
              <div className={`relative z-10 grid h-16 w-16 place-items-center border bg-[var(--n3-black)] ${index === 2 ? "border-[var(--n3-teal-soft)] text-[var(--n3-teal-soft)]" : "border-[rgba(168,217,216,.25)] text-[var(--n3-text-light)]"}`}>
                <Icon className="h-6 w-6" strokeWidth={1.45} />
              </div>
              <p className="relative z-10 mt-4 font-[var(--font-rajdhani)] text-[14px] uppercase tracking-[.12em] text-[var(--n3-text-light)]">{label}</p>
              <span className="relative z-10 mt-2 text-[10px] uppercase tracking-[.16em] text-[var(--n3-text-muted)]">0{index + 1}</span>
              {index < labels.length - 1 ? <ArrowRight className="absolute -right-4 top-6 hidden h-4 w-4 text-[var(--n3-teal)] sm:block" strokeWidth={1.4} /> : null}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function EntryPathVisual({ locale }: { locale: Locale }) {
  const steps = locale === "es"
    ? ["Piloto operativo", "Sistema de producción", "Modernización con IA"]
    : ["Operational pilot", "Production system", "AI-enabled modernization"]
  return (
    <div className="relative overflow-hidden border border-[rgba(168,217,216,.2)] bg-[var(--n3-deep)] p-6 sm:p-8">
      <Corners />
      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step} className="relative border border-[rgba(168,217,216,.18)] bg-[var(--n3-black)] px-5 py-6">
            <span className="telemetry">0{index + 1}</span>
            <div className="mt-5 h-px w-10 bg-[var(--n3-teal)]" />
            <p className="mt-5 font-[var(--font-rajdhani)] text-[18px] uppercase tracking-[.08em] text-[var(--n3-text-light)]">{step}</p>
            <span className="mt-5 block h-2 w-2 border border-[var(--n3-teal-soft)]" aria-hidden />
            {index < 2 ? <ArrowRight className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 bg-[var(--n3-deep)] text-[var(--n3-teal-soft)] md:block" strokeWidth={1.4} /> : null}
          </div>
        ))}
      </div>
    </div>
  )
}

function DiagnosticPathVisual({ locale }: { locale: Locale }) {
  const steps = locale === "es"
    ? ["Problema", "Contexto", "Oportunidad de sistema", "Camino de piloto"]
    : ["Problem", "Context", "System opportunity", "Pilot path"]
  return (
    <div className="border border-[rgba(168,217,216,.2)] bg-[var(--n3-deep)] p-6 sm:p-8">
      <div className="grid gap-3">
        {steps.map((step, index) => (
          <div key={step} className="grid grid-cols-[42px_minmax(0,1fr)_18px] items-center gap-4 border-b border-[rgba(118,214,214,.14)] py-4 last:border-b-0">
            <span className="telemetry">0{index + 1}</span>
            <span className="font-[var(--font-rajdhani)] text-[16px] uppercase tracking-[.08em] text-[var(--n3-text-light)]">{step}</span>
            <ArrowRight className="h-4 w-4 text-[var(--n3-teal)]" strokeWidth={1.4} />
          </div>
        ))}
      </div>
    </div>
  )
}

const content = {
  es: {
    metadataTitle: "Soluciones | N3uralia",
    metadataDescription: "Sistemas de IA y software para operaciones reales: inteligencia operacional, automatización, asistentes, documentos, reconocimiento y plataformas internas.",
    heroEyebrow: "01 / SOLUCIONES PARA OPERACIONES REALES",
    heroTitle: "Sistemas de IA y software para operaciones reales.",
    heroBody: "N3uralia construye sistemas operacionales que conectan datos, flujos, documentos, IA y personas — para que los equipos vean qué está pasando, actúen más rápido y escalen con control.",
    heroPrimary: "Encontrar la solución correcta",
    heroSecondary: "Agendar diagnóstico",
    solveEyebrow: "02 / DÓNDE SE PIERDE EL CONTROL",
    solveTitle: "Dónde las operaciones pierden control.",
    solveBody: "N3uralia ayuda a recuperar visibilidad, coordinación y control cuando la operación se vuelve compleja.",
    problems: [
      { title: "Vacíos de visibilidad", text: "Los datos viven en planillas, email, capturas y herramientas desconectadas.", icon: Network },
      { title: "Coordinación manual", text: "Los equipos pasan demasiado tiempo copiando, validando, notificando y persiguiendo actualizaciones.", icon: Repeat2 },
      { title: "Respuesta lenta", text: "Clientes, operadores o proveedores esperan porque la información llega demasiado tarde al lugar correcto.", icon: Clock3 },
      { title: "Falta de trazabilidad", text: "Aprobaciones, documentos, excepciones y decisiones son difíciles de auditar o reproducir.", icon: ListChecks },
    ],
    layersEyebrow: "03 / CAPAS DE SOLUCIÓN",
    layersTitle: "Core Solution Layers",
    layersBody: "Elige primero la capa que necesita tu operación. Cada capa puede activarse por separado y conectarse con lo que ya existe.",
    bestWhen: "Funciona mejor cuando",
    layers: [
      { title: "Inteligencia Operacional", text: "Dashboards, centros de control y capas de visibilidad para equipos que necesitan una sola versión de la realidad.", best: "La operación está fragmentada entre reportes, sistemas y responsables.", icon: Gauge },
      { title: "Automatización de Flujos", text: "Aprobaciones, alertas, handoffs y procesos recurrentes que no deberían depender de seguimiento manual.", best: "Un proceso repetible consume tiempo, genera errores o se bloquea en el mismo punto.", icon: Workflow },
      { title: "Asistentes de IA", text: "Asistentes entrenados sobre contexto operacional, documentos y datos para responder, guiar y acelerar equipos.", best: "Las personas necesitan respuestas rápidas pero el contexto está disperso o cambia por rol.", icon: MessageSquareText },
      { title: "Inteligencia Documental", text: "Extracción, clasificación, validación y trazabilidad para operaciones intensivas en documentos.", best: "Leer, copiar, validar o buscar documentos consume horas y retrasa decisiones.", icon: FileSearch },
      { title: "Sistemas de Reconocimiento", text: "Visión computacional para fauna, calidad productiva, ganadería, seguridad y señales visuales operacionales.", best: "Imágenes o video contienen eventos que hoy dependen de revisión manual o se detectan tarde.", icon: ScanLine },
      { title: "Plataformas Internas", text: "Portales y sistemas a medida que conectan usuarios, datos, permisos, workflows y reporting.", best: "La operación ya no cabe bien en herramientas aisladas y necesita una capa propia de coordinación.", icon: Boxes },
    ],
    sectorsEyebrow: "05 / SOLUCIONES POR SECTOR",
    sectorsTitle: "Dónde vemos el mejor fit.",
    sectorsBody: "Los sectores contextualizan el problema. La capa de solución sigue siendo la unidad principal de diseño.",
    sectorLabels: { pressure: "Presión", layer: "Capa probable", outcome: "Resultado" },
    sectors: [
      { title: "Retail y e-commerce", pressure: "Catálogo, soporte y coordinación entre canales.", layer: "Automatización de Flujos + Asistentes de IA", outcome: "Más conversión, menos carga operacional.", icon: Package },
      { title: "Minería y recursos", pressure: "Alertas, trazabilidad, monitoreo y continuidad operacional.", layer: "Inteligencia Operacional + Plataformas Internas", outcome: "Más visibilidad y respuesta más rápida.", icon: Activity },
      { title: "Manufactura", pressure: "Flujos de planta, calidad, documentación y handoffs.", layer: "Automatización + Reconocimiento + Inteligencia Documental", outcome: "Más continuidad y procesos auditables.", icon: Factory },
      { title: "Hospitality y turismo", pressure: "Reservas, servicio, respuesta a huéspedes y coordinación interna.", layer: "Asistentes de IA + Automatización de Flujos", outcome: "Respuesta más rápida y mejor coordinación.", icon: Users },
      { title: "Logística y supply chain", pressure: "Tracking, excepciones, handoffs y decisiones operativas.", layer: "Inteligencia Operacional + Automatización", outcome: "Más control y menos puntos ciegos.", icon: Truck },
      { title: "Servicios regulados", pressure: "Procesos documentales, validaciones, trazabilidad y control.", layer: "Inteligencia Documental + Plataformas Internas", outcome: "Más gobernanza y menor riesgo operacional.", icon: ShieldCheck },
    ],
    entryEyebrow: "06 / FORMAS DE ENTRADA",
    entryTitle: "Cómo N3uralia entra en la operación.",
    entryBody: "Tres caminos claros según el nivel de certeza, integración y cambio que la operación necesita.",
    bestFor: "Mejor para",
    entries: [
      { title: "Piloto operativo", text: "Un workflow concreto, una integración prioritaria y una métrica clara.", best: "Alcance acotado, entrega rápida y riesgo controlado." },
      { title: "Sistema de producción", text: "Arquitectura, integraciones y una capa operativa que permanece.", best: "Problema de alto valor conocido, continuidad operacional y gobernanza real." },
      { title: "Modernización con IA", text: "Automatización e inteligencia sobre el software existente sin reescribir todo.", best: "Integración progresiva, resultados visibles y menor disrupción." },
    ],
    finalEyebrow: "07 / SIGUIENTE PASO",
    finalTitle: "Empieza con un punto de presión operacional.",
    finalBody: "Cuéntanos dónde se está rompiendo la visibilidad, coordinación o control. Identificaremos el primer sistema que vale la pena validar.",
    finalPrimary: "Agendar diagnóstico",
    finalSecondary: "Hablar con N3uralia",
    contactLabel: "Contacto comercial",
  },
  en: {
    metadataTitle: "Solutions | N3uralia",
    metadataDescription: "AI and software systems for real operations: operational intelligence, automation, assistants, documents, recognition and internal platforms.",
    heroEyebrow: "01 / SOLUTIONS FOR REAL OPERATIONS",
    heroTitle: "AI and software systems for real operations.",
    heroBody: "N3uralia builds operational systems that connect data, workflows, documents, AI and people — so teams can see what is happening, act faster and scale with control.",
    heroPrimary: "Find the right solution",
    heroSecondary: "Book diagnosis",
    solveEyebrow: "02 / WHERE CONTROL BREAKS DOWN",
    solveTitle: "Where operations lose control.",
    solveBody: "N3uralia helps teams regain visibility, coordination and control where operations become complex.",
    problems: [
      { title: "Visibility gaps", text: "Data lives in spreadsheets, email, screenshots and disconnected tools.", icon: Network },
      { title: "Manual coordination", text: "Teams spend too much time copying, validating, notifying and chasing updates.", icon: Repeat2 },
      { title: "Slow response", text: "Customers, operators or suppliers wait because information reaches the right place too late.", icon: Clock3 },
      { title: "Lack of traceability", text: "Approvals, documents, exceptions and decisions are hard to audit or reproduce.", icon: ListChecks },
    ],
    layersEyebrow: "03 / CORE SOLUTION LAYERS",
    layersTitle: "Core Solution Layers",
    layersBody: "Choose the layer your operation needs first. Each layer can stand on its own and connect to the systems already in place.",
    bestWhen: "Best when",
    layers: [
      { title: "Operational Intelligence", text: "Dashboards, command centers and visibility layers for teams that need one version of reality.", best: "The operation is fragmented across reports, systems and owners.", icon: Gauge },
      { title: "Workflow Automation", text: "Approvals, alerts, handoffs and recurring operational processes that should not depend on manual follow-up.", best: "A repeatable process consumes time, creates errors or gets stuck in the same place.", icon: Workflow },
      { title: "AI Assistants", text: "Assistants trained on operational context, documents and data to answer, guide and accelerate teams.", best: "People need fast answers but context is scattered or changes by role.", icon: MessageSquareText },
      { title: "Document Intelligence", text: "Extraction, classification, validation and traceability for document-heavy operations.", best: "Reading, copying, validating or finding documents consumes hours and delays decisions.", icon: FileSearch },
      { title: "Recognition Systems", text: "Computer vision for wildlife, production quality, livestock, security and visual operational signals.", best: "Images or video contain events that depend on manual review or are detected too late.", icon: ScanLine },
      { title: "Internal Platforms", text: "Custom portals and systems that connect users, data, permissions, workflows and reporting.", best: "The operation no longer fits isolated tools and needs its own coordination layer.", icon: Boxes },
    ],
    sectorsEyebrow: "05 / SOLUTIONS BY SECTOR",
    sectorsTitle: "Where we see the strongest fit.",
    sectorsBody: "Sectors provide context. The solution layer remains the primary unit of design.",
    sectorLabels: { pressure: "Pressure", layer: "Likely layer", outcome: "Outcome" },
    sectors: [
      { title: "Retail and e-commerce", pressure: "Catalog operations, support and channel coordination.", layer: "Workflow Automation + AI Assistants", outcome: "More conversion, less operational drag.", icon: Package },
      { title: "Mining and resources", pressure: "Alerts, traceability, monitoring and operational continuity.", layer: "Operational Intelligence + Internal Platforms", outcome: "More visibility and faster response.", icon: Activity },
      { title: "Manufacturing", pressure: "Plant workflows, quality, documentation and cross-team handoffs.", layer: "Automation + Recognition + Document Intelligence", outcome: "More continuity and auditable processes.", icon: Factory },
      { title: "Hospitality and tourism", pressure: "Reservations, service operations, guest response and internal coordination.", layer: "AI Assistants + Workflow Automation", outcome: "Faster response and better coordination.", icon: Users },
      { title: "Logistics and supply chain", pressure: "Tracking, exceptions, handoffs and operational decisions.", layer: "Operational Intelligence + Automation", outcome: "More control and fewer blind spots.", icon: Truck },
      { title: "Regulated services", pressure: "Document-heavy processes, validations, traceability and control.", layer: "Document Intelligence + Internal Platforms", outcome: "More governance and lower operational risk.", icon: ShieldCheck },
    ],
    entryEyebrow: "06 / ENTRY PATHS",
    entryTitle: "How N3uralia enters the operation.",
    entryBody: "Three clear paths depending on how much certainty, integration and change the operation needs.",
    bestFor: "Best for",
    entries: [
      { title: "Operational pilot", text: "One concrete workflow, one priority integration and one clear metric.", best: "Focused scope, fast delivery, controlled risk." },
      { title: "Production system", text: "Architecture, integrations and an operating layer that lasts.", best: "Known high-value problem, operational continuity and real governance." },
      { title: "AI-enabled modernization", text: "Automation and intelligence on top of existing software without a full rewrite.", best: "Progressive integration, visible wins and lower disruption." },
    ],
    finalEyebrow: "07 / NEXT MOVE",
    finalTitle: "Start with one operational pressure point.",
    finalBody: "Tell us where visibility, coordination or control is breaking down. We will identify the first system worth validating.",
    finalPrimary: "Book diagnosis",
    finalSecondary: "Talk to N3uralia",
    contactLabel: "Sales contact",
  },
} as const

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]
  return buildLocalizedMetadata({
    locale,
    path: "/soluciones",
    title: page.metadataTitle,
    description: page.metadataDescription,
  })
}

export default function SolutionsPage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return (
    <main className="retro-page overflow-x-hidden bg-[var(--n3-black)]">
      <section className="retro-dark border-b border-[rgba(118,214,214,.16)] py-20 sm:py-24 lg:py-28">
        <div className="retro-shell grid items-center gap-12 lg:grid-cols-[.92fr_1.08fr] lg:gap-16">
          <div>
            <small>{page.heroEyebrow}</small>
            <h1 className="mt-7 max-w-[780px] text-[clamp(44px,6vw,82px)] leading-[.96]">{page.heroTitle}</h1>
            <p className="mt-7 max-w-2xl text-[15px] leading-8 text-[var(--n3-text-muted)]">{page.heroBody}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#quick-selector" className="retro-button retro-button-primary w-full justify-center sm:w-auto">{page.heroPrimary}<ArrowRight className="h-4 w-4" /></Link>
              <Link href={href(locale, "/diagnostico")} className="retro-button w-full justify-center sm:w-auto">{page.heroSecondary}</Link>
            </div>
          </div>
          <SystemMap locale={locale} />
        </div>
      </section>

      <section className="retro-dark border-b border-[rgba(118,214,214,.16)] py-24 md:py-32">
        <div className="retro-shell">
          <SectionIntro eyebrow={page.solveEyebrow} title={page.solveTitle} body={page.solveBody} />
          <div className="mt-14 grid gap-px bg-[rgba(118,214,214,.16)] md:grid-cols-2 xl:grid-cols-4">
            {page.problems.map((item, index) => {
              const Icon = item.icon
              return (
                <SolutionsFocus key={item.title} index={index} className="bg-[var(--n3-black)]">
                  <article className="h-full min-h-[250px] p-7 lg:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <span className="grid h-12 w-12 place-items-center border border-[rgba(168,217,216,.22)] text-[var(--n3-teal-soft)]"><Icon className="h-5 w-5" strokeWidth={1.45} /></span>
                      <span className="telemetry">0{index + 1}</span>
                    </div>
                    <h3 className="mt-8 text-[26px]">{item.title}</h3>
                    <p className="mt-4 text-[13px] leading-6 text-[var(--n3-text-muted)]">{item.text}</p>
                  </article>
                </SolutionsFocus>
              )
            })}
          </div>
        </div>
      </section>

      <section className="retro-dark border-b border-[rgba(118,214,214,.16)] py-24 md:py-32">
        <div className="retro-shell">
          <SectionIntro eyebrow={page.layersEyebrow} title={page.layersTitle} body={page.layersBody} />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {page.layers.map((item, index) => {
              const Icon = item.icon
              return (
                <SolutionsFocus key={item.title} index={index}>
                  <article className="relative h-full min-h-[360px] border border-[rgba(168,217,216,.22)] bg-[var(--n3-deep)] p-7 lg:p-8">
                    <Corners />
                    <div className="flex items-start justify-between gap-5">
                      <span className="grid h-14 w-14 place-items-center border border-[var(--n3-teal)] text-[var(--n3-teal-soft)]"><Icon className="h-6 w-6" strokeWidth={1.4} /></span>
                      <span className="telemetry">0{index + 1}</span>
                    </div>
                    <h3 className="mt-9 text-[30px]">{item.title}</h3>
                    <p className="mt-5 text-[13px] leading-6 text-[var(--n3-text-muted)]">{item.text}</p>
                    <div className="mt-8 border-t border-[rgba(118,214,214,.16)] pt-5">
                      <p className="telemetry">{page.bestWhen}</p>
                      <p className="mt-3 text-[12px] leading-6 text-[var(--n3-text-light)]">{item.best}</p>
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
          <div className="mt-14 grid gap-px bg-[rgba(118,214,214,.12)] md:grid-cols-2 xl:grid-cols-3">
            {page.sectors.map((item, index) => {
              const Icon = item.icon
              return (
                <article key={item.title} className="bg-[var(--n3-black)] p-6 lg:p-7">
                  <div className="flex items-center justify-between gap-4"><Icon className="h-5 w-5 text-[var(--n3-teal)]" strokeWidth={1.35} /><span className="telemetry">0{index + 1}</span></div>
                  <h3 className="mt-6 text-[24px]">{item.title}</h3>
                  <dl className="mt-6 space-y-4 text-[12px] leading-6">
                    <div><dt className="telemetry">{page.sectorLabels.pressure}</dt><dd className="mt-1 text-[var(--n3-text-muted)]">{item.pressure}</dd></div>
                    <div><dt className="telemetry">{page.sectorLabels.layer}</dt><dd className="mt-1 text-[var(--n3-text-light)]">{item.layer}</dd></div>
                    <div><dt className="telemetry">{page.sectorLabels.outcome}</dt><dd className="mt-1 text-[var(--n3-teal-soft)]">{item.outcome}</dd></div>
                  </dl>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="retro-dark border-b border-[rgba(118,214,214,.16)] py-24 md:py-32">
        <div className="retro-shell">
          <SectionIntro eyebrow={page.entryEyebrow} title={page.entryTitle} body={page.entryBody} />
          <div className="mt-14"><EntryPathVisual locale={locale} /></div>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {page.entries.map((item, index) => (
              <article key={item.title} className="border border-[rgba(168,217,216,.18)] bg-[var(--n3-black)] p-6 lg:p-7">
                <span className="telemetry">0{index + 1}</span>
                <h3 className="mt-5 text-[26px]">{item.title}</h3>
                <p className="mt-4 text-[13px] leading-6 text-[var(--n3-text-muted)]">{item.text}</p>
                <div className="mt-6 border-t border-[rgba(118,214,214,.14)] pt-4"><p className="telemetry">{page.bestFor}</p><p className="mt-2 text-[12px] leading-6 text-[var(--n3-text-light)]">{item.best}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="retro-dark py-24 md:py-32">
        <div className="retro-shell grid items-center gap-12 lg:grid-cols-[1fr_.85fr] lg:gap-16">
          <div>
            <small>{page.finalEyebrow}</small>
            <h2 className="mt-7 max-w-4xl text-[clamp(40px,5vw,68px)]">{page.finalTitle}</h2>
            <p className="mt-6 max-w-2xl text-[14px] leading-7 text-[var(--n3-text-muted)]">{page.finalBody}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={href(locale, "/diagnostico")} className="retro-button retro-button-primary w-full justify-center sm:w-auto">{page.finalPrimary}<ArrowRight className="h-4 w-4" /></Link>
              <a href="mailto:juan@n3uralia.com" className="retro-button w-full justify-center sm:w-auto">{page.finalSecondary}</a>
            </div>
            <div className="mt-8 border-t border-[rgba(118,214,214,.15)] pt-6 text-[12px] leading-6 text-[var(--n3-text-muted)]">
              <span className="telemetry mr-4">{page.contactLabel}</span>
              <a className="mr-4 text-[var(--n3-text-light)] hover:text-[var(--n3-teal-soft)]" href="mailto:juan@n3uralia.com">juan@n3uralia.com</a>
              <a className="mr-4 text-[var(--n3-text-light)] hover:text-[var(--n3-teal-soft)]" href="tel:+56993826127">+56 9 9382 6127</a>
              <span>Santiago, Chile · LATAM</span>
            </div>
          </div>
          <DiagnosticPathVisual locale={locale} />
        </div>
      </section>
    </main>
  )
}
