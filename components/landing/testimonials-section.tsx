import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Solutions",
    content:
      "Neuralia transformed our customer support. We went from 24-hour response times to instant, intelligent responses. Our customer satisfaction increased by 40% in just 3 months.",
    rating: 5,
    metric: "40% increase in satisfaction",
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Operations",
    company: "Global Logistics Inc",
    content:
      "The AI agents handle 80% of our routine inquiries automatically. Our team can now focus on complex problems while customers get instant help 24/7.",
    rating: 5,
    metric: "80% automation rate",
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Emily Watson",
    role: "Marketing Director",
    company: "GrowthLab",
    content:
      "Building our lead qualification bot was incredibly easy. No coding required, and it's generating 3x more qualified leads than our previous forms.",
    rating: 5,
    metric: "3x more qualified leads",
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "David Kim",
    role: "Founder",
    company: "EduTech Startup",
    content:
      "We launched our AI tutor in weeks, not months. Students love the personalized learning experience, and we've seen 60% better engagement rates.",
    rating: 5,
    metric: "60% better engagement",
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Lisa Thompson",
    role: "HR Manager",
    company: "InnovateCorp",
    content:
      "Our AI recruitment assistant screens candidates 24/7 and schedules interviews automatically. We've reduced time-to-hire by 50% while improving candidate experience.",
    rating: 5,
    metric: "50% faster hiring",
    avatar: "/placeholder-user.jpg",
  },
  {
    name: "Alex Johnson",
    role: "Product Manager",
    company: "FinanceFlow",
    content:
      "The analytics dashboard gives us incredible insights into customer conversations. We've optimized our product based on AI-gathered feedback and increased retention by 35%.",
    rating: 5,
    metric: "35% retention increase",
    avatar: "/placeholder-user.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by innovative companies
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            See how businesses across industries are using Neuralia to transform their customer experiences and drive
            growth.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="h-8 w-8 text-gray-400" />
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>

                <Badge
                  variant="secondary"
                  className="mt-4 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 border-green-200"
                >
                  {testimonial.metric}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
