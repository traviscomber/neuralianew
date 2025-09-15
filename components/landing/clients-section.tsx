"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, ShoppingCart, Heart, GraduationCap, Car, Plane } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ClientsSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Trusted by Industry Leaders",
      title: "Powering Success Across Industries",
      subtitle:
        "From startups to Fortune 500 companies, businesses worldwide trust N3uralia to transform their operations with AI.",
      clients: [
        {
          icon: Building2,
          name: "TechCorp Solutions",
          industry: "Technology",
          description: "Automated customer support reducing response time by 85%",
        },
        {
          icon: ShoppingCart,
          name: "RetailMax",
          industry: "E-commerce",
          description: "AI-powered sales assistant increasing conversion by 40%",
        },
        {
          icon: Heart,
          name: "HealthFirst Clinic",
          industry: "Healthcare",
          description: "Patient scheduling automation saving 20 hours weekly",
        },
        {
          icon: GraduationCap,
          name: "EduTech Academy",
          industry: "Education",
          description: "Intelligent tutoring system improving student outcomes",
        },
        {
          icon: Car,
          name: "AutoDrive Motors",
          industry: "Automotive",
          description: "Service booking automation with 95% accuracy",
        },
        {
          icon: Plane,
          name: "SkyHigh Airlines",
          industry: "Travel",
          description: "Multi-language customer service across 12 countries",
        },
      ],
    },
    es: {
      badge: "Confianza de Líderes de la Industria",
      title: "Impulsando el Éxito en Todas las Industrias",
      subtitle:
        "Desde startups hasta empresas Fortune 500, negocios en todo el mundo confían en N3uralia para transformar sus operaciones con IA.",
      clients: [
        {
          icon: Building2,
          name: "TechCorp Solutions",
          industry: "Tecnología",
          description: "Soporte al cliente automatizado reduciendo tiempo de respuesta en 85%",
        },
        {
          icon: ShoppingCart,
          name: "RetailMax",
          industry: "E-commerce",
          description: "Asistente de ventas con IA aumentando conversión en 40%",
        },
        {
          icon: Heart,
          name: "HealthFirst Clinic",
          industry: "Salud",
          description: "Automatización de citas de pacientes ahorrando 20 horas semanales",
        },
        {
          icon: GraduationCap,
          name: "EduTech Academy",
          industry: "Educación",
          description: "Sistema de tutoría inteligente mejorando resultados estudiantiles",
        },
        {
          icon: Car,
          name: "AutoDrive Motors",
          industry: "Automotriz",
          description: "Automatización de reservas de servicio con 95% de precisión",
        },
        {
          icon: Plane,
          name: "SkyHigh Airlines",
          industry: "Viajes",
          description: "Servicio al cliente multiidioma en 12 países",
        },
      ],
    },
  }

  const t = content[language]

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.clients.map((client, index) => (
            <Card
              key={index}
              className="border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mr-4">
                    <client.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black">{client.name}</h3>
                    <Badge variant="outline" className="text-xs border-gray-300 text-gray-600">
                      {client.industry}
                    </Badge>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{client.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
