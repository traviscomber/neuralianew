"use client"

import { useLanguage } from "@/lib/language-context"

export function AgentsAutomationsSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Agents and Automations",
      subtitle: "AI-Powered Solutions for Every Business Need",
      description:
        "Discover our comprehensive suite of AI agents designed to streamline your operations and boost productivity.",
      agents: [
        {
          title: "Lead Qualification Agent",
          description:
            "Automatically qualify and score leads based on predefined criteria, ensuring your sales team focuses on the most promising prospects.",
          features: ["Smart lead scoring", "Automated follow-ups", "CRM integration", "Real-time analytics"],
          icon: "/icons/lead-qualification.png",
        },
        {
          title: "Customer Support Agent",
          description:
            "Provide 24/7 customer support with intelligent responses, ticket routing, and escalation management.",
          features: ["24/7 availability", "Multi-language support", "Ticket management", "Knowledge base integration"],
          icon: "/icons/customer-support.png",
        },
        {
          title: "Content Creation Agent",
          description:
            "Generate high-quality content for marketing campaigns, social media, and documentation with AI assistance.",
          features: ["Multi-format content", "Brand voice consistency", "SEO optimization", "Content scheduling"],
          icon: "/icons/content-creator.png",
        },
        {
          title: "Data Entry Assistant",
          description: "Automate data entry tasks with high accuracy, reducing manual work and minimizing errors.",
          features: ["OCR capabilities", "Data validation", "Multiple formats", "Error detection"],
          icon: "/icons/data-entry-assistant.png",
        },
        {
          title: "AI Sales Assistant",
          description:
            "Enhance your sales process with intelligent lead nurturing, proposal generation, and deal tracking.",
          features: ["Lead nurturing", "Proposal automation", "Deal tracking", "Performance analytics"],
          icon: "/icons/ai-sales-assistant.png",
        },
        {
          title: "Workflow Automation",
          description:
            "Streamline complex business processes with intelligent workflow automation and task management.",
          features: ["Process optimization", "Task automation", "Integration capabilities", "Performance monitoring"],
          icon: "/icons/workflow-automation.png",
        },
      ],
    },
    es: {
      title: "Agentes y Automatizaciones",
      subtitle: "Soluciones Impulsadas por IA para Cada Necesidad Empresarial",
      description:
        "Descubre nuestra suite completa de agentes de IA diseñados para optimizar tus operaciones y aumentar la productividad.",
      agents: [
        {
          title: "Agente de Calificación de Leads",
          description:
            "Califica y puntúa automáticamente los leads basándose en criterios predefinidos, asegurando que tu equipo de ventas se enfoque en los prospectos más prometedores.",
          features: [
            "Puntuación inteligente de leads",
            "Seguimientos automatizados",
            "Integración CRM",
            "Análisis en tiempo real",
          ],
          icon: "/icons/lead-qualification.png",
        },
        {
          title: "Agente de Soporte al Cliente",
          description:
            "Proporciona soporte al cliente 24/7 con respuestas inteligentes, enrutamiento de tickets y gestión de escalaciones.",
          features: [
            "Disponibilidad 24/7",
            "Soporte multiidioma",
            "Gestión de tickets",
            "Integración base de conocimientos",
          ],
          icon: "/icons/customer-support.png",
        },
        {
          title: "Agente de Creación de Contenido",
          description:
            "Genera contenido de alta calidad para campañas de marketing, redes sociales y documentación con asistencia de IA.",
          features: [
            "Contenido multiformato",
            "Consistencia de voz de marca",
            "Optimización SEO",
            "Programación de contenido",
          ],
          icon: "/icons/content-creator.png",
        },
        {
          title: "Asistente de Entrada de Datos",
          description:
            "Automatiza tareas de entrada de datos con alta precisión, reduciendo el trabajo manual y minimizando errores.",
          features: ["Capacidades OCR", "Validación de datos", "Múltiples formatos", "Detección de errores"],
          icon: "/icons/data-entry-assistant.png",
        },
        {
          title: "Asistente de Ventas IA",
          description:
            "Mejora tu proceso de ventas con nutrición inteligente de leads, generación de propuestas y seguimiento de tratos.",
          features: [
            "Nutrición de leads",
            "Automatización de propuestas",
            "Seguimiento de tratos",
            "Análisis de rendimiento",
          ],
          icon: "/icons/ai-sales-assistant.png",
        },
        {
          title: "Automatización de Flujos de Trabajo",
          description:
            "Optimiza procesos empresariales complejos con automatización inteligente de flujos de trabajo y gestión de tareas.",
          features: [
            "Optimización de procesos",
            "Automatización de tareas",
            "Capacidades de integración",
            "Monitoreo de rendimiento",
          ],
          icon: "/icons/workflow-automation.png",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6">{t.title}</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-600 mb-8">{t.subtitle}</h3>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">{t.description}</p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {t.agents.map((agent, index) => (
            <div key={index} className="group perspective-1000">
              <div className="relative w-full h-96 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                {/* Front of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-2xl shadow-lg border border-gray-200 p-8 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 mb-6 flex items-center justify-center">
                    <img
                      src={agent.icon || "/placeholder.svg"}
                      alt={agent.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{agent.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{agent.description}</p>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl shadow-lg p-8 flex flex-col justify-center text-white">
                  <h3 className="text-2xl font-bold mb-6 text-center">{agent.title}</h3>
                  <ul className="space-y-3">
                    {agent.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 text-center">
                    <a
                      href={`https://wa.me/56940946660?text=${encodeURIComponent(`Hola, me interesa el ${agent.title}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
                    >
                      Consultar por WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  )
}
