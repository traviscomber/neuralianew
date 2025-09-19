"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Success Stories",
      subtitle: "Real results from our AI solutions",
      testimonials: [
        {
          name: "Sebastian Puelma",
          title: "CEO, EcoSuelo Lab",
          company: "Analytics Pro",
          image: "/testimonials/sebastian-puelma.jpg",
          rating: 5,
          quote:
            "N3uralia's AI system has revolutionized our data analysis process. We've improved our predictive accuracy by 40% and reduced analysis time by 60%. Their approach to AI implementation is both innovative and practical.",
        },
      ],
    },
    es: {
      title: "Historias de Éxito",
      subtitle: "Resultados reales de nuestras soluciones de IA",
      testimonials: [
        {
          name: "Sebastian Puelma",
          title: "CEO, EcoSuelo Lab",
          company: "Analytics Pro",
          image: "/testimonials/sebastian-puelma.jpg",
          rating: 5,
          quote:
            "El sistema de IA de N3uralia ha revolucionado nuestro proceso de análisis de datos. Hemos mejorado nuestra precisión predictiva en un 40% y reducido el tiempo de análisis en un 60%. Su enfoque para la implementación de IA es tanto innovador como práctico.",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {t.testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={120}
                      height={120}
                      className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    <blockquote className="text-lg text-gray-700 mb-6 italic">"{testimonial.quote}"</blockquote>

                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600">{testimonial.title}</div>
                      <div className="text-blue-600 font-medium">{testimonial.company}</div>
                    </div>
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
