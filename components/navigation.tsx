'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { BrandMark, BrandWordmark } from '@/components/brand'
import type { Locale } from '@/lib/get-locale'

interface NavigationProps {
  locale?: Locale
}

type NavItem = {
  href: string
  label: string
}

export default function Navigation({ locale = 'es' }: NavigationProps) {
  const [open, setOpen] = useState(false)
  const isES = locale === 'es'
  const href = (hash: string) => `/${locale}${hash}`

  const items: NavItem[] = [
    { href: href('#explainer'), label: isES ? 'En simple' : 'In simple terms' },
    { href: href('#solutions'), label: isES ? 'Sistemas' : 'Systems' },
    { href: href('#case-studies'), label: isES ? 'Proyectos' : 'Projects' },
    { href: href('#use-cases'), label: isES ? 'Casos' : 'Use cases' },
    { href: href('#how-we-work'), label: isES ? 'Modelos' : 'Models' },
    { href: href('#about'), label: isES ? 'Por qué' : 'Why' },
  ]

  return (
    <nav className='fixed inset-x-0 top-0 z-50 border-b border-[#dfe8e5]/80 bg-[#fbfbfa]/82 shadow-[0_18px_60px_-52px_#173634] backdrop-blur-xl'>
      <div className='mx-auto grid h-[4.75rem] max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-5 px-5 sm:px-8 lg:px-10'>
        <Link href={href('#top')} className='flex items-center gap-3 text-[#173634]' aria-label='N3uralia'>
          <BrandMark className='h-10 w-10 rounded-2xl text-[#789b96]' />
          <BrandWordmark className='hidden text-2xl text-[#789b96] sm:block' />
        </Link>

        <div className='hidden items-center justify-center gap-1 rounded-full border border-[#d8e5e2] bg-white/70 px-2 py-2 lg:flex'>
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='rounded-full px-4 py-2 text-sm font-medium text-[#65706d] transition-colors hover:bg-[#eef5f2] hover:text-[#173634]'
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className='flex items-center justify-end gap-3'>
          <Link
            href={href('#contacto')}
            className='hidden rounded-full bg-[#173634] px-5 py-3 text-sm font-semibold text-white shadow-[0_22px_55px_-34px_#173634] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#244946] md:inline-flex'
          >
            {isES ? 'Agendar diagnóstico' : 'Book diagnosis'}
          </Link>

          <button
            type='button'
            className='inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d2dfdb] bg-white/70 text-[#173634] lg:hidden'
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
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className='rounded-2xl px-4 py-3 text-sm font-semibold text-[#52605d] transition-colors hover:bg-[#eef5f2] hover:text-[#173634]'
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={href('#contacto')}
              onClick={() => setOpen(false)}
              className='mt-3 inline-flex items-center justify-center rounded-full bg-[#173634] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#244946]'
            >
              {isES ? 'Agendar diagnóstico' : 'Book diagnosis'}
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  )
}
