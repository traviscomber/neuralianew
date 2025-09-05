"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, Code, MessageSquare, Building, HelpCircle } from "lucide-react"

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
    title: "Técnico",
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
    title: "Empresarial",
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
  const [activeCategory, setActiveCategory] = useState("general")
  const [openQuestion, setOpenQuestion] = useState<number | null>(0)

  const currentCategory = faqCategories.find((cat) => cat.id === activeCategory)

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 text-lg px-6 py-2">
            <HelpCircle className="w-4 h-4 mr-2" />
            Preguntas sobre Soluciones Full Stack
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Todo lo que necesitas saber sobre nuestras soluciones tecnológicas completas
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-muted rounded-lg p-1">
            {faqCategories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id)
                    setOpenQuestion(0)
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                    activeCategory === category.id
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
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
                <Card key={index} className="bg-card border border-border">
                  <CardContent className="p-0">
                    <button
                      onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                    >
                      <span className="font-semibold text-card-foreground pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-muted-foreground transition-transform ${
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
                          <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border pt-4">
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

        {/* Full Stack Emphasis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Code className="w-5 h-5" />
              <span className="text-lg font-semibold">¿Necesitas una solución personalizada?</span>
            </div>
            <p className="text-sm opacity-90 mb-4">Hablemos sobre tu proyecto full stack específico</p>
            <a
              href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20tengo%20preguntas%20sobre%20soluciones%20full%20stack"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              Consultar por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
