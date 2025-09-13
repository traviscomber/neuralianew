"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const { language } = useLanguage()

  const faqs = [
    {
      question: language === "en" ? "How long does deployment take?" : "¿Cuánto tiempo toma el despliegue?",
      answer:
        language === "en"
          ? "Most AI agents can be deployed within 48 hours. Complex enterprise solutions may take 1-2 weeks depending on integration requirements."
          : "La mayoría de agentes IA pueden desplegarse en 48 horas. Las soluciones empresariales complejas pueden tomar 1-2 semanas dependiendo de los requisitos de integración.",
    },
    {
      question: language === "en" ? "What technologies do you use?" : "¿Qué tecnologías utilizan?",
      answer:
        language === "en"
          ? "We use modern tech stack including Next.js, Node.js, Python, Redis, PostgreSQL, and various AI APIs. All solutions are built with enterprise-grade security and scalability."
          : "Utilizamos tecnologías modernas incluyendo Next.js, Node.js, Python, Redis, PostgreSQL, y varias APIs de IA. Todas las soluciones están construidas con seguridad y escalabilidad de nivel empresarial.",
    },
    {
      question: language === "en" ? "Do you provide ongoing support?" : "¿Proporcionan soporte continuo?",
      answer:
        language === "en"
          ? "Yes, we provide 24/7 support for all deployed solutions. This includes monitoring, maintenance, updates, and technical assistance."
          : "Sí, proporcionamos soporte 24/7 para todas las soluciones desplegadas. Esto incluye monitoreo, mantenimiento, actualizaciones y asistencia técnica.",
    },
    {
      question:
        language === "en" ? "Can you integrate with existing systems?" : "¿Pueden integrarse con sistemas existentes?",
      answer:
        language === "en"
          ? "Absolutely. We specialize in seamless integration with existing business systems, databases, and workflows. Our solutions are designed to enhance, not replace, your current infrastructure."
          : "Absolutamente. Nos especializamos en integración perfecta con sistemas empresariales existentes, bases de datos y flujos de trabajo. Nuestras soluciones están diseñadas para mejorar, no reemplazar, tu infraestructura actual.",
    },
    {
      question: language === "en" ? "What industries do you serve?" : "¿Qué industrias atienden?",
      answer:
        language === "en"
          ? "We serve various industries including healthcare, finance, agriculture, retail, manufacturing, and more. Our AI solutions are customizable for any business vertical."
          : "Atendemos varias industrias incluyendo salud, finanzas, agricultura, retail, manufactura, y más. Nuestras soluciones de IA son personalizables para cualquier vertical de negocio.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-light text-gray-700 mb-8">
            {language === "en" ? "Frequently Asked Questions" : "Preguntas Frecuentes"}
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-2xl px-6"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-gray-800 hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
