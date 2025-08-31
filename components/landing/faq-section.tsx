import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Qué hace diferente a Neuralia de otras plataformas de IA?",
    answer:
      "Neuralia ofrece un ecosistema completo de IA copilotado por inteligencia artificial. Nuestros agentes no solo responden preguntas, sino que aprenden, se adaptan y toman decisiones autónomas. Además, proporcionamos infraestructura fullstack, desde el desarrollo hasta el despliegue y monitoreo.",
  },
  {
    question: "¿Cómo funcionan los agentes IA especializados como EcosueloLab?",
    answer:
      "Nuestros agentes especializados están entrenados con datos específicos de cada industria. EcosueloLab, por ejemplo, utiliza bases de datos de análisis de suelos, patrones climáticos y técnicas agrícolas para proporcionar recomendaciones precisas y personalizadas para cada tipo de cultivo y región.",
  },
  {
    question: "¿Puedo integrar los agentes IA con mis sistemas existentes?",
    answer:
      "Absolutamente. Neuralia ofrece APIs robustas y conectores pre-construidos para integrar con CRM, ERP, bases de datos y sistemas de terceros. Nuestro equipo técnico te ayuda con la implementación para asegurar una integración perfecta.",
  },
  {
    question: "¿Qué nivel de personalización ofrecen para diferentes industrias?",
    answer:
      "Ofrecemos personalización completa. Puedes entrenar agentes con tus propios datos, definir flujos de conversación específicos, integrar con tus sistemas y personalizar la interfaz. Tenemos plantillas para más de 20 industrias diferentes.",
  },
  {
    question: "¿Cómo garantizan la seguridad y privacidad de los datos?",
    answer:
      "Implementamos cifrado de extremo a extremo, cumplimos con GDPR y SOC 2, y ofrecemos despliegues on-premise para máxima seguridad. Todos los datos se procesan de forma segura y nunca se comparten con terceros sin autorización explícita.",
  },
  {
    question: "¿Cuánto tiempo toma implementar un agente IA personalizado?",
    answer:
      "Con nuestras plantillas pre-construidas, puedes tener un agente básico funcionando en 24-48 horas. Para implementaciones personalizadas complejas, el tiempo típico es de 2-4 semanas, incluyendo entrenamiento, pruebas y despliegue.",
  },
  {
    question: "¿Ofrecen soporte técnico y mantenimiento continuo?",
    answer:
      "Sí, proporcionamos soporte 24/7, monitoreo proactivo, actualizaciones automáticas y un equipo dedicado de éxito del cliente. También ofrecemos capacitación para tu equipo y documentación completa.",
  },
  {
    question: "¿Cuáles son los costos y modelos de precios disponibles?",
    answer:
      "Ofrecemos planes flexibles desde $99/mes para startups hasta soluciones enterprise personalizadas. Los precios se basan en el número de conversaciones, usuarios activos y funcionalidades avanzadas. Contacta con nuestro equipo para una cotización personalizada.",
  },
]

export function FAQSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
            Preguntas Frecuentes
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Resolvemos Todas
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block">
              Tus Dudas
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestra plataforma de agentes IA y cómo pueden
            transformar tu negocio.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-600 transition-colors duration-300">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pt-2">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">¿No encuentras la respuesta que buscas?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
              Contactar Soporte
            </Button>
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 bg-transparent">
              Agendar Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
