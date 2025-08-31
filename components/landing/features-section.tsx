"use client"
import { Brain, MessageSquare, Zap, Shield, Globe, Smartphone } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Conexión Emocional Real",
    description:
      "Nuestras IAs detectan frustración, celebran logros contigo y ofrecen apoyo personalizado. Como un asistente que realmente te entiende.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    details: [
      "Análisis de sentimientos en tiempo real",
      "Respuestas empáticas contextualizadas",
      "Memoria emocional de conversaciones",
      "Adaptación al estado de ánimo del usuario",
    ],
  },
  {
    icon: MessageSquare,
    title: "Integración API Completa",
    description:
      "EcosueloLab se conecta a APIs de análisis de suelo, Parrotfy consulta endpoints ERP, todo con WhatsApp vía Twilio.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    details: [
      "APIs REST y GraphQL nativas",
      "WhatsApp Business API + Twilio",
      "Webhooks para datos en tiempo real",
      "Integración ERP y sistemas legacy",
    ],
  },
  {
    icon: Zap,
    title: "Agentes Especializados",
    description:
      "Cada IA tiene expertise único: suelos y agricultura, coaching profesional, análisis de negocio. No son chatbots genéricos.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
    details: [
      "Modelos fine-tuned por industria",
      "Base de conocimiento especializada",
      "Terminología técnica precisa",
      "Casos de uso específicos optimizados",
    ],
  },
  {
    icon: Globe,
    title: "Multiidioma Nativo",
    description:
      "Español chileno natural, jerga empresarial, contexto cultural. Hablan como tus colegas, no como robots traducidos.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    textColor: "text-orange-700",
    details: [
      "Español chileno con modismos",
      "Contexto cultural latinoamericano",
      "Jerga técnica por industria",
      "Adaptación regional automática",
    ],
  },
  {
    icon: Smartphone,
    title: "Conversación Multi-Canal",
    description:
      "WhatsApp, web, integración directa en ERP. La misma IA, donde la necesites, con memoria completa de contexto.",
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-700",
    details: [
      "WhatsApp Business integrado",
      "Widget web responsive",
      "APIs para integración ERP",
      "Sincronización cross-platform",
    ],
  },
  {
    icon: Shield,
    title: "Memoria Contextual",
    description:
      "Como un asistente personal que te conoce. Recuerda tus preferencias, historial y objetivos a largo plazo.",
    color: "from-teal-500 to-green-500",
    bgColor: "bg-teal-50",
    textColor: "text-teal-700",
    details: [
      "Historial conversacional persistente",
      "Perfiles de usuario dinámicos",
      "Preferencias y patrones de uso",
      "Contexto empresarial y personal",
    ],
  },
]

// Tech Stack Icons
const techStack = [
  { name: "Next.js", icon: "⚡" },
  { name: "TypeScript", icon: "📘" },
  { name: "Supabase", icon: "🗄️" },
  { name: "OpenAI GPT-4", icon: "🧠" },
  { name: "Twilio", icon: "📱" },
  { name: "WhatsApp", icon: "💬" },
  { name: "Vercel", icon: "▲" },
  { name: "PostgreSQL", icon: "🐘" },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">¿Por qué Neuralia es diferente?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No somos otro chatbot. Somos asistentes especializados que entienden tu industria, hablan tu idioma y se
            conectan a tus sistemas reales.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} mb-6`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

                {/* Details */}
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.color} mt-2 mr-3 flex-shrink-0`}
                      />
                      <span className="text-sm text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />
              </div>
            )
          })}
        </div>

        {/* Tech Stack */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Tecnología de Vanguardia</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <span className="text-lg">{tech.icon}</span>
                <span className="text-sm font-medium text-gray-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
