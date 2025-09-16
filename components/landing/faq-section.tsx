"use client"

import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/lib/language-context"

export function FAQSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Frequently Asked Questions",
      title: "Everything You Need to Know About N3uralia",
      subtitle: "Get answers to the most common questions about our AI agent platform and services.",
      faqs: [
        {
          question: "How quickly can I deploy an AI agent?",
          answer:
            "Most AI agents can be deployed within 2-5 business days, depending on complexity and integration requirements. Our streamlined process includes consultation, configuration, testing, and deployment with full support throughout.",
        },
        {
          question: "What platforms do your AI agents support?",
          answer:
            "Our AI agents work across all major platforms including WhatsApp, Telegram, web chat, email, voice calls, Facebook Messenger, Instagram, and can integrate with 50+ business tools like CRM systems, calendars, and e-commerce platforms.",
        },
        {
          question: "How secure is my data with N3uralia?",
          answer:
            "We maintain bank-level security with SOC 2 compliance, end-to-end encryption, regular security audits, and strict data privacy protocols. Your data is never shared with third parties and remains completely under your control.",
        },
        {
          question: "Can the AI agents handle multiple languages?",
          answer:
            "Yes, our AI agents support 50+ languages with native-level understanding and can automatically detect and respond in the customer's preferred language, making them perfect for global businesses.",
        },
        {
          question: "What kind of ROI can I expect?",
          answer:
            "Most clients see 60-80% reduction in operational costs, 3x faster response times, and 40% improvement in customer satisfaction within the first 3 months. ROI typically becomes evident within 30-60 days of deployment.",
        },
        {
          question: "Do you provide ongoing support and maintenance?",
          answer:
            "Absolutely. We provide 24/7 technical support, regular performance monitoring, continuous optimization, and free updates to ensure your AI agents perform at their best and evolve with your business needs.",
        },
      ],
    },
    es: {
      badge: "Preguntas Frecuentes",
      title: "Todo Lo Que Necesitas Saber Sobre N3uralia",
      subtitle: "Obtén respuestas a las preguntas más comunes sobre nuestra plataforma de agentes de IA y servicios.",
      faqs: [
        {
          question: "¿Qué tan rápido puedo desplegar un agente de IA?",
          answer:
            "La mayoría de los agentes de IA pueden desplegarse en 2-5 días hábiles, dependiendo de la complejidad y requisitos de integración. Nuestro proceso optimizado incluye consulta, configuración, pruebas y despliegue con soporte completo.",
        },
        {
          question: "¿Qué plataformas soportan sus agentes de IA?",
          answer:
            "Nuestros agentes de IA funcionan en todas las plataformas principales incluyendo WhatsApp, Telegram, chat web, email, llamadas de voz, Facebook Messenger, Instagram, y pueden integrarse con más de 50 herramientas empresariales como sistemas CRM, calendarios y plataformas de e-commerce.",
        },
        {
          question: "¿Qué tan segura está mi información con N3uralia?",
          answer:
            "Mantenemos seguridad de nivel bancario con cumplimiento SOC 2, encriptación de extremo a extremo, auditorías de seguridad regulares y protocolos estrictos de privacidad de datos. Tu información nunca se comparte con terceros y permanece completamente bajo tu control.",
        },
        {
          question: "¿Pueden los agentes de IA manejar múltiples idiomas?",
          answer:
            "Sí, nuestros agentes de IA soportan más de 50 idiomas con comprensión de nivel nativo y pueden detectar automáticamente y responder en el idioma preferido del cliente, haciéndolos perfectos para negocios globales.",
        },
        {
          question: "¿Qué tipo de ROI puedo esperar?",
          answer:
            "La mayoría de los clientes ven una reducción del 60-80% en costos operacionales, tiempos de respuesta 3x más rápidos y 40% de mejora en satisfacción del cliente en los primeros 3 meses. El ROI típicamente se hace evidente en 30-60 días del despliegue.",
        },
        {
          question: "¿Proporcionan soporte y mantenimiento continuo?",
          answer:
            "Absolutamente. Proporcionamos soporte técnico 24/7, monitoreo regular de rendimiento, optimización continua y actualizaciones gratuitas para asegurar que tus agentes de IA funcionen al máximo y evolucionen con las necesidades de tu negocio.",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 text-sm font-medium bg-purple-50 text-purple-700 border-purple-200"
          >
            {t.badge}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{t.title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {t.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-2 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
