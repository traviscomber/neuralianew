"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageSquare, Zap, Globe, BarChart3, CheckCircle, ArrowRight, Users, Brain } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function AIAgentDevelopmentPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "AI Agent Development",
      title: "Custom AI Agents That Understand Your Business",
      subtitle:
        "Deploy intelligent conversational agents that provide personalized customer experiences, automate support, and drive engagement across all channels.",
      cta: "Start Building Your AI Agent",
      demo: "Request Demo",
      features: [
        {
          icon: MessageSquare,
          title: "Natural Language Processing",
          description:
            "Advanced NLP capabilities that understand context, intent, and emotion in customer conversations.",
        },
        {
          icon: Globe,
          title: "Multi-Channel Support",
          description: "Deploy across WhatsApp, web chat, email, voice, and social media platforms seamlessly.",
        },
        {
          icon: Brain,
          title: "Custom Training",
          description: "Train agents on your specific business data, processes, and customer interaction patterns.",
        },
        {
          icon: Zap,
          title: "Real-Time Learning",
          description: "Agents continuously improve through machine learning and customer feedback loops.",
        },
        {
          icon: Users,
          title: "Smart Escalation",
          description: "Intelligent handoff to human agents when complex issues require personal attention.",
        },
        {
          icon: BarChart3,
          title: "Advanced Analytics",
          description:
            "Comprehensive insights into conversation patterns, customer satisfaction, and performance metrics.",
        },
      ],
      benefits: {
        title: "Measurable Business Impact",
        subtitle:
          "Our AI agents deliver quantifiable results that transform your customer experience and operational efficiency.",
        metrics: [
          { value: "90%", label: "Faster Response Times" },
          { value: "24/7", label: "Customer Support" },
          { value: "50+", label: "Languages Supported" },
          { value: "99.9%", label: "Uptime Guarantee" },
        ],
      },
      useCases: {
        title: "AI Agent Use Cases",
        subtitle: "Versatile solutions for every business need and industry vertical.",
        cases: [
          {
            title: "Customer Support",
            description: "Automate first-level support, handle FAQs, and provide instant assistance to customers.",
            benefits: ["Reduce support tickets by 70%", "24/7 availability", "Consistent service quality"],
          },
          {
            title: "Sales Assistant",
            description: "Qualify leads, provide product information, and guide customers through the sales funnel.",
            benefits: ["Increase conversion rates", "Capture leads 24/7", "Personalized recommendations"],
          },
          {
            title: "Appointment Booking",
            description: "Handle scheduling, confirmations, and reminders automatically across all channels.",
            benefits: ["Reduce no-shows by 60%", "Automated reminders", "Calendar integration"],
          },
          {
            title: "Order Management",
            description: "Process orders, track shipments, and handle returns with intelligent automation.",
            benefits: ["Faster order processing", "Real-time updates", "Reduced errors"],
          },
        ],
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Everything you need to know about our AI agent development services.",
        questions: [
          {
            question: "How long does it take to develop a custom AI agent?",
            answer:
              "Most AI agents can be developed and deployed within 1-2 weeks. Simple chatbots can be ready in 2-3 days, while complex enterprise solutions may take 2-4 weeks depending on customization requirements.",
          },
          {
            question: "Can the AI agent integrate with my existing systems?",
            answer:
              "Yes, our AI agents can integrate with most existing systems including CRM, helpdesk, e-commerce platforms, and custom APIs. We provide comprehensive integration support.",
          },
          {
            question: "What languages can the AI agent support?",
            answer:
              "Our AI agents support 50+ languages with native-level understanding. They can automatically detect the customer's language and respond appropriately.",
          },
          {
            question: "How do you ensure the AI agent understands my business?",
            answer:
              "We train the AI agent on your specific business data, processes, and customer interaction patterns. The training includes your FAQs, product information, and historical customer conversations.",
          },
          {
            question: "What happens when the AI agent can't help a customer?",
            answer:
              "Our smart escalation system seamlessly transfers complex queries to human agents with full conversation context. You can customize escalation rules based on your preferences.",
          },
        ],
      },
    },
    es: {
      badge: "Desarrollo de Agentes de IA",
      title: "Agentes de IA Personalizados Que Entienden Tu Negocio",
      subtitle:
        "Despliega agentes conversacionales inteligentes que brindan experiencias personalizadas al cliente, automatizan el soporte e impulsan el engagement en todos los canales.",
      cta: "Comienza a Construir Tu Agente de IA",
      demo: "Solicitar Demo",
      features: [
        {
          icon: MessageSquare,
          title: "Procesamiento de Lenguaje Natural",
          description:
            "Capacidades avanzadas de PLN que entienden contexto, intención y emoción en conversaciones de clientes.",
        },
        {
          icon: Globe,
          title: "Soporte Multicanal",
          description: "Despliega en WhatsApp, chat web, email, voz y plataformas de redes sociales sin problemas.",
        },
        {
          icon: Brain,
          title: "Entrenamiento Personalizado",
          description:
            "Entrena agentes con tus datos específicos de negocio, procesos y patrones de interacción con clientes.",
        },
        {
          icon: Zap,
          title: "Aprendizaje en Tiempo Real",
          description:
            "Los agentes mejoran continuamente a través de machine learning y bucles de retroalimentación del cliente.",
        },
        {
          icon: Users,
          title: "Escalación Inteligente",
          description:
            "Transferencia inteligente a agentes humanos cuando problemas complejos requieren atención personal.",
        },
        {
          icon: BarChart3,
          title: "Análisis Avanzados",
          description:
            "Insights comprehensivos sobre patrones de conversación, satisfacción del cliente y métricas de rendimiento.",
        },
      ],
      benefits: {
        title: "Impacto Empresarial Medible",
        subtitle:
          "Nuestros agentes de IA entregan resultados cuantificables que transforman tu experiencia del cliente y eficiencia operacional.",
        metrics: [
          { value: "90%", label: "Tiempos de Respuesta Más Rápidos" },
          { value: "24/7", label: "Soporte al Cliente" },
          { value: "50+", label: "Idiomas Soportados" },
          { value: "99.9%", label: "Garantía de Tiempo de Actividad" },
        ],
      },
      useCases: {
        title: "Casos de Uso de Agentes de IA",
        subtitle: "Soluciones versátiles para cada necesidad empresarial y vertical de industria.",
        cases: [
          {
            title: "Soporte al Cliente",
            description: "Automatiza soporte de primer nivel, maneja FAQs y brinda asistencia instantánea a clientes.",
            benefits: ["Reduce tickets de soporte en 70%", "Disponibilidad 24/7", "Calidad de servicio consistente"],
          },
          {
            title: "Asistente de Ventas",
            description:
              "Califica leads, proporciona información de productos y guía clientes a través del embudo de ventas.",
            benefits: ["Aumenta tasas de conversión", "Captura leads 24/7", "Recomendaciones personalizadas"],
          },
          {
            title: "Reserva de Citas",
            description: "Maneja programación, confirmaciones y recordatorios automáticamente en todos los canales.",
            benefits: ["Reduce no-shows en 60%", "Recordatorios automatizados", "Integración de calendario"],
          },
          {
            title: "Gestión de Pedidos",
            description: "Procesa pedidos, rastrea envíos y maneja devoluciones con automatización inteligente.",
            benefits: ["Procesamiento de pedidos más rápido", "Actualizaciones en tiempo real", "Errores reducidos"],
          },
        ],
      },
      faq: {
        title: "Preguntas Frecuentes",
        subtitle: "Todo lo que necesitas saber sobre nuestros servicios de desarrollo de agentes de IA.",
        questions: [
          {
            question: "¿Cuánto tiempo toma desarrollar un agente de IA personalizado?",
            answer:
              "La mayoría de los agentes de IA pueden desarrollarse y desplegarse en 1-2 semanas. Los chatbots simples pueden estar listos en 2-3 días, mientras que las soluciones empresariales complejas pueden tomar 2-4 semanas dependiendo de los requisitos de personalización.",
          },
          {
            question: "¿Puede el agente de IA integrarse con mis sistemas existentes?",
            answer:
              "Sí, nuestros agentes de IA pueden integrarse con la mayoría de sistemas existentes incluyendo CRM, helpdesk, plataformas de e-commerce y APIs personalizadas. Proporcionamos soporte integral de integración.",
          },
          {
            question: "¿Qué idiomas puede soportar el agente de IA?",
            answer:
              "Nuestros agentes de IA soportan más de 50 idiomas con comprensión de nivel nativo. Pueden detectar automáticamente el idioma del cliente y responder apropiadamente.",
          },
          {
            question: "¿Cómo aseguran que el agente de IA entienda mi negocio?",
            answer:
              "Entrenamos el agente de IA con tus datos específicos de negocio, procesos y patrones de interacción con clientes. El entrenamiento incluye tus FAQs, información de productos y conversaciones históricas de clientes.",
          },
          {
            question: "¿Qué pasa cuando el agente de IA no puede ayudar a un cliente?",
            answer:
              "Nuestro sistema de escalación inteligente transfiere sin problemas consultas complejas a agentes humanos con contexto completo de la conversación. Puedes personalizar reglas de escalación según tus preferencias.",
          },
        ],
      },
    },
  }

  const t = content[language]

  const whatsappMessage =
    language === "es"
      ? "Hola, me interesa desarrollar un agente de IA personalizado para mi negocio"
      : "Hello, I'm interested in developing a custom AI agent for my business"

  const whatsappUrl = `https://wa.me/56944444649?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-4 px-4 py-2 text-sm font-medium bg-black/5 text-black border-black/10"
            >
              {t.badge}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">{t.title}</h1>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">{t.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  {t.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg bg-transparent"
              >
                {t.demo}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">{t.benefits.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.benefits.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {t.benefits.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-black mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">{t.useCases.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.useCases.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {t.useCases.cases.map((useCase, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-black transition-colors">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-black mb-4">{useCase.title}</h3>
                  <p className="text-gray-600 mb-6">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">{t.faq.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.faq.subtitle}</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {t.faq.questions.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-6 hover:border-black transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold text-black hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {language === "es" ? "¿Listo para Crear Tu Agente de IA?" : "Ready to Build Your AI Agent?"}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
            {language === "es"
              ? "Comienza tu transformación digital hoy y experimenta el poder de los agentes de IA personalizados."
              : "Start your digital transformation today and experience the power of custom AI agents."}
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              {t.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
