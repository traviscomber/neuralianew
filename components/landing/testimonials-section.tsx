"use client"

import { Star } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function TestimonialsSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "What Our Clients Say",
      subtitle: "Trusted by leading companies worldwide",
      testimonials: [
        {
          name: "Carlos Rodriguez",
          position: "CTO, TechCorp",
          content:
            "N3uralia transformed our customer service with their AI agents. We've seen a 60% reduction in response time and 40% increase in customer satisfaction.",
          rating: 5,
        },
        {
          name: "Maria Gonzalez",
          position: "Operations Director, RetailPlus",
          content:
            "The process automation solution has streamlined our entire workflow. We're now processing 3x more orders with the same team size.",
          rating: 5,
        },
        {
          name: "David Chen",
          position: "CEO, StartupX",
          content:
            "Exceptional technical expertise and support. The AI integration was seamless and delivered results beyond our expectations.",
          rating: 5,
        },
      ],
    },
    es: {
      title: "Lo Que Dicen Nuestros Clientes",
      subtitle: "Confiado por empresas líderes a nivel mundial",
      testimonials: [
        {
          name: "Carlos Rodriguez",
          position: "CTO, TechCorp",
          content:
            "N3uralia transformó nuestro servicio al cliente con sus agentes de IA. Hemos visto una reducción del 60% en tiempo de respuesta y 40% de aumento en satisfacción.",
          rating: 5,
        },
        {
          name: "Maria Gonzalez",
          position: "Directora de Operaciones, RetailPlus",
          content:
            "La solución de automatización ha optimizado todo nuestro flujo de trabajo. Ahora procesamos 3x más pedidos con el mismo equipo.",
          rating: 5,
        },
        {
          name: "David Chen",
          position: "CEO, StartupX",
          content:
            "Experiencia técnica excepcional y soporte. La integración de IA fue perfecta y entregó resultados más allá de nuestras expectativas.",
          rating: 5,
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-black fill-current" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold text-black">{testimonial.name}</div>
                <div className="text-gray-600">{testimonial.position}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
