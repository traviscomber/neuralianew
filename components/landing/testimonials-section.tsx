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
          ? "N3uralia's AI agents have revolutionized our customer service operations. We've seen a 40% increase in customer satisfaction and 60% reduction in response times. Their technology is truly cutting-edge."
          : "Los agentes de IA de N3uralia han revolucionado nuestras operaciones de servicio al cliente. Hemos visto un aumento del 40% en la satisfacción del cliente y una reducción del 60% en los tiempos de respuesta. Su tecnología es verdaderamente vanguardista.",
    },
    {
      name: "Sarah Chen",
      position: language === "en" ? "Operations Director" : "Directora de Operaciones",
      company: "Global Manufacturing Inc",
      image: "/testimonials/sarah-chen.jpg",
      rating: 5,
      text:
        language === "en"
          ? "The automation solutions provided by N3uralia have streamlined our entire workflow. We've reduced manual tasks by 75% and improved accuracy significantly. Outstanding results!"
          : "Las soluciones de automatización proporcionadas por N3uralia han optimizado todo nuestro flujo de trabajo. Hemos reducido las tareas manuales en un 75% y mejorado significativamente la precisión. ¡Resultados excepcionales!",
    },
    {
      name: "Elena Rodriguez",
      position: language === "en" ? "Marketing Manager" : "Gerente de Marketing",
      company: "Digital Innovations",
      image: "/testimonials/elena-rodrigues.jpg",
      rating: 5,
      text:
        language === "en"
          ? "Working with N3uralia has been a game-changer for our marketing campaigns. Their AI-driven insights have helped us achieve 3x better conversion rates and significantly improved ROI."
          : "Trabajar con N3uralia ha sido un cambio radical para nuestras campañas de marketing. Sus insights impulsados por IA nos han ayudado a lograr tasas de conversión 3 veces mejores y un ROI significativamente mejorado.",
    },
    {
      name: "Juan Francisco Pumpkin",
      position: language === "en" ? "Project Manager" : "Gerente de Proyectos",
      company: "ConstructIA",
      image: "/testimonials/juan-francisco-pumpkin.jpg",
      rating: 5,
      text:
        language === "en"
          ? "N3uralia's AI system has transformed our construction project management. We've reduced project delays by 80% and improved resource allocation efficiency. The predictive analytics are incredibly accurate."
          : "El sistema de IA de N3uralia ha transformado la gestión de nuestros proyectos de construcción. Hemos reducido los retrasos de proyectos en un 80% y mejorado la eficiencia en la asignación de recursos. Los análisis predictivos son increíblemente precisos.",
    },
    {
      name: "Joaquin Covarrubias",
      position: language === "en" ? "Career Development Director" : "Director de Desarrollo Profesional",
      company: "Despega Tu Carrera",
      image: "/testimonials/juan-francisco-pumpkin.jpg",
      rating: 5,
      text:
        language === "en"
          ? "The AI coaching platform developed by N3uralia has revolutionized our career guidance services. We've achieved 90% higher job placement success rates and our clients report 95% satisfaction with personalized AI mentoring."
          : "La plataforma de coaching con IA desarrollada por N3uralia ha revolucionado nuestros servicios de orientación profesional. Hemos logrado tasas de colocación laboral 90% más altas y nuestros clientes reportan 95% de satisfacción con la mentoría personalizada de IA.",
    },
    {
      name: "Juan Navarro",
      position: language === "en" ? "CTO" : "Director de Tecnología",
      company: "InnovateTech",
      image: "/testimonials/juan-navarro.jpg",
      rating: 5,
      text:
        language === "en"
          ? "N3uralia's technical expertise is unmatched. They delivered a complex AI solution that exceeded our expectations. The system's performance and reliability have been exceptional."
          : "La experiencia técnica de N3uralia es inigualable. Entregaron una solución de IA compleja que superó nuestras expectativas. El rendimiento y la confiabilidad del sistema han sido excepcionales.",
    },
    {
      name: "Sebastian Puelma",
      position: language === "en" ? "Business Development Manager" : "Gerente de Desarrollo de Negocios",
      company: "FutureTech Solutions",
      image: "/testimonials/sebastian-puelma.jpg",
      rating: 5,
      text:
        language === "en"
          ? "The AI agents created by N3uralia have become an integral part of our business operations. They handle complex tasks with remarkable efficiency and have helped us scale our operations seamlessly."
          : "Los agentes de IA creados por N3uralia se han convertido en una parte integral de nuestras operaciones comerciales. Manejan tareas complejas con una eficiencia notable y nos han ayudado a escalar nuestras operaciones sin problemas.",
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
            {language === "en" ? "What Our Clients Say" : "Lo Que Dicen Nuestros Clientes"}
          </h2>
          <p className="text-xl text-gray-600 font-light">
            {language === "en"
              ? "Real experiences from businesses transformed by N3uralia"
              : "Experiencias reales de empresas transformadas por N3uralia"}
          </p>
          <div className="w-24 h-px bg-gray-400 mx-auto mt-6"></div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm">
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg md:text-xl text-gray-700 text-center leading-relaxed mb-8 font-light">
              "{testimonials[currentTestimonial].text}"
            </blockquote>

            {/* Author Info */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <div className="font-semibold text-gray-800 text-lg">{testimonials[currentTestimonial].name}</div>
                <div className="text-gray-600">{testimonials[currentTestimonial].position}</div>
                <div className="text-blue-600 font-medium">{testimonials[currentTestimonial].company}</div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
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

        {/* Statistics */}
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
            <div className="text-gray-600">{language === "en" ? "Support Available" : "Soporte Disponible"}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
