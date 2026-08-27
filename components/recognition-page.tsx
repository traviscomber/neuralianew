'use client'

import Link from 'next/link'
import type { Locale } from '@/lib/get-locale'
import s from './recognition-page.module.css'

const copy = {
  en: {
    eyebrow:'Vision · Recognition · Workflows', title:'Smart Recognition Systems.', intro:'Computer vision systems for wildlife, production quality, agriculture and security. We connect detection with operations so you can act with confidence, at scale.', primary:'Book a diagnosis', secondary:'See use cases', signal:'Intelligence built on real data · impact delivered in the field',
    casesEyebrow:'02 · Core use cases', casesTitle:'Recognition across real operations.', casesIntro:'One visual intelligence layer, adapted to each operational context and connected to the workflow around it.',
    cases:[['Wildlife recognition','Identify and monitor wildlife in natural habitats.'],['Agricultural recognition','Detect animals, health indicators and behaviors in real time.'],['Production quality recognition','Inspect and classify products to ensure quality and safety.'],['Security recognition','Detect intrusions and anomalies in critical environments.']],
    valueEyebrow:'03 · Value chain', valueTitle:'Detection becomes action.', valueIntro:'N3uralia transforms raw detections into operational workflows that create records, alerts and business actions across your organization.', flow:[['Detect','Camera input'],['Identify / Classify','Vision model'],['Evaluate / Score','Rules + confidence'],['Register / Record','Operational record'],['Trigger Action','Alert or workflow']], trace:'Trace & improve',
    platformEyebrow:'04 · Platform', platformTitle:'The system behind recognition.', platformIntro:'The model is only one layer. Capture, visual intelligence, decision logic, records and integrations work as one operational system.',
    layers:[['01','Edge Capture','Cameras, sensors and field devices.'],['02','Vision Intelligence','People, animals, vehicles and objects.'],['03','Logic & Scoring','Thresholds, confidence and business rules.'],['04','Records & Insights','Structured events, dashboards and history.'],['05','Integrations','ERP, MES, APIs, cloud and third-party systems.']],
    workEyebrow:'05 · Way we work', workTitle:'From diagnosis to pilot to scale.', workIntro:'Start with one operational problem, prove it in the real environment and scale only when the recognition workflow is reliable.', work:[['01','Diagnosis','Map cameras, events, constraints and the action that should follow a detection.'],['02','Pilot','Validate model quality, operator experience and workflow reliability in one real context.'],['03','Scale','Expand sites, models, integrations, monitoring and governance.']], talk:'Talk to us', control:'Operational control · recognition at scale'
  },
  es: {
    eyebrow:'Visión · Reconocimiento · Flujos', title:'Sistemas de reconocimiento inteligente.', intro:'Sistemas de visión computacional para fauna, calidad de producción, agricultura y seguridad. Conectamos detección con operaciones para actuar con confianza y a escala.', primary:'Agendar diagnóstico', secondary:'Ver casos de uso', signal:'Inteligencia construida con datos reales · impacto entregado en terreno',
    casesEyebrow:'02 · Casos de uso', casesTitle:'Reconocimiento para operaciones reales.', casesIntro:'Una capa de inteligencia visual adaptada a cada contexto operacional y conectada al flujo que la rodea.', cases:[['Reconocimiento de fauna','Identifica y monitorea fauna en hábitats naturales.'],['Reconocimiento agrícola','Detecta animales, indicadores de salud y comportamientos en tiempo real.'],['Reconocimiento de calidad','Inspecciona y clasifica productos para asegurar calidad y seguridad.'],['Reconocimiento de seguridad','Detecta intrusiones y anomalías en entornos críticos.']],
    valueEyebrow:'03 · Cadena de valor', valueTitle:'La detección se convierte en acción.', valueIntro:'N3uralia transforma detecciones en flujos operacionales que crean registros, alertas y acciones de negocio.', flow:[['Detectar','Entrada de cámara'],['Identificar / Clasificar','Modelo de visión'],['Evaluar / Puntuar','Reglas + confianza'],['Registrar','Registro operacional'],['Activar acción','Alerta o flujo']], trace:'Trazar y mejorar',
    platformEyebrow:'04 · Plataforma', platformTitle:'El sistema detrás del reconocimiento.', platformIntro:'El modelo es solo una capa. Captura, inteligencia visual, lógica de decisión, registros e integraciones funcionan como un solo sistema operacional.', layers:[['01','Captura en Edge','Cámaras, sensores y dispositivos de terreno.'],['02','Inteligencia Visual','Personas, animales, vehículos y objetos.'],['03','Lógica y Scoring','Umbrales, confianza y reglas de negocio.'],['04','Registros e Insights','Eventos estructurados, tableros e historial.'],['05','Integraciones','ERP, MES, APIs, nube y sistemas de terceros.']],
    workEyebrow:'05 · Cómo trabajamos', workTitle:'Del diagnóstico al piloto y a escala.', workIntro:'Partimos con un problema operacional, lo probamos en el entorno real y escalamos cuando el flujo de reconocimiento es confiable.', work:[['01','Diagnóstico','Mapeamos cámaras, eventos, restricciones y la acción que debe seguir a cada detección.'],['02','Piloto','Validamos calidad del modelo, experiencia del operador y confiabilidad del flujo en un contexto real.'],['03','Escala','Expandimos sitios, modelos, integraciones, monitoreo y gobernanza.']], talk:'Hablar con nosotros', control:'Control operacional · reconocimiento a escala'
  }
} as const

