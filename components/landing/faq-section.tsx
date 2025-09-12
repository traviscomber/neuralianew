"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, Code, MessageSquare, Building, HelpCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const faqCategories = [
  {
    id: "general",
    title: "General",
    icon: HelpCircle,
    questions: [
      {
        question: "¿Qué incluye una solución full stack de N3uralia?",
        answer:
          "Desarrollamos ecosistemas tecnológicos completos: frontend (React/Next.js), backend (Node.js/Python), bases de datos (PostgreSQL/MongoDB), APIs REST/GraphQL, integraciones con sistemas existentes y agentes IA especializados. No solo chatbots, sino plataformas completas.",
      },
      {
        question: "¿Cuál es la diferencia entre N3uralia y otros proveedores de chatbots?",
        answer:
          "Mientras otros solo ofrecen agentes conversacionales, nosotros desarrollamos soluciones full stack completas. Incluimos dashboards web, sistemas de gestión, APIs, integraciones empresariales y arquitectura escalable, con agentes IA como parte del ecosistema.",
      },
      {
        question: "¿Qué tecnologías utilizan en sus desarrollos?",
        answer:
          "Utilizamos tecnologías modernas: React/Next.js para frontend, Node.js/Python para backend, PostgreSQL/MongoDB para bases de datos, Docker/Kubernetes para contenedores, OpenAI GPT-4 para IA, y WhatsApp Business API para integraciones.",
      },
    ],
  },
  {
    id: "technical",
    title: "Technical",
    icon: Code,
    questions: [
      {
        question: "¿Cómo integran los agentes IA con sistemas empresariales existentes?",
        answer:
          "Desarrollamos APIs personalizadas y conectores que permiten integración nativa con CRM, ERP, bases de datos y sistemas legacy. Los agentes IA acceden a datos en tiempo real y pueden ejecutar acciones directamente en los sistemas empresariales.",
      },
      {
        question: "¿Qué nivel de personalización ofrecen en el desarrollo?",
        answer:
          "Cada proyecto es desarrollado desde cero según las necesidades específicas. Creamos arquitecturas personalizadas, interfaces de usuario únicas, modelos de IA entrenados con datos específicos y flujos de trabajo adaptados a cada industria.",
      },
      {
        question: "¿Cómo garantizan la escalabilidad de las soluciones?",
        answer:
          "Utilizamos arquitectura de microservicios, contenedores Docker, Kubernetes para orquestación, bases de datos distribuidas y CDN global. Nuestras soluciones están diseñadas para escalar desde startups hasta empresas enterprise.",
      },
    ],
  },
  {
    id: "business",
    title: "Business",
    icon: Building,
    questions: [
      {
        question: "¿Cuánto tiempo toma desarrollar una solución full stack?",
        answer:
          "Dependiendo de la complejidad: proyectos básicos 4-6 semanas, soluciones intermedias 8-12 semanas, y ecosistemas enterprise 12-20 semanas. Incluye análisis, desarrollo, testing, despliegue y capacitación del equipo.",
      },
      {
        question: "¿Qué soporte ofrecen post-lanzamiento?",
        answer:
          "Soporte 24/7 con equipos en Chile, Singapur y Rusia. Incluye monitoreo proactivo, actualizaciones de seguridad, optimización de rendimiento, nuevas funcionalidades y soporte técnico especializado.",
      },
      {
        question: "¿Pueden migrar sistemas existentes a su plataforma?",
        answer:
          "Sí, ofrecemos servicios de migración completos. Analizamos la arquitectura actual, diseñamos la migración, desarrollamos conectores de datos y ejecutamos la transición sin interrumpir las operaciones del negocio.",
      },
    ],
  },
]

export function FAQSection() {
  const { t, language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("general")
  const [openQuestion, setOpenQuestion] = useState<number | null>(0)

  const currentCategory = faqCategories.find((cat) => cat.id === activeCategory)

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-black text-white border-0 text-lg px-8 py-3 rounded-full mb-6">
            <HelpCircle className="w-5 h-5 mr-2" />
            {language === "en" ? "Frequently Asked Questions" : "Preguntas Frecuentes"}
          </Badge>
          <h2 className="text-5xl font-light text-black mb-6">
            {language === "en" ? "Got Questions?" : "¿Tienes Preguntas?"}
          </h2>
          <p className="text-xl text-gray-600 font-light">
            {language === "en"
              ? "Everything you need to know about our full-stack AI solutions"
              : "Todo lo que necesitas saber sobre nuestras soluciones de IA full-stack"}
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-white rounded-xl p-1 border border-gray-200">
            {faqCategories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id)
                    setOpenQuestion(0)
                  }}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all font-medium ${
                    activeCategory === category.id
                      ? "bg-black text-white shadow-sm"
                      : "text-gray-600 hover:text-black hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.title}
                </button>
              )
            })}
          </div>
        </div>

        {/* FAQ Content */}
        <AnimatePresence mode="wait">
          {currentCategory && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {currentCategory.questions.map((faq, index) => (
                <Card key={index} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <button
                      onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-black pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
                          openQuestion === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openQuestion === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-200 pt-4 font-light">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-black text-white rounded-2xl p-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Code className="w-6 h-6" />
              <span className="text-xl font-semibold">
                {language === "en" ? "Need a custom solution?" : "¿Necesitas una solución personalizada?"}
              </span>
            </div>
            <p className="text-gray-300 mb-6 font-light">
              {language === "en"
                ? "Let's discuss your specific full-stack AI project requirements"
                : "Hablemos sobre los requisitos específicos de tu proyecto de IA full-stack"}
            </p>
            <Button
              onClick={() =>
                window.open(
                  "https://wa.me/56940946660?text=Hola%20N3uralia%2C%20tengo%20preguntas%20sobre%20soluciones%20full%20stack",
                  "_blank",
                )
              }
              className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              {language === "en" ? "Contact via WhatsApp" : "Contactar por WhatsApp"}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
