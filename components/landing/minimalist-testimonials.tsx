"use client"

import { useState } from "react"
import Image from "next/image"
import { Star } from "lucide-react"

export function MinimalistTestimonials() {
  const [language] = useState("es")

  const content = {
    en: {
      title: "Trusted by Industry Leaders",
      testimonials: [
        {
          quote:
            "The real estate AI assistant N3uralia developed helps us match properties with clients more effectively and efficiently.",
          author: "Juan Navarro",
          role: "Owner",
          company: "Sur-Realista",
          image: "/testimonials/juan-navarro.jpg",
          rating: 5,
        },
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
            "The career coaching automation helps us provide personalized guidance to our clients 24/7 without manual intervention.",
          author: "Joaquín Covarrubias",
          role: "Founder",
          company: "Despega Tu Carrera",
          image: "/testimonials/juan-francisco-pumpkin.jpg",
          rating: 5,
        },
        {
          quote:
            "Blackswan FC's field management system improved our operational efficiency by 65% and enabled us to manage our productive operations seamlessly with AI-powered insights.",
          author: "Santiago Colvin",
          role: "CEO",
          company: "Blackswan Facility Core",
          image: "/testimonials/santiago-colvin.jpg",
          rating: 5,
        },
        {
          quote:
            "The blockchain integration solution N3uralia built enabled us to scale our operations securely and transparently across multiple regions.",
          author: "María González",
          role: "CEO",
          company: "Mermazero",
          image: "/testimonials/maria-gonzalez.jpg",
          rating: 5,
        },
        {
          quote:
            "N3uralia's waste management system reduced our operational costs by 30% and the booking optimization freed up staff time significantly. Perfect solution for our guesthouse in Thailand.",
          author: "Bahn",
          role: "Owner",
          company: "Evergreen Guesthouse",
          image: "/testimonials/bahn.jpg",
          rating: 5,
        },
      ],
    },
    es: {
      title: "Confiado por Líderes de la Industria",
      testimonials: [
        {
          quote:
            "El asistente de IA inmobiliaria que N3uralia desarrolló nos ayuda a conectar propiedades con clientes de manera más efectiva y eficiente.",
          author: "Juan Navarro",
          role: "Propietario",
          company: "Sur-Realista",
          image: "/testimonials/juan-navarro.jpg",
          rating: 5,
        },
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
            "El sistema de automatización de coaching profesional nos ayuda a proporcionar orientación personalizada 24/7 sin intervención manual.",
          author: "Joaquín Covarrubias",
          role: "Fundador",
          company: "Despega Tu Carrera",
          image: "/testimonials/juan-francisco-pumpkin.jpg",
          rating: 5,
        },
        {
          quote:
            "El sistema de gestión de campos productivos de Blackswan FC mejoró nuestra eficiencia operacional en 65% y nos permitió gestionar nuestras operaciones productivas de forma automatizada con insights potenciados por IA.",
          author: "Santiago Colvin",
          role: "CEO",
          company: "Blackswan Facility Core",
          image: "/testimonials/santiago-colvin.jpg",
          rating: 5,
        },
        {
          quote:
            "La solución de integración blockchain que N3uralia construyó nos permitió escalar nuestras operaciones de forma segura y transparente en múltiples regiones.",
          author: "María González",
          role: "CEO",
          company: "Mermazero",
          image: "/testimonials/maria-gonzalez.jpg",
          rating: 5,
        },
        {
          quote:
            "El sistema de gestión de residuos de N3uralia redujo nuestros costos operacionales en 30% y la optimización de reservas liberó significativamente tiempo del personal. Solución perfecta para nuestro guesthouse en Tailandia.",
          author: "Bahn",
          role: "Propietario",
          company: "Evergreen Guesthouse",
          image: "/testimonials/bahn.jpg",
          rating: 5,
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section className="py-20 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">{t.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} size={16} className="fill-black text-black" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed text-sm">"{testimonial.quote}"</p>

              <div className="flex items-center gap-3 pt-6 border-t border-gray-200">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={44}
                  height={44}
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-black text-sm">{testimonial.author}</p>
                  <p className="text-gray-600 text-xs">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
