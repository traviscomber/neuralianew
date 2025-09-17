"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"
import { useState, useEffect } from "react"

export function SuccessStoriesSection() {
  const { language } = useLanguage()
  const [currentTestimonialSet, setCurrentTestimonialSet] = useState(0)

  const content = {
    en: {
      title: "Success Stories",
      subtitle: "Learn how we've helped businesses leverage AI",
      testimonialSets: [
        [
          {
            name: "Juan Navarro",
            title: "Owner, Sur-Realista",
            company: "Sur-Realista",
            companyUrl: "https://www.sur-realista.cl",
            image: "/testimonials/juan-navarro.jpg",
            quote:
              "The real estate AI assistant N3uralia developed helps us match properties with clients more effectively and efficiently.",
          },
          {
            name: "Sebastian Puelma",
            title: "Owner, Ecosuelolab",
            company: "Ecosuelolab",
            companyUrl: "https://www.ecosuelolab.com",
            image: "/testimonials/sebastian-puelma.jpg",
            quote:
              "N3uralia's AI system streamlined our environmental consulting processes. The automated analysis saves us hours of manual work every day.",
          },
          {
            name: "Juan Francisco Pumpin",
            title: "Owner, ConstructIA",
            company: "ConstructIA",
            image: "/testimonials/juan-francisco-pumpkin.jpg",
            quote:
              "N3uralia's team management AI for our electricity tower projects keeps everyone coordinated and informed in real-time.",
          },
        ],
        [
          {
            name: "Maria Gonzalez",
            title: "Project Manager, Parrotfy",
            company: "Parrotfy",
            image: "/testimonials/elena-rodrigues.jpg",
            quote:
              "N3uralia's conversational AI agent transformed our ERP system. Now our team can access any business data just by asking in natural language.",
          },
          {
            name: "Joaquin Covarrubias",
            title: "Founder, Despega Tu Carrera",
            company: "Despega Tu Carrera",
            companyUrl: "https://www.despegatucarrera.com",
            image: "/testimonials/john-smith.jpg",
            quote:
              "The career coaching automation system N3uralia built helps us provide personalized guidance to our clients 24/7.",
          },
          {
            name: "Sofia Chen",
            title: "Product Manager, pon3",
            company: "pon3",
            image: "/testimonials/sarah-chen.jpg",
            quote:
              "The AI system from N3uralia enhanced our platform's user experience with intelligent recommendations and automated support.",
          },
        ],
      ],
    },
    es: {
      title: "Historias de Éxito",
      subtitle: "Aprende cómo hemos ayudado a las empresas a aprovechar la IA",
      testimonialSets: [
        [
          {
            name: "Juan Navarro",
            title: "Propietario, Sur-Realista",
            company: "Sur-Realista",
            companyUrl: "https://www.sur-realista.cl",
            image: "/testimonials/juan-navarro.jpg",
            quote:
              "El asistente de IA inmobiliaria que N3uralia desarrolló nos ayuda a conectar propiedades con clientes de manera más efectiva y eficiente.",
          },
          {
            name: "Sebastian Puelma",
            title: "Propietario, Ecosuelolab",
            company: "Ecosuelolab",
            companyUrl: "https://www.ecosuelolab.com",
            image: "/testimonials/sebastian-puelma.jpg",
            quote:
              "El sistema de IA de N3uralia optimizó nuestros procesos de consultoría ambiental. El análisis automatizado nos ahorra horas de trabajo manual cada día.",
          },
          {
            name: "Juan Francisco Pumpin",
            title: "Propietario, ConstructIA",
            company: "ConstructIA",
            image: "/testimonials/juan-francisco-pumpkin.jpg",
            quote:
              "La IA de gestión de equipos de N3uralia para nuestros proyectos de torres eléctricas mantiene a todos coordinados e informados en tiempo real.",
          },
        ],
        [
          {
            name: "Maria Gonzalez",
            title: "Gerente de Proyecto, Parrotfy",
            company: "Parrotfy",
            image: "/testimonials/elena-rodrigues.jpg",
            quote:
              "El agente conversacional de IA de N3uralia transformó nuestro sistema ERP. Ahora nuestro equipo puede acceder a cualquier dato empresarial simplemente preguntando en lenguaje natural.",
          },
          {
            name: "Joaquin Covarrubias",
            title: "Fundador, Despega Tu Carrera",
            company: "Despega Tu Carrera",
            companyUrl: "https://www.despegatucarrera.com",
            image: "/testimonials/john-smith.jpg",
            quote:
              "El sistema de automatización de coaching profesional que N3uralia construyó nos ayuda a proporcionar orientación personalizada a nuestros clientes 24/7.",
          },
          {
            name: "Sofia Chen",
            title: "Gerente de Producto, pon3",
            company: "pon3",
            image: "/testimonials/sarah-chen.jpg",
            quote:
              "El sistema de IA de N3uralia mejoró la experiencia de usuario de nuestra plataforma con recomendaciones inteligentes y soporte automatizado.",
          },
        ],
      ],
    },
  }

  const t = content[language]

  // Auto-rotate testimonials every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialSet((prev) => (prev + 1) % t.testimonialSets.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [t.testimonialSets.length])

  const currentTestimonials = t.testimonialSets[currentTestimonialSet]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6">{t.title}</h2>
          <p className="text-xl md:text-2xl text-blue-600 max-w-4xl mx-auto leading-relaxed">{t.subtitle}</p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {currentTestimonials.map((testimonial, index) => (
            <div
              key={`${currentTestimonialSet}-${index}`}
              className="flex flex-col md:flex-row gap-6 items-start opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex-shrink-0">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={`${testimonial.name} - ${testimonial.title}`}
                  width={200}
                  height={200}
                  className={`w-48 h-48 md:w-56 md:h-56 object-cover rounded-lg shadow-lg ${
                    testimonial.name === "Juan Navarro"
                      ? "grayscale object-top scale-110"
                      : testimonial.name === "Sebastian Puelma"
                        ? "grayscale"
                        : ""
                  }`}
                />
              </div>

              <Card className="flex-1 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{testimonial.name}</h3>
                    <p className="text-lg text-gray-600">{testimonial.title}</p>
                    {testimonial.companyUrl ? (
                      <a
                        href={testimonial.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 font-semibold hover:text-blue-800 hover:underline transition-colors duration-200"
                      >
                        {testimonial.company}
                      </a>
                    ) : (
                      <p className="text-sm text-blue-600 font-semibold">{testimonial.company}</p>
                    )}
                  </div>

                  <div className="text-gray-700 leading-relaxed">
                    <p className="text-lg">{testimonial.quote}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Rotation indicators */}
        <div className="flex justify-center mt-12 space-x-2">
          {t.testimonialSets.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonialSet(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonialSet ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Show testimonial set ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
