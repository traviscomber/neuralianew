"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"

export function ClientsSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Our Clients",
      subtitle: "Trusted by leading companies across various industries",
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
          description: "Smart soil analysis and crop optimization using machine learning",
          logo: "/placeholder.svg?height=60&width=120&text=Ecosuelolab",
        },
        {
          name: "AxentAI",
          industry: "FINTECH",
          description: "Intelligent financial advisory and risk assessment solutions",
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
          description: "Rapid AI integration for scalable business growth",
          logo: "/placeholder.svg?height=60&width=120&text=StartupX",
        },
      ],
    },
    es: {
      title: "Nuestros Clientes",
      subtitle: "Confiado por empresas líderes en diversas industrias",
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
          description: "Análisis inteligente de suelos y optimización de cultivos usando aprendizaje automático",
          logo: "/placeholder.svg?height=60&width=120&text=Ecosuelolab",
        },
        {
          name: "AxentAI",
          industry: "FINTECH",
          description: "Soluciones inteligentes de asesoría financiera y evaluación de riesgos",
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
          description: "Integración rápida de IA para crecimiento empresarial escalable",
          logo: "/placeholder.svg?height=60&width=120&text=StartupX",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">{t.title}</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.clients.map((client, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:border-black transition-all duration-300 group bg-white"
            >
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-20 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-black transition-colors duration-300 overflow-hidden">
                    <img
                      src={client.logo || "/placeholder.svg"}
                      alt={`${client.name} logo`}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:filter-none transition-all duration-300"
                    />
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-gray-100 text-gray-800 hover:bg-gray-200 text-xs font-medium tracking-wider"
                  >
                    {client.industry}
                  </Badge>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 group-hover:text-gray-900 transition-colors duration-300">
                  {client.name}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{client.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientsSection
