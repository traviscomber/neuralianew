import Image from 'next/image'
import Link from 'next/link'
import type { Locale } from '@/lib/get-locale'

const projectData = [
  { id:'motil', name:'Motil', industry:'Transport operations', image:'/n3uralia-retro/project-motil.webp', problem:'Operational information was fragmented across assets, maintenance and risk.', system:'A connected operations platform for transport asset reliability and execution.', value:'A shared operational view for maintenance, risk and daily decisions.', tags:['Operations','Assets','Maintenance'] },
  { id:'docufleet-labbe', name:'DocuFleet / LABBE', industry:'Transportation', image:'/n3uralia-retro/project-docufleet.webp', problem:'Fleet compliance evidence was distributed across files and manual trackers.', system:'A document and compliance layer for vehicles, contractors and equipment.', value:'Earlier visibility into missing, rejected and expiring documentation.', tags:['Documents','Compliance','Fleet'] },
  { id:'seguria', name:'SegurIA', industry:'Security', image:'/n3uralia-retro/project-seguria.webp', problem:'Critical security signals were difficult to prioritize and coordinate.', system:'AI-assisted monitoring and incident detection across infrastructure.', value:'A clearer flow from detection to accountable response.', tags:['Security','Monitoring','Incidents'] },
  { id:'sur-realista', name:'Sur-Realista', industry:'Real estate', image:'/n3uralia-retro/project-sur-realista.webp', problem:'Client, property and geospatial context lived in disconnected systems.', system:'A repository connecting maps, records, assets, files and actions.', value:'Teams recover context quickly and prioritize work from one interface.', tags:['Geospatial','Repository','Workflow'] },
  { id:'ecosuelolab', name:'Ecosuelolab', industry:'Agriculture', image:'/n3uralia-retro/project-ecosuelo.webp', problem:'Soil and land-health information needed a usable operational layer.', system:'A soil intelligence platform for analysis and precision agriculture.', value:'Environmental signals become visible recommendations and follow-up.', tags:['Soil','Environment','Intelligence'] },
  { id:'despega-tu-carrera', name:'Despega Tu Carrera', industry:'Education', image:'/n3uralia-brand/client-repository.png', problem:'Career development resources were difficult to personalize and navigate.', system:'A guided platform connecting profiles, learning paths and opportunities.', value:'Users move from scattered information to a clearer development path.', tags:['Education','Guidance','Platform'] },
  { id:'blackswan-facility-core', name:'Blackswan Facility Core', industry:'Facilities', image:'/n3uralia-retro/project-blackswan.webp', problem:'Critical facility signals were separated across infrastructure systems.', system:'A unified operations hub for infrastructure, security and environment.', value:'Operators see system state and exceptions from one controlled layer.', tags:['Facilities','Infrastructure','Control'] },
]

const productData = [
  ['clarity','Clarity','Unified operational visibility across data, teams and activity.','Leaders and operations teams',['Live overview','Ownership','Operational signals']],
  ['mermasapp','MermasApp','Workflow automation for approvals, routing and operational processes.','Production and operations teams',['Workflows','Approvals','Traceability']],
  ['motil','Motil Platform','Operational control for transport assets, maintenance and execution.','Transport and asset-intensive operations',['Assets','Maintenance','Risk']],
  ['docufleet','DocuFleet','Document and compliance management for fleets and contractors.','Fleet, compliance and HSE teams',['Documents','Expiry alerts','Evidence']],
  ['seguria','SegurIA','AI-assisted security monitoring and incident coordination.','Security and infrastructure teams',['Monitoring','Alerts','Response']],
  ['sur-realista','Sur-Realista','Geospatial client, property and asset intelligence.','Real-estate and territorial teams',['Maps','Repository','Pipeline']],
  ['command-center','N3 Command Center','A controlled management view for risk, work and decisions.','Operational leadership',['Dashboards','Priorities','Owners']],
  ['document-intelligence','N3 Document Intelligence Layer','Classification, extraction and evidence tracking for operational documents.','Compliance and document-heavy operations',['Extraction','Classification','Audit trail']],
  ['ai-agents-layer','N3 AI Agents Layer','Governed agents grounded in company context and permissions.','Teams moving AI into production',['Agents','Permissions','Sources']],
  ['workflow-orchestrator','N3 Workflow Orchestrator','Connected automation across people, systems and approvals.','Cross-functional operations',['Orchestration','Integrations','Handoffs']],
] as const

function Header({ eyebrow, title, body }: { eyebrow:string; title:string; body:string }) {
  return <header className="catalog-hero"><div className="retro-shell"><small>{eyebrow}</small><h1>{title}</h1><p>{body}</p></div></header>
}

export function ProjectsPage({ locale }: { locale:Locale }) {
  const es=locale==='es'
  return <main className="retro-page catalog-page"><Header eyebrow={es?'Proyectos':'Projects'} title={es?'Proyectos que convierten complejidad en sistemas.':'Projects that turn complexity into systems.'} body={es?'Sistemas reales diseñados alrededor de operaciones, personas, documentos y decisiones.':'Real systems designed around operations, people, documents and decisions.'}/><section className="retro-light catalog-section"><div className="retro-shell catalog-list">{projectData.map((p,i)=><article id={p.id} key={p.id} className="catalog-project"><div className="catalog-number">{String(i+1).padStart(2,'0')} —</div><div className="catalog-copy"><small>{p.industry}</small><h2>{p.name}</h2><dl><div><dt>{es?'Problema':'Problem'}</dt><dd>{p.problem}</dd></div><div><dt>{es?'Sistema construido':'System built'}</dt><dd>{p.system}</dd></div><div><dt>{es?'Valor operativo':'Operational value'}</dt><dd>{p.value}</dd></div></dl><div className="catalog-tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><Link className="catalog-link" href={`/${locale}/diagnostico#contacto`}>{es?'Conversar sobre un sistema':'Discuss a system'} →</Link></div><div className="catalog-image"><Image src={p.image} alt={`${p.name} interface`} fill sizes="(min-width:900px) 48vw, 100vw" className="object-cover object-center"/></div></article>)}</div></section></main>
}

export function ProductsPage({ locale }: { locale:Locale }) {
  const es=locale==='es'
  return <main className="retro-page catalog-page"><Header eyebrow={es?'Productos':'Products'} title={es?'Productos construidos desde operaciones reales.':'Products built from real operations.'} body={es?'Sistemas reutilizables que conectan documentos, procesos, datos, decisiones y agentes.':'Reusable systems connecting documents, processes, data, decisions and agents.'}/><section className="retro-light catalog-section"><div className="retro-shell catalog-products">{productData.map((p,i)=><article id={p[0]} key={p[0]} className="catalog-product"><span>{String(i+1).padStart(2,'0')}</span><h2>{p[1]}</h2><p>{p[2]}</p><div><small>{es?'Para quién':'For whom'}</small><p>{p[3]}</p></div><ul>{p[4].map(m=><li key={m}>{m}</li>)}</ul><div className="product-status"><i/>{es?'Disponible para diagnóstico':'Available for diagnosis'}</div><Link className="catalog-link" href={`/${locale}/diagnostico#contacto`}>{es?'Evaluar este producto':'Evaluate this product'} →</Link></article>)}</div></section></main>
}
