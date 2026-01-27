export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Neuralia",
    url: "https://n3uralia.com",
    logo: "https://n3uralia.com/logo.png",
    description:
      "Neuralia es una plataforma de IA para empresas. Ofrecemos agentes inteligentes, automatización empresarial y soluciones full-stack.",
    sameAs: [
      "https://twitter.com/neuralia",
      "https://linkedin.com/company/neuralia",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+56-9-XXXX-XXXX",
      contactType: "Customer Service",
      areaServed: "CL",
      availableLanguage: ["es", "en"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "CL",
      addressLocality: "Santiago",
    },
    offers: [
      {
        "@type": "Service",
        name: "Agentes IA en Producción",
        description: "Arquitectura multi-agente integrada en tu stack.",
        provider: {
          "@type": "Organization",
          name: "Neuralia",
        },
      },
      {
        "@type": "Service",
        name: "Automatización Inteligente",
        description: "Procesos automatizados con IA.",
        provider: {
          "@type": "Organization",
          name: "Neuralia",
        },
      },
      {
        "@type": "Service",
        name: "Plataformas Full-Stack",
        description: "Desarrollo personalizado con IA integrada.",
        provider: {
          "@type": "Organization",
          name: "Neuralia",
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
