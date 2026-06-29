import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowRight, CheckCircle2, Database, FileSearch, Gauge, Network, ShieldCheck, Workflow } from 'lucide-react'
import { N3uraliaLandingConsole } from '@/components/n3uralia-landing-console'
import { N3uraliaPlatformPreview } from '@/components/n3uralia-platform-preview'
import { DEFAULT_LOCALE, isValidLocale, type Locale } from '@/lib/get-locale'

interface PageProps {
  params: {
    locale: string
  }
}

type TextBlock = {
  title: string
  description: string
}

type Capability = TextBlock & {
  icon: typeof Gauge
  signal: string
}

type Project = TextBlock & {
  image: string
  label: string
  stats: string[]
}

type StartPath = TextBlock & {
  label: string
  outcome: string
}

type PageContent = {
  title: string
  description: string
  primaryCta: string
  secondaryCta: string
  heroTitle: string
  heroSubtitle: string
  heroNote: string
  metrics: TextBlock[]
  flowTitle: string
  flowSubtitle: string
  capabilitiesTitle: string
  capabilitiesSubtitle: string
  capabilities: Capability[]
  projectsTitle: string
  projectsSubtitle: string
  projects: Project[]
  startTitle: string
  startSubtitle: string
  startPaths: StartPath[]
  methodTitle: string
  methodSubtitle: string
  method: TextBlock[]
  ctaTitle: string
  ctaSubtitle: string
  ctaButton: string
}

