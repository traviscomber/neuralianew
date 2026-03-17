'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [agentOpen, setAgentOpen] = useState(false)
  const params = useParams()
  const locale = (params?.locale as string) || 'es'
  const isES = locale === 'es'

  const href = (path: string) => `/${locale}${path}`
  const toggleLocale = () => `/${isES ? 'en' : 'es'}${locale === 'es' ? '' : ''}`

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur border-b border-border">
      <div className="w-full max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href={href('/')} className="flex items-center">
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
            <button 
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition flex items-center gap-1"
              onMouseEnter={() => setAgentOpen(true)}
              onMouseLeave={() => setAgentOpen(false)}
            >
              {isES ? 'Sistemas Agénticos' : 'Agent Systems'}
              <ChevronDown className="w-4 h-4" />
            </button>
            {agentOpen && (
              <div 
                className="absolute top-full left-0 mt-1 w-48 bg-background border border-border rounded-lg shadow-lg py-2 z-50"
                onMouseEnter={() => setAgentOpen(true)}
                onMouseLeave={() => setAgentOpen(false)}
              >
                <Link href={href('/agent-matrix')} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition">
                  Agent Matrix
                </Link>
                <Link href={href('/agent-operations')} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition">
                  {isES ? 'Operaciones Agénticas' : 'Agent Operations'}
                </Link>
              </div>
            )}
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

        <div className="hidden md:flex gap-2 items-center">
          <Link href={href('/contact')} className="px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg text-sm font-medium transition">
            {isES ? 'Contactar' : 'Contact'}
          </Link>
          <Link href={toggleLocale} className="px-3 py-2 flex items-center gap-2 border border-primary/30 rounded-lg text-sm font-medium transition">
            <Globe className="w-4 h-4" />
            {isES ? 'EN' : 'ES'}
          </Link>
          <ThemeToggle />
        </div>

        <button className="md:hidden text-foreground ml-auto" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="fixed top-20 left-0 right-0 md:hidden border-t border-border bg-background w-full z-40 px-4 p-4 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
          <Link href={href('/capabilities')} onClick={() => setOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition">
            {isES ? 'Capacidades' : 'Capabilities'}
          </Link>
          <Link href={href('/solutions')} onClick={() => setOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition">
            {isES ? 'Soluciones' : 'Solutions'}
          </Link>
          
          <div>
            <button 
              onClick={() => setAgentOpen(!agentOpen)}
              className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition flex items-center justify-between"
            >
              {isES ? 'Sistemas Agénticos' : 'Agent Systems'}
              <ChevronDown className="w-4 h-4" />
            </button>
            {agentOpen && (
              <div className="ml-4 space-y-2 mt-2 border-l-2 border-muted/50 pl-2">
                <Link href={href('/agent-matrix')} onClick={() => { setOpen(false); setAgentOpen(false) }} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition">
                  Agent Matrix
                </Link>
                <Link href={href('/agent-operations')} onClick={() => { setOpen(false); setAgentOpen(false) }} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition">
                  {isES ? 'Operaciones Agénticas' : 'Agent Operations'}
                </Link>
              </div>
            )}
          </div>

          <Link href={href('/case-studies')} onClick={() => setOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition">
            {isES ? 'Casos de Éxito' : 'Case Studies'}
          </Link>
          <Link href={href('/faq')} onClick={() => setOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition">
            FAQ
          </Link>
          <Link href={href('/about')} onClick={() => setOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition">
            {isES ? 'Acerca de' : 'About'}
          </Link>

          <div className="pt-2 border-t border-border space-y-2">
            <Link href={href('/contact')} onClick={() => setOpen(false)} className="block px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium text-center transition">
              {isES ? 'Contactar' : 'Contact'}
            </Link>
            <Link href={toggleLocale} onClick={() => setOpen(false)} className="block px-3 py-2 flex items-center justify-center gap-2 border border-primary/30 rounded-lg text-sm font-medium transition">
              <Globe className="w-4 h-4" />
              {isES ? 'EN' : 'ES'}
            </Link>
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  )
}
