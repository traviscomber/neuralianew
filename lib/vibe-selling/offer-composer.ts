/**
 * Live Value Composer - Generates dynamic offers in real time
 * Composes scope, timeline, tech stack, and pricing dynamically
 */

import type { BuyerIntent } from "./intent-detector"

export interface OfferScope {
  components: string[]
  datasets: number
  timelineWeeks: number
  technology: string[]
  pricingModel: "fixed" | "monthly" | "revenue-share"
  estimatedBudget: string
  deliverables: string[]
}

export interface LiveOffer {
  headline: string
  scope: OfferScope
  vibes: string // Tone/positioning
  nextSteps: string[]
  visualPreview: string
}

const offerTemplates: Record<string, OfferScope> = {
  "explorer-startup": {
    components: ["1x Portal Inmersivo", "5x Datasets Heritage", "1x Curador de IA"],
    datasets: 5,
    timelineWeeks: 4,
    technology: ["Next.js", "Supabase", "Agentes de IA"],
    pricingModel: "monthly",
    estimatedBudget: "$2K-5K/mes",
    deliverables: ["Portal", "Datasets", "Documentación"],
  },
  "explorer-mid-market": {
    components: ["2x Portales", "12x Datasets", "1x Curador de IA", "Dashboard de Analytics"],
    datasets: 12,
    timelineWeeks: 8,
    technology: ["Next.js", "Supabase", "Agentes de IA", "Analytics personalizado"],
    pricingModel: "monthly",
    estimatedBudget: "$5K-15K/mes",
    deliverables: ["Portales duales", "Datasets", "Analytics", "Capacitación"],
  },
  "explorer-enterprise": {
    components: ["N3x Portales", "30x Datasets", "Múltiples Curadores de IA", "Integración Dome", "Soporte VR"],
    datasets: 30,
    timelineWeeks: 16,
    technology: ["Next.js", "Supabase", "Agentes de IA", "WebGL", "VR.js"],
    pricingModel: "fixed",
    estimatedBudget: "$50K-200K",
    deliverables: ["Multi-Portal", "Datasets completos", "Experiencia inmersiva", "Soporte"],
  },

  "builder-startup": {
    components: ["Acceso a APIs", "Plantillas de código", "Guía de deployment"],
    datasets: 2,
    timelineWeeks: 2,
    technology: ["Node.js", "Vercel", "Supabase"],
    pricingModel: "monthly",
    estimatedBudget: "$500-1K/mes",
    deliverables: ["APIs", "Código de inicio", "Documentación"],
  },
  "builder-mid-market": {
    components: ["Suite completa de APIs", "Stack personalizado", "Configuración de infraestructura", "Monitoreo"],
    datasets: 8,
    timelineWeeks: 6,
    technology: ["Node.js/Python", "Infraestructura personalizada", "Vercel/AWS"],
    pricingModel: "monthly",
    estimatedBudget: "$3K-10K/mes",
    deliverables: ["APIs", "Código personalizado", "Infraestructura", "Soporte 24/7"],
  },
  "builder-enterprise": {
    components: ["APIs empresariales", "Opción White-label", "Servicio gestionado", "SLA"],
    datasets: 50,
    timelineWeeks: 12,
    technology: ["Stack personalizado", "Infraestructura empresarial", "Multi-región"],
    pricingModel: "fixed",
    estimatedBudget: "$100K-500K",
    deliverables: ["Plataforma White-label", "Soporte completo", "Desarrollo personalizado"],
  },

  "buyer-startup": {
    components: ["Solución preconstruida", "1x Portal", "Soporte básico"],
    datasets: 3,
    timelineWeeks: 1,
    technology: ["Solución lista"],
    pricingModel: "monthly",
    estimatedBudget: "$1K-2K/mes",
    deliverables: ["Portal listo para usar", "Datos básicos"],
  },
  "buyer-mid-market": {
    components: ["Solución personalizada", "2-3x Portales", "Integración de datos", "Reportes"],
    datasets: 15,
    timelineWeeks: 4,
    technology: ["Next.js", "Supabase", "Auth personalizado"],
    pricingModel: "monthly",
    estimatedBudget: "$5K-20K/mes",
    deliverables: ["Plataforma lista", "Datos", "Reportes mensuales"],
  },
  "buyer-enterprise": {
    components: ["Solución empresarial", "Multi-portal", "SSO", "Analytics avanzados", "Cumplimiento normativo"],
    datasets: 100,
    timelineWeeks: 8,
    technology: ["Stack empresarial", "Seguridad personalizada"],
    pricingModel: "fixed",
    estimatedBudget: "$200K-1M",
    deliverables: ["Plataforma empresarial", "Librería de datos completa", "Soporte dedicado"],
  },

  "partner-startup": {
    components: ["Participación de ingresos: 30%", "Co-marketing", "Acceso a API"],
    datasets: 5,
    timelineWeeks: 2,
    technology: ["Infraestructura compartida"],
    pricingModel: "revenue-share",
    estimatedBudget: "30% de ingresos",
    deliverables: ["Integración", "Co-promoción", "División de ingresos"],
  },
  "partner-mid-market": {
    components: ["Participación de ingresos: 20-40%", "Go-to-market conjunto", "Opción White-label"],
    datasets: 20,
    timelineWeeks: 6,
    technology: ["Compartida + personalizada"],
    pricingModel: "revenue-share",
    estimatedBudget: "20-40% de ingresos",
    deliverables: ["White-label", "Estrategia GTM", "División de ingresos"],
  },
  "partner-enterprise": {
    components: ["Asociación estratégica", "Co-desarrollo", "Integración profunda", "Revenue share: 15-30%"],
    datasets: 100,
    timelineWeeks: 12,
    technology: ["Infraestructura compartida empresarial"],
    pricingModel: "revenue-share",
    estimatedBudget: "15-30% de ingresos",
    deliverables: ["Plataforma co-desarrollada", "Acceso completo a APIs", "Soporte 24/7"],
  },

  "partner-startup": {
    components: ["Revenue Share: 30%", "Co-marketing", "API Access"],
    datasets: 5,
    timelineWeeks: 2,
    technology: ["Shared Infrastructure"],
    pricingModel: "revenue-share",
    estimatedBudget: "30% of revenue",
    deliverables: ["Integration", "Co-promotion", "Revenue Split"],
  },
  "partner-mid-market": {
    components: ["Revenue Share: 20-40%", "Joint Go-to-market", "White-label Option"],
    datasets: 20,
    timelineWeeks: 6,
    technology: ["Shared + Custom"],
    pricingModel: "revenue-share",
    estimatedBudget: "20-40% of revenue",
    deliverables: ["White-label", "GTM Strategy", "Revenue Share"],
  },
  "partner-enterprise": {
    components: ["Strategic Partnership", "Equity Option", "Exclusive Territory", "Co-development"],
    datasets: "unlimited",
    timelineWeeks: 12,
    technology: ["Full Stack Collaboration"],
    pricingModel: "revenue-share",
    estimatedBudget: "Negotiable - equity/revenue mix",
    deliverables: ["Strategic Alliance", "Co-IP", "Exclusive Terms"],
  },
}

