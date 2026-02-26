export type Locale = 'es' | 'en'

export const LOCALES: Locale[] = ['es', 'en']
export const DEFAULT_LOCALE: Locale = 'es'

export function isValidLocale(locale: string): locale is Locale {
  return (LOCALES as string[]).includes(locale)
}

export function getLocale(pathname: string): Locale {
  const segments = pathname.split('/')
  const locale = segments[1]
  return isValidLocale(locale) ? locale : DEFAULT_LOCALE
}
