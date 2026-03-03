import type { Locale } from "./dictionaries";
import type { LucideIcon } from "lucide-react";

export type CaseStudy = {
  slug: string;
  clientName: { es: string; en: string };
  verticalTag: { es: string; en: string };
  title: { es: string; en: string };
  summary: { es: string; en: string };
  industry: { es: string; en: string };
  status: { es: string; en: string };
  implementation: { es: string; en: string };
  highlights: Array<{ label: { es: string; en: string }; value: { es: string; en: string } }>;
  sections: Array<{
    id: string;
    heading: { es: string; en: string };
    body: { es: string; en: string };
    bullets?: Array<{ es: string; en: string }>;
    icon?: string;
  }>;
  stackLine: { es: string; en: string };
  techLogos?: Array<{ name: string; url: string; alt: string }>;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "ecosuelolab",
    clientName: { es: "Ecosuelolab", en: "Ecosuelolab" },
    verticalTag: { es: "Agricultura + IA", en: "Agriculture + AI" },
    title: { es: "Monitoreo de Suelo Inteligente", en: "Intelligent Soil Monitoring" },
    summary: {
      es: "Ecosuelolab transformó alertas satelitales en decisiones automáticas. IrriWatch + Agentes IA N3uralia = monitoreo 24/7 sin intervención manual.",
      en: "Ecosuelolab turned satellite alerts into automated decisions. IrriWatch + N3uralia agents = 24/7 monitoring with zero manual intervention.",
    },
    industry: { es: "Agricultura", en: "Agriculture" },
    implementation: { es: "14 días", en: "14 days" },
    status: { es: "100% Automático", en: "100% Automated" },
    highlights: [
      { label: { es: "Automatización", en: "Automation" }, value: { es: "100%", en: "100%" } },
      { label: { es: "Latencia", en: "Latency" }, value: { es: "<5s", en: "<5s" } },
      { label: { es: "Disponibilidad", en: "Availability" }, value: { es: "99.9%", en: "99.9%" } },
      { label: { es: "Operación", en: "Operation" }, value: { es: "24/7", en: "24/7" } },
    ],
    sections: [
      {
        id: "challenge",
        heading: { es: "El Desafío", en: "The Challenge" },
        body: {
          es: "Ecosuelolab recibe alertas diarias de IrriWatch (Hydrosat): estrés hídrico, humedad de suelo, recomendaciones de riego. Antes, estas alertas llegaban dispersas y requerían validación y enrutamiento manual.",
          en: "Ecosuelolab receives daily IrriWatch (Hydrosat) alerts: water stress, soil moisture, irrigation recommendations. Previously, alerts were scattered and required manual validation and routing.",
        },
        bullets: [
          { es: "Procesamiento manual ineficiente", en: "Inefficient manual processing" },
          { es: "Decisiones retrasadas por datos incompletos", en: "Delayed decisions due to incomplete signals" },
        ],
      },
      {
        id: "solution",
        heading: { es: "La Solución", en: "The Solution" },
        icon: "Cog",
        body: {
          es: "N3uralia construyó una infraestructura de integración para conectar IrriWatch → Agentes IA → WhatsApp. Cada alerta se procesa automáticamente con orquestación central, validación, normalización, decisión y acción en tiempo real.",
          en: "N3uralia built an integration layer connecting IrriWatch → AI Agents → WhatsApp. Every alert is processed automatically with central orchestration: validation, normalization, decision, and real-time action.",
        },
        bullets: [
          { es: "Orquestación Central: múltiples agentes coordinados en paralelo", en: "Central Orchestration: multiple agents coordinated in parallel" },
          { es: "Normalización automática + intent detection con NLP", en: "Automatic normalization + NLP-based intent detection" },
          { es: "Decisión y enrutamiento inteligente con reglas + contexto histórico", en: "Smart decision routing with rules + historical context" },
          { es: "Entrega omnicanal: WhatsApp, Email, Dashboard (Twilio + APIs propias)", en: "Omnichannel delivery: WhatsApp, Email, Dashboard (Twilio + custom APIs)" },
          { es: "Feedback loop continuo para mejora automática del sistema", en: "Continuous feedback loop for autonomous system improvement" },
          { es: "Trazabilidad completa: cada evento registrado, auditable y verificable", en: "Full traceability: every event logged, auditable, and verifiable" },
        ],
      },
      {
        id: "impact",
        heading: { es: "Impacto", en: "Impact" },
        body: {
          es: "De alerta a acción en segundos, con trazabilidad y operación continua. Base para inteligencia: historial → aprendizaje → mejora.",
          en: "Alert-to-action in seconds, with traceability and continuous operation. Foundation for intelligence: history → learning → improvement.",
        },
      },
    ],
    stackLine: {
      es: "IrriWatch API → N3uralia Orchestration → Intent Detection → Twilio WhatsApp API → 24/7",
      en: "IrriWatch API → N3uralia Orchestration → Intent Detection → Twilio WhatsApp API → 24/7",
    },
    techLogos: [
      { name: "Hydrosat", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hydrosat-logo.svg", alt: "Hydrosat" },
      { name: "Twilio", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/twilio-logo.svg", alt: "Twilio" },
      { name: "Node.js", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nodejs-logo.svg", alt: "Node.js" },
      { name: "PostgreSQL", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/postgresql-logo.svg", alt: "PostgreSQL" },
      { name: "OpenAI", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/openai-logo.svg", alt: "OpenAI" },
    ],
  },
  {
    slug: "despega-tu-carrera",
    clientName: { es: "Despega Tu Carrera", en: "Despega Tu Carrera" },
    verticalTag: { es: "Educación + Full-Stack", en: "Education + Full-Stack" },
    title: { es: "Plataforma de Coaching Profesional desde Cero", en: "Career Coaching Platform Built From Zero" },
    summary: {
      es: "De una idea a 10.000+ usuarios. Plataforma full-stack con tests, biblioteca (120+ libros) y coach IA personalizado 24/7.",
      en: "From an idea to 10,000+ users. Full-stack platform with psychometric tests, 120+ resources, and a personalized AI coach available 24/7.",
    },
    industry: { es: "Educación / Coaching", en: "Education / Coaching" },
    implementation: { es: "Idea → Producción", en: "Idea → Production" },
    status: { es: "En Producción 24/7", en: "Live 24/7" },
    highlights: [
      { label: { es: "Usuarios activos", en: "Active users" }, value: { es: "10.000+", en: "10,000+" } },
      { label: { es: "Tests", en: "Tests" }, value: { es: "50.000+", en: "50,000+" } },
      { label: { es: "Satisfacción", en: "Satisfaction" }, value: { es: "95%", en: "95%" } },
      { label: { es: "Uptime", en: "Uptime" }, value: { es: "99.9%", en: "99.9%" } },
    ],
    sections: [
      {
        id: "challenge",
        heading: { es: "El Desafío", en: "The Challenge" },
        body: {
          es: "No existía plataforma: sin backend, sin base de datos, sin infraestructura. La necesidad: tests psicométricos, biblioteca, coach IA y escalabilidad real.",
          en: "There was no platform: no backend, no database, no infrastructure. Requirements: psychometric tests, a resource library, an AI coach, and real scalability.",
        },
      },
      {
        id: "solution",
        heading: { es: "La Solución", en: "The Solution" },
        icon: "Cog",
        body: {
          es: "Arquitectura full-stack completa diseñada desde cero: frontend React con UX adaptativo, backend Node.js escalable, PostgreSQL con Supabase para multi-tenancy y RLS, motor de tests psicométricos con validación estadística, y coach IA (GPT-4) con RAG sobre base de conocimiento.",
          en: "A complete full-stack architecture built from scratch: adaptive React frontend, scalable Node.js backend, PostgreSQL with Supabase for multi-tenancy and RLS, psychometric test engine with statistical validation, and GPT-4 AI coach with RAG over knowledge base.",
        },
        bullets: [
          { es: "Tests psicométricos con scoring automático y perfilamientos", en: "Psychometric tests with automated scoring and profiling" },
          { es: "Sistemas Inteligentes Integrados: API REST + webhooks para integraciones externas", en: "Integrated Intelligent Systems: REST APIs + webhooks for external integrations" },
          { es: "Biblioteca indexada + búsqueda semántica con embeddings", en: "Indexed library + semantic search with embeddings" },
          { es: "Coach IA personalizado por perfil con memoria contextual persistente", en: "Profile-aware AI coaching with persistent contextual memory" },
          { es: "Pipelines de generación: respuestas validadas automáticamente", en: "Generation Pipelines: auto-validated responses" },
          { es: "Multi-tenant architecture con RLS y segregación de datos completa", en: "Multi-tenant architecture with complete RLS and data segregation" },
        ],
      },
      {
        id: "results",
        heading: { es: "Resultados Medibles", en: "Measurable Results" },
        body: {
          es: "10.000+ usuarios y 50.000+ tests, con experiencia estable y operación 24/7.",
          en: "10,000+ users and 50,000+ tests, with a stable experience and 24/7 operations.",
        },
      },
    ],
    stackLine: {
      es: "React + TypeScript → Node.js API → PostgreSQL/Supabase → OpenAI GPT-4 (RAG) → Vercel/Cloud",
      en: "React + TypeScript → Node.js API → PostgreSQL/Supabase → OpenAI GPT-4 (RAG) → Vercel/Cloud",
    },
    techLogos: [
      { name: "React", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/react-logo.svg", alt: "React" },
      { name: "TypeScript", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/typescript-logo.svg", alt: "TypeScript" },
      { name: "Node.js", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nodejs-logo.svg", alt: "Node.js" },
      { name: "PostgreSQL", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/postgresql-logo.svg", alt: "PostgreSQL" },
      { name: "Supabase", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/supabase-logo.svg", alt: "Supabase" },
      { name: "OpenAI", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/openai-logo.svg", alt: "OpenAI" },
    ],
  },
  {
    slug: "blackswan-facilities",
    clientName: { es: "Blackswan Facilities", en: "Blackswan Facilities" },
    verticalTag: { es: "Property Management + Full-Stack", en: "Property Management + Full-Stack" },
    title: { es: "Operación Unificada para Hoteles de Lujo", en: "Unified Operations for Luxury Properties" },
    summary: {
      es: "De sistemas fragmentados a una plataforma unificada (BFCS). Primeros resultados: -40% tiempo operativo y respuesta 4h → 15min.",
      en: "From fragmented tools to a unified platform (BFCS). Early wins: -40% operational time and response time from 4h → 15min.",
    },
    industry: { es: "Propiedades de lujo", en: "Luxury properties" },
    implementation: { es: "60 días", en: "60 days" },
    status: { es: "Live + creciendo", en: "Live + growing" },
    highlights: [
      { label: { es: "Eficiencia", en: "Efficiency" }, value: { es: "-40% (early)", en: "-40% (early)" } },
      { label: { es: "Respuesta", en: "Response" }, value: { es: "4h → 15min", en: "4h → 15min" } },
      { label: { es: "Datos", en: "Data" }, value: { es: "99.9%", en: "99.9%" } },
      { label: { es: "Escala", en: "Scale" }, value: { es: "8 → 20+ props", en: "8 → 20+ props" } },
    ],
    sections: [
      {
        id: "challenge",
        heading: { es: "El Desafío", en: "The Challenge" },
        body: {
          es: "Operación distribuida en 4+ sistemas: email, Google Sheets, WhatsApp y herramientas separadas para mantenimiento y cobros. Esto generaba duplicación, falta de visibilidad y tiempos de respuesta lentos.",
          en: "Operations spread across 4+ systems: email, Google Sheets, WhatsApp, plus separate maintenance and billing tools. Result: duplicate work, no unified view, slow response times.",
        },
        bullets: [
          { es: "200+ horas/mes perdidas", en: "200+ hours/month wasted" },
          { es: "Sin vista unificada para 8+ propiedades", en: "No unified view across 8+ properties" },
          { es: "Respuestas 4–8 horas", en: "4–8 hour response times" },
        ],
      },
      {
        id: "solution",
        heading: { es: "La Solución", en: "The Solution" },
        icon: "Brain",
        body: {
          es: "N3uralia construyó BFCS (Blackswan Facility Core System): plataforma unificada con base de datos central, motor de reservas inteligente, comunicación omnicanal orquestada, dashboard operativo real-time, y orquestación agéntica para automatización operacional.",
          en: "N3uralia built BFCS (Blackswan Facility Core System): a unified platform with a central database, intelligent booking engine, orchestrated omnichannel comms, real-time ops dashboard, and agentic orchestration for operational automation.",
        },
        bullets: [
          { es: "Orquestación Central: agentes coordinados para reservas, mantenimiento y operación", en: "Central Orchestration: coordinated agents for booking, maintenance, and operations" },
          { es: "Sistemas Inteligentes Integrados: APIs para email, WhatsApp, SMS, webhooks externos", en: "Integrated Intelligent Systems: APIs for email, WhatsApp, SMS, external webhooks" },
          { es: "Base de datos central con multi-tenancy: 8+ propiedades, datos segregados y auditados", en: "Central database with multi-tenancy: 8+ properties, segregated and audited data" },
          { es: "Dashboard operativo en tiempo real con alertas inteligentes", en: "Real-time ops dashboard with intelligent alerts" },
          { es: "Automatización Operacional Real: procesos fluyen en canales donde trabaja el equipo", en: "Real Operational Automation: processes flow in channels where staff already works" },
          { es: "Pipelines validados: decisiones de mantenimiento y cobros con historial y contexto", en: "Validated Pipelines: maintenance and billing decisions with history and context" },
        ],
      },
      {
        id: "impact",
        heading: { es: "Impacto", en: "Impact" },
        body: {
          es: "Ahorro operacional inicial medido (-40%), reducción drástica de tiempos de respuesta (4h→15min) y eliminación de errores al centralizar datos.",
          en: "Measured early operational savings (-40%), dramatically faster responses (4h→15min), and fewer errors thanks to a single source of truth.",
        },
      },
    ],
    stackLine: {
      es: "React → Node.js/Express → PostgreSQL → N3uralia Orchestration → Integraciones multi-canal",
      en: "React → Node.js/Express → PostgreSQL → N3uralia Orchestration → Multi-channel integrations",
    },
    techLogos: [
      { name: "React", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/react-logo.svg", alt: "React" },
      { name: "Node.js", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nodejs-logo.svg", alt: "Node.js" },
      { name: "PostgreSQL", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/postgresql-logo.svg", alt: "PostgreSQL" },
      { name: "Twilio", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/twilio-logo.svg", alt: "Twilio" },
      { name: "Google Workspace", url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google-workspace-logo.svg", alt: "Google Workspace" },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

export function t2(locale: Locale, v: { es: string; en: string }) {
  return locale === "es" ? v.es : v.en;
}
