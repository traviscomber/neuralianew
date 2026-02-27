import type { Metadata } from "next"
import type { Locale } from "@/content/dictionaries"

interface MetadataConfig {
  title: string
  description: string
  keywords?: string
  canonical?: string
  locale?: Locale
}

export function generatePageMetadata(config: MetadataConfig): Metadata {
  const { title, description, keywords, canonical, locale = "es" } = config

  return {
    title: `${title} | N3uralia`,
    description,
    keywords,
    canonical: canonical || `https://n3uralia.com/${locale}`,
    alternates: {
      languages: {
        es: canonical?.replace("/en/", "/es/") || `https://n3uralia.com/es`,
        en: canonical?.replace("/es/", "/en/") || `https://n3uralia.com/en`,
      },
    },
    openGraph: {
      title: `${title} | N3uralia`,
      description,
      type: "website",
      locale: locale === "es" ? "es_CL" : "en_US",
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
  }
}

/**
 * Generates structured data (schema.org) for SEO
 * Supports WebPage, Organization, BreadcrumbList, and Article types
 */
export function generateStructuredData(config: {
  type: "WebPage" | "Organization" | "BreadcrumbList" | "Article"
  title: string
  description?: string
  url: string
  datePublished?: string
  dateModified?: string
  author?: string
  image?: string
  breadcrumbs?: Array<{ name: string; url: string }>
}) {
  const baseOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "N3uralia",
    url: "https://n3uralia.com",
    description: "Agentic Systems Platform for Enterprise Automation",
    sameAs: ["https://twitter.com/n3uralia", "https://linkedin.com/company/n3uralia"],
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
      }

    default:
      return baseOrganization
  }
}
