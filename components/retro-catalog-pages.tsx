import Image from 'next/image'
import Link from 'next/link'
import type { Locale } from '@/lib/get-locale'
import { projectEsA } from './catalog-es-projects-a'
import { projectEsB } from './catalog-es-projects-b'
import { projectEnA } from './catalog-en-projects-a'
import { projectEnB } from './catalog-en-projects-b'
import { productEsA } from './catalog-es-products-a'
import { productEsB } from './catalog-es-products-b'
import { productEnA } from './catalog-en-products-a'
import { productEnB } from './catalog-en-products-b'

const projects=[
['motil','Motil','/n3uralia-retro/project-motil.webp'],['docufleet-labbe','DocuFleet / LABBE','/n3uralia-retro/project-docufleet.webp'],['seguria','SegurIA','/n3uralia-retro/project-seguria.webp'],['sur-realista','Sur-Realista','/n3uralia-retro/project-sur-realista.webp'],['ecosuelolab','Ecosuelolab','/n3uralia-retro/project-ecosuelo.webp'],['despega-tu-carrera','Despega Tu Carrera','/n3uralia-brand/client-repository.png'],['blackswan-facility-core','Blackswan Facility Core','/n3uralia-retro/project-blackswan.webp']
] as const
const products=[['clarity','Clarity'],['mermasapp','MermasApp'],['motil','Motil Platform'],['docufleet','DocuFleet'],['seguria','SegurIA'],['sur-realista','Sur-Realista'],['command-center','N3 Command Center'],['document-intelligence','N3 Document Intelligence Layer'],['ai-agents-layer','N3 AI Agents Layer'],['workflow-orchestrator','N3 Workflow Orchestrator']] as const

function Header({eyebrow,title,body}:{eyebrow:string;title:string;body:string}){return <header className="catalog-hero"><div className="retro-shell"><small>{eyebrow}</small><h1>{title}</h1><p>{body}</p></div></header>}

export function ProjectsPage({locale}:{locale:Locale}){
 const es=locale==='es'; const data=es?[...projectEsA,...projectEsB]:[...projectEnA,...projectEnB]
 return <main className="retro-page catalog-page"><Header eyebrow={es?'Proyectos':'Projects'} title={es?'Proyectos que convierten complejidad en sistemas.':'Projects that turn complexity into systems.'} body={es?'Sistemas reales diseñados alrededor de operaciones, personas, documentos y decisiones.':'Real systems designed around operations, people, documents and decisions.'}/><section className="retro-light catalog-section"><div className="retro-shell catalog-list">{projects.map((p,i)=>{const d=data[i];return <article id={p[0]} key={p[0]} className="catalog-project"><div className="catalog-number">{String(i+1).padStart(2,'0')} —</div><div className="catalog-copy"><small>{d[0]}</small><h2>{p[1]}</h2><dl><div><dt>{es?'Problema':'Problem'}</dt><dd>{d[1]}</dd></div><div><dt>{es?'Sistema construido':'System built'}</dt><dd>{d[2]}</dd></div><div><dt>{es?'Valor operativo':'Operational value'}</dt><dd>{d[3]}</dd></div></dl><div className="catalog-tags">{d[4].map(t=><span key={t}>{t}</span>)}</div><Link className="catalog-link" href={`/${locale}/diagnostico#contacto`}>{es?'Conversar sobre un sistema':'Discuss a system'} →</Link></div><div className="catalog-image"><Image src={p[2]} alt={`${p[1]} interface`} fill sizes="(min-width:900px) 48vw, 100vw" className="object-cover object-center"/></div></article>})}</div></section></main>
}

export function ProductsPage({locale}:{locale:Locale}){
 const es=locale==='es'; const data=es?[...productEsA,...productEsB]:[...productEnA,...productEnB]
 return <main className="retro-page catalog-page"><Header eyebrow={es?'Productos':'Products'} title={es?'Productos construidos desde operaciones reales.':'Products built from real operations.'} body={es?'Sistemas reutilizables que conectan documentos, procesos, datos, decisiones y agentes.':'Reusable systems connecting documents, processes, data, decisions and agents.'}/><section className="retro-light catalog-section"><div className="retro-shell catalog-products">{products.map((p,i)=>{const d=data[i];return <article id={p[0]} key={p[0]} className="catalog-product"><span>{String(i+1).padStart(2,'0')}</span><h2>{p[1]}</h2><p>{d[0]}</p><div><small>{es?'Para quién':'For whom'}</small><p>{d[1]}</p></div><ul>{d[2].map(m=><li key={m}>{m}</li>)}</ul><div className="product-status"><i/>{es?'Disponible para diagnóstico':'Available for diagnosis'}</div><Link className="catalog-link" href={`/${locale}/diagnostico#contacto`}>{es?'Evaluar este producto':'Evaluate this product'} →</Link></article>})}</div></section></main>
}