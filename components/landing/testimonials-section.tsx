"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Carlos Mendoza",
    role: "CEO",
    company: "AgroTech Solutions",
    image: "/placeholder-user.jpg",
    content:
      "N3uralia transformó completamente nuestra operación agrícola. Su IA conversacional nos permite analizar suelos en tiempo real y tomar decisiones informadas al instante. Hemos aumentado nuestra productividad en un 40% y reducido costos operativos significativamente.",
    rating: 5,
    industry: "Agricultura",
    results: "40% aumento productividad",
  },
  {
    id: 2,
    name: "María González",
    role: "Directora de Operaciones",
    company: "EduFuture",
    image: "/placeholder-user.jpg",
    content:
      "El sistema de coaching profesional con IA de N3uralia ha revolucionado cómo ayudamos a nuestros estudiantes. La personalización y disponibilidad 24/7 han mejorado la satisfacción estudiantil en un 85%. Es como tener un mentor personal para cada alumno.",
    rating: 5,
    industry: "Educación",
    results: "85% mejora satisfacción",
  },
  {
    id: 3,
    name: "Roberto Silva",
    role: "CTO",
    company: "InnovateCorp",
    image: "/placeholder-user.jpg",
    content:
      "La integración de IA conversacional en nuestro ERP fue perfecta. Los empleados ahora pueden consultar datos complejos usando lenguaje natural. Hemos reducido el tiempo de capacitación en un 70% y mejorado la eficiencia operacional dramáticamente.",
    rating: 5,
    industry: "Tecnología",
    results: "70% menos capacitación",
  },
  {
    id: 4,
    name: "Ana Rodríguez",
    role: "Gerente General",
    company: "RetailMax",
    image: "/placeholder-user.jpg",
    content:
      "El chatbot multicanal de N3uralia maneja el 80% de nuestras consultas de clientes automáticamente. La integración con WhatsApp, web y redes sociales es perfecta. Nuestros clientes están más satisfechos y nuestro equipo puede enfocarse en tareas estratégicas.",
    rating: 5,
    industry: "Retail",
    results: "80% automatización consultas",
  },
  {
    id: 5,
    name: "Diego Morales",
    role: "Director de Innovación",
    company: "FinanceFlow",
    image: "/placeholder-user.jpg",
    content:
      "La seguridad y escalabilidad de las soluciones de N3uralia son excepcionales. Procesamos miles de transacciones diarias con IA y la confiabilidad es del 99.9%. Su equipo entiende perfectamente las necesidades del sector financiero.",
    rating: 5,
    industry: "Finanzas",
    results: "99.9% confiabilidad",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(120,119,198,0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,119,198,0.15),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Nuestros
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Clientes
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Descubre cómo empresas de diferentes industrias han transformado sus operaciones con nuestras soluciones de
            IA conversacional.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row items-start gap-8">
                      {/* Quote Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                          <Quote className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        {/* Stars */}
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className="text-lg md:text-xl text-slate-200 leading-relaxed mb-6">
                          "{testimonials[currentIndex].content}"
                        </blockquote>

                        {/* Author Info */}
                        <div className="flex items-center justify-between flex-wrap gap-4">
                          <div className="flex items-center gap-4">
                            <Avatar className="w-12 h-12">
                              <AvatarImage src={testimonials[currentIndex].image || "/placeholder.svg"} />
                              <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                                {testimonials[currentIndex].name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-semibold text-white">{testimonials[currentIndex].name}</div>
                              <div className="text-slate-400">
                                {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                              {testimonials[currentIndex].industry}
                            </Badge>
                            <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                              {testimonials[currentIndex].results}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-slate-800/50 hover:bg-slate-700/50 text-white border-slate-600"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-slate-800/50 hover:bg-slate-700/50 text-white border-slate-600"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 scale-125"
                    : "bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
            <div className="text-slate-400">Proyectos Exitosos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">11+</div>
            <div className="text-slate-400">Industrias</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
            <div className="text-slate-400">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-slate-400">Soporte</div>
          </div>
        </div>
      </div>
    </section>
  )
}
