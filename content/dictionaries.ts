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
  about: {
    whoWeAre: string;
    title: string;
    description: string;
    ourWhy: string;
    visionTitle: string;
    visionP1: string;
    visionP2: string;
    visionP3: string;
    ourPhilosophy: string;
    howWethinkDifferent: string;
    philosophy: { num: string; desc: string }[];
    ourApproach: string;
    howWeWork: string;
    workingDaily: string;
    values: { title: string; desc: string }[];
    closing: string;
  };
  pillars: {
    infraTitle: string;
    infraDesc: string;
    agenticTitle: string;
    agenticDesc: string;
  };
  caseStudies: {
    title: string;
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
        badge: "IA que funciona en la realidad",
        title: "IA y software que transforma tu negocio",
        subtitle: "Construimos sistemas completos que funcionan. Desde interfaces hasta inteligencia, todo integrado, seguro y operativo en tu empresa.",
        ctaPrimary: "Explorar",
        ctaSecondary: "Ver casos",
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
    about: {
      whoWeAre: "Acerca de nosotros",
      title: "La filosofía de N3uralia",
      description: "Construimos sistemas agenticos que las empresas realmente pueden usar, controlar y confiar.",
      ourWhy: "Por qué",
      visionTitle: "Nuestra Visión",
      visionP1: "Creemos que la inteligencia artificial debe aumentar las capacidades humanas, no reemplazarlas. Los sistemas agenticos son herramientas poderosas, pero solo cuando están diseñadas con gobernanza, transparencia y control humano en el centro.",
      visionP2: "En N3uralia construimos la plataforma para que las empresas desplieguen sistemas agenticos en producción de forma segura, gobernable y auditable.",
      visionP3: "No creamos agentes por crear agentes. Creamos sistemas que resuelven problemas reales en empresas reales, con personas reales tomando decisiones reales.",
      ourPhilosophy: "Nuestra Filosofía",
      howWethinkDifferent: "Cómo pensamos diferente",
      philosophy: [
        {
          num: "01. Human-in-the-Loop",
          desc: "Los agentes proponen. Los humanos deciden. La automatización ocurre con supervisión y control.",
        },
        {
          num: "02. Integración nativa",
          desc: "No es un chatbot desconectado. Es un sistema que vive dentro de tu empresa, integrado con tus herramientas.",
        },
        {
          num: "03. Gobernanza como velocidad",
          desc: "La gobernanza no es un obstáculo. Es lo que permite que los sistemas agenticos se desplieguen en producción.",
        },
        {
          num: "04. Transparencia radical",
          desc: "Cada decisión del agente es auditable. Cada acción es rastreable. Cada resultado es explicable.",
        },
      ],
      ourApproach: "Nuestro Enfoque",
      howWeWork: "Cómo trabajamos",
      workingDaily: "Ingeniería agentica que funciona día a día en empresas reales",
      values: [
        {
          title: "Responsable",
          desc: "Gobernanza integrada. Control humano. Auditoría completa.",
        },
        {
          title: "Integrado",
          desc: "Se conecta con tus sistemas. API-first. Sin silos.",
        },
        {
          title: "Escalable",
          desc: "Crece con tu empresa. De 1 a 1,000 agentes. Misma arquitectura.",
        },
        {
          title: "Production-Ready",
          desc: "No es un experimento. Es código en producción. Hoy.",
        },
      ],
      closing: "Los sistemas agenticos son el presente. En N3uralia, construimos la infraestructura para que tu empresa los implemente de forma segura, escalable y gobernable.",
    },
    pillars: {
      infraTitle: "Infraestructura IA",
      infraDesc: "RAG y pipelines listos para producción",
      agenticTitle: "Sistemas Agénticos",
      agenticDesc: "Automatización gobernable con human-in-the-loop",
    },
    caseStudies: {
      title: "Casos de Éxito",
    },
    agenticEngineering: {
      headline: "Agentic Engineering, construido para el mundo real",
      subheadline: "No construimos agentes aislados. Construimos sistemas de ingeniería agentica que funcionan dentro de tu empresa, que se integran con tus flujos, que se adaptan a tu gobernanza.",
      humanInLoop: {
        title: "Human-in-Loop",
        description: "Los humanos toman decisiones críticas. Los agentes proponen y ejecutan con supervisión.",
      },
      toolAware: {
        title: "Tool-Aware",
        description: "Agentes que entienden las herramientas empresariales. API-first, integración nativa, sin custom coding.",
      },
      vendorAgnostic: {
        title: "Vendor-Agnostic",
        description: "No te quedas atrapado. Arquitectura agnóstica de modelos y proveedores.",
      },
      builtToShip: {
        title: "Built-to-Ship",
        description: "Producción en 4 semanas, no en 4 meses. Stack simplificado, testing integrado, observabilidad desde día uno.",
      },
      manifesto: [
        "Los agentes no reemplazan humanos. Aumentan capacidad.",
        "La gobernanza no es restricción. Es velocidad.",
        "Integración no es fricción. Es arquitectura.",
        "Producción no es beta. Es promesa.",
      ],
      cta: "Explorar Agentic Engineering",
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
    about: {
      whoWeAre: "About us",
      title: "N3uralia's philosophy",
      description: "We build agentic systems that enterprises can actually use, control, and trust.",
      ourWhy: "Why",
      visionTitle: "Our Vision",
      visionP1: "We believe artificial intelligence should augment human capabilities, not replace them. Agentic systems are powerful tools, but only when designed with governance, transparency, and human control at their core.",
      visionP2: "At N3uralia, we build the platform for enterprises to deploy agentic systems in production securely, governably, and auditably.",
      visionP3: "We don't create agents for the sake of it. We create systems that solve real problems in real companies, with real people making real decisions.",
      ourPhilosophy: "Our Philosophy",
      howWethinkDifferent: "How we think different",
      philosophy: [
        {
          num: "01. Human-in-the-Loop",
          desc: "Agents propose. Humans decide. Automation happens with oversight and control.",
        },
        {
          num: "02. Native Integration",
          desc: "Not a disconnected chatbot. A system that lives inside your enterprise, integrated with your tools.",
        },
        {
          num: "03. Governance as Velocity",
          desc: "Governance isn't an obstacle. It's what enables agentic systems to be deployed in production.",
        },
        {
          num: "04. Radical Transparency",
          desc: "Every agent decision is auditable. Every action is traceable. Every outcome is explainable.",
        },
      ],
      ourApproach: "Our Approach",
      howWeWork: "How we work",
      workingDaily: "Agentic engineering that works day-in day-out in real enterprises",
      values: [
        {
          title: "Responsible",
          desc: "Built-in governance. Human control. Full audit trail.",
        },
        {
          title: "Integrated",
          desc: "Connects with your systems. API-first. No silos.",
        },
        {
          title: "Scalable",
          desc: "Grows with your enterprise. From 1 to 1,000 agents. Same architecture.",
        },
        {
          title: "Production-Ready",
          desc: "Not an experiment. Code in production. Today.",
        },
      ],
      closing: "Agentic systems are the present. At N3uralia, we build the infrastructure for your enterprise to implement them securely, scalably, and governably.",
    },
    pillars: {
      infraTitle: "AI Infrastructure",
      infraDesc: "Production-ready RAG and pipelines",
      agenticTitle: "Agentic Systems",
      agenticDesc: "Governed automation with human-in-the-loop",
    },
    caseStudies: {
      title: "Case Studies",
    },
    agenticEngineering: {
      headline: "Agentic Engineering, built for the real world",
      subheadline: "We don't build isolated agents. We build agentic engineering systems that work inside your enterprise, integrate with your workflows, adapt to your governance.",
      humanInLoop: {
        title: "Human-in-Loop",
        description: "Humans make critical decisions. Agents propose and execute with oversight.",
      },
      toolAware: {
        title: "Tool-Aware",
        description: "Agents that understand enterprise tools. API-first, native integration, no custom coding.",
      },
      vendorAgnostic: {
        title: "Vendor-Agnostic",
        description: "You're not locked in. Model and provider-agnostic architecture.",
      },
      builtToShip: {
        title: "Built-to-Ship",
        description: "Production in 4 weeks, not 4 months. Simplified stack, integrated testing, observability from day one.",
      },
      manifesto: [
        "Agents don't replace humans. They augment capacity.",
        "Governance isn't restriction. It's velocity.",
        "Integration isn't friction. It's architecture.",
        "Production isn't beta. It's a promise.",
      ],
      cta: "Explore Agentic Engineering",
    },
  },
};

export function getDict(locale: Locale): Dict {
  return DICTS[locale] || DICTS.es
}
