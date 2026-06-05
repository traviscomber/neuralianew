/**
 * Live Value Composer - Generates dynamic offers in real time
 * Composes scope, timeline, tech stack, and pricing dynamically
 */

import type { BuyerIntent } from "./intent-detector"

export interface OfferScope {
  components: string[]
  datasets: number | string
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
    estimatedBudget: "desde 1 millón/mes",
    deliverables: ["Portal", "Datasets", "Documentación"],
  },
  "explorer-mid-market": {
    components: ["2x Portales", "12x Datasets", "1x Curador de IA", "Dashboard de Analytics"],
    datasets: 12,
    timelineWeeks: 8,
    technology: ["Next.js", "Supabase", "Agentes de IA", "Analytics personalizado"],
    pricingModel: "monthly",
    estimatedBudget: "desde 1 millón/mes",
    deliverables: ["Portales duales", "Datasets", "Analytics", "Capacitación"],
  },
  "explorer-enterprise": {
    components: ["N3x Portales", "30x Datasets", "Múltiples Curadores de IA", "Integración Dome", "Soporte VR"],
    datasets: 30,
    timelineWeeks: 16,
    technology: ["Next.js", "Supabase", "Agentes de IA", "WebGL", "VR.js"],
    pricingModel: "fixed",
    estimatedBudget: "desde 1 millón",
    deliverables: ["Multi-Portal", "Datasets completos", "Experiencia inmersiva", "Soporte"],
  },

  "builder-startup": {
    components: ["Acceso a APIs", "Plantillas de código", "Guía de deployment"],
    datasets: 2,
    timelineWeeks: 2,
    technology: ["Node.js", "Vercel", "Supabase"],
    pricingModel: "monthly",
    estimatedBudget: "desde 1 millón/mes",
    deliverables: ["APIs", "Código de inicio", "Documentación"],
  },
  "builder-mid-market": {
    components: ["Suite completa de APIs", "Stack personalizado", "Configuración de infraestructura", "Monitoreo"],
    datasets: 8,
    timelineWeeks: 6,
    technology: ["Node.js/Python", "Infraestructura personalizada", "Vercel/AWS"],
    pricingModel: "monthly",
    estimatedBudget: "desde 1 millón/mes",
    deliverables: ["APIs", "Código personalizado", "Infraestructura", "Soporte 24/7"],
  },
  "builder-enterprise": {
    components: ["APIs empresariales", "Opción White-label", "Servicio gestionado", "SLA"],
    datasets: 50,
    timelineWeeks: 12,
    technology: ["Stack personalizado", "Infraestructura empresarial", "Multi-región"],
    pricingModel: "fixed",
    estimatedBudget: "desde 1 millón",
    deliverables: ["Plataforma White-label", "Soporte completo", "Desarrollo personalizado"],
  },

  "buyer-startup": {
    components: ["Solución preconstruida", "1x Portal", "Soporte básico"],
    datasets: 3,
    timelineWeeks: 1,
    technology: ["Solución lista"],
    pricingModel: "monthly",
    estimatedBudget: "desde 1 millón/mes",
    deliverables: ["Portal listo para usar", "Datos básicos"],
  },
  "buyer-mid-market": {
    components: ["Solución personalizada", "2-3x Portales", "Integración de datos", "Reportes"],
    datasets: 15,
    timelineWeeks: 4,
    technology: ["Next.js", "Supabase", "Auth personalizado"],
    pricingModel: "monthly",
    estimatedBudget: "desde 1 millón/mes",
    deliverables: ["Plataforma lista", "Datos", "Reportes mensuales"],
  },
  "buyer-enterprise": {
    components: ["Solución empresarial", "Multi-portal", "SSO", "Analytics avanzados", "Cumplimiento normativo"],
    datasets: 100,
    timelineWeeks: 8,
    technology: ["Stack empresarial", "Seguridad personalizada"],
    pricingModel: "fixed",
    estimatedBudget: "desde 1 millón",
    deliverables: ["Plataforma empresarial", "Librería de datos completa", "Soporte dedicado"],
  },

  "partner-startup": {
    components: ["Participación de ingresos: 30%", "Co-marketing", "Acceso a API"],
    datasets: 5,
    timelineWeeks: 2,
    technology: ["Infraestructura compartida"],
    pricingModel: "revenue-share",
    estimatedBudget: "desde 1 millón/mes",
    deliverables: ["Integración", "Co-promoción", "División de ingresos"],
  },
  "partner-mid-market": {
    components: ["Participación de ingresos: 20-40%", "Go-to-market conjunto", "Opción White-label"],
    datasets: 20,
    timelineWeeks: 6,
    technology: ["Compartida + personalizada"],
    pricingModel: "revenue-share",
    estimatedBudget: "desde 1 millón/mes",
    deliverables: ["White-label", "Estrategia GTM", "División de ingresos"],
  },
  "partner-enterprise": {
    components: ["Asociación estratégica", "Co-desarrollo", "Integración profunda", "Revenue share: 15-30%"],
    datasets: 100,
    timelineWeeks: 12,
    technology: ["Infraestructura compartida empresarial"],
    pricingModel: "revenue-share",
    estimatedBudget: "desde 1 millón/mes",
    deliverables: ["Plataforma co-desarrollada", "Acceso completo a APIs", "Soporte 24/7"],
  },
}

export function composeOffer(intent: BuyerIntent): LiveOffer {
  const templateKey = intent.suggestedOfferTemplate
  const scope = offerTemplates[templateKey] || offerTemplates["explorer-mid-market"]

  const headlines: Record<string, string> = {
    explorer: "Mira, acá está lo que podríamos hacer para algo como lo tuyo:",
    builder: "Dale, aquí va el stack que te recomiendo, así no reinventás la rueda:",
    buyer: "Perfecto, esto es llave en mano. Entregamos esto. Te va a servir.",
    partner: "Hagamos algo grande juntos. Acá va la propuesta:",
  }

  const vibes: Record<string, string> = {
    explorer: "Amigable. Sin presión. Te muestro lo posible.",
    builder: "Técnico pero accesible. Lo construimos.",
    buyer: "Al grano. Rápido, sin sorpresas.",
    partner: "Colaborativo. Crecemos juntos.",
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
    explorer: ["Hablamos en 30 min y vemos si encaja?", "Te muestro cosas parecidas a lo tuyo", "Preparamos una propuesta personalizada"],
    builder: ["Compartís tus requisitos técnicos", "Armamos una solución que funcione", "Empezamos"],
    buyer: ["Confirmás tu timeline", "Infraestructura lista en 24-48hs", "A producción rápido"],
    partner: ["Una llamada rápida", "Vemos los términos", "Alineamos y arrancamos"],
  }
  return steps[intent.intent]
}

function generatePreview(scope: OfferScope): string {
  return `📦 ${scope.components.length} components | 📊 ${scope.datasets}+ datasets | ⏱️ ${scope.timelineWeeks} weeks | 💰 ${scope.estimatedBudget}`
}
