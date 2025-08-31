import { Brain, MessageSquare, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "IA que Te Entiende",
      description:
        "No es ChatGPT genérico. Creamos agentes especializados que conocen tu negocio, tus procesos y hablan como tu empresa.",
    },
    {
      icon: MessageSquare,
      title: "Integración Real",
      description:
        "No chatbots flotantes. Conectamos directamente con tus sistemas: CRM, ERP, bases de datos, APIs y WhatsApp Business.",
    },
    {
      icon: Zap,
      title: "Sistema Completo",
      description:
        "Full stack IA: desde el frontend que ven tus clientes hasta el backend que procesa datos. Todo integrado, todo funcionando.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ¿Por qué Neuralia es diferente?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Mientras otros ofrecen chatbots básicos, nosotros construimos sistemas completos de IA que transforman tu
            negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
