"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function TrustSection() {
  const { language } = useLanguage()

  const techStack = [
    { name: "React", logo: "/tech-icons/react-logo.png" },
    { name: "Node.js", logo: "/tech-icons/nodejs-logo.png" },
    { name: "PostgreSQL", logo: "/tech-icons/postgresql-logo.png" },
    { name: "Vercel", logo: "/tech-icons/vercel-logo.svg" },
    { name: "Supabase", logo: "/tech-icons/supabase-logo.svg" },
    { name: "OpenAI", logo: "/tech-icons/openai-logo.png" },
  ]

  const integrations = [
    { name: "WhatsApp", logo: "/tech-icons/whatsapp-logo.png" },
    { name: "Telegram", logo: "/tech-icons/telegram-logo.png" },
    { name: "Twilio", logo: "/tech-icons/twilio-logo.png" },
    { name: "Zapier", logo: "/tech-icons/zapier-logo.png" },
    { name: "n8n", logo: "/tech-icons/n8n-logo.png" },
    { name: "Meta", logo: "/tech-icons/meta-logo.png" },
  ]

  return (
    <section id="trust" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-light text-gray-900 mb-4">
            {language === "en" ? "Built with Trust" : "Construido con Confianza"}
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            {language === "en"
              ? "Powered by industry-leading technologies and seamless integrations"
              : "Impulsado por tecnologías líderes en la industria e integraciones perfectas"}
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-light text-gray-800 text-center mb-8">
            {language === "en" ? "Technology Stack" : "Stack Tecnológico"}
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-3 group-hover:shadow-xl transition-all duration-300">
                  <Image
                    src={tech.logo || "/placeholder.svg"}
                    alt={`${tech.name} logo`}
                    width={40}
                    height={40}
                    className="grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <span className="text-sm text-gray-600 font-light">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-light text-gray-800 text-center mb-8">
            {language === "en" ? "Integrations" : "Integraciones"}
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-3 group-hover:shadow-xl transition-all duration-300">
                  <Image
                    src={integration.logo || "/placeholder.svg"}
                    alt={`${integration.name} logo`}
                    width={40}
                    height={40}
                    className="grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <span className="text-sm text-gray-600 font-light">{integration.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
