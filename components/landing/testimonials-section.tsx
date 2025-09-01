"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    role: "Directora de Operaciones",
    company: "EcoSuelo Labs",
    content:
      "N3uralia transformó completamente nuestra atención al cliente. Nuestro chatbot ahora maneja el 80% de las consultas automáticamente, permitiendo que nuestro equipo se enfoque en casos más complejos.",
    rating: 5,
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Carlos Mendoza",
    role: "CEO",
    company: "TechStart Chile",
    content:
      "La implementación fue increíblemente rápida y el soporte técnico excepcional. En solo 2 semanas teníamos nuestro asistente virtual funcionando perfectamente.",
    rating: 5,
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Ana Rodríguez",
    role: "Gerente de Marketing",
    company: "Innovación Digital",
    content:
      "Los resultados superaron nuestras expectativas. Hemos visto un aumento del 40% en la satisfacción del cliente desde que implementamos la solución de N3uralia.",
    rating: 5,
    avatar: "/placeholder-user.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Nuestros{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Clientes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre cómo empresas líderes han transformado su atención al cliente con nuestras soluciones de IA
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800 border-gray-700 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>

                  <div className="flex items-center">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-gray-700 text-white">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      <p className="text-green-400 text-sm font-medium">{testimonial.company}</p>
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

export default TestimonialsSection
