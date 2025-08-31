import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    role: "CEO, TechStart",
    company: "TechStart Solutions",
    content:
      "Neuralia transformed our customer service. Our response time improved by 80% and customer satisfaction reached 95%.",
    rating: 5,
    metric: "80% faster responses",
  },
  {
    name: "Carlos Mendoza",
    role: "Operations Director",
    company: "RetailMax",
    content:
      "The AI agents handle 90% of our inquiries automatically. Our team can now focus on strategic initiatives.",
    rating: 5,
    metric: "90% automation rate",
  },
  {
    name: "Ana Rodríguez",
    role: "HR Manager",
    company: "GlobalCorp",
    content:
      "EcosueloLab helped us reduce hiring time by 60%. The AI perfectly matches candidates with our requirements.",
    rating: 5,
    metric: "60% faster hiring",
  },
  {
    name: "Diego Silva",
    role: "Marketing Lead",
    company: "GrowthCo",
    content: "ParrotfyIA increased our international team's English proficiency by 40% in just 3 months.",
    rating: 5,
    metric: "40% skill improvement",
  },
  {
    name: "Laura Vásquez",
    role: "Product Manager",
    company: "InnovateLab",
    content:
      "The neural processing capabilities are incredible. Complex queries are resolved instantly with human-like understanding.",
    rating: 5,
    metric: "99.9% accuracy",
  },
  {
    name: "Roberto Chen",
    role: "CTO",
    company: "DataFlow",
    content:
      "Integration was seamless. The APIs are well-documented and our developers had the system running in days.",
    rating: 5,
    metric: "2-day integration",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-700">Testimonials</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how businesses across Latin America are achieving remarkable results with our AI agents ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-blue-500 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                    </div>
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
                      {testimonial.metric}
                    </Badge>
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
