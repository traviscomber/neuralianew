import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    role: "CEO",
    company: "EcoSolutions",
    content:
      "Neuralia transformed our customer service. Our AI agent handles 80% of inquiries automatically, improving response time by 300%.",
    rating: 5,
    metric: "300% faster responses",
  },
  {
    name: "Carlos Mendoza",
    role: "Operations Director",
    company: "TechStart",
    content:
      "The no-code platform allowed us to deploy our first AI agent in just 2 hours. The ROI was immediate and substantial.",
    rating: 5,
    metric: "2 hours to deployment",
  },
  {
    name: "Ana Rodríguez",
    role: "HR Manager",
    company: "GlobalCorp",
    content:
      "Our recruitment AI agent screens candidates 24/7, reducing hiring time by 60% while improving candidate quality.",
    rating: 5,
    metric: "60% faster hiring",
  },
  {
    name: "Diego Fernández",
    role: "Sales Manager",
    company: "SalesForce Pro",
    content:
      "Lead qualification improved dramatically. Our AI agent identifies high-value prospects with 95% accuracy.",
    rating: 5,
    metric: "95% accuracy rate",
  },
  {
    name: "Lucía Martín",
    role: "Customer Success",
    company: "ServiceFirst",
    content: "Customer satisfaction scores increased by 40% after implementing our multilingual support agent.",
    rating: 5,
    metric: "40% higher satisfaction",
  },
  {
    name: "Roberto Silva",
    role: "CTO",
    company: "InnovaTech",
    content:
      "The integration capabilities are outstanding. Our agent connects seamlessly with all our existing systems.",
    rating: 5,
    metric: "100% system integration",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of companies that have transformed their operations with Neuralia AI agents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Quote className="h-6 w-6 text-gray-300" />
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed">"{testimonial.content}"</p>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                        <p className="text-sm font-medium text-indigo-600">{testimonial.company}</p>
                      </div>
                      <Badge variant="secondary" className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800">
                        {testimonial.metric}
                      </Badge>
                    </div>
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
