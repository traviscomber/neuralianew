'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { Locale } from '@/lib/get-locale'

type Text = {
  hero: [string, string, string, string, string]
  expertise: [string, string, string][]
  learn: string
  complexity: [string, string, string]
  operations: [string, string, string, string, string, string][]
  projects: [string, string, string, string]
  products: [string, string, string, string]
  method: [string, string, string, string, string, string, string]
  diagnosis: [string, string, string, string, string]
  final: [string, string, string, string, string]
  footer: [string, string, string, string, string, string]
}

const text: Record<Locale, Text> = {
  es: {
    hero: [
      'Inteligencia · Automatización · Ejecución',
      'Convierte la complejidad en ejecución inteligente.',
      'N3uralia convierte datos, flujos, documentos e IA dispersos en sistemas que mejoran visibilidad, control y ejecución.',
      'Agendar diagnóstico',
      'Ver soluciones',
    ],
    expertise: [
      [
        'Inteligencia operacional',
        'Unifica datos y contexto para revelar lo importante y actuar con claridad.',
        '/n3uralia-retro/operational-stack.webp',
      ],
      [
        'Automatización de flujos',
        'Diseña, automatiza y gobierna procesos que escalan con precisión.',
        '/n3uralia-retro/workflow-core.webp',
      ],
      [
        'Sistemas de IA en producción',
        'Construye sistemas seguros y observables que generan impacto real.',
        '/n3uralia-retro/production-core.webp',
      ],
    ],
    learn: 'Conocer más',
    complexity: [
      'Diseñado para la complejidad',
      'Trabajamos donde los sistemas se vuelven difíciles.',
      'Entornos complejos. Alto impacto. Ejecución real.',
    ],
    operations: [
      [
        'Experiencia operacional',
        'Construido alrededor de operaciones reales.',
        'Trabajamos con equipos de operaciones, ingeniería y liderazgo para diseñar sistemas que encajen.',
        'Ver cómo trabajamos',
        'Mapeamos personas, herramientas, documentos, decisiones, cuellos de botella y flujos repetitivos.',
        'Mapeo de procesos · arquitectura de datos · automatización · agentes IA · tableros · despliegue',
      ],
      [
        'Centrado en personas',
        'Implementación centrada en las personas.',
        'Diseñamos adopción, capacitación, soporte y transferencia dentro de cada proyecto.',
        'Nuestro enfoque',
        'La tecnología funciona cuando las personas la adoptan y pueden operarla.',
        'Centrado en personas · técnicamente estructurado · realista · productivo · medible',
      ],
    ],
    projects: [
      'Nuestros proyectos',
      'Sistemas reales. Impacto real.',
      'Proyectos seleccionados que convierten complejidad en valor operacional medible.',
      'Ver todos los proyectos',
    ],
    products: [
      'Nuestros productos',
      'Sistemas que piensan. Flujos que escalan.',
      'Productos para operaciones inteligentes en documentos, procesos y decisiones.',
      'Explorar productos',
    ],
    method: [
      'Cómo trabajamos',
      'Del diagnóstico a la ejecución.',
      'Diagnosticar',
      'Arquitectar',
      'Construir',
      'Integrar',
      'Mejorar',
    ],
    diagnosis: [
      'Comienza con un diagnóstico',
      'Claridad primero. El impacto sigue.',
      'Un diagnóstico entrega una visión clara de lo posible y una ruta práctica.',
      'Agendar diagnóstico',
      'Contactarnos',
    ],
    final: [
      '¿Listos para transformar?',
      'Construyamos el sistema detrás de tu próxima etapa de crecimiento.',
      'Ayudamos a convertir señales dispersas en ejecución controlada.',
      'Agendar diagnóstico',
      'Contactarnos',
    ],
    footer: [
      'Construimos sistemas de IA y flujos inteligentes para operar con más claridad, velocidad y control.',
      'Soluciones',
      'Proyectos',
      'Productos',
      'Empresa',
      'Todos los derechos reservados.',
    ],
  },
  en: {
    hero: [
      'Intelligence · Automation · Execution',
      'Turn complexity into intelligent execution.',
      'N3uralia turns scattered data, workflows, documents and AI into systems that improve visibility, control and execution.',
      'Book a diagnosis',
      'See solutions',
    ],
    expertise: [
      [
        'Operational Intelligence',
        'Unify data and context to reveal what matters and act with clarity.',
        '/n3uralia-retro/operational-stack.webp',
      ],
      [
        'Workflow Automation',
        'Design, automate and govern workflows that scale with precision.',
        '/n3uralia-retro/workflow-core.webp',
      ],
      [
        'Production AI Systems',
        'Build secure, observable systems that deliver real impact.',
        '/n3uralia-retro/production-core.webp',
      ],
    ],
    learn: 'Learn more',
    complexity: [
      'Built for complexity',
      'We work where systems get hard.',
      'Complex environments. High stakes. Real impact.',
    ],
    operations: [
      [
        'Built on experience',
        'Built around real operations.',
        'We partner with operations, engineering and leadership teams to design systems that fit.',
        'See how we work',
        'We map people, tools, documents, decisions, bottlenecks and repeated workflows.',
        'Process mapping · data architecture · automation · AI agents · dashboards · deployment',
      ],
      [
        'Focused on people',
        'Human-centered implementation.',
        'We design adoption, training, support and handoff into every engagement.',
        'Our approach',
        'Technology works when people adopt it and can operate it.',
        'Human-centered · technically structured · realistic · production-ready · measurable',
      ],
    ],
    projects: [
      'Our projects',
      'Real systems. Real impact.',
      'Selected projects converting complexity into measurable operational value.',
      'See all projects',
    ],
    products: [
      'Our products',
      'Systems that think. Workflows that scale.',
      'Products powering intelligent operations across documents, processes and decisions.',
      'Explore products',
    ],
    method: [
      'How we work',
      'From diagnosis to execution.',
      'Diagnose',
      'Architect',
      'Build',
      'Integrate',
      'Improve',
    ],
    diagnosis: [
      'Start with a diagnosis',
      'Clarity first. Impact follows.',
      'A diagnosis gives you a clear view of what is possible and a practical path forward.',
      'Book a diagnosis',
      'Contact us',
    ],
    final: [
      'Ready to transform?',
      'Let’s build the system behind your next stage of growth.',
      'We turn scattered signals into controlled execution.',
      'Book a diagnosis',
      'Contact us',
    ],
    footer: [
      'We build AI systems and intelligent workflows for more clarity, speed and control.',
      'Expertise',
      'Projects',
      'Products',
      'Company',
      'All rights reserved.',
    ],
  },
}

