"use client"

import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function ClientsSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Trusted by Industry Leaders",
      title: "Join 500+ Companies Already Using N3uralia",
      subtitle:
        "From startups to Fortune 500 companies, businesses worldwide trust N3uralia to power their AI transformation.",
    },
    es: {
      badge: "Confiado por Líderes de la Industria",
      title: "Únete a Más de 500 Empresas que Ya Usan N3uralia",
      subtitle:
        "Desde startups hasta empresas Fortune 500, negocios mundiales confían en N3uralia para impulsar su transformación con IA.",
    },
  }

  const t = content[language]

  const clients = [
    { name: "TechCorp", logo: "/placeholder.svg?height=60&width=120&text=TechCorp" },
    { name: "InnovateLab", logo: "/placeholder.svg?height=60&width=120&text=InnovateLab" },
    { name: "GlobalSoft", logo: "/placeholder.svg?height=60&width=120&text=GlobalSoft" },
    { name: "DataFlow", logo: "/placeholder.svg?height=60&width=120&text=DataFlow" },
    { name: "CloudTech", logo: "/placeholder.svg?height=60&width=120&text=CloudTech" },
    { name: "AIVentures", logo: "/placeholder.svg?height=60&width=120&text=AIVentures" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 text-sm font-medium bg-blue-50 text-blue-700 border-blue-200"
          >
            {t.badge}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{t.title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={`${client.name} logo`}
                width={120}
                height={60}
                className="max-w-full h-auto opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-gray-600">{language === "es" ? "Empresas Activas" : "Active Companies"}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
            <div className="text-gray-600">{language === "es" ? "Países" : "Countries"}</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
            <div className="text-gray-600">{language === "es" ? "Tiempo de Actividad" : "Uptime"}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
