"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function TestimonialsSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Customer Success Stories",
      title: "What Our Clients Say About N3uralia",
      subtitle: "Real results from real businesses that have transformed their operations with our AI agents.",
      testimonials: [
        {
          name: "Sarah Johnson",
          role: "CEO, TechStart Inc.",
          company: "TechStart Inc.",
          image: "/placeholder.svg?height=60&width=60&text=SJ",
          rating: 5,
          quote:
            "N3uralia's AI agents reduced our customer support workload by 70% while improving response times. The ROI was evident within the first month.",
        },
        {
          name: "Carlos Rodriguez",
          role: "Operations Director, GlobalCorp",
          company: "GlobalCorp",
          image: "/placeholder.svg?height=60&width=60&text=CR",
          rating: 5,
          quote:
            "The seamless integration across all our communication channels was impressive. Our customers love the instant, accurate responses they get 24/7.",
        },
        {
          name: "Emily Chen",
          role: "Marketing Manager, InnovateLab",
          company: "InnovateLab",
          image: "/placeholder.svg?height=60&width=60&text=EC",
          rating: 5,
          quote:
            "Our lead qualification process is now completely automated. We're capturing 3x more qualified leads and our sales team can focus on closing deals.",
        },
      ],
    },
    es: {
      badge: "Historias de Éxito de Clientes",
      title: "Lo Que Nuestros Clientes Dicen Sobre N3uralia",
      subtitle: "Resultados reales de negocios reales que han transformado sus operaciones con nuestros agentes de IA.",
      testimonials: [
        {
          name: "Sarah Johnson",
          role: "CEO, TechStart Inc.",
          company: "TechStart Inc.",
          image: "/placeholder.svg?height=60&width=60&text=SJ",
          rating: 5,
          quote:
            "Los agentes de IA de N3uralia redujeron nuestra carga de soporte al cliente en 70% mientras mejoraron los tiempos de respuesta. El ROI fue evidente en el primer mes.",
        },
        {
          name: "Carlos Rodriguez",
          role: "Director de Operaciones, GlobalCorp",
          company: "GlobalCorp",
          image: "/placeholder.svg?height=60&width=60&text=CR",
          rating: 5,
          quote:
            "La integración perfecta en todos nuestros canales de comunicación fue impresionante. Nuestros clientes aman las respuestas instantáneas y precisas que reciben 24/7.",
        },
        {
          name: "Emily Chen",
          role: "Gerente de Marketing, InnovateLab",
          company: "InnovateLab",
          image: "/placeholder.svg?height=60&width=60&text=EC",
          rating: 5,
          quote:
            "Nuestro proceso de calificación de leads ahora está completamente automatizado. Estamos capturando 3x más leads calificados y nuestro equipo de ventas puede enfocarse en cerrar tratos.",
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
            className="mb-4 px-4 py-2 text-sm font-medium bg-green-50 text-green-700 border-green-200"
          >
            {t.badge}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{t.title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
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
