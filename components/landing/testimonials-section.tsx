"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function TestimonialsSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      badge: "Client Success Stories",
      title: "What Our Clients Say About N3uralia",
      subtitle: "Real feedback from businesses that have transformed their operations with our AI solutions.",
      testimonials: [
        {
          name: "Carlos Rodriguez",
          position: "CEO, TechStart Solutions",
          company: "Technology Startup",
          content:
            "N3uralia's AI agents transformed our customer support. We reduced response times by 80% and increased customer satisfaction significantly. The implementation was seamless and the results were immediate.",
          rating: 5,
        },
        {
          name: "Maria Gonzalez",
          position: "Operations Director",
          company: "E-commerce Platform",
          content:
            "The automation solutions provided by N3uralia have streamlined our entire order processing workflow. We've seen a 60% reduction in manual tasks and our team can now focus on strategic initiatives.",
          rating: 5,
        },
        {
          name: "Roberto Silva",
          position: "Founder",
          company: "Digital Marketing Agency",
          content:
            "Working with N3uralia has been a game-changer. Their AI ecosystem helped us scale our services to multiple clients efficiently. The ROI was evident within the first month of implementation.",
          rating: 5,
        },
      ],
    },
    es: {
      badge: "Historias de Éxito de Clientes",
      title: "Lo Que Nuestros Clientes Dicen Sobre N3uralia",
      subtitle: "Comentarios reales de empresas que han transformado sus operaciones con nuestras soluciones de IA.",
      testimonials: [
        {
          name: "Carlos Rodriguez",
          position: "CEO, TechStart Solutions",
          company: "Startup Tecnológica",
          content:
            "Los agentes de IA de N3uralia transformaron nuestro soporte al cliente. Redujimos los tiempos de respuesta en un 80% y aumentamos significativamente la satisfacción del cliente. La implementación fue perfecta y los resultados fueron inmediatos.",
          rating: 5,
        },
        {
          name: "Maria Gonzalez",
          position: "Directora de Operaciones",
          company: "Plataforma E-commerce",
          content:
            "Las soluciones de automatización proporcionadas por N3uralia han optimizado todo nuestro flujo de procesamiento de pedidos. Hemos visto una reducción del 60% en tareas manuales y nuestro equipo ahora puede enfocarse en iniciativas estratégicas.",
          rating: 5,
        },
        {
          name: "Roberto Silva",
          position: "Fundador",
          company: "Agencia de Marketing Digital",
          content:
            "Trabajar con N3uralia ha sido un cambio radical. Su ecosistema de IA nos ayudó a escalar nuestros servicios a múltiples clientes de manera eficiente. El ROI fue evidente dentro del primer mes de implementación.",
          rating: 5,
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 text-sm font-medium bg-purple-50 text-purple-700 border-purple-200"
          >
            {t.badge}
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">{t.title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-sm text-blue-600">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
