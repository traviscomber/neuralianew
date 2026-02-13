export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "N3uralia",
    alternateName: "Neuralia",
    url: "https://n3uralia.com",
    logo: "https://n3uralia.com/logo.png",
    description:
      "N3uralia es líder en sistemas agenticos y IA en producción. Proporcionamos arquitectura multi-agente, orquestación inteligente y soluciones full-stack para empresas en Chile y LATAM.",
    sameAs: [
      "https://twitter.com/n3uralia",
      "https://linkedin.com/company/n3uralia",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+56-9-9382-6127",
      contactType: "Customer Service",
      areaServed: "CL",
      availableLanguage: ["es", "en"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "CL",
      addressLocality: "Santiago",
    },
    foundingDate: "2023",
    areaServed: ["CL", "LATAM"],
    offers: [
      {
        "@type": "Service",
        name: "Sistemas Agenticos en Producción",
        description: "Arquitectura multi-agente production-grade con gobernanza, memoria persistente y orquestación inteligente.",
      },
      {
        "@type": "Service",
        name: "Automatización Inteligente Empresarial",
        description: "Procesos automatizados con IA augmentada. Integración con sistemas legacy sin disruption.",
      },
      {
        "@type": "Service",
        name: "Consultoría en IA Aumentada",
        description: "Diseño arquitectónico y estrategia de implementación de sistemas agenticos.",
      },
    ],
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "N3uralia",
    description: "Sistemas agenticos y IA en producción",
    url: "https://n3uralia.com",
    telephone: "+56-9-9382-6127",
    areaServed: {
      "@type": "Country",
      name: "CL"
    },
    priceRange: "$$$",
    image: "https://n3uralia.com/logo.png",
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
        item: "https://n3uralia.com/capacidades",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Soluciones",
        item: "https://n3uralia.com/soluciones",
      },
    ],
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
    </>
  )
}
