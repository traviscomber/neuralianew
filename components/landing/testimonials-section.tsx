"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function TestimonialsSection() {
  const { language } = useLanguage()

  const testimonials = [
    {
      name: "Carlos Rodriguez",
      role: language === "en" ? "CTO, TechCorp" : "CTO, TechCorp",
      content:
        language === "en"
          ? "N3uralia transformed our business operations with their AI solutions. The implementation was seamless and the results exceeded our expectations."
          : "N3uralia transformó nuestras operaciones comerciales con sus soluciones de IA. La implementación fue perfecta y los resultados superaron nuestras expectativas.",
      rating: 5,
      image: "/placeholder-user.jpg",
    },
    {
      name: "Maria Gonzalez",
      role: language === "en" ? "Operations Director, InnovateCo" : "Directora de Operaciones, InnovateCo",
      content:
        language === "en"
          ? "The AI agents developed by N3uralia have automated 80% of our customer service inquiries. Outstanding work and professional team."
          : "Los agentes de IA desarrollados por N3uralia han automatizado el 80% de nuestras consultas de servicio al cliente. Trabajo excepcional y equipo profesional.",
      rating: 5,
      image: "/placeholder-user.jpg",
    },
    {
      name: "David Kim",
      role: language === "en" ? "Founder, StartupX" : "Fundador, StartupX",
      content:
        language === "en"
          ? "From concept to deployment in just 2 weeks. N3uralia's expertise in AI and full-stack development is unmatched."
          : "Del concepto al despliegue en solo 2 semanas. La experiencia de N3uralia en IA y desarrollo full-stack es inigualable.",
      rating: 5,
      image: "/placeholder-user.jpg",
    },
  ]

  const stats = [
    {
      number: "100+",
      label: language === "en" ? "Projects Completed" : "Proyectos Completados",
    },
    {
      number: "98%",
      label: language === "en" ? "Client Satisfaction" : "Satisfacción del Cliente",
    },
    {
      number: "24/7",
      label: language === "en" ? "Support Available" : "Soporte Disponible",
    },
    {
      number: "15+",
      label: language === "en" ? "Countries Served" : "Países Atendidos",
    },
  ]

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 xl:py-32 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <Badge className="bg-gray-100 text-gray-700 border-0 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full mb-4 sm:mb-6 lg:mb-8 font-medium">
            {language === "en" ? "Testimonials" : "Testimonios"}
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-4 sm:mb-6 lg:mb-8 leading-[1.1] tracking-tight">
            {language === "en" ? "What Our" : "Lo Que Dicen"}
            <br />
            <span className="font-bold text-black">{language === "en" ? "Clients Say" : "Nuestros Clientes"}</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            {language === "en"
              ? "Trusted by businesses worldwide for AI solutions that deliver real results."
              : "Confiado por empresas de todo el mundo por soluciones de IA que entregan resultados reales."}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-50 border border-gray-200 rounded-2xl h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 mb-4 sm:mb-6" />

                  {/* Content */}
                  <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                    "{testimonial.content}"
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4 sm:mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-gray-800 text-gray-800" />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-sm sm:text-base font-semibold text-gray-600">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl p-8 sm:p-12 lg:p-16"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-2 sm:mb-3">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base lg:text-lg text-gray-600 font-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
