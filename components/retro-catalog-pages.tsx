import Image from 'next/image'
import Link from 'next/link'
import type { CSSProperties } from 'react'
import type { Locale } from '@/lib/get-locale'
import { CatalogProjectFocus } from '@/components/catalog-project-focus'

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
    { sector:'Compliance Documental para Transporte', problem:'Flotas y contratistas de transporte gestionan revisión técnica, permiso de circulación, SOAP y otros documentos entre planillas, carpetas y mensajería, con poca visibilidad de vencimientos y excepciones.', system:'DocuFleet: capa de cumplimiento documental para LABBE. Clasifica documentos, extrae fechas de vencimiento, dispara alertas escalonadas y organiza evidencia por vehículo, conductor y contratista.', value:'Centraliza cobertura, vencimientos, excepciones y evidencia documental para que el equipo pueda priorizar riesgos y preparar revisiones sin reconstruir información desde múltiples fuentes.', tags:['DocuFleet','IA','Vencimientos','Flota','Transporte','Cumplimiento'] },
    { sector:'Seguridad Operativa con IA', problem:'Empresas con cámaras, sensores y controles de acceso instalados pero desconectados — mucho ruido, sin visibilidad real ni respuesta a tiempo.', system:'Plataforma integral de seguridad operativa que se conecta a la infraestructura existente sin reemplazarla. Capa de IA sobre lo instalado para Campos Inteligentes, Propiedades Inteligentes y Hotelería, con dashboard de sitios, eventos y respuesta.', value:'Convierte señales dispersas de seguridad en eventos con contexto, evidencia y flujo de respuesta dentro de una misma operación.', tags:['IA','Seguridad','Cámaras','Sensores','Campos','Hotelería'] },
    { sector:'Inmobiliario & Territorial', problem:'Operaciones inmobiliarias y territoriales con campos, clientes, pipeline comercial, documentos y tareas distribuidos en herramientas separadas.', system:'Plataforma territorial: explorador de campos con mapas KMZ interactivos, CRM con pipeline, comunicaciones, tareas, archivos y roles SII integrados en un espacio de trabajo interno.', value:'Unifica gestión geoespacial, seguimiento comercial, documentos y responsabilidades operativas en un sistema construido alrededor del flujo real del equipo.', tags:['CRM','KMZ','Territorial','SII','Pipeline','Inmobiliario'] },
    { sector:'Operaciones Mineras con IA', problem:'Operaciones mineras con información fragmentada en faena: producción, mantenimiento, bodega, HSE y documentos operados como silos.', system:'Plataforma operacional minera que conecta producción, mantenimiento, bodega, HSE, documentos y gerencia en un flujo trazable desde terreno hasta dirección. Flujo integrado: Alerta → OT → Repuesto → HSE → Evidencia → KPI.', value:'Conecta eventos, trabajo, repuestos, seguridad y evidencia sobre datos operacionales compartidos para reducir reconstrucción manual y mejorar trazabilidad de decisiones.', tags:['Minería','Motil','KPIs','Mantención','HSE','Trazabilidad'] },
    { sector:'Agtech & WhatsApp IA', problem:'Agricultores con datos satelitales valiosos pero sin forma simple de consultarlos durante el trabajo de campo.', system:'Agente conectado a EcoSueloLab vía WhatsApp: el agricultor pregunta en lenguaje natural y el sistema consulta la información disponible para devolver contexto útil sobre el cultivo y el predio.', value:'Acerca información agronómica y satelital al canal cotidiano del usuario, reduciendo la necesidad de navegar dashboards para consultas operativas.', tags:['WhatsApp','Agente IA','Satélite','Agtech','Lenguaje Natural'] },
    { sector:'Desarrollo Personal con IA', problem:'Profesionales que necesitan estructurar decisiones de carrera, fortalezas, brechas y próximos pasos sin convertir el proceso en una colección de contenidos aislados.', system:'Plataforma AI-first con Vera, un coach IA dentro de una metodología en 4 etapas: Radar Estratégico, Despega Cerebral, Entrenamiento y Tu Ruta. El Perfil Vivo se construye desde las respuestas del usuario.', value:'Convierte reflexión y diagnóstico en una ruta estructurada con contexto acumulado, ejercicios y siguientes acciones dentro del mismo sistema.', tags:['IA','Vera','Coaching','Ruta','Perfil Vivo','Empleabilidad'] },
    { sector:'Facility & Hospitality OS', problem:'Una operación compleja de hospitality y facilities conecta reservas, personas, activos, inventario, compras, mantenimiento, finanzas, eventos y administración; tratarlos como módulos aislados rompe la continuidad operacional.', system:'Black Swan Facility Core modela esas relaciones con objetos canónicos compartidos. Conecta Reservation → Room → Guest → Activity → Charge → Payment → Invoice; compras → recepción → inventario; y Asset → Issue → Work → Evidence → Closure.', value:'Una misma verdad operacional conecta acciones, evidencia e historial entre áreas, evitando que un objeto cambie de identidad al cruzar de un flujo a otro.', tags:['Facility OS','Hospitality','Activos','Procurement','Mantenimiento','Evidencia'] },
    { sector:'WhatsApp & ERP', problem:'PYMEs que usan Parrotfy deben navegar la interfaz para consultar datos, facturar o gestionar órdenes aunque gran parte del trabajo cotidiano ocurra en mensajería.', system:'Conector agéntico de WhatsApp para Parrotfy: interpreta solicitudes en lenguaje natural y las traduce a consultas o acciones permitidas dentro del ERP.', value:'Acerca funciones del ERP al canal de trabajo cotidiano sin convertir el chat en una fuente paralela de verdad.', tags:['WhatsApp','Agente IA','ERP','Lenguaje Natural'] },
  ],
  en: [
    { sector:'Document Compliance for Transport', problem:'Transport fleets and contractors manage vehicle inspections, circulation permits, SOAP and other records across spreadsheets, folders and messaging, with limited visibility into expiries and exceptions.', system:'DocuFleet: document-compliance layer for LABBE. It classifies documents, extracts expiry dates, triggers staged alerts, and organizes evidence by vehicle, driver and contractor.', value:'Centralizes coverage, expiries, exceptions and documentary evidence so teams can prioritize risk and prepare reviews without rebuilding information from multiple sources.', tags:['DocuFleet','AI','Expiry','Fleet','Transport','Compliance'] },
    { sector:'AI-Powered Operational Security', problem:'Companies with cameras, sensors and access controls installed but disconnected — too much noise, limited visibility and slow response.', system:'Operational security platform that connects to existing infrastructure without replacing it. An AI layer over installed systems supports Smart Fields, Smart Properties and Hospitality with a shared view of sites, events and response.', value:'Turns dispersed security signals into contextualized events, evidence and response workflows inside one operation.', tags:['AI','Security','Cameras','Sensors','Fields','Hospitality'] },
    { sector:'Real Estate & Territorial', problem:'Real-estate and territorial operations often split fields, clients, commercial pipeline, documents and tasks across disconnected tools.', system:'Territorial platform with interactive KMZ field exploration, CRM pipeline, communications, tasks, files and SII-related roles in one internal workspace.', value:'Unifies geospatial management, commercial follow-up, documents and operating responsibilities around the team’s actual workflow.', tags:['CRM','KMZ','Territorial','SII','Pipeline','Real Estate'] },
    { sector:'Mining Operations with AI', problem:'Mining operations with fragmented field information across production, maintenance, warehouse, HSE and documents.', system:'Mining operational platform connecting production, maintenance, warehouse, HSE, documents and management in a traceable flow from field to leadership. Integrated flow: Alert → Work order → Spare part → HSE → Evidence → KPI.', value:'Connects events, work, parts, safety and evidence over shared operational data to reduce manual reconstruction and improve decision traceability.', tags:['Mining','Motil','KPIs','Maintenance','HSE','Traceability'] },
    { sector:'Agtech & WhatsApp AI', problem:'Farmers can have valuable satellite data without an easy way to query it during daily field work.', system:'Agent connected to EcoSueloLab through WhatsApp: the user asks in natural language and the system queries available information to return useful crop and field context.', value:'Brings agronomic and satellite information into the user’s everyday channel, reducing the need to navigate dashboards for operational questions.', tags:['WhatsApp','AI Agent','Satellite','Agtech','Natural Language'] },
    { sector:'AI-First Personal Development', problem:'Professionals may need to structure career decisions, strengths, gaps and next actions without turning the process into disconnected content.', system:'AI-first platform with Vera, an AI coach embedded in a four-stage methodology: Strategic Radar, Despega Cerebral, Training and Your Route. A Live Profile is built from the user’s own answers.', value:'Turns reflection and diagnosis into a structured route with accumulated context, exercises and next actions inside the same system.', tags:['AI','Vera','Coaching','Route','Live Profile','Employability'] },
    { sector:'Facility & Hospitality OS', problem:'A complex hospitality and facility environment connects reservations, people, assets, inventory, procurement, maintenance, finance, events and administration; treating them as isolated modules breaks operational continuity.', system:'Black Swan Facility Core models these relationships through shared canonical objects. It connects Reservation → Room → Guest → Activity → Charge → Payment → Invoice; procurement → receipt → inventory; and Asset → Issue → Work → Evidence → Closure.', value:'A shared operational truth connects actions, evidence and history across functions so the same object does not acquire conflicting identities as it crosses workflows.', tags:['Facility OS','Hospitality','Assets','Procurement','Maintenance','Evidence'] },
    { sector:'WhatsApp & ERP', problem:'SMBs using Parrotfy still need to navigate the interface for queries, invoices or work orders even when much of their daily work happens in messaging.', system:'Agentic WhatsApp connector for Parrotfy: it interprets natural-language requests and translates them into permitted ERP queries or actions.', value:'Brings ERP functions closer to the team’s everyday channel without turning chat into a parallel source of truth.', tags:['WhatsApp','AI Agent','ERP','Natural Language'] },
  ],
}