const images=[
  ['/recognition/wildlife.webp','Clean dark image of a Chilean cougar for wildlife recognition.'],
  ['/recognition/cattle.webp','Clean dark image of a healthy cow for cattle recognition.'],
  ['/recognition/quality-urchin.webp?v=20260827c','Open sea urchin held in black gloves for premium production quality recognition.'],
  ['/recognition/security-human.webp','Dark perimeter security scene with a person detected as an intruder.'],
] as const

function FlowIcon({i}:{i:number}){const p=[<><rect x="5" y="9" width="17" height="13" rx="1"/><circle cx="13.5" cy="15.5" r="3.5"/><path d="M22 13l5-3v11l-5-3z"/></>,<><path d="M4 16s5-8 12-8 12 8 12 8-5 8-12 8S4 16 4 16z"/><circle cx="16" cy="16" r="3"/></>,<><circle cx="16" cy="16" r="10"/><path d="M16 9v7l5 3"/></>,<><ellipse cx="16" cy="8" rx="8" ry="3"/><path d="M8 8v8c0 2 3.6 3.5 8 3.5s8-1.5 8-3.5V8M8 16v8c0 2 3.6 3.5 8 3.5s8-1.5 8-3.5v-8"/></>,<><circle cx="16" cy="16" r="10"/><circle cx="16" cy="16" r="4"/><path d="M16 2v5M30 16h-5M16 30v-5M2 16h5"/></>];return <svg viewBox="0 0 32 32" aria-hidden>{p[i]}</svg>}
function LayerIcon({i}:{i:number}){const p=[<><path d="M5 24h22M8 21V9h16v12"/><circle cx="16" cy="15" r="3"/></>,<><path d="M3 16s5-8 13-8 13 8 13 8-5 8-13 8S3 16 3 16z"/><circle cx="16" cy="16" r="4"/></>,<><circle cx="7" cy="8" r="3"/><circle cx="25" cy="8" r="3"/><circle cx="16" cy="24" r="3"/><path d="M10 8h12M9 11l5 10M23 11l-5 10"/></>,<><rect x="4" y="5" width="24" height="22"/><path d="M8 22l5-6 4 3 7-9M8 10h6"/></>,<><circle cx="16" cy="16" r="4"/><circle cx="6" cy="7" r="3"/><circle cx="26" cy="7" r="3"/><circle cx="6" cy="25" r="3"/><circle cx="26" cy="25" r="3"/><path d="M9 9l4 4M23 9l-4 4M9 23l4-4M23 23l-4-4"/></>];return <svg viewBox="0 0 32 32" aria-hidden>{p[i]}</svg>}

function PlatformVisual({layers}:{layers:readonly (readonly [string,string,string])[]}){
  return <div className={s.platformVisual} aria-label="Layered recognition architecture from edge capture through enterprise integrations">
    <div className={s.sensorRow}>{[0,1,2,3,4].map(i=><span key={i}><LayerIcon i={0}/></span>)}</div>
    <div className={s.beams} aria-hidden/>
    {layers.map((l,i)=><div className={`${s.platformFloor} ${s[`floor${i+1}`]}`} key={l[0]}>
      <div className={s.floorLabel}><span>{l[0]}</span><b>{l[1]}</b></div>
      {i===0&&<div className={s.edgeNodes}><i>CAM 01</i><i>CAM 02</i><i>EDGE</i><i>SENSOR</i></div>}
      {i===1&&<div className={s.entityRow}><i>COUGAR</i><i>COW</i><i>PERSON</i><i>VEHICLE</i></div>}
      {i===2&&<div className={s.logicRow}><i>CONF</i><em>◆</em><i>RULE</i><em>◆</em><i>SCORE</i><em>◆</em><i>ACTION</i></div>}
      {i===3&&<div className={s.insightRow}><i/><i/><i/><strong>EVENT 0248</strong></div>}
      {i===4&&<div className={s.integrationRow}><i>ERP</i><i>MES</i><i>API</i><i>CLOUD</i><i>3RD</i></div>}
    </div>)}
  </div>
}

