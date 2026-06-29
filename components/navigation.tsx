'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import type { Locale } from '@/lib/get-locale'

interface NavigationProps {
  locale?: Locale
}

type NavItem = {
  hash: string
  label: string
  href: string
  external?: boolean
}

const NAV_COPY = {
  es: {
    capabilities: 'Capacidades',
    solutions: 'Soluciones',
    platform: 'Plataforma',
    projects: 'Proyectos',
    method: 'Metodo',
    why: 'Por que',
    cta: 'Agendar diagnostico',
    open: 'Abrir menu',
    close: 'Cerrar menu',
  },
  en: {
    capabilities: 'Capabilities',
    solutions: 'Solutions',
    platform: 'Platform',
    projects: 'Projects',
    method: 'Method',
    why: 'Why',
    cta: 'Book diagnosis',
    open: 'Open menu',
    close: 'Close menu',
  },
} as const

export default function Navigation({ locale = 'en' }: NavigationProps) {
  const [open, setOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('#top')
  const [scrollProgress, setScrollProgress] = useState(0)
  const copy = NAV_COPY[locale]
  const localizedHash = (hash: string) => `/${locale}${hash}`
  const contactHref = `/${locale}/contact`

  const items: NavItem[] = [
    { hash: '#capabilities', label: copy.capabilities, href: localizedHash('#capabilities') },
    { hash: '#platform-preview', label: copy.platform, href: localizedHash('#platform-preview') },
    { hash: '#solutions', label: copy.solutions, href: '/es/soluciones', external: true },
    { hash: '#case-studies', label: copy.projects, href: localizedHash('#case-studies') },
    { hash: '#how-we-work', label: copy.method, href: localizedHash('#how-we-work') },
    { hash: '#about', label: copy.why, href: localizedHash('#about') },
  ]

  useEffect(() => {
    const sectionHashes = ['#top', '#flow', '#capabilities', '#platform-preview', '#solutions', '#case-studies', '#how-we-work', '#about']

    function updateNavigationState() {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = documentHeight > 0 ? Math.min(100, Math.max(0, (window.scrollY / documentHeight) * 100)) : 0
      setScrollProgress(progress)

      const currentHash = sectionHashes.reduce((current, hash) => {
        const section = document.querySelector(hash)
        if (!(section instanceof HTMLElement)) {
          return current
        }

        return section.getBoundingClientRect().top <= 140 ? hash : current
      }, '#top')

      setActiveHash(currentHash)
    }

    updateNavigationState()
    window.addEventListener('scroll', updateNavigationState, { passive: true })
    window.addEventListener('resize', updateNavigationState)
    window.addEventListener('hashchange', updateNavigationState)

    return () => {
      window.removeEventListener('scroll', updateNavigationState)
      window.removeEventListener('resize', updateNavigationState)
      window.removeEventListener('hashchange', updateNavigationState)
    }
  }, [])

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#1e3431] bg-[#06100f]/92 shadow-[0_18px_60px_-52px_#06100f] backdrop-blur-xl">
      <div className="absolute inset-x-0 bottom-0 h-px bg-[#1e3431]">
        <div className="h-px bg-[#8fb2aa] transition-[width] duration-300" style={{ width: `${scrollProgress}%` }} />
      </div>

      <div className="mx-auto grid h-[4.75rem] max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-5 px-5 sm:px-8 lg:px-10">
        <Link href={localizedHash('#top')} className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#789b96]" aria-label="N3uralia">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#173634]">
            <Image src="/n3uralia-brand/n3uralia-mark.png" alt="" width={984} height={943} className="h-6 w-6 object-contain opacity-80" />
          </span>
          <Image src="/n3uralia-brand/n3uralia-wordmark.png" alt="N3uralia" width={624} height={166} priority className="hidden h-auto w-32 sm:block" />
        </Link>

        <div className="hidden items-center justify-center gap-1 rounded-full border border-[#1e3431] bg-[#0b1715]/80 px-2 py-2 lg:flex">
          {items.map((item) => {
            const active = !item.external && activeHash === item.hash
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'true' : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789b96] ${
                  active ? 'bg-[#8fb2aa] text-[#06100f] shadow-[0_18px_45px_-32px_#8fb2aa]' : 'text-[#9db7b1] hover:bg-[#142522] hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        <div className="flex items-center justify-end gap-3">
          <Link
            href={contactHref}
            className="hidden rounded-full bg-[#8fb2aa] px-5 py-3 text-sm font-semibold text-[#06100f] shadow-[0_22px_55px_-34px_#8fb2aa] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d9e3e0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789b96] md:inline-flex"
          >
            {copy.cta}
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#1e3431] bg-[#0b1715] text-[#d9e3e0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789b96] lg:hidden"
            aria-label={open ? copy.close : copy.open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[#1e3431] bg-[#06100f] px-5 pb-5 pt-3 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {items.map((item) => {
              const active = !item.external && activeHash === item.hash
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789b96] ${
                    active ? 'bg-[#8fb2aa] text-[#06100f]' : 'text-[#9db7b1] hover:bg-[#142522] hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
            <Link
              href={contactHref}
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-[#8fb2aa] px-4 py-3 text-sm font-semibold text-[#06100f] transition-colors hover:bg-[#d9e3e0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789b96]"
            >
              {copy.cta}
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  )
}
