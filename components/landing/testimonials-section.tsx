import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    role: "Agricultora",
    company: "Finca Verde",
    content:
      "EcosueloLab revolucionó mi forma de cultivar. El análisis de IA me ayudó a aumentar mi producción de tomates en un 40% y reducir el uso de fertilizantes.",
    rating: 5,
    metric: "+40% producción",
    avatar: "MG",
  },
  {
    name: "Carlos Mendoza",
    role: "Desarrollador",
    company: "Tech Solutions",
    content:
      "Despega tu Carrera me guió perfectamente en mi transición de marketing a UX/UI. En 4 meses conseguí mi primer trabajo como diseñador.",
    rating: 5,
    metric: "4 meses transición",
    avatar: "CM",
  },
  {
    name: "Ana Rodríguez",
    role: "Estudiante",
    company: "Universidad Central",
    content:
      "ParrotfyIA mejoró mi inglés increíblemente. Pasé de nivel B1 a B2 en solo 3 meses practicando conversaciones diarias con la IA.",
    rating: 5,
    metric: "B1 → B2 en 3 meses",
    avatar: "AR",
  },
  {
    name: "Roberto Silva",
    role: "Gerente de Ventas",
    company: "Agro Innovación",
    content:
      "Implementamos los agentes IA de Neuralia y nuestro equipo de soporte redujo el tiempo de respuesta en 60%. Los clientes están más satisfechos que nunca.",
    rating: 5,
    metric: "-60% tiempo respuesta",
    avatar: "RS",
  },
  {
    name: "Laura Jiménez",
    role: "Directora de RRHH",
    company: "Talento Global",
    content:
      "El coaching de carrera IA ha transformado nuestro programa de desarrollo interno. 85% de nuestros empleados han logrado promociones exitosas.",
    rating: 5,
    metric: "85% promociones",
    avatar: "LJ",
  },
  {
    name: "Diego Morales",
    role: "Profesor de Inglés",
    company: "Instituto de Idiomas",
    content:
      "ParrotfyIA es el complemento perfecto para mis clases. Mis estudiantes practican 3x más fuera del aula y sus resultados han mejorado notablemente.",
    rating: 5,
    metric: "3x más práctica",
    avatar: "DM",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-green-600 to-blue-600 text-white border-0">
            Testimonios Reales
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lo Que Dicen Nuestros
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent block">
              Usuarios Satisfechos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Miles de usuarios ya están transformando sus negocios y carreras con nuestros agentes IA. Descubre sus
            historias de éxito.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-blue-600 opacity-20" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>

                {/* Metric Badge */}
                <div className="mb-4">
                  <Badge className="bg-gradient-to-r from-green-100 to-blue-100 text-green-800 border-green-200">
                    {testimonial.metric}
                  </Badge>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
            <div className="text-gray-600">Usuarios Activos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-gray-600">Satisfacción</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-gray-600">Agentes Desplegados</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Soporte IA</div>
          </div>
        </div>
      </div>
    </section>
  )
}
