'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import type { Locale } from '@/lib/get-locale'
import { BrandWordmark } from '@/components/brand'

export default function Navigation({ locale = 'en' }: { locale?: Locale }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const links = [
    ['Expertise', `/${locale}/soluciones`],
    [locale === 'es' ? 'Proyectos' : 'Projects', `/${locale}/${locale === 'es' ? 'proyectos' : 'projects'}`],
    [locale === 'es' ? 'Productos' : 'Products', `/${locale}/${locale === 'es' ? 'productos' : 'products'}`],
    [locale === 'es' ? 'Reconocimiento' : 'Recognition', `/${locale}/${locale === 'es' ? 'reconocimiento' : 'recognition'}`],
    [locale === 'es' ? 'Diagnóstico' : 'Diagnosis', `/${locale}/diagnostico`],
    [locale === 'es' ? 'Nosotros' : 'About', `/${locale}/about`],
  ]

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <nav className="retro-nav" aria-label={locale === 'es' ? 'Navegación principal' : 'Primary navigation'}>
      <div className="retro-nav-inner">
        <Link href={`/${locale}`} aria-label={locale === 'es' ? 'Inicio de N3uralia' : 'N3uralia home'}>
          <BrandWordmark className="h-[38px] w-[144px]" priority sizes="144px" />
        </Link>
        <div id="primary-navigation" className={`retro-nav-links ${open ? 'open' : ''}`}>
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={pathname === href ? 'page' : undefined}>
              {label}
            </Link>
          ))}
          <Link href={locale === 'es' ? '/en' : '/es'} onClick={() => setOpen(false)}>
            {locale === 'es' ? 'EN' : 'ES'}
          </Link>
        </div>
        <Link className="retro-nav-cta" href={`/${locale}/diagnostico`} aria-current={pathname === `/${locale}/diagnostico` ? 'page' : undefined}>
          {locale === 'es' ? 'Agendar diagnóstico' : 'Book a diagnosis'}
        </Link>
        <button
          type="button"
          className="retro-nav-toggle"
          aria-label={open ? (locale === 'es' ? 'Cerrar menú' : 'Close menu') : (locale === 'es' ? 'Abrir menú' : 'Open menu')}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>
    </nav>
  )
}
