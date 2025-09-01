"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Globe, Users, Headphones, Star, Award } from "lucide-react"

export default function TeamSection() {
  const teamHighlights = [
    {
      icon: Clock,
      title: "Soporte 24/7",
      description: "Equipo técnico disponible las 24 horas para resolver cualquier consulta o incidencia.",
      highlight: "Tiempo de respuesta promedio: 15 minutos",
    },
    {
      icon: Globe,
      title: "Cobertura Global",
      description: "Presencia en múltiples zonas horarias para atención continua sin interrupciones.",
      highlight: "Operamos en 12 países diferentes",
    },
    {
      icon: Users,
      title: "Equipo Multidisciplinario",
      description: "Especialistas en IA, desarrollo, UX/UI, y consultoría empresarial trabajando en conjunto.",
      highlight: "50+ profesionales especializados",
    },
    {
      icon: Headphones,
      title: "Atención Personalizada",
      description: "Cada cliente tiene un account manager dedicado que conoce su proyecto en detalle.",
      highlight: "1 account manager por cada 5 clientes",
    },
    {
      icon: Star,
      title: "Experiencia Comprobada",
      description: "Más de 5 años desarrollando soluciones de IA para empresas de todos los tamaños.",
      highlight: "200+ proyectos exitosos completados",
    },
    {
      icon: Award,
      title: "Certificaciones Internacionales",
      description: "Equipo certificado en AWS, Azure, Google Cloud y las principales tecnologías de IA.",
      highlight: "100% del equipo técnico certificado",
    },
  ]

  const countries = [
    { name: "Chile", flag: "🇨🇱", timezone: "UTC-3" },
    { name: "Argentina", flag: "🇦🇷", timezone: "UTC-3" },
    { name: "Colombia", flag: "🇨🇴", timezone: "UTC-5" },
    { name: "México", flag: "🇲🇽", timezone: "UTC-6" },
    { name: "España", flag: "🇪🇸", timezone: "UTC+1" },
    { name: "Estados Unidos", flag: "🇺🇸", timezone: "UTC-5" },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border-orange-500/30">
            Nuestro Equipo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Expertos comprometidos con tu éxito
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Un equipo multidisciplinario disponible 24/7 en múltiples países para brindarte el mejor soporte
          </p>
        </div>

        {/* Team Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamHighlights.map((item, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{item.description}</p>
                    <div className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                      {item.highlight}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Global Presence */}
        <div className="bg-card border border-border rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Presencia Global - Soporte 24/7</h3>
            <p className="text-muted-foreground">
              Nuestro equipo distribuido globalmente garantiza atención continua sin importar tu zona horaria
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {countries.map((country, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{country.flag}</div>
                <div className="font-medium text-foreground text-sm">{country.name}</div>
                <div className="text-xs text-muted-foreground">{country.timezone}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
              <Clock className="w-4 h-4 mr-2" />
              Disponible 24 horas, 7 días a la semana
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
