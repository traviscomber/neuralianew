'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import type { Locale } from '@/lib/get-locale'
import { BrandWordmark } from '@/components/brand'

const localizedSegments: Record<string, string> = {
  solutions: 'soluciones',
  soluciones: 'solutions',
  projects: 'proyectos',
  proyectos: 'projects',
  products: 'productos',
  productos: 'products',
  recognition: 'reconocimiento',
  reconocimiento: 'recognition',
  'how-we-work': 'como-trabajamos',
  'como-trabajamos': 'how-we-work',
}

function getLocaleSwitchHref(pathname: string, locale: Locale) {
  const targetLocale: Locale = locale === 'es' ? 'en' : 'es'
  const segments = pathname.split('/').filter(Boolean)

  if (segments.length === 0) return `/${targetLocale}`

  segments[0] = targetLocale
  if (segments[1] && localizedSegments[segments[1]]) {
    segments[1] = localizedSegments[segments[1]]
  }

  return `/${segments.join('/')}`
}

export default function Navigation({ locale = 'en' }: { locale?: Locale }) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const solutionsHref = locale === 'es' ? '/es/soluciones' : '/en/solutions'
  const links = [
    ['Expertise', solutionsHref],
    [locale === 'es' ? 'Proyectos' : 'Projects', `/${locale}/${locale === 'es' ? 'proyectos' : 'projects'}`],
    [locale === 'es' ? 'Productos' : 'Products', `/${locale}/${locale === 'es' ? 'productos' : 'products'}`],
    [locale === 'es' ? 'Reconocimiento' : 'Recognition', `/${locale}/${locale === 'es' ? 'reconocimiento' : 'recognition'}`],
    [locale === 'es' ? 'Diagnóstico' : 'Diagnosis', `/${locale}/diagnostico`],
    [locale === 'es' ? 'Nosotros' : 'About', `/${locale}/about`],
  ]
  const localeSwitchHref = useMemo(() => getLocaleSwitchHref(pathname, locale), [pathname, locale])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

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
          <Link
            href={localeSwitchHref}
            onClick={() => setOpen(false)}
            hrefLang={locale === 'es' ? 'en' : 'es'}
            aria-label={locale === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
          >
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
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>
    </nav>
  )
}
