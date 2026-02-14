'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

export function useLocale() {
  const pathname = usePathname()
  const locale = pathname.split('/')[1] === 'es' ? 'es' : 'en'
  return locale
}

export function useLocalizedPath(path: string) {
  const locale = useLocale()
  return locale === 'es' ? `/es${path}` : `/en${path}`
}
