"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Dr. Carlos Mendoza",
    role: "Director de Investigación",
    company: "EcosueloLab",
    content:
      "N3uralia transformó completamente nuestra forma de entregar datos de suelo a los agricultores. Ahora nuestros análisis de nitrógeno, fósforo y pH llegan instantáneamente por WhatsApp. Los agricultores pueden consultar el estado de sus cultivos las 24 horas, y nosotros podemos brindar recomendaciones precisas en tiempo real. La integración con nuestra API fue perfecta.",
    rating: 5,
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "María Elena Vásquez",
    role: "Gerente de Sistemas",
    company: "Parrotfy",
    content:
      "El asistente conversacional de IA para ERP que desarrolló N3uralia revolucionó nuestra operación. Ahora podemos consultar inventarios, generar reportes de ventas y analizar datos financieros simplemente hablando en lenguaje natural. Es como tener un analista de datos disponible 24/7 que entiende perfectamente nuestras consultas de negocio.",
    rating: 5,
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Joaquín Covarrubias",
    role: "Fundador & CEO",
    company: "Despega Tu Carrera",
    content:
      "N3uralia creó un ecosistema de IA conversacional que revolucionó nuestra plataforma de coaching profesional. Nuestros usuarios ahora reciben orientación personalizada sobre desarrollo de carrera, preparación para entrevistas y estrategias de networking. El agente entiende el contexto profesional de cada persona y ofrece consejos específicos para su industria. Es como tener un mentor experto disponible las 24 horas.",
    rating: 5,
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Ing. Roberto Silva",
    role: "Gerente de Operaciones",
    company: "EcosueloLab",
    content:
      "La solución de N3uralia nos permitió automatizar completamente nuestro servicio de consultas. Antes tardábamos horas en responder a los agricultores, ahora el bot entrega resultados de análisis de suelo al instante. La precisión de las recomendaciones agronómicas es impresionante, y la integración con WhatsApp Business fue seamless.",
    rating: 5,
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Carlos Herrera",
    role: "Director de Operaciones",
    company: "Parrotfy",
    content:
      "Implementar el asistente de IA para nuestro ERP fue la mejor decisión que tomamos. Ahora cualquier empleado puede obtener reportes complejos, consultar estados de pedidos y analizar métricas de rendimiento con solo preguntar. La productividad del equipo aumentó un 40% y los errores en consultas de datos se redujeron a cero.",
    rating: 5,
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Andrea Morales",
    role: "Directora de Contenido",
    company: "Despega Tu Carrera",
    content:
      "El coach virtual de IA que desarrolló N3uralia superó todas nuestras expectativas. Los usuarios practican entrevistas laborales, reciben feedback sobre sus respuestas y obtienen planes de desarrollo profesional personalizados. La IA entiende diferentes industrias y niveles de experiencia. Nuestro engagement aumentó 280% y los usuarios reportan mayor confianza en sus procesos de búsqueda laboral.",
    rating: 5,
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Dr. Luis Ramírez",
    role: "Científico de Datos",
    company: "EcosueloLab",
    content:
      "N3uralia logró algo que creíamos imposible: hacer que datos complejos de análisis de suelo sean comprensibles para cualquier agricultor. El bot explica resultados de laboratorio en lenguaje simple, sugiere fertilizantes específicos y calcula dosis exactas. Es como tener un agrónomo experto disponible 24/7.",
    rating: 5,
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Ana Patricia Morales",
    role: "CFO",
    company: "Parrotfy",
    content:
      "El asistente conversacional transformó completamente cómo accedemos a la información financiera. Puedo preguntar sobre flujo de caja, análisis de rentabilidad o proyecciones de ventas en lenguaje natural y recibo respuestas precisas al instante. Ya no necesitamos generar reportes manualmente ni navegar por interfaces complejas del ERP.",
    rating: 5,
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Ricardo Vega",
    role: "Head of Product",
    company: "Despega Tu Carrera",
    content:
      "La plataforma de coaching con IA que construyó N3uralia transformó completamente la experiencia de nuestros usuarios. El sistema analiza perfiles profesionales, identifica gaps de habilidades y sugiere rutas de desarrollo específicas. Los usuarios pueden simular entrevistas, practicar elevator pitches y recibir feedback instantáneo. La retención de usuarios aumentó 150% desde la implementación.",
    rating: 5,
    avatar: "/placeholder-user.jpg",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 7000) // Change every 7 seconds

    return () => clearInterval(interval)
  }, [])

  const currentTestimonial = testimonials[currentIndex]

  const getCompanyColor = (company: string) => {
    switch (company) {
      case "EcosueloLab":
        return {
          badge: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
          avatar: "bg-gradient-to-r from-green-500 to-emerald-500",
          progress: "bg-gradient-to-r from-green-500 to-emerald-500",
          indicator: "bg-green-600 dark:bg-green-400",
        }
      case "Parrotfy":
        return {
          badge: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
          avatar: "bg-gradient-to-r from-orange-500 to-red-500",
          progress: "bg-gradient-to-r from-orange-500 to-red-500",
          indicator: "bg-orange-600 dark:bg-orange-400",
        }
      case "Despega Tu Carrera":
        return {
          badge: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
          avatar: "bg-gradient-to-r from-blue-500 to-indigo-500",
          progress: "bg-gradient-to-r from-blue-500 to-indigo-500",
          indicator: "bg-blue-600 dark:bg-blue-400",
        }
      default:
        return {
          badge: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
          avatar: "bg-gradient-to-r from-gray-500 to-gray-600",
          progress: "bg-gradient-to-r from-gray-500 to-gray-600",
          indicator: "bg-gray-600 dark:bg-gray-400",
        }
    }
  }

  const colors = getCompanyColor(currentTestimonial.company)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            La Opinión de{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              Nuestros Clientes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Testimonios reales sobre proyectos de IA implementados
          </p>
        </motion.div>

        {/* Single Testimonial Display */}
        <div className="flex justify-center">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl w-full"
          >
            <div className="relative">
              {/* Speech Bubble */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 relative">
                {/* Company Badge */}
                <div className="flex justify-center mb-4">
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${colors.badge}`}>
                    {currentTestimonial.company}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400 dark:fill-yellow-300 dark:text-yellow-300"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed text-center mb-6 italic">
                  "{currentTestimonial.content}"
                </p>

                {/* Bubble tail */}
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white dark:bg-gray-800 border-r border-b border-gray-100 dark:border-gray-700 rotate-45"></div>
              </div>

              {/* User Info */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <Avatar className="w-16 h-16 border-3 border-white dark:border-gray-700 shadow-lg">
                  <AvatarImage src={currentTestimonial.avatar || "/placeholder.svg"} alt={currentTestimonial.name} />
                  <AvatarFallback className={`text-white text-lg font-semibold ${colors.avatar}`}>
                    {currentTestimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg">{currentTestimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{currentTestimonial.role}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{currentTestimonial.company}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((testimonial, index) => {
            const indicatorColors = getCompanyColor(testimonial.company)
            return (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? `${indicatorColors.indicator} scale-125`
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                aria-label={`Ver testimonio de ${testimonial.name} - ${testimonial.company}`}
              />
            )
          })}
        </div>

        {/* Auto-progress bar */}
        <div className="mt-6 max-w-xs mx-auto">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
            <motion.div
              key={currentIndex}
              className={`h-1 rounded-full ${colors.progress}`}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 7, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
