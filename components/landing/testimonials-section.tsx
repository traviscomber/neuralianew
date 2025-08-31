import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at TechFlow",
    company: "TechFlow Solutions",
    content:
      "Neuralia transformed our customer service. Our AI agents handle 80% of inquiries automatically with 95% satisfaction rates.",
    rating: 5,
    metrics: "80% automation, 95% satisfaction",
  },
  {
    name: "Miguel Rodriguez",
    role: "Head of Operations",
    company: "Global Logistics Inc",
    content:
      "The multilingual capabilities are incredible. Our Spanish and English agents provide seamless support across all markets.",
    rating: 5,
    metrics: "40+ languages supported",
  },
  {
    name: "Dr. Emily Watson",
    role: "Director of Learning",
    company: "EduTech Academy",
    content:
      "Our students love the personalized AI tutors. Learning engagement increased by 60% since implementing Neuralia.",
    rating: 5,
    metrics: "60% engagement increase",
  },
  {
    name: "James Park",
    role: "Founder & CEO",
    company: "StartupLab",
    content: "From prototype to production in just 2 weeks. The deployment process is incredibly smooth and scalable.",
    rating: 5,
    metrics: "2-week deployment",
  },
  {
    name: "Lisa Thompson",
    role: "VP of Customer Success",
    company: "RetailMax",
    content: "Our conversion rates improved by 35% with AI-powered shopping assistants. The ROI has been phenomenal.",
    rating: 5,
    metrics: "35% conversion increase",
  },
  {
    name: "Carlos Mendoza",
    role: "Innovation Director",
    company: "FinanceForward",
    content:
      "The security and compliance features give us complete confidence. Perfect for our financial services requirements.",
    rating: 5,
    metrics: "100% compliance maintained",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="mb-4 bg-green-100 text-green-800 px-4 py-2">⭐ Customer Success</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Industry Leaders
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              Worldwide
            </span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See how companies across different industries are achieving remarkable results with our AI agent platform.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-2 hover:border-green-200 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-green-500 mb-2" />
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <Badge variant="secondary" className="mb-4 bg-green-50 text-green-700">
                  {testimonial.metrics}
                </Badge>

                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
