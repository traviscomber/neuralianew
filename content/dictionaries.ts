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
  },
};

export function getDict(locale: Locale) {
  return DICTS[locale];
}
