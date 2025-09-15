"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function TestimonialsSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Customer Success Stories",
      title: "What Our Clients Say About N3uralia",
      subtitle: "Real results from real businesses that have transformed their operations with our AI solutions.",
      testimonials: [
        {
          name: "Sarah Johnson",
          role: "CEO, TechStart Inc.",
          company: "TechStart Inc.",
          content:
            "N3uralia's AI agents reduced our customer response time by 90% and increased satisfaction scores dramatically. The implementation was seamless and the results were immediate.",
          rating: 5,
        },
        {
          name: "Carlos Rodriguez",
          role: "Operations Director, GlobalCorp",
          company: "GlobalCorp",
          content:
            "The process automation capabilities have transformed our workflow efficiency. We've saved over 40 hours per week on routine tasks and can focus on strategic initiatives.",
          rating: 5,
        },
        {
          name: "Emily Chen",
          role: "CTO, InnovateHub",
          company: "InnovateHub",
          content:
            "The enterprise integration was flawless. N3uralia's team understood our complex requirements and delivered a solution that exceeded our expectations.",
          rating: 5,
        },
      ],
    },
    es: {
      badge: "Historias de Éxito de Clientes",
      title: "Lo Que Nuestros Clientes Dicen Sobre N3uralia",
      subtitle:
        "Resultados reales de negocios reales que han transformado sus operaciones con nuestras soluciones de IA.",
      testimonials: [
        {
          name: "Sarah Johnson",
          role: "CEO, TechStart Inc.",
          company: "TechStart Inc.",
          content:
            "Los agentes de IA de N3uralia redujeron nuestro tiempo de respuesta al cliente en un 90% y aumentaron dramáticamente los puntajes de satisfacción. La implementación fue perfecta y los resultados fueron inmediatos.",
          rating: 5,
        },
        {
          name: "Carlos Rodriguez",
          role: "Director de Operaciones, GlobalCorp",
          company: "GlobalCorp",
          content:
            "Las capacidades de automatización de procesos han transformado la eficiencia de nuestro flujo de trabajo. Hemos ahorrado más de 40 horas por semana en tareas rutinarias y podemos enfocarnos en iniciativas estratégicas.",
          rating: 5,
        },
        {
          name: "Emily Chen",
          role: "CTO, InnovateHub",
          company: "InnovateHub",
          content:
            "La integración empresarial fue impecable. El equipo de N3uralia entendió nuestros requisitos complejos y entregó una solución que superó nuestras expectativas.",
          rating: 5,
        },
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
            className="mb-4 px-4 py-2 text-sm font-medium bg-black/5 text-black border-black/10"
          >
            {t.badge}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">{t.title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-600 font-semibold text-sm">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-black">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
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
