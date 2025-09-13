"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/lib/language-context"

export function FAQSection() {
  const { language } = useLanguage()

  const faqs = [
    {
      question:
        language === "en" ? "What are AI agents and how do they work?" : "¿Qué son los agentes de IA y cómo funcionan?",
      answer:
        language === "en"
          ? "AI agents are intelligent software programs that can perform tasks autonomously. They use machine learning and natural language processing to understand, learn, and execute complex business processes without human intervention."
          : "Los agentes de IA son programas de software inteligentes que pueden realizar tareas de forma autónoma. Utilizan aprendizaje automático y procesamiento de lenguaje natural para entender, aprender y ejecutar procesos empresariales complejos sin intervención humana.",
    },
    {
      question: language === "en" ? "How long does implementation take?" : "¿Cuánto tiempo toma la implementación?",
      answer:
        language === "en"
          ? "Implementation time varies depending on complexity, but typically ranges from 2-8 weeks. We work closely with your team to ensure minimal disruption to your current operations while maximizing the benefits of automation."
          : "El tiempo de implementación varía según la complejidad, pero típicamente oscila entre 2-8 semanas. Trabajamos estrechamente con tu equipo para asegurar una mínima interrupción de tus operaciones actuales mientras maximizamos los beneficios de la automatización.",
    },
    {
      question: language === "en" ? "What kind of support do you provide?" : "¿Qué tipo de soporte proporcionan?",
      answer:
        language === "en"
          ? "We provide comprehensive 24/7 support including monitoring, maintenance, updates, and optimization. Our team ensures your AI agents continue to perform at peak efficiency and adapt to your evolving business needs."
          : "Proporcionamos soporte integral 24/7 incluyendo monitoreo, mantenimiento, actualizaciones y optimización. Nuestro equipo asegura que tus agentes de IA continúen funcionando con máxima eficiencia y se adapten a las necesidades cambiantes de tu negocio.",
    },
    {
      question:
        language === "en" ? "Is my data secure with AI agents?" : "¿Están seguros mis datos con los agentes de IA?",
      answer:
        language === "en"
          ? "Absolutely. We implement enterprise-grade security measures including encryption, secure APIs, and compliance with international data protection standards. Your data remains private and secure at all times."
          : "Absolutamente. Implementamos medidas de seguridad de nivel empresarial incluyendo encriptación, APIs seguras y cumplimiento con estándares internacionales de protección de datos. Tus datos permanecen privados y seguros en todo momento.",
    },
    {
      question:
        language === "en"
          ? "Can AI agents integrate with existing systems?"
          : "¿Pueden los agentes de IA integrarse con sistemas existentes?",
      answer:
        language === "en"
          ? "Yes, our AI agents are designed to seamlessly integrate with your existing software, databases, and workflows. We ensure compatibility and smooth data flow between all your business systems."
          : "Sí, nuestros agentes de IA están diseñados para integrarse perfectamente con tu software, bases de datos y flujos de trabajo existentes. Aseguramos compatibilidad y flujo de datos fluido entre todos tus sistemas empresariales.",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-light text-gray-900 mb-4">
            {language === "en" ? "Frequently Asked Questions" : "Preguntas Frecuentes"}
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            {language === "en"
              ? "Everything you need to know about our AI agent solutions"
              : "Todo lo que necesitas saber sobre nuestras soluciones de agentes de IA"}
          </p>
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
                className="bg-white border-0 rounded-2xl shadow-lg overflow-hidden"
              >
                <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-gray-50 transition-colors">
                  <span className="text-lg font-light text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <p className="text-gray-600 font-light leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
