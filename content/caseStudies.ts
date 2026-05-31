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
    title: { es: "Plataforma educativa full-stack desde cero", en: "Full-stack educational platform from zero" },
    summary: {
      es: "Un equipo pequeño tenía una idea: tests psicométricos + biblioteca de recursos + coach IA personalizado. Sin código, sin infraestructura. Construimos una plataforma escalable, confiable, que funciona 24/7 sin intervención manual.",
      en: "A small team had an idea: psychometric tests + resource library + personalized AI coaching. No code, no infrastructure. We built a scalable, reliable platform that operates 24/7 without manual intervention.",
    },
    industry: { es: "Educación / Coaching", en: "Education / Coaching" },
    implementation: { es: "Idea → Producción", en: "Idea → Production" },
    status: { es: "Live 24/7, sin interrupciones", en: "Live 24/7, zero downtime" },
    highlights: [
      { label: { es: "Uptime", en: "Uptime" }, value: { es: "99.9%", en: "99.9%" } },
      { label: { es: "Latencia", en: "Latency" }, value: { es: "<100ms", en: "<100ms" } },
      { label: { es: "Escalabilidad", en: "Scalability" }, value: { es: "Multi-tenant", en: "Multi-tenant" } },
      { label: { es: "Arquitectura", en: "Architecture" }, value: { es: "Full-stack", en: "Full-stack" } },
    ],
    sections: [
      {
        id: "challenge",
        heading: { es: "El Desafío", en: "The Challenge" },
        body: {
          es: "La idea era clara pero la ejecución tenía obstáculos: arquitectura escalable y segura, tests psicométricos con validación estadística, biblioteca de contenido indexable y buscable, coach IA realmente personalizado (con memoria de usuario), y todo operando sin interrupciones 24/7.",
          en: "The vision was clear but execution had hurdles: scalable and secure architecture, psychometric tests with statistical validation, searchable content library, truly personalized AI coaching (with user memory), and 24/7 reliability.",
        },
        bullets: [
          { es: "Arquitectura: multi-tenant escalable desde el inicio", en: "Architecture: scalable multi-tenant from day one" },
          { es: "Complejidad técnica: tests con scoring automático + memoria de usuario + coaching IA", en: "Technical complexity: auto-scored tests + user memory + AI coaching" },
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
        heading: { es: "El Resultado", en: "The Result" },
        body: {
          es: "Plataforma completa funcionando 24/7 sin interrupciones. Arquitectura escalable que puede crecer sin rediseños. Base sólida para evolucionar con nuevas funcionalidades sin degradación de rendimiento.",
          en: "Complete platform operating 24/7 with zero downtime. Scalable architecture that grows without redesigns. Solid foundation to evolve with new features without performance degradation.",
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
  {
    slug: "storytimestack",
    clientName: { es: "Plataforma de Libros Interactivos", en: "Interactive Books Platform" },
    verticalTag: { es: "EdTech + Generación de Contenido IA", en: "EdTech + AI Content Generation" },
    title: { es: "Generador de historias interactivas personalizadas", en: "Personalized Interactive Story Generator" },
    summary: {
      es: "Una fintech quería expandir a educación infantil: generar historias interactivas personalizadas para niños en tiempo real. Cada historia única, adaptada al nivel de lectura del niño, con ilustraciones generadas por IA. Sin tiempo de espera, sin stock de contenido limitado.",
      en: "An EdTech startup wanted to scale: generate personalized interactive stories for children in real-time. Each story unique, adapted to reading level, with AI-generated illustrations. No wait times, unlimited content.",
    },
    industry: { es: "Educación infantil", en: "Children's education" },
    implementation: { es: "45 días", en: "45 days" },
    status: { es: "Generando 1000+ historias/día", en: "Generating 1000+ stories/day" },
    highlights: [
      { label: { es: "Latencia", en: "Latency" }, value: { es: "<3s", en: "<3s" } },
      { label: { es: "Historias generadas", en: "Stories generated" }, value: { es: "1000+/día", en: "1000+/day" } },
      { label: { es: "Personalizaicón", en: "Personalization" }, value: { es: "100%", en: "100%" } },
      { label: { es: "Costo reducido", en: "Cost reduced" }, value: { es: "-70%", en: "-70%" } },
    ],
    sections: [
      {
        id: "challenge",
        heading: { es: "El Problema de Escala", en: "The Scale Problem" },
        body: {
          es: "Crear historias para miles de niños manualmente es imposible. Cada niño es único: nivel de lectura diferente, intereses distintos, velocidad de aprendizaje variable. Necesitaban generación masiva de contenido personalizado, rápido, escalable, y económicamente viable.",
          en: "Manually creating stories for thousands of children is impossible. Every child is unique: different reading levels, interests, learning speeds. They needed massive personalized content generation, fast, scalable, and economically viable.",
        },
        bullets: [
          { es: "Generación manual = cuello de botella de contenido", en: "Manual creation = content bottleneck" },
          { es: "Imposible personalizar para cada niño", en: "Impossible to personalize for each child" },
          { es: "Costo de ilustración por historia era prohibitivo", en: "Cost per illustrated story was prohibitive" },
          { es: "Esperas largas = abandono de usuarios", en: "Long waits = user churn" },
        ],
      },
      {
        id: "solution",
        heading: { es: "Pipeline IA Escalable", en: "Scalable AI Pipeline" },
        body: {
          es: "Construimos un pipeline completo de generación de contenido: ingesta de preferencias del niño (edad, intereses, nivel), motor narrativo que genera historias únicas en <3 segundos usando GPT-4 con instrucciones de nivel de lectura, generador de ilustraciones usando Stable Diffusion en paralelo, validación de contenido automática, y almacenamiento en CDN para lectura optimizada.",
          en: "We built a complete content generation pipeline: child preference intake (age, interests, level), narrative engine generating unique stories in <3s using GPT-4 with reading-level instructions, parallel illustration generation using Stable Diffusion, automatic content validation, and CDN storage for optimized delivery.",
        },
        bullets: [
          { es: "Motor narrativo: GPT-4 con prompts contextuales por nivel de lectura", en: "Narrative engine: GPT-4 with contextual prompts per reading level" },
          { es: "Ilustraciones: generadas con Stable Diffusion en paralelo, sin esperar texto", en: "Illustrations: generated with Stable Diffusion in parallel, non-blocking" },
          { es: "Validación automática: check de coherencia, vocabulario, longitud", en: "Automatic validation: coherence, vocabulary, length checks" },
          { es: "Personalización: 200+ parámetros ajustables (género, tema, protagonista, twist)", en: "Personalization: 200+ adjustable parameters (genre, theme, character, twist)" },
          { es: "Cache inteligente: reutiliza historias similares cuando es apropiado", en: "Smart caching: reuses similar stories when appropriate" },
          { es: "Feedback loop: padres califican, modelo aprende preferencias", en: "Feedback loop: parents rate, model learns preferences" },
        ],
      },
      {
        id: "impact",
        heading: { es: "Resultados Mensurables", en: "Measurable Results" },
        body: {
          es: "1000+ historias generadas diariamente sin intervención manual. Latencia <3 segundos. Costo de producción -70% vs ilustración manual. Escalabilidad infinita: 10.000+ niños simultáneamente sin degradación. Usuarios retienen 4x mejor (contenido personalizado = engagement).",
          en: "1000+ stories generated daily with zero manual intervention. <3s latency. -70% production cost vs manual illustration. Infinite scalability: 10,000+ simultaneous children without degradation. 4x better retention (personalized content = engagement).",
        },
      },
    ],
    stackLine: {
      es: "Child Preferences → GPT-4 (narrativas) + Stable Diffusion (ilustraciones) → Validación → CDN → <3s delivery",
      en: "Child Preferences → GPT-4 (narratives) + Stable Diffusion (illustrations) → Validation → CDN → <3s delivery",
    },
    techLogos: [],
  },
  {
    slug: "open-memory-ai",
    clientName: { es: "Plataforma de Contexto Persistente", en: "Persistent Context Platform" },
    verticalTag: { es: "Enterprise + Memory Management", en: "Enterprise + Memory Management" },
    title: { es: "Memoria persistente para agentes empresariales", en: "Persistent Memory for Enterprise Agents" },
    summary: {
      es: "Agentes IA olvidan contexto entre conversaciones. Un cliente requería que sus asistentes recordaran CADA interacción: historial completo, preferencias del cliente, decisiones previas. Sin memoria = inefectivo. Con OpenMemory: agentes que aprenden y mejoran.",
      en: "AI agents forget context between conversations. One client needed assistants remembering EVERY interaction: complete history, customer preferences, previous decisions. No memory = ineffective. With OpenMemory: agents that learn and improve.",
    },
    industry: { es: "Enterprise / Customer Success", en: "Enterprise / Customer Success" },
    implementation: { es: "30 días", en: "30 days" },
    status: { es: "6 meses en producción", en: "6 months in production" },
    highlights: [
      { label: { es: "Retención de contexto", en: "Context retention" }, value: { es: "100%", en: "100%" } },
      { label: { es: "Efektividad mejorada", en: "Improved effectiveness" }, value: { es: "+85%", en: "+85%" } },
      { label: { es: "Tiempo de resolución", en: "Resolution time" }, value: { es: "-60%", en: "-60%" } },
      { label: { es: "Satisfacción cliente", en: "Customer satisfaction" }, value: { es: "+45%", en: "+45%" } },
    ],
    sections: [
      {
        id: "challenge",
        heading: { es: "El Problema de Contexto", en: "The Context Problem" },
        body: {
          es: "Los agentes IA estándar operan session-by-session: cada conversación nueva es como empezar de cero. Un cliente liga a atención: 'Hola, me llamo Juan, tengo problema X'. Agente responde como si fuese la primera interacción. Sin recordar que hace 3 meses Juan reportó problema similar, o que su nivel de SLA es Premium. Resultado: respuestas genéricas, inefectivas, frustrantes.",
          en: "Standard AI agents operate session-by-session: each new conversation starts from zero. Customer calls support: 'Hi, I'm Juan, I have problem X'. Agent responds as if it's first contact. Doesn't remember Juan reported similar issue 3 months ago, or that he's Premium SLA. Result: generic, ineffective, frustrating responses.",
        },
        bullets: [
          { es: "Agentes sin contexto = respuestas genéricas", en: "Contextless agents = generic responses" },
          { es: "No saben nivel de SLA, historial de compras, preferencias", en: "Don't know SLA level, purchase history, preferences" },
          { es: "No detectan patrones: mismo cliente, problemas similares, sin learning", en: "No pattern detection: same customer, recurring issues, no learning" },
          { es: "Clientes frustrados: 'Ya te lo conté hace 3 meses'", en: "Frustrated customers: 'I already told you 3 months ago'" },
        ],
      },
      {
        id: "solution",
        heading: { es: "OpenMemory: Arquitectura de Contexto", en: "OpenMemory: Context Architecture" },
        body: {
          es: "Construimos OpenMemory: una capa de persistencia de contexto que vive entre el cliente y el agente. Almacena: interacciones previas (completas), preferencias aprendidas, SLA del cliente, historial de problemas, soluciones que funcionaron. Cuando un cliente interactúa, OpenMemory recupera su contexto completo y lo inyecta en el prompt del agente. Resultado: agentes que 'recuerdan' y adaptan respuestas.",
          en: "We built OpenMemory: a context persistence layer living between client and agent. Stores: previous interactions (complete), learned preferences, customer SLA, problem history, solutions that worked. When customer interacts, OpenMemory retrieves full context and injects it into agent prompt. Result: agents that 'remember' and adapt.",
        },
        bullets: [
          { es: "Vector DB (Pinecone/Weaviate) indexa todas las interacciones", en: "Vector DB (Pinecone/Weaviate) indexes all interactions" },
          { es: "Embedding semántico: agrupa problemas similares automáticamente", en: "Semantic embedding: auto-groups similar problems" },
          { es: "Graph DB: conecta clientes → problemas → soluciones", en: "Graph DB: connects customers → problems → solutions" },
          { es: "Inyección de contexto: Top-K interacciones relevantes en el prompt", en: "Context injection: Top-K relevant interactions into prompt" },
          { es: "Learning: cada solución positiva fortalece la conexión en el graph", en: "Learning: each positive resolution strengthens graph connection" },
          { es: "Privacy & compliance: segregación de datos por customer/SLA", en: "Privacy & compliance: data segmentation by customer/SLA" },
        ],
      },
      {
        id: "impact",
        heading: { es: "Impacto Medible", en: "Measurable Impact" },
        body: {
          es: "+85% en efectividad del agente (primeras contacto se resuelven sin escalada). -60% tiempo de resolución (contexto = menos preguntas). +45% satisfacción del cliente ('me recuerdan'). Agentes inteligentes, no genéricos.",
          en: "+85% agent effectiveness (first-contact resolution rate up). -60% resolution time (context = fewer questions). +45% customer satisfaction ('they remember me'). Smart agents, not generic.",
        },
      },
    ],
    stackLine: {
      es: "Vector DB + Graph DB + Semantic Search → Context Injection → Agent Prompt → 100% Contexto Persistente",
      en: "Vector DB + Graph DB + Semantic Search → Context Injection → Agent Prompt → 100% Persistent Context",
    },
    techLogos: [],
  },
  {
    slug: "end-to-end-ml-recommendations",
    clientName: { es: "Plataforma de E-commerce Chilena", en: "Chilean E-commerce Platform" },
    verticalTag: { es: "Retail + ML Recomendaciones", en: "Retail + ML Recommendations" },
    title: { es: "Sistema de recomendaciones ML end-to-end", en: "End-to-end ML Recommendation System" },
    summary: {
      es: "Retailista chileno con 50K+ SKUs y sin recomendaciones personalizadas. Clientes veían el mismo catálogo. Conversión baja, AOV bajo, churn alto. Necesitaban ML que aprendiese: qué compran, qué buscan, qué viene después.",
      en: "Chilean retailer with 50K+ SKUs and zero personalization. Every customer saw the same catalog. Low conversion, low AOV, high churn. Needed ML learning: what they buy, what they search, what comes next.",
    },
    industry: { es: "E-commerce", en: "E-commerce" },
    implementation: { es: "60 días (datos → modelo → producción)", en: "60 days (data → model → production)" },
    status: { es: "+25% conversión en 30 días", en: "+25% conversion in 30 days" },
    highlights: [
      { label: { es: "Conversión mejora", en: "Conversion lift" }, value: { es: "+25%", en: "+25%" } },
      { label: { es: "AOV mejora", en: "AOV lift" }, value: { es: "+18%", en: "+18%" } },
      { label: { es: "Latencia recomendación", en: "Recommendation latency" }, value: { es: "<200ms", en: "<200ms" } },
      { label: { es: "Churn reducido", en: "Churn reduced" }, value: { es: "-12%", en: "-12%" } },
    ],
    sections: [
      {
        id: "challenge",
        heading: { es: "El Problema de Relevancia", en: "The Relevance Problem" },
        body: {
          es: "50K+ productos, un catálogo estático. Cliente A busca 'zapatillas running' y ve lo mismo que Cliente B. Sin recomendaciones: conversión 2-3%, AOV bajo, clientes no retornan. Sin personalización no hay engagement.",
          en: "50K+ products, static catalog. Customer A searches 'running shoes' sees same as Customer B. No recommendations: 2-3% conversion, low AOV, no repeat purchases. Without personalization, no engagement.",
        },
        bullets: [
          { es: "Conversión baja: 2-3% (industria promedio: 3-5%)", en: "Low conversion: 2-3% (industry avg: 3-5%)" },
          { es: "AOV bajo: clientes compran 1-2 items, no cross-sell", en: "Low AOV: customers buy 1-2 items, no cross-sell" },
          { es: "Churn: 70% de usuarios no retornan", en: "High churn: 70% of users don't return" },
          { es: "Catálogo subutilizado: 40% de SKUs sin clicks", en: "Unused inventory: 40% of SKUs get zero traffic" },
        ],
      },
      {
        id: "solution",
        heading: { es: "ML End-to-End", en: "End-to-End ML" },
        body: {
          es: "Construimos pipeline completo: (1) ETL de datos históricos (navegación, búsquedas, compras, devueltas), (2) feature engineering (user demographics, product properties, temporal patterns), (3) entrenamiento de 3 modelos en paralelo: content-based (atributos producto), collaborative filtering (comportamiento similar), session-based RNN (qué viene después), (4) ensemble que combina los 3 con contexto en tiempo real, (5) deployment en API con latencia <200ms y feedback loop para mejora continua.",
          en: "We built complete pipeline: (1) ETL of historical data (browsing, searches, purchases, returns), (2) feature engineering (user demographics, product properties, temporal patterns), (3) train 3 models in parallel: content-based (product attributes), collaborative filtering (similar behavior), session-based RNN (what's next), (4) ensemble combining all 3 with real-time context, (5) deploy API with <200ms latency and feedback loop for continuous improvement.",
        },
        bullets: [
          { es: "Content-based: 'si compraste zapatillas running, te interesa este modelo'", en: "Content-based: 'if you bought running shoes, you'll like this model'" },
          { es: "Collaborative: 'usuarios como vos compraron esto después'", en: "Collaborative: 'users like you bought this next'" },
          { es: "Session-based RNN: contexto dinámico, captura el 'por qué compro ahora'", en: "Session-based RNN: dynamic context, captures 'why buying now'" },
          { es: "Ensemble: vota con pesos (70% session, 20% collaborative, 10% content)", en: "Ensemble: weighted voting (70% session, 20% collaborative, 10% content)" },
          { es: "Feedback: cada click, compra, retorno → reentrenamiento semanal", en: "Feedback: every click, purchase, return → weekly retraining" },
          { es: "A/B testing: nuevos modelos vs baseline antes de producción", en: "A/B testing: new models vs baseline before prod" },
        ],
      },
      {
        id: "impact",
        heading: { es: "Resultados en Producción", en: "Production Results" },
        body: {
          es: "+25% conversión en 30 días (2.8% → 3.5%). +18% AOV (promedio carrito $35 → $41). -12% churn. Catálogo: 85% de SKUs ahora reciben tráfico. Retorno de inversión: 4 meses.",
          en: "+25% conversion in 30 days (2.8% → 3.5%). +18% AOV (avg cart $35 → $41). -12% churn. Catalog: 85% of SKUs now get traffic. ROI: 4 months.",
        },
      },
    ],
    stackLine: {
      es: "Datos históricos → Feature Engineering → Content-Based + Collab Filtering + Session RNN → Ensemble → API <200ms → Feedback Loop",
      en: "Historical data → Feature Engineering → Content-Based + Collab Filtering + Session RNN → Ensemble → API <200ms → Feedback Loop",
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
