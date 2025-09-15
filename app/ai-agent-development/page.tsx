"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/landing/footer"
import { LanguageProvider } from "@/lib/language-context"
import { useLanguage } from "@/lib/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bot, MessageSquare, Zap, Shield, Users, BarChart3, ArrowRight, MessageCircle, Mail } from "lucide-react"

function AIAgentDevelopmentContent() {
  const { language } = useLanguage()

  const content = {
    en: {
      hero: {
        badge: "AI Agent Development",
        title: "Custom AI Agents Built for Your Business",
        subtitle:
          "Transform your operations with intelligent AI agents that understand your business, automate complex processes, and deliver exceptional results 24/7.",
        cta: {
          primary: "Start Your Project",
          secondary: "View Case Studies",
        },
      },
      features: {
        title: "Why Choose Our AI Agent Development",
        subtitle:
          "We build AI agents that go beyond simple chatbots - intelligent systems that truly understand and adapt to your business needs.",
        items: [
          {
            icon: Bot,
            title: "Custom AI Training",
            description:
              "Agents trained specifically on your business data, processes, and industry knowledge for maximum accuracy and relevance.",
          },
          {
            icon: MessageSquare,
            title: "Natural Conversations",
            description:
              "Human-like interactions that understand context, intent, and nuance in multiple languages with cultural awareness.",
          },
          {
            icon: Zap,
            title: "Real-time Processing",
            description:
              "Lightning-fast response times under 200ms ensuring seamless customer experiences and instant problem resolution.",
          },
          {
            icon: Shield,
            title: "Enterprise Security",
            description:
              "Bank-level encryption, SOC 2 compliance, and advanced security protocols to protect your sensitive business data.",
          },
          {
            icon: Users,
            title: "Multi-channel Integration",
            description:
              "Deploy across WhatsApp, Telegram, web chat, email, voice, and integrate with your existing business systems.",
          },
          {
            icon: BarChart3,
            title: "Advanced Analytics",
            description:
              "Comprehensive insights into performance, customer behavior, and business metrics with real-time dashboards.",
          },
        ],
      },
      process: {
        title: "Our Development Process",
        subtitle:
          "From concept to deployment, we follow a proven methodology that ensures your AI agent delivers exceptional results.",
        steps: [
          {
            number: "01",
            title: "Discovery & Analysis",
            description:
              "We analyze your business processes, customer interactions, and specific requirements to design the perfect AI solution.",
          },
          {
            number: "02",
            title: "Custom Training",
            description:
              "Your AI agent is trained on your specific data, industry knowledge, and business rules for maximum accuracy.",
          },
          {
            number: "03",
            title: "Integration & Testing",
            description:
              "Seamless integration with your existing systems followed by comprehensive testing to ensure optimal performance.",
          },
          {
            number: "04",
            title: "Deployment & Optimization",
            description:
              "Launch your AI agent with ongoing monitoring, optimization, and continuous learning capabilities.",
          },
        ],
      },
      benefits: {
        title: "Transform Your Business Operations",
        subtitle:
          "See the measurable impact AI agents can have on your business performance and customer satisfaction.",
        items: [
          { metric: "85%", label: "Reduction in Response Time" },
          { metric: "60%", label: "Cost Savings" },
          { metric: "95%", label: "Customer Satisfaction" },
          { metric: "24/7", label: "Availability" },
        ],
      },
      cta: {
        title: "Ready to Build Your Custom AI Agent?",
        subtitle:
          "Join hundreds of businesses that have transformed their operations with our intelligent AI solutions.",
        button: "Get Started Today",
      },
    },
    es: {
      hero: {
        badge: "Desarrollo de Agentes de IA",
        title: "Agentes de IA Personalizados Construidos para Tu Negocio",
        subtitle:
          "Transforma tus operaciones con agentes de IA inteligentes que entienden tu negocio, automatizan procesos complejos y entregan resultados excepcionales 24/7.",
        cta: {
          primary: "Iniciar Tu Proyecto",
          secondary: "Ver Casos de Estudio",
        },
      },
      features: {
        title: "Por Qué Elegir Nuestro Desarrollo de Agentes de IA",
        subtitle:
          "Construimos agentes de IA que van más allá de simples chatbots - sistemas inteligentes que verdaderamente entienden y se adaptan a las necesidades de tu negocio.",
        items: [
          {
            icon: Bot,
            title: "Entrenamiento de IA Personalizado",
            description:
              "Agentes entrenados específicamente en los datos, procesos y conocimiento de tu industria para máxima precisión y relevancia.",
          },
          {
            icon: MessageSquare,
            title: "Conversaciones Naturales",
            description:
              "Interacciones similares a las humanas que entienden contexto, intención y matices en múltiples idiomas con conciencia cultural.",
          },
          {
            icon: Zap,
            title: "Procesamiento en Tiempo Real",
            description:
              "Tiempos de respuesta ultra rápidos bajo 200ms asegurando experiencias de cliente fluidas y resolución instantánea de problemas.",
          },
          {
            icon: Shield,
            title: "Seguridad Empresarial",
            description:
              "Encriptación de nivel bancario, cumplimiento SOC 2 y protocolos de seguridad avanzados para proteger tus datos empresariales sensibles.",
          },
          {
            icon: Users,
            title: "Integración Multicanal",
            description:
              "Despliega a través de WhatsApp, Telegram, chat web, email, voz e integra con tus sistemas empresariales existentes.",
          },
          {
            icon: BarChart3,
            title: "Análisis Avanzado",
            description:
              "Insights comprehensivos sobre rendimiento, comportamiento del cliente y métricas empresariales con dashboards en tiempo real.",
          },
        ],
      },
      process: {
        title: "Nuestro Proceso de Desarrollo",
        subtitle:
          "Del concepto al despliegue, seguimos una metodología probada que asegura que tu agente de IA entregue resultados excepcionales.",
        steps: [
          {
            number: "01",
            title: "Descubrimiento y Análisis",
            description:
              "Analizamos tus procesos empresariales, interacciones con clientes y requisitos específicos para diseñar la solución de IA perfecta.",
          },
          {
            number: "02",
            title: "Entrenamiento Personalizado",
            description:
              "Tu agente de IA es entrenado en tus datos específicos, conocimiento de la industria y reglas empresariales para máxima precisión.",
          },
          {
            number: "03",
            title: "Integración y Pruebas",
            description:
              "Integración perfecta con tus sistemas existentes seguida de pruebas comprehensivas para asegurar rendimiento óptimo.",
          },
          {
            number: "04",
            title: "Despliegue y Optimización",
            description:
              "Lanza tu agente de IA con monitoreo continuo, optimización y capacidades de aprendizaje continuo.",
          },
        ],
      },
      benefits: {
        title: "Transforma las Operaciones de Tu Negocio",
        subtitle:
          "Ve el impacto medible que los agentes de IA pueden tener en el rendimiento de tu negocio y satisfacción del cliente.",
        items: [
          { metric: "85%", label: "Reducción en Tiempo de Respuesta" },
          { metric: "60%", label: "Ahorro de Costos" },
          { metric: "95%", label: "Satisfacción del Cliente" },
          { metric: "24/7", label: "Disponibilidad" },
        ],
      },
      cta: {
        title: "¿Listo para Construir Tu Agente de IA Personalizado?",
        subtitle:
          "Únete a cientos de negocios que han transformado sus operaciones con nuestras soluciones inteligentes de IA.",
        button: "Comenzar Hoy",
      },
    },
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-2 text-sm font-medium bg-black/5 text-black border-black/10">
              {t.hero.badge}
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">{t.hero.title}</h1>

            <p className="text-xl text-gray-600 mb-12 leading-relaxed">{t.hero.subtitle}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold"
                asChild
              >
                <a
                  href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20desarrollar%20un%20agente%20de%20IA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t.hero.cta.primary}
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-semibold bg-transparent"
                asChild
              >
                <a href="/case-studies">
                  {t.hero.cta.secondary}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">{t.features.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.features.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.items.map((feature, index) => (
              <Card
                key={index}
                className="border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-black">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">{t.process.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.process.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.process.steps.map((step, index) => (
              <Card
                key={index}
                className="border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg bg-white"
              >
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-black mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-black mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">{t.benefits.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.benefits.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.benefits.items.map((benefit, index) => (
              <Card
                key={index}
                className="border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg text-center"
              >
                <CardContent className="p-8">
                  <div className="text-4xl md:text-5xl font-bold text-black mb-4">{benefit.metric}</div>
                  <div className="text-gray-600 font-medium">{benefit.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.cta.title}</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">{t.cta.subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-black px-8 py-4 text-lg font-semibold" asChild>
              <a
                href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20comenzar%20mi%20proyecto%20de%20IA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {t.cta.button}
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold bg-transparent"
              asChild
            >
              <a href="mailto:hello@n3uralia.com?subject=AI Agent Development Inquiry">
                <Mail className="mr-2 h-5 w-5" />
                {language === "en" ? "Email Us" : "Enviar Email"}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function AIAgentDevelopmentPage() {
  return (
    <LanguageProvider>
      <Navigation />
      <AIAgentDevelopmentContent />
      <Footer />
    </LanguageProvider>
  )
}
