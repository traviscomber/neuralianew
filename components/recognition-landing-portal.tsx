'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { Camera, Database, ScanLine, ShieldCheck, Workflow } from 'lucide-react'

export function RecognitionLandingPortal(){
  const [target,setTarget]=useState<Element|null>(null)
  const [locale,setLocale]=useState<'en'|'es'>('en')
  useEffect(()=>{
    const section=document.querySelector('.retro-page .products')
    if(!section)return
    setTarget(section)
    setLocale(location.pathname.startsWith('/es')?'es':'en')
  },[])
  if(!target)return null
  const es=locale==='es'
  const href=es?'/es/reconocimiento':'/en/recognition'
  const cards=es?[
    ['Fauna','Puma, pudú y conservación'],['Ganadería','Conteo y monitoreo'],['Calidad','Tamaño, color y defectos'],['Seguridad','Personas y perímetros']
  ]:[
    ['Wildlife','Cougar, pudú & conservation'],['Cattle','Counting & monitoring'],['Quality','Size, color & defects'],['Security','People & perimeters']
  ]
  return createPortal(<div className="landing-recognition">
    <div className="retro-shell">
      <div className="landing-recognition-head"><div><small>SMART RECOGNITION SYSTEMS</small><h2>{es?'Reconocimiento para operaciones reales.':'Recognition across real operations.'}</h2></div><p>{es?'Visión computacional que convierte detecciones en eventos, registros y acciones dentro de la operación.':'Computer vision that turns detections into events, records and actions across the operation.'}</p></div>
      <div className="landing-recognition-cards">{cards.map(([title,desc],i)=><div key={title}><span>0{i+1}</span><ScanLine/><h3>{title}</h3><p>{desc}</p></div>)}</div>
      <div className="landing-recognition-flow"><div><Camera/><span>{es?'Detectar':'Detect'}</span></div><i>→</i><div><ScanLine/><span>{es?'Reconocer':'Recognize'}</span></div><i>→</i><div><Database/><span>{es?'Registrar':'Record'}</span></div><i>→</i><div><ShieldCheck/><span>{es?'Evaluar':'Evaluate'}</span></div><i>→</i><div><Workflow/><span>{es?'Actuar':'Act'}</span></div></div>
      <div className="center-button"><Link className="retro-button" href={href}>{es?'Explorar reconocimiento':'Explore recognition'}</Link></div>
    </div>
  </div>,target)
}