export function RecognitionPage({locale}:{locale:Locale}){
  const t=copy[locale]
  return <main className={s.page}>
    <section className={s.hero}><div className={`${s.shell} ${s.heroGrid}`}>
      <div className={s.heroCopy}><span className={s.eyebrow}>{t.eyebrow}</span><h1 className={s.title}>{t.title}</h1><p className={s.copy}>{t.intro}</p><div className={s.actions}><Link href={`/${locale}/diagnostico`} className={`${s.button} ${s.buttonPrimary}`}>{t.primary}</Link><a href="#use-cases" className={s.button}>{t.secondary}</a></div><div className={s.heroFlow}>{t.flow.map((f,i)=><div className={s.heroFlowItem} key={f[0]}><span className={s.heroFlowIcon}><FlowIcon i={i}/></span>{i<t.flow.length-1&&<span className={s.heroFlowArrow}>→</span>}<small>{f[0]}</small></div>)}</div><div className={s.signal}><span className={s.signalDot}/>{t.signal}</div></div>
      <figure className={`${s.media} ${s.heroMedia}`}><img src="/assets/recognition/hero-command-center-cougar.webp?v=20260827c" alt="N3uralia command center detecting a cougar on a large vision intelligence screen." className={s.image} onError={e=>{const img=e.currentTarget;img.onerror=null;img.src='/n3uralia-retro/control-room.webp'}}/></figure>
    </div></section>

    <section id="use-cases" className={s.section}><div className={s.shell}><header className={s.head}><div><span className={s.eyebrow}>{t.casesEyebrow}</span><h2 className={s.sectionTitle}>{t.casesTitle}</h2></div><p className={s.copy}>{t.casesIntro}</p></header><div className={s.cards}>{t.cases.map((c,i)=><article className={s.card} key={c[0]}><div className={s.cardMedia}><img src={images[i][0]} alt={images[i][1]} className={s.image}/></div><div className={s.cardBody}><span className={s.cardIndex}>0{i+1}</span><h3 className={s.cardTitle}>{c[0]}</h3><p className={s.cardText}>{c[1]}</p></div></article>)}</div></div></section>

    <section className={`${s.section} ${s.value}`}><div className={s.shell}><header className={s.head}><div><span className={s.eyebrow}>{t.valueEyebrow}</span><h2 className={s.sectionTitle}>{t.valueTitle}</h2></div><p className={s.copy}>{t.valueIntro}</p></header><div className={s.flow}><div className={s.flowLine}/>{t.flow.map((f,i)=><div className={s.flowStep} key={f[0]}><div className={s.flowIcon}><FlowIcon i={i}/></div><span>0{i+1}</span><h3 className={s.stepTitle}>{f[0]}</h3><p>{f[1]}</p></div>)}<div className={s.feedback}>{t.trace}</div></div></div></section>

    <section className={`${s.section} ${s.platform}`}><div className={s.shell}><header className={s.platformHead}><div><span className={s.eyebrow}>{t.platformEyebrow}</span><h2 className={s.sectionTitle}>{t.platformTitle}</h2><p className={s.copy}>{t.platformIntro}</p></div></header><div className={s.platformGrid}><PlatformVisual layers={t.layers}/><div className={s.layerList}>{t.layers.map((l,i)=><div className={s.layerItem} key={l[0]}><span className={s.layerMini}><LayerIcon i={i}/></span><span className={s.layerNo}>{l[0]}</span><div><b>{l[1]}</b><p>{l[2]}</p></div></div>)}</div></div></div></section>

    <section className={`${s.section} ${s.final}`}><div className={`${s.shell} ${s.finalGrid}`}>
      <div className={s.finalCopy}><span className={s.eyebrow}>{t.workEyebrow}</span><h2 className={s.sectionTitle}>{t.workTitle}</h2><p className={s.copy}>{t.workIntro}</p><div className={s.steps}>{t.work.map((w,i)=><div className={s.workStep} key={w[0]}><span className={s.workNo}>{w[0]}</span><div><b>{w[1]}</b><p>{w[2]}</p></div>{i<t.work.length-1&&<span className={s.stepConnector}/>}</div>)}</div><div className={s.actions}><Link href={`/${locale}/diagnostico`} className={`${s.button} ${s.buttonPrimary}`}>{t.primary}</Link><Link href={`/${locale}/contact`} className={s.button}>{t.talk}</Link></div><div className={s.contact}><a href="mailto:juan@n3uralia.com">juan@n3uralia.com</a><a href="https://wa.me/56993826127">+56 9 9382 6127</a><span>Santiago, Chile · LATAM</span></div></div>
      <figure className={`${s.media} ${s.finalMedia}`}><img src="/n3uralia-retro/control-room.webp" alt="Operational command center monitoring recognition systems at scale." className={s.image}/><figcaption className={s.controlLabel}>{t.control}</figcaption><div className={s.monitorGrid} aria-hidden><span/><span/><span/><span/><span/><span/></div></figure>
    </div></section>
  </main>
}

export function recognitionHref(locale:Locale){return locale==='es'?'/es/reconocimiento':'/en/recognition'}
