"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function ClientsSection() {
  const { language } = useLanguage()

  const clients = [
    { name: "TechCorp", logo: "/tech-icons/react-logo.png" },
    { name: "InnovateLab", logo: "/tech-icons/nodejs-logo.png" },
    { name: "GlobalTech", logo: "/tech-icons/postgresql-logo.png" },
    { name: "DataFlow", logo: "/tech-icons/supabase-logo.svg" },
    { name: "CloudSync", logo: "/tech-icons/vercel-logo.svg" },
    { name: "AICore", logo: "/tech-icons/openai-logo.png" },
    { name: "NextGen", logo: "/tech-icons/intel-logo.png" },
    { name: "SmartSys", logo: "/tech-icons/redis-logo.svg" },
  ]

  return (
    <section id="clients" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-black text-white border-0 text-lg px-8 py-3 rounded-full mb-6">
            {language === "en" ? "Our Clients" : "Nuestros Clientes"}
          </Badge>
          <h2 className="text-5xl font-light text-black mb-6">
            {language === "en" ? "Trusted by Industry Leaders" : "Confiado por Líderes de la Industria"}
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            {language === "en"
              ? "Companies worldwide trust N3uralia to transform their operations with AI"
              : "Empresas en todo el mundo confían en N3uralia para transformar sus operaciones con IA"}
          </p>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 hover:bg-gray-100 rounded-2xl p-8 flex items-center justify-center transition-all duration-300 cursor-pointer group min-h-[120px]"
            >
              <div className="text-center">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain mx-auto mb-3 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="text-black font-medium">{client.name}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Moving Banner */}
        <div className="mt-16 overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="flex items-center gap-4 bg-black text-white px-6 py-3 rounded-full min-w-max">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain filter brightness-0 invert"
                />
                <span className="font-light">{client.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
