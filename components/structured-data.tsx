export function StructuredData() {
  const siteUrl = "https://www.n3uralia.com"
  const organizationId = `${siteUrl}/#organization`
  const websiteId = `${siteUrl}/#website`
  const canonicalLogoUrl = `${siteUrl}/n3uralia-brand/n3uralia-logo-canonical.svg`
  const serviceNames = [
    "Operational Intelligence",
    "Workflow Automation",
    "AI Assistants",
    "Document Intelligence",
    "Recognition Systems",
    "Internal Platforms",
    "Data Integrations",
    "Governance and Human Review",
  ]

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: "N3uralia",
        alternateName: ["Neuralia"],
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: canonicalLogoUrl,
        },
        description:
          "N3uralia builds AI systems, workflow automation, recognition systems, data integrations and software for real operations in Chile and Latin America.",
        email: "info@n3uralia.com",
        telephone: "+56-9-9382-6127",
        sameAs: ["https://linkedin.com/company/n3uralia"],
        address: {
          "@type": "PostalAddress",
          addressCountry: "CL",
          addressLocality: "Santiago",
          addressRegion: "Region Metropolitana",
        },
        areaServed: [
          { "@type": "Country", name: "Chile" },
          { "@type": "Place", name: "Latin America" },
        ],
        knowsLanguage: ["es", "en"],
        knowsAbout: serviceNames,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+56-9-9382-6127",
            contactType: "sales",
            areaServed: ["CL", "Latin America"],
            availableLanguage: ["es", "en"],
          },
          {
            "@type": "ContactPoint",
            email: "info@n3uralia.com",
            contactType: "sales",
            areaServed: ["CL", "Latin America"],
            availableLanguage: ["es", "en"],
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "N3uralia AI and software systems",
          itemListElement: serviceNames.map((name) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name,
              provider: { "@id": organizationId },
              areaServed: ["Chile", "Latin America"],
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: "N3uralia",
        publisher: { "@id": organizationId },
        inLanguage: ["es-CL", "en"],
      },
    ],
  }

  return (
    <script
      id="n3uralia-entity-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
