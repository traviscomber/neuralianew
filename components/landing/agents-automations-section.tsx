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
          shortDescription: "Smart lead scoring and automated follow-ups",
          fullDescription:
            "Automatically filters, scores, and engages incoming leads based on your ideal customer profile.",
          features: ["Smart lead scoring", "Automated follow-ups", "CRM integration", "Real-time analytics"],
          icon: "/icons/lead-qualification.png",
        },
        {
          title: "Customer Support Agent",
          shortDescription: "24/7 multilingual customer support",
          fullDescription:
            "Instantly answers FAQs, handles tickets, and escalates complex issues—24/7 and multilingual.",
          features: ["24/7 availability", "Multi-language support", "Ticket management", "Knowledge base integration"],
          icon: "/icons/customer-support.png",
        },
        {
          title: "Content Creation Agent",
          shortDescription: "SEO-optimized content generation",
          fullDescription:
            "Generates SEO blog posts, social media content, and email campaigns based on your brand tone.",
          features: ["Multi-format content", "Brand voice consistency", "SEO optimization", "Content scheduling"],
          icon: "/icons/content-creator.png",
        },
        {
          title: "Data Entry Assistant",
          shortDescription: "Automated data extraction and organization",
          fullDescription: "Extracts, formats, and organizes messy data across Google Sheets, Notion, CRMs, and more.",
          features: ["OCR capabilities", "Data validation", "Multiple formats", "Error detection"],
          icon: "/icons/data-entry-assistant.png",
        },
        {
          title: "AI Sales Assistant",
          shortDescription: "Intelligent sales process automation",
          fullDescription:
            "Books meetings, writes cold emails, and follows up with prospects intelligently using CRM data.",
          features: ["Lead nurturing", "Proposal automation", "Deal tracking", "Performance analytics"],
          icon: "/icons/ai-sales-assistant.png",
        },
        {
          title: "Workflow Automation",
          shortDescription: "Cross-platform task automation",
          fullDescription:
            "Connects tools like Slack, Notion, WhatsApp, and Airtable—executing tasks across them with logic and memory.",
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
          shortDescription: "Puntuación inteligente y seguimientos automatizados",
          fullDescription:
            "Filtra, puntúa y compromete automáticamente los leads entrantes basándose en tu perfil de cliente ideal.",
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
          shortDescription: "Soporte al cliente 24/7 multiidioma",
          fullDescription:
            "Responde instantáneamente preguntas frecuentes, maneja tickets y escala problemas complejos—24/7 y multiidioma.",
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
          shortDescription: "Generación de contenido optimizado para SEO",
          fullDescription:
            "Genera posts de blog SEO, contenido de redes sociales y campañas de email basadas en el tono de tu marca.",
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
          shortDescription: "Extracción y organización automatizada de datos",
          fullDescription:
            "Extrae, formatea y organiza datos desordenados a través de Google Sheets, Notion, CRMs y más.",
          features: ["Capacidades OCR", "Validación de datos", "Múltiples formatos", "Detección de errores"],
          icon: "/icons/data-entry-assistant.png",
        },
        {
          title: "Asistente de Ventas IA",
          shortDescription: "Automatización inteligente del proceso de ventas",
          fullDescription:
            "Agenda reuniones, escribe emails fríos y hace seguimiento con prospectos inteligentemente usando datos CRM.",
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
          shortDescription: "Automatización de tareas multiplataforma",
          fullDescription:
            "Conecta herramientas como Slack, Notion, WhatsApp y Airtable—ejecutando tareas entre ellas con lógica y memoria.",
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
    <section className="relative min-h-screen">
      {/* Header Section with Light Gray Background */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-700 mb-6">{t.title}</h2>
        </div>
      </div>

      {/* Main Content with High Resolution Cosmic Background */}
      <div className="relative py-20 min-h-screen">
        {/* High Resolution Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url('/cosmic-background.jpeg')`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundAttachment: "fixed",
            filter: "brightness(0.9) contrast(1.2)",
          }}
        />

        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Geometric Network Overlay */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.3)" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <line x1="0" y1="0" x2="100" y2="100" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                <line x1="100" y1="0" x2="0" y2="100" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network)" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          {/* Agents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {t.agents.map((agent, index) => (
              <div key={index} className="group perspective-1000">
                <div className="relative w-full h-96 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                  {/* Front of card with 20% transparency */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/60 p-8 flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 mb-6 flex items-center justify-center">
                      <img
                        src={agent.icon || "/placeholder.svg"}
                        alt={agent.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{agent.title}</h3>
                    <p className="text-gray-700 leading-relaxed font-medium">{agent.shortDescription}</p>
                  </div>

                  {/* Back of card with 30% transparency */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-black/70 backdrop-blur-md rounded-2xl border border-white/20 p-8 flex flex-col justify-center text-white">
                    <h3 className="text-xl font-bold mb-4 text-center">{agent.title}</h3>
                    <p className="text-white/95 leading-relaxed mb-6 font-medium">{agent.fullDescription}</p>
                    <ul className="space-y-2 mb-6">
                      {agent.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-white/90 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-center">
                      <a
                        href={`https://wa.me/56940946660?text=${encodeURIComponent(`Hola, me interesa el ${agent.title}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-white/95 text-black rounded-full font-semibold hover:bg-white transition-colors duration-300 text-sm shadow-lg"
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

        {/* Floating Network Nodes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-pink-400 rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-70 animation-delay-3000"></div>
          <div className="absolute top-1/2 left-1/6 w-3 h-3 bg-teal-400 rounded-full animate-pulse opacity-45 animation-delay-4000"></div>
          <div className="absolute top-3/4 right-1/6 w-2 h-2 bg-indigo-400 rounded-full animate-pulse opacity-55 animation-delay-5000"></div>
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
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-5000 {
          animation-delay: 5s;
        }
      `}</style>
    </section>
  )
}
