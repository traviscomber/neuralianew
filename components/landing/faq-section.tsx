"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { HelpCircle, MessageCircle } from "lucide-react"

const faqs = [
  {
    question: "¿Cuánto tiempo toma desarrollar un sistema de IA?",
    answer:
      "Depende de la complejidad, pero típicamente:\n\n• Chatbot básico: 1-2 semanas\n• Sistema con integración API: 2-4 semanas\n• Solución completa full stack: 4-8 semanas\n\nSiempre entregamos un MVP funcional en la primera semana para que puedas empezar a probar.",
  },
  {
    question: "¿Qué incluye el precio mensual?",
    answer:
      "El precio desde $500 USD/mes incluye:\n\n• Hosting y mantenimiento del sistema\n• Actualizaciones automáticas\n• Soporte técnico 24/7\n• Monitoreo y analytics\n• Backup automático\n• Hasta 10,000 conversaciones/mes\n\nSin costos ocultos ni sorpresas.",
  },
  {
    question: "¿Pueden integrarse con nuestros sistemas existentes?",
    answer:
      "Sí, nos especializamos en integraciones. Trabajamos con:\n\n• CRM (Salesforce, HubSpot, Pipedrive)\n• ERP (SAP, Oracle, sistemas custom)\n• Bases de datos (MySQL, PostgreSQL, MongoDB)\n• APIs REST y GraphQL\n• WhatsApp Business API\n• Sistemas de e-commerce\n\nSi tienes una API, podemos conectarnos.",
  },
  {
    question: "¿Qué pasa si no funciona como esperamos?",
    answer:
      "Tenemos una garantía de satisfacción:\n\n• Primera semana: Revisión completa gratuita\n• 30 días: Ajustes sin costo adicional\n• Si no cumple expectativas: Reembolso completo\n\nAdemás, siempre empezamos con un piloto pequeño para validar antes de escalar.",
  },
  {
    question: "¿Necesitamos conocimientos técnicos para usar el sistema?",
    answer:
      "Para nada. Diseñamos todo para ser súper fácil:\n\n• Interfaz intuitiva (como usar WhatsApp)\n• Documentación en español\n• Capacitación incluida para tu equipo\n• Soporte técnico en español\n• Panel de control visual\n\nSi sabes usar un smartphone, puedes usar nuestros sistemas.",
  },
  {
    question: "¿Los datos están seguros?",
    answer:
      "Seguridad es nuestra prioridad:\n\n• Encriptación end-to-end\n• Servidores en AWS con certificación SOC 2\n• Backup automático diario\n• Cumplimiento GDPR\n• Acceso restringido por roles\n• Logs de auditoría completos\n\nTus datos nunca se comparten con terceros.",
  },
  {
    question: "¿Ofrecen soporte en español?",
    answer:
      "¡Por supuesto! Somos un equipo chileno:\n\n• Soporte 24/7 en español\n• Documentación en español\n• Llamadas y videollamadas en horario chileno\n• WhatsApp directo con el equipo técnico\n• Entendemos el mercado y cultura local\n\nHablamos tu idioma, literal y figurativamente.",
  },
  {
    question: "¿Pueden hacer una demo personalizada?",
    answer:
      "¡Claro! Ofrecemos:\n\n• Demo en vivo de 30 minutos\n• Análisis gratuito de tu caso específico\n• Propuesta técnica detallada\n• Estimación de ROI para tu negocio\n• Prueba piloto de 1 semana\n\nContáctanos por WhatsApp y coordinamos una llamada.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
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
            className="mb-4 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-700"
          >
            <HelpCircle className="w-4 h-4 mr-2" />
            Preguntas Frecuentes
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Dudas{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              resueltas
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Las preguntas más comunes sobre nuestros sistemas de IA. Si no encuentras tu respuesta, escríbenos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-border rounded-lg px-6 bg-card hover:shadow-md dark:hover:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-card-foreground hover:text-purple-600 dark:hover:text-purple-400 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-700 dark:to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿Tienes otra pregunta?</h3>
            <p className="text-purple-100 dark:text-purple-200 mb-6">
              Escríbenos por WhatsApp y te respondemos al toque. Somos súper accesibles.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold"
              asChild
            >
              <a
                href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20tengo%20una%20pregunta%20sobre%20sus%20sistemas%20de%20IA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Preguntar por WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
