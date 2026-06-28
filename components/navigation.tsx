'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { BrandMark } from '@/components/brand'
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
    { href: href('#capabilities'), label: isES ? 'Capacidades' : 'Capabilities' },
    { href: href('#solutions'), label: isES ? 'Soluciones' : 'Solutions' },
    { href: href('#how-we-work'), label: isES ? 'Cómo trabajamos' : 'How we work' },
    { href: href('#case-studies'), label: isES ? 'Casos de estudio' : 'Case studies' },
    { href: href('#faq'), label: isES ? 'FAQ' : 'FAQ' },
    { href: href('#about'), label: isES ? 'Acerca de' : 'About' },
  ]

  return (
    <nav className='fixed inset-x-0 top-0 z-50 border-b border-[#d9e4e1]/90 bg-white/92 backdrop-blur-md'>
      <div className='mx-auto grid h-20 max-w-[1500px] grid-cols-[auto_1fr_auto] items-center gap-6 px-4 sm:px-6 lg:px-10'>
        <Link href={href('#top')} className='flex items-center'>
          <span className='grid h-12 w-12 place-items-center rounded-full bg-[#23363a] shadow-[0_0_0_1px_rgba(152,181,176,0.35)]'>
            <BrandMark className='h-7 w-7 text-[#a7c1bb]' />
          </span>
        </Link>

        <div className='hidden items-center justify-center gap-1 lg:flex'>
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='rounded-full px-4 py-2 text-[0.96rem] font-light tracking-[-0.01em] text-[#8b8f8e] transition-colors hover:bg-[#f3f7f6] hover:text-[#5f6766]'
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className='flex items-center justify-end gap-3'>
          <Link
            href={href('#contacto')}
            className='hidden rounded-full border border-[#c8ddd8] bg-white px-5 py-2.5 text-sm font-medium text-[#8aa8a4] transition-all hover:-translate-y-0.5 hover:border-[#8aa8a4] hover:bg-[#f7fbfa] md:inline-flex'
          >
            {isES ? 'Agendar diagnóstico' : 'Book diagnosis'}
          </Link>

          <button
            type='button'
            className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d2dfdb] text-[#687572] lg:hidden'
            aria-label={open ? (isES ? 'Cerrar menú' : 'Close menu') : (isES ? 'Abrir menú' : 'Open menu')}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
          </button>
        </div>
      </div>

      {open ? (
        <div className='border-t border-[#d9e4e1] bg-white/98 px-4 pb-4 pt-3 lg:hidden'>
          <div className='mx-auto flex max-w-[1500px] flex-col gap-2'>
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className='rounded-2xl px-4 py-3 text-sm font-medium text-[#747a79] transition-colors hover:bg-[#f2f6f5] hover:text-[#4f5857]'
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={href('#contacto')}
              onClick={() => setOpen(false)}
              className='mt-2 rounded-2xl bg-[#8aa8a4] px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#7d9f9b]'
            >
              {isES ? 'Agendar diagnóstico' : 'Book diagnosis'}
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  )
}
