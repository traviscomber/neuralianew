'use client'

import Link from 'next/link'
import {
  BellRing,
  BrainCircuit,
  Camera,
  CheckCircle2,
  CircleDot,
  Crosshair,
  Database,
  Eye,
  Layers3,
  ScanLine,
  ShieldCheck,
  Sprout,
  Workflow,
} from 'lucide-react'
import type { Locale } from '@/lib/get-locale'

const content = {
  en: {
    eyebrow:'Vision · Recognition · Workflows',
    title:'Smart Recognition Systems.',
    intro:'Computer vision systems for wildlife, production quality, agriculture, and security that convert detections into workflows across your operation.',
    primary:'Book a diagnosis', secondary:'See use cases',
    statement:'Recognition across real operations.',
    useCases:[
      ['Wildlife recognition','Detect cougar, pudú and conservation events in forests, parks and remote areas.'],
      ['Cattle recognition','Count livestock, register feeding events and monitor herd movement.'],
      ['Production quality recognition','Measure size, color, defects and premium quality across products and batches.'],
      ['Security recognition','Detect people, vehicles, intrusion and perimeter events in critical areas.'],
    ],
    valueEyebrow:'03 · Value chain', valueTitle:'Detection becomes action.',
    valueText:'Recognition is useful when every detection becomes a trusted operational event that can be classified, evaluated, recorded and turned into action.',
    chain:[
      ['Detect','Camera or sensor captures an event.'],['Identify / classify','AI identifies the object or event.'],['Evaluate / score','Rules and confidence determine relevance.'],['Register / record','The event becomes an operational record.'],['Trigger action','Alerts and workflows execute.']
    ],
    loop:'Trace & improve',
    platformEyebrow:'04 · Platform', platformTitle:'The system behind recognition.',
    platformText:'Recognition is one layer inside an operational architecture designed to run from the edge to workflows, dashboards and integrations.',
    layers:['Edge capture','Recognition services','Rules & orchestration','Operational records','Dashboards & analytics','Integrations & APIs'],
    deliveryEyebrow:'05 · Way we work', deliveryTitle:'From diagnosis to pilot to scale.',
    delivery:[['01','Diagnosis','We map the camera estate, operational events and desired actions.'],['02','Pilot','We validate recognition quality in one real workflow.'],['03','Scale','We expand models, sites, integrations and governance.']],
    footerPrimary:'Book a diagnosis', footerSecondary:'Talk to us',
  },
  es: {
    eyebrow:'Visión · Reconocimiento · Flujos',
    title:'Sistemas de reconocimiento inteligente.',
    intro:'Sistemas de visión computacional para fauna, calidad de producción, agricultura y seguridad que convierten detecciones en flujos de trabajo dentro de la operación.',
    primary:'Agendar diagnóstico', secondary:'Ver casos de uso',
    statement:'Reconocimiento para operaciones reales.',
    useCases:[
      ['Reconocimiento de fauna','Detecta puma, pudú y eventos de conservación en bosques, parques y zonas remotas.'],
      ['Reconocimiento ganadero','Cuenta animales, registra eventos de alimentación y monitorea movimiento del rebaño.'],
      ['Reconocimiento de calidad','Mide tamaño, color, defectos y calidad premium en productos y lotes.'],
      ['Reconocimiento de seguridad','Detecta personas, vehículos, intrusión y eventos perimetrales en áreas críticas.'],
    ],
    valueEyebrow:'03 · Cadena de valor', valueTitle:'La detección se convierte en acción.',
    valueText:'El reconocimiento genera valor cuando cada detección se transforma en un evento operacional confiable que puede clasificarse, evaluarse, registrarse y activar una acción.',
    chain:[
      ['Detectar','Una cámara o sensor captura un evento.'],['Identificar / clasificar','La IA identifica el objeto o evento.'],['Evaluar / puntuar','Reglas y confianza determinan relevancia.'],['Registrar','El evento se convierte en un registro operacional.'],['Activar acción','Alertas y flujos se ejecutan.']
    ],
    loop:'Trazar y mejorar',
    platformEyebrow:'04 · Plataforma', platformTitle:'El sistema detrás del reconocimiento.',
    platformText:'El reconocimiento es una capa dentro de una arquitectura operacional diseñada para funcionar desde el edge hasta flujos, tableros e integraciones.',
    layers:['Captura en edge','Servicios de reconocimiento','Reglas y orquestación','Registros operacionales','Tableros y analítica','Integraciones y APIs'],
    deliveryEyebrow:'05 · Cómo trabajamos', deliveryTitle:'Del diagnóstico al piloto y a escala.',
    delivery:[['01','Diagnóstico','Mapeamos cámaras, eventos operacionales y acciones deseadas.'],['02','Piloto','Validamos la calidad del reconocimiento en un flujo real.'],['03','Escala','Expandimos modelos, sitios, integraciones y gobernanza.']],
    footerPrimary:'Agendar diagnóstico', footerSecondary:'Hablar con nosotros',
  },
} as const

