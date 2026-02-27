export type Locale = "es" | "en";

type Dict = {
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
      orchestration: {
        title: string;
        desc: string;
      };
      evolving: {
        title: string;
        desc: string;
      };
      integration: {
        title: string;
        desc: string;
      };
    };
    solutions: {
      title: string;
      description: string;
      explore: string;
    };
    clients: {
      title: string;
      description: string;
      viewAll: string;
      ecosuelolab: {
        title: string;
        desc: string;
      };
      despega: {
        title: string;
        desc: string;
      };
      blackswan: {
        title: string;
        desc: string;
      };
    };
    cta: {
      title: string;
      subtitle: string;
      scheduleCall: string;
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
    philosophy: Array<{ num: string; desc: string }>;
    ourApproach: string;
    howWeWork: string;
    workingDaily: string;
    values: Array<{ title: string; desc: string }>;
    closing: string;
  };
  solutions: {
    hero: {
      badge: string;
      heading: string;
      subheading: string;
    };
    whyChoose: {
      title: string;
      enterprises: string;
      startups: string;
      developers: string;
      benefits: {
        enterprises: string[];
        startups: string[];
        developers: string[];
      };
    };
    realProjects: {
      title: string;
      description: string;
      projects: {
        legal: { title: string; desc: string };
        mining: { title: string; desc: string };
        security: { title: string; desc: string };
        agriculture: { title: string; desc: string };
        retail: { title: string; desc: string };
        art: { title: string; desc: string };
      };
      noIndustry: string;
      customSolution: string;
    };
    nextSteps: {
      title: string;
      description: string;
      learnMore: string;
      scheduleDemo: string;
    };
  };
};

