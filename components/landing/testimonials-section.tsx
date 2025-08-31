import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at TechFlow",
    company: "TechFlow",
    content:
      "Neuralia transformed how we build AI solutions. We deployed our first agent in just 2 days and saw 40% improvement in customer satisfaction.",
    rating: 5,
    metrics: "40% ↑ Customer Satisfaction",
  },
  {
    name: "Marcus Rodriguez",
    role: "Product Manager",
    company: "InnovateCorp",
    content:
      "The no-code builder is incredible. Our non-technical team members can now create sophisticated AI workflows without any programming knowledge.",
    rating: 5,
    metrics: "3x Faster Development",
  },
  {
    name: "Emily Watson",
    role: "Startup Founder",
    company: "GrowthLab",
    content:
      "From prototype to production in weeks, not months. Neuralia's platform gave us the competitive edge we needed to scale rapidly.",
    rating: 5,
    metrics: "60% Faster Time-to-Market",
  },
  {
    name: "David Kim",
    role: "AI Engineer",
    company: "DataDriven",
    content:
      "The integrated analytics and real-time processing capabilities are outstanding. We can monitor and optimize our agents' performance effortlessly.",
    rating: 5,
    metrics: "99.9% Uptime Achieved",
  },
  {
    name: "Lisa Thompson",
    role: "Operations Director",
    company: "ServicePro",
    content:
      "Our customer service costs dropped by 50% while response times improved dramatically. The ROI has been phenomenal.",
    rating: 5,
    metrics: "50% ↓ Support Costs",
  },
  {
    name: "Alex Johnson",
    role: "Head of Innovation",
    company: "FutureTech",
    content:
      "Neuralia's enterprise security features give us complete confidence. We can deploy AI agents knowing our data is fully protected.",
    rating: 5,
    metrics: "100% Compliance Met",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Trusted by innovative teams</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See how companies are transforming their operations with Neuralia's AI agent platform.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <blockquote className="text-gray-900 mb-6">"{testimonial.content}"</blockquote>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                        <div className="text-sm text-gray-500">{testimonial.company}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-green-600">{testimonial.metrics}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
