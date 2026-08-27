'use client'

import Link from 'next/link'
import type { Locale } from '@/lib/get-locale'
import s from './recognition-page.module.css'

const copy = {
  en: {
    eyebrow: 'Vision · Recognition · Workflows',
    title: 'Smart Recognition Systems.',
    intro: 'Computer vision systems for wildlife, production quality, agriculture and security that connect detection, decision and operational action.',
    primary: 'Book a diagnosis', secondary: 'See use cases', signal: 'Intelligence built on real data · impact delivered in the field',
    casesEyebrow: '02 · Core use cases', casesTitle: 'Recognition across real operations.', casesIntro: 'One visual intelligence layer, adapted to each operational context and connected to the workflow around it.',
    feature: 'Wildlife Recognition · Cougar · Confidence 89%',
    cases: [
      ['Wildlife recognition','Detect cougar, pudú and conservation events in forests, parks and remote areas.'],
      ['Cattle recognition','Count livestock, register feeding events and monitor herd movement.'],
      ['Production quality recognition','Measure size, color, defects and premium quality across products and batches.'],
      ['Security recognition','Detect people, vehicles, intrusion and perimeter events in critical areas.'],
    ],
    valueEyebrow: '03 · Value chain', valueTitle: 'Detection becomes action.', valueIntro: 'N3uralia transforms raw detections into operational workflows that create records, alerts and business actions across your organization.',
    flow: [['Detect','Camera input'],['Identify / Classify','Vision model'],['Evaluate / Score','Rules + confidence'],['Register / Record','Operational record'],['Trigger Action','Alert or workflow']], trace: 'Trace & improve',
    platformEyebrow: '04 · Platform', platformTitle: 'The system behind recognition.', platformIntro: 'Recognition is one layer in a complete operational system. Capture, intelligence, rules, records and integrations work together as one architecture.',
    layers: [['01','Edge Capture','Cameras, sensors and field devices.'],['02','Vision Intelligence','Animals, people, vehicles and objects.'],['03','Logic & Scoring','Confidence thresholds, rules and decision paths.'],['04','Records & Insights','Structured events, dashboards and history.'],['05','Integrations','ERP, MES, APIs, cloud and third-party systems.']],
    workEyebrow: '05 · Way we work', workTitle: 'From diagnosis to pilot to scale.', workIntro: 'Start with one operational problem, prove it in the real environment and scale only when the workflow is reliable.',
    work: [['01','Diagnosis','Map the process, camera points, events and expected action.'],['02','Pilot','Validate recognition quality and workflow reliability in one live context.'],['03','Scale','Expand sites, models, integrations, monitoring and governance.']], talk: 'Talk to us'
  },
  es: {
    eyebrow: 'Visión · Reconocimiento · Flujos', title: 'Sistemas de reconocimiento inteligente.', intro: 'Sistemas de visión computacional para fauna, calidad de producción, agricultura y seguridad que conectan detección, decisión y acción operacional.',
    primary: 'Agendar diagnóstico', secondary: 'Ver casos de uso', signal: 'Inteligencia construida con datos reales · impacto entregado en terreno',
    casesEyebrow: '02 · Casos de uso', casesTitle: 'Reconocimiento para operaciones reales.', casesIntro: 'Una capa de inteligencia visual adaptada a cada contexto operacional y conectada al flujo que la rodea.', feature: 'Reconocimiento de fauna · Puma · Confianza 89%',
    cases: [['Reconocimiento de fauna','Detecta puma, pudú y eventos de conservación en bosques, parques y zonas remotas.'],['Reconocimiento ganadero','Cuenta animales, registra alimentación y monitorea movimiento del rebaño.'],['Reconocimiento de calidad','Mide tamaño, color, defectos y calidad premium en productos y lotes.'],['Reconocimiento de seguridad','Detecta personas, vehículos, intrusión y eventos perimetrales en áreas críticas.']],
    valueEyebrow: '03 · Cadena de valor', valueTitle: 'La detección se convierte en acción.', valueIntro: 'N3uralia transforma detecciones en flujos operacionales que crean registros, alertas y acciones de negocio.',
    flow: [['Detectar','Entrada de cámara'],['Identificar / Clasificar','Modelo de visión'],['Evaluar / Puntuar','Reglas + confianza'],['Registrar','Registro operacional'],['Activar acción','Alerta o flujo']], trace: 'Trazar y mejorar',
    platformEyebrow: '04 · Plataforma', platformTitle: 'El sistema detrás del reconocimiento.', platformIntro: 'El reconocimiento es una capa dentro de un sistema operacional completo. Captura, inteligencia, reglas, registros e integraciones trabajan como una arquitectura única.',
    layers: [['01','Captura en Edge','Cámaras, sensores y dispositivos de terreno.'],['02','Inteligencia Visual','Animales, personas, vehículos y objetos.'],['03','Lógica y Scoring','Umbrales, reglas y rutas de decisión.'],['04','Registros e Insights','Eventos estructurados, tableros e historial.'],['05','Integraciones','ERP, MES, APIs, nube y sistemas de terceros.']],
    workEyebrow: '05 · Cómo trabajamos', workTitle: 'Del diagnóstico al piloto y a escala.', workIntro: 'Partimos con un problema operacional, lo probamos en el entorno real y escalamos cuando el flujo es confiable.',
    work: [['01','Diagnóstico','Mapeamos proceso, cámaras, eventos y acción esperada.'],['02','Piloto','Validamos calidad de reconocimiento y confiabilidad en un contexto real.'],['03','Escala','Expandimos sitios, modelos, integraciones, monitoreo y gobernanza.']], talk: 'Hablar con nosotros'
  }
} as const

