"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, MessageSquare, ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const faqs = [
  {
    question: {
      en: "What AI services does N3uralia offer?",
      es: "¿Qué servicios de IA ofrece N3uralia?",
    },
    answer: {
      en: "We specialize in three core areas: AI Agent Development (custom conversational agents), Process Automation (intelligent workflow optimization), and Enterprise Integration (seamless AI integration with existing systems). Our solutions are tailored to each client's specific business needs and industry requirements.",
      es: "Nos especializamos en tres áreas principales: Desarrollo de Agentes de IA (agentes conversacionales personalizados), Automatización de Procesos (optimización inteligente de flujos de trabajo), e Integración Empresarial (integración perfecta de IA con sistemas existentes). Nuestras soluciones se adaptan a las necesidades específicas de cada cliente y los requisitos de su industria.",
    },
  },
  {
    question: {
      en: "How long does it take to implement an AI solution?",
      es: "¿Cuánto tiempo toma implementar una solución de IA?",
    },
    answer: {
      en: "Implementation timelines vary by project complexity. Simple AI agents can be deployed in 48-72 hours, while comprehensive enterprise integrations typically take 2-4 weeks. We provide detailed project timelines during our initial consultation and maintain transparent communication throughout the development process.",
      es: "Los tiempos de implementación varían según la complejidad del proyecto. Los agentes de IA simples pueden desplegarse en 48-72 horas, mientras que las integraciones empresariales completas típicamente toman 2-4 semanas. Proporcionamos cronogramas detallados durante nuestra consulta inicial y mantenemos comunicación transparente durante todo el proceso de desarrollo.",
    },
  },
  {
    question: {
      en: "Which industries do you work with?",
      es: "¿Con qué industrias trabajan?",
    },
    answer: {
      en: "We work across multiple industries including healthcare, finance, e-commerce, manufacturing, education, and professional services. Our AI solutions are industry-agnostic and can be customized for specific regulatory requirements, compliance standards, and business processes unique to each sector.",
      es: "Trabajamos en múltiples industrias incluyendo salud, finanzas, e-commerce, manufactura, educación y servicios profesionales. Nuestras soluciones de IA son agnósticas a la industria y pueden personalizarse para requisitos regulatorios específicos, estándares de cumplimiento y procesos de negocio únicos de cada sector.",
    },
  },
  {
    question: {
      en: "What kind of support do you provide after implementation?",
      es: "¿Qué tipo de soporte proporcionan después de la implementación?",
    },
    answer: {
      en: "We offer comprehensive 24/7 support with our global team across three time zones. This includes system monitoring, performance optimization, regular updates, troubleshooting, and continuous improvement based on usage analytics. We also provide training for your team and detailed documentation for all implemented solutions.",
      es: "Ofrecemos soporte integral 24/7 con nuestro equipo global en tres zonas horarias. Esto incluye monitoreo del sistema, optimización de rendimiento, actualizaciones regulares, resolución de problemas y mejora continua basada en análisis de uso. También proporcionamos capacitación para tu equipo y documentación detallada para todas las soluciones implementadas.",
    },
  },
  {
    question: {
      en: "How do you ensure data security and privacy?",
      es: "¿Cómo aseguran la seguridad y privacidad de los datos?",
    },
    answer: {
      en: "We implement enterprise-grade security measures including ISO 27001 compliance, end-to-end encryption, secure API protocols, and regular security audits. All data processing follows GDPR and local privacy regulations. We can also deploy solutions on-premises or in private cloud environments for maximum security control.",
      es: "Implementamos medidas de seguridad de nivel empresarial incluyendo cumplimiento ISO 27001, encriptación end-to-end, protocolos API seguros y auditorías de seguridad regulares. Todo el procesamiento de datos sigue GDPR y regulaciones locales de privacidad. También podemos desplegar soluciones on-premises o en entornos de nube privada para máximo control de seguridad.",
    },
  },
  {
    question: {
      en: "What ROI can we expect from AI implementation?",
      es: "¿Qué ROI podemos esperar de la implementación de IA?",
    },
    answer: {
      en: "Our clients typically see 250-400% ROI within the first year through cost reduction, efficiency gains, and revenue growth. Specific benefits include 70% reduction in processing time, 85% fewer errors, 95% customer satisfaction rates, and 24/7 operational capability. We provide detailed ROI projections during our consultation phase.",
      es: "Nuestros clientes típicamente ven 250-400% ROI dentro del primer año a través de reducción de costos, ganancias de eficiencia y crecimiento de ingresos. Los beneficios específicos incluyen 70% reducción en tiempo de procesamiento, 85% menos errores, 95% tasas de satisfacción del cliente y capacidad operacional 24/7. Proporcionamos proyecciones detalladas de ROI durante nuestra fase de consulta.",
    },
  },
  {
    question: {
      en: "Can your AI solutions integrate with our existing systems?",
      es: "¿Pueden sus soluciones de IA integrarse con nuestros sistemas existentes?",
    },
    answer: {
      en: "Yes, we specialize in seamless integration with existing enterprise systems including CRM, ERP, databases, APIs, and legacy systems. We support all major integration protocols (REST, GraphQL, WebSockets, gRPC) and can work with any technology stack. Our integration approach ensures minimal disruption to your current operations.",
      es: "Sí, nos especializamos en integración perfecta con sistemas empresariales existentes incluyendo CRM, ERP, bases de datos, APIs y sistemas legacy. Soportamos todos los principales protocolos de integración (REST, GraphQL, WebSockets, gRPC) y podemos trabajar con cualquier stack tecnológico. Nuestro enfoque de integración asegura mínima disrupción a tus operaciones actuales.",
    },
  },
  {
    question: {
      en: "Do you provide training for our team?",
      es: "¿Proporcionan capacitación para nuestro equipo?",
    },
    answer: {
      en: "Absolutely. We provide comprehensive training programs including system administration, user training, best practices workshops, and ongoing educational support. Training is customized to different user roles and technical skill levels. We also provide detailed documentation, video tutorials, and access to our support team for continuous learning.",
      es: "Absolutamente. Proporcionamos programas de capacitación integral incluyendo administración del sistema, entrenamiento de usuarios, talleres de mejores prácticas y soporte educativo continuo. La capacitación se personaliza para diferentes roles de usuario y niveles de habilidad técnica. También proporcionamos documentación detallada, tutoriales en video y acceso a nuestro equipo de soporte para aprendizaje continuo.",
    },
  },
]

