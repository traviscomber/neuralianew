import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowRight, CheckCircle2, Database, FileSearch, Gauge, Network, ShieldCheck, Workflow } from 'lucide-react'
import { N3uraliaHeroSystem } from '@/components/n3uralia-hero-system'
import { N3uraliaLandingConsole } from '@/components/n3uralia-landing-console'
import { N3uraliaPlatformPreview } from '@/components/n3uralia-platform-preview'
import { Footer } from '@/components/layout/footer'
import { DEFAULT_LOCALE, isValidLocale, type Locale } from '@/lib/get-locale'
import { absoluteUrl, OG_IMAGE_PATH, SITE_NAME, SITE_TWITTER_HANDLE } from '@/lib/site'

interface PageProps {
  params: {
    locale: string
  }
}

type TextBlock = {
  title: string
  description: string
}

type Metric = TextBlock & {
  phase: string
}

type FlowSignal = TextBlock & {
  icon: typeof Gauge
  label: string
}

type RolePath = TextBlock & {
  cta: string
  hrefKey: 'contact' | 'solutions'
  pain: string
  proof: string
  signal: string
  system: string
}

type Capability = TextBlock & {
  icon: typeof Gauge
  signal: string
  buyer: string
  outcome: string
}

type CapabilityLens = TextBlock & {
  label: string
}

type Project = TextBlock & {
  image: string
  label: string
  problem: string
  system: string
  value: string
  stats: string[]
}

type StartPath = TextBlock & {
  label: string
  bestFor: string
  deliverable: string
  decision: string
  outcome: string
}

type TrustSignal = TextBlock & {
  value: string
  proof: string
  avoids: string
}

type MethodStep = TextBlock & {
  deliverable: string
  control: string
}

