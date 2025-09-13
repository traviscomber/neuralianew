"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Database,
  Cpu,
  MessageSquare,
  CheckCircle,
  Zap,
  Globe,
  RotateCcw,
  Info,
  ChevronDown,
} from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useState } from "react"

const flowSteps = [
  {
    id: 1,
    title: "Fuente de Datos",
    titleEn: "Data Source",
    description: "Conectamos con tus sistemas existentes para obtener información en tiempo real",
    descriptionEn: "We connect with your existing systems to get real-time information",
    detailedDescription:
      "Integramos múltiples fuentes de datos incluyendo bases de datos SQL/NoSQL, APIs REST, sistemas CRM y ERP.",
    detailedDescriptionEn:
      "We integrate multiple data sources including SQL/NoSQL databases, REST APIs, CRM and ERP systems.",
    icon: Database,
    features: [
      { text: "Conexión en tiempo real", textEn: "Real-time connection" },
      { text: "Múltiples fuentes de datos", textEn: "Multiple data sources" },
      { text: "Seguridad empresarial", textEn: "Enterprise security" },
    ],
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
    detailedDescription:
      "Utilizamos modelos de IA avanzados como GPT-4 y Claude. Procesamiento de lenguaje natural y análisis contextual.",
    detailedDescriptionEn:
      "We use advanced AI models like GPT-4 and Claude. Natural language processing and contextual analysis.",
    icon: Cpu,
    features: [
      { text: "Modelos IA avanzados", textEn: "Advanced AI models" },
      { text: "Procesamiento contextual", textEn: "Contextual processing" },
      { text: "Análisis de sentimientos", textEn: "Sentiment analysis" },
    ],
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
    detailedDescription:
      "Distribución omnicanal inteligente a WhatsApp, Telegram, email, SMS y redes sociales con automatización completa.",
    detailedDescriptionEn:
      "Intelligent omnichannel distribution to WhatsApp, Telegram, email, SMS and social media with full automation.",
    icon: MessageSquare,
    features: [
      { text: "Distribución omnicanal", textEn: "Omnichannel distribution" },
      { text: "Automatización workflows", textEn: "Workflow automation" },
      { text: "Escalabilidad ilimitada", textEn: "Unlimited scalability" },
    ],
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
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({})

  const toggleCard = (stepId: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [stepId]: !prev[stepId],
    }))
  }

  return (
    <section id="flow" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <Badge className="bg-black text-white border-0 text-sm md:text-lg px-6 md:px-8 py-2 md:py-3 rounded-full mb-4 md:mb-6">
            {language === "en" ? "How it Works" : "Cómo Funciona"}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-light text-black mb-4 md:mb-6">
            {language === "en" ? "N3uralia" : "Flujo de"}
            <br />
            <span className="font-bold">{language === "en" ? "Workflow" : "N3uralia"}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed px-4">
            {language === "en"
              ? "A simple and powerful three-step process that transforms your data into intelligent conversations across all your communication channels."
              : "Un proceso simple y poderoso de tres pasos que transforma tus datos en conversaciones inteligentes a través de todos tus canales de comunicación."}
          </p>
        </motion.div>

        {/* Flow Steps with Click Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {flowSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group h-80 md:h-96"
            >
              {/* Click Card Container */}
              <div className="relative w-full h-full [perspective:1000px]">
                <div
                  className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] cursor-pointer ${
                    flippedCards[step.id] ? "[transform:rotateY(180deg)]" : ""
                  }`}
                  onClick={() => toggleCard(step.id)}
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
                    <Card className="bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 h-full rounded-2xl">
                      <CardContent className="p-6 md:p-8 h-full flex flex-col">
                        {/* Step Number */}
                        <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-7 h-7 md:w-8 md:h-8 bg-black text-white rounded-full flex items-center justify-center font-bold text-xs md:text-sm z-10">
                          {step.id}
                        </div>

                        {/* Icon */}
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-100 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-gray-200 transition-colors duration-300">
                          <step.icon className="w-6 h-6 md:w-8 md:h-8 text-black" />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4 leading-tight">
                          {language === "en" ? step.titleEn : step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 leading-relaxed mb-6 md:mb-8 font-light flex-grow text-sm md:text-base">
                          {language === "en" ? step.descriptionEn : step.description}
                        </p>

                        {/* Technology Logos */}
                        <div className="space-y-3 md:space-y-4 mt-auto">
                          <h4 className="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wide">
                            {language === "en" ? "Technologies" : "Tecnologías"}
                          </h4>
                          <div className="flex flex-wrap gap-2 md:gap-3">
                            {step.logos.slice(0, 4).map((logo, logoIndex) => (
                              <div
                                key={logoIndex}
                                className="w-8 h-8 md:w-10 md:h-10 bg-gray-50 rounded-lg flex items-center justify-center group/logo hover:bg-gray-100 transition-colors duration-300"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <img
                                  src={logo.icon || "/placeholder.svg"}
                                  alt={logo.name}
                                  className="w-5 h-5 md:w-6 md:h-6 object-contain filter grayscale opacity-60 group-hover/logo:opacity-90 group-hover/logo:grayscale-0 transition-all duration-300"
                                  onError={(e) => {
                                    const target = e.currentTarget as HTMLImageElement
                                    target.style.display = "none"
                                    const placeholder = document.createElement("div")
                                    placeholder.className =
                                      "w-5 h-5 md:w-6 md:h-6 bg-gray-200 rounded flex items-center justify-center text-xs font-bold text-gray-500"
                                    placeholder.textContent = logo.name.substring(0, 2).toUpperCase()
                                    target.parentNode?.replaceChild(placeholder, target)
                                  }}
                                />
                              </div>
                            ))}
                            {step.logos.length > 4 && (
                              <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                <span className="text-xs font-semibold text-gray-500">+{step.logos.length - 4}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Click Indicator */}
                        <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 bg-black text-white p-1.5 md:p-2 rounded-full hover:bg-gray-800 transition-colors duration-300">
                          <Info className="w-3 h-3 md:w-4 md:h-4" />
                        </div>

                        {/* Mobile Tap Indicator */}
                        <div className="md:hidden absolute bottom-3 left-3 bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs flex items-center space-x-1">
                          <span>{language === "en" ? "Tap" : "Toca"}</span>
                          <ChevronDown className="w-3 h-3" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Back Side - Mobile Optimized */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <Card className="bg-gradient-to-br from-black to-gray-800 text-white border-0 h-full rounded-2xl overflow-hidden">
                      <CardContent className="p-4 md:p-6 h-full flex flex-col">
                        {/* Step Number */}
                        <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-7 h-7 md:w-8 md:h-8 bg-white text-black rounded-full flex items-center justify-center font-bold text-xs md:text-sm z-10">
                          {step.id}
                        </div>

                        {/* Header Section - Mobile Optimized */}
                        <div className="flex items-center mb-3 md:mb-4">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-lg md:rounded-xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                            <step.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                          </div>
                          <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                            {language === "en" ? step.titleEn : step.title}
                          </h3>
                        </div>

                        {/* Detailed Description - Mobile Optimized */}
                        <p className="text-gray-200 leading-relaxed mb-3 md:mb-4 text-xs md:text-sm font-light">
                          {language === "en" ? step.detailedDescriptionEn : step.detailedDescription}
                        </p>

                        {/* Features - Mobile Optimized */}
                        <div className="flex-grow">
                          <h4 className="text-xs font-semibold text-white uppercase tracking-wide mb-2 md:mb-3 opacity-80">
                            {language === "en" ? "Key Features" : "Características Clave"}
                          </h4>
                          <div className="space-y-1.5 md:space-y-2">
                            {step.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-start space-x-2">
                                <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-200 text-xs leading-tight">
                                  {language === "en" ? feature.textEn : feature.text}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Performance Indicators - Mobile Optimized */}
                        <div className="mt-3 md:mt-4 pt-2 md:pt-3 border-t border-white/20">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 text-xs">
                            <div className="flex items-center space-x-2">
                              <Zap className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                              <span className="text-gray-200">
                                {language === "en" ? "High Performance" : "Alto Rendimiento"}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Globe className="w-3 h-3 text-blue-400 flex-shrink-0" />
                              <span className="text-gray-200">
                                {language === "en" ? "Global Scale" : "Escala Global"}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Back Button - Mobile Optimized */}
                        <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 bg-white/20 text-white p-1.5 md:p-2 rounded-full hover:bg-white/30 transition-colors duration-300">
                          <RotateCcw className="w-3 h-3 md:w-4 md:h-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Arrow between steps - Hidden on mobile */}
              {index < flowSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              )}

              {/* Mobile Flow Indicator */}
              {index < flowSteps.length - 1 && (
                <div className="lg:hidden flex justify-center mt-4 mb-2">
                  <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Instruction Text - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12 px-4"
        >
          <p className="text-gray-500 text-xs md:text-sm">
            {language === "en"
              ? "💡 Tap on any card to see detailed information and key features"
              : "💡 Toca cualquier tarjeta para ver información detallada y características clave"}
          </p>
        </motion.div>

        {/* Bottom CTA - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center px-4"
        >
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl md:text-2xl font-bold text-black mb-3 md:mb-4">
              {language === "en" ? "Ready to get started?" : "¿Listo para comenzar?"}
            </h3>
            <p className="text-gray-600 mb-4 md:mb-6 font-light text-sm md:text-base">
              {language === "en"
                ? "Transform your business with intelligent AI conversations in just a few steps."
                : "Transforma tu negocio con conversaciones IA inteligentes en solo unos pasos."}
            </p>
            <a
              href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20implementar%20el%20flujo%20completo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-black hover:bg-gray-800 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base"
            >
              {language === "en" ? "Start Implementation" : "Comenzar Implementación"}
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
