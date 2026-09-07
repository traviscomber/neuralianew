import type { Metadata } from "next"
import Link from "next/link"
import {
  Activity,
  ArrowRight,
  Boxes,
  CircleDot,
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
  ShoppingCart,
  Truck,
  Users,
  Workflow,
} from "lucide-react"
import { SolutionsFitExplorer } from "@/components/solutions-fit-explorer"
import { SolutionsFocus } from "@/components/solutions-focus"
import { DEFAULT_LOCALE, isValidLocale, type Locale } from "@/lib/get-locale"
import { buildLocalizedMetadata } from "@/lib/page-metadata"
import styles from "./solutions-mockup.module.css"

interface PageProps {
  params: { locale: string }
}

function href(locale: Locale, path: string) {
  return `/${locale}${path}`
}

const content = {
  en: {
    metadataTitle: "Solutions | N3uralia",
    metadataDescription:
      "AI and software systems for real operations: operational intelligence, automation, assistants, documents, recognition and internal platforms.",
    heroTitleA: "AI and software systems for",
    heroTitleB: "real operations.",
    heroBody:
      "N3uralia builds operational systems that connect data, workflows, documents, AI and people — so teams can see what is happening, act faster and scale with control.",
    primary: "Find the right solution",
    secondary: "Book diagnosis",
    pressureTitle: "Where operations lose control.",
    pressureBody:
      "N3uralia helps teams regain visibility, coordination and control where operations become complex.",
    problems: [
      ["Visibility gaps", "Data lives in spreadsheets, email, screenshots and disconnected tools.", Network],
      ["Manual coordination", "Teams spend too much time copying, validating, notifying and chasing updates.", Repeat2],
      ["Slow response", "Customers, operators or suppliers wait because information reaches the right place too late.", Clock3],
      ["Lack of traceability", "Approvals, documents, exceptions and decisions are hard to audit or reproduce.", ListChecks],
    ],
    layersTitleA: "Core solution",
    layersTitleB: "layers",
    layersBody: "Choose the layer your operation needs first.",
    layers: [
      ["Operational Intelligence", "Dashboards, command centers and visibility layers for teams that need one version of reality.", Gauge],
      ["Workflow Automation", "Approvals, alerts, handoffs and recurring processes so teams can move faster with less manual work.", Workflow],
      ["AI Assistants", "Assistants trained on operational context, documents and data to answer, guide and accelerate teams.", MessageSquareText],
      ["Document Intelligence", "Extraction, classification, validation and traceability for document-heavy operations.", FileSearch],
      ["Recognition Systems", "Computer vision for quality, live production monitoring, security and visual operational signals.", ScanLine],
      ["Internal Platforms", "Custom portals and systems that connect users, data, permissions, workflows and reporting.", Boxes],
    ],
    sectorTitleA: "Where we see the",
    sectorTitleB: "strongest fit.",
    sectorBody: "Same solution layers. Different operations.",
    sectors: [
      ["Retail & e-commerce", "Catalogs, support and channel coordination.", ShoppingCart],
      ["Mining & resources", "Alerts, traceability and operational continuity.", Activity],
      ["Manufacturing", "Plant workflows, quality and cross-team handoffs.", Factory],
      ["Hospitality & tourism", "Reservations, service operations and guest response.", Users],
      ["Logistics & supply chain", "Tracking, exceptions and operational decisions.", Truck],
      ["Regulated services", "Document-heavy processes, validations and control.", ShieldCheck],
    ],
    entryTitleA: "Three ways to",
    entryTitleB: "start.",
    entryBody: "Different entry points. Same long-term value.",
    entries: [
      ["Operational pilot", "One concrete workflow, one priority integration and one clear metric.", "Focused scope, fast delivery, controlled risk.", Network],
      ["Production system", "Architecture, integrations and an operating layer that lasts.", "Known high-value problems, operational continuity.", LayersIcon],
      ["AI-enabled modernization", "Automation and intelligence on top of existing software without a full rewrite.", "Progressive integration, visible wins, lower disruption.", ModernizeIcon],
    ],
    finalTitleA: "Start with one operational",
    finalTitleB: "pressure point.",
    finalBody:
      "Tell us where visibility, coordination or control is breaking down. We will identify the first system worth validating.",
    path: ["Problem", "Context", "System opportunity", "Pilot path"],
    sales: "Talk to N3uralia",
  },
  es: {
    metadataTitle: "Soluciones | N3uralia",
    metadataDescription:
      "Sistemas de IA y software para operaciones reales: inteligencia operacional, automatización, asistentes, documentos, reconocimiento y plataformas internas.",
    heroTitleA: "Sistemas de IA y software para",
    heroTitleB: "operaciones reales.",
    heroBody:
      "N3uralia construye sistemas operacionales que conectan datos, flujos, documentos, IA y personas — para que los equipos vean qué está pasando, actúen más rápido y escalen con control.",
    primary: "Encontrar la solución correcta",
    secondary: "Agendar diagnóstico",
    pressureTitle: "Dónde las operaciones pierden control.",
    pressureBody:
      "N3uralia ayuda a los equipos a recuperar visibilidad, coordinación y control cuando la operación se vuelve compleja.",
    problems: [
      ["Vacíos de visibilidad", "Los datos viven en planillas, email, capturas y herramientas desconectadas.", Network],
      ["Coordinación manual", "Los equipos pasan demasiado tiempo copiando, validando, notificando y persiguiendo actualizaciones.", Repeat2],
      ["Respuesta lenta", "Clientes, operadores o proveedores esperan porque la información llega demasiado tarde al lugar correcto.", Clock3],
      ["Falta de trazabilidad", "Aprobaciones, documentos, excepciones y decisiones son difíciles de auditar o reproducir.", ListChecks],
    ],
    layersTitleA: "Capas centrales de",
    layersTitleB: "solución",
    layersBody: "Elige primero la capa que necesita tu operación.",
    layers: [
      ["Inteligencia Operacional", "Dashboards, centros de control y capas de visibilidad para equipos que necesitan una sola versión de la realidad.", Gauge],
      ["Automatización de Flujos", "Aprobaciones, alertas, handoffs y procesos recurrentes para avanzar con menos trabajo manual.", Workflow],
      ["Asistentes de IA", "Asistentes entrenados con contexto operacional, documentos y datos para responder, guiar y acelerar equipos.", MessageSquareText],
      ["Inteligencia Documental", "Extracción, clasificación, validación y trazabilidad para operaciones intensivas en documentos.", FileSearch],
      ["Sistemas de Reconocimiento", "Visión computacional para calidad, monitoreo productivo, seguridad y señales visuales operacionales.", ScanLine],
      ["Plataformas Internas", "Portales y sistemas a medida que conectan usuarios, datos, permisos, workflows y reporting.", Boxes],
    ],
    sectorTitleA: "Dónde vemos el",
    sectorTitleB: "mejor fit.",
    sectorBody: "Las mismas capas de solución. Operaciones distintas.",
    sectors: [
      ["Retail y e-commerce", "Catálogos, soporte y coordinación entre canales.", ShoppingCart],
      ["Minería y recursos", "Alertas, trazabilidad y continuidad operacional.", Activity],
      ["Manufactura", "Flujos de planta, calidad y handoffs entre equipos.", Factory],
      ["Hospitality y turismo", "Reservas, operaciones de servicio y respuesta a huéspedes.", Users],
      ["Logística y supply chain", "Tracking, excepciones y decisiones operativas.", Truck],
      ["Servicios regulados", "Procesos documentales, validaciones y control.", ShieldCheck],
    ],
    entryTitleA: "Tres formas de",
    entryTitleB: "empezar.",
    entryBody: "Distintos puntos de entrada. El mismo valor a largo plazo.",
    entries: [
      ["Piloto operativo", "Un workflow concreto, una integración prioritaria y una métrica clara.", "Alcance acotado, entrega rápida y riesgo controlado.", Network],
      ["Sistema de producción", "Arquitectura, integraciones y una capa operativa que permanece.", "Problemas de alto valor conocidos y continuidad operacional.", LayersIcon],
      ["Modernización con IA", "Automatización e inteligencia sobre el software existente sin reescribir todo.", "Integración progresiva, resultados visibles y menor disrupción.", ModernizeIcon],
    ],
    finalTitleA: "Empieza con un punto de",
    finalTitleB: "presión operacional.",
    finalBody:
      "Cuéntanos dónde se está rompiendo la visibilidad, coordinación o control. Identificaremos el primer sistema que vale la pena validar.",
    path: ["Problema", "Contexto", "Oportunidad de sistema", "Camino de piloto"],
    sales: "Hablar con N3uralia",
  },
} as const

function LayersIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M50 15 78 28 50 41 22 28 50 15Z"/><path d="M22 42 50 55 78 42"/><path d="M22 56 50 69 78 56"/><path d="M22 70 50 83 78 70"/>
    </svg>
  )
}

function ModernizeIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M50 20 76 32 50 44 24 32 50 20Z"/><path d="M24 46 50 58 76 46"/><path d="M24 60 50 72 76 60"/><path d="M60 21h23v23"/><path d="m83 21-25 25"/>
    </svg>
  )
}

function HeroVisual({ locale }: { locale: Locale }) {
  const labels = locale === "es" ? ["Datos", "Workflow", "Inteligencia", "Acción"] : ["Data", "Workflow", "Intelligence", "Action"]
  const notes = locale === "es"
    ? ["capturar · conectar · unificar", "automatizar · coordinar · orquestar", "analizar · entender · recomendar", "ejecutar · alertar · mejorar"]
    : ["capture · connect · unify", "automate · coordinate · orchestrate", "analyze · understand · recommend", "execute · alert · improve"]
  return (
    <div className={styles.heroVisual} aria-label="Data to Workflow to Intelligence to Action system map">
      {labels.map((label, index) => (
        <div key={label} className={styles.heroPanel}>
          <p className={styles.heroLabel}>{label}</p>
          <p className={styles.heroNote}>{notes[index]}</p>
          <span className={styles.heroNode} />
        </div>
      ))}
    </div>
  )
}

