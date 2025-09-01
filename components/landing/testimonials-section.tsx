"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "María González",
    role: "Agricultora",
    company: "Hacienda Verde",
    content:
      "EcosueloLab Bot toma la información desde nuestra API y la envía directamente por WhatsApp. Es como tener un experto disponible las 24 horas para nuestros clientes.",
    rating: 5,
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Joaquín Covarrubias",
    role: "CEO",
    company: "Despega Tu Carrera",
    content:
      "Crearon un ecosistema de IA que realmente entiende a cada persona. Es como tener un mentor personal que conoce perfectamente el mercado laboral.",
    rating: 5,
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Ana Rodríguez",
    role: "Empresaria",
    company: "Consultora Independiente",
    content:
      "Ahora puedo preguntarle al sistema sobre ventas, inventario o análisis como si fuera una conversación normal. Ya no tengo que recordar comandos complicados.",
    rating: 5,
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Carlos Mendoza",
    role: "CTO",
    company: "TechStart",
    content:
      "La integración fue perfecta. N3uralia entendió exactamente lo que necesitábamos y lo entregó en tiempo récord.",
    rating: 5,
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Laura Vásquez",
    role: "Directora",
    company: "InnovaLab",
    content:
      "Nuestros usuarios están encantados. La IA responde de manera tan natural que parece una conversación con un humano experto.",
    rating: 5,
    avatar: "/placeholder-user.jpg",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [])

  const currentTestimonial = testimonials[currentIndex]

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
            Personas reales que han trabajado con N3uralia y han experimentado resultados exitosos
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
            className="max-w-2xl w-full"
          >
            <div className="relative">
              {/* Speech Bubble */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 relative">
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
                  <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-600 dark:to-blue-600 text-white text-lg">
                    {currentTestimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h4 className="font-bold text-gray-900 dark:text-gray-100 text-lg">{currentTestimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{currentTestimonial.role}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{currentTestimonial.company}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-purple-600 dark:bg-purple-400 scale-125"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
              }`}
              aria-label={`Ver testimonio ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-progress bar */}
        <div className="mt-6 max-w-xs mx-auto">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1">
            <motion.div
              key={currentIndex}
              className="bg-gradient-to-r from-purple-600 to-blue-600 h-1 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 4, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
