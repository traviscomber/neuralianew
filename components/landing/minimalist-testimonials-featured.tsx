"use client"

import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import { Star } from "lucide-react"

export function MinimalistTestimonialsFeatured() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Trusted by Leading Companies",
      testimonials: [
        {
          quote:
            "N3uralia's AI system streamlined our environmental consulting processes. The automated analysis saves us hours daily.",
          author: "Sebastian Puelma",
          role: "Owner",
          company: "Ecosuelolab",
          image: "/testimonials/sebastian-puelma.jpg",
          rating: 5,
        },
        {
          quote:
            "The real estate AI assistant N3uralia developed helps us match properties with clients more effectively and efficiently.",
          author: "Juan Navarro",
          role: "Owner",
          company: "Sur-Realista",
          image: "/testimonials/juan-navarro.jpg",
          rating: 5,
        },
      ],
    },
    es: {
      title: "Confiado por Empresas Líderes",
      testimonials: [
        {
          quote:
            "El sistema de IA de N3uralia optimizó nuestros procesos de consultoría ambiental. El análisis automatizado nos ahorra horas diarias.",
          author: "Sebastian Puelma",
          role: "Propietario",
          company: "Ecosuelolab",
          image: "/testimonials/sebastian-puelma.jpg",
          rating: 5,
        },
        {
          quote:
            "El asistente de IA inmobiliaria que N3uralia desarrolló nos ayuda a conectar propiedades con clientes de manera más efectiva y eficiente.",
          author: "Juan Navarro",
          role: "Propietario",
          company: "Sur-Realista",
          image: "/testimonials/juan-navarro.jpg",
          rating: 5,
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">{t.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {t.testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} size={14} className="fill-black text-black" />
                ))}
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed text-sm">"{testimonial.quote}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-black text-sm">{testimonial.author}</p>
                  <p className="text-gray-600 text-xs">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="/outcomes" className="text-sm font-semibold text-black hover:text-gray-600 transition-colors">
            {language === "es" ? "Ver más testimonios →" : "View all testimonials →"}
          </a>
        </div>
      </div>
    </section>
  )
}
