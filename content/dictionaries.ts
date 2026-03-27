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
  home: {
    whatWeDo: {
      title: string;
      description: string;
      orchestration: { title: string; desc: string };
      evolving: { title: string; desc: string };
      integration: { title: string; desc: string };
    };
    solutions: { title: string; description: string };
    clients: {
      title: string;
      description: string;
      ecosuelolab: { title: string; desc: string };
      despega: { title: string; desc: string };
      blackswan: { title: string; desc: string };
      viewAll: string;
    };
    cta: { title: string; subtitle: string };
  };
}

const DICTS: Record<Locale, Dict> = {
  es: {
    nav: {
      platform: "Plataforma",
      agentic: "Sistemas Agénticos",
      infra: "Infraestructura IA",
      agentMatrix: "Agent Matrix",
      playbooks: "Playbooks",
      caseStudies: "Casos de Éxito",
      labs: "Labs",
      nodes: "Nodes",
      patterns: "Patterns",
      security: "Seguridad",
      contact: "Contacto",
    },
    home: {
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
    home: {
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
  },
};

export function getDict(locale: Locale) {
  return DICTS[locale];
}
