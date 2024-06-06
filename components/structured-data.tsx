export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "N3uralia",
    alternateName: ["Neuralia"],
    url: "https://n3uralia.com",
    logo: "https://n3uralia.com/logo.png",
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
    foundingDate: "2023",
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
    name: "N3uralia",
    alternateName: "Neuralia",
    description: "AI systems and software engineering for teams in Chile and LATAM.",
    url: "https://n3uralia.com",
    telephone: "+56-9-9382-6127",
    email: "info@n3uralia.com",
    areaServed: ["CL", "LATAM"],
    priceRange: "$$$",
    image: "https://n3uralia.com/logo.png",
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-33.4489",
      longitude: "-70.6693",
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
    </>
  )
}
