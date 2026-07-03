export type Locale = "es" | "en";

export type Dict = {
  nav: {
    platform: string;
    agentic: string;
    infra: string;
    playbooks: string;
    caseStudies: string;
    labs: string;
    nodes: string;
    patterns: string;
    security: string;
    contact: string;
  };
  cta: {
    requestReview: string;
    bookCall: string;
    viewCaseStudies: string;
  };
  home: {
    h1: string;
    sub: string;
    trust: string;
    architecture: {
      title: string;
      subtitle: string;
      items: string[];
    };
    closing: {
      title: string;
      subtitle: string;
      ctaText: string;
      microcopy: string;
    };
    faq: {
      title: string;
      subtitle: string;
      items: { q: string; a: string }[];
    };
  };
  pillars: {
    platformTitle: string;
    platformDesc: string;
    agenticTitle: string;
    agenticDesc: string;
    infraTitle: string;
    infraDesc: string;
  };
  outcomes: {
    title: string;
    subtitle: string;
  };
  caseStudies: {
    title: string;
    subtitle: string;
    back: string;
    industry: string;
    status: string;
    implementation: string;
    scope: string;
  };
  agenticEngineering: {
    headline: string;
    subheadline: string;
    humanInLoop: { title: string; description: string };
    toolAware: { title: string; description: string };
    vendorAgnostic: { title: string; description: string };
    builtToShip: { title: string; description: string };
    manifesto: string[];
    cta: string;
  };
};

