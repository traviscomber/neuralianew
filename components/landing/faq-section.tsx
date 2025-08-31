import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function FAQSection() {
  const faqs = [
    {
      question: "¿Qué incluye un sistema full stack de IA?",
      answer:
        "Incluye todo: frontend (interfaz de usuario), backend (lógica de negocio), base de datos, APIs, integración con sistemas existentes (CRM, ERP), agentes conversacionales, y monitoreo 24/7. Es una solución completa, no solo un chatbot.",
    },
    {
      question: "¿Cómo se integra con nuestros sistemas actuales?",
      answer:
        "Nos conectamos directamente con tus sistemas existentes a través de APIs, webhooks, y conectores personalizados. Trabajamos con CRM (Salesforce, HubSpot), ERP (SAP, Oracle), bases de datos, WhatsApp Business API, y cualquier sistema que uses.",
    },
    {
      question: "¿Cuánto tiempo toma implementar una solución?",
      answer:
        "Depende de la complejidad. Un agente conversacional básico: 1-2 semanas. Sistema completo con integraciones: 4-8 semanas. Proyectos enterprise complejos: 2-3 meses. Siempre con entregas incrementales.",
    },
    {
      question: "¿Qué diferencia a Neuralia de otros proveedores de IA?",
      answer:
        "Somos full stack: no solo chatbots, sino sistemas completos. Tenemos equipo global 24/7 (humanos + IA). Integramos con sistemas reales, no soluciones aisladas. Y desarrollamos soluciones personalizadas, no plantillas genéricas.",
    },
    {
      question: "¿Cómo funciona el soporte 24/7 global?",
      answer:
        "Tenemos ingenieros en 4 zonas horarias (Chile, Rusia, Vietnam, Singapur) más sistemas de IA monitoreando constantemente. Siempre hay alguien disponible para resolver problemas o hacer mejoras.",
    },
    {
      question: "¿Cuáles son los costos de implementación?",
      answer:
        "Los costos varían según el alcance. Agente conversacional básico desde $2,000 USD. Sistemas full stack desde $10,000 USD. Proyectos enterprise desde $25,000 USD. Incluye desarrollo, implementación y 3 meses de soporte.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">¿Tienes dudas?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Respuestas a las preguntas más frecuentes sobre nuestros sistemas de IA
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-6">¿Tienes más preguntas? Hablemos directamente</p>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
            <a
              href="https://wa.me/56940946660"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Contactar por WhatsApp</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
