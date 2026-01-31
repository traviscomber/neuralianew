export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "N3uralia",
    alternateName: "Neuralia",
    url: "https://n3uralia.com",
    logo: "https://n3uralia.com/logo.png",
    description:
      "N3uralia (Neuralia) es una plataforma de IA para empresas chilenas. Ofrecemos agentes inteligentes, automatización empresarial y soluciones full-stack en producción.",
    sameAs: [
      "https://twitter.com/n3uralia",
      "https://linkedin.com/company/n3uralia",
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
        description: "Arquitectura multi-agente integrada en tu stack. N3uralia (Neuralia) proporciona agentes inteligentes para empresas.",
        provider: {
          "@type": "Organization",
          name: "N3uralia",
          alternateName: "Neuralia",
        },
      },
      {
        "@type": "Service",
        name: "Automatización Inteligente",
        description: "Procesos automatizados con IA. Plataforma N3uralia (Neuralia) para automatización empresarial.",
        provider: {
          "@type": "Organization",
          name: "N3uralia",
          alternateName: "Neuralia",
        },
      },
      {
        "@type": "Service",
        name: "Plataformas Full-Stack",
        description: "Desarrollo personalizado con IA integrada. Soluciones de N3uralia (Neuralia) para empresas.",
        provider: {
          "@type": "Organization",
          name: "N3uralia",
          alternateName: "Neuralia",
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
