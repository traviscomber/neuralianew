"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/lib/language-context"

export function FAQSection() {
  const { language } = useLanguage()

  const faqs = [
    {
      question:
        language === "en"
          ? "How long does it take to develop an AI solution?"
          : "¿Cuánto tiempo toma desarrollar una solución de IA?",
      answer:
        language === "en"
          ? "Development time varies based on complexity, but most projects are completed within 2-6 weeks. Simple AI agents can be deployed in as little as 1 week, while complex enterprise solutions may take 2-3 months."
          : "El tiempo de desarrollo varía según la complejidad, pero la mayoría de los proyectos se completan en 2-6 semanas. Los agentes de IA simples pueden desplegarse en tan solo 1 semana, mientras que las soluciones empresariales complejas pueden tomar 2-3 meses.",
    },
    {
      question: language === "en" ? "What technologies do you use?" : "¿Qué tecnologías utilizan?",
      answer:
        language === "en"
          ? "We use modern technologies including React, Node.js, Python, PostgreSQL, Redis, and cloud platforms like Vercel and Supabase. For AI, we work with OpenAI, custom models, and various ML frameworks."
          : "Utilizamos tecnologías modernas incluyendo React, Node.js, Python, PostgreSQL, Redis, y plataformas en la nube como Vercel y Supabase. Para IA, trabajamos con OpenAI, modelos personalizados y varios frameworks de ML.",
    },
    {
      question: language === "en" ? "Do you provide ongoing support?" : "¿Proporcionan soporte continuo?",
      answer:
        language === "en"
          ? "Yes, we offer 24/7 support and maintenance services. Our support includes monitoring, updates, bug fixes, and feature enhancements to ensure your AI solutions continue to perform optimally."
          : "Sí, ofrecemos servicios de soporte y mantenimiento 24/7. Nuestro soporte incluye monitoreo, actualizaciones, corrección de errores y mejoras de funcionalidades para asegurar que tus soluciones de IA continúen funcionando de manera óptima.",
    },
    {
      question:
        language === "en" ? "Can you integrate with existing systems?" : "¿Pueden integrarse con sistemas existentes?",
      answer:
        language === "en"
          ? "Absolutely. We specialize in seamless integration with existing systems, APIs, databases, and third-party services. Our solutions are designed to work with your current infrastructure without disruption."
          : "Absolutamente. Nos especializamos en la integración perfecta con sistemas existentes, APIs, bases de datos y servicios de terceros. Nuestras soluciones están diseñadas para trabajar con tu infraestructura actual sin interrupciones.",
    },
    {
      question: language === "en" ? "What industries do you serve?" : "¿Qué industrias atienden?",
      answer:
        language === "en"
          ? "We serve various industries including healthcare, finance, e-commerce, manufacturing, agriculture, and technology. Our AI solutions are customized to meet the specific needs of each industry."
          : "Atendemos varias industrias incluyendo salud, finanzas, comercio electrónico, manufactura, agricultura y tecnología. Nuestras soluciones de IA están personalizadas para satisfacer las necesidades específicas de cada industria.",
    },
    {
      question: language === "en" ? "How do you ensure data security?" : "¿Cómo aseguran la seguridad de los datos?",
      answer:
        language === "en"
          ? "We follow enterprise-grade security practices including ISO 27001 compliance, SOC 2 Type II certification, end-to-end encryption, and secure cloud infrastructure. Your data privacy and security are our top priorities."
          : "Seguimos prácticas de seguridad de nivel empresarial incluyendo cumplimiento ISO 27001, certificación SOC 2 Type II, cifrado de extremo a extremo e infraestructura segura en la nube. La privacidad y seguridad de tus datos son nuestras principales prioridades.",
    },
  ]

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <Badge className="bg-white text-gray-700 border-0 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full mb-4 sm:mb-6 lg:mb-8 font-medium shadow-sm">
            {language === "en" ? "FAQ" : "Preguntas Frecuentes"}
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-4 sm:mb-6 lg:mb-8 leading-[1.1] tracking-tight">
            {language === "en" ? "Frequently Asked" : "Preguntas"}
            <br />
            <span className="font-bold text-black">{language === "en" ? "Questions" : "Frecuentes"}</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            {language === "en"
              ? "Everything you need to know about our AI solutions and services."
              : "Todo lo que necesitas saber sobre nuestras soluciones y servicios de IA."}
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white border border-gray-200 rounded-2xl px-6 sm:px-8 py-2 sm:py-4 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-base sm:text-lg lg:text-xl font-semibold text-gray-800 hover:no-underline py-4 sm:py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed pb-4 sm:pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
