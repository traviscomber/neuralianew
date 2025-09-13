"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { Star } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  const { language } = useLanguage()

  const testimonials = [
    {
      name: "Carlos Rodriguez",
      position: language === "en" ? "CEO, TechCorp" : "CEO, TechCorp",
      content:
        language === "en"
          ? "Neuralia's AI agents have transformed our customer service operations. We've seen a 70% reduction in response times and significantly improved customer satisfaction."
          : "Los agentes de IA de Neuralia han transformado nuestras operaciones de servicio al cliente. Hemos visto una reducción del 70% en los tiempos de respuesta y una mejora significativa en la satisfacción del cliente.",
      avatar: "/placeholder-user.jpg",
      rating: 5,
    },
    {
      name: "Maria Gonzalez",
      position: language === "en" ? "Operations Director, InnovateLab" : "Directora de Operaciones, InnovateLab",
      content:
        language === "en"
          ? "The automation solutions provided by Neuralia have streamlined our entire workflow. Our team can now focus on strategic tasks while AI handles routine operations."
          : "Las soluciones de automatización proporcionadas por Neuralia han optimizado todo nuestro flujo de trabajo. Nuestro equipo ahora puede enfocarse en tareas estratégicas mientras la IA maneja las operaciones rutinarias.",
      avatar: "/placeholder-user.jpg",
      rating: 5,
    },
    {
      name: "Diego Martinez",
      position: language === "en" ? "CTO, DataFlow" : "CTO, DataFlow",
      content:
        language === "en"
          ? "Implementing Neuralia's AI agents was seamless. The integration with our existing systems was flawless, and the results exceeded our expectations."
          : "La implementación de los agentes de IA de Neuralia fue perfecta. La integración con nuestros sistemas existentes fue impecable, y los resultados superaron nuestras expectativas.",
      avatar: "/placeholder-user.jpg",
      rating: 5,
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-light text-gray-900 mb-4">
            {language === "en" ? "What Our Clients Say" : "Lo Que Dicen Nuestros Clientes"}
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            {language === "en"
              ? "Real experiences from businesses that have transformed with our AI solutions"
              : "Experiencias reales de empresas que se han transformado con nuestras soluciones de IA"}
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
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  {/* Rating */}
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-black text-black" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 font-light leading-relaxed mb-6 italic">"{testimonial.content}"</p>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600 font-light">{testimonial.position}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
