"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function FaqSection() {
  const { language } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const content = {
    en: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about our AI solutions",
      faqs: [
        {
          question: "How long does it take to implement an AI solution?",
          answer:
            "Implementation time varies depending on complexity, but most projects are completed within 4-12 weeks. We provide detailed timelines during the consultation phase.",
        },
        {
          question: "Do you provide ongoing support and maintenance?",
          answer:
            "Yes, we offer 24/7 technical support, regular updates, and continuous monitoring to ensure optimal performance of your AI systems.",
        },
        {
          question: "Can your AI solutions integrate with our existing systems?",
          answer:
            "Absolutely. Our solutions are designed to integrate seamlessly with existing CRM, ERP, and other enterprise systems through APIs and custom connectors.",
        },
        {
          question: "What industries do you serve?",
          answer:
            "We serve various industries including retail, healthcare, finance, manufacturing, and technology. Our solutions are customized for each sector's specific needs.",
        },
        {
          question: "How do you ensure data security and privacy?",
          answer:
            "We implement bank-level security with end-to-end encryption, comply with GDPR and other regulations, and maintain ISO 27001 certification for data protection.",
        },
      ],
    },
    es: {
      title: "Preguntas Frecuentes",
      subtitle: "Todo lo que necesitas saber sobre nuestras soluciones de IA",
      faqs: [
        {
          question: "¿Cuánto tiempo toma implementar una solución de IA?",
          answer:
            "El tiempo de implementación varía según la complejidad, pero la mayoría de proyectos se completan en 4-12 semanas. Proporcionamos cronogramas detallados durante la fase de consulta.",
        },
        {
          question: "¿Proporcionan soporte y mantenimiento continuo?",
          answer:
            "Sí, ofrecemos soporte técnico 24/7, actualizaciones regulares y monitoreo continuo para asegurar el rendimiento óptimo de tus sistemas de IA.",
        },
        {
          question: "¿Pueden sus soluciones de IA integrarse con nuestros sistemas existentes?",
          answer:
            "Absolutamente. Nuestras soluciones están diseñadas para integrarse perfectamente con CRM, ERP y otros sistemas empresariales existentes a través de APIs y conectores personalizados.",
        },
        {
          question: "¿Qué industrias atienden?",
          answer:
            "Atendemos varias industrias incluyendo retail, salud, finanzas, manufactura y tecnología. Nuestras soluciones se personalizan para las necesidades específicas de cada sector.",
        },
        {
          question: "¿Cómo aseguran la seguridad y privacidad de los datos?",
          answer:
            "Implementamos seguridad de nivel bancario con encriptación de extremo a extremo, cumplimos con GDPR y otras regulaciones, y mantenemos certificación ISO 27001 para protección de datos.",
        },
      ],
    },
  }

  const t = content[language]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {t.faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl mb-4 border border-gray-100 overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-black pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
