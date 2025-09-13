"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Network, Wrench } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ServicesSection() {
  const { language } = useLanguage()

  const services = [
    {
      icon: User,
      title: "AGENTS and\nAUTOMATIONS",
      titleEn: "AGENTS and\nAUTOMATIONS",
      link: "#agents",
    },
    {
      icon: Network,
      title: "MULTITASK\nAGENTIC SYSTEMS",
      titleEn: "MULTITASK\nAGENTIC SYSTEMS",
      link: "#systems",
    },
    {
      icon: Wrench,
      title: "FULL STACK\nPROJECTS",
      titleEn: "FULL STACK\nPROJECTS",
      link: "#projects",
    },
  ]

  return (
    <section id="services" className="bg-[#e8e8e8] py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <Badge className="bg-black text-white border-0 text-sm md:text-lg px-6 md:px-8 py-2 md:py-3 rounded-full mb-4 md:mb-6">
            {language === "en" ? "Our Services" : "Nuestros Servicios"}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-light text-black mb-4 md:mb-6">
            {language === "en" ? "AI-Powered" : "Soluciones"}
            <br />
            <span className="font-bold">{language === "en" ? "Solutions" : "Potenciadas por IA"}</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            {language === "en"
              ? "Comprehensive AI solutions designed to transform your business operations and enhance customer experiences across all touchpoints."
              : "Soluciones integrales de IA diseñadas para transformar las operaciones de tu negocio y mejorar las experiencias del cliente en todos los puntos de contacto."}
          </p>
        </motion.div>

        {/* Services Grid - Only 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="bg-white border border-gray-300 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-12 text-center">
                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center">
                    <service.icon className="w-16 h-16 text-gray-400 stroke-1" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-light text-gray-600 mb-8 leading-relaxed whitespace-pre-line">
                    {language === "en" ? service.titleEn : service.title}
                  </h3>

                  {/* Read more link */}
                  <a
                    href={service.link}
                    className="text-gray-500 hover:text-gray-700 text-sm underline transition-colors"
                  >
                    {language === "en" ? "Read more" : "Leer más"}
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
