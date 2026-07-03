import type { Metadata } from "next"
import type { Locale } from "@/lib/get-locale"

/**
 * Build localized metadata for pages
 * Handles both ES and EN locales with proper SEO tags
 * Supports regular pages and articles
 */
export function buildLocalizedMetadata({
  locale,
  title,
  description,
  path,
  image,
  keywords,
  type = "website",
  publishedTime,
  author,
}: {
  locale: Locale
  title: string
  description: string
  path: string
  image?: string
  keywords?: string
  type?: "website" | "article"
  publishedTime?: string
  author?: string
}): Metadata {
  const SITE_URL = "https://n3uralia.com"
  const fullPath = `/${locale}${path}`
  const url = `${SITE_URL}${fullPath}`

  // Build alternate path (swap locale)
  const altLocale = locale === "es" ? "en" : "es"
  const altPath = `/${altLocale}${path}`
  const altUrl = `${SITE_URL}${altPath}`

  const ogType = type === "article" ? "article" : "website"

  return {
    title: `${title}`,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: {
        es: locale === "es" ? url : altUrl,
        en: locale === "en" ? url : altUrl,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "N3uralia",
      locale: locale === "es" ? "es_CL" : "en_US",
      type: ogType,
      ...(image && { images: [{ url: image }] }),
      ...(type === "article" && publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image && { images: [image] }),
    },
  }
}
