'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { BrandMark, BrandWordmark } from '@/components/brand'
import type { Locale } from '@/lib/get-locale'

interface NavigationProps {
  locale?: Locale
}

type NavItem = {
  hash: string
  href: string
  label: string
}

const NAV_ITEMS = [
  { hash: '#explainer', es: 'En simple', en: 'In simple terms' },
  { hash: '#solutions', es: 'Sistemas', en: 'Systems' },
  { hash: '#case-studies', es: 'Proyectos', en: 'Projects' },
  { hash: '#use-cases', es: 'Casos', en: 'Use cases' },
  { hash: '#how-we-work', es: 'Modelos', en: 'Models' },
  { hash: '#about', es: 'Por qué', en: 'Why' },
] as const

export default function Navigation({ locale = 'es' }: NavigationProps) {
  const [open, setOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('#top')
  const [scrollProgress, setScrollProgress] = useState(0)
  const isES = locale === 'es'
  const href = (hash: string) => `/${locale}${hash}`
  const contactHref = `/${locale}/contact`

  const items: NavItem[] = NAV_ITEMS.map((item) => ({
    hash: item.hash,
    href: href(item.hash),
    label: isES ? item.es : item.en,
  }))

  useEffect(() => {
    const sectionHashes = ['#top', ...NAV_ITEMS.map((item) => item.hash), '#contacto']

    function updateNavigationState() {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = documentHeight > 0 ? Math.min(100, Math.max(0, (window.scrollY / documentHeight) * 100)) : 0
      setScrollProgress(progress)

      const currentHash = sectionHashes.reduce((current, hash) => {
        const section = document.querySelector(hash)
        if (!(section instanceof HTMLElement)) {
          return current
        }

        const top = section.getBoundingClientRect().top
        return top <= 140 ? hash : current
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
    <nav className='fixed inset-x-0 top-0 z-50 border-b border-[#dfe8e5]/80 bg-[#fbfbfa]/82 shadow-[0_18px_60px_-52px_#173634] backdrop-blur-xl'>
      <div className='absolute inset-x-0 bottom-0 h-px bg-[#d8e5e2]'>
        <div className='h-px bg-[#173634] transition-[width] duration-300' style={{ width: `${scrollProgress}%` }} />
      </div>

      <div className='mx-auto grid h-[4.75rem] max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-5 px-5 sm:px-8 lg:px-10'>
        <Link href={href('#top')} className='flex items-center gap-3 text-[#173634] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#789b96]' aria-label='N3uralia'>
          <BrandMark className='h-10 w-10 rounded-2xl text-[#789b96]' />
          <BrandWordmark className='hidden text-2xl text-[#789b96] sm:block' />
        </Link>

        <div className='hidden items-center justify-center gap-1 rounded-full border border-[#d8e5e2] bg-white/70 px-2 py-2 lg:flex'>
          {items.map((item) => {
            const active = activeHash === item.hash
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'true' : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789b96] ${
                  active ? 'bg-[#173634] text-white shadow-[0_18px_45px_-32px_#173634]' : 'text-[#65706d] hover:bg-[#eef5f2] hover:text-[#173634]'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        <div className='flex items-center justify-end gap-3'>
          <Link
            href={contactHref}
            className='hidden rounded-full bg-[#173634] px-5 py-3 text-sm font-semibold text-white shadow-[0_22px_55px_-34px_#173634] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#244946] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789b96] md:inline-flex'
          >
            {isES ? 'Agendar diagnóstico' : 'Book diagnosis'}
          </Link>

          <button
            type='button'
            className='inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d2dfdb] bg-white/70 text-[#173634] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789b96] lg:hidden'
            aria-label={open ? (isES ? 'Cerrar menú' : 'Close menu') : (isES ? 'Abrir menú' : 'Open menu')}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
          </button>
        </div>
      </div>

      {open ? (
        <div className='border-t border-[#d9e4e1] bg-[#fbfbfa] px-5 pb-5 pt-3 lg:hidden'>
          <div className='mx-auto flex max-w-7xl flex-col gap-1'>
            {items.map((item) => {
              const active = activeHash === item.hash
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789b96] ${
                    active ? 'bg-[#173634] text-white' : 'text-[#52605d] hover:bg-[#eef5f2] hover:text-[#173634]'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
            <Link
              href={contactHref}
              onClick={() => setOpen(false)}
              className='mt-3 inline-flex items-center justify-center rounded-full bg-[#173634] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#244946] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789b96]'
            >
              {isES ? 'Agendar diagnóstico' : 'Book diagnosis'}
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  )
}
