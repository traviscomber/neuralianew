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
    { sector:'Transporte', problem:'Operaciones de transporte sin visibilidad documental ni trazabilidad de cumplimiento.', system:'Plataforma de gestión documental con control operacional, subcontratistas y alertas en tiempo real.', value:'86% de cobertura documental, reducción de riesgo operativo y visibilidad total de flota.', tags:['DocuFleet','Documentos','Transporte','Cumplimiento'] },
    { sector:'Seguridad & Propiedades', problem:'Propiedades sin control centralizado de accesos, monitoreo ni alertas inteligentes.', system:'Sistema de seguridad inteligente con gestión de accesos, alertas automatizadas y monitoreo remoto.', value:'Control total de propiedades desde cualquier lugar con respuesta proactiva ante incidentes.', tags:['IoT','Seguridad','Acceso','Alertas'] },
    { sector:'Inmobiliario', problem:'Gestión fragmentada de 38.000+ clientes sin pipeline inteligente ni seguimiento automatizado.', system:'CRM inmobiliario con pipeline, filtros avanzados, seguimiento por temperatura y análisis de cartera.', value:'Visibilidad completa del funnel, priorización automatizada y gestión eficiente de cartera.', tags:['CRM','Inmobiliario','Pipeline','IA'] },
    { sector:'Minería', problem:'Operaciones mineras sin control en tiempo real de producción, mantenimiento y cumplimiento.', system:'Plataforma operacional basada en Motil: producción, HSE, documentos y gestión en flujo trazable.', value:'Control operacional en tiempo real desde terreno hasta gerencia, reduciendo brechas de información.', tags:['Motil','Minería','Operaciones','HSE'] },
    { sector:'Agricultura', problem:'Cultivos sin información satelital diaria para tomar decisiones de riego y nutrición a tiempo.', system:'Plataforma de monitoreo satelital agrícola con plan de riego, estimación de nitrógeno y materia seca.', value:'10–20% de ahorro de agua, proyección de cosecha con 2 meses de anticipación y decisiones basadas en datos.', tags:['Agtech','Satélite','Riego','Nutrición'] },
    { sector:'Desarrollo profesional', problem:'Profesionales sin ruta clara ni acompañamiento estructurado para alcanzar metas en 90 días.', system:'Plataforma de coaching con IA, diseño de ruta personalizada, asistente de voz y seguimiento de progreso.', value:'Estructura de desarrollo profesional acelerado con acompañamiento continuo e inteligente.', tags:['Coaching','IA','Carrera','Aprendizaje'] },
    { sector:'Gestión de instalaciones', problem:'Instalaciones sin trazabilidad operativa, control por usuario ni acceso seguro diferenciado.', system:'Sistema de control operativo con acceso seguro por usuario, trazabilidad y gestión de instalaciones.', value:'Control operativo con acceso restringido, trazabilidad completa y seguridad por rol.', tags:['Facilities','Control','Acceso','Trazabilidad'] },
    { sector:'WhatsApp & ERP', problem:'PYMEs que usan Parrotfy (ERP) pero deben navegar la interfaz manualmente para consultar datos, facturar o gestionar órdenes.', system:'Conector agéntico de WhatsApp para Parrotfy: un agente IA interpreta lenguaje natural y ejecuta acciones dentro del ERP directamente desde el chat.', value:'El equipo opera el ERP completo desde WhatsApp sin abrir la app — consultas, facturas y órdenes en lenguaje natural.', tags:['WhatsApp','Agente IA','ERP','Lenguaje Natural'] },
  ],
  en: [
    { sector:'Transportation', problem:'Transport operations without document visibility or compliance traceability.', system:'Document management platform with operational control, subcontractors and real-time alerts.', value:'86% document coverage, reduced operational risk and full fleet visibility.', tags:['DocuFleet','Documents','Transport','Compliance'] },
    { sector:'Security & Properties', problem:'Properties without centralized access control, monitoring or intelligent alerts.', system:'Smart security system with access management, automated alerts and remote monitoring.', value:'Full property control from anywhere with proactive incident response.', tags:['IoT','Security','Access','Alerts'] },
    { sector:'Real Estate', problem:'Fragmented management of 38,000+ clients without intelligent pipeline or automated follow-up.', system:'Real estate CRM with pipeline, advanced filters, temperature-based tracking and portfolio analysis.', value:'Full funnel visibility, automated prioritization and efficient portfolio management.', tags:['CRM','Real Estate','Pipeline','AI'] },
    { sector:'Mining', problem:'Mining operations without real-time control of production, maintenance and compliance.', system:'Motil-based operational platform: production, HSE, documents and management in traceable flow.', value:'Real-time operational control from field to management, reducing information gaps.', tags:['Motil','Mining','Operations','HSE'] },
    { sector:'Agriculture', problem:'Crops without daily satellite data to make timely irrigation and nutrition decisions.', system:'Agricultural satellite monitoring platform with irrigation plan, nitrogen estimation and dry matter.', value:'10–20% water savings, harvest projection 2 months in advance and data-driven decisions.', tags:['Agtech','Satellite','Irrigation','Nutrition'] },
    { sector:'Career development', problem:'Professionals without a clear path or structured guidance to reach goals in 90 days.', system:'AI-powered coaching platform with personalized route design, voice assistant and progress tracking.', value:'Accelerated professional development with continuous intelligent guidance.', tags:['Coaching','AI','Career','Learning'] },
    { sector:'Facility management', problem:'Facilities without operational traceability, per-user control or differentiated secure access.', system:'Operational control system with secure per-user access, traceability and facility management.', value:'Operational control with restricted access, full traceability and role-based security.', tags:['Facilities','Control','Access','Traceability'] },
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
    { desc:'Sistema de control de mermas para retail e industria alimentaria con trazabilidad en tiempo real.', forWhom:'Supermercados, plants de alimentos y cadenas de retail con pérdida operativa no controlada.', modules:['Control de mermas','Trazabilidad de lotes','Alertas de pérdida','Reportes operativos'], status:'Disponible para diagnóstico' },
    { desc:'Plataforma de control operacional para minería, construcción e industrias complejas con flujos trazables de campo a gerencia.', forWhom:'Operaciones mineras, constructoras y plantas industriales que requieren control en tiempo real.', modules:['Producción','Mantenimiento','HSE','Documentos','Gestión de equipos','Reportes ejecutivos'], status:'Disponible para diagnóstico' },
    { desc:'Sistema de gestión documental para flotas de transporte y subcontratistas con control de cumplimiento y alertas.', forWhom:'Empresas de transporte, logística y compañías con subcontratistas que gestionan documentos regulatorios.', modules:['Portal subcontratistas','Control documental','Alertas de vencimiento','Panel ejecutivo','Analítica ROI'], status:'Disponible para diagnóstico' },
    { desc:'Herramienta de mejora y restauración de imágenes con IA para uso profesional y consumidor final.', forWhom:'Agencias, fotógrafos, archivos históricos y cualquier usuario que trabaje con imágenes de baja calidad.', modules:['Mejora de resolución','Restauración de fotos','Comparación antes/después','API profesional'], status:'Disponible para diagnóstico' },
    { desc:'Agentes de IA especializados y configurables que automatizan tareas operativas complejas dentro de flujos de trabajo empresariales.', forWhom:'Empresas que necesitan automatizar procesos repetitivos con IA sin construir infraestructura desde cero.', modules:['Agentes configurables','Memoria contextual','Orquestación multi-agente','Integraciones empresariales','Monitoreo en producción'], status:'Disponible para diagnóstico' },
    { desc:'Próximo producto en desarrollo. Construido desde operaciones reales.', forWhom:'A definir según casos de uso identificados en diagnósticos activos.', modules:['En desarrollo'], status:'Próximamente' },
  ],
  en: [
    { desc:'Waste and shrinkage control system for retail and food industry with real-time traceability.', forWhom:'Supermarkets, food plants and retail chains with uncontrolled operational loss.', modules:['Shrinkage control','Batch traceability','Loss alerts','Operational reports'], status:'Available for diagnosis' },
    { desc:'Operational control platform for mining, construction and complex industries with traceable field-to-management workflows.', forWhom:'Mining operations, construction companies and industrial plants requiring real-time control.', modules:['Production','Maintenance','HSE','Documents','Equipment management','Executive reports'], status:'Available for diagnosis' },
    { desc:'Document management system for transport fleets and subcontractors with compliance control and alerts.', forWhom:'Transport, logistics and companies with subcontractors managing regulatory documents.', modules:['Subcontractor portal','Document control','Expiry alerts','Executive dashboard','ROI analytics'], status:'Available for diagnosis' },
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

