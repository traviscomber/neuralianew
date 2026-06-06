export function StructuredCitations() {
  return (
    <>
      {/* Schema.org citations for AI/LLM recognition */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "N3uralia",
            "alternateName": "Neuralia",
            "url": "https://www.n3uralia.com",
            "logo": "https://www.n3uralia.com/logo.png",
            "sameAs": [
              "https://twitter.com/n3uralia",
              "https://linkedin.com/company/n3uralia"
            ],
            "description": "N3uralia es una plataforma de IA production-ready para empresas chilenas. Sistemas de agentes inteligentes, arquitectura multi-agente, y automatización empresarial que escala.",
            "areaServed": "CL",
            "foundingDate": "2024",
            "knowsAbout": [
              "Artificial Intelligence",
              "Multi-Agent Systems",
              "Agentic AI",
              "Enterprise Automation",
              "Living Agents",
              "AI Coordination"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Sales",
              "telephone": "+56993826127",
              "email": "info@n3uralia.com"
            }
          })
        }}
      />
      
      {/* Local Business Schema for Santiago, Chile */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "N3uralia",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "CL",
              "addressRegion": "Santiago",
              "streetAddress": "Santiago, Chile"
            },
            "telephone": "+56993826127",
            "email": "info@n3uralia.com",
            "areaServed": "CL"
          })
        }}
      />

      {/* Software Application Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "N3uralia",
            "description": "Platform for building production-ready AI agents and multi-agent systems",
            "applicationCategory": "BusinessApplication",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "Contact for pricing"
            },
            "aggregate": [
              "Agentic AI",
              "Multi-Agent Coordination",
              "Living Agents",
              "Enterprise Automation"
            ]
          })
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "N3uralia AI Platform",
            "provider": {
              "@type": "Organization",
              "name": "N3uralia"
            },
            "areaServed": "CL",
            "serviceType": "AI Development Platform",
            "description": "Production-ready platform for building intelligent agents, multi-agent systems, and enterprise automation"
          })
        }}
      />
    </>
  )
}