// ─── Products ─────────────────────────────────────────────────────────────────
const products = [
  { id: 'mermasapp',    name: 'MermasApp',             img: '/n3uralia-brand/client-repository.png' },
  { id: 'motil',        name: 'Motil',                 img: '/n3uralia-retro/project-lapatagua.png' },
  { id: 'docufleet',    name: 'DocuFleet',             img: '/n3uralia-retro/project-labbe.png' },
  { id: 'clarity',      name: 'Clar1ty',               img: '/n3uralia-retro/product-clarity.png' },
  { id: 'nano-agents',  name: 'N3uralia Nano Agents',  img: '/n3uralia-retro/product-nanoagents.png' },
]

const productHeroParticlePositions = [
  [3,8],[8,41],[5,79],[12,21],[15,64],[19,91],[23,34],[26,13],[29,58],[32,83],
  [35,45],[39,6],[42,72],[46,27],[49,94],[52,51],[55,17],[58,76],[61,38],[64,88],
  [68,12],[71,61],[74,31],[77,82],[81,47],[84,5],[87,67],[90,25],[93,91],[96,54],
  [17,49],[37,89],[57,3],[72,95],[98,17],[1,57],[44,12],[66,49],[24,71],[53,85],
] as const


const productData: Record<Locale, {desc:string;forWhom:string;modules:string[];status:string}[]> = {
  es: [
    { desc:'Plataforma para hacer visible y gestionar merma en plantas de alimentos, conectando registros operativos, costos, análisis explicable y alertas por WhatsApp. La implementación y el impacto se miden contra el baseline real de cada planta.', forWhom:'Plantas de alimentos y lecherías que necesitan entender dónde, cuándo y por qué ocurre la merma y convertir esa señal en acciones operativas.', modules:['Merma en CLP','Alertas WhatsApp','IA explicable','Reglas HACCP/MINSAL/SAG','Modo Pyme','Reportes de auditoría'], status:'Disponible para diagnóstico' },
    { desc:'Plataforma operacional minera que conecta producción, mantenimiento, bodega, HSE, documentos y gerencia en un flujo trazable desde terreno hasta dirección. Alerta → OT → Repuesto → HSE → Evidencia → KPI.', forWhom:'Operaciones mineras con información fragmentada entre sensores, órdenes de trabajo, inventario, seguridad y reportes manuales.', modules:['Producción & KPIs','Mantención & MTTR','Bodega & reorden','HSE & cumplimiento','Documentos auditables','Dashboard ejecutivo'], status:'Disponible para demostración' },
    { desc:'Capa de cumplimiento documental para flotas de transporte y subcontratistas. Clasifica documentos, extrae vencimientos, dispara alertas escalonadas y organiza cobertura, excepciones y carpetas de evidencia para revisión operacional.', forWhom:'Empresas de transporte y facilities en Chile con flota propia y subcontratistas que hoy gestionan revisión técnica, permiso de circulación, SOAP, licencias y otros documentos en múltiples herramientas.', modules:['Clasificación documental con IA','Extracción de vencimientos','Alertas escalonadas','Command center de riesgos','Portal subcontratistas','Carpetas auditables','Panel ejecutivo'], status:'Disponible para implementación' },
    { desc:'Mejora y restauración de imágenes con IA diseñada para trabajar con retratos, archivo y activos culturales del Sudeste Asiático, con foco en preservar identidad visual y detalles relevantes durante upscale y restauración.', forWhom:'Fotógrafos, creadores, archivos de patrimonio e instituciones culturales que trabajan con retratos o imágenes históricas donde los detalles culturales importan.', modules:['Upscale de retratos','Restauración de archivo','Presets por tipo de imagen','Comparación antes/después','Modo profesional & API','Salida para impresión'], status:'Disponible para evaluación' },
    { desc:'Catálogo de agentes de IA especializados para tareas de marketing, desarrollo, diseño, análisis y operaciones. Cada agente se integra como una capacidad acotada dentro de un flujo, con entradas, herramientas y resultados definidos.', forWhom:'Equipos que necesitan automatizar o asistir tareas específicas sin convertir una interfaz de IA genérica en el sistema operativo de la empresa.', modules:['Marketing & contenido','Desarrollo & código','Diseño & creatividad','Análisis & datos','Operaciones','Conectores','Agentes especializados'], status:'Disponible para evaluación' },
  ],
  en: [
    { desc:'Platform for making food-plant waste visible and manageable by connecting operating records, cost context, explainable analysis and WhatsApp alerts. Implementation scope and impact are measured against each plant’s real baseline.', forWhom:'Food plants and dairies that need to understand where, when and why waste occurs and turn that signal into operational action.', modules:['Waste in CLP','WhatsApp alerts','Explainable AI','HACCP/MINSAL/SAG rules','SMB mode','Audit reports'], status:'Available for diagnosis' },
    { desc:'Mining operational platform connecting production, maintenance, warehouse, HSE, documents and management in a traceable flow from field to leadership. Alert → Work order → Spare part → HSE → Evidence → KPI.', forWhom:'Mining operations with fragmented information across sensors, work orders, inventory, safety and manual reporting.', modules:['Production & KPIs','Maintenance & MTTR','Warehouse & reorder','HSE & compliance','Auditable documents','Executive dashboard'], status:'Available for demonstration' },
    { desc:'Document-compliance layer for transport fleets and subcontractors. It classifies documents, extracts expiries, triggers staged alerts and organizes coverage, exceptions and evidence folders for operational review.', forWhom:'Transport and facility companies in Chile with own fleet and subcontractors managing vehicle inspections, circulation permits, SOAP, licences and other records across multiple tools.', modules:['AI document classification','Expiry extraction','Staged alerts','Risk command center','Subcontractor portal','Audit-ready folders','Executive dashboard'], status:'Available for implementation' },
    { desc:'AI image enhancement and restoration designed for portraits, archives and cultural assets from Southeast Asia, with emphasis on preserving visual identity and relevant detail through upscaling and restoration.', forWhom:'Photographers, creators, heritage archives and cultural institutions working with portraits or historical imagery where cultural detail matters.', modules:['Portrait upscaling','Archive restoration','Presets by image type','Before/after comparison','Professional mode & API','Print output'], status:'Available for evaluation' },
    { desc:'Catalog of specialized AI agents for marketing, development, design, analysis and operational tasks. Each agent is treated as a bounded capability inside a workflow with defined inputs, tools and outputs.', forWhom:'Teams that want to automate or assist specific tasks without turning a generic AI interface into the company’s operating system.', modules:['Marketing & content','Development & code','Design & creativity','Analysis & data','Operations','Connectors','Specialized agents'], status:'Available for evaluation' },
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
    <main className="retro-page catalog-page projects-catalog-page">
      <Header
        eyebrow={es ? 'Proyectos' : 'Projects'}
        title={es ? 'Proyectos que convierten complejidad en sistemas.' : 'Projects that turn complexity into systems.'}
        body={es ? 'Implementaciones reales de IA, automatización y software construidas alrededor de operaciones, personas, documentos y decisiones.' : 'Real AI, automation and software implementations built around operations, people, documents and decisions.'}
      />
      <section className="catalog-section projects-catalog-section" aria-label={es ? 'Proyectos de N3uralia' : 'N3uralia projects'}>
        <div className="retro-shell catalog-list">
          {projects.map((p,i) => {
            const d = data[i]
            return (
              <CatalogProjectFocus id={p.id} key={p.id}>
                <div className="catalog-copy">
                  <div className="catalog-project-label">
                    <span>{String(i+1).padStart(2,'0')}</span>
                    <span aria-hidden="true">/</span>
                    <span>{d.sector}</span>
                  </div>
                  <h2>{p.name}</h2>
                  <dl>
                    <div><dt>{es ? 'Problema' : 'Problem'}</dt><dd>{d.problem}</dd></div>
                    <div><dt>{es ? 'Sistema construido' : 'System built'}</dt><dd>{d.system}</dd></div>
                    <div><dt>{es ? 'Valor operativo' : 'Operational value'}</dt><dd>{d.value}</dd></div>
                  </dl>
                  <div className="catalog-tags">{d.tags.map(t => <span key={t}>{t}</span>)}</div>
                  <Link className="catalog-link" href={`/${locale}/diagnostico#diagnosis-assistant`}>
                    {es ? 'Conversar sobre un sistema' : 'Discuss a system'} →
                  </Link>
                </div>
                <div className="catalog-image">
                  <Image src={p.img} alt={`${p.name} interface`} fill sizes="(min-width:900px) 48vw, 100vw" className="object-cover" style={{objectPosition:'top center'}}/>
                </div>
              </CatalogProjectFocus>
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
    <main className="retro-page catalog-page products-catalog-page">
      <header className="catalog-hero products-hero">
        <div className="products-hero-particles" aria-hidden="true">
          {productHeroParticlePositions.map(([x,y], index) => {
            const size = 1.1 + ((index * 7) % 15) / 10
            const duration = 11 + ((index * 7) % 17)
            const pulse = 2.8 + ((index * 11) % 31) / 10
            const delay = -((index * 13) % 19)
            const dx1 = ((index * 13) % 25) - 12
            const dy1 = ((index * 17) % 27) - 13
            const dx2 = ((index * 19 + 7) % 33) - 16
            const dy2 = ((index * 11 + 5) % 35) - 17
            const dx3 = ((index * 23 + 3) % 29) - 14
            const dy3 = ((index * 5 + 9) % 31) - 15
            const opacity = .34 + ((index * 9) % 31) / 100
            const style = {
              '--x': `${x}%`,
              '--y': `${y}%`,
              '--size': `${size}px`,
              '--duration': `${duration}s`,
              '--pulse': `${pulse}s`,
              '--delay': `${delay}s`,
              '--dx1': `${dx1}px`,
              '--dy1': `${dy1}px`,
              '--dx2': `${dx2}px`,
              '--dy2': `${dy2}px`,
              '--dx3': `${dx3}px`,
              '--dy3': `${dy3}px`,
              '--particle-opacity': String(opacity),
            } as CSSProperties

            return <span key={index} style={style} />
          })}
        </div>
        <div className="retro-shell products-hero-grid">
          <div className="products-hero-primary">
            <small>{es ? 'PRODUCTOS' : 'PRODUCTS'}</small>
            <h1>{es ? 'Productos construidos desde operaciones reales.' : 'Products built from real operations.'}</h1>
          </div>

          <div className="products-hero-secondary">
            <small>{es ? 'SISTEMAS REUTILIZABLES' : 'REUSABLE SYSTEMS'}</small>
            <p>
              {es
                ? 'Convertimos problemas operacionales reales en productos reutilizables que conectan datos, documentos, flujos e IA. Cada producto ayuda a los equipos a entender qué está pasando, actuar más rápido y mantener el control.'
                : 'We turn real operational problems into reusable products that connect data, documents, workflows and AI. Each product helps teams see what is happening, act faster and stay in control.'}
            </p>
          </div>

          <div className="products-hero-ecosystem">
            <div>
              <small>{es ? 'ECOSISTEMA PÚBLICO' : 'PUBLIC ECOSYSTEM'}</small>
              <p>
                {es
                  ? 'Productos especializados con superficies públicas propias.'
                  : 'Specialized products with their own public surfaces.'}
              </p>
            </div>
            <div className="products-hero-links">
              {[
                ['Kumplio', 'https://www.kumplio.app'],
                ['VIDENTIA', 'https://videntia.app'],
                ['Clar1ty', 'https://www.clar1ty.art'],
                ['LicitRadar', 'https://www.licitradar.app'],
              ].map(([name, href]) => (
                <a key={name} className="retro-button" href={href} target="_blank" rel="noopener noreferrer">
                  {name} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>
      <section className="catalog-section products-catalog-section" aria-label={es ? 'Productos de N3uralia' : 'N3uralia products'}>
        <div className="retro-shell catalog-list">
          {products.map((p,i) => {
            const d = data[i]
            return (
              <CatalogProjectFocus id={p.id} key={p.id}>
                <div className="catalog-copy">
                  <div className="catalog-project-label">
                    <span>{String(i+1).padStart(2,'0')}</span>
                    <span aria-hidden="true">/</span>
                    <span>{es ? 'Producto' : 'Product'}</span>
                  </div>
                  <h2>{p.name}</h2>
                  <dl>
                    <div><dt>{es ? 'Solución' : 'Solution'}</dt><dd>{d.desc}</dd></div>
                    <div><dt>{es ? 'Para quién' : 'For whom'}</dt><dd>{d.forWhom}</dd></div>
                    <div>
                      <dt>{es ? 'Módulos' : 'Modules'}</dt>
                      <dd>
                        <div className="catalog-tags product-module-tags">
                          {d.modules.map(module => <span key={module}>{module}</span>)}
                        </div>
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="catalog-image">
                  <Image src={p.img} alt={`${p.name} interface`} fill sizes="(min-width:900px) 48vw, 100vw" className="object-cover" style={{objectPosition:'top center'}}/>
                </div>
              </CatalogProjectFocus>
            )
          })}
        </div>
      </section>
    </main>
  )
}
