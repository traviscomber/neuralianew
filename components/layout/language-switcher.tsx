'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Globe } from 'lucide-react'
import { Locale, LOCALES } from '@/lib/get-locale'

export function LanguageSwitcher() {
  const pathname = usePathname()
  const segments = pathname.split('/')
  const currentLocale = segments[1] as Locale || 'es'
  
  const getLocalizedPath = (locale: Locale) => {
    const pathSegments = pathname.split('/')
    if (LOCALES.includes(pathSegments[1] as any)) {
      pathSegments[1] = locale
    } else {
      pathSegments.splice(1, 0, locale)
    }
    return pathSegments.join('/')
  }

  return (
    <div className="flex items-center gap-1">
      {LOCALES.map((locale) => (
        <Link
          key={locale}
          href={getLocalizedPath(locale)}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            currentLocale === locale
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          }`}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  )
}
