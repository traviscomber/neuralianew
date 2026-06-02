export interface Dict {
  nav: { [key: string]: string };
  home: {
    hero: { badge: string; title: string; subtitle: string; ctaPrimary: string; ctaSecondary: string; context?: string };
    pain: { title: string; bullets: string[]; costByIndustry?: { industry: string; annualCost: string }[] };
    solution: { title: string; bullets: string[] };
    caseStudies: { title: string; viewAll: string };
    whyNow: { title: string; reasons: { title: string; description: string }[]; urgency: string };
    fourWeekMethod: { title: string; weeks: { week: string; label: string }[] };
    closing: { title: string; subtitle: string; ctaText: string; microcopy: string };
    clients: { title: string; description: string; viewAll: string; ecosuelolab: { title: string; desc: string }; despega: { title: string; desc: string }; blackswan: { title: string; desc: string } };
    positioning: { title: string; description: string };
    whatWeDo: { title: string; subtitle: string; engineering: { title: string; desc: string }; aiSystems: { title: string; desc: string }; automation: { title: string; desc: string }; infrastructure: { title: string; desc: string } };
    howWeThink: { title: string; description: string; insight: string };
    architecture: { title: string; subtitle: string; items: string[] };
    differentiator: { title: string; statement1: string; statement2: string };
    forWho: { title: string; description: string };
    quickTest: { title: string; subtitle: string; metrics: { value: string; label: string }[] };
    industries: { title: string; subtitle: string; sectors: { name: string; desc: string }[] };
    security: { title: string; subtitle: string; pillars: { title: string; desc: string }[] };
    faq: { title: string; subtitle: string; items: { q: string; a: string }[] };
    finalCta: { headline: string; subheadline: string; cta: string };
    whoWeAre?: { title: string; founder: string; background: string; why: string };
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
  pillars: { infraTitle: string; infraDesc: string; agenticTitle: string; agenticDesc: string };
  caseStudies: { title: string };
  agenticEngineering: {
    headline: string;
    subheadline: string;
    humanInLoop: { title: string; description: string };
    toolAware: { title: string; description: string };
    vendorAgnostic: { title: string; description: string };
    builtToShip: { title: string; description: string };
    manifesto: string[];
    philosophy: { num: string; desc: string }[];
    cta: string;
  };
}

const DICTS_ES: Dict = {
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
      badge: "Sistemas agenticos en producción | Santiago, Chile",
      title: "IA en producción para operaciones que no pueden fallar",
      subtitle: "Diseñamos e integramos sistemas inteligentes que automatizan procesos críticos, conectan tus datos y mantienen control humano en cada decisión relevante.",
      context: "50+ empresas en Chile ya ejecutan operaciones críticas con N3uralia. Cero downtime. 100% auditable.",
      ctaPrimary: "Agendar diagnóstico (30 min)",
      ctaSecondary: "Ver casos reales",
    },
    pain: {
      title: "Operaciones manuales = riesgo financiero y operativo",
      bullets: [
        "Retrasos por tareas manuales: cada hora de demora cuesta dinero",
        "Errores sin trazabilidad: imposible saber quién decidió qué",
        "Decisiones sin contexto: falta de datos que deberían estar listos",
      ],
      costByIndustry: [
        { industry: "Retail", annualCost: "$444K - $680K" },
        { industry: "Manufactura", annualCost: "$996K - $1.2M" },
        { industry: "Logística", annualCost: "$1.26M - $1.8M" },
        { industry: "Finanzas", annualCost: "$2.1M - $3.4M" },
      ],
    },
    solution: {
      title: "No entregamos bots sueltos. Entregamos infraestructura operativa.",
      bullets: [
        "Interfaces, backend y APIs listas para uso diario - tu equipo trabaja desde el día 1",
        "Agentes conectados a tus sistemas y datos reales - Salesforce, Oracle, bases de datos internas",
        "Auditoría, seguridad y checkpoints humanos - cada decisión es verificable y reversible",
        "Arquitectura agnóstica, sin lock-in de proveedor - tu infraestructura, nuestro soporte",
      ],
    },
    whyNow: {
      title: "Por qué la crisis de talento hace esto urgente",
      reasons: [
        {
          title: "Costo de talento disparado",
          description: "Sueldos senior +40% en 2024-2025. Operaciones manuales = equipos más grandes.",
        },
        {
          title: "Expectativas de cliente cambiaron",
          description: "Hoy piden respuestas en minutos, no horas. Retail: 4h → 15min. Finanzas: 3h → 20min.",
        },
        {
          title: "Subsidios disponibles",
          description: "Hasta 70% cofinanciamiento para automatización (InnovaChile, CORFO). Implementación hasta 4 meses.",
        },
      ],
      urgency: "Empresas que implementan ahora estarán 10x adelante en 2027.",
    },
    caseStudies: {
      title: "Resultados medibles en operación real",
      viewAll: "Ver todos los casos",
    },
    fourWeekMethod: {
      title: "De diagnóstico a producción en 4 semanas",
      weeks: [
        { week: "Semana 1", label: "Diagnóstico y alcance" },
        { week: "Semana 2", label: "Integración con sistemas y datos" },
        { week: "Semana 3", label: "Orquestación de agentes y flujos" },
        { week: "Semana 4", label: "Salida a producción con monitoreo" },
      ],
    },
    closing: {
      title: "Menos fricción. Más ejecución.",
      subtitle: "En 30 minutos te mostramos qué automatizar primero, impacto esperado y roadmap realista para tu equipo.",
      ctaText: "Agendar diagnóstico (30 min)",
      microcopy: "Sin lock-in | Implementación guiada | Soporte local",
    },
    clients: {
      title: "Casos de éxito",
      description: "Empresas que aceleran con sistemas agenticos",
      viewAll: "Ver todos los casos",
      ecosuelolab: { title: "Ecosuelolab", desc: "Automatización de análisis de suelos" },
      despega: { title: "Despega Tu Carrera", desc: "Procesamiento automático de perfiles" },
      blackswan: { title: "Blackswan", desc: "Gestión operativa integrada" },
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
        title: "Orquestación y Auditoría",
        desc: "Workflow visual, trazabilidad total, seguridad empresarial y checkpoints humanos.",
      },
    },
    howWeThink: {
      title: "Cómo pensamos",
      description: "Un sistema inteligente no es un experimento. Es tu operación.",
      insight: "Por eso partimos desde tu realidad operativa, no desde una demostración.",
    },
    architecture: {
      title: "La arquitectura que funciona",
      subtitle: "Cuatro principios que guían cada decisión técnica:",
      items: [
        "Agnóstica: funciona en AWS, Google Cloud, Azure o On-Premise",
        "Observable: auditoría completa de cada acción del agente",
        "Escalable: desde 1 proceso hasta 50+ sin cambios estructurales",
        "Humano-céntrica: decisiones críticas siempre requieren aprobación",
      ],
    },
    differentiator: {
      title: "No es magia, es ingeniería.",
      statement1: "La mayoría de soluciones IA terminan como POCs. Nosotros llevamos sistemas a producción.",
      statement2: "Porque conocemos retail, manufactura, finanzas, salud, legal y logística. Sabemos qué hace que una operación sea crítica.",
    },
    forWho: {
      title: "Para operaciones que no pueden fallar",
      description: "Retail, manufactura, servicios financieros, salud, legal, logística. Si tienes procesos críticos y datos, podemos automatizar.",
    },
    quickTest: {
      title: "Tres métricas que cambian el juego",
      subtitle: "Lo que ves en sistemas inteligentes de N3uralia",
      metrics: [
        { value: "-40%", label: "Tiempo de procesamiento" },
        { value: "24/7", label: "Continuidad operativa" },
        { value: "100%", label: "Integración de stack" },
      ],
    },
    industries: {
      title: "Industrias donde operamos",
      subtitle: "Automatización profunda para sectores críticos",
      sectors: [
        { name: "Retail & E-commerce", desc: "Atención 24/7, gestión de inventario" },
        { name: "Turismo & Hotelería", desc: "Reservas inteligentes, recomendaciones" },
        { name: "Logística & Supply Chain", desc: "Rutas óptimas, predicción de entregas" },
        { name: "Manufactura", desc: "Control de calidad, predictive maintenance" },
        { name: "Servicios Financieros", desc: "Procesos KYC, compliance automático" },
        { name: "Minería & Recursos", desc: "Monitoreo predictivo, optimización" },
      ],
    },
    security: {
      title: "Seguridad y control empresarial",
      subtitle: "Confianza integrada en cada capa",
      pillars: [
        { title: "Trazabilidad completa", desc: "Auditoría de cada decisión del agente" },
        { title: "Políticas configurables", desc: "Define límites, excepciones y escaladas" },
        { title: "Supervisión humana", desc: "Aprobaciones para decisiones críticas" },
        { title: "Sin lock-in", desc: "Tu infraestructura, tus términos" },
      ],
    },
    faq: {
      title: "Preguntas comerciales frecuentes",
      subtitle: "Lo que nuestros clientes siempre preguntan",
      items: [
        {
          q: "¿Cuánto toma implementar?",
          a: "Diagnosis a producción en 4 semanas. Semana 1: alcance. Semana 2: integración. Semana 3: orquestación. Semana 4: salida con monitoreo.",
        },
        {
          q: "¿Qué datos necesitas de mi empresa?",
          a: "Solo los críticos: procesos, datos actuales, decisiones automáticas vs. manuales. Lo mapeamos en la semana 1.",
        },
        {
          q: "¿Quién mantiene el sistema?",
          a: "Tu equipo con nuestro soporte. Entrenamos, documentamos y escalamos según necesites.",
        },
        {
          q: "¿Es seguro?",
          a: "Completamente. Auditoría total, controles humanos en decisiones críticas, cumple regulaciones locales.",
        },
      ],
    },
    finalCta: {
      headline: "Si tu operación no puede fallar, hablemos.",
      subheadline: "30 minutos para mostrar impacto realista y roadmap claro.",
      cta: "Agendar diagnóstico",
    },
  },
  about: {
    whoWeAre: "Quiénes somos",
    title: "N3uralia",
    description: "Expertos en sistemas agenticos",
    ourWhy: "Por qué existimos",
    visionTitle: "Nuestra visión",
    visionP1: "Operaciones sin fricción",
    visionP2: "IA que ejecuta, no solo responde",
    visionP3: "Automatización empresarial",
    ourPhilosophy: "Nuestra filosofía",
    howWethinkDifferent: "Cómo pensamos diferente",
    philosophy: [
      { num: "1", desc: "Sistemas completos, no bots sueltos" },
      { num: "2", desc: "Producción antes que demos" },
      { num: "3", desc: "Control humano siempre" },
      { num: "4", desc: "Sin lock-in de proveedor" },
    ],
    ourApproach: "Nuestro enfoque",
    howWeWork: "Cómo trabajamos",
    workingDaily: "Día a día",
    values: [
      { title: "Calidad", desc: "Sistemas listos para producción" },
      { title: "Transparencia", desc: "Trazabilidad total" },
      { title: "Confianza", desc: "Soporte local" },
      { title: "Innovación", desc: "Agnóstica y escalable" },
    ],
    closing: "Construyamos juntos",
  },
  caseStudies: {
    title: "Casos de éxito",
  },
  pillars: {
    infraTitle: "Infraestructura",
    infraDesc: "Completa y lista para producción",
    agenticTitle: "Sistemas Agénticos",
    agenticDesc: "Inteligencia que ejecuta",
  },
  agenticEngineering: {
    headline: "Ingeniería Agéntica",
    subheadline: "Sistemas inteligentes para operaciones críticas",
    humanInLoop: { title: "Humano en el loop", description: "Control siempre" },
    toolAware: { title: "Consciente de herramientas", description: "Integración real" },
    vendorAgnostic: { title: "Agnóstico", description: "Sin lock-in" },
    builtToShip: { title: "Listo para producción", description: "Desde el día 1" },
    manifesto: [
      "Sistemas que funcionan",
      "Arquitectura completa",
      "Decisiones verificables",
    ],
    philosophy: [
      { num: "1", desc: "Producción es el objetivo" },
      { num: "2", desc: "Humanos controlan" },
      { num: "3", desc: "Trazabilidad total" },
      { num: "4", desc: "Arquitectura agnóstica" },
    ],
    cta: "Comenzar",
  },
};

