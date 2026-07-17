'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Locale } from '@/lib/get-locale'

const expertise = [
  { id: 'operational-intelligence', no: '01', title: 'Operational Intelligence', body: 'Unify data and context across the business to reveal what matters and act with clarity.', image: '/n3uralia-retro/operational-stack.webp', telemetry: ['LAYER STACK 01', 'D1 — DATA', 'D2 — CONTEXT', 'D3 — INSIGHT', 'D4 — ACTION', '', 'NODES', '00 — ACTIVE', '01 — LINK', '02 — SYNCED'] },
  { id: 'workflow-automation', no: '02', title: 'Workflow Automation', body: 'Design, automate, and govern workflows that scale with precision and stay adaptable.', image: '/n3uralia-retro/workflow-core.webp', telemetry: ['FLOW ARCHITECTURE', 'SYS. 18', 'STATUS', '01 — ACTIVE', '02 — STAGED', '', 'TASKS', '101 — DETECTING', '102 — ROUTING', '103 — VALID', '104 — COMPLETE'] },
  { id: 'production-ai-systems', no: '03', title: 'Production AI Systems', body: 'Build secure, observable AI systems that deliver real impact in production.', image: '/n3uralia-retro/production-core.webp', telemetry: ['AI STACK', 'CORE 2.3', '', 'NODES', '80.234K', 'V2.1.8', '', 'THROUGHPUT', '256 ms → 7%', '', 'LATENCY', '< 11 ms'] },
]

const projects = [
  ['01', 'Motil', 'AI-powered operations platform for transport asset reliability, maintenance, risk, and efficiency.', 'RAILROAD', '/n3uralia-retro/project-motil.webp', 'motil'],
  ['02', 'DocuFleet / LABBE', 'Digital document and compliance management for heavy equipment fleets and site operations.', 'TRANSPORTATION', '/n3uralia-retro/project-docufleet.webp', 'docufleet-labbe'],
  ['03', 'SegurIA', 'AI-driven security monitoring and incident detection across critical infrastructure.', 'SECURITY', '/n3uralia-retro/project-seguria.webp', 'seguria'],
  ['04', 'Sur-Realista', 'AI-driven geospatial analysis for urban systems, infrastructure, and environmental resilience.', 'REAL ESTATE', '/n3uralia-retro/project-sur-realista.webp', 'sur-realista'],
  ['05', 'Ecosuelolab', 'Advanced soil intelligence platform for precision agriculture and land health monitoring.', 'AGRICULTURE', '/n3uralia-retro/project-ecosuelo.webp', 'ecosuelolab'],
  ['06', 'Blackswan Facility Core', 'Unified operations hub for critical infrastructure, security, and environmental control.', 'FACILITIES', '/n3uralia-retro/project-blackswan.webp', 'blackswan-facility-core'],
]

function Corners({ className = '' }: { className?: string }) {
  return <span aria-hidden className={`retro-corners ${className}`}><i /><i /><i /><i /></span>
}

function RetroButton({ href, children, primary = false }: { href: string; children: React.ReactNode; primary?: boolean }) {
  return <Link href={href} className={`retro-button ${primary ? 'retro-button-primary' : ''}`}>{children}</Link>
}

function FocusItem({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const reduced = useReducedMotion()
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => setActive(Boolean(entry?.isIntersecting)), { rootMargin: '-32% 0px -32% 0px', threshold: 0.05 })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])
  return <motion.div ref={ref} className={`focus-item ${active ? 'is-active' : ''}`} animate={reduced ? undefined : { opacity: active ? 1 : .42, scale: active ? 1 : .92 }} transition={{ duration: .55, ease: 'easeOut', delay: index * .02 }}>{children}</motion.div>
}

function ExpertiseSection({ locale }: { locale: Locale }) {
  return <section className="retro-dark expertise-scan" id="expertise">
    <div className="retro-shell">
      {expertise.map((item, index) => <FocusItem key={item.id} index={index}>
        <article className="expertise-row">
          <pre className="telemetry">{item.telemetry.join('\n')}</pre>
          <div className="expertise-graphic"><Corners /><Image src={item.image} alt="" fill sizes="360px" className="object-contain" /></div>
          <div className="expertise-copy"><span>{item.no} —</span><h2>{item.title}</h2><p>{item.body}</p><RetroButton href={`/${locale}/soluciones#${item.id}`}>Learn more</RetroButton></div>
          <Corners className="right-corners" />
        </article>
      </FocusItem>)}
    </div>
  </section>
}

