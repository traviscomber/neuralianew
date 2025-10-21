"use client"

import { useState } from "react"
import { Footer } from "@/components/landing/footer"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Headphones,
  TrendingUp,
  Calendar,
  ShoppingCart,
  FileText,
  Database,
  Users,
  BarChart3,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import Image from "next/image"

export default function AgentsPage() {
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
      useCases: {
        title: "AI Agent Use Cases",
        subtitle: "Versatile solutions for every business need and industry vertical.",
        cases: [
          {
            title: "Customer Support",
            description: "Automate first-level support, handle FAQs, and provide instant assistance to customers.",
            features: ["Reduce support tickets by 70%", "24/7 availability", "Consistent service quality"],
            icon: Headphones,
            gradient: "from-blue-500 to-cyan-500",
          },
          {
            title: "Sales Assistant",
            description: "Qualify leads, provide product information, and guide customers through the sales funnel.",
            features: ["Increase conversion rates", "Capture leads 24/7", "Personalized recommendations"],
            icon: TrendingUp,
            gradient: "from-purple-500 to-pink-500",
          },
          {
            title: "Appointment Booking",
            description: "Handle scheduling, confirmations, and reminders automatically across all channels.",
            features: ["Reduce no-shows by 60%", "Automated reminders", "Calendar integration"],
            icon: Calendar,
            gradient: "from-green-500 to-emerald-500",
          },
          {
            title: "Order Management",
            description: "Process orders, track shipments, and handle returns with intelligent automation.",
            features: ["Faster order processing", "Real-time updates", "Reduced errors"],
            icon: ShoppingCart,
            gradient: "from-orange-500 to-red-500",
          },
        ],
      },
      automation: {
        title: "Automation Solutions",
        subtitle: "Comprehensive automation across all business functions and departments.",
        solutions: [
          {
            title: "Document Processing",
            description: "Automate document creation, review, approval workflows, and digital archiving.",
            features: ["90% faster processing", "Reduced errors", "Compliance tracking"],
            icon: FileText,
            gradient: "from-indigo-500 to-purple-500",
          },
          {
            title: "Data Entry & Migration",
            description: "Eliminate manual data entry with intelligent extraction and validation systems.",
            features: ["Zero data entry errors", "Real-time validation", "Seamless integration"],
            icon: Database,
            gradient: "from-cyan-500 to-blue-500",
          },
          {
            title: "Report Generation",
            description: "Automated report creation, distribution, and scheduling across all departments.",
            features: ["Daily automated reports", "Custom formatting", "Multi-channel delivery"],
            icon: BarChart3,
            gradient: "from-pink-500 to-rose-500",
          },
          {
            title: "Customer Onboarding",
            description: "Streamline customer registration, verification, and account setup processes.",
            features: ["50% faster onboarding", "Improved experience", "Compliance automation"],
            icon: Users,
            gradient: "from-amber-500 to-orange-500",
          },
        ],
      },
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
        ],
      },
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
      cta: {
        limitedOffer: "Limited Time Offer",
        title: "Ready to Experience the Future?",
        subtitle: "Test Our Nano Agents for FREE",
        description:
          "Discover the power of N3uralia's advanced AI agents. No commitment, no credit card required. Experience the future of automation today.",
        features: ["Instant Access", "No Setup Required", "Real AI Capabilities"],
        button: "TEST FOR FREE NOW",
        disclaimer: "✓ No Credit Card Required • ✓ Instant Access • ✓ Full Features Available",
      },
    },
    es: {
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
            gradient: "from-blue-500 to-cyan-500",
          },
          {
            title: "Asistente de Ventas",
            description:
              "Califica leads, proporciona información de productos y guía a los clientes a través del embudo de ventas.",
            features: ["Aumenta tasas de conversión", "Captura leads 24/7", "Recomendaciones personalizadas"],
            icon: TrendingUp,
            gradient: "from-purple-500 to-pink-500",
          },
          {
            title: "Reserva de Citas",
            description: "Maneja programación, confirmaciones y recordatorios automáticamente en todos los canales.",
            features: ["Reduce ausencias en 60%", "Recordatorios automáticos", "Integración de calendario"],
            icon: Calendar,
            gradient: "from-green-500 to-emerald-500",
          },
          {
            title: "Gestión de Pedidos",
            description: "Procesa pedidos, rastrea envíos y maneja devoluciones con automatización inteligente.",
            features: ["Procesamiento más rápido", "Actualizaciones en tiempo real", "Errores reducidos"],
            icon: ShoppingCart,
            gradient: "from-orange-500 to-red-500",
          },
        ],
      },
      automation: {
        title: "Soluciones de Automatización",
        subtitle: "Automatización integral en todas las funciones y departamentos empresariales.",
        solutions: [
          {
            title: "Procesamiento de Documentos",
            description: "Automatiza la creación, revisión, flujos de aprobación y archivo digital de documentos.",
            features: ["90% procesamiento más rápido", "Errores reducidos", "Seguimiento de cumplimiento"],
            icon: FileText,
            gradient: "from-indigo-500 to-purple-500",
          },
          {
            title: "Entrada y Migración de Datos",
            description: "Elimina la entrada manual de datos con sistemas inteligentes de extracción y validación.",
            features: ["Cero errores de entrada de datos", "Validación en tiempo real", "Integración perfecta"],
            icon: Database,
            gradient: "from-cyan-500 to-blue-500",
          },
          {
            title: "Generación de Reportes",
            description: "Creación, distribución y programación automatizada de reportes en todos los departamentos.",
            features: ["Reportes diarios automatizados", "Formato personalizado", "Entrega multicanal"],
            icon: BarChart3,
            gradient: "from-pink-500 to-rose-500",
          },
          {
            title: "Incorporación de Clientes",
            description: "Optimiza el registro, verificación y procesos de configuración de cuentas de clientes.",
            features: ["50% incorporación más rápida", "Experiencia mejorada", "Automatización de cumplimiento"],
            icon: Users,
            gradient: "from-amber-500 to-orange-500",
          },
        ],
      },
      faq: {
        title: "Preguntas Frecuentes",
        subtitle: "Preguntas comunes sobre nuestras soluciones de automatización de procesos.",
        questions: [
          {
            question: "¿Qué procesos se pueden automatizar en mi negocio?",
            answer:
              "Casi cualquier proceso empresarial repetitivo puede automatizarse, incluyendo servicio al cliente, entrada de datos, generación de reportes, programación de citas, procesamiento de pedidos y flujos de documentos.",
          },
          {
            question: "¿Cuánto tiempo toma implementar la automatización de procesos?",
            answer:
              "El tiempo de implementación varía según la complejidad. Las automatizaciones simples pueden desplegarse en 1-2 semanas, mientras que las integraciones complejas pueden tomar 4-8 semanas.",
          },
          {
            question: "¿La automatización se integrará con nuestros sistemas existentes?",
            answer:
              "Sí, nuestras soluciones de automatización están diseñadas para integrarse perfectamente con tu CRM, ERP, bases de datos y otros sistemas empresariales existentes.",
          },
          {
            question: "¿Qué pasa si un proceso automatizado encuentra un error?",
            answer:
              "Nuestros sistemas incluyen manejo integral de errores y monitoreo. Cuando ocurren errores, el sistema puede reintentar automáticamente o escalar a operadores humanos.",
          },
          {
            question: "¿Cómo miden el ROI de la automatización de procesos?",
            answer:
              "Rastreamos métricas clave incluyendo tiempo ahorrado, reducción de errores y mejoras de productividad. La mayoría ve ROI dentro de 3-6 meses.",
          },
        ],
      },
      deploy: {
        title: "Despliega Agente IA Personal en 48 Horas",
        roleLabel: "Rol",
        industryLabel: "Industria",
        challengeLabel: "Desafío",
        contactLabel: "Información de Contacto",
        sendButton: "Enviar Solicitud",
        rolePlaceholder: "ej., Gerente de Servicio al Cliente",
        industryPlaceholder: "ej., E-commerce, Salud, Finanzas",
        challengePlaceholder: "Describe tu principal desafío empresarial",
        contactPlaceholder: "Tu email y número de teléfono",
      },
      cta: {
        limitedOffer: "Oferta por Tiempo Limitado",
        title: "¿Listo para Experimentar el Futuro?",
        subtitle: "Prueba Nuestros Agentes Nano GRATIS",
        description:
          "Descubre el poder de los agentes IA avanzados de N3uralia. Sin compromiso, sin tarjeta de crédito.",
        features: ["Acceso Instantáneo", "Sin Configuración", "Capacidades IA Reales"],
        button: "PRUEBA GRATIS AHORA",
        disclaimer: "✓ Sin Tarjeta • ✓ Acceso Instantáneo • ✓ Todas las Funciones",
      },
    },
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Cosmic Background */}
      <section
        className="relative pt-32 pb-20 px-4 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
          <Sparkles className="absolute top-20 right-20 w-8 h-8 text-white animate-pulse" />
          <Sparkles className="absolute bottom-32 left-32 w-6 h-6 text-white animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              {currentContent.useCases.title}
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto drop-shadow">
              {currentContent.useCases.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {currentContent.useCases.cases.map((useCase, index) => {
              const IconComponent = useCase.icon
              return (
                <Card
                  key={index}
                  className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 bg-white/95 backdrop-blur"
                >
                  <CardHeader className="pb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br ${useCase.gradient} shadow-lg`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">{useCase.title}</CardTitle>
                    <CardDescription className="text-base text-gray-600">{useCase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {useCase.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
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

      {/* Automation Solutions with Gradient Background */}
      <section
        className="relative py-20 px-4 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #ffd140 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-200 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              {currentContent.automation.title}
            </h2>
            <p className="text-2xl text-white/90 max-w-3xl mx-auto drop-shadow">{currentContent.automation.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {currentContent.automation.solutions.map((solution, index) => {
              const IconComponent = solution.icon
              return (
                <Card
                  key={index}
                  className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 bg-white/95 backdrop-blur"
                >
                  <CardHeader className="pb-4">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br ${solution.gradient} shadow-lg`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-gray-900">{solution.title}</CardTitle>
                    <CardDescription className="text-base text-gray-600">{solution.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
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

      {/* FAQ Section with Light Background */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{currentContent.faq.title}</h2>
            <p className="text-xl text-gray-600">{currentContent.faq.subtitle}</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {currentContent.faq.questions.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 rounded-xl px-6 bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed text-base">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Deploy Form Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{currentContent.deploy.title}</h2>
          </div>

          <Card className="border-0 shadow-2xl bg-white">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="role" className="text-base font-semibold text-gray-700 mb-2 block">
                    {currentContent.deploy.roleLabel}
                  </Label>
                  <Input
                    id="role"
                    placeholder={currentContent.deploy.rolePlaceholder}
                    value={formData.role}
                    onChange={(e) => handleInputChange("role", e.target.value)}
                    className="h-12 text-base"
                  />
                </div>

                <div>
                  <Label htmlFor="industry" className="text-base font-semibold text-gray-700 mb-2 block">
                    {currentContent.deploy.industryLabel}
                  </Label>
                  <Input
                    id="industry"
                    placeholder={currentContent.deploy.industryPlaceholder}
                    value={formData.industry}
                    onChange={(e) => handleInputChange("industry", e.target.value)}
                    className="h-12 text-base"
                  />
                </div>

                <div>
                  <Label htmlFor="challenge" className="text-base font-semibold text-gray-700 mb-2 block">
                    {currentContent.deploy.challengeLabel}
                  </Label>
                  <Textarea
                    id="challenge"
                    placeholder={currentContent.deploy.challengePlaceholder}
                    value={formData.challenge}
                    onChange={(e) => handleInputChange("challenge", e.target.value)}
                    className="min-h-[100px] text-base"
                  />
                </div>

                <div>
                  <Label htmlFor="contact" className="text-base font-semibold text-gray-700 mb-2 block">
                    {currentContent.deploy.contactLabel}
                  </Label>
                  <Input
                    id="contact"
                    placeholder={currentContent.deploy.contactPlaceholder}
                    value={formData.contactInfo}
                    onChange={(e) => handleInputChange("contactInfo", e.target.value)}
                    className="h-12 text-base"
                  />
                </div>

                <Button
                  onClick={handleSendRequest}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg mt-8 w-full shadow-lg hover:shadow-xl transition-all"
                  disabled={!formData.role || !formData.industry || !formData.challenge || !formData.contactInfo}
                >
                  {currentContent.deploy.sendButton}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tech Stack Icons */}
          <div className="flex justify-center items-center gap-8 mt-12 flex-wrap">
            <div className="w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 opacity-60 hover:opacity-100">
              <Image
                src="/tech-icons/redis-new-logo.png"
                alt="Redis"
                width={48}
                height={48}
                className="filter grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 opacity-60 hover:opacity-100">
              <Image
                src="/tech-icons/js-new-logo.png"
                alt="JavaScript"
                width={48}
                height={48}
                className="filter grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 opacity-60 hover:opacity-100">
              <Image
                src="/tech-icons/n8n-new-logo.png"
                alt="n8n"
                width={48}
                height={48}
                className="filter grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 opacity-60 hover:opacity-100">
              <Image
                src="/tech-icons/nextjs-logo.png"
                alt="Next.js"
                width={48}
                height={48}
                className="filter grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 opacity-60 hover:opacity-100">
              <Image
                src="/tech-icons/python-new-logo.png"
                alt="Python"
                width={48}
                height={48}
                className="filter grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div className="w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 opacity-60 hover:opacity-100">
              <Image
                src="/tech-icons/supabase-new-logo.png"
                alt="Supabase"
                width={48}
                height={48}
                className="filter grayscale hover:grayscale-0 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Cosmic Background */}
      <section
        className="relative py-20 px-4 text-white overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <Sparkles className="absolute top-10 left-10 w-4 h-4 text-blue-400 animate-pulse" />
          <Sparkles className="absolute top-20 right-20 w-3 h-3 text-purple-400 animate-pulse" />
          <Sparkles className="absolute bottom-20 left-20 w-5 h-5 text-blue-300 animate-pulse" />
          <Sparkles className="absolute bottom-10 right-10 w-4 h-4 text-purple-300 animate-pulse" />
          <Sparkles className="absolute top-1/2 left-1/4 w-3 h-3 text-blue-200 animate-pulse" />
          <Sparkles className="absolute top-1/3 right-1/3 w-4 h-4 text-purple-200 animate-pulse" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Badge
            variant="outline"
            className="mb-8 text-blue-300 border-blue-400 bg-blue-500/20 px-6 py-3 text-base font-medium"
          >
            <Zap className="w-5 h-5 mr-2" />
            {currentContent.cta.limitedOffer}
          </Badge>

          <h2 className="text-5xl md:text-6xl font-bold mb-8 drop-shadow-lg">{currentContent.cta.title}</h2>
          <h3 className="text-3xl md:text-4xl font-semibold mb-12 text-blue-300 drop-shadow">
            {currentContent.cta.subtitle}
          </h3>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
            {currentContent.cta.description}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {currentContent.cta.features.map((feature, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-green-300 border-green-400 bg-green-500/20 px-6 py-3 text-base"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                {feature}
              </Badge>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold px-16 py-8 text-2xl rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open("https://www.n3uralianano.com", "_blank")}
          >
            <Zap className="w-8 h-8 mr-3" />
            {currentContent.cta.button}
            <ArrowRight className="w-8 h-8 ml-3" />
          </Button>

          <p className="text-base text-blue-200 mt-8 opacity-80">{currentContent.cta.disclaimer}</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
