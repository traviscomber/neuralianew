"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechStart",
      content: "Neuralia cut our deployment time by 70%. Simple, powerful, effective.",
      rating: 5,
      company: "TechStart",
    },
    {
      name: "Mike Rodriguez",
      role: "Founder, GrowthCo",
      content: "Finally, AI that actually works. Our team loves how easy it is.",
      rating: 5,
      company: "GrowthCo",
    },
    {
      name: "Lisa Park",
      role: "VP Product, InnovateLab",
      content: "Best investment we made this year. Results speak for themselves.",
      rating: 5,
      company: "InnovateLab",
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Reviews
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What people are saying</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Real feedback from real customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <Quote className="h-8 w-8 text-gray-300 mb-4" />

                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
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
