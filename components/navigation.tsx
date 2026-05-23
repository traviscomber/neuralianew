'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Globe } from 'lucide-react'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const params = useParams()
  const locale = (params?.locale as string) || 'es'
  const isES = locale === 'es'

  const href = (path: string) => `/${locale}${path}`
  const otherLocale = isES ? 'en' : 'es'
  const hrefLocale = (path: string) => `/${otherLocale}${path}`

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="w-full max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href={href('/')} className="flex items-center flex-shrink-0">
          <Image src="/logo-n3uralia.png" alt="N3uralia" width={56} height={56} className="h-14 w-auto" priority />
        </Link>

        <div className="hidden md:flex flex-1 justify-center items-center gap-1">
          <Link href={href('/capabilities')} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition">
            {isES ? 'Capacidades' : 'Capabilities'}
          </Link>
          <Link href={href('/solutions')} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition">
            {isES ? 'Soluciones' : 'Solutions'}
          </Link>

          <div className="relative group">
            <button className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition flex items-center gap-1">
              {isES ? 'Sistemas Agénticos' : 'Agent Systems'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </button>
            <div className="absolute left-0 mt-0 w-56 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link href={href('/agent-matrix')} className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition first:rounded-t-lg">
                Agent Matrix
              </Link>
              <Link href={href('/agent-operations')} className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition last:rounded-b-lg border-t border-border/50">
                {isES ? 'Operaciones Agénticas' : 'Agent Operations'}
              </Link>
            </div>
          </div>

          <Link href={href('/case-studies')} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition">
            {isES ? 'Casos de Éxito' : 'Case Studies'}
          </Link>
          <Link href={href('/faq')} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition">
            FAQ
          </Link>
          <Link href={href('/about')} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition">
            {isES ? 'Acerca de' : 'About'}
          </Link>
        </div>

        <div className="hidden md:flex gap-2 items-center flex-shrink-0">
          <Link href={href('/contact')} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium transition">
            {isES ? 'Contactar' : 'Contact'}
          </Link>
          <Link href={hrefLocale('/')} className="px-3 py-2 flex items-center gap-2 border border-primary/30 rounded-lg text-sm font-medium transition">
            <Globe className="w-4 h-4" />
            {isES ? 'EN' : 'ES'}
          </Link>
          <ThemeToggle />
        </div>

        <button 
          className="md:hidden text-foreground ml-auto" 
          onClick={() => {
            setOpen(!open)
          }}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="fixed top-20 left-0 right-0 md:hidden border-t border-border bg-background w-full z-50 px-4 py-4 space-y-1 max-h-[calc(100vh-100px)] overflow-y-auto shadow-lg" style={{ backgroundColor: 'hsl(var(--background))' }}>
          <Link href={href('/capabilities')} onClick={() => setOpen(false)} className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded transition">
            {isES ? 'Capacidades' : 'Capabilities'}
          </Link>
          <Link href={href('/solutions')} onClick={() => setOpen(false)} className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded transition">
            {isES ? 'Soluciones' : 'Solutions'}
          </Link>
          
          <Link href={href('/agent-matrix')} onClick={() => setOpen(false)} className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded transition">
            {isES ? 'Sistemas Agénticos' : 'Agent Systems'}
          </Link>
          <Link href={href('/agent-operations')} onClick={() => setOpen(false)} className="block px-4 py-3 ml-4 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded transition">
            {isES ? '└ Operaciones Agénticas' : '└ Agent Operations'}
          </Link>

          <Link href={href('/case-studies')} onClick={() => setOpen(false)} className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded transition">
            {isES ? 'Casos de Éxito' : 'Case Studies'}
          </Link>
          <Link href={href('/faq')} onClick={() => setOpen(false)} className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded transition">
            FAQ
          </Link>
          <Link href={href('/about')} onClick={() => setOpen(false)} className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded transition">
            {isES ? 'Acerca de' : 'About'}
          </Link>

          <div className="pt-4 mt-4 border-t border-border space-y-2">
            <Link href={href('/contact')} onClick={() => setOpen(false)} className="block px-4 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium text-center hover:bg-primary/90 transition">
              {isES ? 'Contactar' : 'Contact'}
            </Link>
            <Link href={hrefLocale('/')} onClick={() => setOpen(false)} className="block px-4 py-3 flex items-center justify-center gap-2 border border-primary/30 rounded-lg text-sm font-medium hover:border-primary/50 transition">
              <Globe className="w-4 h-4" />
              {isES ? 'EN' : 'ES'}
            </Link>
            <div className="flex items-center justify-center pt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
