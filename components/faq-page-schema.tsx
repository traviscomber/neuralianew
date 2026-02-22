export function FAQPageSchema() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué son los sistemas agenticos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los sistemas agenticos son arquitecturas de inteligencia artificial donde múltiples agentes autónomos trabajan juntos para resolver problemas complejos. Cada agente tiene capacidades especializadas, memoria persistente, y puede comunicarse con otros agentes para coordinar acciones. N3uralia proporciona frameworks production-ready para orquestar estos sistemas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuál es la diferencia entre Living Agents y otros sistemas de IA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Living Agents son agentes que evolucionan continuamente. Tienen memoria emergente, aprenden de interacciones previas, desarrollan personalidad adaptativa, y mejoran sus respuestas con el tiempo. A diferencia de simples chatbots, los Living Agents mantienen contexto histórico y pueden ajustar su comportamiento basado en patrones observados.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo se integran los sistemas agenticos con infraestructura legacy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "N3uralia proporciona conectores para sistemas legacy mediante APIs REST, webhooks, y adapters específicos. Nuestra arquitectura agnóstica permite integración sin disruption. El pipeline de orquestación maneja traducción de datos, transformación de formatos, y sincronización bidireccional con bases de datos existentes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué significa gobernanza en sistemas agenticos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gobernanza IA en N3uralia incluye: control granular de permisos por agente, auditoría completa de decisiones, límites de recursos, validación de outputs antes de ejecución, y compliance con normativas. Garantizamos que los agentes operan dentro de parámetros definidos sin riesgo de drift o comportamiento no autorizado.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo funciona la memoria persistente en Living Agents?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Los Living Agents de N3uralia tienen capas de memoria: corta plazo (conversación actual), medio plazo (contexto de sesión), y largo plazo (aprendizaje acumulativo). Cada interacción se persiste, se analiza para patrones, y se integra en el modelo mental del agente para futuras decisiones más precisas.",
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}
