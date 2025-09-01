"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageCircle } from "lucide-react"

export function FAQSection() {
  const faqs = [
    {
      question: "¿Cuánto tiempo toma implementar una solución de IA?",
      answer:
        "El tiempo de implementación varía según la complejidad del proyecto. Un chatbot básico puede estar listo en 2-3 semanas, mientras que sistemas más complejos pueden tomar 2-3 meses. Siempre entregamos un MVP funcional en las primeras 4 semanas para que puedas ver resultados inmediatos.",
    },
    {
      question: "¿Qué tecnologías utilizan para desarrollar las soluciones?",
      answer:
        "Utilizamos tecnologías de vanguardia como OpenAI GPT-4, Python, Node.js, React, y frameworks de machine learning como TensorFlow y PyTorch. Nuestra infraestructura está en AWS/Google Cloud con arquitectura serverless para máxima escalabilidad y disponibilidad 99.9%.",
    },
    {
      question: "¿Cómo se integra con nuestros sistemas existentes?",
      answer:
        "Nuestras soluciones se integran perfectamente con sistemas existentes a través de APIs REST, webhooks y conectores nativos. Soportamos CRMs como Salesforce, HubSpot, ERPs como SAP, y plataformas de e-commerce como Shopify. La integración es transparente y no interrumpe operaciones.",
    },
    {
      question: "¿Cuál es el ROI esperado de implementar IA?",
      answer:
        "Nuestros clientes ven un ROI promedio de 250% en los primeros 12 meses. Los beneficios incluyen: 40-60% reducción en costos operativos, 80% mejora en tiempo de respuesta al cliente, 35% aumento en conversiones, y liberación de 70% del tiempo del equipo para tareas estratégicas.",
    },
    {
      question: "¿Ofrecen soporte y mantenimiento post-implementación?",
      answer:
        "Sí, ofrecemos soporte 24/7 con diferentes niveles de SLA. Incluye monitoreo proactivo, actualizaciones automáticas, optimización continua de modelos, y un equipo dedicado de ingenieros. También proporcionamos capacitación completa para tu equipo y documentación técnica detallada.",
    },
    {
      question: "¿Cómo garantizan la seguridad y privacidad de los datos?",
      answer:
        "Implementamos seguridad de nivel bancario con encriptación end-to-end, cumplimiento GDPR/CCPA, auditorías de seguridad regulares, y hosting en servidores certificados SOC 2. Todos los datos se procesan bajo estrictos protocolos de privacidad y nunca se comparten con terceros.",
    },
    {
      question: "¿Cuáles son los costos de implementación?",
      answer:
        "Los costos varían según el alcance del proyecto. Chatbots básicos desde $2,000 USD, sistemas multicanal desde $5,000 USD, y soluciones enterprise desde $15,000 USD. Ofrecemos planes de pago flexibles y modelos de pricing basados en resultados. Agenda una consulta gratuita para una cotización personalizada.",
    },
    {
      question: "¿Pueden trabajar con empresas de cualquier tamaño?",
      answer:
        "Absolutamente. Hemos trabajado con startups, PYMEs y empresas Fortune 500. Nuestras soluciones son modulares y escalables, adaptándose desde 100 hasta 1M+ usuarios. Tenemos planes específicos para cada segmento: Starter para startups, Professional para PYMEs, y Enterprise para grandes corporaciones.",
    },
  ]

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(147,51,234,0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.2),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-100 to-blue-200 bg-clip-text text-transparent">
              Preguntas
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Frecuentes
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestras soluciones de IA y cómo pueden transformar
            tu negocio.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-slate-700/50 rounded-lg px-6 py-2 hover:bg-slate-700/30 transition-colors"
                  >
                    <AccordionTrigger className="text-left text-white hover:text-purple-300 transition-colors">
                      <span className="font-semibold">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300 leading-relaxed pt-4">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-slate-300 mb-6">¿Tienes más preguntas? Nuestro equipo está aquí para ayudarte.</p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contactar por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
