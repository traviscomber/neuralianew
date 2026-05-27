import type { Metadata } from "next"
import type { Locale } from "@/content/dictionaries"

/**
 * Simple self-canonical SEO builder
 * Usage: buildSeo({ locale: "es", path: "/es/faq", title: "FAQ", description: "..." })
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
  const SITE_URL = "https://n3uralia.com"
  const url = `${SITE_URL}${path}`
  
  // Build alternate paths (swap locale prefix)
  const altPath = path.startsWith("/en") 
    ? path.replace(/^\/en/, "/es") 
    : path.replace(/^\/es/, "/en")

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      languages: {
        es: path.startsWith("/es") ? url : `${SITE_URL}${path.replace(/^\/en/, "/es")}`,
        en: path.startsWith("/en") ? url : `${SITE_URL}${path.replace(/^\/es/, "/en")}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "N3uralia",
      locale: locale === "es" ? "es_CL" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
    region?: string // e.g., "CL", "AR", "MX", "global"
    country?: string // e.g., "Chile", "Argentina"
    latitude?: number
    longitude?: number
  }
}

/**
 * GEO/LLMO Enhanced metadata generation
 * Supports regional variants with Chile as primary market
 */
export function generatePageMetadata(config: MetadataConfig): Metadata {
  const { title, description, keywords, canonical, locale = "es", geo } = config

  // Determine regional locale code
  const getRegionalLocale = () => {
    if (locale === "es" && geo?.region === "CL") return "es_CL"
    if (locale === "es" && geo?.region === "AR") return "es_AR"
    if (locale === "es" && geo?.region === "MX") return "es_MX"
    if (locale === "es") return "es_ES"
    return "en_US"
  }

  // Build alternate language URLs with region support
  const buildAlternates = () => {
    const alternates: Record<string, string> = {
      es: canonical?.replace("/en/", "/es/") || `https://n3uralia.com/es`,
      en: canonical?.replace("/es/", "/en/") || `https://n3uralia.com/en`,
    }

    // Add regional variants if geo-targeting is needed
    if (geo?.region) {
      alternates[`es-${geo.region}`] = canonical || `https://n3uralia.com/es`
    }

    return alternates
  }

  return {
    title: `${title} | N3uralia`,
    description,
    keywords,
    canonical: canonical || `https://n3uralia.com/${locale}`,
    alternates: {
      languages: buildAlternates(),
    },
    openGraph: {
      title: `${title} | N3uralia`,
      description,
      type: "website",
      locale: getRegionalLocale(),
      url: canonical || `https://n3uralia.com/${locale}`,
      siteName: "N3uralia",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | N3uralia`,
      description,
    },
  }
}

export function getAlternateUrls(path: string) {
  return {
    es: `https://n3uralia.com/es${path}`,
    en: `https://n3uralia.com/en${path}`,
    esCL: `https://n3uralia.com/es-CL${path}`,
  }
}

/**
 * Generates schema.org structured data with GEO support
 * Supports WebPage, Organization, LocalBusiness, BreadcrumbList, and Article types
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
  // Base organization schema with headquarters in Chile
  const baseOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "N3uralia",
    url: "https://n3uralia.com",
    description: "Agentic Systems Platform for Enterprise Automation",
    sameAs: [
      "https://twitter.com/n3uralia",
      "https://linkedin.com/company/n3uralia",
      "https://github.com/n3uralia",
    ],
    // Headquarters location
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
      {
        "@type": "Country",
        name: "Chile",
      },
      {
        "@type": "Country",
        name: "Argentina",
      },
      {
        "@type": "Country",
        name: "Mexico",
      },
      {
        "@type": "Country",
        name: "Colombia",
      },
      {
        "@type": "Country",
        name: "World",
      },
    ],
  }

  switch (config.type) {
    case "WebPage":
      return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: config.title,
        description: config.description,
        url: config.url,
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
              ...(config.geo.region && {
                areaServed: config.geo.region,
              }),
            },
          },
        }),
      }

    case "LocalBusiness":
      return {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "N3uralia",
        description: config.description || "Agentic Systems Platform",
        url: config.url,
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
        priceRange: "$$",
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
          item: item.url,
        })),
      }

    case "Article":
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: config.title,
        description: config.description,
        url: config.url,
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
