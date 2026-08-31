export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.n3uralia.com/#organization",
    name: "N3uralia",
    alternateName: ["Neuralia"],
    url: "https://www.n3uralia.com",
    logo: "https://www.n3uralia.com/logo.png",
    description:
      "Production AI systems, agentic workflows, and software automation for teams in Chile and LATAM.",
    sameAs: [
      "https://twitter.com/n3uralia",
      "https://linkedin.com/company/n3uralia",
      "https://github.com/n3uralia",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+56-9-9382-6127",
        contactType: "customer service",
        areaServed: ["CL", "LATAM"],
        availableLanguage: ["es", "en"],
      },
      {
        "@type": "ContactPoint",
        email: "info@n3uralia.com",
        contactType: "sales",
        areaServed: ["CL", "LATAM"],
        availableLanguage: ["es", "en"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "CL",
      addressLocality: "Santiago",
      addressRegion: "Region Metropolitana",
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Chile",
      },
      {
        "@type": "Place",
        name: "LATAM",
      },
    ],
    knowsAbout: [
      "Agentic AI",
      "Multi-agent systems",
      "AI workflows",
      "AI governance",
      "Automation",
      "Software engineering",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Production AI systems",
          description: "AI systems, agentic workflows, and software for real operations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business automation",
          description: "Operational automation integrated with existing enterprise systems.",
        },
      },
    ],
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.n3uralia.com/#localbusiness",
    name: "N3uralia",
    alternateName: "Neuralia",
    description: "AI systems and software engineering for teams in Chile and LATAM.",
    url: "https://www.n3uralia.com",
    telephone: "+56-9-9382-6127",
    email: "info@n3uralia.com",
    areaServed: ["CL", "LATAM"],
    priceRange: "$$$",
    image: "https://www.n3uralia.com/logo.png",
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-33.4489",
      longitude: "-70.6693",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "CL",
      addressLocality: "Santiago",
      addressRegion: "Region Metropolitana",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "38",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Carlos M." },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "N3uralia transformó nuestros procesos operativos con agentes de IA reales que funcionan en producción.",
        datePublished: "2025-11-12",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Andrea V." },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Implementación impecable. El equipo entiende los sistemas complejos y entrega resultados medibles.",
        datePublished: "2025-12-03",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Diego R." },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Excelente plataforma de automatización. Redujimos tiempos de operación un 60% en tres semanas.",
        datePublished: "2026-01-18",
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
    </>
  )
}
