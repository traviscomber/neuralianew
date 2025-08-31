"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Inc",
    content:
      "Neuralia's vibe coding approach made AI implementation effortless. Our customer service efficiency improved by 85% in just two weeks.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Marcus Rodriguez",
    role: "Operations Director",
    company: "Global Logistics",
    content:
      "The AI agents understand context better than any solution we've tried. The vibe coding methodology really shows in the user experience.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Emily Watson",
    role: "Marketing Manager",
    company: "Creative Studios",
    content:
      "From setup to results, everything just works. The AI feels natural and intuitive - exactly what vibe coding promises.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "David Kim",
    role: "CEO",
    company: "StartupLab",
    content:
      "Neuralia transformed our business operations. The AI agents are like having expert team members who never sleep.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Lisa Thompson",
    role: "Product Manager",
    company: "InnovateCorp",
    content:
      "The vibe coding approach makes complex AI feel simple. Our team adopted it instantly without any learning curve.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Alex Johnson",
    role: "Data Scientist",
    company: "Analytics Pro",
    content: "Finally, an AI platform that delivers on its promises. The intelligence and ease of use are unmatched.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Loved by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers say about the power of vibe coding and intelligent AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200" />
                    <p className="text-gray-700 italic pl-6">{testimonial.content}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
