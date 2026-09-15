import React from "react"
import type { Metadata } from "next"
import { headers } from "next/headers"
import { DEFAULT_LOCALE, isValidLocale } from "@/lib/get-locale"
import { absoluteUrl } from "@/lib/site"

interface BlogLayoutProps {
  children: React.ReactNode
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata(props: BlogLayoutProps): Promise<Metadata> {
  const params = await props.params
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const requestHeaders = await headers()
  const pathname = requestHeaders.get("x-n3uralia-pathname")
  const localePrefix = `/${locale}`
  const localizedBlogPrefix = `${localePrefix}/blog`
  const path = pathname?.startsWith(localizedBlogPrefix)
    ? pathname.slice(localePrefix.length)
    : "/blog"

  const esUrl = absoluteUrl(`/es${path}`)
  const enUrl = absoluteUrl(`/en${path}`)
  const canonical = locale === "es" ? esUrl : enUrl

  // The layout owns only URL identity. Article pages own their title,
  // description and social metadata so generic Blog metadata cannot overwrite
  // article-specific Open Graph/Twitter signals.
  return {
    alternates: {
      canonical,
      languages: {
        "es-CL": esUrl,
        es: esUrl,
        en: enUrl,
        "en-US": enUrl,
        "x-default": enUrl,
      },
    },
  }
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return <>{children}</>
}
