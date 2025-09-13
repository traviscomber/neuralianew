"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function TestimonialsSection() {
  const { language } = useLanguage()

  const testimonials = [
    {
      name: "María González",
      role: language === "en" ? "CTO, TechCorp" : "CTO, TechCorp",
      content:
        language === "en"
          ? "N3uralia transformed our customer service operations completely. Response times improved by 80% and customer satisfaction reached unprecedented levels."
          : "N3uralia transformó completamente nuestras operaciones de atención al cliente. Los tiempos de respuesta mejoraron un 80% y la satisfacción del cliente alcanzó niveles sin precedentes.",
      rating: 5,
    },
    {
      name: "Carlos Mendoza",
      role: language === "en" ? "CEO, InnovateLab" : "CEO, InnovateLab",
      content:
        language === "en"
          ? "The AI agents created with N3uralia handle complex queries with impressive accuracy. Our team can now focus on strategic initiatives while AI handles routine tasks."
          : "Los agentes de IA creados con N3uralia manejan consultas complejas con una precisión impresionante. Nuestro equipo ahora puede enfocarse en iniciativas estratégicas mientras la IA maneja tareas rutinarias.",
      rating: 5,
    },
    {
      name: "Ana Rodríguez",
      role: language === "en" ? "Operations Director, GlobalTech" : "Directora de Operaciones, GlobalTech",
      content:
        language === "en"
          ? "Implementation was seamless and the results immediate. N3uralia's platform integrated perfectly with our existing systems and workflow."
          : "La implementación fue perfecta y los resultados inmediatos. La plataforma de N3uralia se integró perfectamente con nuestros sistemas y flujo de trabajo existentes.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-black text-white border-0 text-lg px-8 py-3 rounded-full mb-6">
            {language === "en" ? "Testimonials" : "Testimonios"}
          </Badge>
          <h2 className="text-5xl font-light text-black mb-6">
            {language === "en" ? "What Our Clients Say" : "Lo Que Dicen Nuestros Clientes"}
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            {language === "en"
              ? "Real experiences from companies that have transformed their operations with N3uralia"
              : "Experiencias reales de empresas que han transformado sus operaciones con N3uralia"}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-gray-200 hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-gray-300" />
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 font-light leading-relaxed mb-6 text-lg">"{testimonial.content}"</p>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-black text-black" />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="border-t border-gray-100 pt-6">
                    <div className="font-semibold text-black text-lg">{testimonial.name}</div>
                    <div className="text-gray-500 font-light">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-black rounded-2xl p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-light text-white mb-2">500+</div>
                <div className="text-gray-300 font-light">
                  {language === "en" ? "Happy Clients" : "Clientes Satisfechos"}
                </div>
              </div>
              <div>
                <div className="text-4xl font-light text-white mb-2">99.9%</div>
                <div className="text-gray-300 font-light">{language === "en" ? "Uptime" : "Tiempo Activo"}</div>
              </div>
              <div>
                <div className="text-4xl font-light text-white mb-2">24/7</div>
                <div className="text-gray-300 font-light">{language === "en" ? "Support" : "Soporte"}</div>
              </div>
              <div>
                <div className="text-4xl font-light text-white mb-2">50+</div>
                <div className="text-gray-300 font-light">{language === "en" ? "Countries" : "Países"}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
