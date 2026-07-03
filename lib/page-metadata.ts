import type { Metadata } from "next"
import type { Locale } from "@/lib/get-locale"
import { absoluteUrl, OG_IMAGE_PATH, SITE_NAME, SITE_TWITTER_HANDLE } from "@/lib/site"

interface LocalizedMetadataOptions {
  description: string
  locale: Locale
  path?: string
  title: string
  type?: "article" | "website"
}

function buildLocalizedPath(locale: Locale, path = "/") {
  const normalizedPath = !path || path === "/" ? "" : path.startsWith("/") ? path : `/${path}`
  return `/${locale}${normalizedPath}`
}

export function buildLocalizedMetadata({
  description,
  locale,
  path = "/",
  title,
  type = "website",
}: LocalizedMetadataOptions): Metadata {
  const currentPath = buildLocalizedPath(locale, path)
  const spanishPath = buildLocalizedPath("es", path)
  const englishPath = buildLocalizedPath("en", path)
  const openGraphLocale = locale === "es" ? "es_CL" : "en_US"
  const alternateLocale = locale === "es" ? ["en_US"] : ["es_CL"]

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(currentPath),
      languages: {
        es: absoluteUrl(spanishPath),
        en: absoluteUrl(englishPath),
      },
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(currentPath),
      type,
      siteName: SITE_NAME,
      locale: openGraphLocale,
      alternateLocale: alternateLocale,
      images: [
        {
          url: absoluteUrl(OG_IMAGE_PATH),
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: SITE_TWITTER_HANDLE,
      creator: SITE_TWITTER_HANDLE,
      images: [absoluteUrl(OG_IMAGE_PATH)],
    },
  }
}
