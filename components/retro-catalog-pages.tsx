import Image from 'next/image'
import Link from 'next/link'
import type { Locale } from '@/lib/get-locale'

// ─── Projects ────────────────────────────────────────────────────────────────
const projects = [
  { id: 'labbe',               name: 'LABBE',              img: '/n3uralia-retro/project-labbe.png' },
  { id: 'seguria',             name: 'SegurIA',            img: '/n3uralia-retro/project-seguria-new.png' },
  { id: 'sur-realista',        name: 'Sur-Realista',       img: '/n3uralia-retro/project-surrealista.png' },
  { id: 'la-patagua',          name: 'La Patagua',         img: '/n3uralia-retro/project-lapatagua.png' },
  { id: 'ecosuelolab',         name: 'EcoSueloLab',        img: '/n3uralia-retro/project-ecosuelo-new.png' },
  { id: 'despega-tu-carrera',  name: 'Despega Tu Carrera', img: '/n3uralia-retro/project-despega.png' },
  { id: 'blackswan-facility-core', name: 'Black Swan FS',  img: '/n3uralia-retro/project-blackswan-new.png' },
  { id: 'parrotfy',             name: 'Parrotfy',           img: '/n3uralia-retro/project-parrotfy.png' },
]

const projectData: Record<Locale, {sector:string;problem:string;system:string;value:string;tags:string[]}[]> = {
  es: [
    { sector:'Compliance Documental para Transporte', problem:'Flotas y contratistas de transporte en Chile pierden dinero y detienen operaciones por documentos vencidos — revisión técnica, permiso de circulación, SOAP — gestionados en Excel, WhatsApp y carpetas sin alertas.', system:'DocuFleet: capa inteligente de cumplimiento documental para LABBE. IA que clasifica documentos automáticamente, extrae fechas de vencimiento, dispara alertas 30/15/5 días antes y genera carpetas documentales listas para mandantes e inspecciones.', value:'Nunca más un vehículo detenido por documentos vencidos — 86% de cobertura documental, trazabilidad completa de flota y evidencia auditable lista en segundos.', tags:['DocuFleet','IA','Vencimientos','Flota','Transporte','Cumplimiento'] },
    { sector:'Seguridad Operativa con IA', problem:'Empresas con cámaras, sensores y controles de acceso instalados pero desconectados — mucho ruido, sin visibilidad real ni respuesta a tiempo.', system:'Plataforma integral de seguridad operativa que se conecta a la infraestructura existente sin reemplazarla. Capa de IA sobre lo instalado para Campos Inteligentes (perímetros, bodegas, zonas remotas), Propiedades Inteligentes y Hotelería — con dashboard de sitios, eventos y respuesta en tiempo real.', value:'La seguridad existente se convierte en operación inteligente: menos falsas alarmas, alertas con contexto y evidencia lista para decidir sin perseguir pantallas.', tags:['IA','Seguridad','Cámaras','Sensores','Campos','Hotelería'] },
    { sector:'Inmobiliario & Territorial', problem:'Empresa inmobiliaria con 38.000+ clientes, portfolio de $500M y campos distribuidos en múltiples regiones — sin sistema unificado para operar todo.', system:'Plataforma territorial completa: explorador de campos con mapas KMZ interactivos, CRM con pipeline caliente/tibio/frío, comunicaciones, tareas, archivos y roles SII integrados en un espacio de trabajo interno.', value:'Operación territorial unificada desde un solo espacio — gestión de campos geoespaciales, seguimiento de clientes de alto valor y cumplimiento SII en un sistema construido a medida.', tags:['CRM','KMZ','Territorial','SII','Pipeline','Inmobiliario'] },
    { sector:'Minería', problem:'Operaciones mineras sin control en tiempo real de producción, mantenimiento y cumplimiento.', system:'Plataforma operacional basada en Motil: producción, HSE, documentos y gestión en flujo trazable.', value:'Control operacional en tiempo real desde terreno hasta gerencia, reduciendo brechas de información.', tags:['Motil','Minería','Operaciones','HSE'] },
    { sector:'Agtech & WhatsApp IA', problem:'Agricultores con datos satelitales valiosos pero sin forma fácil de consultarlos — navegar dashboards no es parte del día de campo.', system:'Agente agéntico conectado a EcoSueloLab vía WhatsApp: el agricultor pregunta en lenguaje natural ("¿cómo está el nitrógeno en mi campo de manzanas?") y el agente consulta los datos satelitales del día y responde con recomendaciones concretas.', value:'Decisiones de riego y nutrición desde el celular, en lenguaje natural, sin abrir ninguna app — el campo conectado directamente al agricultor.', tags:['WhatsApp','Agente IA','Satélite','Agtech','Lenguaje Natural'] },
    { sector:'Desarrollo Personal con IA', problem:'Profesionales que sienten que están estancados o perdidos pero no tienen con quién estructurar su camino — los cursos no ayudan porque el problema no es conocimiento, es claridad y foco.', system:'Plataforma AI-first con Vera, coach IA disponible 24/7. Metodología en 4 etapas: Radar Estratégico (diagnóstico de perfil real), Despega Cerebral (claridad mental), Entrenamiento (habilidades concretas) y Tu Ruta (misión de 30 días). Perfil Vivo que se construye desde las respuestas del usuario.', value:'Claridad, estructura y ruta en 30 días — desde ti, no desde la vacante. Fortalezas detectadas, brechas identificadas y primer paso concreto con acompañamiento continuo de IA.', tags:['IA','Vera','Coaching','Ruta 30 días','Perfil Vivo','Empleabilidad'] },
    { sector:'Operaciones de Flota & Subcontratistas', problem:'Empresas de facilities con flota propia y subcontratistas cuya documentación — conductores, vehículos, equipos — se gestiona en silos sin visibilidad ni control de cumplimiento en tiempo real.', system:'Panel de control operativo completo: 4.113 documentos gestionados, cobertura del 86%, command center de alertas, gestión de equipo y subcontratistas, conductores, analítica ROI y métricas de usuarios — todo con trazabilidad por rol y acceso seguro diferenciado.', value:'86% de cobertura documental, 583 riesgos activos visibles en tiempo real y decisiones ejecutivas basadas en datos — sin perseguir documentos en carpetas ni grupos de WhatsApp.', tags:['Facilities','DocuFleet','Subcontratistas','Flota','ROI','Trazabilidad'] },
    { sector:'WhatsApp & ERP', problem:'PYMEs que usan Parrotfy (ERP) pero deben navegar la interfaz manualmente para consultar datos, facturar o gestionar órdenes.', system:'Conector agéntico de WhatsApp para Parrotfy: un agente IA interpreta lenguaje natural y ejecuta acciones dentro del ERP directamente desde el chat.', value:'El equipo opera el ERP completo desde WhatsApp sin abrir la app — consultas, facturas y órdenes en lenguaje natural.', tags:['WhatsApp','Agente IA','ERP','Lenguaje Natural'] },
  ],
  en: [
    { sector:'Document Compliance for Transport', problem:'Chilean transport fleets and contractors lose money and halt operations due to expired documents — vehicle inspection, circulation permits, SOAP — managed in Excel, WhatsApp and folders with no alerts.', system:'DocuFleet: intelligent document compliance layer for LABBE. AI auto-classifies documents, extracts expiry dates, fires alerts 30/15/5 days before expiry, and generates audit-ready document folders for clients and inspections.', value:'No more vehicles stopped for expired documents — 86% document coverage, full fleet traceability and auditable evidence ready in seconds.', tags:['DocuFleet','AI','Expiry','Fleet','Transport','Compliance'] },
    { sector:'AI-Powered Operational Security', problem:'Companies with cameras, sensors and access controls installed but disconnected — too much noise, no real visibility and slow response.', system:'Integral operational security platform that connects to existing infrastructure without replacing it. AI layer over what is already installed, covering Smart Fields (perimeters, warehouses, remote zones), Smart Properties and Smart Hospitality — with a real-time dashboard for sites, events and response.', value:'Existing security becomes an intelligent operation: fewer false alarms, context-rich alerts and evidence ready to act on — without chasing screens.', tags:['AI','Security','Cameras','Sensors','Fields','Hospitality'] },
    { sector:'Real Estate & Territorial', problem:'Real estate company with 38,000+ clients, $500M portfolio and fields across multiple regions — no unified system to operate it all.', system:'Full territorial platform: KMZ interactive field explorer, CRM with hot/warm/cold pipeline, communications, tasks, files and SII (Chilean tax) roles — all in one internal workspace.', value:'Unified territorial operations from a single workspace — geospatial field management, high-value client tracking and SII compliance in a custom-built system.', tags:['CRM','KMZ','Territorial','SII','Pipeline','Real Estate'] },
    { sector:'Mining', problem:'Mining operations without real-time control of production, maintenance and compliance.', system:'Motil-based operational platform: production, HSE, documents and management in traceable flow.', value:'Real-time operational control from field to management, reducing information gaps.', tags:['Motil','Mining','Operations','HSE'] },
    { sector:'Agtech & WhatsApp AI', problem:'Farmers with valuable satellite data but no easy way to query it — navigating dashboards is not part of a field day.', system:'Agentic agent connected to EcoSueloLab via WhatsApp: the farmer asks in natural language ("how are my nitrogen levels on my apple field?") and the agent queries the day\'s satellite data and responds with concrete recommendations.', value:'Irrigation and nutrition decisions from the phone, in natural language, without opening any app — the field connected directly to the farmer.', tags:['WhatsApp','AI Agent','Satellite','Agtech','Natural Language'] },
    { sector:'AI-First Personal Development', problem:'Professionals who feel stuck or lost but have no way to structure their path — courses don\'t help because the problem is not knowledge, it\'s clarity and focus.', system:'AI-first platform with Vera, an AI coach available 24/7. 4-stage methodology: Strategic Radar (real profile diagnosis), Despega Cerebral (mental clarity), Training (concrete skills) and Your Route (30-day mission). A Live Profile built from the user\'s own answers.', value:'Clarity, structure and a route in 30 days — from you, not from the job listing. Detected strengths, identified gaps and a first concrete step with continuous AI support.', tags:['AI','Vera','Coaching','30-day Route','Live Profile','Employability'] },
    { sector:'Fleet & Subcontractor Operations', problem:'Facility companies with own fleet and subcontractors whose documentation — drivers, vehicles, equipment — is managed in silos with no real-time compliance visibility or control.', system:'Full operational control dashboard: 4,113 documents managed, 86% coverage, alerts command center, team and subcontractor management, drivers, ROI analytics and user metrics — all with role-based traceability and differentiated secure access.', value:'86% document coverage, 583 active risks visible in real time and executive decisions based on data — no more chasing documents in folders or WhatsApp groups.', tags:['Facilities','DocuFleet','Subcontractors','Fleet','ROI','Traceability'] },
    { sector:'WhatsApp & ERP', problem:'SMBs using Parrotfy (ERP) who must navigate the interface manually to query data, invoice or manage work orders.', system:'Agentic WhatsApp connector for Parrotfy: an AI agent interprets natural language and executes actions inside the ERP directly from the chat.', value:'The team operates the full ERP from WhatsApp without opening the app — queries, invoices and orders in natural language.', tags:['WhatsApp','AI Agent','ERP','Natural Language'] },
  ],
}

