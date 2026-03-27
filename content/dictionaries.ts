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
        badge: "Sistemas de IA que funcionan en la realidad",
        title: "IA y software que transforma tu operación",
        subtitle: "Olvidemos de demos aisladas. Construimos sistemas completos: desde la interfaz que usa tu equipo hasta la inteligencia que ejecuta tareas reales, todo integrado en tu empresa, seguro y escalable.",
        ctaPrimary: "Explorar",
        ctaSecondary: "Ver casos reales",
      },
      positioning: {
        title: "No es solo un chatbot. Es tu infraestructura.",
        description: "Diseñamos, integramos y desplegamos sistemas inteligentes que automatizan procesos, conectan datos, toman decisiones y mejoran continuamente.",
      },
      whatWeDo: {
        title: "Lo que construimos",
        subtitle: "Cuatro capas que funcionan juntas:",
        engineering: {
          title: "Interfaz y Backend",
          desc: "Las plataformas, dashboards y APIs que usa tu equipo cada día.",
        },
        aiSystems: {
          title: "Inteligencia Operativa",
          desc: "Agentes que entienden tu contexto, recuperan información correcta y ejecutan acciones precisas.",
        },
        automation: {
          title: "Conexiones Reales",
          desc: "Tu CRM, tu base de datos, Slack, WhatsApp, tus sistemas internos... todo conectado sin interrupciones.",
        },
        infrastructure: {
          title: "Confiabilidad",
          desc: "Seguridad, registro de auditoría, puntos de control manual y mejora continua basada en datos.",
        },
      },
      howWeThink: {
        title: "Nuestro enfoque",
        description: "La IA no es el producto. Es una herramienta dentro de un sistema más grande.",
        insight: "Muchos venden agentes aislados. Nosotros construimos infraestructura operativa. Eso significa que cada sistema tiene interfaces que funcionan, datos organizados, procesos que se monitorean y decisiones que se pueden auditar.",
      },
      architecture: {
        title: "Un sistema listo para usar",
        subtitle: "Cada proyecto incluye:",
        items: [
          "Interfaces y dashboards para tu equipo",
          "Backend y lógica de negocio sólida",
          "Bases de datos bien estructuradas",
          "Acceso a tu información interna cuando es necesaria",
          "Procesos automatizados de múltiples pasos",
          "Agentes inteligentes especializados",
          "Integraciones con herramientas que ya usas",
          "Puntos de control donde necesitas decisiones humanas",
          "Monitoreo continuo y mejora automática",
        ],
      },
      differentiator: {
        title: "De la experimentación a la realidad",
        statement1: "Muchas empresas prueban IA. Pocas la convierten en sistemas que realmente funcionan en su negocio.",
        statement2: "N3uralia trabaja en esa capa. Donde la IA deja de ser una promesa y se convierte en herramienta útil que produce resultados medibles cada día.",
      },
      forWho: {
        title: "Para empresas que necesitan resultados reales",
        description: "Trabajamos con organizaciones que quieren automatizar procesos complejos, usar su información interna de manera inteligente, integrar IA a sus sistemas actuales sin interrupciones, y desplegar soluciones que se pueden auditar y mejorar.",
      },
      closing: {
        title: "Hablemos sobre tu sistema",
        ctaText: "Contactar ahora",
      },
      clients: {
        title: "Empresas que confían en N3uralia",
        description: "Transformación real, operación mejorada",
        viewAll: "Ver más casos",
        ecosuelolab: {
          title: "Ecosuelolab",
          desc: "Análisis de suelos más rápido con sistemas inteligentes",
        },
        despega: {
          title: "Despega Tu Carrera",
          desc: "Formación personalizada con asistentes inteligentes",
        },
        blackswan: {
          title: "Blackswan Facility Core",
          desc: "Mantenimiento predictivo de instalaciones",
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
        badge: "AI systems that work in the real world",
        title: "AI and software that transforms your operation",
        subtitle: "Forget isolated demos. We build complete systems: from the interface your team uses to the intelligence that executes real tasks, all integrated into your company, secure and scalable.",
        ctaPrimary: "Explore",
        ctaSecondary: "View real cases",
      },
      positioning: {
        title: "It's not just a chatbot. It's your infrastructure.",
        description: "We design, integrate, and deploy intelligent systems that automate processes, connect data, make decisions, and improve continuously.",
      },
      whatWeDo: {
        title: "What we build",
        subtitle: "Four layers that work together:",
        engineering: {
          title: "Interface and Backend",
          desc: "The platforms, dashboards, and APIs your team uses every day.",
        },
        aiSystems: {
          title: "Operational Intelligence",
          desc: "Agents that understand your context, retrieve accurate information, and execute precise actions.",
        },
        automation: {
          title: "Real Connections",
          desc: "Your CRM, your database, Slack, WhatsApp, your internal systems... all connected without interruptions.",
        },
        infrastructure: {
          title: "Reliability",
          desc: "Security, audit logs, manual checkpoints, and continuous improvement based on data.",
        },
      },
      howWeThink: {
        title: "Our approach",
        description: "AI is not the product. It's a tool within a larger system.",
        insight: "Many sell isolated agents. We build operational infrastructure. That means every system has interfaces that work, organized data, processes that are monitored, and decisions that can be audited.",
      },
      architecture: {
        title: "A system ready to use",
        subtitle: "Every project includes:",
        items: [
          "Interfaces and dashboards for your team",
          "Solid backend and business logic",
          "Well-structured databases",
          "Access to your internal information when needed",
          "Multi-step automated processes",
          "Specialized intelligent agents",
          "Integrations with tools you already use",
          "Checkpoints where you need human decisions",
          "Continuous monitoring and automatic improvement",
        ],
      },
      differentiator: {
        title: "From experimentation to reality",
        statement1: "Many companies experiment with AI. Few turn it into systems that actually work in their business.",
        statement2: "N3uralia works on that layer. Where AI stops being a promise and becomes a useful tool that produces measurable results every day.",
      },
      forWho: {
        title: "For companies that need real results",
        description: "We work with organizations that want to automate complex processes, use their internal information intelligently, integrate AI into their current systems without interruptions, and deploy solutions that can be audited and improved.",
      },
      closing: {
        title: "Let's talk about your system",
        ctaText: "Contact now",
      },
      clients: {
        title: "Companies that trust N3uralia",
        description: "Real transformation, improved operation",
        viewAll: "View more cases",
        ecosuelolab: {
          title: "Ecosuelolab",
          desc: "Faster soil analysis with intelligent systems",
        },
        despega: {
          title: "Despega Tu Carrera",
          desc: "Personalized training with intelligent assistants",
        },
        blackswan: {
          title: "Blackswan Facility Core",
          desc: "Predictive maintenance for facilities",
        },
      },
    },
  },
};

export function getDict(locale: Locale): Dict {
  return DICTS[locale] || DICTS.es
}
