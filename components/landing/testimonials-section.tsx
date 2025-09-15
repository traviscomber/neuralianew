"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function TestimonialsSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Client Success Stories",
      title: "What Our Clients Say About N3uralia",
      subtitle: "Real results from real businesses that have transformed their operations with our AI solutions.",
      testimonials: [
        {
          name: "Sarah Johnson",
          position: "CEO, TechStart Inc.",
          company: "Technology Startup",
          rating: 5,
          text: "N3uralia's AI agents transformed our customer service completely. We went from 24-hour response times to instant replies, and our customer satisfaction scores increased by 60%. The ROI was evident within the first month.",
        },
        {
          name: "Carlos Rodriguez",
          position: "Operations Director",
          company: "Global Retail Chain",
          rating: 5,
          text: "The automation capabilities are incredible. What used to take our team 8 hours daily now happens automatically in minutes. N3uralia didn't just save us time - they revolutionized how we work.",
        },
        {
          name: "Dr. Emily Chen",
          position: "Practice Manager",
          company: "Healthcare Clinic",
          rating: 5,
          text: "Patient scheduling was our biggest bottleneck. N3uralia's AI handles appointments, reminders, and follow-ups seamlessly. Our staff can now focus on patient care instead of administrative tasks.",
        },
        {
          name: "Michael Thompson",
          position: "CTO, FinanceFlow",
          company: "Financial Services",
          rating: 5,
          text: "Security was our top concern, and N3uralia exceeded all expectations. Their enterprise-grade security combined with powerful AI capabilities gave us the confidence to fully automate our client interactions.",
        },
        {
          name: "Ana Martinez",
          position: "Marketing Director",
          company: "E-commerce Platform",
          rating: 5,
          text: "The multi-language support opened new markets for us. Our AI agents communicate fluently in Spanish, English, and Portuguese, helping us expand across Latin America with consistent quality.",
        },
        {
          name: "James Wilson",
          position: "Founder & CEO",
          company: "SaaS Startup",
          rating: 5,
          text: "From concept to deployment in just 2 weeks. N3uralia's team understood our vision and delivered beyond expectations. Our users love the intelligent chat support - it feels completely natural.",
        },
      ],
    },
    es: {
      badge: "Historias de Éxito de Clientes",
      title: "Lo Que Nuestros Clientes Dicen Sobre N3uralia",
      subtitle:
        "Resultados reales de negocios reales que han transformado sus operaciones con nuestras soluciones de IA.",
      testimonials: [
        {
          name: "Sarah Johnson",
          position: "CEO, TechStart Inc.",
          company: "Startup Tecnológica",
          rating: 5,
          text: "Los agentes de IA de N3uralia transformaron completamente nuestro servicio al cliente. Pasamos de tiempos de respuesta de 24 horas a respuestas instantáneas, y nuestros puntajes de satisfacción del cliente aumentaron en 60%. El ROI fue evidente en el primer mes.",
        },
        {
          name: "Carlos Rodriguez",
          position: "Director de Operaciones",
          company: "Cadena de Retail Global",
          rating: 5,
          text: "Las capacidades de automatización son increíbles. Lo que solía tomar a nuestro equipo 8 horas diarias ahora sucede automáticamente en minutos. N3uralia no solo nos ahorró tiempo - revolucionaron cómo trabajamos.",
        },
        {
          name: "Dr. Emily Chen",
          position: "Gerente de Práctica",
          company: "Clínica de Salud",
          rating: 5,
          text: "La programación de pacientes era nuestro mayor cuello de botella. La IA de N3uralia maneja citas, recordatorios y seguimientos sin problemas. Nuestro personal ahora puede enfocarse en la atención al paciente en lugar de tareas administrativas.",
        },
        {
          name: "Michael Thompson",
          position: "CTO, FinanceFlow",
          company: "Servicios Financieros",
          rating: 5,
          text: "La seguridad era nuestra principal preocupación, y N3uralia superó todas las expectativas. Su seguridad de nivel empresarial combinada con poderosas capacidades de IA nos dio la confianza para automatizar completamente nuestras interacciones con clientes.",
        },
        {
          name: "Ana Martinez",
          position: "Directora de Marketing",
          company: "Plataforma E-commerce",
          rating: 5,
          text: "El soporte multiidioma nos abrió nuevos mercados. Nuestros agentes de IA se comunican fluidamente en español, inglés y portugués, ayudándonos a expandirnos por Latinoamérica con calidad consistente.",
        },
        {
          name: "James Wilson",
          position: "Fundador y CEO",
          company: "Startup SaaS",
          rating: 5,
          text: "Del concepto al despliegue en solo 2 semanas. El equipo de N3uralia entendió nuestra visión y entregó más allá de las expectativas. Nuestros usuarios aman el soporte de chat inteligente - se siente completamente natural.",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 text-sm font-medium bg-black/5 text-black border-black/10"
          >
            {t.badge}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6">{t.title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-gray-200 hover:border-black transition-all duration-300 hover:shadow-lg bg-white"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-black mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

                <div className="border-t border-gray-200 pt-4">
                  <div className="font-bold text-black">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <Badge variant="outline" className="mt-2 text-xs border-gray-300 text-gray-600">
                    {testimonial.company}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
