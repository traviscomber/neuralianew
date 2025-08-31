"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "María González",
      role: "Farmer",
      content: "EcosueloLab increased my tomato yield by 35%. Amazing!",
      rating: 5,
      result: "+35% yield",
    },
    {
      name: "Carlos Mendoza",
      role: "Developer",
      content: "Career Coach helped me switch to UX design in 4 months.",
      rating: 5,
      result: "4 months transition",
    },
    {
      name: "Ana Rodríguez",
      role: "Student",
      content: "ParrotfyIA improved my English from B1 to B2 in 3 months.",
      rating: 5,
      result: "B1 → B2 in 3 months",
    },
    {
      name: "Roberto Silva",
      role: "CEO",
      content: "Our AI agent reduced response time by 70%. Incredible ROI.",
      rating: 5,
      result: "70% faster",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <Users className="w-3 h-3 mr-1" />
            Happy Users
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-xl text-gray-600">See what our users achieve</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="feature-card border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>

                <div className="mb-4">
                  <Badge className="bg-green-100 text-green-800">{testimonial.result}</Badge>
                </div>

                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Simple Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold gradient-text">25K+</div>
            <div className="text-gray-600">Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text">98%</div>
            <div className="text-gray-600">Happy</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text">150+</div>
            <div className="text-gray-600">AI Agents</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