const DICTS: Record<Locale, Dict> = {
  es: {
    nav: {
      platform: "Plataforma",
      agentic: "Sistemas Agénticos",
      infra: "Infraestructura IA",
      playbooks: "Playbooks",
      caseStudies: "Casos de Éxito",
      labs: "Labs",
      nodes: "Nodes",
      patterns: "Patterns",
      security: "Seguridad",
      contact: "Contacto",
    },
    cta: {
      requestReview: "Solicitar revisión de arquitectura",
      bookCall: "Agendar llamada técnica",
      viewCaseStudies: "Ver casos de éxito",
    },
    home: {
      h1: "Sistemas Agénticos en Producción",
      sub: "Orquestación de sistemas agénticos que integran, escalan y evolucionan. Tu operación con inteligencia aumentada, lista para producción desde el día uno.",
      trust: "Ingeniería de IA para operaciones reales. Sistemas autónomos con gobernanza, observabilidad y fiabilidad.",
      architecture: {
        title: "Arquitectura para Producción",
        subtitle: "Cada sistema que construimos está diseñado para operar, no solo demostrar.",
        items: [
          "Observabilidad completa desde el día uno",
          "Rollback y recuperación automatizados",
          "Pruebas de carga e integración continua",
          "Gobernanza de modelos y versionado",
          "Seguridad y cumplimiento incorporados",
          "Escalado horizontal sin rediseño",
        ],
      },
      closing: {
        title: "Listo para operar el día uno.",
        subtitle: "No experimentos. No pilotos eternos. Sistemas agénticos que funcionan en tu operación real.",
        ctaText: "Agendar llamada técnica",
        microcopy: "Sin compromiso. 30 minutos. Arquitectura real.",
      },
      faq: {
        title: "Preguntas frecuentes",
        subtitle: "Lo que necesitas saber antes de empezar.",
        items: [
          { q: "¿Cuánto tiempo toma implementar un sistema agéntico?", a: "Entre 6 y 12 semanas dependiendo del alcance. Comenzamos con un diagnóstico de 2 semanas y un piloto de 4 semanas antes de escalar." },
          { q: "¿Necesito reemplazar mi stack tecnológico actual?", a: "No. Construimos sobre lo que tienes. Nuestros sistemas se integran con tu stack existente sin disrupciones." },
          { q: "¿Cómo manejan la seguridad y privacidad de datos?", a: "Cumplimiento SOC 2 Type II, cifrado en tránsito y reposo, y opciones de despliegue on-premise o VPC privada." },
          { q: "¿Qué pasa si el sistema falla?", a: "Observabilidad completa, alertas automáticas, rollback en un clic y SLA de 99.9% de uptime." },
        ],
      },
    },
    pillars: {
      platformTitle: "Plataforma",
      platformDesc: "Construimos la arquitectura que falta: un orquestador central que coordina agentes especializados e integra tu stack existente sin disrupciones.",
      agenticTitle: "Sistemas Agénticos",
      agenticDesc: "Automatización gobernable: human-in-the-loop, permisos, trazabilidad, evaluaciones y control en producción.",
      infraTitle: "Infraestructura IA",
      infraDesc: "RAG y pipelines listos para producción: seguridad, latencia, costo, observabilidad y mejora continua.",
    },
    outcomes: {
      title: "Resultados",
      subtitle: "Estas no son promesas. Son historias reales de empresas que confiaron en N3uralia.",
    },
    caseStudies: {
      title: "Casos de Éxito",
      subtitle: "Implementaciones reales con arquitectura, operación y resultados medibles.",
      back: "← Volver a Casos de Éxito",
      industry: "Industria",
      status: "Estado",
      implementation: "Implementación",
      scope: "Scope",
    },
    agenticEngineering: {
      headline: "Ingeniería Agéntica, No Solo Automatización",
      subheadline: "Construimos sistemas que piensan, actúan y mejoran. Agentes con gobernanza real, no scripts glorificados.",
      humanInLoop: { title: "Humano en el Bucle", description: "Control real en cada decisión crítica. Los agentes proponen, los humanos aprueban." },
      toolAware: { title: "Consciente de Herramientas", description: "Integración nativa con tus herramientas existentes. Sin fricciones, sin reemplazos forzados." },
      vendorAgnostic: { title: "Sin Lock-in de Proveedor", description: "Arquitectura abierta. Cambia de modelo, proveedor o stack sin reescribir todo." },
      builtToShip: { title: "Listo para Producción", description: "Observabilidad, pruebas, rollback y monitoreo desde el día uno." },
      manifesto: [
        "Los agentes deben ser auditables, no cajas negras.",
        "La automatización sin control es un riesgo operacional.",
        "El mejor sistema es el que tu equipo puede mantener.",
        "Producción primero, prototipo después.",
      ],
      cta: "Explorar Sistemas Agénticos",
    },
  },
  en: {
    nav: {
      platform: "Platform",
      agentic: "Agentic Systems",
      infra: "AI Infrastructure",
      playbooks: "Playbooks",
      caseStudies: "Case Studies",
      labs: "Labs",
      nodes: "Nodes",
      patterns: "Patterns",
      security: "Security",
      contact: "Contact",
    },
    cta: {
      requestReview: "Request architecture review",
      bookCall: "Book technical call",
      viewCaseStudies: "View case studies",
    },
    home: {
      h1: "Production Agentic Systems",
      sub: "We orchestrate agentic systems that integrate, scale, and evolve. Augmented intelligence for real operations — production-ready from day one.",
      trust: "AI engineering for real operations. Governed autonomy with observability and reliability.",
      architecture: {
        title: "Architecture for Production",
        subtitle: "Every system we build is designed to operate, not just demonstrate.",
        items: [
          "Full observability from day one",
          "Automated rollback and recovery",
          "Load testing and continuous integration",
          "Model governance and versioning",
          "Security and compliance built-in",
          "Horizontal scaling without redesign",
        ],
      },
      closing: {
        title: "Ready to operate on day one.",
        subtitle: "No experiments. No endless pilots. Agentic systems that work in your real operation.",
        ctaText: "Book a technical call",
        microcopy: "No commitment. 30 minutes. Real architecture.",
      },
      faq: {
        title: "Frequently asked questions",
        subtitle: "What you need to know before getting started.",
        items: [
          { q: "How long does it take to implement an agentic system?", a: "Between 6 and 12 weeks depending on scope. We start with a 2-week diagnostic and a 4-week pilot before scaling." },
          { q: "Do I need to replace my current tech stack?", a: "No. We build on what you have. Our systems integrate with your existing stack without disruption." },
          { q: "How do you handle security and data privacy?", a: "SOC 2 Type II compliance, encryption in transit and at rest, and on-premise or private VPC deployment options." },
          { q: "What happens if the system fails?", a: "Full observability, automatic alerts, one-click rollback, and a 99.9% uptime SLA." },
        ],
      },
    },
    pillars: {
      platformTitle: "Platform",
      platformDesc: "We build the missing architecture: a central orchestrator coordinating specialized agents and integrating your existing stack without disruption.",
      agenticTitle: "Agentic Systems",
      agenticDesc: "Governed automation: human-in-the-loop, permissions, traceability, evaluations, and production control.",
      infraTitle: "AI Infrastructure",
      infraDesc: "Production RAG and pipelines: security, latency, cost control, observability, and continuous improvement.",
    },
    outcomes: {
      title: "Outcomes",
      subtitle: "Not promises — real stories from teams shipping with N3uralia.",
    },
    caseStudies: {
      title: "Case Studies",
      subtitle: "Real deployments with architecture, operations, and measurable outcomes.",
      back: "← Back to Case Studies",
      industry: "Industry",
      status: "Status",
      implementation: "Implementation",
      scope: "Scope",
    },
    agenticEngineering: {
      headline: "Agentic Engineering, Not Just Automation",
      subheadline: "We build systems that think, act, and improve. Agents with real governance, not glorified scripts.",
      humanInLoop: { title: "Human in the Loop", description: "Real control at every critical decision. Agents propose, humans approve." },
      toolAware: { title: "Tool-Aware", description: "Native integration with your existing tools. No friction, no forced replacements." },
      vendorAgnostic: { title: "Vendor Agnostic", description: "Open architecture. Change model, provider, or stack without rewriting everything." },
      builtToShip: { title: "Built to Ship", description: "Observability, testing, rollback, and monitoring from day one." },
      manifesto: [
        "Agents must be auditable, not black boxes.",
        "Automation without control is operational risk.",
        "The best system is one your team can maintain.",
        "Production first, prototype second.",
      ],
      cta: "Explore Agentic Systems",
    },
  },
};

export function getDict(locale: Locale) {
  return DICTS[locale];
}