function RecommendationVisual() {
  return (
    <div className={styles.recMap} aria-hidden="true">
      <div className={styles.recPlane} />
      <div className={styles.recTower} />
      <div className={styles.recTower} />
      <div className={styles.recTower} />
      <span className={styles.recDot} style={{ left: "24%", top: "62%" }} />
      <span className={styles.recDot} style={{ left: "49%", top: "48%" }} />
      <span className={styles.recDot} style={{ right: "12%", top: "70%" }} />
    </div>
  )
}

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
    <main className={styles.page}>
      <section className={styles.stage}>
        <div className={`${styles.shell} ${styles.hero}`}>
          <div>
            <div className={styles.eyebrow}>01 / N3URALIA</div>
            <h1>{page.heroTitleA} <span className={styles.accent}>{page.heroTitleB}</span></h1>
            <p className={styles.lead}>{page.heroBody}</p>
            <div className={styles.actions}>
              <Link className={styles.cta} href="#quick-selector">{page.primary}<ArrowRight className="ml-2 h-4 w-4" /></Link>
              <Link className={styles.ghost} href={href(locale, "/diagnostico")}>{page.secondary}</Link>
            </div>
          </div>
          <HeroVisual locale={locale} />
        </div>
      </section>

      <section className={styles.stage}>
        <div className={styles.shell}>
          <header className={styles.sectionHead}>
            <div className={styles.eyebrow}>02 / {locale === "es" ? "DÓNDE SE PIERDE EL CONTROL" : "WHERE OPERATIONS LOSE CONTROL"}</div>
            <h2 className={styles.sectionTitle}>{page.pressureTitle}</h2>
            <p className={styles.sectionIntro}>{page.pressureBody}</p>
          </header>
          <div className={styles.panelFrame}>
            <div className={styles.pressureGrid}>
              {page.problems.map(([title, text, Icon], index) => (
                <SolutionsFocus key={title} index={index} className={styles.pressureCard}>
                  <article>
                    <div className={styles.iconStage}><Icon className={styles.neonIcon} strokeWidth={1.05} /></div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                </SolutionsFocus>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.stage}>
        <div className={styles.shell}>
          <header className={styles.sectionHead}>
            <div className={styles.eyebrow}>03 / CORE SOLUTION LAYERS</div>
            <h2 className={styles.sectionTitle}>{page.layersTitleA} <span className={styles.accent}>{page.layersTitleB}</span></h2>
            <p className={styles.sectionIntro}>{page.layersBody}</p>
          </header>
          <div className={styles.layersGrid}>
            {page.layers.map(([title, text, Icon], index) => (
              <SolutionsFocus key={title} index={index} className={styles.layerCard}>
                <article>
                  <div className={styles.layerNum}>0{index + 1} /</div>
                  <div className={styles.layerIcon}><Icon strokeWidth={1.15} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <Link className={styles.explore} href={href(locale, "/diagnostico")}>{locale === "es" ? "Explorar" : "Explore"} →</Link>
                </article>
              </SolutionsFocus>
            ))}
          </div>
        </div>
      </section>

      <section id="quick-selector" className={styles.stage}>
        <div className={styles.shell}>
          <SolutionsFitExplorer locale={locale} />
          <div className="sr-only"><RecommendationVisual /></div>
        </div>
      </section>

      <section className={styles.stage}>
        <div className={styles.shell}>
          <header className={styles.sectionHead}>
            <div className={styles.eyebrow}>05 / {locale === "es" ? "SOLUCIONES POR SECTOR" : "SOLUTIONS BY SECTOR"}</div>
            <h2 className={styles.sectionTitle}>{page.sectorTitleA} <span className={styles.accent}>{page.sectorTitleB}</span></h2>
            <p className={styles.sectionIntro}>{page.sectorBody}</p>
          </header>
          <div className={styles.sectorGrid}>
            {page.sectors.map(([title, text, Icon], index) => (
              <article className={styles.sectorCard} key={title}>
                <div className={styles.layerNum}>0{index + 1}</div>
                <div className={styles.sectorIcon}><Icon strokeWidth={1.1} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link className={styles.sectorMeta} href={href(locale, "/diagnostico")}>{locale === "es" ? "Explorar" : "Explore"} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.stage}>
        <div className={styles.shell}>
          <header className={styles.sectionHead}>
            <div className={styles.eyebrow}>06 / {locale === "es" ? "FORMAS DE ENTRADA" : "ENTRY PATHS"}</div>
            <h2 className={styles.sectionTitle}>{page.entryTitleA} <span className={styles.accent}>{page.entryTitleB}</span></h2>
            <p className={styles.sectionIntro}>{page.entryBody}</p>
          </header>
          <div className={styles.entryGrid}>
            {page.entries.map(([title, text, best, Icon], index) => (
              <article className={styles.entryCard} key={title}>
                <div className={styles.entryNum}>0{index + 1}</div>
                <div className={styles.entryIcon}><Icon /></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className={styles.best}><strong>{locale === "es" ? "Mejor para:" : "Best for:"}</strong> {best}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.stage}>
        <div className={`${styles.shell} ${styles.final}`}>
          <div>
            <div className={styles.eyebrow}>07 / {locale === "es" ? "SIGUIENTE PASO" : "NEXT MOVE"}</div>
            <h2 className={styles.finalTitle}>{page.finalTitleA} <span className={styles.accent}>{page.finalTitleB}</span></h2>
            <p className={styles.lead}>{page.finalBody}</p>
            <div className={styles.actions}>
              <Link className={styles.cta} href={href(locale, "/diagnostico")}>{page.secondary}<ArrowRight className="ml-2 h-4 w-4" /></Link>
              <a className={styles.ghost} href="mailto:juan@n3uralia.com">{page.sales}</a>
            </div>
            <div className={styles.path}>
              {page.path.map((item) => <div className={styles.pathNode} key={item}><span>{item}</span></div>)}
            </div>
          </div>
          <div className={styles.finalVisual} aria-hidden="true">
            <span className={styles.wire} /><span className={styles.wire} /><span className={styles.wire} />
          </div>
        </div>
      </section>
    </main>
  )
}
