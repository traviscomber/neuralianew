import React from "react"
import type { Metadata } from "next"
import { DEFAULT_LOCALE, isValidLocale } from "@/lib/get-locale"
import { buildLocalizedMetadata } from "@/lib/page-metadata"

interface BlogLayoutProps {
  children: React.ReactNode
  params: {
    locale: string
  }
}

export async function generateMetadata({ params }: BlogLayoutProps): Promise<Metadata> {
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE

  return buildLocalizedMetadata({
    locale,
    path: "/blog",
    title: locale === "es" ? "Blog | N3uralia" : "Blog | N3uralia",
    description:
      locale === "es"
        ? "Articulos tecnicos y recursos sobre IA en produccion."
        : "Technical articles and resources about AI in production.",
  })
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return <>{children}</>
}
