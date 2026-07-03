/**
 * N3uralia - 18 Specialized AI Agents
 * Core agent definitions for platform
 */

import type { Locale } from "./dictionaries";

export type AgentDefinition = {
  id: string;
  name: { es: string; en: string };
  description: { es: string; en: string };
  icon: string;
  capabilities: Array<{ es: string; en: string }>;
  useCases: Array<{ es: string; en: string }>;
  industry: string[];
};

export const AGENTS: AgentDefinition[] = [
  {
    id: "content-writer",
    name: { es: "Content Writer", en: "Content Writer" },
    description: {
      es: "Redacta blogs, emails, landing pages con SEO optimizado",
      en: "Writes blogs, emails, landing pages with SEO optimization"
    },
    icon: "📝",
    capabilities: [
      { es: "Redacción automática", en: "Automated writing" },
      { es: "Análisis de tono", en: "Tone analysis" },
      { es: "Generación de títulos", en: "Headline generation" },
      { es: "Estructura de contenido", en: "Content structuring" }
    ],
    useCases: [
      { es: "Blog posts automáticos", en: "Automated blog posts" },
      { es: "Descripciones de productos", en: "Product descriptions" },
      { es: "Emails de marketing", en: "Marketing emails" },
      { es: "Landing pages", en: "Landing pages" }
    ],
    industry: ["retail", "consulting", "saas", "ecommerce"]
  },
  {
    id: "seo-optimizer",
    name: { es: "SEO Optimizer", en: "SEO Optimizer" },
    description: {
      es: "Optimiza contenido para Google sin publicidad",
      en: "Optimizes content for Google ranking without ads"
    },
    icon: "🔍",
    capabilities: [
      { es: "Análisis de keywords", en: "Keyword research" },
      { es: "Optimización on-page", en: "On-page optimization" },
      { es: "Link building", en: "Link building" },
      { es: "Monitoreo de rankings", en: "Ranking monitoring" }
    ],
    useCases: [
      { es: "Rankear en Google", en: "Rank on Google" },
      { es: "Optimizar metadata", en: "Optimize metadata" },
      { es: "Análisis de competencia", en: "Competitor analysis" },
      { es: "Estrategia de contenido", en: "Content strategy" }
    ],
    industry: ["retail", "ecommerce", "consulting", "saas"]
  },
  {
    id: "video-producer",
    name: { es: "Video Producer", en: "Video Producer" },
    description: {
      es: "Genera videos de productos, tutoriales, promocionales",
      en: "Generates product videos, tutorials, promotional content"
    },
    icon: "🎬",
    capabilities: [
      { es: "Generación de guiones", en: "Script generation" },
      { es: "Síntesis de voz", en: "Voice synthesis" },
      { es: "Edición automática", en: "Automated editing" },
      { es: "Subtítulos en múltiples idiomas", en: "Multi-language subtitles" }
    ],
    useCases: [
      { es: "Videos de productos", en: "Product videos" },
      { es: "Tutoriales", en: "Tutorials" },
      { es: "Testimonios automáticos", en: "Automated testimonials" },
      { es: "Contenido para redes", en: "Social media content" }
    ],
    industry: ["retail", "ecommerce", "realestate", "saas"]
  },
  {
    id: "social-media-manager",
    name: { es: "Social Media Manager", en: "Social Media Manager" },
    description: {
      es: "Gestiona Instagram, Facebook, LinkedIn, TikTok automáticamente",
      en: "Manages Instagram, Facebook, LinkedIn, TikTok automatically"
    },
    icon: "📱",
    capabilities: [
      { es: "Generación de contenido", en: "Content generation" },
      { es: "Publicación programada", en: "Scheduled posting" },
      { es: "Análisis de engagement", en: "Engagement analysis" },
      { es: "Respuesta a comentarios", en: "Comment responses" }
    ],
    useCases: [
      { es: "Publicaciones automáticas", en: "Automated posts" },
      { es: "Atención al cliente", en: "Customer support" },
      { es: "Community management", en: "Community management" },
      { es: "Reportes de performance", en: "Performance reports" }
    ],
    industry: ["retail", "ecommerce", "consulting", "realestate"]
  },
  {
    id: "customer-support",
    name: { es: "Customer Support", en: "Customer Support" },
    description: {
      es: "Atiende 24/7 preguntas de clientes en WhatsApp, Telegram, Email",
      en: "Handles 24/7 customer support on WhatsApp, Telegram, Email"
    },
    icon: "💬",
    capabilities: [
      { es: "Respuestas inteligentes", en: "Intelligent responses" },
      { es: "Escalada a humanos", en: "Human escalation" },
      { es: "Múltiples canales", en: "Multi-channel support" },
      { es: "Historial de conversaciones", en: "Conversation history" }
    ],
    useCases: [
      { es: "WhatsApp empresarial", en: "Business WhatsApp" },
      { es: "Telegram bot", en: "Telegram bot" },
      { es: "Chatbot en web", en: "Web chat" },
      { es: "Email automático", en: "Automated email" }
    ],
    industry: ["retail", "ecommerce", "consulting", "realestate"]
  },
  {
    id: "data-analyst",
    name: { es: "Data Analyst", en: "Data Analyst" },
    description: {
      es: "Analiza datos, genera insights, predice tendencias",
      en: "Analyzes data, generates insights, predicts trends"
    },
    icon: "📊",
    capabilities: [
      { es: "Análisis predictivo", en: "Predictive analytics" },
      { es: "Visualización de datos", en: "Data visualization" },
      { es: "Reportes automáticos", en: "Automated reports" },
      { es: "Machine learning", en: "Machine learning" }
    ],
    useCases: [
      { es: "Predicción de demanda", en: "Demand forecasting" },
      { es: "Análisis de ventas", en: "Sales analysis" },
      { es: "Segmentación de clientes", en: "Customer segmentation" },
      { es: "Detección de anomalías", en: "Anomaly detection" }
    ],
    industry: ["retail", "ecommerce", "consulting", "manufacturing"]
  },
  {
    id: "blockchain-developer",
    name: { es: "Blockchain Developer", en: "Blockchain Developer" },
    description: {
      es: "Desarrolla smart contracts y sistemas descentralizados",
      en: "Develops smart contracts and decentralized systems"
    },
    icon: "⛓️",
    capabilities: [
      { es: "Smart contracts", en: "Smart contracts" },
      { es: "Auditoría de código", en: "Code audit" },
      { es: "Integración Web3", en: "Web3 integration" },
      { es: "Trazabilidad inmutable", en: "Immutable traceability" }
    ],
    useCases: [
      { es: "Cadena de suministro", en: "Supply chain" },
      { es: "Certificación de productos", en: "Product certification" },
      { es: "Contratos automáticos", en: "Automated contracts" },
      { es: "Transparencia total", en: "Full transparency" }
    ],
    industry: ["manufacturing", "realestate", "consulting"]
  },
  {
    id: "security-expert",
    name: { es: "Security Expert", en: "Security Expert" },
    description: {
      es: "Monitorea seguridad, detecta amenazas, audita códigos",
      en: "Monitors security, detects threats, audits code"
    },
    icon: "🔒",
    capabilities: [
      { es: "Monitoreo de seguridad", en: "Security monitoring" },
      { es: "Detección de amenazas", en: "Threat detection" },
      { es: "Auditoría de código", en: "Code audit" },
      { es: "Cumplimiento normativo", en: "Compliance" }
    ],
    useCases: [
      { es: "GDPR compliance", en: "GDPR compliance" },
      { es: "Penetration testing", en: "Penetration testing" },
      { es: "Auditoría de acceso", en: "Access audit" },
      { es: "Encriptación", en: "Encryption" }
    ],
    industry: ["consulting", "retail", "ecommerce", "healthcare"]
  },
  {
    id: "sales-optimizer",
    name: { es: "Sales Optimizer", en: "Sales Optimizer" },
    description: {
      es: "Automatiza ventas, gestiona leads, personaliza ofertas",
      en: "Automates sales, manages leads, personalizes offers"
    },
    icon: "💰",
    capabilities: [
      { es: "Gestión de leads", en: "Lead management" },
      { es: "Scoring de clientes", en: "Customer scoring" },
      { es: "Personalización de ofertas", en: "Offer personalization" },
      { es: "Seguimiento automático", en: "Automated follow-up" }
    ],
    useCases: [
      { es: "Pipeline de ventas", en: "Sales pipeline" },
      { es: "Email de conversión", en: "Conversion emails" },
      { es: "Recomendaciones de productos", en: "Product recommendations" },
      { es: "Upsell/Cross-sell", en: "Upsell/Cross-sell" }
    ],
    industry: ["retail", "ecommerce", "consulting", "saas"]
  },
  {
    id: "designer-ai",
    name: { es: "AI Designer", en: "AI Designer" },
    description: {
      es: "Genera diseños, imágenes, banners, infografías",
      en: "Generates designs, images, banners, infographics"
    },
    icon: "🎨",
    capabilities: [
      { es: "Generación de imágenes", en: "Image generation" },
      { es: "Diseño de layouts", en: "Layout design" },
      { es: "Branding consistente", en: "Consistent branding" },
      { es: "Diseño responsive", en: "Responsive design" }
    ],
    useCases: [
      { es: "Banners para web", en: "Web banners" },
      { es: "Social media graphics", en: "Social media graphics" },
      { es: "Infografías", en: "Infographics" },
      { es: "Mockups de productos", en: "Product mockups" }
    ],
    industry: ["retail", "ecommerce", "consulting", "realestate"]
  }
];

export function getAgents(locale: Locale) {
  return AGENTS.map(agent => ({
    ...agent,
    name: agent.name[locale],
    description: agent.description[locale]
  }));
}

export function getAgentById(id: string, locale: Locale) {
  const agent = AGENTS.find(a => a.id === id);
  if (!agent) return null;
  
  return {
    ...agent,
    name: agent.name[locale],
    description: agent.description[locale],
    capabilities: agent.capabilities.map(c => c[locale]),
    useCases: agent.useCases.map(u => u[locale])
  };
}

export function getAgentsByIndustry(industry: string, locale: Locale) {
  return AGENTS
    .filter(a => a.industry.includes(industry))
    .map(agent => ({
      ...agent,
      name: agent.name[locale],
      description: agent.description[locale]
    }));
}