function OperationsSection({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState<'work' | 'approach' | null>(null)
  const panels = {
    work: ['We start by mapping the real operating system of the company: people, tools, documents, decisions, bottlenecks and repeated workflows.', 'Process mapping · data architecture · workflow automation · AI agents · dashboards · deployment and iteration'],
    approach: ['Technology only works when people adopt it. We design systems around real teams, not abstract workflows.', 'Human-centered · technically structured · operationally realistic · built for production · designed to improve'],
  }
  return <section className="retro-dark operations-grid">
    {[
      { key: 'work' as const, image: '/n3uralia-retro/operations-team.webp', eyebrow: 'Built on experience', title: 'Built around real operations.', body: 'We partner with operations, engineering, and leadership teams to understand reality and design systems that fit.', button: 'See how we work' },
      { key: 'approach' as const, image: '/n3uralia-retro/control-room.webp', eyebrow: 'Focused on people', title: 'Human-centered implementation.', body: 'Technology works when teams adopt it. We design training, support, and handoff into every engagement.', button: 'Our approach' },
    ].map((item) => <div className="operations-row" key={item.key}>
      <div className="operations-photo"><Corners /><Image src={item.image} alt="N3uralia operational team" fill sizes="(min-width: 900px) 58vw, 100vw" className="object-cover object-center" /></div>
      <div className="operations-copy"><small>{item.eyebrow}</small><h2>{item.title}</h2><p>{item.body}</p><button className="retro-button plus-button" onClick={() => setOpen(open === item.key ? null : item.key)} aria-expanded={open === item.key}>{item.button}<span>+</span></button>
        <motion.div className="expand-panel" initial={false} animate={{ height: open === item.key ? 'auto' : 0, opacity: open === item.key ? 1 : 0 }} transition={{ duration: .48 }}>
          <p>{panels[item.key][0]}</p><div className="panel-list">{panels[item.key][1]}</div><RetroButton href={`/${locale}/${item.key === 'work' ? 'diagnostico' : 'soluciones'}`}>{item.key === 'work' ? 'Start a diagnosis' : 'Explore expertise'}</RetroButton>
        </motion.div>
      </div>
    </div>)}
  </section>
}

function ProjectsSection({ locale }: { locale: Locale }) {
  return <section className="retro-light" id="projects"><div className="retro-shell project-shell"><header className="light-intro"><small>Our projects</small><h2>Real systems.<br />Real impact.</h2><p>Selected projects show N3uralia&apos;s work converting complexity into measurable operational value.</p></header><div className="project-list">
    {projects.map(([no, name, body, industry, image, anchor]) => <Link key={name} href={`/${locale}/${locale === 'es' ? 'proyectos' : 'projects'}#${anchor}`} className="project-row"><div className="project-copy"><span>{no} —</span><h3>{name}</h3><p>{body}</p><small>{industry}</small></div><div className="project-image"><Image src={image} alt={`${name} interface`} fill sizes="(min-width: 900px) 52vw, 100vw" className="object-cover object-center" /></div></Link>)}
    <RetroButton href={`/${locale}/${locale === 'es' ? 'proyectos' : 'projects'}`}>See all projects</RetroButton>
  </div></div></section>
}

export function RetroLanding({ locale }: { locale: Locale }) {
  return <main className="retro-page">
    <section className="retro-hero retro-dark" id="top"><div className="retro-shell hero-grid"><div className="hero-copy"><small>Intelligence · Automation · Execution</small><h1>Turn complexity into intelligent execution.</h1><p>N3uralia helps companies turn scattered data, workflows, documents, and AI into systems that improve visibility, control, and execution.</p><div className="button-row"><RetroButton href={`/${locale}/diagnostico`} primary>Book a diagnosis</RetroButton><RetroButton href={`/${locale}/soluciones`}>See solutions</RetroButton></div></div><div className="hero-photo"><Corners /><Image src="/n3uralia-retro/hero-operations.webp" alt="Leadership team using an operational intelligence system" fill priority sizes="(min-width: 900px) 52vw, 100vw" className="object-cover object-[52%_50%]" /><span className="scan-line" /></div></div></section>
    <ExpertiseSection locale={locale} />
    <section className="retro-dark complexity"><div className="retro-shell complexity-grid"><div><small>Built for complexity</small><h2>We work where<br />systems get hard.</h2><p>Complex environments. High stakes.<br />Real impact.</p></div><div className="landscape"><Corners /><span>N3&nbsp;&nbsp; SYS // ACTIVE</span></div></div></section>
    <OperationsSection locale={locale} />
    <ProjectsSection locale={locale} />
    <section className="retro-light products" id="products"><div className="retro-shell"><div className="products-head"><div><small>Our products</small><h2>Systems that think.<br />Workflows that scale.</h2></div><p>Our product suite powers intelligent operations across documents, processes, and decisions.</p></div><div className="product-grid">{[['Clarity','Unified visibility across data, teams, and activities.'],['MermasApp','Workflow automation for operational processes.'],['N3 Document Intelligence','Extract and understand documents at scale.'],['N3 AI Agents Layer','Deploy agents that collaborate and adapt.']].map((p,i)=><Link href={`/${locale}/${locale === 'es' ? 'productos' : 'products'}#${['clarity','mermasapp','document-intelligence','ai-agents-layer'][i]}`} className="product-card" key={p[0]}><div className="product-visual"><Image src={projects[i][4]} alt="" fill className="object-cover" /></div><h3>{p[0]} <span>+</span></h3><p>{p[1]}</p></Link>)}</div><div className="center-button"><RetroButton href={`/${locale}/${locale === 'es' ? 'productos' : 'products'}`}>Explore products</RetroButton></div></div></section>
    <section className="retro-dark method"><div className="retro-shell method-grid"><div className="method-graphic"><small>How we work</small><h2>From diagnosis<br />to execution.</h2><div className="radar"><Corners /></div></div><div className="timeline">{[['Diagnose','We uncover complexity and define what matters.'],['Architect','We design intelligent systems and operating models.'],['Build','We develop, test, and validate with precision.'],['Integrate','We connect systems, data, and people.'],['Improve','We learn, adapt, and continuously optimize.']].map((s,i)=><FocusItem key={s[0]} index={i}><div className="timeline-step"><span>0{i+1}</span><h3>{s[0]}</h3><p>{s[1]}</p></div></FocusItem>)}</div></div></section>
    <section className="retro-dark diagnosis"><div className="retro-shell diagnosis-grid"><div><small>Start with a diagnosis</small><h2>Clarity first.<br />Impact follows.</h2><p>A diagnosis gives you a clear picture of what is possible and a practical path to get there.</p>{[['Systems Assessment','We examine your systems, data, and workflows end to end.'],['Opportunity Analysis','We identify high-impact use cases AI and automation can unlock.'],['Solution Roadmap','We design the right path forward with a phased plan.'],['ROI Estimate','We quantify value, time savings, effort, and impact.']].map((d,i)=><FocusItem key={d[0]} index={i}><div className="diagnosis-item"><span>0{i+1}</span><div><h3>{d[0]}</h3><p>{d[1]}</p></div></div></FocusItem>)}</div><div className="tower"><Corners /><Image src="/n3uralia-retro/diagnosis-tower.webp" alt="N3uralia system diagnosis framework" fill sizes="(min-width: 900px) 50vw, 100vw" className="object-contain object-center" /></div></div></section>
    <section className="retro-dark final-cta"><div className="retro-shell final-grid"><div><small>Ready to transform?</small><h2>Let&apos;s build the system behind your next stage of growth.</h2><p>We work with companies facing operational complexity and help turn scattered signals into controlled execution.</p><div className="button-row"><RetroButton href={`/${locale}/diagnostico`} primary>Book a diagnosis</RetroButton><RetroButton href={`/${locale}/diagnostico#contacto`}>Contact us</RetroButton></div></div><div className="final-photo"><Image src="/n3uralia-retro/final-command.webp" alt="Operational command center" fill sizes="(min-width: 900px) 50vw, 100vw" className="object-cover object-[50%_55%]" /></div></div></section>
    <footer className="retro-footer"><div className="retro-shell footer-grid"><div><Image src="/n3uralia-brand/n3uralia-wordmark.png" alt="N3uralia" width={624} height={166} className="footer-logo" /><p>We build AI systems and intelligent workflows that help organizations operate with more clarity, speed, and control.</p></div>{[['Expertise','soluciones'],['Projects',locale === 'es' ? 'proyectos' : 'projects'],['Products',locale === 'es' ? 'productos' : 'products'],['Company','about']].map(([label,path])=><div key={path}><small>{label}</small><Link href={`/${locale}/${path}`}>{label}</Link>{path==='about'?<Link href={`/${locale}/diagnostico`}>Diagnosis</Link>:null}</div>)}<div><small>Contact</small><a href="mailto:juan@n3uralia.com">juan@n3uralia.com</a><a href="https://wa.me/56993826127">+56 9 9382 6127</a><span>Santiago, Chile · LATAM</span></div></div><div className="retro-shell footer-bottom">© {new Date().getFullYear()} N3uralia. All rights reserved.</div></footer>
  </main>
}
