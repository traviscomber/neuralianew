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
      es: "EcoSueloLab conecta señales satelitales, orquestación y WhatsApp para convertir información agrícola en un flujo operacional consultable y trazable.",
      en: "EcoSueloLab connects satellite signals, orchestration and WhatsApp to turn agricultural information into a queryable, traceable operational workflow.",
    },
    industry: { es: "Agricultura", en: "Agriculture" },
    implementation: { es: "Integración operacional", en: "Operational integration" },
    status: { es: "Sistema implementado", en: "System implemented" },
    highlights: [
      { label: { es: "Fuentes", en: "Sources" }, value: { es: "Satélite + contexto", en: "Satellite + context" } },
      { label: { es: "Canal", en: "Channel" }, value: { es: "WhatsApp", en: "WhatsApp" } },
      { label: { es: "Control", en: "Control" }, value: { es: "Reglas + contexto", en: "Rules + context" } },
      { label: { es: "Evidencia", en: "Evidence" }, value: { es: "Trazable", en: "Traceable" } },
    ],
    sections: [
      {
        id: "challenge",
        heading: { es: "El Desafío", en: "The Challenge" },
        body: {
          es: "Las señales agrícolas llegaban desde herramientas separadas y requerían interpretación y enrutamiento manual antes de convertirse en una acción útil para terreno.",
          en: "Agricultural signals arrived from separate tools and required manual interpretation and routing before becoming useful field actions.",
        },
      },
      {
        id: "solution",
        heading: { es: "La Solución", en: "The Solution" },
        body: {
          es: "N3uralia diseñó una capa de integración que conecta datos agrícolas, reglas, contexto y un canal conversacional para consultar y distribuir información operacional.",
          en: "N3uralia designed an integration layer connecting agricultural data, rules, context and a conversational channel for querying and distributing operational information.",
        },
        bullets: [
          { es: "Normalización de señales", en: "Signal normalization" },
          { es: "Enrutamiento con reglas y contexto", en: "Routing with rules and context" },
          { es: "Interacción por WhatsApp", en: "WhatsApp interaction" },
          { es: "Trazabilidad de la información utilizada", en: "Traceability of the information used" },
        ],
      },
      {
        id: "impact",
        heading: { es: "Valor operacional", en: "Operational Value" },
        body: {
          es: "El equipo puede acceder a señales y contexto desde un canal operativo familiar, con una arquitectura preparada para conservar historial y mejorar el flujo con evidencia.",
          en: "The team can access signals and context through a familiar operational channel, with an architecture designed to preserve history and improve the workflow with evidence.",
        },
      },
    ],
    stackLine: {
      es: "Datos agrícolas → N3uralia Orchestration → Reglas y contexto → WhatsApp",
      en: "Agricultural data → N3uralia Orchestration → Rules and context → WhatsApp",
    },
  },
  {
    slug: "despega-tu-carrera",
    verticalTag: { es: "Educación + Full-Stack", en: "Education + Full-Stack" },
    title: { es: "Plataforma de Coaching Profesional", en: "Career Coaching Platform" },
    summary: {
      es: "Plataforma full-stack con evaluación, biblioteca de contenidos y asistencia conversacional conectada al perfil del usuario.",
      en: "Full-stack platform with assessment, a content library and conversational assistance connected to the user's profile.",
    },
    industry: { es: "Educación / Coaching", en: "Education / Coaching" },
    implementation: { es: "Idea → Producto", en: "Idea → Product" },
    status: { es: "Producto implementado", en: "Product implemented" },
    highlights: [
      { label: { es: "Producto", en: "Product" }, value: { es: "Full-stack", en: "Full-stack" } },
      { label: { es: "Perfil", en: "Profile" }, value: { es: "Contextual", en: "Contextual" } },
      { label: { es: "Contenido", en: "Content" }, value: { es: "Indexado", en: "Indexed" } },
      { label: { es: "IA", en: "AI" }, value: { es: "Asistente", en: "Assistant" } },
    ],
    sections: [
      {
        id: "challenge",
        heading: { es: "El Desafío", en: "The Challenge" },
        body: {
          es: "La iniciativa requería transformar una metodología de acompañamiento en un producto digital con perfiles, evaluaciones, contenidos y asistencia inteligente.",
          en: "The initiative required turning a coaching methodology into a digital product with profiles, assessments, content and intelligent assistance.",
        },
      },
      {
        id: "solution",
        heading: { es: "La Solución", en: "The Solution" },
        body: {
          es: "Se construyó una arquitectura full-stack que integra frontend, backend, base de datos, motor de evaluación, contenido indexado y un asistente conectado al contexto del usuario.",
          en: "A full-stack architecture was built integrating frontend, backend, database, assessment engine, indexed content and an assistant connected to user context.",
        },
        bullets: [
          { es: "Evaluaciones con scoring estructurado", en: "Assessments with structured scoring" },
          { es: "Biblioteca indexada y búsqueda", en: "Indexed library and search" },
          { es: "Asistencia contextual", en: "Context-aware assistance" },
          { es: "Infraestructura y despliegue continuo", en: "Infrastructure and continuous deployment" },
        ],
      },
      {
        id: "results",
        heading: { es: "Resultado", en: "Result" },
        body: {
          es: "Una metodología que antes dependía de componentes separados quedó convertida en un producto digital integrado y operable.",
          en: "A methodology that previously depended on separate components was turned into an integrated, operable digital product.",
        },
      },
    ],
    stackLine: {
      es: "React + TypeScript → API → PostgreSQL/Supabase → IA contextual → Cloud",
      en: "React + TypeScript → API → PostgreSQL/Supabase → Contextual AI → Cloud",
    },
  },
  {
    slug: "blackswan-facility-core",
    verticalTag: { es: "Facility Operations + Full-Stack", en: "Facility Operations + Full-Stack" },
    title: { es: "Operación Unificada para Propiedades", en: "Unified Operations for Properties" },
    summary: {
      es: "Black Swan Facility Core centraliza datos, mantenimiento, propiedades, documentos y flujos operacionales en un sistema con trazabilidad.",
      en: "Black Swan Facility Core centralizes data, maintenance, properties, documents and operational workflows in a traceable system.",
    },
    industry: { es: "Facility & Property Operations", en: "Facility & Property Operations" },
    implementation: { es: "Desarrollo continuo", en: "Continuous development" },
    status: { es: "En producción", en: "In production" },
    highlights: [
      { label: { es: "Operación", en: "Operations" }, value: { es: "Unificada", en: "Unified" } },
      { label: { es: "Datos", en: "Data" }, value: { es: "Canónicos", en: "Canonical" } },
      { label: { es: "Acciones", en: "Actions" }, value: { es: "Trazables", en: "Traceable" } },
      { label: { es: "Escala", en: "Scale" }, value: { es: "Multi-propiedad", en: "Multi-property" } },
    ],
    sections: [
      {
        id: "challenge",
        heading: { es: "El Desafío", en: "The Challenge" },
        body: {
          es: "La operación dependía de información repartida entre canales y herramientas distintas, dificultando mantener una vista coherente de propiedades, mantenimiento, documentos y trabajo pendiente.",
          en: "Operations depended on information spread across different channels and tools, making it difficult to maintain a coherent view of properties, maintenance, documents and pending work.",
        },
        bullets: [
          { es: "Información fragmentada", en: "Fragmented information" },
          { es: "Responsabilidades distribuidas", en: "Distributed responsibilities" },
          { es: "Falta de una fuente operacional única", en: "No single operational source of truth" },
        ],
      },
      {
        id: "solution",
        heading: { es: "La Solución", en: "The Solution" },
        body: {
          es: "N3uralia construyó una plataforma operacional con modelo de datos central, permisos, mantenimiento, documentación, módulos de propiedad y capas de inteligencia conectadas al contexto canónico.",
          en: "N3uralia built an operational platform with a central data model, permissions, maintenance, documentation, property modules and intelligence layers connected to canonical context.",
        },
      },
      {
        id: "impact",
        heading: { es: "Valor operacional", en: "Operational Value" },
        body: {
          es: "La plataforma consolida trabajo y evidencia en una vista común, reduce dependencia de silos y permite que nuevas automatizaciones se construyan sobre datos y permisos explícitos.",
          en: "The platform consolidates work and evidence into a shared view, reduces reliance on silos and allows new automations to be built on explicit data and permissions.",
        },
      },
    ],
    stackLine: {
      es: "Next.js/React → PostgreSQL/Supabase → Permisos → Flujos operacionales → IA contextual",
      en: "Next.js/React → PostgreSQL/Supabase → Permissions → Operational workflows → Contextual AI",
    },
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

export function t2(locale: Locale, v: { es: string; en: string }) {
  return locale === "es" ? v.es : v.en;
}
