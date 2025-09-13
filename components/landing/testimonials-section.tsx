"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function TestimonialsSection() {
  const { language } = useLanguage()

  const testimonials = [
    {
      name: "Elena Rodrigues",
      role: language === "en" ? "Company CEO" : "CEO de Empresa",
      content:
        language === "en"
          ? "N3uralia is amazing! Team is great. Thank you, helped a lot, literally saved my ass."
          : "¡N3uralia es increíble! El equipo es genial. Gracias, ayudó mucho, literalmente me salvó.",
      image: "/placeholder.svg?height=200&width=200&text=Elena+R",
    },
    {
      name: "John Smith",
      role: language === "en" ? "Agent" : "Agente",
      content:
        language === "en"
          ? "My overall experience with N3URALIA is really great, because it is user friendly and easy to use marketing automation..."
          : "Mi experiencia general con N3URALIA es realmente genial, porque es fácil de usar y tiene automatización de marketing amigable...",
      hasReadMore: true,
      image: "/placeholder.svg?height=200&width=200&text=John+S",
    },
    {
      name: "Sarah Chen",
      role: language === "en" ? "Company Manager" : "Gerente de Empresa",
      content:
        language === "en"
          ? "Totally agree with Elena and the other guy. Now with N3uralia's agentic system, I became the best manager of the Company."
          : "Totalmente de acuerdo con Elena y el otro chico. Ahora con el sistema agéntico de N3uralia, me convertí en la mejor gerente de la Empresa.",
      image: "/placeholder.svg?height=200&width=200&text=Sarah+C",
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-light text-gray-700 mb-4">
            {language === "en" ? "Success Stories" : "Historias de Éxito"}
          </h2>
          <p className="text-xl text-blue-600 font-light">
            {language === "en"
              ? "Learn how we've helped businesses leverage AI"
              : "Aprende cómo hemos ayudado a las empresas a aprovechar la IA"}
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-8"
            >
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 bg-gray-300 rounded-lg overflow-hidden">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              </div>

              {/* Testimonial Card */}
              <div className="flex-1">
                <Card className="bg-gray-200 border-0 rounded-2xl">
                  <CardContent className="p-8">
                    {/* Name and Role */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-semibold text-black mb-1">{testimonial.name}</h3>
                      <p className="text-gray-600 font-light">{testimonial.role}</p>
                    </div>

                    {/* Content */}
                    <p className="text-black font-light leading-relaxed text-lg">
                      {testimonial.content}
                      {testimonial.hasReadMore && (
                        <>
                          <br />
                          <span className="text-gray-500">. . . {language === "en" ? "read more" : "leer más"}</span>
                        </>
                      )}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