export function FaqSection() {
  const { language } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-black text-white border-0 text-lg px-8 py-3 rounded-full mb-6">
            {language === "en" ? "FAQ" : "Preguntas Frecuentes"}
          </Badge>
          <h2 className="text-5xl font-light text-black mb-6">
            {language === "en" ? "Frequently Asked" : "Preguntas"}
            <span className="font-bold block">{language === "en" ? "Questions" : "Frecuentes"}</span>
          </h2>
          <p className="text-xl text-gray-600 font-light">
            {language === "en"
              ? "Everything you need to know about our AI solutions and services."
              : "Todo lo que necesitas saber sobre nuestras soluciones y servicios de IA."}
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border border-gray-200 hover:border-gray-300 transition-colors">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-black pr-4">{faq.question[language]}</h3>
                    <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <p className="text-gray-600 leading-relaxed font-light">{faq.answer[language]}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gray-50 border-0">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-black mb-4">
                {language === "en" ? "Still have questions?" : "¿Aún tienes preguntas?"}
              </h3>
              <p className="text-gray-600 mb-6 font-light">
                {language === "en"
                  ? "Our team is here to help. Get in touch for a personalized consultation about your AI needs."
                  : "Nuestro equipo está aquí para ayudar. Ponte en contacto para una consulta personalizada sobre tus necesidades de IA."}
              </p>
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-800 font-semibold px-8 py-4 rounded-xl"
                asChild
              >
                <a
                  href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20tengo%20algunas%20preguntas%20sobre%20sus%20servicios%20de%20IA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  {language === "en" ? "Ask a Question" : "Hacer una Pregunta"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
