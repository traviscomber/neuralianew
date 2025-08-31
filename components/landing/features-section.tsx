import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, MessageSquare, BarChart3, Shield, Zap, Globe, Users, Settings, Clock } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "IA Conversacional Avanzada",
      description: "Agentes que comprenden contexto y mantienen conversaciones naturales con tus clientes",
      badge: "GPT-4 Powered",
    },
    {
      icon: MessageSquare,
      title: "Integración Multicanal",
      description: "Conecta con WhatsApp, web chat, email y más plataformas desde una sola interfaz",
      badge: "15+ Canales",
    },
    {
      icon: BarChart3,
      title: "Analytics en Tiempo Real",
      description: "Monitorea el rendimiento de tus agentes con métricas detalladas y insights accionables",
      badge: "Dashboard Live",
    },
    {
      icon: Shield,
      title: "Seguridad Empresarial",
      description: "Protección de datos de nivel bancario con encriptación end-to-end y compliance GDPR",
      badge: "ISO 27001",
    },
    {
      icon: Zap,
      title: "Automatización Inteligente",
      description: "Workflows que se adaptan y aprenden de cada interacción para mejorar continuamente",
      badge: "Auto-Learning",
    },
    {
      icon: Globe,
      title: "Soporte Multiidioma",
      description: "Agentes que hablan más de 50 idiomas con comprensión cultural y contextual",
      badge: "50+ Idiomas",
    },
    {
      icon: Users,
      title: "Colaboración en Equipo",
      description: "Herramientas para que tu equipo colabore en el entrenamiento y mejora de agentes",
      badge: "Team Ready",
    },
    {
      icon: Settings,
      title: "Personalización Total",
      description: "Adapta la personalidad, tono y conocimiento de cada agente a tu marca",
      badge: "No-Code",
    },
    {
      icon: Clock,
      title: "Disponibilidad 24/7",
      description: "Tus agentes nunca duermen, proporcionando soporte continuo a tus clientes",
      badge: "Always On",
    },
  ]

  return (
    <section id="features" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Características</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Todo lo que necesitas para crear agentes IA exitosos
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nuestra plataforma incluye todas las herramientas y funcionalidades que necesitas para construir, desplegar
            y escalar agentes de IA que realmente transformen tu negocio.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="secondary">{feature.badge}</Badge>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
