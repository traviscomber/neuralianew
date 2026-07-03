import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { getPreferredLocale } from '@/lib/get-locale'

export default async function RootPage() {
  const headerStore = await headers()
  const locale = getPreferredLocale(headerStore.get('accept-language'))
  redirect(`/${locale}/`)
}
