"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function FaqChileSection() {
  const { language } = useLanguage()

  const content = {
    en: [
      {
        question: "How does N3uralia handle data residency for Chile?",
        answer:
          "We maintain data residency in Chile with encrypted storage and comply with LGPD and Chilean data protection regulations. All customer data stays within Chilean borders.",
      },
      {
        question: "Can N3uralia integrate with existing Chilean systems?",
        answer:
          "Yes. We integrate with popular Chilean banking systems, municipality software, and enterprise tools like SAP and Oracle.",
      },
      {
        question: "What's the typical implementation timeline?",
        answer: "Most projects go live in 2-4 weeks. We have proven methodology for Chilean business processes.",
      },
      {
        question: "Do you offer support in Spanish?",
        answer: "Yes. Full 24/7 support in Spanish with understanding of Chilean business context and holidays.",
      },
      {
        question: "Is N3uralia certified for government contracts?",
        answer: "We're working toward Chilean government certification. Contact us for current compliance status.",
      },
      {
        question: "How much does a typical implementation cost?",
        answer:
          "Pricing depends on scope and complexity. We offer flexible models including project-based and subscription. Request a demo for a custom quote.",
      },
    ],
    es: [
      {
        question: "¿Cómo maneja N3uralia la residencia de datos para Chile?",
        answer:
          "Mantenemos residencia de datos en Chile con almacenamiento encriptado y cumplimos con LGPD y regulaciones chilenas de protección de datos. Todos los datos de clientes permanecen dentro de fronteras chilenas.",
      },
      {
        question: "¿Puede N3uralia integrarse con sistemas existentes en Chile?",
        answer:
          "Sí. Nos integramos con sistemas bancarios chilenos populares, software municipal y herramientas empresariales como SAP y Oracle.",
      },
      {
        question: "¿Cuál es el tiempo típico de implementación?",
        answer:
          "La mayoría de proyectos se activan en 2-4 semanas. Tenemos metodología comprobada para procesos empresariales chilenos.",
      },
      {
        question: "¿Ofrecen soporte en español?",
        answer: "Sí. Soporte completo 24/7 en español con comprensión del contexto empresarial chileno y feriados.",
      },
      {
        question: "¿N3uralia está certificada para contratos gubernamentales?",
        answer:
          "Estamos trabajando hacia certificación gubernamental chilena. Contáctanos para estado actual de cumplimiento.",
      },
      {
        question: "¿Cuánto cuesta una implementación típica?",
        answer:
          "El precio depende de alcance y complejidad. Ofrecemos modelos flexibles incluyendo basados en proyecto y suscripción. Solicita una demostración para una cotización personalizada.",
      },
    ],
  }

  const items = content[language]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
            animate={{ backgroundPosition: ["0% center", "100% center"] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          >
            {language === "en" ? "Frequently Asked Questions" : "Preguntas Frecuentes"}
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {language === "en"
              ? "Everything you need to know about N3uralia in Chile"
              : "Todo lo que necesitas saber sobre N3uralia en Chile"}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, i) => (
              <motion.div key={i} variants={itemVariants}>
                <AccordionItem value={`item-${i}`} className="border-b border-slate-200 group">
                  <motion.div whileHover={{ paddingLeft: 8 }} transition={{ duration: 0.2 }}>
                    <AccordionTrigger className="text-lg font-semibold text-slate-900 hover:text-blue-600 transition-colors py-4 group-hover:bg-blue-50/30 rounded px-4 mx-[-16px]">
                      <motion.div
                        className="flex items-center gap-2 w-full"
                        initial={{ gap: 8 }}
                        whileHover={{ gap: 12 }}
                      >
                        <span>{item.question}</span>
                        <ChevronDown className="w-6 h-6 text-slate-500 group-hover:text-blue-600" />
                      </motion.div>
                    </AccordionTrigger>
                  </motion.div>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-4">
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.answer}
                    </motion.div>
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
