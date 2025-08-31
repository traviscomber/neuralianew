"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Quote, Users, Building, GraduationCap, Globe } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    role: "Directora de Recursos Humanos",
    company: "TechCorp Chile",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    content:
      "EcosueloLab cambió completamente cómo seleccionamos personal. La IA no solo evalúa habilidades técnicas, sino que entiende la personalidad y si encaja con nuestro equipo. Redujimos la rotación en un 60%.",
    category: "Recursos Humanos",
    icon: Building,
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Carlos Mendoza",
    role: "Estudiante de Ingeniería",
    company: "Universidad de Chile",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    content:
      "Gracias a Despega Tu Carrera conseguí mi primera práctica en solo 3 semanas. El coaching me ayudó a identificar mis fortalezas y a presentarme con confianza.",
    category: "Estudiante",
    icon: GraduationCap,
    color: "from-blue-500 to-cyan-600",
  },
  {
    name: "Ana Rodríguez",
    role: "Gerente de Marketing",
    company: "StartupLab",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    content:
      "ParrotfyIA me ayudó a dominar el inglés de negocios en 6 meses. Las conversaciones se sienten tan naturales que olvidas que estás hablando con IA. Ahora lidero reuniones internacionales con confianza.",
    category: "Profesional",
    icon: Globe,
    color: "from-purple-500 to-violet-600",
  },
  {
    name: "Roberto Silva",
    role: "CEO",
    company: "InnovateTech",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    content:
      "Implementamos los portales neuronales de Neuralia en nuestro servicio al cliente. La satisfacción subió al 96% y redujimos los tiempos de respuesta en un 80%. Es impresionante cómo entiende a cada cliente.",
    category: "Liderazgo",
    icon: Users,
    color: "from-orange-500 to-red-600",
  },
  {
    name: "Sofía Herrera",
    role: "Psicóloga Organizacional",
    company: "Consultoría Humana",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    content:
      "Lo que más me impresiona es cómo la IA entiende las emociones y responde con empatía real. Mis clientes se sienten realmente escuchados y comprendidos. Es casi terapéutico.",
    category: "Bienestar",
    icon: Building,
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "Diego Morales",
    role: "Desarrollador Senior",
    company: "DevStudio",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    content:
      "Como desarrollador, aprecio la sofisticación técnica detrás del vibe coding. Pero como usuario, simplemente funciona de manera mágica. La IA se adapta perfectamente a mi estilo de comunicación.",
    category: "Tecnología",
    icon: Building,
    color: "from-indigo-500 to-purple-600",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge
            variant="secondary"
            className="mb-4 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200"
          >
            <Users className="w-4 h-4 mr-2" />
            Testimonios Reales
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Lo que dicen nuestros{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">usuarios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Historias reales de personas y empresas que han probado nuestra IA que conecta de verdad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200 group relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${testimonial.color}`} />

                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div
                        className={`absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center`}
                      >
                        <testimonial.icon className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {testimonial.role} • {testimonial.company}
                      </CardDescription>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.category}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-purple-200" />
                    <p className="text-gray-700 leading-relaxed pl-6 italic">"{testimonial.content}"</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-green-50 rounded-2xl p-8 border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Listo para ser el próximo caso de éxito?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Únete a miles de profesionales y empresas que ya están transformando su futuro con nuestra IA que conecta
              de verdad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all">
                Comenzar Mi Transformación
              </button>
              <button className="border border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-3 rounded-lg font-medium transition-all">
                Hablar con un Experto
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
