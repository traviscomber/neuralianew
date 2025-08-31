"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Sparkles } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    role: "Agricultora",
    company: "Hacienda Verde",
    content:
      "Necesitábamos una forma más rápida de obtener datos de nitrógeno e hidro de nuestros cultivos. EcosueloLab Bot toma la información desde nuestra API y la envía directamente por WhatsApp. Ahora podemos responder a nuestros agricultores inmediatamente cuando preguntan sobre el estado de su suelo. Es como tener un experto disponible las 24 horas para nuestros clientes. El resultado fue rápido y exitoso.",
    rating: 5,
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Joaquín Covarrubias",
    role: "CEO",
    company: "Despega Tu Carrera",
    content:
      "Buscábamos algo innovador para el crecimiento profesional y N3uralia nos sorprendió gratamente. Crearon un ecosistema de IA que no solo da consejos de carrera, sino que realmente entiende a cada persona. Es como tener un mentor personal que conoce perfectamente el mercado laboral. Nuestros usuarios nos dicen que sienten que alguien finalmente los comprende y los guía hacia donde realmente quieren llegar. El resultado fue rápido y exitoso.",
    rating: 5,
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Ana Rodríguez",
    role: "Empresaria",
    company: "Consultora Independiente",
    content:
      "Necesitábamos que alguien consultara los endpoints de nuestro ERP y nos entregara la información que pedíamos. N3uralia creó un agente que hace exactamente eso. Ahora cuando necesito datos de ventas, inventario o clientes, simplemente pregunto y el agente consulta la API y me entrega lo que solicité. Ya no tengo que navegar por el sistema o esperar reportes. El resultado fue rápido y exitoso.",
    rating: 5,
    avatar: "/placeholder-user.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge
            variant="secondary"
            className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Lo que dicen nuestros usuarios
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Historias{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">reales</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Personas reales que han trabajado con N3uralia y han experimentado resultados rápidos y exitosos en sus
            proyectos de IA.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-gray-100 hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>

                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-gray-500">{testimonial.company}</p>
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
