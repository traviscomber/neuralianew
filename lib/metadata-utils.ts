import type { Metadata } from "next"
import type { Locale } from "@/content/dictionaries"
import { absoluteUrl, OG_IMAGE_PATH, SITE_NAME, SITE_URL } from "@/lib/site"

function normalizeCanonical(canonical: string | undefined, locale: Locale) {
  if (!canonical) return absoluteUrl(`/${locale}`)

  try {
    const url = new URL(canonical, SITE_URL)
    if (url.hostname === "n3uralia.com" || url.hostname === "www.n3uralia.com") {
      url.protocol = "https:"
      url.hostname = "www.n3uralia.com"
      url.port = ""
    }
    return url.toString().replace(/\/$/, "")
  } catch {
    return absoluteUrl(canonical).replace(/\/$/, "")
  }
}

function localizedUrl(url: string, targetLocale: "es" | "en") {
  const parsed = new URL(url)
  const segments = parsed.pathname.split("/")

  if (segments[1] === "es" || segments[1] === "en") {
    segments[1] = targetLocale
    parsed.pathname = segments.join("/")
  } else {
    parsed.pathname = `/${targetLocale}${parsed.pathname === "/" ? "" : parsed.pathname}`
  }

  return parsed.toString().replace(/\/$/, "")
}

function languageAlternates(canonicalUrl: string) {
  const esUrl = localizedUrl(canonicalUrl, "es")
  const enUrl = localizedUrl(canonicalUrl, "en")

  return {
    "es-CL": esUrl,
    es: esUrl,
    en: enUrl,
    "en-US": enUrl,
    "x-default": enUrl,
  }
}

/**
 * Simple self-canonical SEO builder.
 */
export function buildSeo({
  locale,
  path,
  title,
  description,
  keywords,
}: {
  locale: "es" | "en"
  path: string
  title: string
  description: string
  keywords?: string
}): Metadata {
  const url = absoluteUrl(path).replace(/\/$/, "")

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: languageAlternates(url),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: locale === "es" ? "es_CL" : "en_US",
      alternateLocale: locale === "es" ? ["en_US"] : ["es_CL"],
      type: "website",
      images: [absoluteUrl(OG_IMAGE_PATH)],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(OG_IMAGE_PATH)],
    },
  }
}

interface MetadataConfig {
  title: string
  description: string
  keywords?: string
  canonical?: string
  locale?: Locale
  geo?: {
    region?: string
    country?: string
    latitude?: number
    longitude?: number
  }
}

/**
 * GEO/LLMO metadata generation with one canonical host and reciprocal locale alternates.
 */
export function generatePageMetadata(config: MetadataConfig): Metadata {
  const { title, description, keywords, canonical, locale = "es", geo } = config
  const canonicalUrl = normalizeCanonical(canonical, locale)

  const getRegionalLocale = () => {
    if (locale === "es" && geo?.region === "CL") return "es_CL"
    if (locale === "es" && geo?.region === "AR") return "es_AR"
    if (locale === "es" && geo?.region === "MX") return "es_MX"
    if (locale === "es") return "es_CL"
    return "en_US"
  }

  const alternates = languageAlternates(canonicalUrl)
  if (geo?.region && locale === "es") {
    alternates[`es-${geo.region}` as keyof typeof alternates] = localizedUrl(canonicalUrl, "es")
  }

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: alternates,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      type: "website",
      locale: getRegionalLocale(),
      alternateLocale: locale === "es" ? ["en_US"] : ["es_CL"],
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [absoluteUrl(OG_IMAGE_PATH)],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [absoluteUrl(OG_IMAGE_PATH)],
    },
  }
}

export function getAlternateUrls(path: string) {
  return {
    es: absoluteUrl(`/es${path}`),
    en: absoluteUrl(`/en${path}`),
    esCL: absoluteUrl(`/es${path}`),
  }
}

/**
 * Generates schema.org structured data with GEO support.
 */
export function generateStructuredData(config: {
  type: "WebPage" | "Organization" | "LocalBusiness" | "BreadcrumbList" | "Article"
  title: string
  description?: string
  url: string
  datePublished?: string
  dateModified?: string
  author?: string
  image?: string
  breadcrumbs?: Array<{ name: string; url: string }>
  geo?: {
    region?: string
    country?: string
    latitude?: number
    longitude?: number
    address?: {
      streetAddress?: string
      addressLocality?: string
      addressRegion?: string
      postalCode?: string
      addressCountry?: string
    }
  }
}) {
  const baseOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: "AI systems, automation and software for real operations.",
    foundingLocation: {
      "@type": "Place",
      name: "Santiago, Chile",
      address: {
        "@type": "PostalAddress",
        addressCountry: "CL",
        addressLocality: "Santiago",
      },
    },
    areaServed: [
      { "@type": "Country", name: "Chile" },
      { "@type": "Place", name: "Latin America" },
    ],
  }

  switch (config.type) {
    case "WebPage":
      return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: config.title,
        description: config.description,
        url: normalizeCanonical(config.url, "es"),
        image: config.image,
        author: baseOrganization,
        ...(config.geo && {
          spatialCoverage: {
            "@type": "Place",
            geo: {
              "@type": "GeoShape",
              ...(config.geo.latitude && config.geo.longitude && {
                box: `${config.geo.latitude} ${config.geo.longitude} ${config.geo.latitude} ${config.geo.longitude}`,
              }),
              ...(config.geo.region && { areaServed: config.geo.region }),
            },
          },
        }),
      }

    case "LocalBusiness":
      return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: SITE_NAME,
        description: config.description || "AI systems and software for operations",
        url: normalizeCanonical(config.url, "es"),
        address: {
          "@type": "PostalAddress",
          ...config.geo?.address,
          addressCountry: config.geo?.region || "CL",
        },
        geo: config.geo?.latitude && config.geo?.longitude ? {
          "@type": "GeoCoordinates",
          latitude: config.geo.latitude,
          longitude: config.geo.longitude,
        } : undefined,
        areaServed: config.geo?.country || "Chile",
        image: config.image,
      }

    case "Organization":
      return baseOrganization

    case "BreadcrumbList":
      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: config.breadcrumbs?.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: normalizeCanonical(item.url, "es"),
        })),
      }

    case "Article":
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: config.title,
        description: config.description,
        url: normalizeCanonical(config.url, "es"),
        datePublished: config.datePublished,
        dateModified: config.dateModified,
        author: config.author,
        image: config.image,
        publisher: baseOrganization,
        ...(config.geo && {
          articleSection: config.geo.country || "Global",
          spatialCoverage: {
            "@type": "Place",
            name: config.geo.country || "Global",
          },
        }),
      }

    default:
      return baseOrganization
  }
}
