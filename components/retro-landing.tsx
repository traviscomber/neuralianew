'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Locale } from '@/lib/get-locale'
import { LandingRecognitionBridge } from '@/components/landing-recognition-bridge'

type Text = {
  hero: [string,string,string,string,string]
  expertise: [string,string,string][]
  learn: string
  complexity: [string,string,string]
  operations: [string,string,string,string,string,string][]
  projects: [string,string,string,string]
  products: [string,string,string,string]
  method: [string,string,string,string,string,string,string]
  diagnosis: [string,string,string,string,string]
  final: [string,string,string,string,string]
  faq: [string,string,[string,string][]]
}

const text: Record<Locale, Text> = {
  es: {
    hero:['Inteligencia · Automatización · Ejecución','Convierte la complejidad en ejecución inteligente.','N3uralia convierte datos, flujos, documentos e IA dispersos en sistemas que mejoran visibilidad, control y ejecución.','Agendar diagnóstico','Ver soluciones'],
    expertise:[['Inteligencia operacional','Unifica datos y contexto para revelar lo importante y actuar con claridad.','/n3uralia-brand/fromdiagnosistoexecution.png'],['Automatización de flujos','Diseña, automatiza y gobierna procesos que escalan con precisión.','/n3uralia-brand/02workflowautomation.png'],['Sistemas de IA en producción','Construye sistemas seguros y observables que generan impacto real.','/n3uralia-brand/03productionaisystems.png']],
    learn:'Conocer más',
    complexity:['Diseñado para la complejidad','Trabajamos donde los sistemas se vuelven difíciles.','Entornos complejos. Alto impacto. Ejecución real.'],
    operations:[['Experiencia operacional','Construido alrededor de operaciones reales.','Trabajamos con equipos de operaciones, ingeniería y liderazgo para diseñar sistemas que encajen.','Ver cómo trabajamos','Mapeamos personas, herramientas, documentos, decisiones, cuellos de botella y flujos repetitivos.','Mapeo de procesos · arquitectura de datos · automatización · agentes IA · tableros · despliegue'],['Centrado en personas','Implementación centrada en las personas.','Diseñamos adopción, capacitación, soporte y transferencia dentro de cada proyecto.','Nuestro enfoque','La tecnología funciona cuando las personas la adoptan y pueden operarla.','Centrado en personas · técnicamente estructurado · realista · productivo · medible']],
    projects:['Nuestros proyectos','Sistemas reales. Impacto real.','Proyectos seleccionados que convierten complejidad en valor operacional medible.','Ver todos los proyectos'],
    products:['Nuestros productos','Sistemas que piensan. Flujos que escalan.','Productos para operaciones inteligentes en documentos, procesos y decisiones.','Explorar productos'],
    method:['Cómo trabajamos','Del diagnóstico a la ejecución.','Diagnosticar','Arquitectar','Construir','Integrar','Mejorar'],
    diagnosis:['Comienza con un diagnóstico','Claridad primero. El impacto sigue.','Un diagnóstico entrega una visión clara de lo posible y una ruta práctica.','Agendar diagnóstico','Contactarnos'],
    final:['¿Listos para transformar?','Construyamos el sistema detrás de tu próxima etapa de crecimiento.','Ayudamos a convertir señales dispersas en ejecución controlada.','Agendar diagnóstico','Contactarnos'],
    faq:['Preguntas frecuentes','Lo esencial antes de comenzar.',[
      ['¿Qué hace N3uralia?','Diseñamos e implementamos sistemas de IA, automatización y software que conectan datos, documentos, flujos y decisiones para mejorar la ejecución operacional.'],
      ['¿Con qué tipo de empresas trabajan?','Trabajamos principalmente con organizaciones que operan procesos complejos, información fragmentada, alto volumen documental o decisiones críticas en Chile y LATAM.'],
      ['¿Necesito reemplazar mis sistemas actuales?','No. Normalmente integramos la capa de inteligencia sobre el stack existente: ERP, CRM, correo, Drive, SharePoint, bases de datos, APIs y herramientas internas.'],
      ['¿Cómo comienza un proyecto?','Partimos con un diagnóstico acotado para entender el proceso, los datos, los bloqueos y el impacto esperado. Desde ahí definimos una arquitectura y una hoja de ruta ejecutable.'],
      ['¿La IA toma decisiones por nosotros?','No en procesos consecuenciales. Diseñamos sistemas con trazabilidad, controles y participación humana para que la IA asista, prepare y automatice sin eliminar el criterio profesional.'],
      ['¿Pueden llevar una solución hasta producción?','Sí. N3uralia cubre arquitectura, desarrollo, integración, observabilidad, seguridad, adopción y despliegue en producción.']
    ]],
  },
  en: {
    hero:['Intelligence · Automation · Execution','Turn complexity into intelligent execution.','N3uralia turns scattered data, workflows, documents and AI into systems that improve visibility, control and execution.','Book a diagnosis','See solutions'],
    expertise:[['Operational Intelligence','Unify data and context to reveal what matters and act with clarity.','/n3uralia-brand/fromdiagnosistoexecution.png'],['Workflow Automation','Design, automate and govern workflows that scale with precision.','/n3uralia-brand/02workflowautomation.png'],['Production AI Systems','Build secure, observable systems that deliver real impact.','/n3uralia-brand/03productionaisystems.png']],
    learn:'Learn more',
    complexity:['Built for complexity','We work where systems get hard.','Complex environments. High stakes. Real impact.'],
    operations:[['Built on experience','Built around real operations.','We partner with operations, engineering and leadership teams to design systems that fit.','See how we work','We map people, tools, documents, decisions, bottlenecks and repeated workflows.','Process mapping · data architecture · automation · AI agents · dashboards · deployment'],['Focused on people','Human-centered implementation.','We design adoption, training, support and handoff into every engagement.','Our approach','Technology works when people adopt it and can operate it.','Human-centered · technically structured · realistic · production-ready · measurable']],
    projects:['Our projects','Real systems. Real impact.','Selected projects converting complexity into measurable operational value.','See all projects'],
    products:['Our products','Systems that think. Workflows that scale.','Products powering intelligent operations across documents, processes and decisions.','Explore products'],
    method:['How we work','From diagnosis to execution.','Diagnose','Architect','Build','Integrate','Improve'],
    diagnosis:['Start with a diagnosis','Clarity first. Impact follows.','A diagnosis gives you a clear view of what is possible and a practical path forward.','Book a diagnosis','Contact us'],
    final:['Ready to transform?','Let’s build the system behind your next stage of growth.','We turn scattered signals into controlled execution.','Book a diagnosis','Contact us'],
    faq:['Frequently asked questions','What to know before we start.',[
      ['What does N3uralia do?','We design and implement AI, automation and software systems that connect data, documents, workflows and decisions to improve operational execution.'],
      ['What kind of companies do you work with?','We primarily work with organizations running complex processes, fragmented information, document-heavy operations or critical decisions across Chile and LATAM.'],
      ['Do we need to replace our existing systems?','No. We usually add an intelligence layer on top of your current stack: ERP, CRM, email, Drive, SharePoint, databases, APIs and internal tools.'],
      ['How does an engagement start?','We begin with a focused diagnosis to understand the workflow, data, constraints and expected impact. From there we define the architecture and an executable roadmap.'],
      ['Does AI make decisions for us?','Not in consequential processes. We design for traceability, controls and human oversight so AI can assist, prepare and automate without removing professional judgment.'],
      ['Can you take a solution all the way to production?','Yes. N3uralia covers architecture, development, integration, observability, security, adoption and production deployment.']
    ]],
  },
}