const images = [
  ['/recognition/wildlife.webp','Clean dark image of a Chilean cougar for wildlife recognition.'],
  ['/recognition/cattle.webp','Clean dark image of a healthy cow for cattle recognition.'],
  ['/recognition/quality-urchin.webp','Open sea urchin held in black gloves for premium production quality recognition.'],
  ['/recognition/security-human.webp','Dark perimeter security scene with a person detected as an intruder.'],
] as const

function FlowIcon({i}:{i:number}){const paths=[<><circle cx="16" cy="16" r="5"/><path d="M4 16h5M23 16h5M16 4v5M16 23v5"/></>,<><path d="M4 16s5-8 12-8 12 8 12 8-5 8-12 8S4 16 4 16z"/><circle cx="16" cy="16" r="3"/></>,<><circle cx="16" cy="16" r="10"/><path d="M16 9v7l5 3"/></>,<><rect x="7" y="5" width="18" height="22" rx="1"/><path d="M11 11h10M11 16h10M11 21h7"/></>,<><circle cx="16" cy="16" r="10"/><path d="M12 16l3 3 6-7"/></>];return <svg viewBox="0 0 32 32" aria-hidden>{paths[i]}</svg>}

export function RecognitionPage({locale}:{locale:Locale}){
  const t=copy[locale]
  return <main className={s.page}>
    <section className={s.hero}><div className={`${s.shell} ${s.heroGrid}`}>
      <div><span className={s.eyebrow}>{t.eyebrow}</span><h1 className={s.title}>{t.title}</h1><p className={s.copy}>{t.intro}</p><div className={s.actions}><Link href={`/${locale}/diagnostico`} className={`${s.button} ${s.buttonPrimary}`}>{t.primary}</Link><a href="#use-cases" className={s.button}>{t.secondary}</a></div><div className={s.signal}><span className={s.signalDot}/>{t.signal}</div></div>
      <figure className={`${s.media} ${s.heroMedia}`}><img src="/assets/recognition/hero-command-center-cougar.webp" alt="N3uralia command center detecting a cougar on a large vision intelligence screen." className={s.image}/></figure>
    </div></section>

    <section id="use-cases" className={s.section}><div className={s.shell}>
      <header className={s.head}><div><span className={s.eyebrow}>{t.casesEyebrow}</span><h2 className={s.sectionTitle}>{t.casesTitle}</h2></div><p className={s.copy}>{t.casesIntro}</p></header>
      <figure className={`${s.media} ${s.featureMedia}`}><img src="/recognition/wildlife.webp" alt="Chilean cougar shown as a wildlife recognition target." className={s.image}/><figcaption className={s.featureMeta}>{t.feature}</figcaption></figure>
      <div className={s.cards}>{t.cases.map((c,i)=><article className={s.card} key={c[0]}><div className={s.cardMedia}><img src={images[i][0]} alt={images[i][1]} className={s.image}/></div><span className={s.cardIndex}>0{i+1}</span><h3 className={s.cardTitle}>{c[0]}</h3><p className={s.cardText}>{c[1]}</p></article>)}</div>
    </div></section>

    <section className={`${s.section} ${s.value}`}><div className={s.shell}><header className={s.head}><div><span className={s.eyebrow}>{t.valueEyebrow}</span><h2 className={s.sectionTitle}>{t.valueTitle}</h2></div><p className={s.copy}>{t.valueIntro}</p></header><div className={s.flow}><div className={s.flowLine}/>{t.flow.map((f,i)=><div className={s.flowStep} key={f[0]}><div className={s.flowIcon}><FlowIcon i={i}/></div><span>0{i+1}</span><h3 className={s.stepTitle}>{f[0]}</h3><p>{f[1]}</p></div>)}<div className={s.feedback}>{t.trace}</div></div></div></section>

    <section className={s.section}><div className={`${s.shell} ${s.platformGrid}`}><div><span className={s.eyebrow}>{t.platformEyebrow}</span><h2 className={s.sectionTitle}>{t.platformTitle}</h2><p className={s.copy}>{t.platformIntro}</p><div className={s.layerList}>{t.layers.map(l=><div className={s.layerItem} key={l[0]}><span className={s.layerNo}>{l[0]}</span><div><b>{l[1]}</b><p>{l[2]}</p></div></div>)}</div></div><div className={s.stack} aria-label="Layered architecture showing edge capture, vision intelligence, scoring, records and integrations."><div className={s.capture}/>{t.layers.map((l,i)=><div className={s.layer} key={l[0]}><span className={s.layerIcon}>{['⌁','◉','◇','▤','↔'][i]}</span><span className={s.layerName}>{l[1]}</span><small>{l[0]}</small></div>)}</div></div></section>

    <section className={`${s.section} ${s.final}`}><div className={`${s.shell} ${s.finalGrid}`}><div><span className={s.eyebrow}>{t.workEyebrow}</span><h2 className={s.sectionTitle}>{t.workTitle}</h2><p className={s.copy}>{t.workIntro}</p><div className={s.steps}>{t.work.map(w=><div className={s.workStep} key={w[0]}><span className={s.workNo}>{w[0]}</span><div><b>{w[1]}</b><p>{w[2]}</p></div></div>)}</div><div className={s.actions}><Link href={`/${locale}/diagnostico`} className={`${s.button} ${s.buttonPrimary}`}>{t.primary}</Link><Link href={`/${locale}/contact`} className={s.button}>{t.talk}</Link></div><div className={s.contact}><a href="mailto:juan@n3uralia.com">juan@n3uralia.com</a><a href="https://wa.me/56993826127">+56 9 9382 6127</a><span>Santiago, Chile · LATAM</span></div></div><figure className={`${s.media} ${s.finalMedia}`}><img src="/n3uralia-brand/letsbuildthesystembehind.png" alt="Operational command center monitoring recognition systems at scale." className={s.image}/></figure></div></section>
  </main>
}

export function recognitionHref(locale:Locale){return locale==='es'?'/es/reconocimiento':'/en/recognition'}
