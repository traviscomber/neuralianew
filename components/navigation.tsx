'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CalendarCheck, Menu, X } from 'lucide-react'
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
    { href: href('#capabilities'), label: isES ? 'Problemas' : 'Problems' },
    { href: href('#solutions'), label: isES ? 'Soluciones' : 'Solutions' },
    { href: href('#how-we-work'), label: isES ? 'Metodo' : 'Method' },
    { href: href('#case-studies'), label: isES ? 'Proyectos' : 'Projects' },
    { href: href('#use-cases'), label: isES ? 'Casos de uso' : 'Use cases' },
    { href: href('#about'), label: isES ? 'Acerca de' : 'About' },
  ]

  return (
    <nav className='fixed inset-x-0 top-0 z-50 border-b border-[#dfe8e5] bg-[#fbfbfa]/95 backdrop-blur-md'>
      <div className='mx-auto grid h-18 max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-5 px-5 sm:px-8 lg:px-10'>
        <Link href={href('#top')} className='flex items-center gap-3 text-[#7f9f9a]' aria-label='N3uralia'>
          <BrandMark className='h-9 w-9 text-[#7f9f9a]' />
          <BrandWordmark className='hidden text-2xl text-[#7f9f9a] sm:block' />
        </Link>

        <div className='hidden items-center justify-center gap-5 lg:flex'>
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='text-sm font-light text-[#747b79] transition-colors hover:text-[#34403e]'
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className='flex items-center justify-end gap-3'>
          <Link
            href={href('#contacto')}
            className='hidden items-center gap-2 rounded-md border border-[#b9d0cb] bg-white px-4 py-2 text-sm font-medium text-[#6f918c] transition-colors hover:border-[#7f9f9a] hover:bg-[#f4f8f7] md:inline-flex'
          >
            <CalendarCheck className='h-4 w-4' aria-hidden='true' />
            {isES ? 'Agendar diagnostico' : 'Book diagnosis'}
          </Link>

          <button
            type='button'
            className='inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#d2dfdb] text-[#687572] lg:hidden'
            aria-label={open ? (isES ? 'Cerrar menu' : 'Close menu') : (isES ? 'Abrir menu' : 'Open menu')}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
          </button>
        </div>
      </div>

      {open ? (
        <div className='border-t border-[#d9e4e1] bg-white px-5 pb-5 pt-3 lg:hidden'>
          <div className='mx-auto flex max-w-7xl flex-col gap-1'>
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className='rounded-md px-3 py-3 text-sm font-medium text-[#687572] transition-colors hover:bg-[#f2f6f5] hover:text-[#34403e]'
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={href('#contacto')}
              onClick={() => setOpen(false)}
              className='mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-[#7f9f9a] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#6f918c]'
            >
              <CalendarCheck className='h-4 w-4' aria-hidden='true' />
              {isES ? 'Agendar diagnostico' : 'Book diagnosis'}
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  )
}
