export type Locale = "es" | "en";

export interface Dict {
  nav: {
    platform: string;
    agentic: string;
    infra: string;
    agentMatrix: string;
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
    hero: {
      badge: string;
      h1_1: string;
      h1_2: string;
      description: string;
      startToday: string;
      viewCapabilities: string;
      stats: {
        processes: string;
        industries: string;
        operation: string;
      };
    };
    whatWeDo: {
      title: string;
      description: string;
      orchestration: { title: string; desc: string };
      evolving: { title: string; desc: string };
      integration: { title: string; desc: string };
      fourPillars: {
        title: string;
        description: string;
        engineering: { title: string; desc: string };
        aiSystems: { title: string; desc: string };
        automation: { title: string; desc: string };
        infrastructure: { title: string; desc: string };
      };
    };
    solutions: {
      title: string;
      description: string;
    };
    clients: {
      title: string;
      description: string;
      ecosuelolab: { title: string; desc: string };
      despega: { title: string; desc: string };
      blackswan: { title: string; desc: string };
      viewAll: string;
    };
    cta: {
      title: string;
      subtitle: string;
    };
  };
  about: {
    philosophy: Array<{ title: string; desc: string }>;
  };
}

const DICTS: Record<Locale, Dict> = {
  es: {
    nav: {
      platform: "Plataforma",
      agentic: "Sistemas Agénticos",
      infra: "Infraestructura IA",
      agentMatrix: "Matriz de Agentes",
      playbooks: "Playbooks",
      caseStudies: "Casos de Éxito",
      labs: "Labs",
      nodes: "Nodos",
      patterns: "Patrones",
      security: "Seguridad",
      contact: "Contacto",
    },
    cta: {
      requestReview: "Solicitar Revisión de Arquitectura",
      bookCall: "Agendar Llamada Técnica",
      viewCaseStudies: "Ver Casos de Éxito",
    },
    home: {
      h1: "Sistemas Agénticos en Producción",
      sub: "Orquestación de sistemas agénticos que se integra, escala y evoluciona. Tu operación con inteligencia aumentada, lista para producción desde el día uno.",
      trust: "Ingeniería de IA para operaciones reales. Sistemas autónomos con gobernanza, observabilidad y confiabilidad.",
      hero: {
        badge: "Sistemas Agénticos en Producción",
        h1_1: "De la Experimentación",
        h1_2: "a la Automatización Empresarial",
        description: "Orquestación de sistemas agénticos que se integra, escala y evoluciona. Tu operación con inteligencia aumentada, lista para producción desde el día uno.",
        startToday: "Comenzar Hoy",
        viewCapabilities: "Ver Capacidades",
        stats: {
          processes: "Procesos Automatizados",
          industries: "Industrias Atendidas",
          operation: "Operación Continua",
        },
      },
      whatWeDo: {
        title: "¿Qué es N3uralia?",
        description: "Construimos la arquitectura que falta. Un orquestador central que coordina agentes especializados, integra tus sistemas existentes y evoluciona con tu negocio.",
        orchestration: {
          title: "Orquestación",
          desc: "Coordina múltiples agentes y sistemas en un solo flujo inteligente",
        },
        evolving: {
          title: "Agentes Evolucionan",
          desc: "Aprenden de cada interacción y mejoran automáticamente con el tiempo",
        },
        integration: {
          title: "Integración Total",
          desc: "Se adapta a tu stack existente sin disrupciones. Zero rewrite.",
        },
        fourPillars: {
          title: "Cuatro Pilares",
          description: "La arquitectura completa que lleva IA a producción real",
          engineering: {
            title: "Ingeniería",
            desc: "Sistemas predecibles, rastreables, gobernados. Cada decisión es auditable.",
          },
          aiSystems: {
            title: "Sistemas IA",
            desc: "Agentes autónomos con control en tiempo real, permisos y trazabilidad completa.",
          },
          automation: {
            title: "Automatización",
            desc: "Procesos end-to-end que escalan sin fricción. Costo controlado, latencia optimizada.",
          },
          infrastructure: {
            title: "Infraestructura",
            desc: "RAG y pipelines listos para producción. Seguridad, observabilidad, evolución continua.",
          },
        },
      },
      solutions: {
        title: "Nuestras Soluciones",
        description: "Explora nuestras soluciones completas para sistemas agénticos empresariales",
      },
      clients: {
        title: "Clientes Confiables",
        description: "Empresas líderes que transforman sus operaciones con N3uralia",
        ecosuelolab: {
          title: "Ecosuelolab",
          desc: "Automatización de análisis de suelos con sistemas agénticos avanzados",
        },
        despega: {
          title: "Despega Tu Carrera",
          desc: "Plataforma de formación con agentes inteligentes de coaching",
        },
        blackswan: {
          title: "Blackswan Facility Core",
          desc: "Gestión predictiva de instalaciones con orquestación de agentes",
        },
        viewAll: "Ver Todos los Casos",
      },
      cta: {
        title: "Transformar Tu Operación",
        subtitle: "Sistemas agénticos listos para escalar. Inteligencia aumentada sin complejidad. Integración sin fricción.",
      },
    },
    about: {
      philosophy: [
        {
          title: "La IA es una capa",
          desc: "No es el sistema completo. Vive dentro de una arquitectura más grande de gobernanza, seguridad e integración.",
        },
        {
          title: "Ingeniería primero",
          desc: "Antes de la magia, está el rigor. Sistemas predecibles, rastreables, auditables.",
        },
        {
          title: "Producción desde el día uno",
          desc: "No es un experimento. Es un sistema empresarial que escala, se integra y evoluciona.",
        },
        {
          title: "Control en tiempo real",
          desc: "No confíes ciegamente. Observa, controla y ajusta cada decisión de IA.",
        },
        {
          title: "Tu tecnología, nuestras agentes",
          desc: "Se adapta a tu stack existente. Cero reescrituras. Máxima flexibilidad.",
        },
      ],
    },
  },
  en: {
    nav: {
      platform: "Platform",
      agentic: "Agentic Systems",
      infra: "AI Infrastructure",
      agentMatrix: "Agent Matrix",
      playbooks: "Playbooks",
      caseStudies: "Case Studies",
      labs: "Labs",
      nodes: "Nodes",
      patterns: "Patterns",
      security: "Security",
      contact: "Contact",
    },
    cta: {
      requestReview: "Request Architecture Review",
      bookCall: "Schedule Technical Call",
      viewCaseStudies: "View Case Studies",
    },
    home: {
      h1: "Agentic Systems in Production",
      sub: "Agentic system orchestration that integrates, scales, and evolves. Your operation with augmented intelligence, production-ready from day one.",
      trust: "AI engineering for real operations. Autonomous systems with governance, observability, and reliability.",
      hero: {
        badge: "Agentic Systems in Production",
        h1_1: "From Experimentation",
        h1_2: "to Enterprise Automation",
        description: "Agentic system orchestration that integrates, scales, and evolves. Your operation with augmented intelligence, production-ready from day one.",
        startToday: "Start Today",
        viewCapabilities: "View Capabilities",
        stats: {
          processes: "Automated Processes",
          industries: "Industries Served",
          operation: "Continuous Operation",
        },
      },
      whatWeDo: {
        title: "What is N3uralia?",
        description: "We build the missing architecture. A central orchestrator that coordinates specialized agents, integrates your existing systems, and evolves with your business.",
        orchestration: {
          title: "Orchestration",
          desc: "Coordinates multiple agents and systems in a single intelligent flow",
        },
        evolving: {
          title: "Agents Evolve",
          desc: "Learn from every interaction and improve automatically over time",
        },
        integration: {
          title: "Total Integration",
          desc: "Adapts to your existing stack without disruption. Zero rewrite.",
        },
        fourPillars: {
          title: "Four Pillars",
          description: "The complete architecture that brings AI to real production",
          engineering: {
            title: "Engineering",
            desc: "Predictable, traceable, governed systems. Every decision is auditable.",
          },
          aiSystems: {
            title: "AI Systems",
            desc: "Autonomous agents with real-time control, permissions, and complete traceability.",
          },
          automation: {
            title: "Automation",
            desc: "End-to-end processes that scale without friction. Controlled cost, optimized latency.",
          },
          infrastructure: {
            title: "Infrastructure",
            desc: "Production-ready RAG and pipelines. Security, observability, continuous evolution.",
          },
        },
      },
      solutions: {
        title: "Our Solutions",
        description: "Explore our complete solutions for enterprise agentic systems",
      },
      clients: {
        title: "Trusted Clients",
        description: "Leading enterprises transforming their operations with N3uralia",
        ecosuelolab: {
          title: "Ecosuelolab",
          desc: "Soil analysis automation with advanced agentic systems",
        },
        despega: {
          title: "Despega Tu Carrera",
          desc: "Learning platform with intelligent coaching agents",
        },
        blackswan: {
          title: "Blackswan Facility Core",
          desc: "Predictive facilities management with agent orchestration",
        },
        viewAll: "View All Case Studies",
      },
      cta: {
        title: "Transform Your Operation",
        subtitle: "Agentic systems ready to scale. Augmented intelligence without complexity. Integration without friction.",
      },
    },
    about: {
      philosophy: [
        {
          title: "AI is a layer",
          desc: "Not the whole system. It lives within a larger architecture of governance, security, and integration.",
        },
        {
          title: "Engineering first",
          desc: "Before the magic, there's rigor. Predictable, traceable, auditable systems.",
        },
        {
          title: "Production from day one",
          desc: "Not an experiment. An enterprise system that scales, integrates, and evolves.",
        },
        {
          title: "Real-time control",
          desc: "Don't trust blindly. Observe, control, and adjust every AI decision.",
        },
        {
          title: "Your technology, our agents",
          desc: "Adapts to your existing stack. Zero rewrites. Maximum flexibility.",
        },
      ],
    },
  },
};

export function getDict(locale: Locale) {
  return DICTS[locale];
}
