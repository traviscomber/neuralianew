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
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    positioning: {
      title: string;
      description: string;
    };
    whatWeDo: {
      title: string;
      subtitle: string;
      engineering: { title: string; desc: string };
      aiSystems: { title: string; desc: string };
      automation: { title: string; desc: string };
      infrastructure: { title: string; desc: string };
    };
    howWeThink: {
      title: string;
      description: string;
      insight: string;
    };
    architecture: {
      title: string;
      subtitle: string;
      items: string[];
    };
    differentiator: {
      title: string;
      statement1: string;
      statement2: string;
    };
    forWho: {
      title: string;
      description: string;
    };
    closing: {
      title: string;
      ctaText: string;
    };
    clients: {
      title: string;
      description: string;
      viewAll: string;
      ecosuelolab: { title: string; desc: string };
      despega: { title: string; desc: string };
      blackswan: { title: string; desc: string };
    };
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
      hero: {
        badge: "Infraestructura IA para Operación Real",
        title: "Sistemas full-stack con IA para operación real",
        subtitle: "No hacemos demos aisladas ni copilots sueltos. Diseñamos, integramos y desplegamos infraestructura de software e inteligencia artificial lista para producción: frontend, backend, workflows, datos, memoria, automatización, integraciones y agentes especializados dentro de una arquitectura gobernable.",
        ctaPrimary: "Explorar capacidades",
        ctaSecondary: "Ver casos de éxito",
      },
      positioning: {
        title: "Más que agentes. Más que automatización. Más que software.",
        description: "N3uralia une ingeniería full-stack, sistemas de IA, integración de datos y automatización operativa para transformar complejidad en ejecución real.",
      },
      whatWeDo: {
        title: "Construimos sistemas, no piezas sueltas",
        subtitle: "Cada proyecto integra estas cuatro capas de excelencia:",
        engineering: {
          title: "Ingeniería de producto y plataforma",
          desc: "Frontend, backend, APIs, dashboards, portales, autenticación, bases de datos y arquitectura cloud.",
        },
        aiSystems: {
          title: "Sistemas de ejecución con IA",
          desc: "RAG, memoria, recuperación de conocimiento, agentes especializados, clasificación, análisis y ejecución sobre flujos reales.",
        },
        automation: {
          title: "Automatización e integración",
          desc: "Conectamos CRMs, CMS, bases de datos, Slack, GitHub, WhatsApp, ERPs, herramientas internas y APIs externas sin romper el stack existente.",
        },
        infrastructure: {
          title: "Infraestructura de producción",
          desc: "Observabilidad, permisos, trazabilidad, validación humana, despliegue continuo, seguridad y escalabilidad empresarial.",
        },
      },
      howWeThink: {
        title: "Cómo pensamos",
        description: "La IA es una capa dentro de un sistema más grande",
        insight: "En N3uralia, los agentes no son el producto completo. Son una capa de ejecución dentro de una arquitectura más amplia que incluye software, datos, contexto, integraciones, reglas, monitoreo y gobernanza. Ese es el cambio clave: pasar de herramientas aisladas a infraestructura operativa inteligente.",
      },
      architecture: {
        title: "Arquitectura lista para producción",
        subtitle: "Cada sistema incluye:",
        items: [
          "Interfaces y experiencias digitales",
          "Backend y lógica de negocio",
          "Bases de datos y estado compartido",
          "RAG, memoria y contexto persistente",
          "Automatización y workflows de múltiples pasos",
          "Agentes especializados cuando corresponde",
          "Integraciones con herramientas reales",
          "Puntos de control humanos para decisiones críticas",
          "Observabilidad y mejora continua",
        ],
      },
      differentiator: {
        title: "De la experimentación a la ejecución",
        statement1: "Muchas compañías prueban IA. Pocas la convierten en sistemas que realmente operan.",
        statement2: "N3uralia trabaja en esa capa: la capa donde la IA deja de ser una promesa y se convierte en infraestructura útil, medible y desplegable.",
      },
      forWho: {
        title: "Para organizaciones que necesitan más que un chatbot",
        description: "Trabajamos con empresas, equipos y operaciones que necesitan automatizar procesos complejos, conectar conocimiento interno con ejecución, integrar IA a sistemas existentes, reducir fricción operativa y desplegar soluciones reales con trazabilidad.",
      },
      closing: {
        title: "Construyamos un sistema que trabaje de verdad",
        ctaText: "Hablemos de tu sistema",
      },
      clients: {
        title: "Empresas que Confían en N3uralia",
        description: "Transformación real en operaciones complejas",
        viewAll: "Ver Todos los Casos de Éxito",
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
      hero: {
        badge: "AI Infrastructure for Real Operations",
        title: "Full-stack systems with AI for real operations",
        subtitle: "We don't create isolated demos or loose copilots. We design, integrate, and deploy software infrastructure and artificial intelligence ready for production: frontend, backend, workflows, data, memory, automation, integrations, and specialized agents within a governable architecture.",
        ctaPrimary: "Explore capabilities",
        ctaSecondary: "View case studies",
      },
      positioning: {
        title: "More than agents. More than automation. More than software.",
        description: "N3uralia combines full-stack engineering, AI systems, data integration, and operational automation to transform complexity into real execution.",
      },
      whatWeDo: {
        title: "We build systems, not pieces",
        subtitle: "Every project integrates these four layers of excellence:",
        engineering: {
          title: "Product and platform engineering",
          desc: "Frontend, backend, APIs, dashboards, portals, authentication, databases, and cloud architecture.",
        },
        aiSystems: {
          title: "AI execution systems",
          desc: "RAG, memory, knowledge retrieval, specialized agents, classification, analysis, and execution over real flows.",
        },
        automation: {
          title: "Automation and integration",
          desc: "We connect CRMs, CMS, databases, Slack, GitHub, WhatsApp, ERPs, internal tools, and external APIs without breaking your existing stack.",
        },
        infrastructure: {
          title: "Production infrastructure",
          desc: "Observability, permissions, traceability, human validation, continuous deployment, security, and enterprise scalability.",
        },
      },
      howWeThink: {
        title: "How we think",
        description: "AI is a layer within a larger system",
        insight: "At N3uralia, agents are not the complete product. They are an execution layer within a broader architecture that includes software, data, context, integrations, rules, monitoring, and governance. That's the key shift: from isolated tools to intelligent operational infrastructure.",
      },
      architecture: {
        title: "Production-ready architecture",
        subtitle: "Every system includes:",
        items: [
          "Digital interfaces and experiences",
          "Backend and business logic",
          "Databases and shared state",
          "RAG, memory, and persistent context",
          "Multi-step automation and workflows",
          "Specialized agents when it matters",
          "Integrations with real tools",
          "Human checkpoints for critical decisions",
          "Observability and continuous improvement",
        ],
      },
      differentiator: {
        title: "From experimentation to execution",
        statement1: "Many companies experiment with AI. Few turn it into systems that actually operate.",
        statement2: "N3uralia works on that layer: where AI stops being a promise and becomes useful, measurable, deployable infrastructure.",
      },
      forWho: {
        title: "For organizations that need more than a chatbot",
        description: "We work with enterprises, teams, and operations that need to automate complex processes, connect internal knowledge with execution, integrate AI into existing systems, reduce operational friction, and deploy real solutions with traceability.",
      },
      closing: {
        title: "Let's build a system that actually works",
        ctaText: "Let's talk about your system",
      },
      clients: {
        title: "Companies that Trust N3uralia",
        description: "Real transformation in complex operations",
        viewAll: "View All Case Studies",
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
      },
    },
  },
};

export function getDict(locale: Locale): Dict {
  return DICTS[locale] || DICTS.es
}
