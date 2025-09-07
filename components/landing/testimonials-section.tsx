"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote, Code, CheckCircle } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "CTO",
    company: "AgroTech Solutions",
    image: "/placeholder-user.jpg",
    rating: 5,
    text: "N3uralia no solo nos entregó un chatbot, sino una plataforma completa. El sistema full stack que desarrollaron incluye dashboard web, APIs, base de datos y agentes IA. Transformó completamente nuestra operación.",
    project: "EcosueloLab - Plataforma Completa",
    techStack: ["Next.js", "PostgreSQL", "WhatsApp API", "OpenAI GPT-4"],
    deliveryDate: "ENTREGADO",
    status: "• Dashboard web completo\n• API REST funcional\n• Agente WhatsApp IA",
  },
  {
    name: "María González",
    role: "Directora de Innovación",
    company: "EduCareer Corp",
    image: "/placeholder-user.jpg",
    rating: 5,
    text: "Esperábamos solo un agente conversacional, pero recibimos un ecosistema tecnológico completo. Portal web, sistema de matching, analytics y coaching IA. La solución más completa que hemos visto.",
    project: "Despega Tu Carrera - Solución Full Stack Más Completa",
    techStack: ["React", "Node.js", "MongoDB", "Machine Learning"],
    deliveryDate: "ENTREGADO",
    status: "• Portal web con matching IA\n• Sistema de coaching completo\n• Analytics profesionales",
  },
  {
    name: "Roberto Silva",
    role: "CEO",
    company: "Enterprise Solutions",
    image: "/placeholder-user.jpg",
    rating: 5,
    text: "La solución de N3uralia va mucho más allá de IA conversacional. Desarrollaron toda la infraestructura: microservicios, dashboards, integraciones ERP y agentes especializados. 2 meses de desarrollo intensivo.",
    project: "Parrotfy ERP - Suite Empresarial",
    techStack: ["Python", "Docker", "Kubernetes", "Business Intelligence"],
    deliveryDate: "ENTREGADO",
    status: "• Dashboards BI interactivos\n• Integraciones ERP múltiples\n• Agente conversacional empresarial",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-500 dark:to-blue-500 text-white border-0 text-lg px-6 py-2 transition-colors duration-300">
            <CheckCircle className="w-4 h-4 mr-2" />
            Proyectos Reales Entregados y en Producción
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent transition-colors duration-300">
            Clientes reales con{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
              sistemas funcionando
            </span>{" "}
            en producción
          </h2>
          <p className="text-xl text-muted-foreground dark:text-slate-300 max-w-4xl mx-auto transition-colors duration-300">
            <strong>Estos no son ejemplos teóricos.</strong> Son proyectos reales desarrollados, entregados y
            funcionando en producción para empresas que confiaron en N3uralia para crear sus ecosistemas tecnológicos
            completos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-slate-800 border-2 border-blue-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6">
                  {/* Status Display */}
                  <div className="mb-4">
                    <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-green-200 dark:border-green-700 transition-colors duration-300 mb-2">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {testimonial.deliveryDate}
                    </Badge>
                    <div className="text-xs text-slate-600 dark:text-slate-400 whitespace-pre-line font-medium">
                      {testimonial.status}
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="w-8 h-8 text-blue-200 dark:text-blue-800 absolute -top-2 -left-2 transition-colors duration-300" />
                    <p className="text-gray-700 dark:text-gray-300 italic pl-6 transition-colors duration-300">
                      {testimonial.text}
                    </p>
                  </div>

                  {/* Project Info */}
                  <div className="mb-4">
                    <Badge
                      variant="outline"
                      className="mb-2 text-xs border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 transition-colors duration-300"
                    >
                      <Code className="w-3 h-3 mr-1" />
                      {testimonial.project}
                    </Badge>
                    <div className="flex flex-wrap gap-1">
                      {testimonial.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-slate-700 transition-colors duration-300">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 transition-colors duration-300">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-blue-600 dark:text-blue-400 transition-colors duration-300">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Real Projects Emphasis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-500 dark:to-blue-500 text-white rounded-lg p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <CheckCircle className="w-6 h-6" />
              <span className="text-xl font-bold">Proyectos Reales Funcionando en Producción</span>
            </div>
            <p className="text-sm opacity-90 mb-2">
              <strong>✅ Sistemas entregados y funcionando</strong> • <strong>✅ Clientes reales satisfechos</strong> •{" "}
              <strong>✅ Resultados medibles</strong>
            </p>
            <p className="text-xs opacity-80">
              Frontend + Backend + Base de Datos + APIs + Integraciones + Agentes IA especializados
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
