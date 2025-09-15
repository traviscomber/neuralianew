"use client"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/lib/language-context"

export function FaqSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Frequently Asked Questions",
      title: "Everything You Need to Know About N3uralia",
      subtitle: "Get answers to the most common questions about our AI solutions and services.",
      faqs: [
        {
          question: "How quickly can I deploy an AI agent for my business?",
          answer:
            "Most AI agents can be deployed within 1-2 weeks. Simple chatbots can be ready in 2-3 days, while complex enterprise solutions may take 2-4 weeks depending on integration requirements and customization needs.",
        },
        {
          question: "What platforms and channels do your AI agents support?",
          answer:
            "Our AI agents work across all major platforms including WhatsApp, Telegram, Facebook Messenger, web chat, email, voice calls, and can integrate with your existing CRM, helpdesk, or business systems.",
        },
        {
          question: "How secure is my data with N3uralia's AI solutions?",
          answer:
            "We maintain enterprise-grade security with SOC 2 compliance, end-to-end encryption, regular security audits, and data processing in secure cloud environments. Your data never leaves our protected infrastructure.",
        },
        {
          question: "Can the AI agents handle multiple languages?",
          answer:
            "Yes, our AI agents support 50+ languages with native-level understanding. They can automatically detect the customer's language and respond appropriately, maintaining context and cultural nuances.",
        },
        {
          question: "What happens if the AI agent can't handle a customer inquiry?",
          answer:
            "Our smart escalation system seamlessly transfers complex queries to human agents with full conversation context. You can set custom rules for when and how escalations occur.",
        },
        {
          question: "How much does it cost to implement N3uralia's AI solutions?",
          answer:
            "Pricing varies based on your specific needs, volume, and features required. We offer flexible plans starting from $99/month for small businesses to enterprise solutions. Contact us for a custom quote.",
        },
        {
          question: "Do I need technical expertise to manage the AI agents?",
          answer:
            "No technical expertise required. Our intuitive dashboard allows you to manage conversations, update responses, view analytics, and modify agent behavior through a user-friendly interface.",
        },
        {
          question: "Can I integrate N3uralia with my existing business tools?",
          answer:
            "Absolutely. We offer 50+ pre-built integrations with popular tools like Salesforce, HubSpot, Shopify, Zapier, and custom API integrations for your specific business systems.",
        },
      ],
    },
    es: {
      badge: "Preguntas Frecuentes",
      title: "Todo Lo Que Necesitas Saber Sobre N3uralia",
      subtitle: "Obtén respuestas a las preguntas más comunes sobre nuestras soluciones y servicios de IA.",
      faqs: [
        {
          question: "¿Qué tan rápido puedo desplegar un agente de IA para mi negocio?",
          answer:
            "La mayoría de los agentes de IA pueden desplegarse en 1-2 semanas. Los chatbots simples pueden estar listos en 2-3 días, mientras que las soluciones empresariales complejas pueden tomar 2-4 semanas dependiendo de los requisitos de integración y personalización.",
        },
        {
          question: "¿Qué plataformas y canales soportan sus agentes de IA?",
          answer:
            "Nuestros agentes de IA funcionan en todas las plataformas principales incluyendo WhatsApp, Telegram, Facebook Messenger, chat web, email, llamadas de voz, y pueden integrarse con tu CRM existente, helpdesk, o sistemas empresariales.",
        },
        {
          question: "¿Qué tan segura está mi información con las soluciones de IA de N3uralia?",
          answer:
            "Mantenemos seguridad de nivel empresarial con cumplimiento SOC 2, encriptación de extremo a extremo, auditorías de seguridad regulares, y procesamiento de datos en entornos de nube seguros. Tus datos nunca salen de nuestra infraestructura protegida.",
        },
        {
          question: "¿Pueden los agentes de IA manejar múltiples idiomas?",
          answer:
            "Sí, nuestros agentes de IA soportan más de 50 idiomas con comprensión de nivel nativo. Pueden detectar automáticamente el idioma del cliente y responder apropiadamente, manteniendo contexto y matices culturales.",
        },
        {
          question: "¿Qué pasa si el agente de IA no puede manejar una consulta del cliente?",
          answer:
            "Nuestro sistema de escalación inteligente transfiere sin problemas consultas complejas a agentes humanos con contexto completo de la conversación. Puedes establecer reglas personalizadas para cuándo y cómo ocurren las escalaciones.",
        },
        {
          question: "¿Cuánto cuesta implementar las soluciones de IA de N3uralia?",
          answer:
            "Los precios varían según tus necesidades específicas, volumen y características requeridas. Ofrecemos planes flexibles desde $99/mes para pequeñas empresas hasta soluciones empresariales. Contáctanos para una cotización personalizada.",
        },
        {
          question: "¿Necesito experiencia técnica para gestionar los agentes de IA?",
          answer:
            "No se requiere experiencia técnica. Nuestro dashboard intuitivo te permite gestionar conversaciones, actualizar respuestas, ver análisis y modificar el comportamiento del agente a través de una interfaz fácil de usar.",
        },
        {
          question: "¿Puedo integrar N3uralia con mis herramientas empresariales existentes?",
          answer:
            "Absolutamente. Ofrecemos más de 50 integraciones pre-construidas con herramientas populares como Salesforce, HubSpot, Shopify, Zapier, e integraciones API personalizadas para tus sistemas empresariales específicos.",
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
            className="mb-4 px-4 py-2 text-sm font-medium bg-black/5 text-black border-black/10"
          >
            {t.badge}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">{t.title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {t.faqs.map((faq, index) => (
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
  )
}
