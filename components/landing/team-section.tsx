"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Globe, Users, Headphones, Star } from "lucide-react"

export default function TeamSection() {
  const teamStats = [
    {
      icon: Users,
      title: "Equipo Multidisciplinario",
      description:
        "Desarrolladores, científicos de datos, especialistas en UX y consultores de negocio trabajando en conjunto.",
    },
    {
      icon: Clock,
      title: "Soporte 24/7",
      description:
        "Atención continua con equipo distribuido globalmente para resolver cualquier consulta o incidencia.",
    },
    {
      icon: Globe,
      title: "Cobertura Global",
      description: "Presencia en América, Europa y Asia para brindar soporte en diferentes zonas horarias.",
    },
    {
      icon: Headphones,
      title: "Especialistas Dedicados",
      description: "Cada cliente tiene un especialista asignado que conoce profundamente su proyecto y necesidades.",
    },
  ]

  const countries = [
    { name: "Chile", flag: "🇨🇱", timezone: "UTC-3" },
    { name: "Argentina", flag: "🇦🇷", timezone: "UTC-3" },
    { name: "México", flag: "🇲🇽", timezone: "UTC-6" },
    { name: "España", flag: "🇪🇸", timezone: "UTC+1" },
    { name: "Colombia", flag: "🇨🇴", timezone: "UTC-5" },
    { name: "Perú", flag: "🇵🇪", timezone: "UTC-5" },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">Nuestro Equipo</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">Soporte 24/7 con equipo global</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un equipo multidisciplinario distribuido en 6 países para brindarte atención continua
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {teamStats.map((stat, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 rounded-lg flex-shrink-0">
                    <stat.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{stat.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{stat.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Presencia Global</h3>
            <p className="text-muted-foreground">
              Nuestro equipo está distribuido estratégicamente para ofrecerte soporte en tu zona horaria
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {countries.map((country, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl mb-2">{country.flag}</div>
                <p className="font-medium text-foreground text-sm">{country.name}</p>
                <p className="text-xs text-muted-foreground">{country.timezone}</p>
              </div>
            ))}
          </div>

          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-orange-600">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-semibold">Soporte Premium 24/7</span>
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tiempo de respuesta promedio: 15 minutos | Resolución de incidencias: 2 horas
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700">
              <Headphones className="w-4 h-4 mr-2" />
              Contactar Soporte
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
