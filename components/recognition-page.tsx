'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { Locale } from '@/lib/get-locale'

type GlyphName = 'camera' | 'recognition' | 'record' | 'alert' | 'action' | 'edge' | 'vision' | 'logic' | 'insights' | 'integrations' | 'diagnosis' | 'pilot' | 'scale'

function Glyph({ name, className = '' }: { name: GlyphName; className?: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.35, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  if (name === 'camera') return <svg viewBox="0 0 32 32" className={className} aria-hidden><rect x="4" y="9" width="18" height="14" rx="1" {...common}/><path d="M22 13l6-3v12l-6-3zM9 9l2-4h6l2 4" {...common}/><circle cx="13" cy="16" r="4" {...common}/></svg>
  if (name === 'recognition') return <svg viewBox="0 0 32 32" className={className} aria-hidden><path d="M6 11V6h5M21 6h5v5M26 21v5h-5M11 26H6v-5" {...common}/><circle cx="16" cy="16" r="6" {...common}/><path d="M13 16h6M16 13v6" {...common}/></svg>
  if (name === 'record') return <svg viewBox="0 0 32 32" className={className} aria-hidden><ellipse cx="16" cy="8" rx="9" ry="4" {...common}/><path d="M7 8v8c0 2.2 4 4 9 4s9-1.8 9-4V8M7 16v8c0 2.2 4 4 9 4s9-1.8 9-4v-8" {...common}/></svg>
  if (name === 'alert') return <svg viewBox="0 0 32 32" className={className} aria-hidden><path d="M9 23h14l-2-3v-6a5 5 0 00-10 0v6zM14 27h4" {...common}/><path d="M16 5V3M25 9l2-2M7 9L5 7" {...common}/></svg>
  if (name === 'action') return <svg viewBox="0 0 32 32" className={className} aria-hidden><circle cx="16" cy="16" r="10" {...common}/><circle cx="16" cy="16" r="4" {...common}/><path d="M16 2v5M30 16h-5M16 30v-5M2 16h5M20 12l7-7" {...common}/><path d="M23 5h4v4" {...common}/></svg>
  if (name === 'edge') return <svg viewBox="0 0 32 32" className={className} aria-hidden><path d="M5 24h22M8 21V9h16v12" {...common}/><circle cx="16" cy="15" r="3" {...common}/><path d="M4 7l5-4M28 7l-5-4" {...common}/></svg>
  if (name === 'vision') return <svg viewBox="0 0 32 32" className={className} aria-hidden><path d="M3 16s5-8 13-8 13 8 13 8-5 8-13 8S3 16 3 16z" {...common}/><circle cx="16" cy="16" r="4" {...common}/><path d="M16 5V2M6 8L4 5M26 8l2-3" {...common}/></svg>
  if (name === 'logic') return <svg viewBox="0 0 32 32" className={className} aria-hidden><circle cx="7" cy="8" r="3" {...common}/><circle cx="25" cy="8" r="3" {...common}/><circle cx="16" cy="24" r="3" {...common}/><path d="M10 8h12M9 11l5 10M23 11l-5 10" {...common}/></svg>
  if (name === 'insights') return <svg viewBox="0 0 32 32" className={className} aria-hidden><rect x="4" y="5" width="24" height="22" {...common}/><path d="M8 22l5-6 4 3 7-9M8 10h6" {...common}/><circle cx="24" cy="10" r="1" fill="currentColor"/></svg>
  if (name === 'integrations') return <svg viewBox="0 0 32 32" className={className} aria-hidden><circle cx="16" cy="16" r="4" {...common}/><circle cx="6" cy="7" r="3" {...common}/><circle cx="26" cy="7" r="3" {...common}/><circle cx="6" cy="25" r="3" {...common}/><circle cx="26" cy="25" r="3" {...common}/><path d="M9 9l4 4M23 9l-4 4M9 23l4-4M23 23l-4-4" {...common}/></svg>
  if (name === 'diagnosis') return <svg viewBox="0 0 32 32" className={className} aria-hidden><circle cx="14" cy="14" r="8" {...common}/><path d="M20 20l7 7M10 14h8M14 10v8" {...common}/></svg>
  if (name === 'pilot') return <svg viewBox="0 0 32 32" className={className} aria-hidden><path d="M16 4l5 7-5 17-5-17zM11 11H7l-3 6h8M21 11h4l3 6h-8" {...common}/></svg>
  return <svg viewBox="0 0 32 32" className={className} aria-hidden><path d="M4 24l7-7 5 4 12-14M21 7h7v7" {...common}/><path d="M4 28h24" {...common}/></svg>
}

const copy = {
  en: {
    eyebrow: 'Vision · Recognition · Workflows',
    title: 'Smart Recognition Systems.',
    intro: 'Computer vision systems for wildlife, production quality, agriculture and security that turn visual detections into trusted operational workflows.',
    primary: 'Book a diagnosis',
    secondary: 'See use cases',
    heroSignal: 'Camera → Recognition → Record → Alert → Action',
    casesEyebrow: '02 · Core use cases',
    casesTitle: 'Recognition across real operations.',
    cases: [
      ['Wildlife recognition', 'Detect cougar, pudú and conservation events in forests, parks and remote areas.'],
      ['Cattle recognition', 'Count livestock, register feeding events and monitor herd movement.'],
      ['Production quality recognition', 'Measure size, color, defects and premium quality across products and batches.'],
      ['Security recognition', 'Detect people, vehicles, intrusion and perimeter events in critical areas.'],
    ],
    valueEyebrow: '03 · Value chain',
    valueTitle: 'Detection becomes action.',
    valueText: 'A recognition system is useful only when a detection becomes a reliable record and the right operational response.',
    flow: [
      ['Detect', 'Camera input'], ['Identify / Classify', 'Vision model'], ['Evaluate / Score', 'Rules + confidence'], ['Register / Record', 'Operational record'], ['Trigger Action', 'Alert or workflow'],
    ],
    trace: 'Trace & improve',
    platformEyebrow: '04 · Platform',
    platformTitle: 'The system behind recognition.',
    platformText: 'The visual model is only one layer. N3uralia connects capture, intelligence, decision logic, records and integrations into one operational architecture.',
    layers: [
      ['01', 'Edge Capture', 'Cameras, sensors and field devices.'],
      ['02', 'Vision Intelligence', 'Classification of animals, people, vehicles and objects.'],
      ['03', 'Logic & Scoring', 'Confidence thresholds, rules and decision paths.'],
      ['04', 'Records & Insights', 'Structured events, dashboards and measurable history.'],
      ['05', 'Integrations', 'ERP, MES, APIs, cloud and third-party systems.'],
    ],
    workEyebrow: '05 · Way we work',
    workTitle: 'From diagnosis to pilot to scale.',
    workText: 'Start with one operational problem, validate it in the real environment, then scale the system with controls and observability.',
    work: [
      ['01', 'Diagnosis', 'Map cameras, events, constraints and the action that should follow a detection.'],
      ['02', 'Pilot', 'Validate recognition quality and workflow reliability in one real operating context.'],
      ['03', 'Scale', 'Expand sites, models, integrations, monitoring and governance.'],
    ],
    talk: 'Talk to us',
  },
  es: {
    eyebrow: 'Visión · Reconocimiento · Flujos',
    title: 'Sistemas de reconocimiento inteligente.',
    intro: 'Sistemas de visión computacional para fauna, calidad de producción, agricultura y seguridad que convierten detecciones visuales en flujos operacionales confiables.',
    primary: 'Agendar diagnóstico',
    secondary: 'Ver casos de uso',
    heroSignal: 'Cámara → Reconocimiento → Registro → Alerta → Acción',
    casesEyebrow: '02 · Casos de uso',
    casesTitle: 'Reconocimiento para operaciones reales.',
    cases: [
      ['Reconocimiento de fauna', 'Detecta puma, pudú y eventos de conservación en bosques, parques y zonas remotas.'],
      ['Reconocimiento ganadero', 'Cuenta animales, registra alimentación y monitorea movimiento del rebaño.'],
      ['Reconocimiento de calidad', 'Mide tamaño, color, defectos y calidad premium en productos y lotes.'],
      ['Reconocimiento de seguridad', 'Detecta personas, vehículos, intrusión y eventos perimetrales en áreas críticas.'],
    ],
    valueEyebrow: '03 · Cadena de valor',
    valueTitle: 'La detección se convierte en acción.',
    valueText: 'Un sistema de reconocimiento genera valor cuando una detección se convierte en un registro confiable y en la respuesta operacional correcta.',
    flow: [
      ['Detectar', 'Entrada de cámara'], ['Identificar / Clasificar', 'Modelo de visión'], ['Evaluar / Puntuar', 'Reglas + confianza'], ['Registrar', 'Registro operacional'], ['Activar acción', 'Alerta o flujo'],
    ],
    trace: 'Trazar y mejorar',
    platformEyebrow: '04 · Plataforma',
    platformTitle: 'El sistema detrás del reconocimiento.',
    platformText: 'El modelo visual es solo una capa. N3uralia conecta captura, inteligencia, lógica de decisión, registros e integraciones en una arquitectura operacional.',
    layers: [
      ['01', 'Captura en Edge', 'Cámaras, sensores y dispositivos de terreno.'],
      ['02', 'Inteligencia Visual', 'Clasificación de animales, personas, vehículos y objetos.'],
      ['03', 'Lógica y Scoring', 'Umbrales, reglas y rutas de decisión.'],
      ['04', 'Registros e Insights', 'Eventos estructurados, tableros e historial medible.'],
      ['05', 'Integraciones', 'ERP, MES, APIs, nube y sistemas de terceros.'],
    ],
    workEyebrow: '05 · Cómo trabajamos',
    workTitle: 'Del diagnóstico al piloto y a escala.',
    workText: 'Partimos con un problema operacional, lo validamos en el entorno real y luego escalamos el sistema con controles y observabilidad.',
    work: [
      ['01', 'Diagnóstico', 'Mapeamos cámaras, eventos, restricciones y la acción que debe seguir a cada detección.'],
      ['02', 'Piloto', 'Validamos calidad de reconocimiento y confiabilidad del flujo en un contexto operacional real.'],
      ['03', 'Escala', 'Expandimos sitios, modelos, integraciones, monitoreo y gobernanza.'],
    ],
    talk: 'Hablar con nosotros',
  },
} as const

const useCaseImages = [
  { src: '/recognition/wildlife.webp', alt: 'Clean dark image of a Chilean cougar for wildlife recognition.', position: '50% 44%' },
  { src: '/recognition/cattle.webp', alt: 'Clean dark image of a healthy cow for cattle recognition.', position: '50% 42%' },
  { src: '/recognition/quality-urchin.webp', alt: 'Open sea urchin held in black gloves for premium production quality recognition.', position: '50% 50%' },
  { src: '/recognition/security-human.webp', alt: 'Dark perimeter security scene with a person detected as an intruder.', position: '50% 50%' },
]

const flowGlyphs: GlyphName[] = ['camera', 'recognition', 'logic', 'record', 'action']
const platformGlyphs: GlyphName[] = ['edge', 'vision', 'logic', 'insights', 'integrations']
const workGlyphs: GlyphName[] = ['diagnosis', 'pilot', 'scale']

export function RecognitionPage({ locale }: { locale: Locale }) {
  const t = copy[locale]
  return <main className="recognition-page">
    <section className="recognition-hero">
      <div className="recognition-shell recognition-hero-grid">
        <div className="recognition-copy">
          <small>{t.eyebrow}</small>
          <h1>{t.title}</h1>
          <p>{t.intro}</p>
          <div className="recognition-actions">
            <Link href={`/${locale}/diagnostico`} className="recognition-button recognition-button-primary">{t.primary}</Link>
            <a href="#use-cases" className="recognition-button">{t.secondary}</a>
          </div>
          <div className="recognition-hero-flow" aria-label={t.heroSignal}>
            {flowGlyphs.map((glyph, index) => <div key={glyph} className="recognition-hero-flow-step"><Glyph name={glyph}/>{index < flowGlyphs.length - 1 && <span aria-hidden>→</span>}</div>)}
          </div>
          <p className="recognition-hero-flow-label">{t.heroSignal}</p>
        </div>
        <figure className="recognition-hero-media">
          <Image src="/n3uralia-brand/letsbuildthesystembehind.png" alt="N3uralia command center detecting a cougar on a large vision intelligence screen." fill priority sizes="(min-width: 960px) 56vw, 100vw" className="recognition-cover"/>
          <div className="recognition-hero-cougar" aria-hidden>
            <Image src="/recognition/wildlife.webp" alt="" fill sizes="360px" className="recognition-cover"/>
          </div>
          <span className="recognition-scan" aria-hidden/>
        </figure>
      </div>
    </section>

    <section id="use-cases" className="recognition-section recognition-cases">
      <div className="recognition-shell">
        <header className="recognition-section-head"><small>{t.casesEyebrow}</small><h2>{t.casesTitle}</h2></header>
        <div className="recognition-usecases">
          {t.cases.map((item, index) => {
            const title = item[0]
            const description = item[1]
            return <article className="recognition-card" key={title}>
              <div className={`recognition-card-image recognition-card-image-${index + 1}`}>
                <Image src={useCaseImages[index].src} alt={useCaseImages[index].alt} fill loading="lazy" sizes="(min-width: 1000px) 25vw, (min-width: 620px) 50vw, 100vw" className="recognition-cover" style={{ objectPosition: useCaseImages[index].position }}/>
              </div>
              <span className="recognition-card-index">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          })}
        </div>
      </div>
    </section>

    <section className="recognition-section recognition-value">
      <div className="recognition-shell">
        <header className="recognition-section-head recognition-split"><div><small>{t.valueEyebrow}</small><h2>{t.valueTitle}</h2></div><p>{t.valueText}</p></header>
        <figure className="recognition-value-graphic" aria-label="Recognition workflow from detection to classification, scoring, record and action.">
          <div className="recognition-flow-line" aria-hidden/>
          {t.flow.map((item, index) => {
            const label = item[0]
            const detail = item[1]
            return <div className="recognition-flow-node" key={label}>
              <div className="recognition-flow-icon"><Glyph name={flowGlyphs[index]}/></div>
              <span>0{index + 1}</span>
              <h3>{label}</h3>
              <p>{detail}</p>
            </div>
          })}
          <div className="recognition-feedback" aria-hidden><span>↶</span><b>{t.trace}</b><span>↷</span></div>
        </figure>
      </div>
    </section>

    <section className="recognition-section recognition-platform">
      <div className="recognition-shell recognition-platform-layout">
        <div className="recognition-platform-intro"><small>{t.platformEyebrow}</small><h2>{t.platformTitle}</h2><p>{t.platformText}</p></div>
        <figure className="recognition-platform-graphic" aria-label="Layered architecture showing edge capture, vision intelligence, scoring, records and integrations.">
          <div className="recognition-platform-rays" aria-hidden/>
          {t.layers.map((item, index) => {
            const number = item[0]
            const label = item[1]
            return <div className={`recognition-platform-layer recognition-platform-layer-${index + 1}`} key={number}>
              <Glyph name={platformGlyphs[index]}/><span>{label}</span><i>{number}</i>
            </div>
          })}
        </figure>
        <div className="recognition-platform-list">
          {t.layers.map((item, index) => {
            const number = item[0]
            const label = item[1]
            const description = item[2]
            return <div className="recognition-platform-item" key={number}>
              <Glyph name={platformGlyphs[index]}/><span>{number}</span><div><h3>{label}</h3><p>{description}</p></div>
            </div>
          })}
        </div>
      </div>
    </section>

    <section className="recognition-section recognition-work">
      <div className="recognition-shell recognition-work-grid">
        <div className="recognition-work-copy">
          <small>{t.workEyebrow}</small><h2>{t.workTitle}</h2><p>{t.workText}</p>
          <div className="recognition-work-steps">
            {t.work.map((item, index) => {
              const number = item[0]
              const label = item[1]
              const description = item[2]
              return <article key={number}>
                <Glyph name={workGlyphs[index]}/><span>{number}</span><div><h3>{label}</h3><p>{description}</p></div>
              </article>
            })}
          </div>
          <div className="recognition-actions"><Link href={`/${locale}/diagnostico`} className="recognition-button recognition-button-primary">{t.primary}</Link><Link href={`/${locale}/contact`} className="recognition-button">{t.talk}</Link></div>
          <address className="recognition-contact"><a href="mailto:juan@n3uralia.com">juan@n3uralia.com</a><a href="https://wa.me/56993826127">+56 9 9382 6127</a><span>Santiago, Chile · LATAM</span></address>
        </div>
        <figure className="recognition-work-media">
          <Image src="/n3uralia-brand/letsbuildthesystembehind.png" alt="Operational command center monitoring recognition systems at scale." fill loading="lazy" sizes="(min-width: 960px) 52vw, 100vw" className="recognition-cover"/>
          <div className="recognition-work-gridlines" aria-hidden/>
        </figure>
      </div>
    </section>
  </main>
}

export function recognitionHref(locale: Locale) { return locale === 'es' ? '/es/reconocimiento' : '/en/recognition' }