const content: Record<Locale, PageContent> = {
  en: {
    title: 'N3uralia | AI and software for operations that cannot fail',
    description:
      'N3uralia builds operational software, AI agents, dashboards and connected workflows for complex teams in Chile and LATAM.',
    primaryCta: 'Start diagnosis',
    secondaryCta: 'See solutions',
    heroTitle: 'AI and software for operations that cannot fail',
    heroSubtitle:
      'We design operational systems, AI agents and internal platforms for teams that have outgrown spreadsheets, chat threads and disconnected tools.',
    heroNote: 'Built for Chile and LATAM: mining, field operations, logistics, compliance, real estate and teams with daily execution pressure.',
    metrics: [
      { title: '30 days', description: 'to validate one operational workflow with real users.' },
      { title: '90 days', description: 'to ship a connected production layer.' },
      { title: '4 layers', description: 'dashboard, workflow, agent and integration.' },
      { title: '1 system', description: 'for visibility, accountability and faster action.' },
    ],
    flowTitle: 'From scattered signals to an operating layer',
    flowSubtitle:
      'N3uralia connects documents, field updates, management needs and AI assistance into one controlled workflow.',
    capabilitiesTitle: 'A practical operating layer for teams under pressure',
    capabilitiesSubtitle:
      'This is not generic automation. It is a practical architecture for teams that need control, speed and traceability.',
    capabilities: [
      {
        icon: Gauge,
        signal: 'Executive view',
        title: 'Operational command centers',
        description: 'Dashboards that show status, risk, progress and owners without waiting for manual reports.',
      },
      {
        icon: Workflow,
        signal: 'Workflow',
        title: 'Connected execution flows',
        description: 'Tasks, approvals, alerts and handoffs connected to the way the team already works.',
      },
      {
        icon: FileSearch,
        signal: 'Documents',
        title: 'Document intelligence',
        description: 'Classification, extraction, comparison and evidence tracking for PDFs, contracts and permits.',
      },
      {
        icon: Database,
        signal: 'Data',
        title: 'Integrations and clean data',
        description: 'ERP, CRM, spreadsheets, email, Supabase, APIs and legacy tools organized into one useful layer.',
      },
      {
        icon: Network,
        signal: 'Agents',
        title: 'AI agents with context',
        description: 'Assistants that answer, summarize and trigger next steps from real company knowledge.',
      },
      {
        icon: ShieldCheck,
        signal: 'Control',
        title: 'Governance and traceability',
        description: 'Roles, permissions, audit trails and escalation paths so AI becomes operationally safe.',
      },
    ],
    projectsTitle: 'Proof that the system can look and work like the operation',
    projectsSubtitle:
      'Quiet enterprise interfaces, real operational imagery and dashboards designed to be useful before they feel decorative.',
    projects: [
      {
        label: 'Mining operations',
        title: 'Motil-style command center',
        description: 'Production, maintenance, warehouse, HSE, documents and management in one traceable flow.',
        image: '/n3uralia-brand/mining-platform.png',
        stats: ['Field to management', 'Live modules', 'Operational control'],
      },
      {
        label: 'Document control',
        title: 'DocuFleet / LABBE logic',
        description: 'Contractors, drivers, vehicles and compliance documents with alerts and executive visibility.',
        image: '/n3uralia-brand/operational-dashboard.png',
        stats: ['86% compliance', '583 open risks', '50 alerts'],
      },
      {
        label: 'Customer and assets',
        title: 'Sur-Realista repository',
        description: 'Clients, properties, tasks, maps, files and pipeline views for high-volume teams.',
        image: '/n3uralia-brand/client-repository.png',
        stats: ['38,080 clients', 'Maps and files', 'Advanced search'],
      },
    ],
    startTitle: 'Choose the entry point that matches your operational pressure',
    startSubtitle:
      'The site should make one thing clear: N3uralia can begin small, prove value quickly, and grow into a production system when the problem deserves it.',
    startPaths: [
      {
        label: '01',
        title: 'Operational diagnosis',
        description: 'Map the current process, data sources, documents, teams and automation opportunities.',
        outcome: 'Best when the problem is visible but the architecture is not clear yet.',
      },
      {
        label: '02',
        title: 'Prototype sprint',
        description: 'Build one dashboard, flow, agent or portal around a concrete workflow and real users.',
        outcome: 'Best when the team needs proof before committing to a larger system.',
      },
      {
        label: '03',
        title: 'Production operating layer',
        description: 'Connect integrations, permissions, monitoring, roles and ongoing improvement into one system.',
        outcome: 'Best when the operation needs durable software, not another temporary tool.',
      },
    ],
    methodTitle: 'How we enter without turning the company upside down',
    methodSubtitle:
      'We keep the work concrete: diagnose, architect, build, integrate and improve with real usage evidence.',
    method: [
      { title: 'Diagnose', description: 'Map flows, data, documents, teams and bottlenecks.' },
      { title: 'Architect', description: 'Define what should be dashboard, workflow, agent, portal or integration.' },
      { title: 'Build', description: 'Ship the first useful system with clear owners and visible outcomes.' },
      { title: 'Integrate', description: 'Connect it with the tools, permissions and routines the team already uses.' },
    ],
    ctaTitle: 'Move faster. Operate safer. Control more.',
    ctaSubtitle:
      'Start with one operational drag and turn it into a system your team can actually use.',
    ctaButton: 'Open solutions',
  },
  es: {
    title: 'N3uralia | IA y software para operaciones que no pueden fallar',
    description:
      'N3uralia construye software operativo, agentes IA, tableros y flujos conectados para equipos complejos en Chile y LATAM.',
    primaryCta: 'Iniciar diagnóstico',
    secondaryCta: 'Ver soluciones',
    heroTitle: 'IA y software para operaciones que no pueden fallar',
    heroSubtitle:
      'Diseñamos sistemas operativos, agentes IA y plataformas internas para equipos que ya superaron las planillas, los chats y las herramientas desconectadas.',
    heroNote: 'Construido para Chile y LATAM: minería, terreno, logística, cumplimiento, inmobiliaria y equipos con presión diaria de ejecución.',
    metrics: [
      { title: '30 días', description: 'para validar un flujo operativo con usuarios reales.' },
      { title: '90 días', description: 'para desplegar una capa conectada en producción.' },
      { title: '4 capas', description: 'tablero, flujo, agente e integración.' },
      { title: '1 sistema', description: 'para visibilidad, responsabilidad y acción más rápida.' },
    ],
    flowTitle: 'De señales dispersas a una capa operativa',
    flowSubtitle:
      'N3uralia conecta documentos, terreno, necesidades gerenciales y asistencia IA en un flujo controlado.',
    capabilitiesTitle: 'Una capa operativa práctica para equipos bajo presión',
    capabilitiesSubtitle:
      'No es automatización genérica. Es arquitectura práctica para equipos que necesitan control, velocidad y trazabilidad.',
    capabilities: [
      {
        icon: Gauge,
        signal: 'Vista ejecutiva',
        title: 'Centros de control operacional',
        description: 'Tableros que muestran estado, riesgo, avance y responsables sin esperar reportes manuales.',
      },
      {
        icon: Workflow,
        signal: 'Flujo',
        title: 'Ejecución conectada',
        description: 'Tareas, aprobaciones, alertas y traspasos conectados a la forma real de trabajo.',
      },
      {
        icon: FileSearch,
        signal: 'Documentos',
        title: 'Inteligencia documental',
        description: 'Clasificación, extracción, comparación y evidencia para PDFs, contratos y permisos.',
      },
      {
        icon: Database,
        signal: 'Datos',
        title: 'Integraciones y datos limpios',
        description: 'ERP, CRM, planillas, correo, Supabase, APIs y herramientas legacy en una capa útil.',
      },
      {
        icon: Network,
        signal: 'Agentes',
        title: 'Agentes IA con contexto',
        description: 'Asistentes que responden, resumen y activan siguientes pasos desde conocimiento real.',
      },
      {
        icon: ShieldCheck,
        signal: 'Control',
        title: 'Gobernanza y trazabilidad',
        description: 'Roles, permisos, auditoría y escalamiento para que la IA sea segura en la operación.',
      },
    ],
    projectsTitle: 'Prueba de que el sistema puede verse y funcionar como la operación',
    projectsSubtitle:
      'Interfaces empresariales sobrias, imágenes reales y tableros diseñados para ser útiles antes que decorativos.',
    projects: [
      {
        label: 'Operación minera',
        title: 'Centro de control tipo Motil',
        description: 'Producción, mantenimiento, bodega, HSE, documentos y gerencia en un flujo trazable.',
        image: '/n3uralia-brand/mining-platform.png',
        stats: ['Terreno a gerencia', 'Módulos vivos', 'Control operativo'],
      },
      {
        label: 'Control documental',
        title: 'Logica DocuFleet / LABBE',
        description: 'Contratistas, conductores, vehículos y documentos de cumplimiento con alertas y visibilidad.',
        image: '/n3uralia-brand/operational-dashboard.png',
        stats: ['86% cumplimiento', '583 riesgos abiertos', '50 alertas'],
      },
      {
        label: 'Clientes y activos',
        title: 'Repositorio Sur-Realista',
        description: 'Clientes, propiedades, tareas, mapas, archivos y pipeline para equipos de alto volumen.',
        image: '/n3uralia-brand/client-repository.png',
        stats: ['38.080 clientes', 'Mapas y archivos', 'Búsqueda avanzada'],
      },
    ],
    startTitle: 'Elige una entrada proporcional a tu presión operativa',
    startSubtitle:
      'La ruta debe sentirse concreta: N3uralia puede partir pequeño, probar valor rápido y crecer a un sistema en producción cuando el problema lo merece.',
    startPaths: [
      {
        label: '01',
        title: 'Diagnóstico operacional',
        description: 'Mapeamos proceso actual, fuentes de datos, documentos, equipos y oportunidades de automatización.',
        outcome: 'Ideal cuando el problema es visible, pero la arquitectura todavía no está clara.',
      },
      {
        label: '02',
        title: 'Sprint de prototipo',
        description: 'Construimos un tablero, flujo, agente o portal alrededor de un proceso concreto y usuarios reales.',
        outcome: 'Ideal cuando el equipo necesita evidencia antes de comprometerse con un sistema mayor.',
      },
      {
        label: '03',
        title: 'Capa operativa en producción',
        description: 'Conectamos integraciones, permisos, monitoreo, roles y mejora continua en un solo sistema.',
        outcome: 'Ideal cuando la operación necesita software durable, no otra herramienta temporal.',
      },
    ],
    methodTitle: 'Cómo entramos sin dar vuelta la empresa',
    methodSubtitle:
      'Mantenemos el trabajo concreto: diagnosticar, arquitectar, construir, integrar y mejorar con evidencia de uso real.',
    method: [
      { title: 'Diagnosticar', description: 'Mapeamos flujos, datos, documentos, equipos y cuellos de botella.' },
      { title: 'Arquitectar', description: 'Definimos qué debe ser tablero, flujo, agente, portal o integración.' },
      { title: 'Construir', description: 'Lanzamos el primer sistema útil con responsables claros y resultados visibles.' },
      { title: 'Integrar', description: 'Lo conectamos con herramientas, permisos y rutinas que el equipo ya usa.' },
    ],
    ctaTitle: 'Muévete más rápido. Opera más seguro. Controla más.',
    ctaSubtitle:
      'Parte con una fricción operativa y conviértela en un sistema que tu equipo pueda usar de verdad.',
    ctaButton: 'Abrir soluciones',
  },
}