// ─── Products ─────────────────────────────────────────────────────────────────
const products = [
  { id: 'mermasapp',    name: 'MermasApp',             img: '/n3uralia-brand/client-repository.png' },
  { id: 'motil',        name: 'Motil',                 img: '/n3uralia-retro/project-lapatagua.png' },
  { id: 'docufleet',    name: 'DocuFleet',             img: '/n3uralia-retro/project-labbe.png' },
  { id: 'clarity',      name: 'Clar1ty',               img: '/n3uralia-retro/product-clarity.png' },
  { id: 'nano-agents',  name: 'N3uralia Nano Agents',  img: '/n3uralia-retro/product-nanoagents.png' },
  { id: 'to-be-continued', name: '···',               img: '/n3uralia-brand/client-repository.png' },
]

const productData: Record<Locale, {desc:string;forWhom:string;modules:string[];status:string}[]> = {
  es: [
    { desc:'Plataforma de reducción de desperdicio para plantas de alimentos chilenas — merma en pesos en tiempo real, IA explicable y alertas por WhatsApp. Setup en 2-3 semanas, compatible con cualquier maquinaria existente. 5-10% de reducción de merma. 60-75% más económico que soluciones globales como Tetra Pak o SAP.', forWhom:'Plantas de alimentos y lecherías chilenas pequeñas y medianas que pierden entre $1M-$2M CLP mensuales en desperdicio sin saber exactamente por qué.', modules:['Merma en CLP en tiempo real','Alertas WhatsApp','IA explicable','Normativa HACCP/MINSAL/SAG','Modo Pyme','Reportes de auditoría'], status:'Disponible para diagnóstico' },
    { desc:'Plataforma operacional minera que conecta producción, mantención, bodega, HSE, documentos y gerencia en un flujo trazable desde terreno hasta dirección. Flujo integrado: Alerta → OT automática → Repuesto → HSE → Evidencia → KPI. +15% disponibilidad de equipos, -40% MTTR, -25% costos de mantención, 100% trazabilidad auditada.', forWhom:'Operaciones mineras con información fragmentada en faena: sensores aislados, órdenes manuales, bodega ciega, HSE tardío y auditoría imposible.', modules:['Producción & KPIs en tiempo real','Mantención & MTTR','Bodega & reorden automático','HSE & cumplimiento','Documentos auditados','Dashboard ejecutivo'], status:'Disponible para demostración' },
    { desc:'Capa inteligente de cumplimiento documental para flotas de transporte y sus subcontratistas. IA que clasifica documentos automáticamente, extrae fechas de vencimiento y dispara alertas escalonadas 30/15/5 días antes. Panel ejecutivo con cobertura en tiempo real, command center de riesgos y carpetas auditables listas para mandantes e inspecciones. Sin vehículo detenido por documentos vencidos.', forWhom:'Empresas de transporte y facilities en Chile con flota propia y subcontratistas cuyos documentos — revisión técnica, permiso de circulación, SOAP, licencias — se gestionan en Excel, carpetas y WhatsApp sin ninguna alerta.', modules:['Clasificación documental con IA','Extracción automática de vencimientos','Alertas 30/15/5 días','Command center de riesgos','Portal subcontratistas','Carpetas auditables','Panel ejecutivo & ROI'], status:'Disponible para implementación' },
    { desc:'Herramienta de mejora y restauración de imágenes con IA para uso profesional y consumidor final.', forWhom:'Agencias, fotógrafos, archivos históricos y cualquier usuario que trabaje con imágenes de baja calidad.', modules:['Mejora de resolución','Restauración de fotos','Comparación antes/después','API profesional'], status:'Disponible para diagnóstico' },
    { desc:'Agentes de IA especializados y configurables que automatizan tareas operativas complejas dentro de flujos de trabajo empresariales.', forWhom:'Empresas que necesitan automatizar procesos repetitivos con IA sin construir infraestructura desde cero.', modules:['Agentes configurables','Memoria contextual','Orquestación multi-agente','Integraciones empresariales','Monitoreo en producción'], status:'Disponible para diagnóstico' },
    { desc:'Próximo producto en desarrollo. Construido desde operaciones reales.', forWhom:'A definir según casos de uso identificados en diagnósticos activos.', modules:['En desarrollo'], status:'Próximamente' },
  ],
  en: [
    { desc:'Waste reduction platform for Chilean food plants — waste in CLP in real time, explainable AI and WhatsApp alerts. 2-3 week setup, compatible with any existing machinery. 5-10% waste reduction. 60-75% cheaper than global solutions like Tetra Pak or SAP.', forWhom:'Small and mid-size Chilean food plants and dairies losing $1M-$2M CLP per month in waste without knowing exactly why.', modules:['Real-time waste in CLP','WhatsApp alerts','Explainable AI','HACCP/MINSAL/SAG compliance','SMB mode','Audit reports'], status:'Available for diagnosis' },
    { desc:'Mining operational platform connecting production, maintenance, warehouse, HSE, documents and management in a traceable flow from field to boardroom. Integrated flow: Alert → Auto work order → Spare part → HSE → Evidence → KPI. +15% equipment availability, -40% MTTR, -25% maintenance costs, 100% auditable traceability.', forWhom:'Mining operations with fragmented field information: isolated sensors, manual work orders, blind warehouse, delayed HSE and impossible audits.', modules:['Production & real-time KPIs','Maintenance & MTTR','Warehouse & auto-reorder','HSE & compliance','Audited documents','Executive dashboard'], status:'Available for demonstration' },
    { desc:'Intelligent document compliance layer for transport fleets and their subcontractors. AI auto-classifies documents, extracts expiry dates and fires staged alerts 30/15/5 days before expiry. Executive dashboard with real-time coverage, risk command center and audit-ready folders for clients and inspections. No vehicle stopped for expired documents.', forWhom:'Chilean transport and facility companies with own fleet and subcontractors whose documents — vehicle inspection, circulation permits, SOAP, licences — are managed in Excel, folders and WhatsApp with no alerts.', modules:['AI document classification','Automatic expiry extraction','30/15/5-day alerts','Risk command center','Subcontractor portal','Audit-ready folders','Executive dashboard & ROI'], status:'Available for implementation' },
    { desc:'AI-powered image enhancement and restoration tool for professional and consumer use.', forWhom:'Agencies, photographers, historical archives and anyone working with low-quality images.', modules:['Resolution enhancement','Photo restoration','Before/after comparison','Professional API'], status:'Available for diagnosis' },
    { desc:'Specialized configurable AI agents that automate complex operational tasks within enterprise workflows.', forWhom:'Companies needing to automate repetitive processes with AI without building infrastructure from scratch.', modules:['Configurable agents','Contextual memory','Multi-agent orchestration','Enterprise integrations','Production monitoring'], status:'Available for diagnosis' },
    { desc:'Next product in development. Built from real operations.', forWhom:'To be defined from use cases identified in active diagnostics.', modules:['In development'], status:'Coming soon' },
  ],
}

