"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/landing/footer"
import { LanguageProvider, useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  CheckCircle,
  ExternalLink,
  MessageCircle,
  Headphones,
  TrendingUp,
  Calendar,
  ShoppingCart,
  FileText,
  Database,
  Users,
  BarChart3,
} from "lucide-react"

function AgentsPageContent() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    role: "",
    industry: "",
    challenge: "",
    contactInfo: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSendRequest = () => {
    const message = `Hello N3uralia, I want to deploy a personal AI agent in 48 hours.
    
Role: ${formData.role}
Industry: ${formData.industry}
Challenge: ${formData.challenge}
Contact Info: ${formData.contactInfo}`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/56940946660?text=${encodedMessage}`, "_blank")
  }

  const content = {
    en: {
      // AI Agent Use Cases Section
      useCases: {
        title: "AI Agent Use Cases",
        subtitle: "Versatile solutions for every business need and industry vertical.",
        cases: [
          {
            title: "Customer Support",
            description: "Automate first-level support, handle FAQs, and provide instant assistance to customers.",
            features: ["Reduce support tickets by 70%", "24/7 availability", "Consistent service quality"],
            icon: Headphones,
          },
          {
            title: "Sales Assistant",
            description: "Qualify leads, provide product information, and guide customers through the sales funnel.",
            features: ["Increase conversion rates", "Capture leads 24/7", "Personalized recommendations"],
            icon: TrendingUp,
          },
          {
            title: "Appointment Booking",
            description: "Handle scheduling, confirmations, and reminders automatically across all channels.",
            features: ["Reduce no-shows by 60%", "Automated reminders", "Calendar integration"],
            icon: Calendar,
          },
          {
            title: "Order Management",
            description: "Process orders, track shipments, and handle returns with intelligent automation.",
            features: ["Faster order processing", "Real-time updates", "Reduced errors"],
            icon: ShoppingCart,
          },
        ],
      },
      // Automation Solutions Section
      automation: {
        title: "Automation Solutions",
        subtitle: "Comprehensive automation across all business functions and departments.",
        solutions: [
          {
            title: "Document Processing",
            description: "Automate document creation, review, approval workflows, and digital archiving.",
            features: ["90% faster processing", "Reduced errors", "Compliance tracking"],
            icon: FileText,
          },
          {
            title: "Data Entry & Migration",
            description: "Eliminate manual data entry with intelligent extraction and validation systems.",
            features: ["Zero data entry errors", "Real-time validation", "Seamless integration"],
            icon: Database,
          },
          {
            title: "Report Generation",
            description: "Automated report creation, distribution, and scheduling across all departments.",
            features: ["Daily automated reports", "Custom formatting", "Multi-channel delivery"],
            icon: BarChart3,
          },
          {
            title: "Customer Onboarding",
            description: "Streamline customer registration, verification, and account setup processes.",
            features: ["50% faster onboarding", "Improved experience", "Compliance automation"],
            icon: Users,
          },
        ],
      },
      // FAQ Section
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Common questions about our process automation solutions.",
        questions: [
          {
            question: "Which processes can be automated in my business?",
            answer:
              "Almost any repetitive business process can be automated, including customer service, data entry, report generation, appointment scheduling, order processing, and document workflows. We analyze your specific business needs to identify the best automation opportunities.",
          },
          {
            question: "How long does it take to implement process automation?",
            answer:
              "Implementation time varies depending on complexity. Simple automations can be deployed in 1-2 weeks, while complex multi-system integrations may take 4-8 weeks. We provide detailed timelines during our initial consultation.",
          },
          {
            question: "Will automation integrate with our existing systems?",
            answer:
              "Yes, our automation solutions are designed to integrate seamlessly with your existing CRM, ERP, databases, and other business systems. We support APIs, webhooks, and direct database connections.",
          },
          {
            question: "What happens if an automated process encounters an error?",
            answer:
              "Our systems include comprehensive error handling and monitoring. When errors occur, the system can retry automatically, escalate to human operators, or follow predefined fallback procedures. You'll receive real-time notifications of any issues.",
          },
          {
            question: "How do you measure the ROI of process automation?",
            answer:
              "We track key metrics including time saved, error reduction, cost savings, and productivity improvements. Most clients see ROI within 3-6 months through reduced labor costs and increased efficiency.",
          },
          {
            question: "How long does it take to develop a custom AI agent?",
            answer:
              "Custom AI agents can be developed and deployed in 2-4 weeks depending on complexity. Simple conversational agents take less time, while agents requiring complex integrations or specialized knowledge may take longer.",
          },
          {
            question: "Can the AI agent integrate with my existing systems?",
            answer:
              "Absolutely. Our AI agents can integrate with CRMs, databases, APIs, messaging platforms (WhatsApp, Telegram, SMS), and other business systems to provide seamless automation across your entire workflow.",
          },
          {
            question: "What languages can the AI agent support?",
            answer:
              "Our AI agents support multiple languages including English, Spanish, Portuguese, French, German, and many others. We can configure the agent to automatically detect and respond in the customer's preferred language.",
          },
          {
            question: "How do you ensure the AI agent understands my business?",
            answer:
              "We train the AI agent using your specific business data, processes, and terminology. This includes your product catalogs, service procedures, company policies, and historical customer interactions to ensure accurate and relevant responses.",
          },
          {
            question: "What happens when the AI agent can't help a customer?",
            answer:
              "The AI agent is programmed to recognize when it needs human assistance and can seamlessly escalate conversations to your team members. It provides context about the conversation to ensure smooth handoffs.",
          },
        ],
      },
      // Deploy Section
      deploy: {
        title: "Deploy Personal AI Agent in 48 Hours",
        roleLabel: "Role",
        industryLabel: "Industry",
        challengeLabel: "Challenge",
        contactLabel: "Contact Info",
        sendButton: "Send Request",
        rolePlaceholder: "e.g., Customer Service Manager",
        industryPlaceholder: "e.g., E-commerce, Healthcare, Finance",
        challengePlaceholder: "Describe your main business challenge or process you want to automate",
        contactPlaceholder: "Your email and phone number",
      },
      // CTA Section
      cta: {
        title: "Start Your AI Journey Today",
        subtitle:
          "Join hundreds of companies already using N3uralia to automate processes, enhance customer experience, and drive growth.",
        tryButton: "Try Free Agents",
        customButton: "Get Custom Agent Quote",
      },
    },
    es: {
      // AI Agent Use Cases Section
      useCases: {
        title: "Casos de Uso de Agentes IA",
        subtitle: "Soluciones versátiles para cada necesidad empresarial y vertical de industria.",
        cases: [
          {
            title: "Soporte al Cliente",
            description:
              "Automatiza el soporte de primer nivel, maneja FAQs y proporciona asistencia instantánea a los clientes.",
            features: ["Reduce tickets de soporte en 70%", "Disponibilidad 24/7", "Calidad de servicio consistente"],
            icon: Headphones,
          },
          {
            title: "Asistente de Ventas",
            description:
              "Califica leads, proporciona información de productos y guía a los clientes a través del embudo de ventas.",
            features: ["Aumenta tasas de conversión", "Captura leads 24/7", "Recomendaciones personalizadas"],
            icon: TrendingUp,
          },
          {
            title: "Reserva de Citas",
            description: "Maneja programación, confirmaciones y recordatorios automáticamente en todos los canales.",
            features: ["Reduce ausencias en 60%", "Recordatorios automáticos", "Integración de calendario"],
            icon: Calendar,
          },
          {
            title: "Gestión de Pedidos",
            description: "Procesa pedidos, rastrea envíos y maneja devoluciones con automatización inteligente.",
            features: ["Procesamiento más rápido", "Actualizaciones en tiempo real", "Errores reducidos"],
            icon: ShoppingCart,
          },
        ],
      },
      // Automation Solutions Section
      automation: {
        title: "Soluciones de Automatización",
        subtitle: "Automatización integral en todas las funciones y departamentos empresariales.",
        solutions: [
          {
            title: "Procesamiento de Documentos",
            description: "Automatiza la creación, revisión, flujos de aprobación y archivo digital de documentos.",
            features: ["90% procesamiento más rápido", "Errores reducidos", "Seguimiento de cumplimiento"],
            icon: FileText,
          },
          {
            title: "Entrada y Migración de Datos",
            description: "Elimina la entrada manual de datos con sistemas inteligentes de extracción y validación.",
            features: ["Cero errores de entrada de datos", "Validación en tiempo real", "Integración perfecta"],
            icon: Database,
          },
          {
            title: "Generación de Reportes",
            description: "Creación, distribución y programación automatizada de reportes en todos los departamentos.",
            features: ["Reportes diarios automatizados", "Formato personalizado", "Entrega multicanal"],
            icon: BarChart3,
          },
          {
            title: "Incorporación de Clientes",
            description: "Optimiza el registro, verificación y procesos de configuración de cuentas de clientes.",
            features: ["50% incorporación más rápida", "Experiencia mejorada", "Automatización de cumplimiento"],
            icon: Users,
          },
        ],
      },
      // FAQ Section
      faq: {
        title: "Preguntas Frecuentes",
        subtitle: "Preguntas comunes sobre nuestras soluciones de automatización de procesos.",
        questions: [
          {
            question: "¿Qué procesos se pueden automatizar en mi negocio?",
            answer:
              "Casi cualquier proceso empresarial repetitivo puede automatizarse, incluyendo servicio al cliente, entrada de datos, generación de reportes, programación de citas, procesamiento de pedidos y flujos de documentos. Analizamos las necesidades específicas de tu negocio para identificar las mejores oportunidades de automatización.",
          },
          {
            question: "¿Cuánto tiempo toma implementar la automatización de procesos?",
            answer:
              "El tiempo de implementación varía según la complejidad. Las automatizaciones simples pueden desplegarse en 1-2 semanas, mientras que las integraciones complejas de múltiples sistemas pueden tomar 4-8 semanas. Proporcionamos cronogramas detallados durante nuestra consulta inicial.",
          },
          {
            question: "¿La automatización se integrará con nuestros sistemas existentes?",
            answer:
              "Sí, nuestras soluciones de automatización están diseñadas para integrarse perfectamente con tu CRM, ERP, bases de datos y otros sistemas empresariales existentes. Soportamos APIs, webhooks y conexiones directas a bases de datos.",
          },
          {
            question: "¿Qué pasa si un proceso automatizado encuentra un error?",
            answer:
              "Nuestros sistemas incluyen manejo integral de errores y monitoreo. Cuando ocurren errores, el sistema puede reintentar automáticamente, escalar a operadores humanos o seguir procedimientos de respaldo predefinidos. Recibirás notificaciones en tiempo real de cualquier problema.",
          },
          {
            question: "¿Cómo miden el ROI de la automatización de procesos?",
            answer:
              "Rastreamos métricas clave incluyendo tiempo ahorrado, reducción de errores, ahorro de costos y mejoras de productividad. La mayoría de los clientes ven ROI dentro de 3-6 meses a través de costos laborales reducidos y mayor eficiencia.",
          },
          {
            question: "¿Cuánto tiempo toma desarrollar un agente IA personalizado?",
            answer:
              "Los agentes IA personalizados pueden desarrollarse y desplegarse en 2-4 semanas dependiendo de la complejidad. Los agentes conversacionales simples toman menos tiempo, mientras que los agentes que requieren integraciones complejas o conocimiento especializado pueden tomar más tiempo.",
          },
          {
            question: "¿Puede el agente IA integrarse con mis sistemas existentes?",
            answer:
              "Absolutamente. Nuestros agentes IA pueden integrarse con CRMs, bases de datos, APIs, plataformas de mensajería (WhatsApp, Telegram, SMS) y otros sistemas empresariales para proporcionar automatización perfecta en todo tu flujo de trabajo.",
          },
          {
            question: "¿Qué idiomas puede soportar el agente IA?",
            answer:
              "Nuestros agentes IA soportan múltiples idiomas incluyendo inglés, español, portugués, francés, alemán y muchos otros. Podemos configurar el agente para detectar automáticamente y responder en el idioma preferido del cliente.",
          },
          {
            question: "¿Cómo aseguran que el agente IA entienda mi negocio?",
            answer:
              "Entrenamos el agente IA usando los datos específicos de tu negocio, procesos y terminología. Esto incluye tus catálogos de productos, procedimientos de servicio, políticas de la empresa e interacciones históricas con clientes para asegurar respuestas precisas y relevantes.",
          },
          {
            question: "¿Qué pasa cuando el agente IA no puede ayudar a un cliente?",
            answer:
              "El agente IA está programado para reconocer cuando necesita asistencia humana y puede escalar conversaciones sin problemas a los miembros de tu equipo. Proporciona contexto sobre la conversación para asegurar transferencias suaves.",
          },
        ],
      },
      // Deploy Section
      deploy: {
        title: "Despliega Agente IA Personal en 48 Horas",
        roleLabel: "Rol",
        industryLabel: "Industria",
        challengeLabel: "Desafío",
        contactLabel: "Información de Contacto",
        sendButton: "Enviar Solicitud",
        rolePlaceholder: "ej., Gerente de Servicio al Cliente",
        industryPlaceholder: "ej., E-commerce, Salud, Finanzas",
        challengePlaceholder: "Describe tu principal desafío empresarial o proceso que quieres automatizar",
        contactPlaceholder: "Tu email y número de teléfono",
      },
      // CTA Section
      cta: {
        title: "Comienza Tu Viaje con IA Hoy",
        subtitle:
          "Únete a cientos de empresas que ya usan N3uralia para automatizar procesos, mejorar la experiencia del cliente e impulsar el crecimiento.",
        tryButton: "Probar Agentes Gratis",
        customButton: "Obtener Cotización de Agente Personalizado",
      },
    },
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* AI Agent Use Cases Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.useCases.title}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.useCases.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.useCases.cases.map((useCase, index) => {
              const IconComponent = useCase.icon
              return (
                <Card key={index} className="border-2 hover:border-blue-300 transition-colors duration-300 h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-lg bg-blue-100">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">{useCase.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-600 leading-relaxed">{useCase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {useCase.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Automation Solutions Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.automation.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.automation.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.automation.solutions.map((solution, index) => {
              const IconComponent = solution.icon
              return (
                <Card key={index} className="border-2 hover:border-indigo-300 transition-colors duration-300 h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-lg bg-indigo-100">
                        <IconComponent className="w-6 h-6 text-indigo-600" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">{solution.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-600 leading-relaxed">{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.faq.title}</h2>
            <p className="text-xl text-gray-600">{t.faq.subtitle}</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {t.faq.questions.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Deploy Personal AI Agent Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t.deploy.title}</h2>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="role" className="text-base font-medium text-gray-700 mb-2 block">
                    {t.deploy.roleLabel}
                  </Label>
                  <Input
                    id="role"
                    placeholder={t.deploy.rolePlaceholder}
                    value={formData.role}
                    onChange={(e) => handleInputChange("role", e.target.value)}
                    className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none px-0 focus:border-gray-400"
                  />
                </div>

                <div>
                  <Label htmlFor="industry" className="text-base font-medium text-gray-700 mb-2 block">
                    {t.deploy.industryLabel}
                  </Label>
                  <Input
                    id="industry"
                    placeholder={t.deploy.industryPlaceholder}
                    value={formData.industry}
                    onChange={(e) => handleInputChange("industry", e.target.value)}
                    className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none px-0 focus:border-gray-400"
                  />
                </div>

                <div>
                  <Label htmlFor="challenge" className="text-base font-medium text-gray-700 mb-2 block">
                    {t.deploy.challengeLabel}
                  </Label>
                  <Textarea
                    id="challenge"
                    placeholder={t.deploy.challengePlaceholder}
                    value={formData.challenge}
                    onChange={(e) => handleInputChange("challenge", e.target.value)}
                    className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none px-0 focus:border-gray-400 min-h-[60px]"
                  />
                </div>

                <div>
                  <Label htmlFor="contact" className="text-base font-medium text-gray-700 mb-2 block">
                    {t.deploy.contactLabel}
                  </Label>
                  <Input
                    id="contact"
                    placeholder={t.deploy.contactPlaceholder}
                    value={formData.contactInfo}
                    onChange={(e) => handleInputChange("contactInfo", e.target.value)}
                    className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none px-0 focus:border-gray-400"
                  />
                </div>

                <Button
                  onClick={handleSendRequest}
                  className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-3 mt-8"
                  disabled={!formData.role || !formData.industry || !formData.challenge || !formData.contactInfo}
                >
                  {t.deploy.sendButton}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tech Stack Icons */}
          <div className="flex justify-center items-center gap-8 mt-12 opacity-60">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/tech-icons/redis-new-logo.png" alt="Redis" className="w-10 h-10 object-contain" />
            </div>
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/tech-icons/js-new-logo.png" alt="JavaScript" className="w-10 h-10 object-contain" />
            </div>
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/tech-icons/n8n-new-logo.png" alt="n8n" className="w-10 h-10 object-contain" />
            </div>
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/tech-icons/nextjs-logo.png" alt="Next.js" className="w-10 h-10 object-contain" />
            </div>
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/tech-icons/python-new-logo.png" alt="Python" className="w-10 h-10 object-contain" />
            </div>
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/tech-icons/supabase-new-logo.png" alt="Supabase" className="w-10 h-10 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Single CTA Section - Keep the test for free button */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.cta.title}</h2>
          <p className="text-xl mb-12 opacity-90">{t.cta.subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-semibold"
              onClick={() => window.open("https://www.n3uralianano.com", "_blank")}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              {t.cta.tryButton}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 font-semibold bg-transparent"
              onClick={() =>
                window.open(
                  "https://wa.me/56940946660?text=Hola%20N3uralia,%20me%20interesa%20obtener%20una%20cotización%20para%20un%20agente%20personalizado",
                  "_blank",
                )
              }
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t.cta.customButton}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default function AgentsPage() {
  return (
    <LanguageProvider>
      <AgentsPageContent />
    </LanguageProvider>
  )
}
