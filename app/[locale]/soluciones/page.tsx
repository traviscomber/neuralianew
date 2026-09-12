import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Fish, Sprout } from "lucide-react"
import { SolutionsFocus } from "@/components/solutions-focus"
import {
  AssistantIcon,
  DataIntegrationIcon,
  DocumentIcon,
  GovernanceIcon,
  HospitalityIcon,
  IntelligenceIcon,
  LogisticsIcon,
  ManufacturingIcon,
  MiningIcon,
  PlatformIcon,
  RecognitionIcon,
  RegulatedIcon,
  RetailIcon,
  WorkflowIconCustom,
} from "@/components/solutions-visuals"
import { DEFAULT_LOCALE, isValidLocale, type Locale } from "@/lib/get-locale"
import { buildLocalizedMetadata } from "@/lib/page-metadata"
import styles from "./solutions-mockup.module.css"

interface PageProps {
  params: Promise<{ locale: string }>
}

function href(locale: Locale, path: string) {
  return `/${locale}${path}`
}

const content = {
  en: {
    metadataTitle: "Solutions | N3uralia",
    metadataDescription:
      "N3uralia expertise across operational intelligence, workflow automation, AI, recognition, document intelligence, integrations and internal platforms.",
    heroTitleA: "AI and software systems for",
    heroTitleB: "real operations.",
    heroBody:
      "N3uralia helps organizations design and build intelligent operational systems across data, workflow, automation, AI, recognition and internal platforms.",
    primary: "Explore expertise",
    secondary: "Book diagnosis",
    heroFooter: ["Data", "Workflow", "Intelligence", "Action"],

    helpLabel: "HOW WE HELP",
    helpTitle: "How N3uralia helps.",
    helpBody:
      "We connect operational layers that are usually fragmented, then turn them into systems teams can actually use and maintain.",
    help: [
      {
        title: "Make operations visible",
        text: "We connect scattered data, systems, documents and signals into one operational view.",
      },
      {
        title: "Automate recurring work",
        text: "We reduce manual coordination through workflows, alerts, approvals and handoffs.",
      },
      {
        title: "Add intelligence to decisions",
        text: "We use AI, recognition and contextual assistants to help teams interpret, prioritize and act.",
      },
      {
        title: "Build systems that last",
        text: "We design internal platforms, integrations and control layers that can grow with the operation.",
      },
    ],

    expertiseLabel: "EXPERTISE",
    expertiseTitle: "Areas of expertise",
    expertiseBody:
      "Eight disciplines, one operating model. We combine the right layers to make complex operations visible, actionable and governable.",
    expertise: [
      {
        title: "Operational Intelligence",
        text: "Dashboards, command centers, operational visibility and executive control.",
        action: "VISIBILITY",
        image: "/images/solutions/section03/operational-intelligence.png",
        Icon: IntelligenceIcon,
      },
      {
        title: "Workflow Automation",
        text: "Approvals, alerts, task routing and recurring process automation.",
        action: "ORCHESTRATION",
        image: "/images/solutions/section03/workflow-automation.png",
        Icon: WorkflowIconCustom,
      },
      {
        title: "AI Assistants",
        text: "Role-aware assistants grounded in your operational context, documents and data.",
        action: "ASSISTANCE",
        image: "/images/solutions/section03/ai-assistants.png",
        Icon: AssistantIcon,
      },
      {
        title: "Document Intelligence",
        text: "Extraction, classification, validation and auditable document workflows.",
        action: "STRUCTURE",
        image: "/images/solutions/section03/document-intelligence.png",
        Icon: DocumentIcon,
      },
      {
        title: "Recognition Systems",
        text: "Computer vision for visual events, quality, security and production monitoring.",
        action: "DETECTION",
        image: "/images/solutions/section03/recognition-systems.png",
        Icon: RecognitionIcon,
      },
      {
        title: "Internal Platforms",
        text: "Custom portals, permissions, operational modules and reporting layers.",
        action: "PLATFORMS",
        image: "/images/solutions/section03/internal-platforms.png",
        Icon: PlatformIcon,
      },
      {
        title: "Data Integrations",
        text: "APIs, databases, legacy systems, sensors, files and third-party tools.",
        action: "CONNECTIVITY",
        image: "/images/solutions/section03/data-integrations.png",
        Icon: DataIntegrationIcon,
      },
      {
        title: "Governance & Human Review",
        text: "Traceability, approvals, risk controls and responsible AI review workflows.",
        action: "GOVERNANCE",
        image: "/images/solutions/section03/governance-human-loop.png",
        Icon: GovernanceIcon,
      },
    ],

    capabilitiesLabel: "SYSTEM CAPABILITIES",
    capabilitiesTitle: "System capabilities.",
    capabilitiesBody:
      "N3uralia builds connected operational layers. Each layer can stand alone, but the strongest systems combine them around one operational model.",
    capabilities: [
      {
        title: "Data layer",
        items: ["Ingestion", "Normalization", "Canonical records", "Dashboards"],
      },
      {
        title: "Workflow layer",
        items: ["States", "Approvals", "Alerts", "Assignments", "Escalation", "Audit trail"],
      },
      {
        title: "AI layer",
        items: ["Assistants", "Classification", "Recommendations", "Summaries", "Contextual search"],
      },
      {
        title: "Recognition layer",
        items: ["Image / video analysis", "Event detection", "Quality inspection", "Visual records"],
      },
      {
        title: "Platform layer",
        items: ["Portals", "Permissions", "Modules", "Reporting", "Integrations", "Deployment monitoring"],
      },
    ],

    domainsLabel: "APPLIED DOMAINS",
    domainsTitle: "Applied domains.",
    domainsBody: "Same expertise. Different operational environments.",
    relevant: "Relevant expertise",
    typical: "Typical system",
    domains: [
      {
        title: "Retail & e-commerce",
        expertise: "Operational Intelligence + Workflow Automation + AI Assistants",
        system: "Catalog operations, service dashboards and channel coordination.",
        Icon: RetailIcon,
      },
      {
        title: "Mining & resources",
        expertise: "Operational Intelligence + Internal Platforms + Workflow Automation",
        system: "Control dashboards, alerts, operational records and maintenance or geology workflows.",
        Icon: MiningIcon,
      },
      {
        title: "Manufacturing",
        expertise: "Recognition Systems + Workflow Automation + Operational Intelligence",
        system: "Plant monitoring, quality inspection and production handoffs.",
        Icon: ManufacturingIcon,
      },
      {
        title: "Hospitality & tourism",
        expertise: "AI Assistants + Workflow Automation + Internal Platforms",
        system: "Reservation operations, service coordination and guest response layers.",
        Icon: HospitalityIcon,
      },
      {
        title: "Logistics & supply chain",
        expertise: "Data Integrations + Operational Intelligence + Workflow Automation",
        system: "Tracking, exception handling, alerts and operational decision support.",
        Icon: LogisticsIcon,
      },
      {
        title: "Regulated services",
        expertise: "Document Intelligence + Governance + Internal Platforms",
        system: "Document workflows, validation, approvals and auditable records.",
        Icon: RegulatedIcon,
      },
      {
        title: "Agriculture / environment",
        expertise: "Recognition Systems + Data Integrations + Operational Intelligence",
        system: "Field monitoring, visual evidence, environmental signals and operational records.",
        Icon: Sprout,
      },
      {
        title: "Seafood / production quality",
        expertise: "Recognition Systems + Workflow Automation + Governance",
        system: "Quality inspection, visual classification, production records and human review.",
        Icon: Fish,
      },
    ],

    combineLabel: "HOW THE LAYERS COMBINE",
    combineTitle: "How solutions become systems.",
    combineBody:
      "N3uralia does not treat dashboards, automation or AI as isolated tools. We combine the right layers into one operational system.",
    systems: [
      {
        title: "Visibility system",
        stack: "Data integrations + dashboards + alerts",
        outcome: "A shared operational view with current data, exceptions and clear ownership.",
        Icon: IntelligenceIcon,
      },
      {
        title: "Workflow system",
        stack: "Process states + approvals + automation + audit trail",
        outcome: "A governed flow that moves work forward and preserves traceability.",
        Icon: WorkflowIconCustom,
      },
      {
        title: "Intelligence system",
        stack: "AI assistant + document intelligence + recognition + human validation",
        outcome: "A contextual decision layer that combines machine intelligence with responsible review.",
        Icon: AssistantIcon,
      },
    ],

    finalLabel: "FROM EXPERTISE TO DIAGNOSIS",
    finalTitle: "Not sure where to start?",
    finalBody:
      "Describe the operation, workflow or system you want to improve. We will identify the highest-value starting point and the layers it requires.",
    sales: "Talk to N3uralia",
    proofLinks: {
      recognition: "Explore recognition systems",
      projects: "View projects",
      products: "Explore products",
    },
  },
  es: {
    metadataTitle: "Soluciones | N3uralia",
    metadataDescription:
      "Expertise de N3uralia en inteligencia operacional, automatización de flujos, IA, reconocimiento, inteligencia documental, integraciones y plataformas internas.",
    heroTitleA: "Sistemas de IA y software para",
    heroTitleB: "operaciones reales.",
    heroBody:
      "N3uralia ayuda a organizaciones a diseñar y construir sistemas operacionales inteligentes sobre datos, flujos, automatización, IA, reconocimiento y plataformas internas.",
    primary: "Explorar expertise",
    secondary: "Agendar diagnóstico",
    heroFooter: ["Datos", "Flujos", "Inteligencia", "Acción"],

    helpLabel: "CÓMO AYUDAMOS",
    helpTitle: "Cómo ayuda N3uralia.",
    helpBody:
      "Conectamos capas operacionales que normalmente están fragmentadas y las convertimos en sistemas que los equipos pueden usar y mantener.",
    help: [
      {
        title: "Hacer visible la operación",
        text: "Conectamos datos, sistemas, documentos y señales dispersas en una sola vista operacional.",
      },
      {
        title: "Automatizar trabajo recurrente",
        text: "Reducimos coordinación manual mediante flujos, alertas, aprobaciones y traspasos.",
      },
      {
        title: "Agregar inteligencia a decisiones",
        text: "Usamos IA, reconocimiento y asistentes contextuales para ayudar a interpretar, priorizar y actuar.",
      },
      {
        title: "Construir sistemas que duren",
        text: "Diseñamos plataformas internas, integraciones y capas de control que pueden crecer con la operación.",
      },
    ],

    expertiseLabel: "EXPERTISE",
    expertiseTitle: "Áreas de expertise",
    expertiseBody:
      "Ocho disciplinas, un modelo operacional. Combinamos las capas correctas para hacer operaciones complejas visibles, accionables y gobernables.",
    expertise: [
      {
        title: "Inteligencia Operacional",
        text: "Paneles, centros de control, visibilidad operacional y control ejecutivo.",
        action: "VISIBILIDAD",
        image: "/images/solutions/section03/operational-intelligence.png",
        Icon: IntelligenceIcon,
      },
      {
        title: "Automatización de Flujos",
        text: "Aprobaciones, alertas, asignación de tareas y automatización recurrente.",
        action: "ORQUESTACIÓN",
        image: "/images/solutions/section03/workflow-automation.png",
        Icon: WorkflowIconCustom,
      },
      {
        title: "Asistentes de IA",
        text: "Asistentes por rol contextualizados con la operación, los documentos y los datos.",
        action: "ASISTENCIA",
        image: "/images/solutions/section03/ai-assistants.png",
        Icon: AssistantIcon,
      },
      {
        title: "Inteligencia Documental",
        text: "Extracción, clasificación, validación y flujos documentales auditables.",
        action: "ESTRUCTURA",
        image: "/images/solutions/section03/document-intelligence.png",
        Icon: DocumentIcon,
      },
      {
        title: "Sistemas de Reconocimiento",
        text: "Visión computacional para eventos visuales, calidad, seguridad y monitoreo productivo.",
        action: "DETECCIÓN",
        image: "/images/solutions/section03/recognition-systems.png",
        Icon: RecognitionIcon,
      },
      {
        title: "Plataformas Internas",
        text: "Portales a medida, permisos, módulos operacionales y capas de reportes.",
        action: "PLATAFORMAS",
        image: "/images/solutions/section03/internal-platforms.png",
        Icon: PlatformIcon,
      },
      {
        title: "Integraciones de Datos",
        text: "APIs, bases de datos, sistemas heredados, sensores, archivos y herramientas de terceros.",
        action: "CONECTIVIDAD",
        image: "/images/solutions/section03/data-integrations.png",
        Icon: DataIntegrationIcon,
      },
      {
        title: "Gobernanza y Revisión Humana",
        text: "Trazabilidad, aprobaciones, controles de riesgo y revisión responsable de IA.",
        action: "GOBERNANZA",
        image: "/images/solutions/section03/governance-human-loop.png",
        Icon: GovernanceIcon,
      },
    ],

    capabilitiesLabel: "CAPACIDADES DE SISTEMA",
    capabilitiesTitle: "Capacidades de sistema.",
    capabilitiesBody:
      "N3uralia construye capas operacionales conectadas. Cada capa puede funcionar por sí sola, pero los sistemas más fuertes las combinan alrededor de un modelo operacional común.",
    capabilities: [
      {
        title: "Capa de datos",
        items: ["Ingesta", "Normalización", "Registros canónicos", "Paneles"],
      },
      {
        title: "Capa de flujos",
        items: ["Estados", "Aprobaciones", "Alertas", "Asignaciones", "Escalamiento", "Trazabilidad"],
      },
      {
        title: "Capa de IA",
        items: ["Asistentes", "Clasificación", "Recomendaciones", "Resúmenes", "Búsqueda contextual"],
      },
      {
        title: "Capa de reconocimiento",
        items: ["Análisis de imagen y video", "Detección de eventos", "Inspección de calidad", "Registros visuales"],
      },
      {
        title: "Capa de plataforma",
        items: ["Portales", "Permisos", "Módulos", "Reportes", "Integraciones", "Monitoreo de despliegue"],
      },
    ],

    domainsLabel: "DOMINIOS APLICADOS",
    domainsTitle: "Dominios aplicados.",
    domainsBody: "El mismo expertise. Distintos entornos operacionales.",
    relevant: "Expertise relevante",
    typical: "Sistema típico",
    domains: [
      {
        title: "Retail y comercio electrónico",
        expertise: "Inteligencia Operacional + Automatización + Asistentes de IA",
        system: "Operación de catálogo, paneles de servicio y coordinación entre canales.",
        Icon: RetailIcon,
      },
      {
        title: "Minería y recursos",
        expertise: "Inteligencia Operacional + Plataformas Internas + Automatización",
        system: "Paneles de control, alertas, registros operativos y flujos de mantenimiento o geología.",
        Icon: MiningIcon,
      },
      {
        title: "Manufactura",
        expertise: "Reconocimiento + Automatización + Inteligencia Operacional",
        system: "Monitoreo de planta, inspección de calidad y traspasos productivos.",
        Icon: ManufacturingIcon,
      },
      {
        title: "Hospitalidad y turismo",
        expertise: "Asistentes de IA + Automatización + Plataformas Internas",
        system: "Operación de reservas, coordinación de servicio y capas de respuesta a huéspedes.",
        Icon: HospitalityIcon,
      },
      {
        title: "Logística y cadena de suministro",
        expertise: "Integraciones de Datos + Inteligencia Operacional + Automatización",
        system: "Seguimiento, gestión de excepciones, alertas y soporte a decisiones operativas.",
        Icon: LogisticsIcon,
      },
      {
        title: "Servicios regulados",
        expertise: "Inteligencia Documental + Gobernanza + Plataformas Internas",
        system: "Flujos documentales, validación, aprobaciones y registros auditables.",
        Icon: RegulatedIcon,
      },
      {
        title: "Agricultura y medioambiente",
        expertise: "Reconocimiento + Integraciones de Datos + Inteligencia Operacional",
        system: "Monitoreo de campo, evidencia visual, señales ambientales y registros operativos.",
        Icon: Sprout,
      },
      {
        title: "Productos del mar y calidad productiva",
        expertise: "Reconocimiento + Automatización + Gobernanza",
        system: "Inspección de calidad, clasificación visual, registros productivos y revisión humana.",
        Icon: Fish,
      },
    ],

    combineLabel: "CÓMO SE COMBINAN LAS CAPAS",
    combineTitle: "Cómo las soluciones se convierten en sistemas.",
    combineBody:
      "N3uralia no trata paneles, automatización o IA como herramientas aisladas. Combinamos las capas correctas en un sistema operacional.",
    systems: [
      {
        title: "Sistema de visibilidad",
        stack: "Integraciones de datos + paneles + alertas",
        outcome: "Una vista operacional compartida con datos actuales, excepciones y responsables claros.",
        Icon: IntelligenceIcon,
      },
      {
        title: "Sistema de flujos",
        stack: "Estados + aprobaciones + automatización + trazabilidad",
        outcome: "Un flujo gobernado que hace avanzar el trabajo y conserva trazabilidad.",
        Icon: WorkflowIconCustom,
      },
      {
        title: "Sistema de inteligencia",
        stack: "Asistente IA + inteligencia documental + reconocimiento + validación humana",
        outcome: "Una capa contextual de decisión que combina inteligencia de máquina con revisión responsable.",
        Icon: AssistantIcon,
      },
    ],

    finalLabel: "DEL EXPERTISE AL DIAGNÓSTICO",
    finalTitle: "¿No sabes por dónde empezar?",
    finalBody:
      "Cuéntanos la operación, flujo o sistema que quieres mejorar. Identificaremos el punto de partida de mayor valor y las capas que necesita.",
    sales: "Hablar con N3uralia",
    proofLinks: {
      recognition: "Explorar sistemas de reconocimiento",
      projects: "Ver proyectos",
      products: "Explorar productos",
    },
  },
} as const