function href(locale: Locale, path: string) {
  return `/${locale}${path}`
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `https://www.n3uralia.com/${locale}`,
      languages: {
        es: 'https://www.n3uralia.com/es',
        en: 'https://www.n3uralia.com/en',
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://www.n3uralia.com/${locale}`,
      siteName: 'N3uralia',
      locale: locale === 'es' ? 'es_CL' : 'en_US',
      type: 'website',
    },
  }
}

function LogoWordmark({ className = '' }: { className?: string }) {
  return (
    <Image
      src="/n3uralia-brand/n3uralia-wordmark.png"
      alt="N3uralia"
      width={624}
      height={166}
      priority
      className={className}
    />
  )
}

function PrimaryLink({ href, children, tone = 'dark' }: { href: string; children: ReactNode; tone?: 'dark' | 'light' }) {
  const classes = tone === 'dark' ? 'bg-[#173634] text-white hover:bg-[#244946]' : 'bg-white text-[#173634] hover:bg-[#eef5f2]'

  return (
    <Link href={href} className={`inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold transition-colors ${classes}`}>
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  )
}

export default function HomePage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]
  const contactHref = href(locale, '/contact')
  const solutionsHref = '/es/soluciones'

  return (
    <main id="top" className="overflow-hidden bg-[#fbfbfa] text-[#52605d]">
      <section className="relative min-h-[calc(100vh-20px)] overflow-hidden border-b border-[#1e3431] bg-[#06100f] pt-24 text-white">
        <div className="absolute inset-x-0 top-0 h-px bg-[#789b96]/35" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,16,15,0)_0%,rgba(6,16,15,0.34)_58%,#06100f_100%)]" />
        <Image src="/n3uralia-brand/n3uralia-mark.png" alt="" width={984} height={943} priority className="absolute -right-28 top-24 h-auto w-[36rem] opacity-[0.035] md:w-[52rem]" />

        <div className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col items-center justify-center px-5 pb-10 pt-12 text-center sm:px-8 lg:px-10">
          <LogoWordmark className="mb-12 h-auto w-48 opacity-90 md:w-64" />
          <div className="border border-[#789b96]/28 bg-[#10211f] px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#8fb2aa]">
            {locale === 'es' ? 'Plataforma operacional inteligente' : 'Intelligent operational platform'}
          </div>
          <h1 className="mt-10 max-w-6xl text-balance text-5xl font-semibold leading-[0.98] text-[#f5fbfa] md:text-7xl lg:text-8xl">
            {page.heroTitle}
          </h1>
          <p className="mt-8 max-w-3xl text-pretty text-lg leading-8 text-[#9db7b1] md:text-xl">{page.heroSubtitle}</p>
          <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-[#789b96]">{page.heroNote}</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href={contactHref} className="inline-flex items-center justify-center gap-2 bg-[#8fb2aa] px-6 py-3 text-sm font-semibold text-[#06100f] transition-colors hover:bg-[#d9e3e0]">
              {page.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={solutionsHref} className="inline-flex items-center justify-center gap-2 border border-[#28413d] bg-[#0d1917] px-6 py-3 text-sm font-semibold text-[#e7eeee] transition-colors hover:border-[#789b96] hover:bg-[#142522]">
              {page.secondaryCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 w-full overflow-hidden border-y border-[#173634] py-7">
            <Image src="/n3uralia-brand/operations-graph-wide.png" alt="N3uralia operational connection graph" width={1920} height={276} className="mx-auto h-auto min-w-[760px] max-w-6xl opacity-70" />
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-px border-t border-[#1e3431] bg-[#1e3431] sm:grid-cols-2 lg:grid-cols-4">
          {page.metrics.map((metric) => (
            <div key={metric.title} className="bg-[#071211] px-6 py-6">
              <p className="text-4xl font-semibold leading-none text-[#f4faf8]">{metric.title}</p>
              <p className="mt-3 text-sm leading-6 text-[#8fb2aa]">{metric.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="flow" className="border-b border-[#d8e5e2] bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">{locale === 'es' ? 'La conexion' : 'The connection'}</p>
            <h2 className="mt-5 text-4xl font-light leading-tight text-[#173634] md:text-6xl">{page.flowTitle}</h2>
            <p className="mt-6 text-base leading-8 text-[#65706d]">{page.flowSubtitle}</p>
            <div className="mt-8 grid gap-px border border-[#d8e5e2] bg-[#d8e5e2]">
              {[
                locale === 'es' ? 'Documentos y permisos' : 'Documents and permissions',
                locale === 'es' ? 'Alertas y responsables' : 'Alerts and owners',
                locale === 'es' ? 'Indicadores ejecutivos' : 'Executive indicators',
                locale === 'es' ? 'Agentes con contexto' : 'Context-aware agents',
              ].map((item, index) => (
                <div key={item} className="grid grid-cols-[44px_1fr] items-center gap-4 bg-[#fbfbfa] px-4 py-3">
                  <span className="text-sm font-semibold text-[#789b96]">0{index + 1}</span>
                  <span className="text-sm font-semibold text-[#173634]">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-[#d8e5e2] bg-[#102624] p-4 shadow-[0_35px_100px_-82px_#173634]">
            <div className="relative aspect-[1.75] overflow-hidden border border-white/10">
              <Image src="/n3uralia-brand/operational-dashboard.png" alt="Executive operational dashboard" fill sizes="(min-width: 1024px) 58vw, 92vw" className="object-cover opacity-88" />
              <div className="absolute right-4 top-4 border border-[#8fb2aa]/45 bg-[#102624]/88 px-5 py-4 text-right backdrop-blur">
                <p className="text-4xl font-semibold leading-none text-white">86%</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#8fb2aa]">{locale === 'es' ? 'cumplimiento' : 'compliance'}</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-[#102624]/88 p-5 text-white backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8fb2aa]">Dashboard layer</p>
                <p className="mt-2 max-w-xl text-xl font-light">{locale === 'es' ? 'Riesgos, documentos y alertas visibles antes de que bloqueen la operación.' : 'Risks, documents and alerts visible before they block the operation.'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-28 px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">{locale === 'es' ? 'Capacidades' : 'Capabilities'}</p>
            <h2 className="mt-5 text-4xl font-light leading-tight text-[#173634] md:text-6xl">{page.capabilitiesTitle}</h2>
            <p className="mt-6 text-base leading-8 text-[#65706d]">{page.capabilitiesSubtitle}</p>
          </div>

          <div className="grid gap-px border border-[#d8e5e2] bg-[#d8e5e2] md:grid-cols-2 xl:grid-cols-3">
            {page.capabilities.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.title} className="group bg-white p-7 transition-colors hover:bg-[#f7faf8]">
                  <div className="mb-8 flex items-center justify-between gap-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#789b96]">{item.signal}</span>
                    <Icon className="h-6 w-6 text-[#789b96] transition-colors group-hover:text-[#173634]" />
                  </div>
                  <h3 className="text-2xl font-light leading-tight text-[#173634]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#65706d]">{item.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <N3uraliaPlatformPreview locale={locale} />

      <section id="solutions" className="scroll-mt-28 border-y border-[#d8e5e2] bg-[#edf4f1] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <N3uraliaLandingConsole locale={locale} />
        </div>
      </section>

      <section id="start-paths" className="scroll-mt-28 border-b border-[#d8e5e2] bg-[#fbfbfa] px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.86fr_1.14fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">{locale === 'es' ? 'Cómo empezar' : 'How to start'}</p>
              <h2 className="mt-5 text-4xl font-light leading-tight text-[#173634] md:text-6xl">{page.startTitle}</h2>
            </div>
            <p className="self-end text-base leading-8 text-[#65706d]">{page.startSubtitle}</p>
          </div>

          <div className="grid gap-px border border-[#d8e5e2] bg-[#d8e5e2] lg:grid-cols-3">
            {page.startPaths.map((path) => (
              <article key={path.title} className="bg-white p-7">
                <p className="text-6xl font-light leading-none text-[#c7d3cf]">{path.label}</p>
                <h3 className="mt-10 text-2xl font-light leading-tight text-[#173634]">{path.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#65706d]">{path.description}</p>
                <p className="mt-7 border-t border-[#d8e5e2] pt-5 text-sm font-semibold leading-6 text-[#526e69]">{path.outcome}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-end">
            <Link href={solutionsHref} className="inline-flex items-center justify-center gap-2 bg-[#173634] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#244946]">
              {locale === 'es' ? 'Ver soluciones por sector' : 'View sector solutions'}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="case-studies" className="scroll-mt-28 bg-white px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <h2 className="text-4xl font-light leading-tight text-[#173634] md:text-6xl">{page.projectsTitle}</h2>
            <p className="text-base leading-8 text-[#65706d]">{page.projectsSubtitle}</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {page.projects.map((project) => (
              <article key={project.title} className="border border-[#d8e5e2] bg-[#fbfbfa]">
                <div className="relative aspect-[1.55] overflow-hidden border-b border-[#d8e5e2] bg-[#102624]">
                  <Image src={project.image} alt={project.title} fill sizes="(min-width: 1024px) 31vw, 92vw" className="object-cover opacity-85 transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#789b96]">{project.label}</p>
                  <h3 className="mt-4 text-2xl font-light leading-tight text-[#173634]">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#65706d]">{project.description}</p>
                  <div className="mt-6 grid gap-2">
                    {project.stats.map((stat) => (
                      <div key={stat} className="flex items-center gap-2 text-sm font-medium text-[#526e69]">
                        <CheckCircle2 className="h-4 w-4 text-[#789b96]" />
                        {stat}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-we-work" className="scroll-mt-28 px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">{locale === 'es' ? 'Metodo' : 'Method'}</p>
            <h2 className="mt-5 text-4xl font-light leading-tight text-[#173634] md:text-6xl">{page.methodTitle}</h2>
            <p className="mt-6 text-base leading-8 text-[#65706d]">{page.methodSubtitle}</p>
            <div className="relative mt-10 aspect-[1.55] overflow-hidden border border-[#d8e5e2] bg-white">
              <Image src="/n3uralia-brand/field-team.png" alt="Operational field team" fill sizes="(min-width: 1024px) 38vw, 92vw" className="object-cover grayscale" />
            </div>
          </div>

          <div className="grid gap-px border border-[#d8e5e2] bg-[#d8e5e2]">
            {page.method.map((step, index) => (
              <div key={step.title} className="grid gap-5 bg-white p-7 md:grid-cols-[90px_1fr]">
                <span className="text-6xl font-light leading-none text-[#c7d3cf]">0{index + 1}</span>
                <div>
                  <h3 className="text-2xl font-light text-[#173634]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#65706d]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-28 bg-[#102624] px-5 py-24 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <LogoWordmark className="h-auto w-56 brightness-0 invert opacity-80" />
            <h2 className="mt-10 max-w-4xl text-4xl font-light leading-tight md:text-7xl">{page.ctaTitle}</h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">{page.ctaSubtitle}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href={solutionsHref} tone="light">{page.ctaButton}</PrimaryLink>
              <Link href={contactHref} className="inline-flex items-center justify-center border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#173634]">
                {page.primaryCta}
              </Link>
            </div>
          </div>
          <Image src="/n3uralia-brand/n3uralia-mark.png" alt="" width={984} height={943} className="hidden h-auto w-72 opacity-20 lg:block" />
        </div>
      </section>
    </main>
  )
}