type PageContent = {
  title: string
  description: string
  primaryCta: string
  secondaryCta: string
  heroTitle: string
  heroSubtitle: string
  heroNote: string
  metrics: Metric[]
  flowTitle: string
  flowSubtitle: string
  flowSignals: FlowSignal[]
  roleEyebrow: string
  roleTitle: string
  roleSubtitle: string
  rolePaths: RolePath[]
  capabilitiesTitle: string
  capabilitiesSubtitle: string
  capabilityLenses: CapabilityLens[]
  capabilities: Capability[]
  trustTitle: string
  trustSubtitle: string
  trustSignals: TrustSignal[]
  projectsTitle: string
  projectsSubtitle: string
  projects: Project[]
  startTitle: string
  startSubtitle: string
  startPaths: StartPath[]
  methodTitle: string
  methodSubtitle: string
  method: MethodStep[]
  ctaTitle: string
  ctaSubtitle: string
  ctaSignals: TextBlock[]
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
      { phase: 'Validate', title: '30 days', description: 'to validate one operational workflow with real users.' },
      { phase: 'Build', title: '90 days', description: 'to ship a connected production layer.' },
      { phase: 'Connect', title: '4 layers', description: 'dashboard, workflow, agent and integration.' },
      { phase: 'Operate', title: '1 system', description: 'for visibility, accountability and faster action.' },
    ],
    flowTitle: 'From scattered signals to an operating layer',
    flowSubtitle:
      'N3uralia connects documents, field updates, management needs and AI assistance into one controlled workflow.',
    flowSignals: [
      {
        icon: FileSearch,
        label: 'Evidence',
        title: 'Documents stop hiding risk',
        description: 'Contracts, permits, PDFs and renewals become searchable status, owners and evidence.',
      },
      {
        icon: Workflow,
        label: 'Execution',
        title: 'Alerts become accountable work',
        description: 'Warnings turn into tasks, handoffs, deadlines and escalation paths the team can follow.',
      },
      {
        icon: Gauge,
        label: 'Management',
        title: 'Indicators explain what to do next',
        description: 'Dashboards show status, blockers and priority without waiting for another manual report.',
      },
      {
        icon: Network,
        label: 'Agents',
        title: 'AI works inside the operation',
        description: 'Agents answer with real context, sources, permissions and next steps, not generic prompts.',
      },
    ],
    roleEyebrow: 'Find your entry point',
    roleTitle: 'Different teams feel the same operational drag in different ways',
    roleSubtitle:
      'Use this section as a quick map: who owns the pressure, what N3uralia turns it into, and where the first useful conversation should start.',
    rolePaths: [
      {
        signal: 'Leadership',
        title: 'I need control without waiting for another report',
        description: 'For general managers, operations leaders and founders who need a live view of status, risk and owners.',
        pain: 'Decisions depend on meetings, manual updates and late visibility.',
        system: 'Executive control layer with priorities, alerts, accountable owners and operational evidence.',
        proof: 'Status board, risk map and escalation rhythm.',
        cta: 'Start diagnosis',
        hrefKey: 'contact',
      },
      {
        signal: 'Compliance',
        title: 'Documents are hiding risk and slowing execution',
        description: 'For compliance, HSE, legal and contractor teams managing permits, renewals, evidence and approvals.',
        pain: 'Critical evidence lives in email, PDFs, folders and disconnected trackers.',
        system: 'Document intelligence layer that extracts, classifies, alerts and keeps an audit trail.',
        proof: 'Coverage dashboard, evidence trail and renewal alerts.',
        cta: 'See solutions',
        hrefKey: 'solutions',
      },
      {
        signal: 'Operations',
        title: 'The field moves faster than the system can see',
        description: 'For teams coordinating tasks, incidents, shifts, assets, clients or field execution.',
        pain: 'Updates arrive late, responsibilities blur and handoffs depend on personal follow-up.',
        system: 'Connected workflow with mobile capture, assignments, alerts and management visibility.',
        proof: 'Task flow, owner alerts and live operational status.',
        cta: 'See solutions',
        hrefKey: 'solutions',
      },
      {
        signal: 'Technology',
        title: 'AI pilots need to become governed production systems',
        description: 'For technology, data and innovation teams that need integrations, permissions and safe adoption.',
        pain: 'Prompts and prototypes are disconnected from data, users, permissions and daily process.',
        system: 'Agentic layer with source material, roles, logs, integrations and human escalation.',
        proof: 'Agent blueprint, permissions matrix and production rollout path.',
        cta: 'Start diagnosis',
        hrefKey: 'contact',
      },
    ],
    capabilitiesTitle: 'A practical operating layer for teams under pressure',
    capabilitiesSubtitle:
      'This is not generic automation. It is a practical architecture for teams that need control, speed and traceability.',
    capabilityLenses: [
      {
        label: 'Control',
        title: 'For leaders',
        description: 'Visibility, priorities and owners without waiting for manual reports.',
      },
      {
        label: 'Automation',
        title: 'For operations',
        description: 'Flows, alerts and handoffs that reduce follow-up work.',
      },
      {
        label: 'Data',
        title: 'For IT and data teams',
        description: 'Cleaner sources, integrations and governed access.',
      },
      {
        label: 'Agents',
        title: 'For daily users',
        description: 'AI assistance that works inside the real operating context.',
      },
    ],
    capabilities: [
      {
        icon: Gauge,
        signal: 'Executive view',
        buyer: 'For managers',
        outcome: 'Live status and owners',
        title: 'Operational command centers',
        description: 'Dashboards that show status, risk, progress and owners without waiting for manual reports.',
      },
      {
        icon: Workflow,
        signal: 'Workflow',
        buyer: 'For operations',
        outcome: 'Fewer handoff gaps',
        title: 'Connected execution flows',
        description: 'Tasks, approvals, alerts and handoffs connected to the way the team already works.',
      },
      {
        icon: FileSearch,
        signal: 'Documents',
        buyer: 'For compliance',
        outcome: 'Evidence before risk',
        title: 'Document intelligence',
        description: 'Classification, extraction, comparison and evidence tracking for PDFs, contracts and permits.',
      },
      {
        icon: Database,
        signal: 'Data',
        buyer: 'For IT and data',
        outcome: 'Cleaner operational source',
        title: 'Integrations and clean data',
        description: 'ERP, CRM, spreadsheets, email, Supabase, APIs and legacy tools organized into one useful layer.',
      },
      {
        icon: Network,
        signal: 'Agents',
        buyer: 'For daily teams',
        outcome: 'Answers with context',
        title: 'AI agents with context',
        description: 'Assistants that answer, summarize and trigger next steps from real company knowledge.',
      },
      {
        icon: ShieldCheck,
        signal: 'Control',
        buyer: 'For governance',
        outcome: 'Safe escalation paths',
        title: 'Governance and traceability',
        description: 'Roles, permissions, audit trails and escalation paths so AI becomes operationally safe.',
      },
    ],
    trustTitle: 'Built for operations where the details matter',
    trustSubtitle:
      'N3uralia works best when the company needs real software discipline, not a generic AI wrapper.',
    trustSignals: [
      {
        value: '01',
        title: 'No template thinking',
        description: 'Each system starts from the real process, owners, documents, risks and business rules.',
        proof: 'Process map, owners, exceptions and business rules before interface work.',
        avoids: 'Prebuilt dashboards that ignore how the team actually operates.',
      },
      {
        value: '02',
        title: 'Production-minded AI',
        description: 'Agents are designed with context, permissions, traceability and escalation paths from the beginning.',
        proof: 'Source material, permissions, logs and human escalation paths are defined early.',
        avoids: 'Demo prompts disconnected from data, governance and daily work.',
      },
      {
        value: '03',
        title: 'Integration before replacement',
        description: 'We connect the tools already in use instead of forcing a full operational reset.',
        proof: 'Spreadsheets, email, ERP, CRM, APIs and legacy systems can become part of the layer.',
        avoids: 'Rip-and-replace projects that die before adoption.',
      },
      {
        value: '04',
        title: 'Designed for Chile and LATAM',
        description: 'The work respects local teams, compliance pressure, budgets and adoption realities.',
        proof: 'Pilots, rollout pace and workflows are adjusted to real local constraints.',
        avoids: 'Imported software playbooks that assume unlimited budget and perfect data.',
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
        problem: 'Critical field information was fragmented across teams, documents and late reports.',
        system: 'A dark command interface organizes modules, responsibilities and operational status.',
        value: 'Management sees the operation as it moves, not after the meeting.',
        stats: ['Field to management', 'Live modules', 'Operational control'],
      },
      {
        label: 'Document control',
        title: 'DocuFleet / LABBE logic',
        description: 'Contractors, drivers, vehicles and compliance documents with alerts and executive visibility.',
        image: '/n3uralia-brand/operational-dashboard.png',
        problem: 'Compliance risk was hidden inside documents, renewals and disconnected ownership.',
        system: 'A control panel turns documents into coverage, pending work, rejected items and alerts.',
        value: 'Risk becomes visible early enough for the team to act.',
        stats: ['86% compliance', '583 open risks', '50 alerts'],
      },
      {
        label: 'Customer and assets',
        title: 'Sur-Realista repository',
        description: 'Clients, properties, tasks, maps, files and pipeline views for high-volume teams.',
        image: '/n3uralia-brand/client-repository.png',
        problem: 'High-volume customer and asset data was difficult to search, qualify and prioritize.',
        system: 'A repository layer connects records, maps, files, tasks and pipeline actions.',
        value: 'Teams work from a shared view instead of rebuilding context every time.',
        stats: ['38,080 clients', 'Maps and files', 'Advanced search'],
      },
    ],
    startTitle: 'Choose the entry point that matches your operational pressure',
    startSubtitle:
      'Start with the smallest useful operating layer, prove value with real users, and scale only when the problem deserves it.',
    startPaths: [
      {
        label: '01',
        title: 'Operational diagnosis',
        description: 'Map the current process, data sources, documents, teams and automation opportunities.',
        bestFor: 'You know the pain, but not the architecture.',
        deliverable: 'Process map, risk areas and build recommendation.',
        decision: 'Decide what is worth prototyping first.',
        outcome: 'Best when the problem is visible but the architecture is not clear yet.',
      },
      {
        label: '02',
        title: 'Prototype sprint',
        description: 'Build one dashboard, flow, agent or portal around a concrete workflow and real users.',
        bestFor: 'You need evidence before a larger commitment.',
        deliverable: 'Working module with users, feedback and adoption signals.',
        decision: 'Decide whether to scale, adjust or stop.',
        outcome: 'Best when the team needs proof before committing to a larger system.',
      },
      {
        label: '03',
        title: 'Production operating layer',
        description: 'Connect integrations, permissions, monitoring, roles and ongoing improvement into one system.',
        bestFor: 'You already need durable software in daily operation.',
        deliverable: 'Connected layer with permissions, monitoring and improvement rhythm.',
        decision: 'Decide the rollout sequence and operating ownership.',
        outcome: 'Best when the operation needs durable software, not another temporary tool.',
      },
    ],
    methodTitle: 'How we enter without turning the company upside down',
    methodSubtitle:
      'We keep the work concrete: diagnose, architect, build, integrate and improve with real usage evidence.',
    method: [
      {
        title: 'Diagnose',
        description: 'Map flows, data, documents, teams and bottlenecks.',
        deliverable: 'Operational map and friction inventory.',
        control: 'No build starts before owners, data sources and risks are visible.',
      },
      {
        title: 'Architect',
        description: 'Define what should be dashboard, workflow, agent, portal or integration.',
        deliverable: 'System blueprint and rollout sequence.',
        control: 'Every component has a job, owner and adoption reason.',
      },
      {
        title: 'Build',
        description: 'Ship the first useful system with clear owners and visible outcomes.',
        deliverable: 'Working module with real users.',
        control: 'Scope stays tied to one operational drag and measurable use.',
      },
      {
        title: 'Integrate',
        description: 'Connect it with the tools, permissions and routines the team already uses.',
        deliverable: 'Connected layer with permissions and improvement rhythm.',
        control: 'The system enters daily work without forcing a reset.',
      },
    ],
    ctaTitle: 'Move faster. Operate safer. Control more.',
    ctaSubtitle:
      'Start with one operational drag and turn it into a system your team can actually use.',
    ctaSignals: [
      {
        title: 'No full reset required',
        description: 'We start from the tools, documents and routines your team already uses.',
      },
      {
        title: 'One workflow is enough',
        description: 'A useful first layer can begin with one concrete operational drag.',
      },
      {
        title: 'Built to become production',
        description: 'The path includes owners, permissions, monitoring and adoption evidence.',
      },
    ],
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
      { phase: 'Validar', title: '30 días', description: 'para validar un flujo operativo con usuarios reales.' },
      { phase: 'Construir', title: '90 días', description: 'para desplegar una capa conectada en producción.' },
      { phase: 'Conectar', title: '4 capas', description: 'tablero, flujo, agente e integración.' },
      { phase: 'Operar', title: '1 sistema', description: 'para visibilidad, responsabilidad y acción más rápida.' },
    ],
    flowTitle: 'De señales dispersas a una capa operativa',
    flowSubtitle:
      'N3uralia conecta documentos, terreno, necesidades gerenciales y asistencia IA en un flujo controlado.',
    flowSignals: [
      {
        icon: FileSearch,
        label: 'Evidencia',
        title: 'Los documentos dejan de esconder riesgo',
        description: 'Contratos, permisos, PDFs y vencimientos se convierten en estado, responsables y evidencia.',
      },
      {
        icon: Workflow,
        label: 'Ejecución',
        title: 'Las alertas se vuelven trabajo responsable',
        description: 'Las señales se transforman en tareas, traspasos, fechas y rutas de escalamiento claras.',
      },
      {
        icon: Gauge,
        label: 'Gerencia',
        title: 'Los indicadores muestran el siguiente paso',
        description: 'Los tableros muestran estado, bloqueos y prioridad sin esperar otro reporte manual.',
      },
      {
        icon: Network,
        label: 'Agentes',
        title: 'La IA trabaja dentro de la operación',
        description: 'Los agentes responden con contexto, fuentes, permisos y próximos pasos, no prompts genéricos.',
      },
    ],
    roleEyebrow: 'Encuentra tu punto de entrada',
    roleTitle: 'Cada equipo siente la misma fricción operacional de una forma distinta',
    roleSubtitle:
      'Úsalo como mapa rápido: quién vive la presión, en qué sistema lo convierte N3uralia y dónde conviene empezar la conversación.',
    rolePaths: [
      {
        signal: 'Liderazgo',
        title: 'Necesito control sin esperar otro reporte',
        description: 'Para gerentes generales, líderes de operaciones y founders que necesitan ver estado, riesgo y responsables.',
        pain: 'Las decisiones dependen de reuniones, actualizaciones manuales y visibilidad tardía.',
        system: 'Capa ejecutiva con prioridades, alertas, responsables y evidencia operacional.',
        proof: 'Tablero de estado, mapa de riesgo y ritmo de escalamiento.',
        cta: 'Iniciar diagnóstico',
        hrefKey: 'contact',
      },
      {
        signal: 'Cumplimiento',
        title: 'Los documentos esconden riesgo y frenan la ejecución',
        description: 'Para cumplimiento, HSE, legal y contratistas que gestionan permisos, vencimientos, evidencia y aprobaciones.',
        pain: 'La evidencia crítica vive en correo, PDFs, carpetas y planillas desconectadas.',
        system: 'Capa de inteligencia documental que extrae, clasifica, alerta y deja trazabilidad.',
        proof: 'Tablero de cobertura, evidencia y alertas de vencimiento.',
        cta: 'Ver soluciones',
        hrefKey: 'solutions',
      },
      {
        signal: 'Operaciones',
        title: 'El terreno se mueve más rápido que el sistema',
        description: 'Para equipos que coordinan tareas, incidentes, turnos, activos, clientes o ejecución en terreno.',
        pain: 'Las novedades llegan tarde, los responsables se diluyen y los traspasos dependen del seguimiento personal.',
        system: 'Flujo conectado con captura móvil, asignaciones, alertas y visibilidad gerencial.',
        proof: 'Flujo de tareas, alertas por responsable y estado vivo.',
        cta: 'Ver soluciones',
        hrefKey: 'solutions',
      },
      {
        signal: 'Tecnología',
        title: 'Los pilotos IA necesitan convertirse en producción gobernada',
        description: 'Para tecnología, datos e innovación que necesitan integraciones, permisos y adopción segura.',
        pain: 'Los prompts y prototipos quedan desconectados de datos, usuarios, permisos y proceso diario.',
        system: 'Capa agentica con fuentes, roles, logs, integraciones y escalamiento humano.',
        proof: 'Blueprint de agentes, matriz de permisos y ruta de producción.',
        cta: 'Iniciar diagnóstico',
        hrefKey: 'contact',
      },
    ],
    capabilitiesTitle: 'Una capa operativa práctica para equipos bajo presión',
    capabilitiesSubtitle:
      'No es automatización genérica. Es arquitectura práctica para equipos que necesitan control, velocidad y trazabilidad.',
    capabilityLenses: [
      {
        label: 'Control',
        title: 'Para líderes',
        description: 'Visibilidad, prioridades y responsables sin esperar reportes manuales.',
      },
      {
        label: 'Automatización',
        title: 'Para operaciones',
        description: 'Flujos, alertas y traspasos que reducen seguimiento manual.',
      },
      {
        label: 'Datos',
        title: 'Para TI y datos',
        description: 'Fuentes más limpias, integraciones y acceso gobernado.',
      },
      {
        label: 'Agentes',
        title: 'Para usuarios diarios',
        description: 'Asistencia IA dentro del contexto real de la operación.',
      },
    ],
    capabilities: [
      {
        icon: Gauge,
        signal: 'Vista ejecutiva',
        buyer: 'Para gerencia',
        outcome: 'Estado vivo y responsables',
        title: 'Centros de control operacional',
        description: 'Tableros que muestran estado, riesgo, avance y responsables sin esperar reportes manuales.',
      },
      {
        icon: Workflow,
        signal: 'Flujo',
        buyer: 'Para operaciones',
        outcome: 'Menos brechas de traspaso',
        title: 'Ejecución conectada',
        description: 'Tareas, aprobaciones, alertas y traspasos conectados a la forma real de trabajo.',
      },
      {
        icon: FileSearch,
        signal: 'Documentos',
        buyer: 'Para cumplimiento',
        outcome: 'Evidencia antes del riesgo',
        title: 'Inteligencia documental',
        description: 'Clasificación, extracción, comparación y evidencia para PDFs, contratos y permisos.',
      },
      {
        icon: Database,
        signal: 'Datos',
        buyer: 'Para TI y datos',
        outcome: 'Fuente operativa más limpia',
        title: 'Integraciones y datos limpios',
        description: 'ERP, CRM, planillas, correo, Supabase, APIs y herramientas legacy en una capa útil.',
      },
      {
        icon: Network,
        signal: 'Agentes',
        buyer: 'Para equipos diarios',
        outcome: 'Respuestas con contexto',
        title: 'Agentes IA con contexto',
        description: 'Asistentes que responden, resumen y activan siguientes pasos desde conocimiento real.',
      },
      {
        icon: ShieldCheck,
        signal: 'Control',
        buyer: 'Para gobernanza',
        outcome: 'Escalamiento seguro',
        title: 'Gobernanza y trazabilidad',
        description: 'Roles, permisos, auditoría y escalamiento para que la IA sea segura en la operación.',
      },
    ],
    trustTitle: 'Construido para operaciones donde los detalles importan',
    trustSubtitle:
      'N3uralia funciona mejor cuando la empresa necesita disciplina real de software, no una capa genérica de IA.',
    trustSignals: [
      {
        value: '01',
        title: 'Sin pensar en plantillas',
        description: 'Cada sistema parte del proceso real, responsables, documentos, riesgos y reglas del negocio.',
        proof: 'Mapa de proceso, responsables, excepciones y reglas antes de diseñar interfaz.',
        avoids: 'Tableros prefabricados que ignoran cómo opera realmente el equipo.',
      },
      {
        value: '02',
        title: 'IA pensada para producción',
        description: 'Los agentes se diseñan con contexto, permisos, trazabilidad y rutas de escalamiento desde el inicio.',
        proof: 'Fuentes, permisos, logs y escalamiento humano se definen temprano.',
        avoids: 'Prompts demo desconectados de datos, gobernanza y trabajo diario.',
      },
      {
        value: '03',
        title: 'Integrar antes que reemplazar',
        description: 'Conectamos las herramientas que ya existen en vez de forzar un reinicio operacional completo.',
        proof: 'Planillas, correo, ERP, CRM, APIs y sistemas legacy pueden entrar a la capa.',
        avoids: 'Proyectos de reemplazo total que mueren antes de lograr adopción.',
      },
      {
        value: '04',
        title: 'Diseñado para Chile y LATAM',
        description: 'El trabajo respeta equipos locales, presión de cumplimiento, presupuestos y adopción real.',
        proof: 'Pilotos, ritmo de despliegue y flujos se ajustan a restricciones reales.',
        avoids: 'Playbooks importados que asumen presupuesto infinito y datos perfectos.',
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
        problem: 'La información crítica de terreno estaba fragmentada entre equipos, documentos y reportes tardíos.',
        system: 'Una interfaz de comando organiza módulos, responsables y estado operacional.',
        value: 'La gerencia ve la operación mientras avanza, no después de la reunión.',
        stats: ['Terreno a gerencia', 'Módulos vivos', 'Control operativo'],
      },
      {
        label: 'Control documental',
        title: 'Lógica DocuFleet / LABBE',
        description: 'Contratistas, conductores, vehículos y documentos de cumplimiento con alertas y visibilidad.',
        image: '/n3uralia-brand/operational-dashboard.png',
        problem: 'El riesgo de cumplimiento estaba escondido en documentos, vencimientos y responsables dispersos.',
        system: 'Un panel convierte documentos en cobertura, pendientes, rechazos y alertas.',
        value: 'El riesgo aparece con tiempo suficiente para que el equipo actúe.',
        stats: ['86% cumplimiento', '583 riesgos abiertos', '50 alertas'],
      },
      {
        label: 'Clientes y activos',
        title: 'Repositorio Sur-Realista',
        description: 'Clientes, propiedades, tareas, mapas, archivos y pipeline para equipos de alto volumen.',
        image: '/n3uralia-brand/client-repository.png',
        problem: 'Los datos de clientes y activos eran difíciles de buscar, calificar y priorizar.',
        system: 'Una capa de repositorio conecta registros, mapas, archivos, tareas y pipeline.',
        value: 'El equipo trabaja desde una vista compartida sin reconstruir contexto cada vez.',
        stats: ['38.080 clientes', 'Mapas y archivos', 'Búsqueda avanzada'],
      },
    ],
    startTitle: 'Elige una entrada proporcional a tu presión operativa',
    startSubtitle:
      'Parte con la capa operativa útil más pequeña, prueba valor con usuarios reales y escala solo cuando el problema lo merece.',
    startPaths: [
      {
        label: '01',
        title: 'Diagnóstico operacional',
        description: 'Mapeamos proceso actual, fuentes de datos, documentos, equipos y oportunidades de automatización.',
        bestFor: 'Sabes dónde duele, pero no está clara la arquitectura.',
        deliverable: 'Mapa de proceso, zonas de riesgo y recomendación de construcción.',
        decision: 'Decidir qué vale la pena prototipar primero.',
        outcome: 'Ideal cuando el problema es visible, pero la arquitectura todavía no está clara.',
      },
      {
        label: '02',
        title: 'Sprint de prototipo',
        description: 'Construimos un tablero, flujo, agente o portal alrededor de un proceso concreto y usuarios reales.',
        bestFor: 'Necesitas evidencia antes de comprometerte con algo mayor.',
        deliverable: 'Módulo funcional con usuarios, feedback y señales de adopción.',
        decision: 'Decidir si escalar, ajustar o detener.',
        outcome: 'Ideal cuando el equipo necesita evidencia antes de comprometerse con un sistema mayor.',
      },
      {
        label: '03',
        title: 'Capa operativa en producción',
        description: 'Conectamos integraciones, permisos, monitoreo, roles y mejora continua en un solo sistema.',
        bestFor: 'Ya necesitas software durable dentro de la operación diaria.',
        deliverable: 'Capa conectada con permisos, monitoreo y ritmo de mejora.',
        decision: 'Decidir secuencia de despliegue y dueño operativo.',
        outcome: 'Ideal cuando la operación necesita software durable, no otra herramienta temporal.',
      },
    ],
    methodTitle: 'Cómo entramos sin dar vuelta la empresa',
    methodSubtitle:
      'Mantenemos el trabajo concreto: diagnosticar, arquitectar, construir, integrar y mejorar con evidencia de uso real.',
    method: [
      {
        title: 'Diagnosticar',
        description: 'Mapeamos flujos, datos, documentos, equipos y cuellos de botella.',
        deliverable: 'Mapa operativo e inventario de fricciones.',
        control: 'No se construye antes de ver responsables, fuentes de datos y riesgos.',
      },
      {
        title: 'Arquitectar',
        description: 'Definimos qué debe ser tablero, flujo, agente, portal o integración.',
        deliverable: 'Blueprint del sistema y secuencia de despliegue.',
        control: 'Cada componente tiene trabajo, responsable y razón de adopción.',
      },
      {
        title: 'Construir',
        description: 'Lanzamos el primer sistema útil con responsables claros y resultados visibles.',
        deliverable: 'Módulo funcional con usuarios reales.',
        control: 'El alcance se mantiene atado a una fricción operativa medible.',
      },
      {
        title: 'Integrar',
        description: 'Lo conectamos con herramientas, permisos y rutinas que el equipo ya usa.',
        deliverable: 'Capa conectada con permisos y ritmo de mejora.',
        control: 'El sistema entra al trabajo diario sin forzar un reinicio.',
      },
    ],
    ctaTitle: 'Muévete más rápido. Opera más seguro. Controla más.',
    ctaSubtitle:
      'Parte con una fricción operativa y conviértela en un sistema que tu equipo pueda usar de verdad.',
    ctaSignals: [
      {
        title: 'No exige reiniciar todo',
        description: 'Partimos desde herramientas, documentos y rutinas que tu equipo ya usa.',
      },
      {
        title: 'Un flujo basta para empezar',
        description: 'La primera capa útil puede nacer desde una fricción operativa concreta.',
      },
      {
        title: 'Pensado para producción',
        description: 'El camino incluye responsables, permisos, monitoreo y evidencia de adopción.',
      },
    ],
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
      canonical: absoluteUrl(`/${locale}`),
      languages: {
        es: absoluteUrl('/es'),
        en: absoluteUrl('/en'),
        'x-default': absoluteUrl('/en'),
      },
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: absoluteUrl(`/${locale}`),
      siteName: SITE_NAME,
      locale: locale === 'es' ? 'es_CL' : 'en_US',
      localeAlternate: locale === 'es' ? ['en_US'] : ['es_CL'],
      type: 'website',
      images: [
        {
          url: absoluteUrl(OG_IMAGE_PATH),
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} - ${page.heroTitle}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      site: SITE_TWITTER_HANDLE,
      creator: SITE_TWITTER_HANDLE,
      images: [absoluteUrl(OG_IMAGE_PATH)],
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

function buildJsonLd(locale: Locale, page: PageContent) {
  const baseUrl = `https://www.n3uralia.com/${locale}`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.n3uralia.com/#organization',
        name: 'N3uralia',
        url: 'https://www.n3uralia.com',
        logo: 'https://www.n3uralia.com/n3uralia-brand/n3uralia-wordmark.png',
        description: page.description,
        areaServed: ['Chile', 'LATAM'],
        knowsAbout: [
          'Operational software',
          'AI agents',
          'Workflow automation',
          'Document intelligence',
          'Operational dashboards',
        ],
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${baseUrl}#operating-layer`,
        name: locale === 'es' ? 'Capa operativa N3uralia' : 'N3uralia Operating Layer',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: page.heroSubtitle,
        provider: {
          '@id': 'https://www.n3uralia.com/#organization',
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${baseUrl}#webpage`,
        url: baseUrl,
        name: page.title,
        description: page.description,
        inLanguage: locale === 'es' ? 'es-CL' : 'en',
        about: {
          '@id': `${baseUrl}#operating-layer`,
        },
      },
    ],
  }
}

