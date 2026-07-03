import type { Locale } from "./dictionaries";

export type CaseStudy = {
  slug: string;
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
  }>;
  stackLine: { es: string; en: string };
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "ecosuelolab",
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
        body: {
          es: "N3uralia construyó una infraestructura de integración para conectar IrriWatch → Agentes IA → WhatsApp. Cada alerta se procesa automáticamente: validación, normalización, decisión y acción.",
          en: "N3uralia built an integration layer connecting IrriWatch → AI Agents → WhatsApp. Every alert is processed automatically: validation, normalization, decision, and action.",
        },
        bullets: [
          { es: "Normalización + intent detection", en: "Normalization + intent detection" },
          { es: "Decisión y enrutamiento con reglas + contexto", en: "Decision and routing with rules + context" },
          { es: "Entrega por WhatsApp (Twilio)", en: "Delivery via WhatsApp (Twilio)" },
          { es: "Feedback loop para mejora continua", en: "Feedback loop for continuous improvement" },
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
  },
  {
    slug: "despega-tu-carrera",
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
        body: {
          es: "Arquitectura full-stack completa: frontend React, backend Node.js, PostgreSQL/Supabase, motor de tests, y coach IA (GPT-4) con base de conocimiento.",
          en: "A complete full-stack architecture: React frontend, Node.js backend, PostgreSQL/Supabase, a test engine, and a GPT-4-based AI coach with a knowledge base.",
        },
        bullets: [
          { es: "Tests psicométricos con scoring automático", en: "Psychometric tests with automated scoring" },
          { es: "Biblioteca indexada + búsqueda semántica", en: "Indexed library + semantic search" },
          { es: "Coach IA personalizado por perfil", en: "Profile-aware AI coaching" },
          { es: "Infra + CI/CD + monitoreo", en: "Infra + CI/CD + monitoring" },
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
  },
  {
    slug: "blackswan-facility-core",
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
        body: {
          es: "N3uralia construyó BFCS: plataforma unificada con base de datos central, motor de reservas, comunicación omnicanal, dashboard operativo y orquestación agéntica.",
          en: "N3uralia built BFCS: a unified platform with a central database, booking engine, omnichannel comms, ops dashboard, and agentic orchestration.",
        },
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
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

export function t2(locale: Locale, v: { es: string; en: string }) {
  return locale === "es" ? v.es : v.en;
}
