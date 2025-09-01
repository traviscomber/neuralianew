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
    },
    {
      name: "Carlos Mendoza",
      role: "Director de Operaciones, RetailPlus",
      content:
        "La implementación fue perfecta. Nuestros clientes están más satisfechos y hemos reducido costos operativos en un 40%.",
      rating: 5,
      company: "RetailPlus",
    },
    {
      name: "Ana Rodríguez",
      role: "Gerente de Ventas, FinanceGroup",
      content:
        "Los agentes de IA de N3uralia entienden perfectamente las consultas financieras complejas. Increíble tecnología.",
      rating: 5,
      company: "FinanceGroup",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Testimonios</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empresas de todos los tamaños confían en N3uralia para transformar su atención al cliente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-blue-500 mr-3" />
                  <div className="flex">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
