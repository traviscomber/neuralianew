export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "N3uralia",
    alternateName: ["Neuralia", "N3uralia Inc"],
    url: "https://n3uralia.com",
    logo: "https://n3uralia.com/logo.png",
    description:
      "N3uralia: Plataforma de sistemas agenticos production-ready. Arquitectura multi-agente, orquestación inteligente, memory persistent, gobernanza IA. Para B2B mediano, turismo, eventos, manufactura en Chile y LATAM.",
    sameAs: [
      "https://twitter.com/n3uralia",
      "https://linkedin.com/company/n3uralia",
      "https://github.com/n3uralia",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+56-9-9382-6127",
        contactType: "Customer Service",
        areaServed: ["CL", "LATAM"],
        availableLanguage: ["es", "en"],
        contactOption: "TollFree",
      },
      {
        "@type": "ContactPoint",
        email: "info@n3uralia.com",
        contactType: "Sales",
        areaServed: ["CL", "LATAM"],
        availableLanguage: ["es", "en"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "CL",
      addressLocality: "Santiago",
      addressRegion: "Región Metropolitana",
    },
    foundingDate: "2023",
    areaServed: [
      {
        "@type": "Country",
        name: "CL",
      },
      {
        "@type": "Country",
        name: "LATAM",
      },
    ],
    knowsAbout: [
      "Agentic AI",
      "Multi-agent systems",
      "Living Agents",
      "AI Governance",
      "Memory Systems",
      "Conversational Intelligence",
    ],
    offers: [
      {
        "@type": "Service",
        name: "Sistemas Agenticos en Producción",
        description: "Arquitectura multi-agente production-grade con gobernanza, memoria persistente y orquestación inteligente.",
        areaServed: ["CL", "LATAM"],
        availableLanguage: ["es", "en"],
      },
      {
        "@type": "Service",
        name: "Automatización Inteligente Empresarial",
        description: "Procesos automatizados con IA augmentada. Integración con sistemas legacy sin disruption.",
        areaServed: ["CL", "LATAM"],
      },
      {
        "@type": "Service",
        name: "Consultoría en IA Aumentada",
        description: "Diseño arquitectónico y estrategia de implementación de sistemas agenticos.",
        areaServed: ["CL", "LATAM"],
      },
      {
        "@type": "Service",
        name: "Living Agents Framework",
        description: "Agentes IA que evolucionan con el tiempo, con memoria emergente y personalidad adaptativa.",
        areaServed: ["CL", "LATAM"],
      },
    ],
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "N3uralia",
    alternateName: "Neuralia",
    description: "Sistemas agenticos y IA en producción para empresas Chile LATAM",
    url: "https://n3uralia.com",
    telephone: "+56-9-9382-6127",
    email: "info@n3uralia.com",
    areaServed: [
      {
        "@type": "Country",
        name: "CL",
      },
      {
        "@type": "Country",
        name: "LATAM",
      },
    ],
    priceRange: "$$$",
    image: "https://n3uralia.com/logo.png",
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-33.8688",
      longitude: "-51.2093",
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://n3uralia.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Capacidades",
        item: "https://n3uralia.com/capabilities",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Soluciones",
        item: "https://n3uralia.com/soluciones",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Metodología",
        item: "https://n3uralia.com/como-trabajamos",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "FAQ",
        item: "https://n3uralia.com/faq",
      },
    ],
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "N3uralia Platform",
    description: "Plataforma de sistemas agenticos fullstack production-ready",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  )
}
