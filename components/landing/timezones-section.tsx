"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Globe } from "lucide-react"

export default function TimezonesSection() {
  const timezones = [
    { city: "Santiago", country: "Chile", time: "UTC-3", flag: "🇨🇱" },
    { city: "Buenos Aires", country: "Argentina", time: "UTC-3", flag: "🇦🇷" },
    { city: "Ciudad de México", country: "México", time: "UTC-6", flag: "🇲🇽" },
    { city: "Madrid", country: "España", time: "UTC+1", flag: "🇪🇸" },
    { city: "Bogotá", country: "Colombia", time: "UTC-5", flag: "🇨🇴" },
    { city: "Lima", country: "Perú", time: "UTC-5", flag: "🇵🇪" },
    { city: "Miami", country: "Estados Unidos", time: "UTC-5", flag: "🇺🇸" },
    { city: "São Paulo", country: "Brasil", time: "UTC-3", flag: "🇧🇷" },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
            <Globe className="w-4 h-4 mr-2" />
            Cobertura Global
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">Atención en tu zona horaria</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestro equipo distribuido globalmente garantiza soporte 24/7 en diferentes zonas horarias
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {timezones.map((timezone, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-4 text-center">
                <div className="text-4xl mb-3">{timezone.flag}</div>
                <h3 className="font-semibold text-foreground text-sm mb-1">{timezone.city}</h3>
                <p className="text-xs text-muted-foreground mb-2">{timezone.country}</p>
                <div className="flex items-center justify-center gap-1 text-xs text-blue-600">
                  <Clock className="w-3 h-3" />
                  {timezone.time}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Siempre disponibles para ti</h3>
            <p className="text-muted-foreground leading-relaxed">
              Sin importar dónde te encuentres, nuestro equipo global está listo para ayudarte. Ofrecemos soporte
              técnico especializado, consultoría estratégica y mantenimiento proactivo las 24 horas del día, los 7 días
              de la semana.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Clock className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium">Respuesta: 15 min</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Globe className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium">8 países</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-sm font-medium">🏆 99.9% uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
