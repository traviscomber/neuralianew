'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import type { Locale } from '@/lib/get-locale'

export default function Navigation({ locale = 'en' }: { locale?: Locale }) {
  const [open, setOpen] = useState(false)
  const links = [
    [locale === 'es' ? 'Expertise' : 'Expertise', `/${locale}/soluciones`],
    [locale === 'es' ? 'Proyectos' : 'Projects', `/${locale}/proyectos`],
    [locale === 'es' ? 'Productos' : 'Products', `/${locale}/productos`],
    [locale === 'es' ? 'Diagnóstico' : 'Diagnosis', `/${locale}/diagnostico`],
    [locale === 'es' ? 'Nosotros' : 'About', `/${locale}/about`],
  ]
  return <nav className="retro-nav"><div className="retro-nav-inner">
    <Link href={`/${locale}`} aria-label="N3uralia"><Image src="/n3uralia-brand/n3uralia-wordmark.png" alt="N3uralia" width={624} height={166} priority className="retro-nav-logo" /></Link>
    <div className={`retro-nav-links ${open ? 'open' : ''}`}>{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}<Link href={locale==='es'?'/en':'/es'} onClick={()=>setOpen(false)}>{locale==='es'?'EN':'ES'}</Link></div>
    <Link className="retro-nav-cta" href={`/${locale}/diagnostico`}>{locale==='es'?'Agendar diagnóstico':'Book a diagnosis'}</Link>
    <button className="retro-nav-toggle" aria-label="Menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </div></nav>
}
