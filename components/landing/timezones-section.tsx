"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Globe } from "lucide-react"

export default function TimezonesSection() {
  const timezones = [
    { city: "Santiago", country: "Chile", time: "UTC-3", flag: "🇨🇱" },
    { city: "Buenos Aires", country: "Argentina", time: "UTC-3", flag: "🇦🇷" },
    { city: "Bogotá", country: "Colombia", time: "UTC-5", flag: "🇨🇴" },
    { city: "Ciudad de México", country: "México", time: "UTC-6", flag: "🇲🇽" },
    { city: "Madrid", country: "España", time: "UTC+1", flag: "🇪🇸" },
    { city: "Nueva York", country: "Estados Unidos", time: "UTC-5", flag: "🇺🇸" },
    { city: "Londres", country: "Reino Unido", time: "UTC+0", flag: "🇬🇧" },
    { city: "Tokio", country: "Japón", time: "UTC+9", flag: "🇯🇵" },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border-indigo-500/30">
            <Globe className="w-4 h-4 mr-2" />
            Cobertura Global
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Siempre disponibles, sin importar dónde estés
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nuestro equipo distribuido globalmente garantiza soporte 24/7 en tu zona horaria
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {timezones.map((timezone, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="text-4xl mb-3">{timezone.flag}</div>
                <h3 className="font-semibold text-foreground mb-1">{timezone.city}</h3>
                <p className="text-sm text-muted-foreground mb-2">{timezone.country}</p>
                <div className="flex items-center justify-center text-xs text-primary">
                  <Clock className="w-3 h-3 mr-1" />
                  {timezone.time}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Respuesta Garantizada en Tu Horario</h3>
            <p className="text-muted-foreground mb-6">
              No importa si es lunes por la mañana en Santiago o viernes por la noche en Tokio. Nuestro equipo
              distribuido globalmente está siempre listo para ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30 px-4 py-2">
                <Clock className="w-4 h-4 mr-2" />
                Tiempo de respuesta promedio: 15 minutos
              </Badge>
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2">
                <Globe className="w-4 h-4 mr-2" />
                Disponible en 8 zonas horarias
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