export const DICTS: Record<Locale, Dict> = {
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
      contact: "Contactar",
    },
    cta: {
      requestReview: "Solicitar revisión de arquitectura",
      bookCall: "Agendar llamada técnica",
      viewCaseStudies: "Ver casos de éxito",
    },
    home: {
      h1: "Sistemas Agénticos en Producción",
      sub:
        "Orquestación de sistemas agénticos que integran, escalan y evolucionan. Tu operación con inteligencia aumentada, lista para producción desde el día uno.",
      trust:
        "Ingeniería de IA para operaciones reales. Sistemas autónomos con gobernanza, observabilidad y fiabilidad.",
      hero: {
        badge: "Sistemas Agenticos en Producción",
        h1_1: "De la Experimentación",
        h1_2: "a la Automatización Empresarial",
        description: "Orquestación de sistemas agenticos que integran, escalan y evolucionan. Tu operación con inteligencia aumentada, lista para producción desde el día uno.",
        startToday: "Comenzar Hoy",
        viewCapabilities: "Ver Capacidades",
        stats: {
          processes: "Procesos Automatizados",
          industries: "Industrias Servidas",
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
      },
      solutions: {
        title: "Soluciones por Industria",
        description: "Automatización especializada para los desafíos únicos de tu sector",
        explore: "Explorar Todas las Soluciones",
      },
      clients: {
        title: "Confían en N3uralia",
        description: "Empresas líderes transforman sus operaciones con nuestros sistemas",
        viewAll: "Ver Todos los Casos de Éxito",
        ecosuelolab: {
          title: "Monitoreo Agrícola Automatizado",
          desc: "Automatización 100% de alertas satelitales con integración API + WhatsApp. Latencia en segundos.",
        },
        despega: {
          title: "Plataforma de Coaching IA",
          desc: "Fullstack development con coach IA conversacional, tests psicométricos y biblioteca de recursos. 10K+ usuarios.",
        },
        blackswan: {
          title: "Sistema de Gestión Integrado",
          desc: "BFCS orquestado para hoteles de lujo. 40% reducción en tiempo operativo. Response time: 4h → 15min.",
        },
      },
      cta: {
        title: "¿Tu industria requiere automatización?",
        subtitle: "Hablemos sobre cómo N3uralia puede transformar tus operaciones.",
        scheduleCall: "Agendar Conversación",
      },
    },
    pillars: {
      platformTitle: "Plataforma",
      platformDesc:
        "Construimos la arquitectura que falta: un orquestador central que coordina agentes especializados e integra tu stack existente sin disrupciones.",
      agenticTitle: "Sistemas Agénticos",
      agenticDesc:
        "Automatización gobernable: human-in-the-loop, permisos, trazabilidad, evaluaciones y control en producción.",
      infraTitle: "Infraestructura IA",
      infraDesc:
        "RAG y pipelines listos para producción: seguridad, latencia, costo, observabilidad y mejora continua.",
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
    about: {
      whoWeAre: "Quiénes Somos",
      title: "N3uralia",
      description: "Construimos arquitecturas de inteligencia autónoma que amplifican capacidades humanas. No es IA que reemplaza. Es IA que expande. Sistemas que funcionan con humanos, no contra ellos.",
      ourWhy: "Nuestro Por Qué",
      visionTitle: "La Visión Que Nos Guía",
      visionP1: "Creemos que la IA debería ser diferente. No más chatbots respondiendo preguntas aisladas. No más herramientas que requieren supervisión constante. No más sistemas que reemplazan humanos.",
      visionP2: "Imaginamos sistemas inteligentes que coordinan autonomía con gobernanza. Agentes que son especializados pero colaborativos. Arquitectura que escala sin complejidad exponencial.",
      visionP3: "Existimos para que eso sea posible. Arquitectura que funciona. Ingeniería rigurosa. Responsabilidad radical. Sistema vivo que aprende y evoluciona.",
      ourPhilosophy: "Nuestra Filosofía",
      howWethinkDifferent: "Cómo Pensamos Diferente",
      philosophy: [
        { num: "1. Tecnología Grounded", desc: "La IA no es magia. Es ingeniería. Sistemas que son predecibles, rastreables, y completamente gobernados. Sin hype, solo arquitectura que funciona en el mundo real." },
        { num: "2. Expansión, No Reemplazo", desc: "La IA que vale la pena expande capacidades humanas. Permite que equipos hagan más, no menos. No construimos para reemplazar—construimos para amplificar." },
        { num: "3. Arquitectura sobre Herramientas", desc: "Los chatbots responden preguntas. Los sistemas agenticos construyen infraestructura organizacional. Hay una diferencia fundamental entre una herramienta y una arquitectura." },
        { num: "4. Responsabilidad Radical", desc: "Cada decisión de cada agente debe ser rastreable, explicable, y auditable. Gobernanza no es fricción—es un requisito no-negociable de sistemas responsables." },
        { num: "5. Evolución Continua", desc: "Los sistemas vivos aprenden. Living Agents no son estáticos. Mejoran con cada interacción, adaptándose a contexto, retroalimentación y experiencia." },
      ],
      ourApproach: "Nuestro Enfoque",
      howWeWork: "Cómo Trabajamos",
      workingDaily: "Estas no son solo palabras en una pared. Es cómo operamos, todos los días.",
      values: [
        { title: "Ingeniería Rigurosa", desc: "La IA es ingeniería, no magia. Sistemas predecibles, rastreables, gobernados. Cada decisión es auditable." },
        { title: "Expansión Humana", desc: "Tecnología que amplifica capacidades humanas. Ayuda a equipos a hacer más, no menos. Colaboración, no reemplazo." },
        { title: "Responsabilidad Radical", desc: "Cada agente, cada decisión, completamente rastreable. Gobernanza no es fricción—es requisito no-negociable." },
        { title: "Resultados Medibles", desc: "No evangelizamos IA. Medimos impacto real: eficiencia, ingresos, satisfacción. Resultados concretos, no promesas." },
      ],
      closing: "No somos perfectos, pero estamos comprometidos. Comprometidos con tu éxito, con construir con integridad, y con hacer la IA accesible. Ese es N3uralia.",
    },
    solutions: {
      hero: {
        badge: "Soluciones",
        heading: "Soluciones Agenticas para Cada Industria",
        subheading: "Sistemas personalizados diseñados para los desafíos únicos de tu negocio. Desde automatización de operaciones hasta inteligencia conversacional.",
      },
      whyChoose: {
        title: "¿Por qué cada segmento elige N3uralia?",
        enterprises: "Empresas",
        startups: "Startups",
        developers: "Desarrolladores",
        benefits: {
          enterprises: [
            "Production-ready desde día 1 con SLAs garantizados",
            "Escalabilidad integrada para millones de transacciones",
            "Seguridad y compliance empresarial",
            "ROI comprobado: 40-60% reducción de costos en 12 meses",
            "Integración limpia con sistemas legacy",
            "Equipo dedicado 24/7",
          ],
          startups: [
            "Arquitectura escalable desde el inicio",
            "Building blocks modulares, máxima flexibilidad",
            "IA como ventaja competitiva inmediata",
            "2x productividad sin aumentar headcount",
            "Pricing flexible para startups",
            "Comunidad activa y soporte rápido",
          ],
          developers: [
            "SDKs robustos y bien documentados",
            "APIs claras y predecibles",
            "Documentación exhaustiva con ejemplos",
            "50% menos tiempo en integración",
            "Comunidad técnica activa",
            "Herramientas de debugging avanzadas",
          ],
        },
      },
      realProjects: {
        title: "Desarrollos Reales en Producción",
        description: "Casos reales de sistemas agenticos que hemos construido y están operando hoy",
        projects: {
          legal: { 
            title: "Análisis Legal Automatizado",
            desc: "Agentes que revisan contratos, identifican cláusulas riesgosas y generan reportes en segundos. Reducción 90% en tiempo de revisión.",
          },
          mining: {
            title: "Monitoreo de Operaciones Mineras",
            desc: "Orquestación de sensores, predicción de fallas, optimización de turnos. 35% aumento en eficiencia operativa.",
          },
          security: {
            title: "Detección de Fraude Inteligente",
            desc: "Agentes que detectan patrones anómalos, validan transacciones y previenen fraude en tiempo real. 98% precisión.",
          },
          agriculture: {
            title: "Automatización Agrícola (Ecosuelolab)",
            desc: "Monitoreo satelital + alertas automáticas en WhatsApp. Decisiones de riego en segundos, no horas.",
          },
          retail: {
            title: "Personalización en Retail",
            desc: "Recomendaciones en tiempo real, gestión de inventario predictiva. 45% aumento en conversión.",
          },
          art: {
            title: "Curaduría y Análisis de Arte",
            desc: "Agentes que validan autenticidad, sugieren curatoría inteligente y conectan coleccionistas con obras.",
          },
        },
        noIndustry: "¿Tu industria no está aquí? Hablemos sobre tu caso específico.",
        customSolution: "Consultar Solución Personalizada",
      },
      nextSteps: {
        title: "¿Cuál es tu próximo paso?",
        description: "Independientemente de tu segmento, el primer paso es el mismo: una conversación clara sobre tus objetivos y restricciones.",
        learnMore: "Aprender más",
        scheduleDemo: "Agendar Demo",
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
      sub:
        "We orchestrate agentic systems that integrate, scale, and evolve. Augmented intelligence for real operations — production-ready from day one.",
      trust:
        "AI engineering for real operations. Governed autonomy with observability and reliability.",
      hero: {
        badge: "Agentic Systems in Production",
        h1_1: "From Experimentation",
        h1_2: "to Enterprise Automation",
        description: "Orchestration of agentic systems that integrate, scale, and evolve. Your operations with augmented intelligence, ready for production from day one.",
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
      },
      solutions: {
        title: "Solutions by Industry",
        description: "Specialized automation for the unique challenges of your sector",
        explore: "Explore All Solutions",
      },
      clients: {
        title: "Trusted by Industry Leaders",
        description: "Leading companies transform their operations with our systems",
        viewAll: "View All Case Studies",
        ecosuelolab: {
          title: "Automated Agricultural Monitoring",
          desc: "100% automation of satellite alerts with API + WhatsApp integration. Latency in seconds.",
        },
        despega: {
          title: "AI Coaching Platform",
          desc: "Fullstack development with conversational AI coach, psychometric tests, and resource library. 10K+ users.",
        },
        blackswan: {
          title: "Integrated Management System",
          desc: "BFCS orchestrated for luxury hotels. 40% reduction in operational time. Response time: 4h → 15min.",
        },
      },
      cta: {
        title: "Does your industry require automation?",
        subtitle: "Let's talk about how N3uralia can transform your operations.",
        scheduleCall: "Schedule a Conversation",
      },
    },
    pillars: {
      platformTitle: "Platform",
      platformDesc:
        "We build the missing architecture: a central orchestrator coordinating specialized agents and integrating your existing stack without disruption.",
      agenticTitle: "Agentic Systems",
      agenticDesc:
        "Governed automation: human-in-the-loop, permissions, traceability, evaluations, and production control.",
      infraTitle: "AI Infrastructure",
      infraDesc:
        "Production RAG and pipelines: security, latency, cost control, observability, and continuous improvement.",
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
    about: {
      whoWeAre: "Who We Are",
      title: "N3uralia",
      description: "We build autonomous intelligence architectures that amplify human capabilities. Not AI that replaces. AI that expands. Systems that work with humans, not against them.",
      ourWhy: "Our Why",
      visionTitle: "The Vision That Guides Us",
      visionP1: "We believe AI should be different. No more chatbots answering isolated questions. No more tools requiring constant oversight. No more systems that replace humans.",
      visionP2: "We envision intelligent systems that coordinate autonomy with governance. Agents that are specialized yet collaborative. Architecture that scales without exponential complexity.",
      visionP3: "We exist to make that possible. Architecture that works. Rigorous engineering. Radical accountability. Living systems that learn and evolve.",
      ourPhilosophy: "Our Philosophy",
      howWethinkDifferent: "How We Think Differently",
      philosophy: [
        { num: "1. Grounded Technology", desc: "AI is not magic. It's engineering. Systems that are predictable, traceable, and fully governed. No hype, just architecture that works in the real world." },
        { num: "2. Expansion, Not Replacement", desc: "AI worth having expands human capabilities. It enables teams to do more, not less. We don't build to replace—we build to amplify." },
        { num: "3. Architecture Over Tools", desc: "Chatbots answer questions. Agentic systems build organizational infrastructure. There's a fundamental difference between a tool and an architecture." },
        { num: "4. Radical Responsibility", desc: "Every decision of every agent must be traceable, explainable, and auditable. Governance isn't friction—it's a non-negotiable requirement of responsible systems." },
        { num: "5. Continuous Evolution", desc: "Living systems learn. Living Agents aren't static. They improve with every interaction, adapting to context, feedback, and experience." },
      ],
      ourApproach: "Our Approach",
      howWeWork: "How We Work",
      workingDaily: "These aren't just words on a wall. It's how we operate, every single day.",
      values: [
        { title: "Rigorous Engineering", desc: "AI is engineering, not magic. Predictable, traceable, governed systems. Every decision is auditable." },
        { title: "Human Expansion", desc: "Technology that amplifies human capabilities. Helps teams do more, not less. Collaboration, not replacement." },
        { title: "Radical Accountability", desc: "Every agent, every decision, fully traceable. Governance is not friction—it's a non-negotiable requirement." },
        { title: "Measurable Results", desc: "We don't evangelize AI. We measure real impact: efficiency, revenue, satisfaction. Concrete results, not promises." },
      ],
      closing: "We're not perfect, but we're committed. Committed to your success, to building with integrity, and to making AI accessible. That's N3uralia.",
    },
    solutions: {
      hero: {
        badge: "Solutions",
        heading: "Agentic Solutions for Every Industry",
        subheading: "Custom systems designed for the unique challenges of your business. From operations automation to conversational intelligence.",
      },
      whyChoose: {
        title: "Why Every Segment Chooses N3uralia?",
        enterprises: "Enterprises",
        startups: "Startups",
        developers: "Developers",
        benefits: {
          enterprises: [
            "Production-ready from day 1 with guaranteed SLAs",
            "Built-in scalability for millions of transactions",
            "Enterprise-grade security and compliance",
            "Proven ROI: 40-60% cost reduction in 12 months",
            "Clean integration with legacy systems",
            "Dedicated 24/7 team support",
          ],
          startups: [
            "Scalable architecture from the start",
            "Modular building blocks, maximum flexibility",
            "AI as immediate competitive advantage",
            "2x productivity without increasing headcount",
            "Flexible pricing for startups",
            "Active community and rapid support",
          ],
          developers: [
            "Robust and well-documented SDKs",
            "Clear and predictable APIs",
            "Exhaustive documentation with examples",
            "50% less integration time",
            "Active technical community",
            "Advanced debugging tools",
          ],
        },
      },
      realProjects: {
        title: "Real Production Systems",
        description: "Real cases of agentic systems we've built that are operating today",
        projects: {
          legal: {
            title: "Automated Legal Analysis",
            desc: "Agents that review contracts, identify risky clauses, and generate reports in seconds. 90% reduction in review time.",
          },
          mining: {
            title: "Mining Operations Monitoring",
            desc: "Sensor orchestration, failure prediction, shift optimization. 35% increase in operational efficiency.",
          },
          security: {
            title: "Intelligent Fraud Detection",
            desc: "Agents that detect anomalous patterns, validate transactions, and prevent fraud in real time. 98% accuracy.",
          },
          agriculture: {
            title: "Agricultural Automation (Ecosuelolab)",
            desc: "Satellite monitoring + automatic WhatsApp alerts. Irrigation decisions in seconds, not hours.",
          },
          retail: {
            title: "Retail Personalization",
            desc: "Real-time recommendations, predictive inventory management. 45% increase in conversion.",
          },
          art: {
            title: "Art Curation and Analysis",
            desc: "Agents that validate authenticity, suggest intelligent curation, and connect collectors with works.",
          },
        },
        noIndustry: "Your industry not here? Let's talk about your specific case.",
        customSolution: "Consult Custom Solution",
      },
      nextSteps: {
        title: "What's Your Next Step?",
        description: "Regardless of your segment, the first step is the same: a clear conversation about your goals and constraints.",
        learnMore: "Learn More",
        scheduleDemo: "Schedule Demo",
      },
    },
  }
};

export function getDict(locale: Locale) {
  return DICTS[locale];
}
