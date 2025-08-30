"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Inc",
    content:
      "Neuralia transformed our customer service with AI that actually understands context. 40% reduction in response time.",
    rating: 5,
    industry: "SaaS",
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Operations",
    company: "LogiCorp",
    content: "The predictive analytics model they built saved us $2M in inventory costs in the first year alone.",
    rating: 5,
    industry: "Logistics",
  },
  {
    name: "Dr. Emily Watson",
    role: "Research Director",
    company: "MedTech Solutions",
    content:
      "Their medical AI assistant helps our doctors make faster, more accurate diagnoses. Game-changing technology.",
    rating: 5,
    industry: "Healthcare",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how we've helped companies across different industries implement AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                  <Badge variant="outline">{testimonial.industry}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
