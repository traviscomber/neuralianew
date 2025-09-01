"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

export default function FAQSection() {
  const faqs = [
    {
      question: "¿Qué tipos de agentes de IA pueden desarrollar?",
      answer:
        "Desarrollamos agentes especializados para atención al cliente, ventas, soporte técnico, recursos humanos, y procesos internos. Cada agente se personaliza según las necesidades específicas de tu industria y empresa.",
    },
    {
      question: "¿Cuánto tiempo toma implementar un agente de IA?",
      answer:
        "El tiempo de implementación varía según la complejidad del proyecto. Un agente básico puede estar funcionando en 2-3 semanas, mientras que soluciones más complejas pueden tomar 6-8 semanas. Siempre proporcionamos un cronograma detallado al inicio del proyecto.",
    },
    {
      question: "¿Los agentes pueden integrarse con nuestros sistemas existentes?",
      answer:
        "Sí, nuestros agentes se integran perfectamente con CRM, ERP, bases de datos, WhatsApp Business, sistemas de tickets, y prácticamente cualquier API o plataforma que uses actualmente.",
    },
    {
      question: "¿Qué nivel de personalización ofrecen?",
      answer:
        "Ofrecemos personalización completa: desde el tono de voz y personalidad del agente, hasta flujos de conversación específicos, integración con datos propios, y adaptación a procesos únicos de tu empresa.",
    },
    {
      question: "¿Cómo garantizan la seguridad de los datos?",
      answer:
        "Implementamos encriptación end-to-end, cumplimos con GDPR y normativas locales, realizamos auditorías de seguridad regulares, y todos los datos se procesan en servidores seguros con acceso restringido.",
    },
    {
      question: "¿Ofrecen soporte y mantenimiento continuo?",
      answer:
        "Sí, incluimos soporte 24/7, actualizaciones regulares, monitoreo de rendimiento, optimización continua basada en métricas, y un equipo dedicado para resolver cualquier consulta técnica.",
    },
  ]

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border-yellow-500/30">
            Preguntas Frecuentes
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Resolvemos tus dudas</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Las preguntas más comunes sobre nuestros agentes de IA conversacional
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-slate-800 border-slate-700 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-white hover:text-slate-300 py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 pb-6 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
