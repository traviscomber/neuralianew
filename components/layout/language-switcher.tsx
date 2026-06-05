'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Globe } from 'lucide-react'
import { Locale, LOCALES } from '@/lib/get-locale'

export function LanguageSwitcher() {
  const pathname = usePathname()
  const currentPath = pathname || '/'
  const segments = currentPath.split('/')
  const currentLocale = LOCALES.includes(segments[1] as Locale) ? (segments[1] as Locale) : 'es'
  
  const getLocalizedPath = (locale: Locale) => {
    const pathSegments = currentPath.split('/')
    if (LOCALES.includes(pathSegments[1] as any)) {
      pathSegments[1] = locale
    } else {
      pathSegments.splice(1, 0, locale)
    }
    return pathSegments.join('/')
  }

  return (
    <div className="fixed top-24 right-4 z-40 flex items-center gap-2 bg-background/95 backdrop-blur rounded-full p-1.5 shadow-lg md:top-auto md:bottom-6 md:right-24">
      <Globe className="w-4 h-4 ml-2 text-muted-foreground" />
      {LOCALES.map((locale) => (
        <Link
          key={locale}
          href={getLocalizedPath(locale)}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
            currentLocale === locale
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {locale === 'es' ? 'Español' : 'English'}
        </Link>
      ))}
    </div>
  )
}
