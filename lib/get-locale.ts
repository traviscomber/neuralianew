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

export function getPreferredLocale(acceptLanguageHeader: string | null | undefined): Locale {
  if (!acceptLanguageHeader) {
    return DEFAULT_LOCALE
  }

  const preferred = acceptLanguageHeader
    .split(',')[0]
    .split('-')[0]
    .toLowerCase()

  return isValidLocale(preferred) ? preferred : DEFAULT_LOCALE
}

export function buildLocalizedPath(pathname: string, locale: Locale): string {
  const currentPath = pathname || '/'
  const segments = currentPath.split('/')

  if (isValidLocale(segments[1])) {
    segments[1] = locale
  } else {
    segments.splice(1, 0, locale)
  }

  const localizedPath = segments.join('/')
  return localizedPath === '' ? `/${locale}` : localizedPath
}
