'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import type { Locale } from '@/lib/get-locale'
import { BrandWordmark } from '@/components/brand'

export default function Navigation({ locale = 'en' }: { locale?: Locale }) {
  const [open, setOpen] = useState(false)
  const links = [
    [locale === 'es' ? 'Expertise' : 'Expertise', `/${locale}/soluciones`],
    [locale === 'es' ? 'Proyectos' : 'Projects', `/${locale}/${locale === 'es' ? 'proyectos' : 'projects'}`],
    [locale === 'es' ? 'Productos' : 'Products', `/${locale}/${locale === 'es' ? 'productos' : 'products'}`],
    [locale === 'es' ? 'Diagnóstico' : 'Diagnosis', `/${locale}/diagnostico`],
    [locale === 'es' ? 'Nosotros' : 'About', `/${locale}/about`],
  ]
  return <nav className="retro-nav"><div className="retro-nav-inner">
    <Link href={`/${locale}`} aria-label="N3uralia"><BrandWordmark className="h-[38px] w-[144px]" priority sizes="144px" /></Link>
    <div className={`retro-nav-links ${open ? 'open' : ''}`}>{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}<Link href={locale==='es'?'/en':'/es'} onClick={()=>setOpen(false)}>{locale==='es'?'EN':'ES'}</Link></div>
    <Link className="retro-nav-cta" href={`/${locale}/diagnostico`}>{locale==='es'?'Agendar diagnóstico':'Book a diagnosis'}</Link>
    <button className="retro-nav-toggle" aria-label="Menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </div></nav>
}
