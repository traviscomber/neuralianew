import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at TechFlow",
    company: "TechFlow Solutions",
    content:
      "Neuralia transformed how we handle customer support. Our AI agents now resolve 85% of inquiries automatically, and customer satisfaction has increased by 40%.",
    rating: 5,
    metrics: "85% automation rate",
  },
  {
    name: "Marcus Rodriguez",
    role: "Product Manager",
    company: "EduTech Innovations",
    content:
      "The no-code builder is incredible. We built and deployed our first AI tutor in just 2 days. Our students love the personalized learning experience.",
    rating: 5,
    metrics: "2-day deployment",
  },
  {
    name: "Emily Watson",
    role: "Founder",
    company: "HealthAI Startup",
    content:
      "The enterprise security features gave us confidence to handle sensitive health data. HIPAA compliance was seamless with Neuralia's built-in safeguards.",
    rating: 5,
    metrics: "HIPAA compliant",
  },
  {
    name: "David Kim",
    role: "Operations Director",
    company: "RetailBot Corp",
    content:
      "Our e-commerce AI assistant increased conversion rates by 32%. The analytics dashboard provides insights we never had before.",
    rating: 5,
    metrics: "32% conversion increase",
  },
  {
    name: "Lisa Thompson",
    role: "Head of Innovation",
    company: "FinanceForward",
    content:
      "Real-time processing capabilities are outstanding. Our trading algorithms now respond 10x faster than our previous solution.",
    rating: 5,
    metrics: "10x faster response",
  },
  {
    name: "Alex Johnson",
    role: "CEO",
    company: "StartupLab",
    content:
      "From prototype to production in weeks, not months. Neuralia's platform accelerated our go-to-market strategy significantly.",
    rating: 5,
    metrics: "Weeks to production",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by innovative companies
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See how leading organizations are transforming their business with AI agents built on Neuralia.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
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
                      <div className="text-sm font-medium text-blue-600">{testimonial.metrics}</div>
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