const useIcons = [Eye, Sprout, ScanLine, ShieldCheck]
const chainIcons = [Camera, BrainCircuit, CircleDot, Database, BellRing]

function Path({locale}:{locale:Locale}){return locale==='es'?'/es/reconocimiento':'/en/recognition'}

export function RecognitionPage({locale}:{locale:Locale}) {
  const t = content[locale]
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
          <div className="recognition-signal"><Crosshair/><span>{locale==='es'?'La inteligencia comienza en datos reales.':'Intelligence starts with real data.'}</span></div>
        </div>
        <div className="recognition-hero-visual" aria-hidden>
          <div className="recognition-screen">
            <div className="recognition-screen-top"><span>N3URALIA // VISION OPERATIONS</span><span>LIVE</span></div>
            <div className="recognition-screen-body">
              <div className="recognition-camera-frame"><Crosshair/><span>OBJECT 01</span><i/></div>
              <div className="recognition-metrics"><span>CONFIDENCE <b>98.4%</b></span><span>STATUS <b>TRACKED</b></span><span>ACTION <b>READY</b></span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="use-cases" className="recognition-section">
      <div className="recognition-shell">
        <div className="recognition-section-head"><div><small>02 · CORE USE CASES</small><h2>{t.statement}</h2></div></div>
        <div className="recognition-usecases">{t.useCases.map(([title,desc],i)=>{const Icon=useIcons[i];return <article key={title} className="recognition-card"><div className="recognition-card-visual"><Icon/><span>0{i+1}</span></div><small>{title}</small><p>{desc}</p></article>})}</div>
      </div>
    </section>

    <section className="recognition-section recognition-value">
      <div className="recognition-shell">
        <div className="recognition-section-head recognition-split"><div><small>{t.valueEyebrow}</small><h2>{t.valueTitle}</h2></div><p>{t.valueText}</p></div>
        <div className="recognition-chain">{t.chain.map(([title,desc],i)=>{const Icon=chainIcons[i];return <div className="recognition-chain-step" key={title}><div className="recognition-chain-icon"><Icon/></div><small>{String(i+1).padStart(2,'0')}</small><h3>{title}</h3><p>{desc}</p>{i<t.chain.length-1&&<span className="recognition-chain-line"/>}</div>})}</div>
        <div className="recognition-loop"><Workflow/><span>{t.loop}</span></div>
      </div>
    </section>

    <section className="recognition-section recognition-platform">
      <div className="recognition-shell recognition-platform-grid">
        <div><small>{t.platformEyebrow}</small><h2>{t.platformTitle}</h2><p>{t.platformText}</p><div className="recognition-layer-list">{t.layers.map((layer,i)=><div key={layer}><span>0{i+1}</span><p>{layer}</p></div>)}</div></div>
        <div className="recognition-stack" aria-hidden>{t.layers.map((layer,i)=><div key={layer} className="recognition-stack-layer"><Layers3/><span>{layer}</span><i>{String(t.layers.length-i).padStart(2,'0')}</i></div>)}</div>
      </div>
    </section>

    <section className="recognition-section recognition-delivery">
      <div className="recognition-shell recognition-delivery-grid">
        <div><small>{t.deliveryEyebrow}</small><h2>{t.deliveryTitle}</h2><div className="recognition-actions"><Link href={`/${locale}/diagnostico`} className="recognition-button recognition-button-primary">{t.footerPrimary}</Link><Link href={`/${locale}/contact`} className="recognition-button">{t.footerSecondary}</Link></div></div>
        <div className="recognition-delivery-steps">{t.delivery.map(([n,title,desc])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{desc}</p><CheckCircle2/></article>)}</div>
      </div>
    </section>
  </main>
}

export function recognitionHref(locale:Locale){return Path({locale})}
