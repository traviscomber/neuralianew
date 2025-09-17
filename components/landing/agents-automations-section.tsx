"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function AgentsAutomationsSection() {
  const { language } = useLanguage()
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const content = {
    en: {
      title: "Agents and Automations",
      subtitle: "N3uralia's AI Agents understand your business context and ready to deliver personalized experiences.",
      visitButton: "Visit Nano Agency",
      requestButton: "Request custom agent",
      readMore: "Read more",
      readLess: "Read less",
      agents: [
        {
          title: "Lead Qualification",
          icon: "/icons/lead-qualification.png",
          description:
            "Automatically filters, scores, and engages incoming leads based on your ideal customer profile.",
        },
        {
          title: "Customer Support",
          icon: "/icons/customer-support.png",
          description: "Instantly answers FAQs, handles tickets, and escalates complex issues—24/7 and multilingual.",
        },
        {
          title: "Content Creator",
          icon: "/icons/content-creator.png",
          description: "Generates SEO blog posts, social media content, and email campaigns based on your brand tone.",
        },
        {
          title: "Data Entry Assistant",
          icon: "/icons/data-entry-assistant.png",
          description: "Extracts, formats, and organizes messy data across Google Sheets, Notion, CRMs, and more.",
        },
        {
          title: "AI Sales Assistant",
          icon: "/icons/ai-sales-assistant.png",
          description:
            "Books meetings, writes cold emails, and follows up with prospects intelligently using CRM data.",
        },
        {
          title: "Workflow Automation",
          icon: "/icons/workflow-automation.png",
          description:
            "Connects tools like Slack, Notion, WhatsApp, and Airtable—executing tasks across them with logic and memory.",
        },
      ],
    },
    es: {
      title: "Agentes y Automatizaciones",
      subtitle:
        "Los Agentes de IA de N3uralia entienden el contexto de tu negocio y están listos para brindar experiencias personalizadas.",
      visitButton: "Visitar Nano Agency",
      requestButton: "Solicitar agente personalizado",
      readMore: "Leer más",
      readLess: "Leer menos",
      agents: [
        {
          title: "Calificación de Leads",
          icon: "/icons/lead-qualification.png",
          description:
            "Filtra, califica y contacta automáticamente leads entrantes basándose en tu perfil de cliente ideal.",
        },
        {
          title: "Soporte al Cliente",
          icon: "/icons/customer-support.png",
          description:
            "Responde instantáneamente FAQs, maneja tickets y escala problemas complejos—24/7 y multilingüe.",
        },
        {
          title: "Creador de Contenido",
          icon: "/icons/content-creator.png",
          description:
            "Genera posts de blog SEO, contenido de redes sociales y campañas de email basadas en el tono de tu marca.",
        },
        {
          title: "Asistente de Entrada de Datos",
          icon: "/icons/data-entry-assistant.png",
          description: "Extrae, formatea y organiza datos desordenados en Google Sheets, Notion, CRMs y más.",
        },
        {
          title: "Asistente de Ventas IA",
          icon: "/icons/ai-sales-assistant.png",
          description:
            "Agenda reuniones, escribe emails fríos y hace seguimiento inteligente de prospectos usando datos de CRM.",
        },
        {
          title: "Automatización de Flujos",
          icon: "/icons/workflow-automation.png",
          description:
            "Conecta herramientas como Slack, Notion, WhatsApp y Airtable—ejecutando tareas entre ellas con lógica y memoria.",
        },
      ],
    },
  }

  const t = content[language]

  const openWhatsApp = () => {
    const message =
      language === "es"
        ? "Hola, me interesa solicitar un agente personalizado de IA para mi negocio"
        : "Hello, I'm interested in requesting a custom AI agent for my business"
    window.open(`https://wa.me/56940946660?text=${encodeURIComponent(message)}`, "_blank")
  }

  const visitNanoAgency = () => {
    window.open("https://nano.agency", "_blank")
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-8">{t.title}</h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {t.agents.map((agent, index) => {
            const isHovered = hoveredCard === index

            return (
              <div
                key={index}
                className="relative h-80 perspective-1000"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isHovered ? "rotate-y-180" : ""}`}
                >
                  {/* Front Card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white/90 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-xl border border-white/20">
                    <img
                      src={agent.icon || "/placeholder.svg"}
                      alt={agent.title}
                      className="w-16 h-16 mb-6 object-contain"
                    />
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{agent.title}</h3>
                    <p className="text-gray-600 font-medium">{t.readMore}</p>
                  </div>

                  {/* Back Card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-black/90 backdrop-blur-sm rounded-2xl p-8 flex flex-col justify-center text-center shadow-xl border border-white/20">
                    <p className="text-white text-lg leading-relaxed mb-6">{agent.description}</p>
                    <p className="text-gray-300 font-medium">{t.readLess}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Subtitle and Buttons */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed">{t.subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              onClick={visitNanoAgency}
              size="lg"
              className="px-12 py-4 text-lg bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-all duration-300 hover:scale-105"
            >
              {t.visitButton}
            </Button>

            <Button
              onClick={openWhatsApp}
              size="lg"
              className="px-12 py-4 text-lg bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-all duration-300 hover:scale-105"
            >
              {t.requestButton}
            </Button>
          </div>
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
      `}</style>
    </section>
  )
}