const projects = [
  ['LABBE','AI document compliance for transport fleets','/n3uralia-retro/project-labbe.png','labbe'],
  ['SegurIA','AI-powered operational security platform','/n3uralia-retro/project-seguria-new.png','seguria'],
  ['Sur-Realista','Territorial operations & real estate platform','/n3uralia-retro/project-surrealista.png','sur-realista'],
  ['La Patagua','Mining operations','/n3uralia-retro/project-lapatagua.png','la-patagua'],
  ['EcoSueloLab','Satellite data via WhatsApp AI agent','/n3uralia-retro/project-ecosuelo-new.png','ecosuelolab'],
  ['Despega Tu Carrera','AI-first personal development platform','/n3uralia-retro/project-despega.png','despega-tu-carrera'],
  ['Black Swan FS','Fleet & subcontractor document operations','/n3uralia-retro/project-blackswan-new.png','blackswan-facility-core'],
  ['Parrotfy','WhatsApp AI connector for ERP','/n3uralia-retro/project-parrotfy.png','parrotfy'],
]

function Corners(){return <span aria-hidden className="retro-corners"><i/><i/><i/><i/></span>}
function Button({href,children,primary=false}:{href:string;children:React.ReactNode;primary?:boolean}){return <Link href={href} className={`retro-button ${primary?'retro-button-primary':''}`}>{children}</Link>}
function Focus({children,index}:{children:React.ReactNode;index:number}){const ref=useRef<HTMLDivElement>(null);const [active,setActive]=useState(false);const reduced=useReducedMotion();useEffect(()=>{const node=ref.current;if(!node)return;const observer=new IntersectionObserver(([entry])=>setActive(Boolean(entry?.isIntersecting)),{rootMargin:'-30% 0px',threshold:.05});observer.observe(node);return()=>observer.disconnect()},[]);return <motion.div ref={ref} className={`focus-item ${active?'is-active':''}`} animate={reduced?undefined:{opacity:active?1:.45,scale:active?1:.94}} transition={{duration:.45,delay:index*.02}}>{children}</motion.div>}

