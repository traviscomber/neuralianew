"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function ClientsSection() {
  const { language } = useLanguage()

  const clients = [
    {
      name: "Parrotfy",
      logo: "/placeholder-logo.png",
      description:
        language === "en" ? "AI-powered customer service automation" : "Automatización de servicio al cliente con IA",
      industry: language === "en" ? "Technology" : "Tecnología",
    },
    {
      name: "Ecosuelolab",
      logo: "/placeholder-logo.png",
      description:
        language === "en" ? "Environmental data analysis and reporting" : "Análisis y reportes de datos ambientales",
      industry: language === "en" ? "Environmental" : "Ambiental",
    },
    {
      name: "AxentAI",
      logo: "/placeholder-logo.png",
      description:
        language === "en" ? "Advanced AI research and development" : "Investigación y desarrollo avanzado de IA",
      industry: language === "en" ? "AI Research" : "Investigación IA",
    },
  ]

  return (
    <section id="clients" className="py-24 bg-white">
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
            {language === "en" ? "Our Clients" : "Nuestros Clientes"}
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            {language === "en"
              ? "Trusted by innovative companies across various industries"
              : "Confiado por empresas innovadoras en diversas industrias"}
          </p>
        </motion.div>

        {/* Clients Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-8 text-center">
                  {/* Logo */}
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto">
                      <Image
                        src={client.logo || "/placeholder.svg"}
                        alt={`${client.name} logo`}
                        width={60}
                        height={60}
                        className="grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Client Name */}
                  <h3 className="text-2xl font-light text-gray-900 mb-2">{client.name}</h3>

                  {/* Industry */}
                  <div className="text-sm text-gray-500 font-light mb-4">{client.industry}</div>

                  {/* Description */}
                  <p className="text-gray-600 font-light leading-relaxed">{client.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
