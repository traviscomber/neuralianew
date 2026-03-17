'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { useParams } from 'next/navigation'
import { ThemeToggle } from '@/components/theme-toggle'

interface NavigationProps {
  locale?: string
}

export default function Navigation({ locale: initialLocale }: NavigationProps = {}) {
  const [open, setOpen] = useState(false)
  const [agentSystemsOpen, setAgentSystemsOpen] = useState(false)
  const params = useParams()
  const locale = initialLocale || (params?.locale as string) || 'es'
  const isES = locale === 'es'
  const otherLocale = isES ? 'en' : 'es'

  const href = (path: string) => `/${locale}${path}`
  const hrefLocale = (path: string) => `/${otherLocale}${path}`

  const labels = {
    capabilities: isES ? 'Capacidades' : 'Capabilities',
    solutions: isES ? 'Soluciones' : 'Solutions',
    agentSystems: isES ? 'Sistemas Agénticos' : 'Agent Systems',
    agentMatrix: 'Agent Matrix',
    agentOperations: isES ? 'Operaciones Agénticas' : 'Agent Operations',
    caseStudies: isES ? 'Casos de Éxito' : 'Case Studies',
    faq: isES ? 'FAQ' : 'FAQ',
    about: isES ? 'Acerca de' : 'About',
    contact: isES ? 'Contactar' : 'Contact',
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur border-b border-border">
      <div className="w-full max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href={href('/')} className="flex items-center flex-shrink-0">
          <Image src="/logo-n3uralia.png" alt="N3uralia" width={56} height={56} className="h-14 w-auto" priority />
        </Link>

        <div className="hidden md:flex flex-1 justify-center items-center gap-1">
          <Link href={href('/capabilities')} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all">
            {labels.capabilities}
          </Link>

          <Link href={href('/solutions')} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all">
            {labels.solutions}
          </Link>

          <div className="relative group">
            <button onMouseEnter={() => setAgentSystemsOpen(true)} onMouseLeave={() => setAgentSystemsOpen(false)} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all flex items-center gap-1">
              {labels.agentSystems}
              <ChevronDown className="w-4 h-4 transition-transform" style={{ transform: agentSystemsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </button>

            {agentSystemsOpen && (
              <div onMouseEnter={() => setAgentSystemsOpen(true)} onMouseLeave={() => setAgentSystemsOpen(false)} className="absolute top-full left-0 mt-1 w-48 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                <Link href={href('/agent-matrix')} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all">
                  {labels.agentMatrix}
                </Link>
                <Link href={href('/agent-operations')} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all">
                  {labels.agentOperations}
                </Link>
              </div>
            )}
          </div>

          <Link href={href('/case-studies')} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all">
            {labels.caseStudies}
          </Link>

          <Link href={href('/faq')} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all">
            {labels.faq}
          </Link>

          <Link href={href('/about')} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all">
            {labels.about}
          </Link>
        </div>

        <div className="hidden md:flex gap-2 items-center flex-shrink-0">
          <Link href={href('/contact')} className="px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg text-sm font-medium transition-colors">
            {labels.contact}
          </Link>

          <Link href={hrefLocale('/')} className="px-3 py-2 flex items-center gap-2 border border-primary/30 hover:border-primary/60 text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg text-sm font-medium transition-all">
            <Globe className="w-4 h-4" />
            <span>{isES ? 'ES' : 'EN'}</span>
          </Link>

          <ThemeToggle />
        </div>

        <button className="md:hidden text-foreground ml-auto" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="fixed top-20 left-0 right-0 md:hidden border-t border-border bg-background w-full z-40 px-4 p-4 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
          <Link href={href('/capabilities')} onClick={() => setOpen(false)} className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all">
            {labels.capabilities}
          </Link>

          <Link href={href('/solutions')} onClick={() => setOpen(false)} className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all">
            {labels.solutions}
          </Link>

          <div>
            <button onClick={() => setAgentSystemsOpen(!agentSystemsOpen)} className="w-full text-left px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all flex items-center justify-between">
              {labels.agentSystems}
              <ChevronDown className="w-4 h-4 transition-transform" style={{ transform: agentSystemsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </button>
            
            {agentSystemsOpen && (
              <div className="ml-4 space-y-2 mt-2 border-l-2 border-muted/50 pl-2">
                <Link href={href('/agent-matrix')} onClick={() => { setOpen(false); setAgentSystemsOpen(false) }} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all">
                  {labels.agentMatrix}
                </Link>
                <Link href={href('/agent-operations')} onClick={() => { setOpen(false); setAgentSystemsOpen(false) }} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all">
                  {labels.agentOperations}
                </Link>
              </div>
            )}
          </div>

          <Link href={href('/case-studies')} onClick={() => setOpen(false)} className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all">
            {labels.caseStudies}
          </Link>

          <Link href={href('/faq')} onClick={() => setOpen(false)} className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all">
            {labels.faq}
          </Link>

          <Link href={href('/about')} onClick={() => setOpen(false)} className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all">
            {labels.about}
          </Link>

          <div className="pt-2 border-t border-border space-y-2">
            <Link href={href('/contact')} onClick={() => setOpen(false)} className="block px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium text-center">
              {labels.contact}
            </Link>
            <Link href={hrefLocale('/')} onClick={() => setOpen(false)} className="block px-3 py-2 flex items-center justify-center gap-2 border border-primary/30 hover:border-primary/60 text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg text-sm font-medium transition-all">
              <Globe className="w-4 h-4" />
              <span>{isES ? 'EN' : 'ES'}</span>
            </Link>
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur border-b border-border">
      <div className="w-full max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href={href('/')} className="flex items-center flex-shrink-0">
          <Image src="/logo-n3uralia.png" alt="N3uralia" width={56} height={56} className="h-14 w-auto" priority />
        </Link>

        <div className="hidden md:flex flex-1 justify-center items-center gap-1">
          <Link href={href('/capabilities')} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all">
            {labels.capabilities}
          </Link>

          <Link href={href('/solutions')} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all">
            {labels.solutions}
          </Link>

          <div className="relative group">
            <button onMouseEnter={() => setAgentSystemsOpen(true)} onMouseLeave={() => setAgentSystemsOpen(false)} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all flex items-center gap-1">
              {labels.agentSystems}
              <ChevronDown className="w-4 h-4 transition-transform" style={{ transform: agentSystemsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </button>

            {agentSystemsOpen && (
              <div onMouseEnter={() => setAgentSystemsOpen(true)} onMouseLeave={() => setAgentSystemsOpen(false)} className="absolute top-full left-0 mt-1 w-48 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
                <Link href={href('/agent-matrix')} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all">
                  {labels.agentMatrix}
                </Link>
                <Link href={href('/agent-operations')} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all">
                  {labels.agentOperations}
                </Link>
              </div>
            )}
          </div>

          <Link href={href('/case-studies')} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all">
            {labels.caseStudies}
          </Link>

          <Link href={href('/faq')} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all">
            {labels.faq}
          </Link>

          <Link href={href('/about')} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all">
            {labels.about}
          </Link>
        </div>

        <div className="hidden md:flex gap-2 items-center flex-shrink-0">
          <Link href={href('/contact')} className="px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg text-sm font-medium transition-colors">
            {labels.contact}
          </Link>

          <Link href={hrefLocale('/')} className="px-3 py-2 flex items-center gap-2 border border-primary/30 hover:border-primary/60 text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg text-sm font-medium transition-all">
            <Globe className="w-4 h-4" />
            <span>{isES ? 'ES' : 'EN'}</span>
          </Link>

          <ThemeToggle />
        </div>

        <button className="md:hidden text-foreground ml-auto" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="fixed top-20 left-0 right-0 md:hidden border-t border-border bg-background w-full z-40 px-4 p-4 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
          <Link href={href('/capabilities')} onClick={() => setOpen(false)} className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all">
            {labels.capabilities}
          </Link>

          <Link href={href('/solutions')} onClick={() => setOpen(false)} className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all">
            {labels.solutions}
          </Link>

          <div>
            <button onClick={() => setAgentSystemsOpen(!agentSystemsOpen)} className="w-full text-left px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all flex items-center justify-between">
              {labels.agentSystems}
              <ChevronDown className="w-4 h-4 transition-transform" style={{ transform: agentSystemsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </button>
            
            {agentSystemsOpen && (
              <div className="ml-4 space-y-2 mt-2 border-l-2 border-muted/50 pl-2">
                <Link href={href('/agent-matrix')} onClick={() => { setOpen(false); setAgentSystemsOpen(false) }} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all">
                  {labels.agentMatrix}
                </Link>
                <Link href={href('/agent-operations')} onClick={() => { setOpen(false); setAgentSystemsOpen(false) }} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all">
                  {labels.agentOperations}
                </Link>
              </div>
            )}
          </div>

          <Link href={href('/case-studies')} onClick={() => setOpen(false)} className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all">
            {labels.caseStudies}
          </Link>

          <Link href={href('/faq')} onClick={() => setOpen(false)} className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all">
            {labels.faq}
          </Link>

          <Link href={href('/about')} onClick={() => setOpen(false)} className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-all">
            {labels.about}
          </Link>

          <div className="pt-2 border-t border-border space-y-2">
            <Link href={href('/contact')} onClick={() => setOpen(false)} className="block px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium text-center">
              {labels.contact}
            </Link>
            <Link href={hrefLocale('/')} onClick={() => setOpen(false)} className="block px-3 py-2 flex items-center justify-center gap-2 border border-primary/30 hover:border-primary/60 text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg text-sm font-medium transition-all">
              <Globe className="w-4 h-4" />
              <span>{isES ? 'EN' : 'ES'}</span>
            </Link>
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