// ─── Shared ───────────────────────────────────────────────────────────────────
function Header({eyebrow,title,body}:{eyebrow:string;title:string;body:string}){
  return (
    <header className="catalog-hero">
      <div className="retro-shell">
        <small>{eyebrow}</small>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </header>
  )
}

// ─── Projects Page ────────────────────────────────────────────────────────────
export function ProjectsPage({locale}:{locale:Locale}){
  const es = locale === 'es'
  const data = projectData[locale]
  return (
    <main className="retro-page catalog-page">
      <Header
        eyebrow={es ? 'Proyectos' : 'Projects'}
        title={es ? 'Proyectos que convierten complejidad en sistemas.' : 'Projects that turn complexity into systems.'}
        body={es ? 'Sistemas reales diseñados alrededor de operaciones, personas, documentos y decisiones.' : 'Real systems designed around operations, people, documents and decisions.'}
      />
      <section className="retro-light catalog-section">
        <div className="retro-shell catalog-list">
          {projects.map((p,i) => {
            const d = data[i]
            return (
              <article id={p.id} key={p.id} className="catalog-project">
                <div className="catalog-number">{String(i+1).padStart(2,'0')} —</div>
                <div className="catalog-copy">
                  <small>{d.sector}</small>
                  <h2>{p.name}</h2>
                  <dl>
                    <div><dt>{es ? 'Problema' : 'Problem'}</dt><dd>{d.problem}</dd></div>
                    <div><dt>{es ? 'Sistema construido' : 'System built'}</dt><dd>{d.system}</dd></div>
                    <div><dt>{es ? 'Valor operativo' : 'Operational value'}</dt><dd>{d.value}</dd></div>
                  </dl>
                  <div className="catalog-tags">{d.tags.map(t => <span key={t}>{t}</span>)}</div>
                  <Link className="catalog-link" href={`/${locale}/diagnostico#contacto`}>
                    {es ? 'Conversar sobre un sistema' : 'Discuss a system'} →
                  </Link>
                </div>
                <div className="catalog-image">
                  <Image src={p.img} alt={`${p.name} interface`} fill sizes="(min-width:900px) 48vw, 100vw" className="object-cover" style={{objectPosition:'top center'}}/>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </main>
  )
}

// ─── Products Page ────────────────────────────────────────────────────────────
export function ProductsPage({locale}:{locale:Locale}){
  const es = locale === 'es'
  const data = productData[locale]
  return (
    <main className="retro-page catalog-page">
      <Header
        eyebrow={es ? 'Productos' : 'Products'}
        title={es ? 'Productos construidos desde operaciones reales.' : 'Products built from real operations.'}
        body={es ? 'Sistemas reutilizables que conectan documentos, procesos, datos, decisiones y agentes.' : 'Reusable systems connecting documents, processes, data, decisions and agents.'}
      />
      <section className="retro-light catalog-section">
        <div className="retro-shell catalog-list">
          {products.map((p,i) => {
            const d = data[i]
            return (
              <article id={p.id} key={p.id} className="catalog-project">
                <div className="catalog-number">{String(i+1).padStart(2,'0')} —</div>
                <div className="catalog-copy">
                  <h2>{p.name}</h2>
                  <p style={{marginBottom:'1rem'}}>{d.desc}</p>
                  <dl>
                    <div><dt>{es ? 'Para quién' : 'For whom'}</dt><dd>{d.forWhom}</dd></div>
                    <div><dt>{es ? 'Módulos' : 'Modules'}</dt><dd>{d.modules.join(' · ')}</dd></div>
                  </dl>
                  <div className="product-status" style={{margin:'1rem 0'}}><i/>{d.status}</div>
                  {p.id !== 'to-be-continued' && (
                    <Link className="catalog-link" href={`/${locale}/diagnostico#contacto`}>
                      {es ? 'Evaluar este producto' : 'Evaluate this product'} →
                    </Link>
                  )}
                </div>
                <div className="catalog-image">
                  <Image src={p.img} alt={`${p.name} interface`} fill sizes="(min-width:900px) 48vw, 100vw" className="object-cover" style={{objectPosition:'top center'}}/>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </main>
  )
}

