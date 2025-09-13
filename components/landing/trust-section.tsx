"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Settings, Shield, Wrench } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function TrustSection() {
  const { language } = useLanguage()

  const trustItems = [
    {
      icon: Settings,
      title: language === "en" ? "24/7 Support" : "Soporte 24/7",
    },
    {
      icon: Shield,
      title: language === "en" ? "Enterprise Security" : "Seguridad Empresarial",
      subtitle: "ISO",
    },
    {
      icon: Wrench,
      title: language === "en" ? ">100 Projects Deployed" : ">100 Proyectos Desplegados",
    },
  ]

  const techLogos = [
    { name: "React", image: "/tech-icons/react-logo.png" },
    { name: "Node.js", image: "/tech-icons/nodejs-logo.png" },
    { name: "PostgreSQL", image: "/tech-icons/postgresql-logo.png" },
    { name: "Redis", image: "/tech-icons/redis-logo.png" },
    { name: "Vercel", image: "/tech-icons/vercel-logo.svg" },
    { name: "Supabase", image: "/tech-icons/supabase-logo.svg" },
  ]

  const integrationLogos = [
    { name: "WhatsApp", image: "/tech-icons/whatsapp-logo.png" },
    { name: "Telegram", image: "/tech-icons/telegram-logo.png" },
    { name: "Twilio", image: "/tech-icons/twilio-logo.png" },
    { name: "Zapier", image: "/tech-icons/zapier-logo.png" },
    { name: "OpenAI", image: "/tech-icons/openai-logo.png" },
    { name: "Meta", image: "/tech-icons/meta-logo.png" },
  ]

  return (
    <section id="trust" className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Tech Stack Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20 lg:mb-24"
        >
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <Badge className="bg-white text-gray-700 border-0 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full mb-4 sm:mb-6 font-medium shadow-sm">
              {language === "en" ? "Technology Stack" : "Stack Tecnológico"}
            </Badge>
          </div>

          {/* Tech Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
            {techLogos.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center group"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 mb-3 sm:mb-4">
                  <Image
                    src={tech.image || "/placeholder.svg"}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-600 text-center">{tech.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Integration Logos */}
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-700 mb-6 sm:mb-8">
              {language === "en" ? "Integrations & Partners" : "Integraciones y Socios"}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
            {integrationLogos.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 mb-2 sm:mb-3">
                  <Image
                    src={integration.image || "/placeholder.svg"}
                    alt={integration.name}
                    width={32}
                    height={32}
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <span className="text-xs font-medium text-gray-600 text-center">{integration.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Trust Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-700 mb-6 sm:mb-8 leading-[1.1] tracking-tight">
            {language === "en" ? "Why Trust?" : "¿Por Qué Confiar?"}
          </h2>
        </motion.div>

        {/* Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border border-gray-200 rounded-2xl h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 sm:p-10 lg:p-12 text-center">
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-6 sm:mb-8">
                    {item.subtitle === "ISO" ? (
                      <div className="w-full h-full rounded-full border-2 border-gray-600 flex items-center justify-center">
                        <span className="text-gray-600 font-bold text-sm sm:text-base lg:text-lg">ISO</span>
                      </div>
                    ) : (
                      <item.icon className="w-full h-full text-gray-400" strokeWidth={1} />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-gray-600">{item.title}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
