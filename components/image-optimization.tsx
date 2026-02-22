'use client'

/**
 * IMAGE OPTIMIZATION STRATEGY FOR PHASE 3
 * 
 * This component provides guidelines for image optimization across the site.
 * Images should follow these patterns for maximum SEO + accessibility impact.
 */

// OPTIMIZED ALT TEXT PATTERNS
export const imageOptimizationGuide = {
  homepage: {
    hero: {
      src: '/images/hero-ai-agents-system.jpg',
      alt: 'N3uralia AI agents system architecture - living agents en producción',
      title: 'N3uralia - Sistemas Agenticos',
    },
    features: {
      src: '/images/n3uralia-capabilities-grid.jpg',
      alt: 'Capacidades N3uralia: agentic architecture, living agents, multi-agent coordination',
      title: 'Capacidades Técnicas',
    },
  },
  capabilities: {
    architecture: {
      src: '/images/api-architecture-gemini-openai.jpg',
      alt: 'Arquitectura API N3uralia: Gemini para clasificación y compresión, OpenAI para respuesta final',
      title: 'AI-Agnostic Architecture',
    },
    pillars: {
      src: '/images/6-pillars-agentic-ai.jpg',
      alt: '6 pilares de sistemas agenticos: agentic architecture, living agents, multi-agent coordination, conversational intelligence, knowledge synthesis, vibe selling',
      title: 'Los 6 Pilares',
    },
  },
  soluciones: {
    b2b: {
      src: '/images/b2b-revenue-operations.jpg',
      alt: 'Solución B2B mediano: revenue operations con N3uralia, automatización de procesos, integración legacy',
      title: 'Para B2B Mediano',
    },
    turismo: {
      src: '/images/turismo-conversational-ai.jpg',
      alt: 'Solución Turismo: Conversational AI para clientes, personalización de experiencias con living agents',
      title: 'Para Turismo',
    },
    eventos: {
      src: '/images/eventos-experiencias-inmersivas.jpg',
      alt: 'Solución Eventos: Experiencias inmersivas con agents inteligentes, coordinación multi-canal',
      title: 'Para Eventos Inmersivos',
    },
    manufactura: {
      src: '/images/manufactura-automatizacion.jpg',
      alt: 'Solución Manufactura: Automatización inteligente, integración con sistemas legacy, optimización de procesos',
      title: 'Para Manufactura',
    },
  },
  metodologia: {
    fases: {
      src: '/images/5-fases-implementacion.jpg',
      alt: '5 fases de implementación N3uralia: discovery, arquitectura, implementación, go-live, optimización',
      title: 'Metodología 5 Fases',
    },
  },
}

// OG IMAGE SPECIFICATIONS (1200x630px)
export const ogImageSpecs = {
  format: 'PNG or JPG',
  width: 1200,
  height: 630,
  quality: 'high',
  design: 'Consistent with brand colors, readable text overlay with main keyword',
}

// IMAGE LAZY LOADING RECOMMENDATION
export const lazyLoadImages = {
  belowFold: ['turismo', 'eventos', 'manufactura', 'metodologia'],
  nativeAPI: 'loading="lazy"',
  or: 'next/image with priority={false}',
}

// ACCESSIBILITY CHECKLIST
export const a11yImageChecklist = {
  altText: {
    descriptive: 'Describe what the image shows, not "image" or "pic"',
    maxChars: 125,
    keyword: 'Include 1-2 relevant keywords naturally',
    example: 'N3uralia API architecture with Gemini and OpenAI routing',
  },
  filename: {
    pattern: 'use-hyphens-not-underscores',
    example: 'n3uralia-living-agents-architecture.jpg',
    benefit: 'Helps both SEO and accessibility tools',
  },
  context: {
    title: 'Add title attribute for hover tooltips',
    role: 'Use role="img" if not actual image tag',
  },
}

export function ImageOptimizationNote() {
  return (
    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-900">
      <strong>Phase 3 - Image Optimization:</strong> Implement alt text, lazy loading, and OG images per guide above. 
      Target: +0.2 score improvement.
    </div>
  )
}
