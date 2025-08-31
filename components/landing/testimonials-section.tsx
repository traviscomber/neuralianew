import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Solutions",
    content:
      "Neuralia transformed our customer support. Our AI agent handles 80% of inquiries automatically, reducing response time from hours to seconds.",
    rating: 5,
    metrics: "80% automation rate",
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Operations",
    company: "Global Logistics Inc",
    content:
      "The no-code builder made it incredibly easy to create agents for our supply chain. We've reduced manual processes by 60% in just 3 months.",
    rating: 5,
    metrics: "60% process reduction",
  },
  {
    name: "Emily Watson",
    role: "Marketing Director",
    company: "GrowthLab",
    content:
      "Our lead qualification agent increased conversion rates by 45%. The analytics dashboard gives us insights we never had before.",
    rating: 5,
    metrics: "45% conversion increase",
  },
  {
    name: "David Kim",
    role: "Product Manager",
    company: "InnovateCorp",
    content:
      "Deploying across multiple channels was seamless. Our agent works perfectly on web, mobile, and WhatsApp with consistent performance.",
    rating: 5,
    metrics: "Multi-channel deployment",
  },
  {
    name: "Lisa Thompson",
    role: "Customer Success Lead",
    company: "ServicePro",
    content:
      "The enterprise security features gave us confidence to deploy company-wide. SOC 2 compliance was crucial for our industry.",
    rating: 5,
    metrics: "Enterprise-grade security",
  },
  {
    name: "Alex Johnson",
    role: "Founder",
    company: "StartupXYZ",
    content:
      "As a startup, we needed something that could scale with us. Neuralia's infrastructure handled our 10x growth without any issues.",
    rating: 5,
    metrics: "10x scale handled",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Trusted by industry leaders</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Companies of all sizes rely on Neuralia to build AI agents that deliver measurable business impact and
            exceptional user experiences.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-900 mb-6">
                  <p>"{testimonial.content}"</p>
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-blue-600">{testimonial.metrics}</div>
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
