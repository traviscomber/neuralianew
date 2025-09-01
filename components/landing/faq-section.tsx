"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageCircle, HelpCircle, ArrowRight } from "lucide-react"

const faqs = [
  {
    question: "¿Cuánto tiempo toma implementar una solución de IA?",
    answer:
      "Nuestro proceso de implementación estándar toma 48 horas. Esto incluye el análisis de requerimientos, desarrollo, integración con tus sistemas existentes y pruebas. Para proyectos más complejos, el tiempo puede extenderse a 1-2 semanas, pero siempre tendrás una versión funcional en las primeras 48 horas.",
  },
  {
    question: "¿Qué tecnologías utilizan para desarrollar las soluciones?",
    answer:
      "Utilizamos tecnologías de vanguardia como OpenAI GPT-4 para procesamiento de lenguaje natural, Next.js y React para interfaces web, Supabase para bases de datos, Twilio para integración con WhatsApp, y APIs REST para conectar con sistemas existentes. Todas nuestras soluciones son escalables y seguras.",
  },
  {
    question: "¿Pueden integrar la IA con nuestros sistemas actuales?",
    answer:
      "Sí, absolutamente. Nos especializamos en integrar soluciones de IA con sistemas existentes como ERPs, CRMs, bases de datos, APIs propias y plataformas de terceros. Trabajamos con cualquier sistema que tenga API disponible o que permita conexiones de base de datos.",
  },
  {
    question: "¿Qué tipo de soporte ofrecen después de la implementación?",
    answer:
      "Ofrecemos soporte técnico 24/7 durante el primer mes, seguido de soporte en horario laboral. Incluimos monitoreo continuo, actualizaciones de seguridad, optimizaciones de rendimiento y capacitación para tu equipo. También proporcionamos documentación completa y acceso a un panel de administración.",
  },
  {
    question: "¿Cuál es el costo de implementar una solución de IA?",
    answer:
      "Los costos varían según la complejidad del proyecto. Una solución básica de chatbot puede comenzar desde $500 USD, mientras que sistemas más complejos con múltiples integraciones pueden llegar a $3,000 USD. Ofrecemos una consulta gratuita para evaluar tu caso específico y proporcionar un presupuesto detallado.",
  },
  {
    question: "¿La IA puede manejar consultas en español de forma natural?",
    answer:
      "Sí, nuestras soluciones están optimizadas para el español chileno y latinoamericano. Entrenamos los modelos con contexto local, jerga específica de cada industria y expresiones regionales. La IA comprende y responde de manera natural, manteniendo el tono y personalidad de tu marca.",
  },
  {
    question: "¿Qué pasa si necesitamos modificaciones después del lanzamiento?",
    answer:
      "Incluimos 2 semanas de ajustes gratuitos después del lanzamiento. Después de este período, ofrecemos planes de mantenimiento mensual que incluyen modificaciones, nuevas funcionalidades y optimizaciones. También puedes solicitar cambios puntuales con tarifas por hora de desarrollo.",
  },
  {
    question: "¿Cómo garantizan la seguridad y privacidad de los datos?",
    answer:
      "Implementamos las mejores prácticas de seguridad: encriptación end-to-end, autenticación robusta, cumplimiento con GDPR y normativas locales. Los datos se almacenan en servidores seguros y nunca compartimos información con terceros. Proporcionamos auditorías de seguridad y certificados de cumplimiento.",
  },
]

export function FAQSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge
            variant="secondary"
            className="mb-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700"
          >
            <HelpCircle className="w-4 h-4 mr-2" />
            Preguntas frecuentes
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Resolvemos tus{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              dudas
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Las preguntas más comunes sobre implementación de IA conversacional en tu negocio.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border-2 border-border rounded-lg px-6 bg-card hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-purple-500/10 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-card-foreground hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-700 dark:to-blue-700 rounded-2xl text-white"
        >
          <h3 className="text-2xl font-bold mb-4">¿Tienes más preguntas?</h3>
          <p className="text-lg mb-6 opacity-90">
            Conversemos sobre tu proyecto específico y cómo la IA puede transformar tu negocio.
          </p>
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <a
              href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20tengo%20algunas%20preguntas%20sobre%20implementar%20IA%20en%20mi%20negocio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Hacer una consulta
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
