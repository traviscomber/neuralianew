import Script from "next/script"

export function StructuredDataInject() {
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
      { "@type": "Country", name: "CL" },
      { "@type": "Country", name: "LATAM" },
    ],
    priceRange: "$$$",
    image: "https://n3uralia.com/logo.png",
  }

  return (
    <>
      <Script
        id="org-schema-inject"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="local-schema-inject"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        strategy="afterInteractive"
      />
    </>
  )
}
