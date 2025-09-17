"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"

export function ClientsSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Trusted by Industry Leaders",
      title: "Join Our Growing Community of Successful Businesses",
      subtitle: "Companies across various industries trust N3uralia to transform their operations with AI.",
      stats: [
        { value: "50+", label: "Projects Completed" },
        { value: "5+", label: "Countries Served" },
        { value: "99%", label: "Client Satisfaction" },
        { value: "40%", label: "Average Efficiency Boost" },
      ],
      industries: [
        "E-commerce & Retail",
        "Healthcare & Medical",
        "Financial Services",
        "Real Estate",
        "Education & Training",
        "Manufacturing",
        "Professional Services",
        "Technology & SaaS",
      ],
    },
    es: {
      badge: "Confiado por Líderes de la Industria",
      title: "Únete a Nuestra Creciente Comunidad de Empresas Exitosas",
      subtitle: "Empresas de diversas industrias confían en N3uralia para transformar sus operaciones con IA.",
      stats: [
        { value: "50+", label: "Proyectos Completados" },
        { value: "5+", label: "Países Atendidos" },
        { value: "99%", label: "Satisfacción del Cliente" },
        { value: "40%", label: "Aumento Promedio de Eficiencia" },
      ],
      industries: [
        "E-commerce y Retail",
        "Salud y Medicina",
        "Servicios Financieros",
        "Bienes Raíces",
        "Educación y Capacitación",
        "Manufactura",
        "Servicios Profesionales",
        "Tecnología y SaaS",
      ],
    },
  }

  const t = content[language]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 text-sm font-medium bg-green-50 text-green-700 border-green-200"
          >
            {t.badge}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{t.title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {t.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.industries.map((industry, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full"></div>
                </div>
                <p className="text-sm font-medium text-gray-800">{industry}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
