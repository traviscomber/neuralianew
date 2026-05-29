/**
 * Consolidated Structured Data Component
 * 
 * IMPORTANT: All JSON-LD schemas are centralized here to prevent duplicates.
 * Each entity type (Organization, LocalBusiness, etc.) should appear ONCE.
 * 
 * Schema Types Included:
 * - Organization (1x) - Company info
 * - LocalBusiness (1x) - Chile location info
 * - Product (1x) - Platform product
 * - BreadcrumbList (1x) - Site navigation
 * - SoftwareApplication (1x) - Application details
 */

interface StructuredDataProps {
  locale?: string
}

export function StructuredData({ locale = 'es' }: StructuredDataProps) {
  const isSpanish = locale === 'es'

  // SINGLE Organization schema - consolidated from multiple sources
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://n3uralia.com/#organization",
    name: "N3uralia",
    alternateName: ["Neuralia", "N3uralia Inc"],
    url: "https://n3uralia.com",
    logo: "https://n3uralia.com/logo-n3uralia.png",
    description: isSpanish
      ? "Plataforma de sistemas agenticos production-ready. Arquitectura multi-agente, orquestacion inteligente, memoria persistente, gobernanza IA. Para empresas en Chile y LATAM."
      : "Production-ready agentic systems platform. Multi-agent architecture, intelligent orchestration, persistent memory, AI governance. For enterprises in Chile and LATAM.",
    sameAs: [
      "https://twitter.com/n3uralia",
      "https://www.linkedin.com/company/n3uralia",
      "https://github.com/n3uralia",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+56-9-9382-6127",
        contactType: "Customer Service",
        areaServed: ["CL", "PE", "CO", "MX"],
        availableLanguage: ["es", "en"],
      },
      {
        "@type": "ContactPoint",
        email: "info@n3uralia.com",
        contactType: "Sales",
        areaServed: ["CL", "PE", "CO", "MX"],
        availableLanguage: ["es", "en"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "CL",
      addressLocality: "Santiago",
      addressRegion: "Region Metropolitana",
    },
    foundingDate: "2023",
    areaServed: [
      { "@type": "Country", "name": "Chile" },
      { "@type": "Country", "name": "Peru" },
      { "@type": "Country", "name": "Colombia" },
      { "@type": "Country", "name": "Mexico" }
    ],
    knowsAbout: [
      "Agentic AI",
      "Multi-agent systems",
      "Living Agents",
      "AI Governance",
      "Memory Systems",
      "Conversational Intelligence",
      "Enterprise Automation"
    ],
  }

  // SINGLE LocalBusiness schema - for Chile SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://n3uralia.com/#localbusiness",
    name: "N3uralia",
    description: isSpanish
      ? "Sistemas agenticos en produccion para empresas en Chile y LATAM"
      : "Agentic systems in production for companies in Chile and LATAM",
    url: "https://n3uralia.com",
    telephone: "+56-9-9382-6127",
    email: "info@n3uralia.com",
    image: "https://n3uralia.com/logo-n3uralia.png",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CL",
      addressRegion: "Santiago",
      streetAddress: "Santiago, Chile"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-33.4489",
      longitude: "-70.6693",
    },
    areaServed: "CL",
    priceRange: "$$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "42",
      bestRating: "5",
      worstRating: "1"
    }
  }

  // SINGLE Product schema
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://n3uralia.com/#product",
    name: "N3uralia Platform",
    description: isSpanish
      ? "Plataforma de sistemas agenticos fullstack production-ready"
      : "Full-stack production-ready agentic systems platform",
    brand: {
      "@type": "Brand",
      name: "N3uralia",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  }

  // Breadcrumb schema - localized
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `https://n3uralia.com/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: isSpanish ? "Capacidades" : "Capabilities",
        item: `https://n3uralia.com/${locale}/capabilities`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: isSpanish ? "Soluciones" : "Solutions",
        item: `https://n3uralia.com/${locale}/soluciones`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "FAQ",
        item: `https://n3uralia.com/${locale}/faq`,
      },
    ],
  }

  // Software Application schema
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://n3uralia.com/#software",
    name: "N3uralia",
    description: isSpanish
      ? "Plataforma para construir agentes IA production-ready y sistemas multi-agente"
      : "Platform for building production-ready AI agents and multi-agent systems",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Cloud-based",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "0",
      description: "Contact for pricing"
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </>
  )
}
