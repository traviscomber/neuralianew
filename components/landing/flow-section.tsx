"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Database, Cpu, MessageSquare } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const flowSteps = [
  {
    id: 1,
    title: "Fuente de Datos",
    titleEn: "Data Source",
    description: "Conectamos con tus sistemas existentes para obtener información en tiempo real",
    descriptionEn: "We connect with your existing systems to get real-time information",
    icon: Database,
    logos: [
      { name: "PostgreSQL", icon: "/tech-icons/postgresql-logo.png" },
      { name: "Supabase", icon: "/tech-icons/supabase-logo.svg" },
      { name: "Redis", icon: "/tech-icons/redis-logo.png" },
      { name: "RabbitMQ", icon: "/tech-icons/rabbitmq-logo.png" },
      { name: "Grafana", icon: "/tech-icons/grafana-logo.png" },
    ],
  },
  {
    id: 2,
    title: "Conexión API IA",
    titleEn: "AI API Connection",
    description: "Procesamos la información con modelos de IA avanzados para generar respuestas inteligentes",
    descriptionEn: "We process information with advanced AI models to generate intelligent responses",
    icon: Cpu,
    logos: [
      { name: "OpenAI", icon: "/tech-icons/openai-logo.png" },
      { name: "Intel", icon: "/tech-icons/intel-logo.png" },
      { name: "React", icon: "/tech-icons/react-logo.png" },
      { name: "Node.js", icon: "/tech-icons/nodejs-logo.png" },
      { name: "Vercel", icon: "/tech-icons/vercel-logo.svg" },
    ],
  },
  {
    id: 3,
    title: "Múltiples Salidas",
    titleEn: "Multiple Outputs",
    description: "Distribuimos las respuestas a través de todos tus canales de comunicación",
    descriptionEn: "We distribute responses across all your communication channels",
    icon: MessageSquare,
    logos: [
      { name: "WhatsApp", icon: "/tech-icons/whatsapp-logo.png" },
      { name: "Telegram", icon: "/tech-icons/telegram-logo.png" },
      { name: "Zapier", icon: "/tech-icons/zapier-logo.png" },
      { name: "Meta", icon: "/tech-icons/meta-logo.png" },
    ],
  },
]

export function FlowSection() {
  const { language } = useLanguage()

  return (
    <section id="flow" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge className="bg-black text-white border-0 text-lg px-8 py-3 rounded-full mb-6">
            {language === "en" ? "How it Works" : "Cómo Funciona"}
          </Badge>
          <h2 className="text-5xl font-light text-black mb-6">
            {language === "en" ? "N3uralia" : "Flujo de"}
            <br />
            <span className="font-bold">{language === "en" ? "Workflow" : "N3uralia"}</span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            {language === "en"
              ? "A simple and powerful three-step process that transforms your data into intelligent conversations across all your communication channels."
              : "Un proceso simple y poderoso de tres pasos que transforma tus datos en conversaciones inteligentes a través de todos tus canales de comunicación."}
          </p>
        </motion.div>

        {/* Flow Steps */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {flowSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group h-full rounded-2xl">
                <CardContent className="p-8">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors duration-300">
                    <step.icon className="w-8 h-8 text-black" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {language === "en" ? step.titleEn : step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-8 font-light">
                    {language === "en" ? step.descriptionEn : step.description}
                  </p>

                  {/* Technology Logos */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                      {language === "en" ? "Technologies" : "Tecnologías"}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {step.logos.map((logo, logoIndex) => (
                        <div
                          key={logoIndex}
                          className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center group/logo hover:bg-gray-100 transition-colors duration-300"
                        >
                          <img
                            src={logo.icon || "/placeholder.svg"}
                            alt={logo.name}
                            className="w-6 h-6 object-contain filter grayscale opacity-60 group-hover/logo:opacity-90 group-hover/logo:grayscale-0 transition-all duration-300"
                            onError={(e) => {
                              const target = e.currentTarget as HTMLImageElement
                              target.style.display = "none"
                              const placeholder = document.createElement("div")
                              placeholder.className =
                                "w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-xs font-bold text-gray-500"
                              placeholder.textContent = logo.name.substring(0, 2).toUpperCase()
                              target.parentNode?.replaceChild(placeholder, target)
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Arrow between steps */}
              {index < flowSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-4">
              {language === "en" ? "Ready to get started?" : "¿Listo para comenzar?"}
            </h3>
            <p className="text-gray-600 mb-6 font-light">
              {language === "en"
                ? "Transform your business with intelligent AI conversations in just a few steps."
                : "Transforma tu negocio con conversaciones IA inteligentes en solo unos pasos."}
            </p>
            <a
              href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20implementar%20el%20flujo%20completo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-black hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {language === "en" ? "Start Implementation" : "Comenzar Implementación"}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
