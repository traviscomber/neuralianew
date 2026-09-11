import type { Metadata } from "next"
import type { Locale } from "@/lib/get-locale"
import { absoluteUrl, OG_IMAGE_PATH, SITE_NAME, SITE_TWITTER_HANDLE } from "@/lib/site"

interface LocalizedMetadataOptions {
  description: string
  locale: Locale
  path?: string
  title: string
  type?: "article" | "website"
  alternatePaths?: Partial<Record<Locale, string>>
}

type LocalizedPathPair = Record<Locale, string>

const localizedPathAliases: Record<string, LocalizedPathPair> = {
  "/soluciones": { es: "/soluciones", en: "/solutions" },
  "/solutions": { es: "/soluciones", en: "/solutions" },
  "/proyectos": { es: "/proyectos", en: "/projects" },
  "/projects": { es: "/proyectos", en: "/projects" },
  "/productos": { es: "/productos", en: "/products" },
  "/products": { es: "/productos", en: "/products" },
  "/reconocimiento": { es: "/reconocimiento", en: "/recognition" },
  "/recognition": { es: "/reconocimiento", en: "/recognition" },
  "/como-trabajamos": { es: "/como-trabajamos", en: "/how-we-work" },
  "/how-we-work": { es: "/como-trabajamos", en: "/how-we-work" },
}

function normalizePath(path = "/") {
  if (!path || path === "/") return ""
  return path.startsWith("/") ? path : `/${path}`
}

function buildLocalizedPath(locale: Locale, path = "/") {
  return `/${locale}${normalizePath(path)}`
}

function resolveLocalizedPaths(path: string, alternatePaths?: Partial<Record<Locale, string>>): LocalizedPathPair {
  const aliasPair = localizedPathAliases[normalizePath(path)]
  return {
    es: alternatePaths?.es ?? aliasPair?.es ?? path,
    en: alternatePaths?.en ?? aliasPair?.en ?? path,
  }
}

export function buildLocalizedMetadata({
  description,
  locale,
  path = "/",
  title,
  type = "website",
  alternatePaths,
}: LocalizedMetadataOptions): Metadata {
  const paths = resolveLocalizedPaths(path, alternatePaths)
  const currentPath = buildLocalizedPath(locale, paths[locale])
  const spanishPath = buildLocalizedPath("es", paths.es)
  const englishPath = buildLocalizedPath("en", paths.en)
  const spanishUrl = absoluteUrl(spanishPath)
  const englishUrl = absoluteUrl(englishPath)
  const openGraphLocale = locale === "es" ? "es_CL" : "en_US"
  const alternateLocale = locale === "es" ? ["en_US"] : ["es_CL"]

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(currentPath),
      languages: {
        "es-CL": spanishUrl,
        es: spanishUrl,
        en: englishUrl,
        "en-US": englishUrl,
        "x-default": spanishUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(currentPath),
      type,
      siteName: SITE_NAME,
      locale: openGraphLocale,
      alternateLocale,
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