export default function HomePage({ params }: PageProps) {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]
  const contactHref = href(locale, '/contact')
  const solutionsHref = '/es/soluciones'
  const jsonLd = buildJsonLd(locale, page)

  return (
    <main id="top" className="overflow-hidden bg-[#fbfbfa] text-[#52605d]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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

          <N3uraliaHeroSystem locale={locale} />

          <div className="mt-14 w-full overflow-hidden border-y border-[#173634] py-7">
            <Image src="/n3uralia-brand/operations-graph-wide.png" alt="N3uralia operational connection graph" width={1920} height={276} className="mx-auto h-auto min-w-[760px] max-w-6xl opacity-70" />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl border-t border-[#1e3431] bg-[#071211] px-5 py-5 sm:px-8 lg:px-10">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">
              {locale === 'es' ? 'Ritmo de implementación' : 'Implementation rhythm'}
            </p>
            <p className="text-xs font-medium text-[#789b96]">
              {locale === 'es' ? 'De una fricción concreta a una capa operativa.' : 'From one concrete drag to an operating layer.'}
            </p>
          </div>

          <div className="grid gap-px border border-[#1e3431] bg-[#1e3431] sm:grid-cols-2 lg:grid-cols-4">
            {page.metrics.map((metric, index) => (
              <div key={metric.title} className="group relative overflow-hidden bg-[#071211] px-6 py-6 transition-colors hover:bg-[#0d1917]">
                <div className="absolute inset-x-0 top-0 h-1 bg-[#8fb2aa]/0 transition-colors group-hover:bg-[#8fb2aa]" />
                <div className="mb-8 flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#789b96]">{metric.phase}</p>
                  <p className="font-mono text-xs text-[#46635d]">0{index + 1}</p>
                </div>
                <p className="text-4xl font-semibold leading-none text-[#f4faf8]">{metric.title}</p>
                <p className="mt-3 text-sm leading-6 text-[#8fb2aa]">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="flow" className="border-b border-[#d8e5e2] bg-white px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">{locale === 'es' ? 'La conexión' : 'The connection'}</p>
            <h2 className="mt-5 text-4xl font-light leading-tight text-[#173634] md:text-6xl">{page.flowTitle}</h2>
            <p className="mt-6 text-base leading-8 text-[#65706d]">{page.flowSubtitle}</p>

            <div className="mt-9 grid gap-px border border-[#d8e5e2] bg-[#d8e5e2]">
              {page.flowSignals.map((signal, index) => {
                const Icon = signal.icon
                return (
                  <article key={signal.title} className="group grid gap-4 bg-[#fbfbfa] p-5 transition-colors hover:bg-white sm:grid-cols-[48px_1fr]">
                    <div className="flex items-start justify-between gap-4 sm:block">
                      <span className="grid h-12 w-12 place-items-center border border-[#d8e5e2] bg-white text-[#789b96] transition-colors group-hover:border-[#789b96] group-hover:text-[#173634]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-xs text-[#a7b9b4] sm:mt-5 sm:block">0{index + 1}</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#789b96]">{signal.label}</p>
                      <h3 className="mt-2 text-xl font-light leading-tight text-[#173634]">{signal.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#65706d]">{signal.description}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          <div className="border border-[#d8e5e2] bg-[#edf4f1] p-4 shadow-[0_35px_100px_-82px_#173634]">
            <div className="mb-4 grid gap-px border border-[#c8d8d4] bg-[#c8d8d4] md:grid-cols-3">
              {[
                locale === 'es' ? 'Capturar' : 'Capture',
                locale === 'es' ? 'Ordenar' : 'Structure',
                locale === 'es' ? 'Actuar' : 'Act',
              ].map((step, index) => (
                <div key={step} className="bg-white px-4 py-3">
                  <p className="font-mono text-xs text-[#a7b9b4]">0{index + 1}</p>
                  <p className="mt-2 text-sm font-semibold text-[#173634]">{step}</p>
                </div>
              ))}
            </div>

            <div className="relative aspect-[1.75] overflow-hidden border border-white/10 bg-[#102624]">
              <Image src="/n3uralia-brand/operational-dashboard.png" alt="Executive operational dashboard" fill sizes="(min-width: 1024px) 58vw, 92vw" className="object-cover opacity-88" />
              <div className="absolute left-4 top-4 border border-[#8fb2aa]/45 bg-[#102624]/88 px-5 py-4 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8fb2aa]">
                  {locale === 'es' ? 'capa unificada' : 'unified layer'}
                </p>
                <p className="mt-2 max-w-[16rem] text-sm leading-6 text-white/80">
                  {locale === 'es' ? 'Una vista para riesgo, avance, responsables y evidencia.' : 'One view for risk, progress, owners and evidence.'}
                </p>
              </div>
              <div className="absolute right-4 top-4 hidden border border-[#8fb2aa]/45 bg-[#102624]/88 px-5 py-4 text-right backdrop-blur sm:block">
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

      <section id="role-map" className="scroll-mt-28 border-b border-[#d8e5e2] bg-[#fbfbfa] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">{page.roleEyebrow}</p>
              <h2 className="mt-5 text-4xl font-light leading-tight text-[#173634] md:text-6xl">{page.roleTitle}</h2>
            </div>
            <p className="max-w-3xl text-base leading-8 text-[#65706d] lg:justify-self-end">{page.roleSubtitle}</p>
          </div>

          <div className="mt-12 grid gap-px border border-[#d8e5e2] bg-[#d8e5e2] lg:grid-cols-2 xl:grid-cols-4">
            {page.rolePaths.map((role, index) => {
              const destination = role.hrefKey === 'contact' ? contactHref : solutionsHref

              return (
                <article key={role.title} className="group flex flex-col bg-white p-6 transition-colors hover:bg-[#f6faf8] xl:min-h-[34rem]">
                  <div className="mb-10 flex items-center justify-between gap-4">
                    <span className="border border-[#d8e5e2] bg-[#fbfbfa] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#789b96]">
                      {role.signal}
                    </span>
                    <span className="font-mono text-sm text-[#a7b9b4]">0{index + 1}</span>
                  </div>

                  <h3 className="text-2xl font-light leading-tight text-[#173634]">{role.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#65706d]">{role.description}</p>

                  <div className="mt-8 grid gap-4 text-sm leading-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9aa9a5]">{locale === 'es' ? 'Dolor' : 'Pain'}</p>
                      <p className="mt-2 text-[#52605d]">{role.pain}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9aa9a5]">{locale === 'es' ? 'Sistema' : 'System'}</p>
                      <p className="mt-2 text-[#52605d]">{role.system}</p>
                    </div>
                    <div className="border-l border-[#8fb2aa] pl-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#789b96]">{locale === 'es' ? 'Evidencia' : 'Evidence'}</p>
                      <p className="mt-2 font-medium text-[#173634]">{role.proof}</p>
                    </div>
                  </div>

                  <Link href={destination} className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-[#173634] transition-colors hover:text-[#789b96]">
                    {role.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-28 px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">{locale === 'es' ? 'Capacidades' : 'Capabilities'}</p>
              <h2 className="mt-5 text-4xl font-light leading-tight text-[#173634] md:text-6xl">{page.capabilitiesTitle}</h2>
            </div>
            <p className="mt-6 text-base leading-8 text-[#65706d]">{page.capabilitiesSubtitle}</p>
          </div>

          <div className="mb-8 grid gap-px border border-[#d8e5e2] bg-[#d8e5e2] md:grid-cols-2 xl:grid-cols-4">
            {page.capabilityLenses.map((lens) => (
              <article key={lens.label} className="bg-[#f7faf8] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#789b96]">{lens.label}</p>
                <h3 className="mt-4 text-xl font-light leading-tight text-[#173634]">{lens.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#65706d]">{lens.description}</p>
              </article>
            ))}
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
                  <div className="mb-5 flex flex-wrap gap-2">
                    <span className="border border-[#d8e5e2] bg-[#fbfbfa] px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#526e69]">
                      {item.buyer}
                    </span>
                    <span className="border border-[#d8e5e2] bg-[#f1f6f4] px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#789b96]">
                      {item.outcome}
                    </span>
                  </div>
                  <h3 className="text-2xl font-light leading-tight text-[#173634]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#65706d]">{item.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="trust" className="scroll-mt-28 border-y border-[#d8e5e2] bg-[#f1f6f4] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">{locale === 'es' ? 'Criterios' : 'Trust criteria'}</p>
            <h2 className="mt-5 text-4xl font-light leading-tight text-[#173634] md:text-6xl">{page.trustTitle}</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#65706d]">{page.trustSubtitle}</p>

            <div className="mt-8 border border-[#c9d9d5] bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#789b96]">
                {locale === 'es' ? 'Diferencia clave' : 'Key difference'}
              </p>
              <p className="mt-4 text-2xl font-light leading-tight text-[#173634]">
                {locale === 'es'
                  ? 'No vendemos IA aislada: diseñamos sistemas que sobreviven al uso diario.'
                  : 'We do not sell isolated AI: we design systems that survive daily use.'}
              </p>
              <p className="mt-4 text-sm leading-7 text-[#65706d]">
                {locale === 'es'
                  ? 'El criterio no es verse moderno. Es reducir fricción, sostener control y dejar evidencia para operar mejor.'
                  : 'The criterion is not looking modern. It is reducing friction, keeping control and leaving evidence for better operations.'}
              </p>
            </div>
          </div>

          <div className="grid gap-px border border-[#c9d9d5] bg-[#c9d9d5] md:grid-cols-2">
            {page.trustSignals.map((signal) => (
              <article key={signal.title} className="bg-white p-6">
                <div className="mb-8 flex items-center justify-between border-b border-[#d8e5e2] pb-5">
                  <span className="text-sm font-semibold text-[#789b96]">{signal.value}</span>
                  <CheckCircle2 className="h-5 w-5 text-[#789b96]" />
                </div>
                <h3 className="text-2xl font-light leading-tight text-[#173634]">{signal.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#65706d]">{signal.description}</p>

                <div className="mt-6 grid gap-3 border-t border-[#d8e5e2] pt-5">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#789b96]">
                      {locale === 'es' ? 'Evidencia' : 'Evidence'}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#526e69]">{signal.proof}</p>
                  </div>
                  <div className="bg-[#f7faf8] p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9a7468]">
                      {locale === 'es' ? 'Evitamos' : 'We avoid'}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#65706d]">{signal.avoids}</p>
                  </div>
                </div>
              </article>
            ))}
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
              <article key={path.title} className="group bg-white p-7 transition-colors hover:bg-[#f7faf8]">
                <div className="flex items-start justify-between gap-5">
                  <p className="text-6xl font-light leading-none text-[#c7d3cf] transition-colors group-hover:text-[#8fb2aa]">{path.label}</p>
                  <span className="border border-[#d8e5e2] bg-[#fbfbfa] px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#789b96]">
                    {locale === 'es' ? 'Entrada' : 'Entry'}
                  </span>
                </div>
                <h3 className="mt-10 text-2xl font-light leading-tight text-[#173634]">{path.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#65706d]">{path.description}</p>

                <div className="mt-7 grid gap-3 border-t border-[#d8e5e2] pt-5">
                  {[
                    { label: locale === 'es' ? 'Ideal si' : 'Best if', text: path.bestFor },
                    { label: locale === 'es' ? 'Entregable' : 'Deliverable', text: path.deliverable },
                    { label: locale === 'es' ? 'Decisión' : 'Decision', text: path.decision },
                  ].map((item) => (
                    <div key={item.label} className="bg-[#fbfbfa] p-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#789b96]">{item.label}</p>
                      <p className="mt-2 text-sm leading-6 text-[#52605d]">{item.text}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-5 text-sm font-semibold leading-6 text-[#526e69]">{path.outcome}</p>
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
                  <div className="absolute left-4 top-4 border border-white/15 bg-[#102624]/85 px-3 py-2 backdrop-blur">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8fb2aa]">
                      {locale === 'es' ? 'Prueba de producto' : 'Product proof'}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#789b96]">{project.label}</p>
                  <h3 className="mt-4 text-2xl font-light leading-tight text-[#173634]">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#65706d]">{project.description}</p>

                  <div className="mt-6 grid gap-px border border-[#d8e5e2] bg-[#d8e5e2]">
                    {[
                      { label: locale === 'es' ? 'Problema' : 'Problem', text: project.problem },
                      { label: locale === 'es' ? 'Sistema' : 'System', text: project.system },
                      { label: locale === 'es' ? 'Valor' : 'Value', text: project.value },
                    ].map((item) => (
                      <div key={item.label} className="bg-white p-3">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#789b96]">{item.label}</p>
                        <p className="mt-2 text-sm leading-6 text-[#52605d]">{item.text}</p>
                      </div>
                    ))}
                  </div>

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
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#789b96]">{locale === 'es' ? 'Método' : 'Method'}</p>
            <h2 className="mt-5 text-4xl font-light leading-tight text-[#173634] md:text-6xl">{page.methodTitle}</h2>
            <p className="mt-6 text-base leading-8 text-[#65706d]">{page.methodSubtitle}</p>
            <div className="mt-8 grid gap-px border border-[#d8e5e2] bg-[#d8e5e2] sm:grid-cols-3">
              {[
                locale === 'es' ? 'Entrar liviano' : 'Enter lightly',
                locale === 'es' ? 'Probar con uso real' : 'Prove with real use',
                locale === 'es' ? 'Escalar con control' : 'Scale with control',
              ].map((principle, index) => (
                <div key={principle} className="bg-white px-4 py-3">
                  <p className="font-mono text-xs text-[#a7b9b4]">0{index + 1}</p>
                  <p className="mt-2 text-sm font-semibold text-[#173634]">{principle}</p>
                </div>
              ))}
            </div>
            <div className="relative mt-10 aspect-[1.55] overflow-hidden border border-[#d8e5e2] bg-white">
              <Image src="/n3uralia-brand/field-team.png" alt="Operational field team" fill sizes="(min-width: 1024px) 38vw, 92vw" className="object-cover grayscale" />
            </div>
          </div>

          <div className="grid gap-px border border-[#d8e5e2] bg-[#d8e5e2]">
            {page.method.map((step, index) => (
              <div key={step.title} className="group grid gap-5 bg-white p-7 transition-colors hover:bg-[#f7faf8] md:grid-cols-[90px_1fr]">
                <div>
                  <span className="text-6xl font-light leading-none text-[#c7d3cf] transition-colors group-hover:text-[#8fb2aa]">0{index + 1}</span>
                  <div className="mt-4 hidden h-full w-px bg-[#d8e5e2] md:block" />
                </div>
                <div>
                  <h3 className="text-2xl font-light text-[#173634]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#65706d]">{step.description}</p>
                  <div className="mt-5 grid gap-3 lg:grid-cols-2">
                    <div className="border border-[#d8e5e2] bg-[#fbfbfa] p-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#789b96]">
                        {locale === 'es' ? 'Entregable' : 'Deliverable'}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#52605d]">{step.deliverable}</p>
                    </div>
                    <div className="border border-[#d8e5e2] bg-[#f1f6f4] p-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#789b96]">
                        {locale === 'es' ? 'Control' : 'Control'}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#52605d]">{step.control}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-28 bg-[#102624] px-5 py-24 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.58fr] lg:items-stretch">
          <div>
            <LogoWordmark className="h-auto w-56 brightness-0 invert opacity-80" />
            <h2 className="mt-10 max-w-4xl text-4xl font-light leading-tight md:text-7xl">{page.ctaTitle}</h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">{page.ctaSubtitle}</p>

            <div className="mt-9 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
              {page.ctaSignals.map((signal) => (
                <article key={signal.title} className="bg-[#102624] p-5">
                  <p className="text-sm font-semibold text-white">{signal.title}</p>
                  <p className="mt-3 text-sm leading-6 text-white/60">{signal.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href={solutionsHref} tone="light">{page.ctaButton}</PrimaryLink>
              <Link href={contactHref} className="inline-flex items-center justify-center border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#173634]">
                {page.primaryCta}
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden border border-white/10 bg-[#071211] p-6">
            <Image src="/n3uralia-brand/n3uralia-mark.png" alt="" width={984} height={943} className="absolute -right-28 -top-24 h-auto w-80 opacity-10" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8fb2aa]">
                {locale === 'es' ? 'Siguiente paso' : 'Next step'}
              </p>
              <h3 className="mt-5 text-3xl font-light leading-tight text-white">
                {locale === 'es' ? 'Elige una fricción. La convertimos en arquitectura.' : 'Choose one drag. We turn it into architecture.'}
              </h3>
              <div className="mt-8 grid gap-px border border-white/10 bg-white/10">
                {[
                  locale === 'es' ? 'Identificar el flujo' : 'Identify the workflow',
                  locale === 'es' ? 'Definir el primer sistema útil' : 'Define the first useful system',
                  locale === 'es' ? 'Conectar con soluciones por sector' : 'Connect it to sector solutions',
                ].map((step, index) => (
                  <div key={step} className="grid grid-cols-[42px_1fr] items-center gap-4 bg-[#071211] p-4">
                    <span className="font-mono text-xs text-[#8fb2aa]">0{index + 1}</span>
                    <span className="text-sm font-semibold leading-6 text-white/75">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
