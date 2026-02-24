import { ReactNode } from 'react'

interface SchemaMarkupProps {
  data: Record<string, any>
}

export function SchemaMarkup({ data }: SchemaMarkupProps): ReactNode {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  )
}

// Organization Schema
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'N3uralia',
    url: 'https://n3uralia.com',
    logo: 'https://n3uralia.com/logo.png',
    description: 'Sistemas agenticos y automatización empresarial con IA. Construimos soluciones en producción.',
    sameAs: [
      'https://www.linkedin.com/company/n3uralia',
      'https://twitter.com/n3uralia',
      'https://github.com/n3uralia',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      telephone: '+56 9 9382 6127',
      email: 'contacto@n3uralia.com',
      areaServed: 'CL',
      availableLanguage: 'es-CL',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Avenida Principal, 123',
      addressLocality: 'Santiago',
      addressRegion: 'RM',
      postalCode: '8320000',
      addressCountry: 'CL',
    },
  }
}

// Professional Service Schema
export function professionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'N3uralia - Sistemas Agenticos',
    description: 'Automatización empresarial con inteligencia artificial y sistemas multi-agente',
    url: 'https://n3uralia.com',
    telephone: '+56 9 9382 6127',
    priceRange: '$$',
    areaServed: {
      '@type': 'State',
      name: 'CL',
    },
    image: 'https://n3uralia.com/og-image.png',
    brand: {
      '@type': 'Brand',
      name: 'N3uralia',
    },
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'Sistemas Agenticos',
        description: 'Arquitecturas multi-agente personalizadas para tu empresa',
      },
      {
        '@type': 'Offer',
        name: 'Automatización de Procesos',
        description: 'Automatización de procesos complejos con IA estructural',
      },
      {
        '@type': 'Offer',
        name: 'Inteligencia Operacional',
        description: 'Sistemas que monitorean, detectan y actúan automáticamente',
      },
    ],
  }
}

// Software Application Schema
export function softwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'N3uralia Platform',
    description: 'Plataforma de automatización empresarial con sistemas agenticos',
    url: 'https://n3uralia.com',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Cloud',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'CLP',
      highPrice: '200000',
      lowPrice: '15000',
      offerCount: '3',
    },
    author: {
      '@type': 'Organization',
      name: 'N3uralia',
      url: 'https://n3uralia.com',
    },
    featureList: [
      'Multi-agent systems',
      'Real-time automation',
      'Legacy system integration',
      'Data sovereignty',
      'Custom AI models',
      ' 24/7 operations',
    ],
  }
}

// Local Business Schema
export function localBusinessSchema(city: string, region: string, latitude: string, longitude: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `N3uralia - ${city}`,
    description: `Sistemas agenticos y automatización empresarial en ${city}, ${region}`,
    url: 'https://n3uralia.com',
    telephone: '+56 9 9382 6127',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Dirección Principal',
      addressLocality: city,
      addressRegion: region,
      postalCode: '8320000',
      addressCountry: 'CL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude,
      longitude,
    },
    areaServed: {
      '@type': 'State',
      name: region,
    },
    serviceType: ['Business Automation', 'AI Development', 'Process Automation'],
  }
}

// FAQSchema
export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// BreadcrumbSchema
export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