const projects = [
  {
    name: 'Motil',
    sector: 'Transport operations',
    image: '/n3uralia-retro/project-motil.webp',
    slug: 'motil',
    aspectRatio: '505 / 198',
  },
  {
    name: 'DocuFleet / LABBE',
    sector: 'Transportation',
    image: '/n3uralia-retro/project-docufleet.webp',
    slug: 'docufleet-labbe',
    aspectRatio: '505 / 198',
  },
  {
    name: 'SegurIA',
    sector: 'Security',
    image: '/n3uralia-retro/project-seguria.webp',
    slug: 'seguria',
    aspectRatio: '505 / 198',
  },
  {
    name: 'Sur-Realista',
    sector: 'Real estate',
    image: '/n3uralia-retro/project-sur-realista.webp',
    slug: 'sur-realista',
    aspectRatio: '570 / 177',
  },
  {
    name: 'Ecosuelolab',
    sector: 'Agriculture',
    image: '/n3uralia-retro/project-ecosuelo.webp',
    slug: 'ecosuelolab',
    aspectRatio: '570 / 166',
  },
  {
    name: 'Blackswan Facility Core',
    sector: 'Facilities',
    image: '/n3uralia-retro/project-blackswan.webp',
    slug: 'blackswan-facility-core',
    aspectRatio: '570 / 166',
  },
]

function Corners() {
  return (
    <span aria-hidden className="retro-corners">
      <i />
      <i />
      <i />
      <i />
    </span>
  )
}
function Button({
  href,
  children,
  primary = false,
}: {
  href: string
  children: React.ReactNode
  primary?: boolean
}) {
  return (
    <Link href={href} className={`retro-button ${primary ? 'retro-button-primary' : ''}`}>
      {children}
    </Link>
  )
}
function Focus({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const reduced = useReducedMotion()
  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => setActive(Boolean(entry?.isIntersecting)),
      { rootMargin: '-30% 0px', threshold: 0.05 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])
  return (
    <motion.div
      ref={ref}
      className={`focus-item ${active ? 'is-active' : ''}`}
      animate={reduced ? undefined : { opacity: active ? 1 : 0.45, scale: active ? 1 : 0.94 }}
      transition={{ duration: 0.45, delay: index * 0.02 }}
    >
      {children}
    </motion.div>
  )
}

