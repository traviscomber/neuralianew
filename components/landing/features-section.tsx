"use client"
import { Brain, MessageSquare, Zap } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "IA que Te Entiende",
    description: "No es un chatbot genérico. Cada IA está entrenada para tu industria específica y habla tu idioma.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: MessageSquare,
    title: "Integración Real",
    description: "Se conecta a tus sistemas: CRM, ERP, WhatsApp Business. Datos reales, respuestas reales.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Sistema Completo",
    description: "Full stack: base de datos, IA, interfaz. Todo funciona junto, todo está incluido.",
    color: "from-green-500 to-emerald-500",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Por qué Neuralia?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sistemas completos de IA, no solo chatbots. Integración real con tus datos.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} mb-6`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
