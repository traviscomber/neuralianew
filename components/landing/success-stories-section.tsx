"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function SuccessStoriesSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Success Stories",
      subtitle: "Learn how we've helped businesses leverage AI",
      testimonials: [
        {
          name: "Elena Rodrigues",
          title: "Company CEO",
          image: "/placeholder.svg?height=200&width=200",
          quote: "N3uralia is amazing! Team is great. Thank you, helped a lot, literally saved my ass.",
          fullQuote: "N3uralia is amazing! Team is great. Thank you, helped a lot, literally saved my ass.",
        },
        {
          name: "John Smith",
          title: "Agent",
          image: "/placeholder.svg?height=200&width=200",
          quote:
            "My overall experience with N3URALIA is really great, because it is user friendly and easy to use marketing automation...",
          fullQuote:
            "My overall experience with N3URALIA is really great, because it is user friendly and easy to use marketing automation. The AI agents have transformed how we handle customer interactions and lead generation. The implementation was seamless and the results exceeded our expectations.",
          hasReadMore: true,
        },
        {
          name: "Sarah Chen",
          title: "Company Manager",
          image: "/placeholder.svg?height=200&width=200",
          quote:
            "Totally agree with Elena and the other guy. Now with N3uralia's agentic system, I became the best manager of the Company.",
          fullQuote:
            "Totally agree with Elena and the other guy. Now with N3uralia's agentic system, I became the best manager of the Company.",
        },
      ],
    },
    es: {
      title: "Historias de Éxito",
      subtitle: "Aprende cómo hemos ayudado a las empresas a aprovechar la IA",
      testimonials: [
        {
          name: "Elena Rodrigues",
          title: "CEO de Empresa",
          image: "/placeholder.svg?height=200&width=200",
          quote: "¡N3uralia es increíble! El equipo es genial. Gracias, ayudaron mucho, literalmente me salvaron.",
          fullQuote: "¡N3uralia es increíble! El equipo es genial. Gracias, ayudaron mucho, literalmente me salvaron.",
        },
        {
          name: "John Smith",
          title: "Agente",
          image: "/placeholder.svg?height=200&width=200",
          quote:
            "Mi experiencia general con N3URALIA es realmente genial, porque es fácil de usar y la automatización de marketing es sencilla...",
          fullQuote:
            "Mi experiencia general con N3URALIA es realmente genial, porque es fácil de usar y la automatización de marketing es sencilla. Los agentes de IA han transformado cómo manejamos las interacciones con clientes y la generación de leads. La implementación fue perfecta y los resultados superaron nuestras expectativas.",
          hasReadMore: true,
        },
        {
          name: "Sarah Chen",
          title: "Gerente de Empresa",
          image: "/placeholder.svg?height=200&width=200",
          quote:
            "Totalmente de acuerdo con Elena y el otro chico. Ahora con el sistema agéntico de N3uralia, me convertí en la mejor gerente de la Empresa.",
          fullQuote:
            "Totalmente de acuerdo con Elena y el otro chico. Ahora con el sistema agéntico de N3uralia, me convertí en la mejor gerente de la Empresa.",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6">{t.title}</h2>
          <p className="text-xl md:text-2xl text-blue-600 max-w-4xl mx-auto leading-relaxed">{t.subtitle}</p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {t.testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={`${testimonial.name} - ${testimonial.title}`}
                  width={200}
                  height={200}
                  className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-lg shadow-lg"
                />
              </div>

              <Card className="flex-1 bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{testimonial.name}</h3>
                    <p className="text-lg text-gray-600">{testimonial.title}</p>
                  </div>

                  <div className="text-gray-700 leading-relaxed">
                    <p className="text-lg">{testimonial.quote}</p>
                    {testimonial.hasReadMore && (
                      <button className="text-gray-500 hover:text-gray-700 transition-colors mt-2 text-sm">
                        ... read more
                      </button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