const DICTS_EN: Dict = {
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
      badge: "Agentic systems in production | Santiago, Chile",
      title: "AI in production for operations that cannot fail",
      subtitle: "We design and integrate intelligent systems that automate critical processes, connect your data and maintain human control over every relevant decision.",
      context: "50+ companies in Chile already run critical operations with N3uralia. Zero downtime. 100% auditable.",
      ctaPrimary: "Schedule diagnosis (30 min)",
      ctaSecondary: "See real cases",
    },
    pain: {
      title: "Manual operations = financial and operational risk",
      bullets: [
        "Delays from manual tasks: every hour of delay costs money",
        "Errors without traceability: impossible to know who decided what",
        "Decisions without context: missing data that should be ready",
      ],
      costByIndustry: [
        { industry: "Retail", annualCost: "$444K - $680K" },
        { industry: "Manufacturing", annualCost: "$996K - $1.2M" },
        { industry: "Logistics", annualCost: "$1.26M - $1.8M" },
        { industry: "Finance", annualCost: "$2.1M - $3.4M" },
      ],
    },
    solution: {
      title: "We don't deliver loose bots. We deliver operational infrastructure.",
      bullets: [
        "Interfaces, backend and APIs ready for daily use - your team works from day 1",
        "Agents connected to your systems and real data - Salesforce, Oracle, internal databases",
        "Audit, security and human checkpoints - every decision is verifiable and reversible",
        "Vendor-agnostic architecture, no provider lock-in - your infrastructure, our support",
      ],
    },
    whyNow: {
      title: "Why the talent crisis makes this urgent",
      reasons: [
        {
          title: "Talent costs skyrocketed",
          description: "Senior salaries +40% in 2024-2025. Manual operations = larger teams.",
        },
        {
          title: "Customer expectations changed",
          description: "Today they demand responses in minutes, not hours. Retail: 4h → 15min. Finance: 3h → 20min.",
        },
        {
          title: "Funding available",
          description: "Up to 70% co-financing for automation (InnovaChile, CORFO). Implementation within 4 months.",
        },
      ],
      urgency: "Companies implementing now will be 10x ahead by 2027.",
    },
    caseStudies: {
      title: "Measurable results in real operations",
      viewAll: "View all cases",
    },
    pain: {
      title: "If your operation relies on spreadsheets, there's risk",
      bullets: [
        "Delays from manual tasks",
        "Errors without traceability",
        "Decisions without full context",
      ],
    },
    solution: {
      title: "We don't deliver loose bots. We deliver operational infrastructure.",
      bullets: [
        "Interfaces, backend and APIs ready for daily use",
        "Agents connected to your systems and real data",
        "Audit, security and human checkpoints",
        "Vendor-agnostic architecture, no provider lock-in",
      ],
    },
    caseStudies: {
      title: "Measurable results in real operations",
      viewAll: "View all cases",
    },
    fourWeekMethod: {
      title: "From diagnosis to production in 4 weeks",
      weeks: [
        { week: "Week 1", label: "Diagnosis and scope" },
        { week: "Week 2", label: "Integration with systems and data" },
        { week: "Week 3", label: "Orchestration of agents and workflows" },
        { week: "Week 4", label: "Production deployment with monitoring" },
      ],
    },
    closing: {
      title: "Less friction. More execution.",
      subtitle: "In 30 minutes we show you what to automate first, expected impact and a realistic roadmap for your team.",
      ctaText: "Schedule diagnosis (30 min)",
      microcopy: "No lock-in | Guided implementation | Local support",
    },
    clients: {
      title: "Success cases",
      description: "Companies accelerating with agentic systems",
      viewAll: "View all cases",
      ecosuelolab: { title: "Ecosuelolab", desc: "Soil analysis automation" },
      despega: { title: "Despega Tu Carrera", desc: "Automatic profile processing" },
      blackswan: { title: "Blackswan", desc: "Integrated operational management" },
    },
    positioning: {
      title: "It's not just a chatbot. It's your infrastructure.",
      description: "We design, integrate and deploy intelligent systems that automate processes, connect data, make decisions and improve continuously.",
    },
    whatWeDo: {
      title: "What we build",
      subtitle: "Four layers that work together:",
      engineering: {
        title: "Interface and Backend",
        desc: "The platforms, dashboards and APIs your team uses every day.",
      },
      aiSystems: {
        title: "Operational Intelligence",
        desc: "Agents that understand your context, retrieve correct information and execute precise actions.",
      },
      automation: {
        title: "Real Connections",
        desc: "Your CRM, your database, Slack, WhatsApp, your internal systems... all connected seamlessly.",
      },
      infrastructure: {
        title: "Orchestration and Audit",
        desc: "Visual workflow, complete traceability, enterprise security and human checkpoints.",
      },
    },
    howWeThink: {
      title: "How we think",
      description: "An intelligent system is not an experiment. It's your operation.",
      insight: "That's why we start from your operational reality, not from a demo.",
    },
    architecture: {
      title: "The architecture that works",
      subtitle: "Four principles that guide every technical decision:",
      items: [
        "Agnostic: works on AWS, Google Cloud, Azure or On-Premise",
        "Observable: complete audit of every agent action",
        "Scalable: from 1 process to 50+ without structural changes",
        "Human-centric: critical decisions always require approval",
      ],
    },
    differentiator: {
      title: "It's not magic, it's engineering.",
      statement1: "Most AI solutions end up as POCs. We bring systems to production.",
      statement2: "Because we know retail, manufacturing, finance, health, legal and logistics. We know what makes an operation critical.",
    },
    forWho: {
      title: "For operations that cannot fail",
      description: "Retail, manufacturing, financial services, healthcare, legal, logistics. If you have critical processes and data, we can automate.",
    },
    quickTest: {
      title: "Three metrics that change the game",
      subtitle: "What you see in N3uralia intelligent systems",
      metrics: [
        { value: "-40%", label: "Processing time reduction" },
        { value: "24/7", label: "Operational continuity" },
        { value: "100%", label: "Stack integration" },
      ],
    },
    industries: {
      title: "Industries we serve",
      subtitle: "Deep automation for critical sectors",
      sectors: [
        { name: "Retail & E-commerce", desc: "24/7 support, inventory management" },
        { name: "Tourism & Hospitality", desc: "Smart bookings, recommendations" },
        { name: "Logistics & Supply Chain", desc: "Optimal routes, delivery forecasting" },
        { name: "Manufacturing", desc: "Quality control, predictive maintenance" },
        { name: "Financial Services", desc: "Automated KYC, compliance" },
        { name: "Mining & Resources", desc: "Predictive monitoring, optimization" },
      ],
    },
    security: {
      title: "Enterprise security and control",
      subtitle: "Trust embedded in every layer",
      pillars: [
        { title: "Complete traceability", desc: "Full audit trail of every agent decision" },
        { title: "Configurable policies", desc: "Set limits, exceptions and escalations" },
        { title: "Human oversight", desc: "Approvals required for critical decisions" },
        { title: "No lock-in", desc: "Your infrastructure, your terms" },
      ],
    },
    faq: {
      title: "Commercial FAQs",
      subtitle: "What our customers always ask",
      items: [
        {
          q: "How long does implementation take?",
          a: "Diagnosis to production in 4 weeks. Week 1: scope. Week 2: integration. Week 3: orchestration. Week 4: deploy with monitoring.",
        },
        {
          q: "What data do you need?",
          a: "Only critical data: processes, current data, auto-decisions vs. manual. We map it in Week 1.",
        },
        {
          q: "Who maintains the system?",
          a: "Your team with our support. We train, document, and scale as needed.",
        },
        {
          q: "Is it secure?",
          a: "Completely. Full audit, human controls on critical decisions, complies with local regulations.",
        },
      ],
    },
    finalCta: {
      headline: "If your operation cannot fail, let's talk.",
      subheadline: "30 minutes to show realistic impact and clear roadmap.",
      cta: "Schedule diagnosis",
    },
  },
  about: {
    whoWeAre: "Who we are",
    title: "N3uralia",
    description: "Agentic systems experts",
    ourWhy: "Why we exist",
    visionTitle: "Our vision",
    visionP1: "Frictionless operations",
    visionP2: "AI that executes, not just responds",
    visionP3: "Enterprise automation",
    ourPhilosophy: "Our philosophy",
    howWethinkDifferent: "How we think different",
    philosophy: [
      { num: "1", desc: "Complete systems, not loose bots" },
      { num: "2", desc: "Production before demos" },
      { num: "3", desc: "Human control always" },
      { num: "4", desc: "No provider lock-in" },
    ],
    ourApproach: "Our approach",
    howWeWork: "How we work",
    workingDaily: "Daily",
    values: [
      { title: "Quality", desc: "Production-ready systems" },
      { title: "Transparency", desc: "Complete traceability" },
      { title: "Trust", desc: "Local support" },
      { title: "Innovation", desc: "Agnostic and scalable" },
    ],
    closing: "Let's build together",
  },
  caseStudies: {
    title: "Success cases",
  },
  pillars: {
    infraTitle: "Infrastructure",
    infraDesc: "Complete and production-ready",
    agenticTitle: "Agentic Systems",
    agenticDesc: "Intelligence that executes",
  },
  agenticEngineering: {
    headline: "Agentic Engineering",
    subheadline: "Intelligent systems for critical operations",
    humanInLoop: { title: "Human in the loop", description: "Always in control" },
    toolAware: { title: "Tool aware", description: "Real integration" },
    vendorAgnostic: { title: "Vendor agnostic", description: "No lock-in" },
    builtToShip: { title: "Built to ship", description: "From day 1" },
    manifesto: [
      "Systems that work",
      "Complete architecture",
      "Verifiable decisions",
    ],
    philosophy: [
      { num: "1", desc: "Production is the goal" },
      { num: "2", desc: "Humans in control" },
      { num: "3", desc: "Complete traceability" },
      { num: "4", desc: "Vendor agnostic" },
    ],
    cta: "Get started",
  },
};

const DICTS: Record<"es" | "en", Dict> = {
  es: DICTS_ES,
  en: DICTS_EN,
};

export type Locale = keyof typeof DICTS;

export function getDict(locale: Locale): Dict {
  return DICTS[locale] || DICTS.es;
}