export function RetroLanding({ locale }: { locale: Locale }) {
  const t = text[locale]
  const [open, setOpen] = useState<number | null>(null)
  const projectPath = locale === 'es' ? 'proyectos' : 'projects'
  const productPath = locale === 'es' ? 'productos' : 'products'
  return (
    <main className="retro-page">
      <section className="retro-hero retro-dark">
        <div className="retro-shell hero-grid">
          <div className="hero-copy">
            <small>{t.hero[0]}</small>
            <h1>{t.hero[1]}</h1>
            <p>{t.hero[2]}</p>
            <div className="button-row">
              <Button href={`/${locale}/contact`} primary>
                {t.hero[3]}
              </Button>
              <Button href={`/${locale}/soluciones`}>{t.hero[4]}</Button>
            </div>
          </div>
          <div className="hero-photo">
            <Corners />
            <Image
              src="/n3uralia-retro/hero-operations.webp"
              alt="Operational intelligence system"
              fill
              priority
              quality={95}
              sizes="(min-width:900px) 52vw,100vw"
              className="object-cover object-center"
            />
            <span className="scan-line" />
          </div>
        </div>
      </section>
      <section className="retro-dark expertise-scan">
        <div className="retro-shell">
          {t.expertise.map((item, i) => (
            <Focus key={item[0]} index={i}>
              <article className="expertise-row">
                <pre className="telemetry">{`SYS 0${i + 1}\nSTATUS ACTIVE\nSYNCED`}</pre>
                <div className="expertise-graphic">
                  <Corners />
                  <Image src={item[2]} alt="" fill sizes="360px" className="object-contain" />
                </div>
                <div className="expertise-copy">
                  <span>0{i + 1} —</span>
                  <h2>{item[0]}</h2>
                  <p>{item[1]}</p>
                  <Button href={`/${locale}/soluciones`}>{t.learn}</Button>
                </div>
              </article>
            </Focus>
          ))}
        </div>
      </section>
      <section className="retro-dark complexity">
        <div className="retro-shell complexity-grid">
          <div>
            <small>{t.complexity[0]}</small>
            <h2>{t.complexity[1]}</h2>
            <p>{t.complexity[2]}</p>
          </div>
          <div className="landscape">
            <Corners />
            <Image
              src="/n3uralia-retro/operational-stack.webp"
              alt="Operational data architecture diagram"
              fill
              sizes="(min-width:900px) 52vw,100vw"
              className="object-contain"
            />
            <span>N3 SYS // ACTIVE</span>
          </div>
        </div>
      </section>
      <section className="retro-dark operations-grid">
        {t.operations.map((item, i) => (
          <div className="operations-row" key={item[0]}>
            <div className="operations-photo">
              <Corners />
              <Image
                src={
                  i ? '/n3uralia-retro/control-room.webp' : '/n3uralia-retro/operations-team.webp'
                }
                alt="N3uralia operations"
                fill
                quality={95}
                sizes="(min-width:900px) 58vw,100vw"
                className="object-cover object-center"
              />
            </div>
            <div className="operations-copy">
              <small>{item[0]}</small>
              <h2>{item[1]}</h2>
              <p>{item[2]}</p>
              <button
                className="retro-button plus-button"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                {item[3]}
                <span>+</span>
              </button>
              <motion.div
                className="expand-panel"
                initial={false}
                animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }}
              >
                <p>{item[4]}</p>
                <div className="panel-list">{item[5]}</div>
                <Button href={`/${locale}/${i ? 'soluciones' : 'contact'}`}>
                  {i ? t.learn : t.hero[3]}
                </Button>
              </motion.div>
            </div>
          </div>
        ))}
      </section>
      <section className="retro-light">
        <div className="retro-shell project-shell">
          <header className="light-intro">
            <small>{t.projects[0]}</small>
            <h2>{t.projects[1]}</h2>
            <p>{t.projects[2]}</p>
          </header>
          <div className="project-list">
            {projects.map((project, i) => (
              <Link
                key={project.name}
                href={`/${locale}/${projectPath}#${project.slug}`}
                className="project-row"
              >
                <div className="project-copy">
                  <span>0{i + 1} —</span>
                  <h3>{project.name}</h3>
                  <small>{project.sector}</small>
                </div>
                <div className="project-image" style={{ aspectRatio: project.aspectRatio }}>
                  <Image
                    src={project.image}
                    alt={`${project.name} interface`}
                    fill
                    sizes="(min-width:900px) 52vw,100vw"
                    className="object-contain"
                  />
                </div>
              </Link>
            ))}
            <Button href={`/${locale}/${projectPath}`}>{t.projects[3]}</Button>
          </div>
        </div>
      </section>
      <section className="retro-light products">
        <div className="retro-shell">
          <div className="products-head">
            <div>
              <small>{t.products[0]}</small>
              <h2>{t.products[1]}</h2>
            </div>
            <p>{t.products[2]}</p>
          </div>
          <div className="center-button">
            <Button href={`/${locale}/${productPath}`}>{t.products[3]}</Button>
          </div>
        </div>
      </section>
      <section className="retro-dark method">
        <div className="retro-shell method-grid">
          <div>
            <small>{t.method[0]}</small>
            <h2>{t.method[1]}</h2>
            <div className="radar">
              <Corners />
              <Image
                src="/n3uralia-retro/workflow-core.webp"
                alt="Workflow orchestration diagram"
                fill
                sizes="(min-width:900px) 48vw,100vw"
                className="object-contain"
              />
            </div>
          </div>
          <div className="timeline">
            {t.method.slice(2).map((s, i) => (
              <Focus key={s} index={i}>
                <div className="timeline-step">
                  <span>0{i + 1}</span>
                  <h3>{s}</h3>
                </div>
              </Focus>
            ))}
          </div>
        </div>
      </section>
      <section className="retro-dark diagnosis">
        <div className="retro-shell diagnosis-grid">
          <div>
            <small>{t.diagnosis[0]}</small>
            <h2>{t.diagnosis[1]}</h2>
            <p>{t.diagnosis[2]}</p>
            <div className="button-row">
              <Button href={`/${locale}/contact`} primary>
                {t.diagnosis[3]}
              </Button>
              <Button href={`/${locale}/contact`}>{t.diagnosis[4]}</Button>
            </div>
          </div>
          <div className="tower">
            <Corners />
            <Image
              src="/n3uralia-retro/diagnosis-tower.webp"
              alt="Diagnosis framework"
              fill
              quality={95}
              sizes="(min-width:900px) 52vw,100vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>
      <section className="retro-dark final-cta">
        <div className="retro-shell final-grid">
          <div>
            <small>{t.final[0]}</small>
            <h2>{t.final[1]}</h2>
            <p>{t.final[2]}</p>
            <div className="button-row">
              <Button href={`/${locale}/contact`} primary>
                {t.final[3]}
              </Button>
              <Button href={`/${locale}/contact`}>{t.final[4]}</Button>
            </div>
          </div>
          <div className="final-photo">
            <Image
              src="/n3uralia-retro/final-command.webp"
              alt="Operational command center"
              fill
              quality={95}
              sizes="(min-width:900px) 52vw,100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>
      <footer className="retro-footer">
        <div className="retro-shell footer-grid">
          <div>
            <Image
              src="/n3uralia-brand/n3uralia-wordmark-new.webp"
              alt="N3uralia"
              width={900}
              height={235}
              className="footer-logo"
            />
            <p>{t.footer[0]}</p>
          </div>
          {[
            [t.footer[1], 'soluciones'],
            [t.footer[2], projectPath],
            [t.footer[3], productPath],
            [t.footer[4], 'about'],
          ].map(([label, path]) => (
            <div key={path}>
              <small>{label}</small>
              <Link href={`/${locale}/${path}`}>{label}</Link>
            </div>
          ))}
          <div>
            <small>Contact</small>
            <a href="mailto:juan@n3uralia.com">juan@n3uralia.com</a>
            <a href="https://wa.me/56993826127">+56 9 9382 6127</a>
          </div>
        </div>
        <div className="retro-shell footer-bottom">
          © {new Date().getFullYear()} N3uralia. {t.footer[5]}
        </div>
      </footer>
    </main>
  )
}
