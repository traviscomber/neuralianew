"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

const faqs = [
  {
    question: "¿Cuánto tiempo toma implementar un sistema de IA?",
    answer:
      "Nuestros sistemas están operativos en 48-72 horas para implementaciones básicas. Proyectos full stack toman 2-4 semanas. Incluimos consultoría gratuita, desarrollo, testing, deployment y capacitación completa del equipo.",
  },
  {
    question: "¿Qué tecnologías utilizan para desarrollar los sistemas?",
    answer:
      "Utilizamos OpenAI GPT-4, React/Next.js, Node.js, Python, PostgreSQL, y AWS. Nuestros sistemas incluyen APIs REST/GraphQL, bases de datos vectoriales, y arquitectura de microservicios escalable con CI/CD automatizado.",
  },
  {
    question: "¿Pueden integrar con nuestros sistemas existentes?",
    answer:
      "Sí, nos especializamos en integraciones complejas. Conectamos con CRMs (Salesforce, HubSpot), ERPs (SAP, Oracle), WhatsApp Business API, sistemas de inventario, bases de datos legacy, y cualquier API REST o GraphQL.",
  },
  {
    question: "¿Cuál es el ROI esperado y en qué tiempo?",
    answer:
      "Nuestros clientes ven ROI promedio del 250% en el primer año. Reducción de costos operativos del 40-60%, aumento de conversiones del 200-300%, y mejora en satisfacción del cliente del 85%. Métricas verificables desde el primer mes.",
  },
  {
    question: "¿Ofrecen soporte técnico y mantenimiento?",
    answer:
      "Soporte 24/7 en 3 continentes (Santiago, Singapur, Moscú). Incluye monitoreo proactivo, actualizaciones automáticas, optimización continua, y equipo técnico dedicado. SLA del 99.9% de uptime garantizado.",
  },
  {
    question: "¿Cuáles son los precios de sus servicios?",
    answer:
      "Consultoría inicial GRATIS. Chatbots inteligentes desde $2,000 USD, sistemas full stack desde $15,000 USD, agentes IA avanzados desde $25,000 USD. Planes de pago flexibles y ROI garantizado.",
  },
  {
    question: "¿Pueden desarrollar IA para industrias específicas?",
    answer:
      "Tenemos experiencia en 11+ industrias: agricultura (EcosueloLab), educación (ParrotfyIA), fintech, salud, retail, manufactura, logística, inmobiliaria, legal, y más. Cada solución es 100% personalizada para tu sector.",
  },
  {
    question: "¿Qué diferencia a N3uralia de otras empresas de IA?",
    answer:
      "No somos una consultora que subcontrata. Somos desarrolladores full stack especializados en IA. Equipo propio de ingenieros, arquitectura escalable, soporte 24/7 real, y track record comprobado con métricas verificables.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-muted/20 via-background to-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-sm font-medium">
            ❓ Preguntas Frecuentes
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
            Resolvemos tus dudas
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Todo lo que necesitas saber sobre nuestros{" "}
            <span className="text-primary font-semibold">servicios de IA conversacional</span>.
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
                className="border border-border/50 rounded-lg px-6 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">{faq.answer}</AccordionContent>
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
          <p className="text-muted-foreground mb-6">¿Tienes más preguntas? Hablemos directamente.</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
            asChild
          >
            <a
              href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20tengo%20preguntas%20sobre%20sus%20servicios%20de%20IA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Consulta por WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
