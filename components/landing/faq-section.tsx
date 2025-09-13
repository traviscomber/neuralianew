"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const { t, language } = useLanguage()

  const faqs = [
    {
      question: language === "en" ? "How long does deployment take?" : "¿Cuánto tiempo toma el despliegue?",
      answer:
        language === "en"
          ? "Most AI agents can be deployed within 48 hours. Complex enterprise solutions may take 1-2 weeks depending on integration requirements and customization needs."
          : "La mayoría de agentes IA pueden desplegarse en 48 horas. Las soluciones empresariales complejas pueden tomar 1-2 semanas dependiendo de los requisitos de integración y necesidades de personalización.",
    },
    {
      question: language === "en" ? "What technologies do you use?" : "¿Qué tecnologías utilizan?",
      answer:
        language === "en"
          ? "We use modern tech stack including Next.js, Node.js, Python, Redis, PostgreSQL, and various AI APIs like OpenAI GPT-4. All solutions are built with enterprise-grade security and scalability in mind."
          : "Utilizamos tecnologías modernas incluyendo Next.js, Node.js, Python, Redis, PostgreSQL, y varias APIs de IA como OpenAI GPT-4. Todas las soluciones están construidas con seguridad y escalabilidad de nivel empresarial.",
    },
    {
      question: language === "en" ? "Do you provide ongoing support?" : "¿Proporcionan soporte continuo?",
      answer:
        language === "en"
          ? "Yes, we provide 24/7 support for all deployed solutions. This includes monitoring, maintenance, updates, technical assistance, and performance optimization to ensure your AI systems run smoothly."
          : "Sí, proporcionamos soporte 24/7 para todas las soluciones desplegadas. Esto incluye monitoreo, mantenimiento, actualizaciones, asistencia técnica y optimización de rendimiento para asegurar que tus sistemas IA funcionen sin problemas.",
    },
    {
      question:
        language === "en" ? "Can you integrate with existing systems?" : "¿Pueden integrarse con sistemas existentes?",
      answer:
        language === "en"
          ? "Absolutely. We specialize in seamless integration with existing business systems, databases, CRMs, ERPs, and workflows. Our solutions are designed to enhance, not replace, your current infrastructure while maintaining data integrity."
          : "Absolutamente. Nos especializamos en integración perfecta con sistemas empresariales existentes, bases de datos, CRMs, ERPs y flujos de trabajo. Nuestras soluciones están diseñadas para mejorar, no reemplazar, tu infraestructura actual manteniendo la integridad de los datos.",
    },
    {
      question: language === "en" ? "What industries do you serve?" : "¿Qué industrias atienden?",
      answer:
        language === "en"
          ? "We serve various industries including healthcare, finance, agriculture, retail, manufacturing, education, and more. Our AI solutions are highly customizable and can be adapted to any business vertical or specific industry requirements."
          : "Atendemos varias industrias incluyendo salud, finanzas, agricultura, retail, manufactura, educación, y más. Nuestras soluciones de IA son altamente personalizables y pueden adaptarse a cualquier vertical de negocio o requisitos específicos de la industria.",
    },
    {
      question: language === "en" ? "What are your pricing models?" : "¿Cuáles son sus modelos de precios?",
      answer:
        language === "en"
          ? "We offer flexible pricing models including project-based pricing, monthly subscriptions, and enterprise packages. Pricing depends on complexity, features, and scale. Contact us for a personalized quote based on your specific needs."
          : "Ofrecemos modelos de precios flexibles incluyendo precios por proyecto, suscripciones mensuales y paquetes empresariales. Los precios dependen de la complejidad, características y escala. Contáctanos para una cotización personalizada basada en tus necesidades específicas.",
    },
  ]

  return (
    <section id="faq" className="bg-white py-20 sm:py-24 lg:py-32 px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <Badge className="bg-gray-100 text-gray-700 border-0 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-full mb-6 lg:mb-8 font-medium">
            {t("faq.badge")}
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-6 lg:mb-8 leading-[1.1] tracking-tight">
            {t("faq.title")}
            <br />
            <span className="font-bold text-black">{t("faq.titleBold")}</span>
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-light leading-relaxed">{t("faq.subtitle")}</p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4 lg:space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 border border-gray-200 rounded-2xl px-6 sm:px-8 hover:shadow-sm transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left text-lg sm:text-xl lg:text-2xl font-medium text-gray-800 hover:no-underline py-6 sm:py-8 leading-relaxed">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base sm:text-lg text-gray-600 pb-6 sm:pb-8 leading-relaxed font-light">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
