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
          ? "N3uralia transformed our business operations with their AI agents. We've seen a 40% increase in efficiency and our customers love the 24/7 intelligent support."
          : "N3uralia transformó nuestras operaciones comerciales con sus agentes de IA. Hemos visto un aumento del 40% en eficiencia y nuestros clientes aman el soporte inteligente 24/7.",
    },
    {
      name: "Sarah Chen",
      position: language === "en" ? "Operations Director" : "Directora de Operaciones",
      company: "Global Logistics Inc",
      image: "/testimonials/sarah-chen.jpg",
      rating: 5,
      text:
        language === "en"
          ? "The automation systems developed by N3uralia have revolutionized our workflow. What used to take hours now happens in minutes, with incredible accuracy."
          : "Los sistemas de automatización desarrollados por N3uralia han revolucionado nuestro flujo de trabajo. Lo que solía tomar horas ahora sucede en minutos, con increíble precisión.",
    },
    {
      name: "Elena Rodriguez",
      position: language === "en" ? "Marketing Manager" : "Gerente de Marketing",
      company: "Digital Innovations",
      image: "/testimonials/elena-rodrigues.jpg",
      rating: 5,
      text:
        language === "en"
          ? "Working with N3uralia was a game-changer. Their AI solutions are not just advanced, they're practical and deliver real results for our business."
          : "Trabajar con N3uralia fue un cambio radical. Sus soluciones de IA no solo son avanzadas, son prácticas y entregan resultados reales para nuestro negocio.",
    },
    {
      name: "Juan Francisco Pumpkin",
      position: language === "en" ? "Project Manager" : "Gerente de Proyectos",
      company: "ConstructIA",
      image: "/testimonials/juan-francisco-pumpkin.jpg",
      rating: 5,
      text:
        language === "en"
          ? "N3uralia's AI system for construction project management has reduced our project delays by 80%. The intelligent scheduling and resource optimization is phenomenal."
          : "El sistema de IA de N3uralia para gestión de proyectos de construcción ha reducido nuestros retrasos de proyecto en un 80%. La programación inteligente y optimización de recursos es fenomenal.",
    },
    {
      name: "Joaquin Covarrubias",
      position: language === "en" ? "Career Coach & Founder" : "Coach Profesional y Fundador",
      company: "Despega Tu Carrera",
      image: "/testimonials/juan-francisco-pumpkin.jpg",
      rating: 5,
      text:
        language === "en"
          ? "The AI coaching platform developed by N3uralia has transformed how we help professionals advance their careers. Our clients now have 90% higher job placement success rates."
          : "La plataforma de coaching con IA desarrollada por N3uralia ha transformado cómo ayudamos a los profesionales a avanzar en sus carreras. Nuestros clientes ahora tienen tasas de éxito de colocación laboral 90% más altas.",
    },
    {
      name: "Juan Navarro",
      position: language === "en" ? "Innovation Director" : "Director de Innovación",
      company: "FutureTech Labs",
      image: "/testimonials/juan-navarro.jpg",
      rating: 5,
      text:
        language === "en"
          ? "N3uralia's approach to AI development is exceptional. They don't just build technology, they create intelligent solutions that understand and adapt to our specific needs."
          : "El enfoque de N3uralia para el desarrollo de IA es excepcional. No solo construyen tecnología, crean soluciones inteligentes que entienden y se adaptan a nuestras necesidades específicas.",
    },
    {
      name: "Sebastian Puelma",
      position: language === "en" ? "CTO" : "Director de Tecnología",
      company: "DataFlow Systems",
      image: "/testimonials/sebastian-puelma.jpg",
      rating: 5,
      text:
        language === "en"
          ? "The level of customization and intelligence in N3uralia's AI agents is remarkable. They've helped us automate complex processes we never thought possible."
          : "El nivel de personalización e inteligencia en los agentes de IA de N3uralia es notable. Nos han ayudado a automatizar procesos complejos que nunca pensamos que fueran posibles.",
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
            {language === "en"
              ? "What Our Clients Say About N3uralia"
              : "Lo Que Dicen Nuestros Clientes Sobre N3uralia"}
          </h2>
          <p className="text-xl text-gray-600 font-light">
            {language === "en"
              ? "Real experiences from businesses transformed by our AI solutions"
              : "Experiencias reales de empresas transformadas por nuestras soluciones de IA"}
          </p>
          <div className="w-24 h-px bg-gray-400 mx-auto mt-6"></div>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm">
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed mb-8 font-light">
              "{testimonials[currentTestimonial].text}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center">
              <div className="flex items-center">
                <Image
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-800 text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-600">{testimonials[currentTestimonial].position}</div>
                  <div className="text-blue-600 font-medium">{testimonials[currentTestimonial].company}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
