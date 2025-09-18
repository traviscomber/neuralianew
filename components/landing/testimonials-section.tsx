"use client"

import { useLanguage } from "@/lib/language-context"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export function TestimonialsSection() {
  const { language } = useLanguage()
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "John Smith",
      position: language === "en" ? "CEO" : "Director Ejecutivo",
      company: "TechCorp Solutions",
      image: "/testimonials/john-smith.jpg",
      rating: 5,
      text:
        language === "en"
          ? "N3uralia's AI agents have revolutionized our customer service operations. We've seen a 40% increase in customer satisfaction and 60% reduction in response times. The natural language processing capabilities are truly impressive."
          : "Los agentes de IA de N3uralia han revolucionado nuestras operaciones de servicio al cliente. Hemos visto un aumento del 40% en la satisfacción del cliente y una reducción del 60% en los tiempos de respuesta. Las capacidades de procesamiento de lenguaje natural son realmente impresionantes.",
    },
    {
      name: "Sarah Chen",
      position: language === "en" ? "Operations Director" : "Directora de Operaciones",
      company: "Global Logistics Inc",
      image: "/testimonials/sarah-chen.jpg",
      rating: 5,
      text:
        language === "en"
          ? "The automation systems developed by N3uralia have streamlined our entire supply chain. We've reduced operational costs by 35% while improving accuracy and speed. Their AI solutions are game-changing."
          : "Los sistemas de automatización desarrollados por N3uralia han optimizado toda nuestra cadena de suministro. Hemos reducido los costos operativos en un 35% mientras mejoramos la precisión y velocidad. Sus soluciones de IA son revolucionarias.",
    },
    {
      name: "Elena Rodriguez",
      position: language === "en" ? "Marketing Manager" : "Gerente de Marketing",
      company: "Digital Innovations",
      image: "/testimonials/elena-rodrigues.jpg",
      rating: 5,
      text:
        language === "en"
          ? "Working with N3uralia has been exceptional. Their AI-powered content creation and lead qualification systems have increased our conversion rates by 50%. The team's expertise and support are outstanding."
          : "Trabajar con N3uralia ha sido excepcional. Sus sistemas de creación de contenido y calificación de leads impulsados por IA han aumentado nuestras tasas de conversión en un 50%. La experiencia y el apoyo del equipo son sobresalientes.",
    },
    {
      name: "Juan Francisco Pumpkin",
      position: language === "en" ? "Project Manager" : "Gerente de Proyectos",
      company: "ConstructIA",
      image: "/testimonials/juan-francisco-pumpkin.jpg",
      rating: 5,
      text:
        language === "en"
          ? "N3uralia's AI system for construction project management has transformed our operations. We've reduced project delays by 80% and improved resource allocation efficiency by 65%. The predictive analytics capabilities help us anticipate issues before they become problems."
          : "El sistema de IA de N3uralia para la gestión de proyectos de construcción ha transformado nuestras operaciones. Hemos reducido los retrasos de proyectos en un 80% y mejorado la eficiencia de asignación de recursos en un 65%. Las capacidades de análisis predictivo nos ayudan a anticipar problemas antes de que se conviertan en inconvenientes.",
    },
    {
      name: "Joaquin Covarrubias",
      position: language === "en" ? "Career Coach & Founder" : "Coach Profesional y Fundador",
      company: "Despega Tu Carrera",
      image: "/testimonials/juan-francisco-pumpkin.jpg",
      rating: 5,
      text:
        language === "en"
          ? "The AI-powered career coaching platform developed by N3uralia has revolutionized how we help professionals advance their careers. Our clients now have 90% higher job placement success rates and 95% report significant career satisfaction improvements. The personalized AI guidance is incredibly effective."
          : "La plataforma de coaching profesional impulsada por IA desarrollada por N3uralia ha revolucionado cómo ayudamos a los profesionales a avanzar en sus carreras. Nuestros clientes ahora tienen tasas de éxito de colocación laboral 90% más altas y el 95% reporta mejoras significativas en la satisfacción profesional. La orientación personalizada de IA es increíblemente efectiva.",
    },
    {
      name: "Juan Navarro",
      position: language === "en" ? "Innovation Director" : "Director de Innovación",
      company: "FutureTech Labs",
      image: "/testimonials/juan-navarro.jpg",
      rating: 5,
      text:
        language === "en"
          ? "N3uralia's multi-agent AI systems have accelerated our R&D processes by 70%. The ability to have specialized AI agents working collaboratively on complex problems is remarkable. Their technology is truly next-generation."
          : "Los sistemas de IA multi-agente de N3uralia han acelerado nuestros procesos de I+D en un 70%. La capacidad de tener agentes de IA especializados trabajando colaborativamente en problemas complejos es notable. Su tecnología es verdaderamente de próxima generación.",
    },
    {
      name: "Sebastian Puelma",
      position: language === "en" ? "Data Science Lead" : "Líder de Ciencia de Datos",
      company: "Analytics Pro",
      image: "/testimonials/sebastian-puelma.jpg",
      rating: 5,
      text:
        language === "en"
          ? "The AI analytics platform built by N3uralia has given us unprecedented insights into our data. We've improved our predictive accuracy by 85% and reduced analysis time by 90%. Their approach to AI implementation is both innovative and practical."
          : "La plataforma de análisis de IA construida por N3uralia nos ha dado conocimientos sin precedentes sobre nuestros datos. Hemos mejorado nuestra precisión predictiva en un 85% y reducido el tiempo de análisis en un 90%. Su enfoque para la implementación de IA es tanto innovador como práctico.",
    },
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-700 mb-4">
            {language === "en" ? "Success Stories" : "Historias de Éxito"}
          </h2>
          <p className="text-xl text-gray-600 font-light">
            {language === "en"
              ? "Real results from our AI solutions"
              : "Resultados reales de nuestras soluciones de IA"}
          </p>
          <div className="w-24 h-px bg-gray-400 mx-auto mt-6"></div>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <Image
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  width={120}
                  height={120}
                  className="w-24 h-24 md:w-30 md:h-30 rounded-full object-cover shadow-md"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Author Info */}
                <div>
                  <div className="font-semibold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-600">{testimonials[currentTestimonial].position}</div>
                  <div className="text-blue-600 font-medium">{testimonials[currentTestimonial].company}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">{language === "en" ? "AI Agents Deployed" : "Agentes IA Desplegados"}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">
              {language === "en" ? "Client Satisfaction" : "Satisfacción del Cliente"}
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">{language === "en" ? "AI Support Available" : "Soporte IA Disponible"}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
