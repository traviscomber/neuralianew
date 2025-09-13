"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import {
  Bot,
  MessageSquare,
  Zap,
  BarChart3,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Brain,
  Target,
  Settings,
  Database,
  TrendingUp,
} from "lucide-react"

export default function AIAgentDevelopmentPage() {
  const { language } = useLanguage()

  const features = [
    {
      icon: Brain,
      title: language === "en" ? "Advanced AI Models" : "Modelos IA Avanzados",
      description:
        language === "en"
          ? "GPT-4 powered agents with custom training for your specific industry and use cases"
          : "Agentes potenciados por GPT-4 con entrenamiento personalizado para tu industria y casos de uso específicos",
    },
    {
      icon: MessageSquare,
      title: language === "en" ? "Natural Conversations" : "Conversaciones Naturales",
      description:
        language === "en"
          ? "Human-like interactions that understand context, intent, and maintain conversation flow"
          : "Interacciones similares a humanos que entienden contexto, intención y mantienen el flujo conversacional",
    },
    {
      icon: Database,
      title: language === "en" ? "Knowledge Integration" : "Integración de Conocimiento",
      description:
        language === "en"
          ? "Seamless integration with your existing databases, documents, and knowledge systems"
          : "Integración perfecta con tus bases de datos, documentos y sistemas de conocimiento existentes",
    },
    {
      icon: Settings,
      title: language === "en" ? "Custom Workflows" : "Flujos Personalizados",
      description:
        language === "en"
          ? "Tailored conversation flows and business logic specific to your operational needs"
          : "Flujos de conversación y lógica de negocio adaptados a tus necesidades operacionales específicas",
    },
    {
      icon: Shield,
      title: language === "en" ? "Enterprise Security" : "Seguridad Empresarial",
      description:
        language === "en"
          ? "Bank-level security with encryption, compliance, and data protection standards"
          : "Seguridad nivel bancario con encriptación, cumplimiento y estándares de protección de datos",
    },
    {
      icon: BarChart3,
      title: language === "en" ? "Analytics & Insights" : "Análisis e Insights",
      description:
        language === "en"
          ? "Comprehensive analytics dashboard with conversation insights and performance metrics"
          : "Dashboard de análisis integral con insights de conversación y métricas de rendimiento",
    },
  ]

  const benefits = [
    {
      icon: Clock,
      title: language === "en" ? "24/7 Availability" : "Disponibilidad 24/7",
      description:
        language === "en"
          ? "Your AI agents work around the clock, providing instant responses to customers and employees"
          : "Tus agentes IA trabajan las 24 horas, proporcionando respuestas instantáneas a clientes y empleados",
      metric: language === "en" ? "100% Uptime" : "100% Tiempo Activo",
    },
    {
      icon: TrendingUp,
      title: language === "en" ? "Scalable Operations" : "Operaciones Escalables",
      description:
        language === "en"
          ? "Handle thousands of simultaneous conversations without additional staffing costs"
          : "Maneja miles de conversaciones simultáneas sin costos adicionales de personal",
      metric: language === "en" ? "10,000+ Concurrent Users" : "10,000+ Usuarios Concurrentes",
    },
    {
      icon: Target,
      title: language === "en" ? "Precision Accuracy" : "Precisión Exacta",
      description:
        language === "en"
          ? "Industry-specific training ensures accurate responses and proper context understanding"
          : "Entrenamiento específico de industria asegura respuestas precisas y comprensión adecuada del contexto",
      metric: language === "en" ? "95%+ Accuracy" : "95%+ Precisión",
    },
    {
      icon: Zap,
      title: language === "en" ? "Instant Deployment" : "Despliegue Instantáneo",
      description:
        language === "en"
          ? "Quick implementation with minimal disruption to your existing business processes"
          : "Implementación rápida con mínima interrupción a tus procesos de negocio existentes",
      metric: language === "en" ? "2-4 Week Setup" : "Configuración 2-4 Semanas",
    },
  ]

  const useCases = [
    {
      title: language === "en" ? "Customer Support" : "Soporte al Cliente",
      description:
        language === "en"
          ? "Automated customer service with escalation to human agents when needed"
          : "Servicio al cliente automatizado con escalación a agentes humanos cuando sea necesario",
      features: [
        language === "en" ? "Ticket resolution" : "Resolución de tickets",
        language === "en" ? "FAQ automation" : "Automatización de FAQ",
        language === "en" ? "Multi-language support" : "Soporte multiidioma",
        language === "en" ? "Sentiment analysis" : "Análisis de sentimientos",
      ],
    },
    {
      title: language === "en" ? "Sales Assistant" : "Asistente de Ventas",
      description:
        language === "en"
          ? "Lead qualification, product recommendations, and sales process automation"
          : "Calificación de leads, recomendaciones de productos y automatización del proceso de ventas",
      features: [
        language === "en" ? "Lead scoring" : "Puntuación de leads",
        language === "en" ? "Product catalog" : "Catálogo de productos",
        language === "en" ? "Price quotes" : "Cotizaciones",
        language === "en" ? "CRM integration" : "Integración CRM",
      ],
    },
    {
      title: language === "en" ? "Internal Assistant" : "Asistente Interno",
      description:
        language === "en"
          ? "Employee support for HR, IT, and operational queries with knowledge base access"
          : "Soporte a empleados para consultas de RRHH, TI y operacionales con acceso a base de conocimiento",
      features: [
        language === "en" ? "Policy queries" : "Consultas de políticas",
        language === "en" ? "IT support" : "Soporte TI",
        language === "en" ? "HR assistance" : "Asistencia RRHH",
        language === "en" ? "Document search" : "Búsqueda de documentos",
      ],
    },
  ]

  const process = [
    {
      step: "01",
      title: language === "en" ? "Discovery & Analysis" : "Descubrimiento y Análisis",
      description:
        language === "en"
          ? "We analyze your business needs, existing processes, and identify automation opportunities"
          : "Analizamos tus necesidades de negocio, procesos existentes e identificamos oportunidades de automatización",
    },
    {
      step: "02",
      title: language === "en" ? "Custom Design" : "Diseño Personalizado",
      description:
        language === "en"
          ? "Design conversation flows, integrate with your systems, and create specialized knowledge bases"
          : "Diseñamos flujos de conversación, integramos con tus sistemas y creamos bases de conocimiento especializadas",
    },
    {
      step: "03",
      title: language === "en" ? "Development & Training" : "Desarrollo y Entrenamiento",
      description:
        language === "en"
          ? "Build and train your AI agents with industry-specific data and business logic"
          : "Construimos y entrenamos tus agentes IA con datos específicos de la industria y lógica de negocio",
    },
    {
      step: "04",
      title: language === "en" ? "Testing & Optimization" : "Pruebas y Optimización",
      description:
        language === "en"
          ? "Comprehensive testing, performance optimization, and fine-tuning for maximum effectiveness"
          : "Pruebas integrales, optimización de rendimiento y ajuste fino para máxima efectividad",
    },
    {
      step: "05",
      title: language === "en" ? "Deployment & Support" : "Despliegue y Soporte",
      description:
        language === "en"
          ? "Launch your AI agents with full monitoring, ongoing support, and continuous improvement"
          : "Lanzamos tus agentes IA con monitoreo completo, soporte continuo y mejora constante",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Badge className="bg-black text-white border-0 text-lg px-6 py-2">
                <Bot className="w-5 h-5 mr-2" />
                {language === "en" ? "AI Agent Development" : "Desarrollo de Agentes IA"}
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
              {language === "en" ? (
                <>
                  Intelligent AI Agents
                  <br />
                  <span className="text-gray-600">Built for Your Business</span>
                </>
              ) : (
                <>
                  Agentes IA Inteligentes
                  <br />
                  <span className="text-gray-600">Construidos para tu Negocio</span>
                </>
              )}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {language === "en"
                ? "Transform your business operations with custom AI agents that understand your industry, integrate with your systems, and deliver exceptional results 24/7."
                : "Transforma tus operaciones de negocio con agentes IA personalizados que entienden tu industria, se integran con tus sistemas y entregan resultados excepcionales 24/7."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg" asChild>
                <a
                  href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20desarrollar%20agentes%20IA%20personalizados"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  {language === "en" ? "Start Your Project" : "Iniciar tu Proyecto"}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-gray-50 px-8 py-4 text-lg bg-transparent"
              >
                {language === "en" ? "View Demo" : "Ver Demo"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              {language === "en" ? "Advanced AI Capabilities" : "Capacidades IA Avanzadas"}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === "en"
                ? "Our AI agents are built with cutting-edge technology and industry-specific expertise"
                : "Nuestros agentes IA están construidos con tecnología de vanguardia y experiencia específica de la industria"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              {language === "en" ? "Measurable Business Impact" : "Impacto Empresarial Medible"}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === "en"
                ? "See real results with quantifiable improvements to your business operations"
                : "Ve resultados reales con mejoras cuantificables en tus operaciones de negocio"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-gray-50 border border-gray-200">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-black">{benefit.title}</h3>
                        <Badge className="bg-white text-black border border-gray-300">{benefit.metric}</Badge>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              {language === "en" ? "Common Use Cases" : "Casos de Uso Comunes"}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === "en"
                ? "Discover how AI agents can transform different areas of your business"
                : "Descubre cómo los agentes IA pueden transformar diferentes áreas de tu negocio"}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-black flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              {language === "en" ? "Our Development Process" : "Nuestro Proceso de Desarrollo"}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {language === "en"
                ? "A proven methodology that ensures successful AI agent implementation"
                : "Una metodología probada que asegura la implementación exitosa de agentes IA"}
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-black text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold">{step.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-black mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === "en" ? "Ready to Build Your AI Agents?" : "¿Listo para Construir tus Agentes IA?"}
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              {language === "en"
                ? "Let's discuss your specific needs and create AI agents that will transform your business operations."
                : "Hablemos de tus necesidades específicas y creemos agentes IA que transformarán tus operaciones de negocio."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-black px-8 py-4 text-lg" asChild>
                <a
                  href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20una%20consulta%20sobre%20desarrollo%20de%20agentes%20IA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  {language === "en" ? "Get Free Consultation" : "Consulta Gratuita"}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg bg-transparent"
              >
                {language === "en" ? "Download Case Studies" : "Descargar Casos de Estudio"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
