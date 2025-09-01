"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "María González",
      role: "CEO, TechStart",
      content:
        "N3uralia transformó completamente nuestro servicio al cliente. Ahora atendemos 24/7 con respuestas precisas y personalizadas.",
      rating: 5,
      company: "TechStart",
      industry: "Tecnología",
    },
    {
      name: "Carlos Mendoza",
      role: "Director de Operaciones, RetailPlus",
      content:
        "La implementación fue perfecta. Nuestros clientes están más satisfechos y hemos reducido costos operativos en un 40%.",
      rating: 5,
      company: "RetailPlus",
      industry: "Retail",
    },
    {
      name: "Ana Rodríguez",
      role: "Gerente de Marketing, FinanceCore",
      content:
        "Los agentes de IA de N3uralia entienden perfectamente las consultas financieras complejas. Increíble nivel de precisión.",
      rating: 5,
      company: "FinanceCore",
      industry: "Finanzas",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 border-green-500/30">
            Historias Reales
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Lo que dicen nuestros clientes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empresas de todos los tamaños confían en N3uralia para transformar su atención al cliente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-primary mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-primary font-medium mt-1">
                    {testimonial.company} • {testimonial.industry}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
