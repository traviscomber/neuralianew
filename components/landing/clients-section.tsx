"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"
import Image from "next/image"

export function ClientsSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Our Clients",
      title: "Trusted by Industry Leaders",
      subtitle: "Companies across various industries trust us to deliver exceptional AI solutions",
      clients: [
        {
          name: "Parrotfy",
          industry: "TECHNOLOGY",
          description: "AI-powered customer service automation for e-commerce platforms",
          logo: "/placeholder.svg?height=60&width=120&text=Parrotfy",
        },
        {
          name: "Ecosuelolab",
          industry: "AGRICULTURE",
          description: "Smart farming solutions with predictive analytics and crop monitoring",
          logo: "/placeholder.svg?height=60&width=120&text=EcoSuelo",
        },
        {
          name: "AxentAI",
          industry: "FINTECH",
          description: "Intelligent financial advisory and risk assessment systems",
          logo: "/placeholder.svg?height=60&width=120&text=AxentAI",
        },
        {
          name: "TechCorp",
          industry: "ENTERPRISE",
          description: "Enterprise-wide process automation and workflow optimization",
          logo: "/placeholder.svg?height=60&width=120&text=TechCorp",
        },
        {
          name: "RetailPlus",
          industry: "RETAIL",
          description: "Personalized shopping experiences and inventory management",
          logo: "/placeholder.svg?height=60&width=120&text=RetailPlus",
        },
        {
          name: "StartupX",
          industry: "STARTUP",
          description: "Rapid MVP development with AI-first approach",
          logo: "/placeholder.svg?height=60&width=120&text=StartupX",
        },
      ],
    },
    es: {
      badge: "Nuestros Clientes",
      title: "Confianza de Líderes de la Industria",
      subtitle: "Empresas de diversas industrias confían en nosotros para entregar soluciones excepcionales de IA",
      clients: [
        {
          name: "Parrotfy",
          industry: "TECNOLOGÍA",
          description: "Automatización de servicio al cliente con IA para plataformas de e-commerce",
          logo: "/placeholder.svg?height=60&width=120&text=Parrotfy",
        },
        {
          name: "Ecosuelolab",
          industry: "AGRICULTURA",
          description: "Soluciones de agricultura inteligente con análisis predictivo y monitoreo de cultivos",
          logo: "/placeholder.svg?height=60&width=120&text=EcoSuelo",
        },
        {
          name: "AxentAI",
          industry: "FINTECH",
          description: "Sistemas inteligentes de asesoría financiera y evaluación de riesgos",
          logo: "/placeholder.svg?height=60&width=120&text=AxentAI",
        },
        {
          name: "TechCorp",
          industry: "EMPRESARIAL",
          description: "Automatización de procesos empresariales y optimización de flujos de trabajo",
          logo: "/placeholder.svg?height=60&width=120&text=TechCorp",
        },
        {
          name: "RetailPlus",
          industry: "RETAIL",
          description: "Experiencias de compra personalizadas y gestión de inventario",
          logo: "/placeholder.svg?height=60&width=120&text=RetailPlus",
        },
        {
          name: "StartupX",
          industry: "STARTUP",
          description: "Desarrollo rápido de MVP con enfoque AI-first",
          logo: "/placeholder.svg?height=60&width=120&text=StartupX",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <Badge className="bg-gray-100 text-gray-700 border-0 mb-4 md:mb-6">{t.badge}</Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-4 md:mb-6">{t.title}</h2>
            <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto">{t.subtitle}</p>
          </motion.div>

          {/* Clients Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {t.clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6 md:p-8">
                    {/* Logo */}
                    <div className="w-full h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors duration-300">
                      <Image
                        src={client.logo || "/placeholder.svg"}
                        alt={`${client.name} logo`}
                        width={120}
                        height={60}
                        className="max-w-full max-h-full object-contain filter grayscale group-hover:filter-none transition-all duration-300"
                      />
                    </div>

                    {/* Industry Badge */}
                    <Badge className="bg-black text-white text-xs mb-4 tracking-wider">{client.industry}</Badge>

                    {/* Company Name */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{client.name}</h3>

                    {/* Description */}
                    <p className="text-gray-600 font-light text-sm md:text-base leading-relaxed">
                      {client.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientsSection
