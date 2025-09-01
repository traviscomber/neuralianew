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
        "El tiempo de implementación varía según la complejidad del proyecto. Un agente básico puede estar listo en 2-3 semanas, mientras que soluciones más complejas pueden tomar 6-8 semanas. Incluimos capacitación y soporte completo.",
    },
    {
      question: "¿Los agentes pueden integrarse con nuestros sistemas existentes?",
      answer:
        "Sí, nuestros agentes se integran con CRM, ERP, bases de datos, WhatsApp Business, sistemas de tickets, y más de 100 plataformas diferentes. Utilizamos APIs robustas y protocolos de seguridad empresarial.",
    },
    {
      question: "¿Qué nivel de personalización ofrecen?",
      answer:
        "Personalización completa: tono de voz, conocimiento específico de tu empresa, flujos de conversación, integraciones, reportes personalizados, y branding. Cada agente refleja la identidad de tu marca.",
    },
    {
      question: "¿Cómo garantizan la seguridad de los datos?",
      answer:
        "Implementamos encriptación end-to-end, cumplimos con GDPR y normativas locales, auditorías de seguridad regulares, y hosting en servidores certificados. Tus datos están completamente protegidos.",
    },
    {
      question: "¿Ofrecen soporte técnico continuo?",
      answer:
        "Sí, ofrecemos soporte 24/7 con nuestro equipo multidisciplinario distribuido globalmente. Incluye monitoreo proactivo, actualizaciones automáticas, y optimización continua del rendimiento.",
    },
  ]

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">Preguntas Frecuentes</Badge>
          <h2 className="text-4xl font-bold text-white mb-4">Resolvemos tus dudas</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Todo lo que necesitas saber sobre nuestros agentes de IA conversacional
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-slate-800 border-slate-700 rounded-lg px-6"
            >
              <AccordionTrigger className="text-white hover:text-blue-300 text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-slate-300 leading-relaxed">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
