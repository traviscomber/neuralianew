"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const { language } = useLanguage()

  const testimonials = [
    {
      name: "Elena Rodrigues",
      role: language === "en" ? "Company CEO" : "CEO de Empresa",
      content:
        language === "en"
          ? "N3uralia is amazing! Team is great. Thank you, helped a lot, literally saved my business operations."
          : "¡N3uralia es increíble! El equipo es genial. Gracias, ayudó mucho, literalmente salvó las operaciones de mi negocio.",
      rating: 5,
      company: "TechCorp Solutions",
    },
    {
      name: "John Smith",
      role: language === "en" ? "Operations Manager" : "Gerente de Operaciones",
      content:
        language === "en"
          ? "My overall experience with N3URALIA is really great, because it is user friendly and easy to use. The marketing automation capabilities exceeded our expectations."
          : "Mi experiencia general con N3URALIA es realmente genial, porque es fácil de usar y muy intuitivo. Las capacidades de automatización de marketing superaron nuestras expectativas.",
      rating: 5,
      company: "Digital Innovations Ltd",
    },
    {
      name: "Sarah Chen",
      role: language === "en" ? "Company Manager" : "Gerente de Empresa",
      content:
        language === "en"
          ? "Totally agree with Elena and John. Now with N3uralia's agentic system, I became the most efficient manager in the company. The AI insights are incredible."
          : "Totalmente de acuerdo con Elena y John. Ahora con el sistema agéntico de N3uralia, me convertí en la gerente más eficiente de la empresa. Los insights de IA son increíbles.",
      rating: 5,
      company: "Global Enterprises",
    },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <section id="testimonials" className="bg-gray-50 py-20 sm:py-24 lg:py-32 px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <Badge className="bg-white text-gray-700 border border-gray-200 text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-full mb-6 lg:mb-8 font-medium">
            {language === "en" ? "Client Success Stories" : "Historias de Éxito"}
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-6 lg:mb-8 leading-[1.1] tracking-tight">
            {language === "en" ? "What Our" : "Lo Que Dicen"}
            <br />
            <span className="font-bold text-black">{language === "en" ? "Clients Say" : "Nuestros Clientes"}</span>
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed">
            {language === "en"
              ? "Real feedback from businesses that have transformed their operations with our AI solutions."
              : "Comentarios reales de empresas que han transformado sus operaciones con nuestras soluciones de IA."}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 lg:w-10 lg:h-10 text-gray-300 mb-6 lg:mb-8" />

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6 lg:mb-8">{renderStars(testimonial.rating)}</div>

                  {/* Content */}
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 lg:mb-10 font-light">
                    "{testimonial.content}"
                  </p>

                  {/* Author Info */}
                  <div className="border-t border-gray-100 pt-6 lg:pt-8">
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">{testimonial.name}</h4>
                    <p className="text-sm sm:text-base text-gray-600 mb-2">{testimonial.role}</p>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">{testimonial.company}</p>
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
          className="mt-16 lg:mt-24"
        >
          <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 text-center">
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 lg:mb-4">98%</div>
                <div className="text-sm sm:text-base lg:text-lg text-gray-600 font-medium">
                  {language === "en" ? "Client Satisfaction" : "Satisfacción del Cliente"}
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 lg:mb-4">50+</div>
                <div className="text-sm sm:text-base lg:text-lg text-gray-600 font-medium">
                  {language === "en" ? "Projects Delivered" : "Proyectos Entregados"}
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-2 lg:mb-4">24/7</div>
                <div className="text-sm sm:text-base lg:text-lg text-gray-600 font-medium">
                  {language === "en" ? "Support Available" : "Soporte Disponible"}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
