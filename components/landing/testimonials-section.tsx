import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at TechFlow",
    company: "TechFlow Solutions",
    content:
      "Neuralia transformed how we handle customer support. Our AI agent resolves 85% of queries automatically, and customer satisfaction has increased by 40%.",
    rating: 5,
    metrics: "85% automation rate",
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Operations",
    company: "Global Logistics Inc",
    content:
      "The multilingual capabilities are incredible. Our agent communicates with clients in 12 languages, expanding our global reach significantly.",
    rating: 5,
    metrics: "12 languages supported",
  },
  {
    name: "Emily Watson",
    role: "Product Manager",
    company: "FinanceFirst",
    content:
      "Building our financial advisory agent was surprisingly easy. The no-code builder let our team create complex workflows without any technical expertise.",
    rating: 5,
    metrics: "Zero coding required",
  },
  {
    name: "David Kim",
    role: "CEO",
    company: "EduTech Innovations",
    content:
      "Our learning assistant has helped over 10,000 students. The real-time learning capabilities mean it gets better with every interaction.",
    rating: 5,
    metrics: "10,000+ students helped",
  },
  {
    name: "Lisa Thompson",
    role: "Marketing Director",
    company: "RetailMax",
    content:
      "The analytics dashboard gives us incredible insights. We can see exactly how our agent performs and continuously optimize for better results.",
    rating: 5,
    metrics: "Real-time insights",
  },
  {
    name: "Ahmed Hassan",
    role: "IT Director",
    company: "HealthCare Plus",
    content:
      "Security was our top concern, but Neuralia's enterprise-grade protection and SOC 2 compliance gave us complete confidence.",
    rating: 5,
    metrics: "SOC 2 compliant",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by industry leaders
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See what our customers are saying about their experience with Neuralia's AI agent platform.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-gray-900 mb-6">
                  <p>"{testimonial.content}"</p>
                </blockquote>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-indigo-600">{testimonial.metrics}</div>
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
