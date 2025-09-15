"use client"

import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"

export function ClientsSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Trusted by Industry Leaders",
      title: "Join 500+ Companies Already Transforming with AI",
      subtitle:
        "From startups to Fortune 500 companies, businesses worldwide trust N3uralia to deliver intelligent AI solutions.",
    },
    es: {
      badge: "Confianza de Líderes de la Industria",
      title: "Únete a Más de 500 Empresas Ya Transformándose con IA",
      subtitle:
        "Desde startups hasta empresas Fortune 500, negocios en todo el mundo confían en N3uralia para entregar soluciones inteligentes de IA.",
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
            className="mb-4 px-4 py-2 text-sm font-medium bg-black/5 text-black border-black/10"
          >
            {t.badge}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">{t.title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                className="max-h-12 w-auto opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="text-3xl font-bold text-black mb-2">500+</div>
            <div className="text-gray-600">{language === "es" ? "Empresas Activas" : "Active Companies"}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black mb-2">10M+</div>
            <div className="text-gray-600">
              {language === "es" ? "Conversaciones Procesadas" : "Conversations Processed"}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black mb-2">99.9%</div>
            <div className="text-gray-600">{language === "es" ? "Tiempo de Actividad" : "Uptime"}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black mb-2">50+</div>
            <div className="text-gray-600">{language === "es" ? "Idiomas Soportados" : "Languages Supported"}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
