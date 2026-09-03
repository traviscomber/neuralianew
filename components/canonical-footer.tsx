'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { BrandWordmark } from '@/components/brand'
import type { Locale } from '@/lib/get-locale'

const copy = {
  es: {
    tagline: 'Sistemas de IA, automatización y software para operaciones reales.',
    explore: 'Explorar',
    company: 'Empresa',
    resources: 'Recursos',
    contact: 'Contacto',
    expertise: 'Expertise',
    projects: 'Proyectos',
    products: 'Productos',
    recognition: 'Reconocimiento',
    diagnosis: 'Diagnóstico',
    about: 'Nosotros',
    labs: 'Labs',
    faq: 'Preguntas frecuentes',
    contactPage: 'Contactar',
    book: 'Agendar diagnóstico',
    location: 'Santiago, Chile · LATAM',
    rights: 'Todos los derechos reservados.',
    language: 'English',
  },
  en: {
    tagline: 'AI systems, automation and software for real operations.',
    explore: 'Explore',
    company: 'Company',
    resources: 'Resources',
    contact: 'Contact',
    expertise: 'Expertise',
    projects: 'Projects',
    products: 'Products',
    recognition: 'Recognition',
    diagnosis: 'Diagnosis',
    about: 'About',
    labs: 'Labs',
    faq: 'FAQ',
    contactPage: 'Contact',
    book: 'Book a diagnosis',
    location: 'Santiago, Chile · LATAM',
    rights: 'All rights reserved.',
    language: 'Español',
  },
} as const

export function CanonicalFooter({ locale }: { locale: Locale }) {
  const t = copy[locale]
  const projectsPath = locale === 'es' ? 'proyectos' : 'projects'
  const productsPath = locale === 'es' ? 'productos' : 'products'
  const recognitionPath = locale === 'es' ? 'reconocimiento' : 'recognition'
  const otherLocale = locale === 'es' ? 'en' : 'es'

  const explore = [
    [t.expertise, `/${locale}/soluciones`],
    [t.projects, `/${locale}/${projectsPath}`],
    [t.products, `/${locale}/${productsPath}`],
    [t.recognition, `/${locale}/${recognitionPath}`],
  ] as const

  const company = [
    [t.diagnosis, `/${locale}/diagnostico`],
    [t.about, `/${locale}/about`],
    [t.contactPage, `/${locale}/contact`],
  ] as const

  const resources = [
    [t.labs, `/${locale}/labs`],
    [t.faq, `/${locale}/faq`],
    [t.language, `/${otherLocale}`],
  ] as const

  const linkClass = 'w-fit text-[13px] leading-6 text-[#9eaaaa] transition-colors hover:text-[#739694] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#739694]'

  return (
    <footer className="n3-canonical-footer border-t border-[#739694]/20 bg-[#030606] text-[#d8e0df]">
      <div className="mx-auto max-w-[1240px] px-5 pb-6 pt-14 sm:px-8 lg:px-5 lg:pt-16">
        <div className="grid gap-12 border-b border-[#739694]/18 pb-12 md:grid-cols-2 lg:grid-cols-[1.6fr_0.7fr_0.7fr_0.8fr_1.15fr] lg:gap-8">
          <div className="max-w-sm">
            <Link href={`/${locale}`} aria-label="N3uralia home" className="inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#739694]">
              <BrandWordmark className="h-[44px] w-[168px]" priority sizes="168px" />
            </Link>
            <p className="mt-5 text-sm leading-7 text-[#9eaaaa]">{t.tagline}</p>
            <p className="mt-4 font-[var(--font-rajdhani)] text-[11px] uppercase tracking-[0.16em] text-[#739694]">{t.location}</p>
          </div>

          <FooterColumn title={t.explore} items={explore} linkClass={linkClass} />
          <FooterColumn title={t.company} items={company} linkClass={linkClass} />
          <FooterColumn title={t.resources} items={resources} linkClass={linkClass} />

          <div>
            <p className="font-[var(--font-rajdhani)] text-[11px] uppercase tracking-[0.18em] text-[#739694]">{t.contact}</p>
            <div className="mt-5 flex flex-col gap-2.5">
              <a className={linkClass} href="mailto:info@n3uralia.com">info@n3uralia.com</a>
              <a className={linkClass} href="tel:+56993826127">+56 9 9382 6127</a>
              <a className={`${linkClass} inline-flex items-center gap-1.5`} href="https://linkedin.com/company/n3uralia" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight className="h-3.5 w-3.5" /></a>
            </div>
            <Link href={`/${locale}/diagnostico`} className="mt-6 inline-flex items-center gap-2 border border-[#739694] px-4 py-3 font-[var(--font-rajdhani)] text-[11px] uppercase tracking-[0.15em] text-[#d8e0df] transition-colors hover:bg-[#739694] hover:text-[#030606] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#739694]">
              {t.book}<ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 font-[var(--font-rajdhani)] text-[10px] uppercase tracking-[0.13em] text-[#667573] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} N3uralia. {t.rights}</p>
          <p>n3uralia.com</p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, items, linkClass }: { title: string; items: readonly (readonly [string, string])[]; linkClass: string }) {
  return (
    <div>
      <p className="font-[var(--font-rajdhani)] text-[11px] uppercase tracking-[0.18em] text-[#739694]">{title}</p>
      <nav className="mt-5 flex flex-col gap-2.5" aria-label={title}>
        {items.map(([label, href]) => <Link key={href} href={href} className={linkClass}>{label}</Link>)}
      </nav>
    </div>
  )
}
