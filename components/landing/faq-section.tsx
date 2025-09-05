"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, MessageSquare, HelpCircle, DollarSign, Users, Settings, Globe } from "lucide-react"

export function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>(["pricing"])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const faqCategories = [
    {
      id: "general",
      title: "Preguntas Generales",
      icon: HelpCircle,
      color: "from-blue-500 to-cyan-500",
      faqs: [
        {
          id: "what-is-n3uralia",
          question: "¿Qué es N3uralia y qué servicios ofrecen?",
          answer:
            "N3uralia es una empresa especializada en desarrollo de agentes conversacionales inteligentes y sistemas de IA full-stack. Ofrecemos soluciones completas que incluyen integración con WhatsApp Business, CRM, ERP, y desarrollo de chatbots personalizados para diferentes industrias como educación, ventas, soporte al cliente y recursos humanos.",
        },
        {
          id: "how-it-works",
          question: "¿Cómo funcionan sus agentes conversacionales?",
          answer:
            "Nuestros agentes utilizan modelos de lenguaje avanzados como GPT-4, entrenados específicamente para cada caso de uso. Se integran nativamente con WhatsApp Business API, sistemas CRM/ERP existentes, y pueden manejar conversaciones complejas, realizar tareas automatizadas, y aprender continuamente de las interacciones para mejorar su rendimiento.",
        },
        {
          id: "industries",
          question: "¿Para qué industrias trabajan?",
          answer:
            "Trabajamos con múltiples industrias: Educación (plataformas de aprendizaje como ParrotfyIA), Recursos Humanos (coaching profesional como EcosueloLab), E-commerce (asistentes de ventas), Servicios Financieros, Salud, Inmobiliario, y más. Cada solución se personaliza según las necesidades específicas del sector.",
        },
      ],
    },
    {
      id: "pricing",
      title: "Precios y Planes",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500",
      faqs: [
        {
          id: "pricing-model",
          question: "¿Cuál es su modelo de precios?",
          answer:
            "Ofrecemos planes flexibles basados en el volumen de conversaciones y funcionalidades requeridas. Incluimos: Plan Starter (hasta 1,000 conversaciones/mes), Plan Professional (hasta 10,000 conversaciones/mes), y Plan Enterprise (volumen ilimitado). Todos incluyen soporte 24/7, integraciones básicas, y actualizaciones del modelo de IA.",
        },
        {
          id: "roi",
          question: "¿Qué ROI puedo esperar?",
          answer:
            "Nuestros clientes reportan un ROI promedio de 250-400% en el primer año. Los beneficios incluyen: reducción 60-70% en costos de soporte, aumento 180-300% en conversiones de ventas, mejora 85-95% en satisfacción del cliente, y escalabilidad automática sin contratar personal adicional.",
        },
        {
          id: "implementation-cost",
          question: "¿Cuánto cuesta la implementación inicial?",
          answer:
            "La implementación inicial varía según la complejidad: Proyectos básicos desde $5,000 USD (4-6 semanas), Proyectos avanzados $15,000-30,000 USD (8-12 semanas), Proyectos enterprise $50,000+ USD (12-16 semanas). Incluye análisis, desarrollo, entrenamiento del modelo, integración, pruebas, y capacitación del equipo.",
        },
      ],
    },
    {
      id: "technical",
      title: "Aspectos Técnicos",
      icon: Settings,
      color: "from-purple-500 to-pink-500",
      faqs: [
        {
          id: "integration",
          question: "¿Cómo se integra con nuestros sistemas existentes?",
          answer:
            "Utilizamos APIs REST y webhooks para integración seamless con CRM (Salesforce, HubSpot), ERP (SAP, Oracle), WhatsApp Business API, sistemas de email marketing, bases de datos, y más. Nuestro equipo maneja toda la integración técnica sin interrumpir sus operaciones actuales.",
        },
        {
          id: "security",
          question: "¿Qué medidas de seguridad implementan?",
          answer:
            "Implementamos seguridad de nivel enterprise: Encriptación end-to-end, cumplimiento GDPR/CCPA, auditorías de seguridad regulares, hosting en AWS/GCP con certificaciones SOC2, backup automático, monitoreo 24/7, y políticas estrictas de acceso a datos. Sus datos nunca se comparten con terceros.",
        },
        {
          id: "customization",
          question: "¿Qué tan personalizable es la solución?",
          answer:
            "Completamente personalizable: Entrenamiento con sus datos específicos, flujos de conversación únicos, integración con su branding, reglas de negocio personalizadas, múltiples idiomas, y capacidades específicas de su industria. Cada agente se desarrolla desde cero para sus necesidades exactas.",
        },
      ],
    },
    {
      id: "support",
      title: "Soporte y Mantenimiento",
      icon: Users,
      color: "from-orange-500 to-red-500",
      faqs: [
        {
          id: "support-hours",
          question: "¿Qué tipo de soporte ofrecen?",
          answer:
            "Soporte 24/7 con equipos en Chile, Singapur y Rusia. Incluye: Monitoreo proactivo, respuesta garantizada en <1 hora para issues críticos, actualizaciones regulares del modelo, optimización continua, reportes mensuales de performance, y acceso directo a nuestros ingenieros senior.",
        },
        {
          id: "maintenance",
          question: "¿Cómo manejan el mantenimiento y actualizaciones?",
          answer:
            "Mantenimiento automático incluido: Actualizaciones del modelo de IA cada mes, parches de seguridad automáticos, optimización de performance continua, backup diario, monitoreo de uptime 99.9%, y mejoras basadas en nuevas funcionalidades de OpenAI/WhatsApp sin costo adicional.",
        },
        {
          id: "training",
          question: "¿Proporcionan capacitación para nuestro equipo?",
          answer:
            "Sí, incluimos capacitación completa: Sesiones de onboarding para administradores, documentación técnica detallada, videos tutoriales, acceso a dashboard de analytics, capacitación en mejores prácticas, y sesiones de Q&A mensuales. Su equipo estará completamente preparado para maximizar el valor de la solución.",
        },
      ],
    },
  ]

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <HelpCircle className="w-4 h-4 mr-2" />
            Preguntas Frecuentes
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Resolvemos Todas Tus{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Dudas</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Encuentra respuestas detalladas sobre nuestros servicios, precios, implementación y soporte técnico.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.id} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div
                      className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>

                  {/* FAQ Items */}
                  <div className="space-y-4">
                    {category.faqs.map((faq) => (
                      <Collapsible
                        key={faq.id}
                        open={openItems.includes(faq.id)}
                        onOpenChange={() => toggleItem(faq.id)}
                      >
                        <CollapsibleTrigger asChild>
                          <Button
                            variant="ghost"
                            className="w-full justify-between text-left p-4 h-auto bg-slate-700/30 hover:bg-slate-700/50 border border-slate-600/50 rounded-lg"
                          >
                            <span className="text-white font-medium pr-4">{faq.question}</span>
                            <ChevronDown
                              className={`w-5 h-5 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                                openItems.includes(faq.id) ? "rotate-180" : ""
                              }`}
                            />
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-2">
                          <div className="p-4 bg-slate-700/20 rounded-lg border border-slate-600/30">
                            <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-700/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">¿No encontraste lo que buscabas?</h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Nuestro equipo de expertos está disponible 24/7 para responder cualquier pregunta específica sobre tu
                proyecto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                  onClick={() => window.open("https://wa.me/56940946660", "_blank")}
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Hablar con un Experto
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                  onClick={() => window.open("mailto:info@n3uralia.com", "_blank")}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Enviar Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