export function composeOffer(intent: BuyerIntent): LiveOffer {
  const templateKey = intent.suggestedOfferTemplate
  const scope = offerTemplates[templateKey] || offerTemplates["explorer-mid-market"]

  const headlines: Record<string, string> = {
    explorer:
      "Aquí está cómo se ve una exploración típica para equipos como el tuyo – sin compromiso, total transparencia.",
    builder: "Aquí está el stack de tecnología y cronograma que recomendaríamos para tu proyecto:",
    buyer: "Esto es exactamente lo que desplegaríamos para tu caso de uso – llave en mano, listo para usar:",
    partner: "Construyamos algo más grande juntos – aquí está la estructura de la asociación:",
  }

  const vibes: Record<string, string> = {
    explorer: "Curioso. Colaborativo. Te mostramos qué es posible.",
    builder: "Técnico. Escalable. Construimos lo que envisionas.",
    buyer: "Eficiente. Enfocado en resultados. Entregamos lo que necesitas.",
    partner: "Visionario. Alineado. Crecemos juntos.",
  }

  return {
    headline: headlines[intent.intent],
    scope,
    vibes: vibes[intent.intent],
    nextSteps: generateNextSteps(intent),
    visualPreview: generatePreview(scope),
  }
}

function generateNextSteps(intent: BuyerIntent): string[] {
  const steps: Record<string, string[]> = {
    explorer: ["1. Agenda una llamada de descubrimiento de 20 min", "2. Esbozaremos tu visión", "3. Obtén una propuesta personalizada"],
    builder: ["1. Comparte tus requisitos técnicos", "2. Diseñamos una solución", "3. Comenzamos a construir"],
    buyer: ["1. Confirma tu cronograma", "2. Provisioamos infraestructura", "3. Lanzamiento en días"],
    partner: ["1. Agenda llamada de asociación", "2. Revisa términos", "3. Firma MoU y alinea hoja de ruta"],
  }
  return steps[intent.intent]
}

function generatePreview(scope: OfferScope): string {
  return `📦 ${scope.components.length} components | 📊 ${scope.datasets}+ datasets | ⏱️ ${scope.timelineWeeks} weeks | 💰 ${scope.estimatedBudget}`
}
