import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "María González",
      role: "Directora de Marketing",
      company: "TechStart Chile",
      image: "/placeholder-user.jpg",
      rating: 5,
      text: "Neuralia transformó completamente nuestra atención al cliente. Nuestro agente IA maneja el 80% de las consultas automáticamente, y la satisfacción del cliente aumentó un 35%.",
      results: "35% ↑ Satisfacción del cliente",
    },
    {
      name: "Carlos Mendoza",
      role: "CEO",
      company: "AgroTech Solutions",
      image: "/placeholder-user.jpg",
      rating: 5,
      text: "El agente de análisis de suelos ha revolucionado cómo nuestros clientes agricultores toman decisiones. Procesamos 10x más consultas con la misma calidad de respuesta.",
      results: "10x más consultas procesadas",
    },
    {
      name: "Ana Rodríguez",
      role: "Head of HR",
      company: "Innovate Corp",
      image: "/placeholder-user.jpg",
      rating: 5,
      text: "El coaching de carrera con IA ha sido un game-changer para nuestros empleados. El 90% reporta mayor claridad en sus objetivos profesionales después de usar la plataforma.",
      results: "90% mayor claridad profesional",
    },
    {
      name: "Diego Silva",
      role: "Director Académico",
      company: "Language Institute",
      image: "/placeholder-user.jpg",
      rating: 5,
      text: "ParrotfyIA ha mejorado significativamente el engagement de nuestros estudiantes. Las sesiones de práctica aumentaron 300% y la retención de estudiantes subió al 85%.",
      results: "300% ↑ Práctica de idiomas",
    },
    {
      name: "Lucía Herrera",
      role: "Operations Manager",
      company: "E-commerce Plus",
      image: "/placeholder-user.jpg",
      rating: 5,
      text: "Implementamos Neuralia en 48 horas y vimos resultados inmediatos. Nuestro agente de ventas genera 40% más leads calificados que nuestro equipo anterior.",
      results: "40% más leads calificados",
    },
    {
      name: "Roberto Vega",
      role: "CTO",
      company: "FinTech Latam",
      image: "/placeholder-user.jpg",
      rating: 5,
      text: "La seguridad y escalabilidad de Neuralia nos permitió desplegar agentes IA en toda la región. Procesamos 50,000 consultas diarias sin problemas.",
      results: "50k consultas diarias",
    },
  ]

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Testimonios</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Lo que dicen nuestros clientes
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Empresas de toda Latinoamérica confían en Neuralia para transformar sus operaciones con IA
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <Quote className="h-8 w-8 text-blue-600 mb-4" />

                <blockquote className="text-gray-700 mb-6">"{testimonial.text}"</blockquote>

                <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">{testimonial.results}</Badge>

                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
