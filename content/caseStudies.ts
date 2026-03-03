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
    clientName: { es: "Compañía Agrícola", en: "Agricultural Company" },
    verticalTag: { es: "Agricultura + IA", en: "Agriculture + AI" },
    title: { es: "De alertas dispersas a decisiones automáticas", en: "From Scattered Alerts to Automated Decisions" },
    summary: {
      es: "Un operador agrícola recibía diariamente alertas satelitales sin estructura. Cada alerta era una decisión manual retrasada. Con orquestación agéntica, transformamos esos datos en acciones en tiempo real.",
      en: "An agricultural operator received daily satellite alerts without structure. Every alert meant a delayed manual decision. With agentic orchestration, we turned that data into real-time action.",
    },
    industry: { es: "Agricultura", en: "Agriculture" },
    implementation: { es: "14 días", en: "14 days" },
    status: { es: "100% Automático", en: "100% Automated" },
    highlights: [
      { label: { es: "Automatización", en: "Automation" }, value: { es: "100%", en: "100%" } },
      { label: { es: "Latencia", en: "Latency" }, value: { es: "<5s", en: "<5s" } },
      { label: { es: "Disponibilidad", en: "Availability" }, value: { es: "24/7", en: "24/7" } },
      { label: { es: "Decisiones/día", en: "Decisions/day" }, value: { es: "200+", en: "200+" } },
    ],
    sections: [
      {
        id: "challenge",
        heading: { es: "El Problema Real", en: "The Real Problem" },
        body: {
          es: "Recibían alertas diarias de satélites (humedad de suelo, estrés hídrico, recomendaciones de riego). Pero los datos llegaban dispersos en múltiples canales, requería validación manual, y cada decisión tomaba horas. Las acciones se retrasaban, los recursos no se optimizaban.",
          en: "Daily satellite alerts arrived (soil moisture, water stress, irrigation recommendations). But the data was scattered across channels, required manual validation, and decisions took hours. Actions were delayed, resources weren't optimized.",
        },
        bullets: [
          { es: "Decisiones que deberían tomar 30 segundos tardaban 4-8 horas", en: "Decisions that should take 30s took 4-8 hours" },
          { es: "Información validada manualmente = riesgo de error humano", en: "Manual validation = human error risk" },
          { es: "Sin coordinación entre múltiples alertas y canales", en: "No coordination across multiple alerts and channels" },
        ],
      },
      {
        id: "solution",
        heading: { es: "Cómo Lo Solucionamos", en: "How We Solved It" },
        body: {
          es: "Construimos una infraestructura de orquestación central que recibe datos de satélite en tiempo real, los valida automáticamente con reglas de negocio, toma decisiones inteligentes basadas en contexto histórico, y entrega acciones en múltiples canales (WhatsApp, email, dashboard). Todo ejecutado por agentes IA coordinados, sin intervención manual.",
          en: "We built a central orchestration layer that receives real-time satellite data, automatically validates it against business rules, makes intelligent decisions based on historical context, and delivers actions across channels (WhatsApp, email, dashboard). All executed by coordinated AI agents, zero manual intervention.",
        },
        bullets: [
          { es: "Ingesta de datos normalizada desde múltiples fuentes satelitales", en: "Normalized data ingestion from multiple satellite sources" },
          { es: "Motor de decisión inteligente con reglas + contexto histórico (últimas 30 días)", en: "Smart decision engine with rules + historical context (last 30 days)" },
          { es: "Validación automática: cada decisión pasa por chequeos de consistencia", en: "Automatic validation: each decision passes consistency checks" },
          { es: "Entrega omnicanal: WhatsApp, Email, Dashboard sincronizados", en: "Omnichannel delivery: WhatsApp, Email, Dashboard synced" },
          { es: "Feedback loop: cada acción se registra y mejora el modelo continuamente", en: "Feedback loop: every action logged and continuously improves the model" },
          { es: "Trazabilidad 100%: auditable, verificable, compliant", en: "100% Traceability: auditable, verifiable, compliant" },
        ],
      },
      {
        id: "impact",
        heading: { es: "El Resultado", en: "The Result" },
        body: {
          es: "200+ decisiones automáticas diarias en segundos. Eliminación de cuellos de botella manuales. Base sólida para inteligencia: datos → decisiones → aprendizaje → mejora continua.",
          en: "200+ automated daily decisions in seconds. Bottleneck elimination. Solid foundation for intelligence: data → decisions → learning → continuous improvement.",
        },
      },
    ],
    stackLine: {
      es: "Satélite API → Orquestación Central → Motor de Decisión → Multi-canal (WhatsApp, Email) → 24/7",
      en: "Satellite API → Central Orchestration → Decision Engine → Multi-channel (WhatsApp, Email) → 24/7",
    },
    techLogos: [],
  },
  {
    slug: "despega-tu-carrera",
    clientName: { es: "Plataforma Educativa", en: "Educational Platform" },
    verticalTag: { es: "Educación + Full-Stack", en: "Education + Full-Stack" },
    title: { es: "De una idea a 10.000+ usuarios activos", en: "From Idea to 10,000+ Active Users" },
    summary: {
      es: "Un equipo pequeño tenía una idea: tests psicométricos + biblioteca de recursos + coach IA personalizado. Sin código, sin infraestructura, sin usuarios. Hoy: 10.000+ usuarios reales, 50.000+ tests completados, operando 24/7.",
      en: "A small team had an idea: psychometric tests + resource library + personalized AI coaching. No code, no infrastructure, no users. Today: 10,000+ real users, 50,000+ completed tests, operating 24/7.",
    },
    industry: { es: "Educación / Coaching", en: "Education / Coaching" },
    implementation: { es: "Idea → Producción", en: "Idea → Production" },
    status: { es: "Live 24/7, en crecimiento", en: "Live 24/7, growing" },
    highlights: [
      { label: { es: "Usuarios activos", en: "Active users" }, value: { es: "10.000+", en: "10,000+" } },
      { label: { es: "Tests completados", en: "Tests completed" }, value: { es: "50.000+", en: "50,000+" } },
      { label: { es: "Satisfacción", en: "Satisfaction" }, value: { es: "95%", en: "95%" } },
      { label: { es: "Disponibilidad", en: "Availability" }, value: { es: "99.9%", en: "99.9%" } },
    ],
    sections: [
      {
        id: "challenge",
        heading: { es: "El Desafío", en: "The Challenge" },
        body: {
          es: "La idea era clara pero la ejecución tenía obstáculos: arquitectura escalable para 10.000+ usuarios, tests psicométricos con validación estadística, biblioteca de contenido indexable y buscable, coach IA que fuera realmente personalizado (con memoria de usuario), y todo operando sin interrupciones.",
          en: "The vision was clear but execution had hurdles: scalable architecture for 10,000+ users, psychometric tests with statistical validation, searchable content library, truly personalized AI coaching (with user memory), and 24/7 reliability.",
        },
        bullets: [
          { es: "Escalabilidad: de 0 a 10.000+ usuarios sin infraestructura preparada", en: "Scalability: from 0 to 10,000+ users without prep" },
          { es: "Complejidad: tests + memoria de usuario + coaching personalizado", en: "Complexity: tests + user memory + personalized coaching" },
          { es: "Operación: 24/7 sin personal técnico on-call", en: "Operations: 24/7 without on-call staff" },
        ],
      },
      {
        id: "solution",
        heading: { es: "Cómo Lo Construimos", en: "How We Built It" },
        body: {
          es: "Arquitectura full-stack desde cero: frontend React adaptativo, backend Node.js escalable con colas de trabajo, PostgreSQL con multi-tenancy y RLS, motor de tests con scoring automático, biblioteca con búsqueda semántica (embeddings), y coach IA (GPT-4) con memory plugin que retiene contexto del usuario. Todo deployado en infraestructura serverless con auto-scaling y monitoreo automático.",
          en: "Full-stack architecture from scratch: adaptive React frontend, scalable Node.js backend with job queues, PostgreSQL with multi-tenancy and RLS, automated test scoring engine, semantic search library (embeddings), and GPT-4 AI coach with memory plugin retaining user context. All deployed on serverless infrastructure with auto-scaling and automated monitoring.",
        },
        bullets: [
          { es: "Tests psicométricos validados + scoring automático", en: "Validated psychometric tests + automated scoring" },
          { es: "Búsqueda semántica: encontrar recursos relevantes por significado, no solo palabras clave", en: "Semantic search: find relevant resources by meaning, not keywords" },
          { es: "Coach IA personalizado: retiene conversaciones, adapta el tono, sugiere recursos relevantes", en: "Personalized AI coach: retains conversations, adapts tone, suggests relevant resources" },
          { es: "Multi-tenancy real: cada usuario con su espacio aislado y seguro", en: "Real multi-tenancy: each user with isolated, secure space" },
          { es: "Pipelines escalables: procesa 50.000+ tests sin degradación", en: "Scalable pipelines: processes 50,000+ tests without degradation" },
          { es: "Monitoreo automático: alertas, logs, métricas, sin intervención", en: "Automated monitoring: alerts, logs, metrics, hands-off" },
        ],
      },
      {
        id: "results",
        heading: { es: "Los Números Reales", en: "The Real Numbers" },
        body: {
          es: "10.000+ usuarios activos mensuales. 50.000+ tests completados. 95% de satisfacción. Zero downtime en últimos 6 meses. Crecimiento sostenido mes a mes.",
          en: "10,000+ monthly active users. 50,000+ tests completed. 95% satisfaction. Zero downtime in last 6 months. Sustained month-over-month growth.",
        },
      },
    ],
    stackLine: {
      es: "React + TypeScript → Node.js (Bull Queues) → PostgreSQL (Supabase) → OpenAI GPT-4 (memory) → Vercel/Cloud",
      en: "React + TypeScript → Node.js (Bull Queues) → PostgreSQL (Supabase) → OpenAI GPT-4 (memory) → Vercel/Cloud",
    },
    techLogos: [],
  },
  {
    slug: "blackswan-facilities",
    clientName: { es: "Cadena de Hoteles de Lujo", en: "Luxury Hotel Chain" },
    verticalTag: { es: "Property Management + Full-Stack", en: "Property Management + Full-Stack" },
    title: { es: "Unificando operaciones fragmentadas", en: "Unifying Fragmented Operations" },
    summary: {
      es: "8 propiedades, 4+ sistemas sin conexión, 200+ horas/mes de trabajo manual. El equipo manejaba reservas en email, mantenimiento en hojas de cálculo, comunicaciones en WhatsApp. Resultado: ineficiencia y errores. Necesitaban una visión única.",
      en: "8 properties, 4+ disconnected systems, 200+ hours/month of manual work. Staff handled bookings in email, maintenance in spreadsheets, comms on WhatsApp. Result: inefficiency and errors. They needed one unified view.",
    },
    industry: { es: "Propiedades de lujo", en: "Luxury properties" },
    implementation: { es: "60 días", en: "60 days" },
    status: { es: "Live + escalando", en: "Live + scaling" },
    highlights: [
      { label: { es: "Ahorro operacional", en: "Operational savings" }, value: { es: "-40%", en: "-40%" } },
      { label: { es: "Respuesta", en: "Response time" }, value: { es: "4h → 15min", en: "4h → 15min" } },
      { label: { es: "Propiedades", en: "Properties" }, value: { es: "8 → 20+", en: "8 → 20+" } },
      { label: { es: "Uptime", en: "Uptime" }, value: { es: "99.9%", en: "99.9%" } },
    ],
    sections: [
      {
        id: "challenge",
        heading: { es: "El Caos Operacional", en: "The Operational Chaos" },
        body: {
          es: "Cada propiedad manejaba sus datos en silos. Reservas en email, mantenimiento en Google Sheets, comunicaciones en WhatsApp. No había visión central. Una solicitud de huésped pasaba por email, se copiaba a Sheets, se comunicaba por WhatsApp. Múltiples puntos de fallo, tiempos de respuesta lentos (4-8 horas), datos inconsistentes.",
          en: "Each property operated in silos. Bookings in email, maintenance in Sheets, comms on WhatsApp. No central view. A guest request went via email, got copied to Sheets, communicated over WhatsApp. Multiple failure points, slow response times (4-8 hours), inconsistent data.",
        },
        bullets: [
          { es: "200+ horas/mes duplicando información entre sistemas", en: "200+ hours/month duplicating data across systems" },
          { es: "Solicitudes de huésped tardaban 4-8 horas en resolverse", en: "Guest requests took 4-8 hours to resolve" },
          { es: "Sin auditoría, sin trazabilidad, alto riesgo de error", en: "No audit trail, no traceability, high error risk" },
        ],
      },
      {
        id: "solution",
        heading: { es: "La Plataforma Unificada", en: "The Unified Platform" },
        body: {
          es: "Construimos una plataforma central (BFCS) que agrega todas las operaciones: base de datos única para 8+ propiedades, motor de reservas inteligente, comunicación orquestada multi-canal, dashboard operativo real-time, y agentes IA que automatizan procesos recurrentes (confirmaciones, cambios de estado, escaladas).",
          en: "We built a central platform (BFCS) aggregating all operations: single database for 8+ properties, intelligent booking engine, orchestrated multi-channel comms, real-time ops dashboard, and AI agents automating recurring processes (confirmations, status updates, escalations).",
        },
        bullets: [
          { es: "Base de datos centralizada con multi-tenancy: 8+ propiedades, datos segregados", en: "Centralized multi-tenant database: 8+ properties, segregated data" },
          { es: "Motor de reservas inteligente: detecta disponibilidad, sugiere alternativas", en: "Smart booking engine: detects availability, suggests alternatives" },
          { es: "Orquestación omnicanal: email, WhatsApp, SMS, todos sincronizados", en: "Omnichannel orchestration: email, WhatsApp, SMS, all synced" },
          { es: "Agentes IA: confirman reservas, notifican cambios, escalan problemáticas", en: "AI agents: confirm bookings, notify changes, escalate issues" },
          { es: "Dashboard real-time: 8+ propiedades en una pantalla", en: "Real-time dashboard: 8+ properties on one screen" },
          { es: "Auditoría 100%: cada acción registrada, verificable, compliant", en: "100% Audit trail: every action logged, verifiable, compliant" },
        ],
      },
      {
        id: "impact",
        heading: { es: "Los Cambios Medibles", en: "Measurable Changes" },
        body: {
          es: "-40% en tiempo operacional (200h/mes → 120h/mes). Respuesta de 4-8 horas a 15 minutos. Eliminación de errores por data centralizada. Escalabilidad: de 8 a 20+ propiedades sin aumentar overhead.",
          en: "-40% operational time (200h/month → 120h/month). Response time from 4-8 hours to 15 minutes. Zero errors from centralized data. Scalability: from 8 to 20+ properties without overhead increase.",
        },
      },
    ],
    stackLine: {
      es: "React Dashboard → Node.js API → PostgreSQL Central → Agentes IA → Twilio/Email → 24/7",
      en: "React Dashboard → Node.js API → PostgreSQL Central → AI Agents → Twilio/Email → 24/7",
    },
    techLogos: [],
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

export function t2(locale: Locale, v: { es: string; en: string }) {
  return locale === "es" ? v.es : v.en;
}
