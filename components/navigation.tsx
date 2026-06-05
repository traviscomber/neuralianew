'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Globe } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const params = useParams()
  const pathname = usePathname()
  const router = useRouter()
  const locale = (params?.locale as string) || 'es'
  const isES = locale === 'es'

  // Ensure component is mounted before rendering interactive elements
  useEffect(() => {
    setMounted(true)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const href = (path: string) => `/${locale}${path}`
  const otherLocale = isES ? 'en' : 'es'
  const hrefLocale = (path: string) => `/${otherLocale}${path}`

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-background border-b border-border">
      <div className="w-full max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} onClick={closeMobileMenu} className="flex items-center flex-shrink-0">
          <Image src="/logo-n3uralia.png" alt="N3uralia" width={56} height={56} className="h-14 w-auto" priority />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-1">
          <Link href={href('/capabilities')} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition">
            {isES ? 'Capacidades' : 'Capabilities'}
          </Link>
          <Link href={href(isES ? '/soluciones' : '/solutions')} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition">
            {isES ? 'Soluciones' : 'Solutions'}
          </Link>

          <Link href={href('/how-we-work')} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition">
            {isES ? 'Cómo trabajamos' : 'How We Work'}
          </Link>

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

        {/* Desktop Actions */}
        <div className="hidden md:flex gap-3 items-center flex-shrink-0">
          <Link href={href('/contact')} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition">
            {isES ? 'Agendar diagnóstico' : 'Schedule diagnosis'}
          </Link>
          
          {/* Language Toggle */}
          <button 
            onClick={() => router.push(hrefLocale('/'))}
            className="px-3 py-2 flex items-center gap-2 border border-primary/30 rounded-lg text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition"
            title={isES ? 'Cambiar a English' : 'Cambiar a Español'}
          >
            <Globe className="w-4 h-4" />
            {isES ? 'EN' : 'ES'}
          </button>
          
          {/* Theme Toggle */}
          {mounted && <ThemeToggle />}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground ml-auto p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu - Only render when mounted to avoid hydration issues */}
      {mounted && mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-1">
          <Link href={href('/capabilities')} onClick={closeMobileMenu} className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded transition">
            {isES ? 'Capacidades' : 'Capabilities'}
          </Link>
          <Link href={href(isES ? '/soluciones' : '/solutions')} onClick={closeMobileMenu} className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded transition">
            {isES ? 'Soluciones' : 'Solutions'}
          </Link>
          <Link href={href('/how-we-work')} onClick={closeMobileMenu} className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded transition">
            {isES ? 'Cómo trabajamos' : 'How We Work'}
          </Link>
          <Link href={href('/case-studies')} onClick={closeMobileMenu} className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded transition">
            {isES ? 'Casos de Éxito' : 'Case Studies'}
          </Link>
          <Link href={href('/faq')} onClick={closeMobileMenu} className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded transition">
            FAQ
          </Link>
          <Link href={href('/about')} onClick={closeMobileMenu} className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded transition">
            {isES ? 'Acerca de' : 'About'}
          </Link>

          <div className="pt-4 mt-4 border-t border-border space-y-2">
            <Link href={href('/contact')} onClick={closeMobileMenu} className="block px-4 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium text-center hover:bg-primary/90 transition">
              {isES ? 'Agendar diagnóstico' : 'Schedule diagnosis'}
            </Link>
            
            {/* Mobile Language Toggle */}
            <button 
              onClick={() => {
                closeMobileMenu()
                router.push(hrefLocale('/'))
              }}
              className="block w-full px-4 py-3 flex items-center justify-center gap-2 border border-primary/30 rounded-lg text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition"
              title={isES ? 'Cambiar a English' : 'Cambiar a Español'}
            >
              <Globe className="w-4 h-4" />
              {isES ? 'EN' : 'ES'}
            </button>
            
            {/* Mobile Theme Toggle */}
            <div className="flex items-center justify-center pt-2">
              {mounted && <ThemeToggle />}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