const section02Images = [
  "/images/solutions/section02/visibility.png",
  "/images/solutions/section02/workflow-automation.png",
  "/images/solutions/section02/decision-intelligence.png",
  "/images/solutions/section02/durable-systems.png",
] as const

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]
  return buildLocalizedMetadata({
    locale,
    path: "/soluciones",
    title: page.metadataTitle,
    description: page.metadataDescription,
  })
}

export default async function SolutionsPage(props: PageProps) {
  const params = await props.params
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]
  const projectsPath = locale === "es" ? "/proyectos" : "/projects"
  const productsPath = locale === "es" ? "/productos" : "/products"
  const recognitionPath = locale === "es" ? "/reconocimiento" : "/recognition"

  return (
    <main className={styles.page}>
      <section className={`${styles.stage} ${styles.heroStage}`}>
        <div className={`${styles.shell} ${styles.hero}`}>
          <div className={styles.heroCopy}>
            <div className={styles.eyebrow}>01 / N3URALIA</div>
            <h1>
              {page.heroTitleA} <span className={styles.accent}>{page.heroTitleB}</span>
            </h1>
            <p className={styles.lead}>{page.heroBody}</p>
            <div className={styles.actions}>
              <Link className={styles.cta} href="#expertise">
                {page.primary}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link className={styles.ghost} href={href(locale, "/diagnostico")}>
                {page.secondary}
              </Link>
            </div>
            <div className={styles.heroFooter} aria-label={locale === "es" ? "Capas del sistema" : "System layers"}>
              {page.heroFooter.map((item, index) => (
                <span key={item}>
                  {index > 0 ? <b aria-hidden="true">/</b> : null}
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.heroVisualWrap}>
            <img
              src="/images/solutions/hero-system.webp"
              width="1600"
              height="900"
              loading="eager"
              fetchPriority="high"
              alt=""
              aria-hidden="true"
              className={styles.heroVisualSvg}
            />
          </div>
        </div>
      </section>

      <section className={`${styles.stage} ${styles.consoleStage}`} aria-labelledby="how-we-help-title">
        <div className={styles.shell}>
          <div className={styles.section02Frame}>
            <header className={styles.sectionHead}>
              <div className={styles.eyebrow}>02 / {page.helpLabel}</div>
              <h2 id="how-we-help-title" className={styles.sectionTitle}>{page.helpTitle}</h2>
              <p className={styles.sectionIntro}>{page.helpBody}</p>
            </header>
            <div className={styles.pressureGrid}>
              {page.help.map((item, index) => (
                <SolutionsFocus key={item.title} index={index} className={styles.pressureCard}>
                  <article>
                    <div className={styles.pressureVisualWrap}>
                      <img
                        src={section02Images[index]}
                        width="300"
                        height="300"
                        loading="lazy"
                        alt=""
                        aria-hidden="true"
                        className={styles.pressureVisualImage}
                      />
                    </div>
                    <div className={styles.pressureContent}>
                      <div className={styles.pressureNum}>0{index + 1}</div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                </SolutionsFocus>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" aria-labelledby="expertise-title">
        <div>
          <header>
            <div className="section03-eyebrow">03 / {page.expertiseLabel}</div>
            <h2 id="expertise-title">{page.expertiseTitle}</h2>
            <p>{page.expertiseBody}</p>
          </header>
          <div className="section03-grid">
            {page.expertise.map((item, index) => (
              <article className="section03-card" key={item.title}>
                <div className="section03-num" aria-hidden="true">0{index + 1} /</div>
                <img
                  className="section03-asset"
                  src={item.image}
                  width="640"
                  height="400"
                  loading="lazy"
                  alt=""
                  aria-hidden="true"
                />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="section03-action" aria-label={locale === "es" ? `Enfoque: ${item.action}` : `Focus: ${item.action}`}>
                  {item.action}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.stage} ${styles.capabilitiesStage}`} aria-labelledby="capabilities-title">
        <div className={`${styles.shell} ${styles.capabilitiesShell}`}>
          <div>
            <header className={styles.sectionHead}>
              <div className={styles.eyebrow}>04 / {page.capabilitiesLabel}</div>
              <h2 id="capabilities-title" className={styles.sectionTitle}>{page.capabilitiesTitle}</h2>
              <p className={styles.sectionIntro}>{page.capabilitiesBody}</p>
            </header>
            <div className={styles.capabilityList}>
              {page.capabilities.map((item, index) => (
                <article key={item.title} className={styles.capabilityRow}>
                  <span className={styles.capabilityNum}>0{index + 1}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.items.join(" · ")}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className={styles.capabilityVisual}>
            <div className={styles.visualLabel}>N3 / OPERATIONS HUB</div>
            <img
              src="/images/solutions/selector-map.webp"
              width="840"
              height="472"
              loading="lazy"
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      <section className={`${styles.stage} ${styles.lightStage}`} aria-labelledby="domains-title">
        <div className={styles.shell}>
          <header className={styles.sectionHead}>
            <div className={styles.eyebrow}>05 / {page.domainsLabel}</div>
            <h2 id="domains-title" className={styles.sectionTitle}>{page.domainsTitle}</h2>
            <p className={styles.sectionIntro}>{page.domainsBody}</p>
          </header>
          <div className={styles.domainGrid}>
            {page.domains.map((item, index) => {
              const Icon = item.Icon
              return (
                <article key={item.title} className={styles.domainCard}>
                  <div className={styles.domainTop}>
                    <span>0{index + 1}</span>
                    <div className={styles.domainIcon}><Icon /></div>
                  </div>
                  <h3>{item.title}</h3>
                  <dl>
                    <div>
                      <dt>{page.relevant}</dt>
                      <dd>{item.expertise}</dd>
                    </div>
                    <div>
                      <dt>{page.typical}</dt>
                      <dd>{item.system}</dd>
                    </div>
                  </dl>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className={`${styles.stage} ${styles.combineStage}`} aria-labelledby="combine-title">
        <div className={styles.shell}>
          <header className={styles.sectionHead}>
            <div className={styles.eyebrow}>06 / {page.combineLabel}</div>
            <h2 id="combine-title" className={styles.sectionTitle}>{page.combineTitle}</h2>
            <p className={styles.sectionIntro}>{page.combineBody}</p>
          </header>
          <div className={styles.combineLayout}>
            <div className={styles.systemGrid}>
              {page.systems.map((item, index) => {
                const Icon = item.Icon
                return (
                  <article key={item.title} className={styles.systemCard}>
                    <div className={styles.systemHead}>
                      <span>0{index + 1}</span>
                      <Icon />
                    </div>
                    <h3>{item.title}</h3>
                    <p className={styles.systemStack}>{item.stack}</p>
                    <p className={styles.systemOutcome}>{item.outcome}</p>
                  </article>
                )
              })}
            </div>
            <div className={styles.combineVisual}>
              <img
                src="/images/solutions/selector-decision-map.webp"
                width="840"
                height="472"
                loading="lazy"
                alt=""
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.stage} ${styles.finalStage}`} aria-labelledby="expertise-cta-title">
        <div className={`${styles.shell} ${styles.final}`}>
          <div>
            <div className={styles.eyebrow}>{page.finalLabel}</div>
            <h2 id="expertise-cta-title" className={styles.finalTitle}>{page.finalTitle}</h2>
            <p className={styles.sectionIntro}>{page.finalBody}</p>
            <div className={styles.actions}>
              <Link className={styles.cta} href={href(locale, "/diagnostico")}>
                {page.secondary}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link className={styles.ghost} href={href(locale, "/contact")}>
                {page.sales}
              </Link>
            </div>
          </div>
          <div className={styles.finalLinks}>
            <span>PROOF</span>
            <Link href={href(locale, recognitionPath)}>{page.proofLinks.recognition} →</Link>
            <Link href={href(locale, projectsPath)}>{page.proofLinks.projects} →</Link>
            <Link href={href(locale, productsPath)}>{page.proofLinks.products} →</Link>
          </div>
        </div>
      </section>
    </main>
  )
}