export function RetroLanding({locale}:{locale:Locale}){
  const t=text[locale];const [open,setOpen]=useState<number|null>(null);const projectPath=locale==='es'?'proyectos':'projects';const productPath=locale==='es'?'productos':'products'
  return <main className="retro-page">
    <section className="retro-hero retro-dark"><div className="retro-shell hero-grid"><div className="hero-copy"><small>{t.hero[0]}</small><h1>{t.hero[1]}</h1><p>{t.hero[2]}</p><div className="button-row"><Button href={`/${locale}/diagnostico`} primary>{t.hero[3]}</Button><Button href={`/${locale}/soluciones`}>{t.hero[4]}</Button></div></div><div className="hero-photo"><Corners/><img src="/n3uralia-brand/l1hero.jpg" alt="Operational intelligence system" className="object-cover" style={{position:'absolute',height:'100%',width:'100%',left:0,top:0,right:0,bottom:0,objectFit:'cover',objectPosition:'center center'}} fetchPriority="high" decoding="async"/><span className="scan-line"/></div></div></section>
    <section className="retro-dark expertise-scan"><div className="retro-shell">{t.expertise.map((item,i)=><Focus key={item[0]} index={i}><article className="expertise-row"><pre className="telemetry">{`SYS 0${i+1}\nSTATUS ACTIVE\nSYNCED`}</pre><div className="expertise-graphic"><Corners/><Image src={item[2]} alt="" fill sizes="360px" className="object-contain"/></div><div className="expertise-copy"><span>0{i+1} —</span><h2>{item[0]}</h2><p>{item[1]}</p><Button href={`/${locale}/soluciones`}>{t.learn}</Button></div></article></Focus>)}</div></section>
    <section className="retro-dark complexity"><div className="retro-shell complexity-grid"><div><small>{t.complexity[0]}</small><h2>{t.complexity[1]}</h2><p>{t.complexity[2]}</p></div><div className="landscape"><Corners/><span>N3 SYS // ACTIVE</span></div></div></section>
    <section className="retro-dark operations-grid">{t.operations.map((item,i)=><div className="operations-row" key={item[0]}><div className="operations-photo"><Corners/><Image src={i?'/n3uralia-brand/humancenteredimplementation.png':'/n3uralia-brand/builtaroundrealoperations.png'} alt="N3uralia operations" fill unoptimized sizes="(min-width:900px) 58vw,100vw" className="object-cover"/></div><div className="operations-copy"><small>{item[0]}</small><h2>{item[1]}</h2><p>{item[2]}</p><button className="retro-button plus-button" onClick={()=>setOpen(open===i?null:i)} aria-expanded={open===i}>{item[3]}<span>+</span></button><motion.div className="expand-panel" initial={false} animate={{height:open===i?'auto':0,opacity:open===i?1:0}}><p>{item[4]}</p><div className="panel-list">{item[5]}</div><Button href={`/${locale}/${i?'soluciones':'diagnostico'}`}>{i?t.learn:t.hero[3]}</Button></motion.div></div></div>)}</section>
    <section className="retro-light"><div className="retro-shell project-shell"><header className="light-intro"><small>{t.projects[0]}</small><h2>{t.projects[1]}</h2><p>{t.projects[2]}</p></header><div className="project-list">{projects.map((p,i)=><Link key={p[0]} href={`/${locale}/${projectPath}#${p[3]}`} className="project-row"><div className="project-copy"><span>{String(i+1).padStart(2,'0')} —</span><h3>{p[0]}</h3><small>{p[1]}</small></div><div className="project-image"><Image src={p[2]} alt={`${p[0]} interface`} fill sizes="(min-width:900px) 52vw,100vw" className="object-cover" style={{objectPosition:'top center'}}/></div></Link>)}<Button href={`/${locale}/${projectPath}`}>{t.projects[3]}</Button></div></div></section>
    <section className="retro-light products"><div className="retro-shell"><div className="products-head"><div><small>{t.products[0]}</small><h2>{t.products[1]}</h2></div><p>{t.products[2]}</p></div><div className="center-button"><Button href={`/${locale}/${productPath}`}>{t.products[3]}</Button></div></div></section>
    <LandingRecognitionBridge locale={locale} />
    <section className="retro-dark method"><div className="retro-shell method-grid"><div><small>{t.method[0]}</small><h2>{t.method[1]}</h2><div className="radar"><Corners/></div></div><div className="timeline">{t.method.slice(2).map((s,i)=><Focus key={s} index={i}><div className="timeline-step"><span>0{i+1}</span><h3>{s}</h3></div></Focus>)}</div></div></section>
    <section className="retro-dark diagnosis"><div className="retro-shell diagnosis-grid"><div><small>{t.diagnosis[0]}</small><h2>{t.diagnosis[1]}</h2><p>{t.diagnosis[2]}</p><div className="button-row"><Button href={`/${locale}/diagnostico`} primary>{t.diagnosis[3]}</Button><Button href={`/${locale}/contact`}>{t.diagnosis[4]}</Button></div></div><div className="tower"><Corners/><Image src="/n3uralia-brand/clarityfirstimpactfollows.png" alt="Diagnosis framework" fill quality={95} unoptimized className="object-contain"/></div></div></section>
    <section className="retro-dark final-cta"><div className="retro-shell final-grid"><div><small>{t.final[0]}</small><h2>{t.final[1]}</h2><p>{t.final[2]}</p><div className="button-row"><Button href={`/${locale}/diagnostico`} primary>{t.final[3]}</Button><Button href={`/${locale}/contact`}>{t.final[4]}</Button></div></div><div className="final-photo"><Image src="/n3uralia-brand/letsbuildthesystembehind.png" alt="Operational command center" fill unoptimized className="object-cover"/></div></div></section>
    <section className="retro-dark" aria-labelledby="landing-faq-title"><div className="retro-shell" style={{paddingTop:'72px',paddingBottom:'72px'}}><small>{t.faq[0]}</small><h2 id="landing-faq-title" style={{marginTop:'12px',marginBottom:'12px'}}>{t.faq[1]}</h2><div style={{marginTop:'36px',borderTop:'1px solid rgba(115,150,148,.24)'}}>{t.faq[2].map(([question,answer])=><details key={question} style={{borderBottom:'1px solid rgba(115,150,148,.24)',padding:'22px 0'}}><summary style={{cursor:'pointer',fontWeight:500,letterSpacing:'.04em'}}>{question}</summary><p style={{maxWidth:'820px',marginTop:'14px',color:'var(--n3-text-muted)'}}>{answer}</p></details>)}</div></div></section>
  </main>
}
