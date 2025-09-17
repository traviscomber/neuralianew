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
      subtitle: "Get answers to the most common questions about our AI solutions and services.",
      faqs: [
        {
          question: "What types of AI agents does N3uralia develop?",
          answer:
            "We develop custom AI agents for customer service, sales automation, lead qualification, appointment scheduling, order processing, and technical support. Each agent is tailored to your specific business needs and industry requirements.",
        },
        {
          question: "How long does it take to implement an AI solution?",
          answer:
            "Implementation time varies depending on complexity, but most projects are completed within 2-4 weeks. Simple chatbots can be deployed in days, while complex multi-agent systems may take 4-6 weeks. We provide a detailed timeline during our initial consultation.",
        },
        {
          question: "Do you provide ongoing support and maintenance?",
          answer:
            "Yes, we offer comprehensive support packages including 24/7 monitoring, regular updates, performance optimization, and continuous training of your AI agents. Our support team ensures your systems run smoothly and evolve with your business needs.",
        },
        {
          question: "Can N3uralia integrate with our existing systems?",
          answer:
            "Absolutely. Our AI solutions integrate seamlessly with popular CRM systems, e-commerce platforms, communication tools, and custom applications. We use APIs and webhooks to ensure smooth data flow between systems.",
        },
        {
          question: "What languages do your AI agents support?",
          answer:
            "Our AI agents support over 10 languages including Spanish, English, Portuguese, French, and more. We can customize language support based on your target markets and customer base.",
        },
        {
          question: "How do you ensure data security and privacy?",
          answer:
            "We implement bank-level security measures including end-to-end encryption, secure data storage, regular security audits, and compliance with international data protection regulations. Your data privacy is our top priority.",
        },
      ],
    },
    es: {
      badge: "Preguntas Frecuentes",
      title: "Todo Lo Que Necesitas Saber Sobre N3uralia",
      subtitle: "Obtén respuestas a las preguntas más comunes sobre nuestras soluciones y servicios de IA.",
      faqs: [
        {
          question: "¿Qué tipos de agentes de IA desarrolla N3uralia?",
          answer:
            "Desarrollamos agentes de IA personalizados para servicio al cliente, automatización de ventas, calificación de leads, programación de citas, procesamiento de pedidos y soporte técnico. Cada agente se adapta a las necesidades específicas de tu negocio y requisitos de la industria.",
        },
        {
          question: "¿Cuánto tiempo toma implementar una solución de IA?",
          answer:
            "El tiempo de implementación varía según la complejidad, pero la mayoría de los proyectos se completan en 2-4 semanas. Los chatbots simples pueden desplegarse en días, mientras que los sistemas multi-agente complejos pueden tomar 4-6 semanas. Proporcionamos un cronograma detallado durante nuestra consulta inicial.",
        },
        {
          question: "¿Proporcionan soporte y mantenimiento continuo?",
          answer:
            "Sí, ofrecemos paquetes de soporte integral que incluyen monitoreo 24/7, actualizaciones regulares, optimización de rendimiento y entrenamiento continuo de tus agentes de IA. Nuestro equipo de soporte asegura que tus sistemas funcionen sin problemas y evolucionen con las necesidades de tu negocio.",
        },
        {
          question: "¿Puede N3uralia integrarse con nuestros sistemas existentes?",
          answer:
            "Absolutamente. Nuestras soluciones de IA se integran perfectamente con sistemas CRM populares, plataformas de e-commerce, herramientas de comunicación y aplicaciones personalizadas. Usamos APIs y webhooks para asegurar un flujo de datos fluido entre sistemas.",
        },
        {
          question: "¿Qué idiomas soportan sus agentes de IA?",
          answer:
            "Nuestros agentes de IA soportan más de 10 idiomas incluyendo español, inglés, portugués, francés y más. Podemos personalizar el soporte de idiomas basado en tus mercados objetivo y base de clientes.",
        },
        {
          question: "¿Cómo aseguran la seguridad y privacidad de los datos?",
          answer:
            "Implementamos medidas de seguridad de nivel bancario incluyendo encriptación de extremo a extremo, almacenamiento seguro de datos, auditorías de seguridad regulares y cumplimiento con regulaciones internacionales de protección de datos. La privacidad de tus datos es nuestra máxima prioridad.",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 text-sm font-medium bg-orange-50 text-orange-700 border-orange-200"
          >
            {t.badge}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{t.title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {t.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm border-0">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
