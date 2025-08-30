"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechCorp",
    avatar: "/placeholder-user.jpg",
    content:
      "Neuralia's AI executives have transformed how we handle strategic decisions. They think like our best leaders.",
  },
  {
    name: "Michael Rodriguez",
    role: "CEO, StartupXYZ",
    avatar: "/placeholder-user.jpg",
    content: "Finally, AI that doesn't just assist but actually executes. Our AI CMO has increased conversion by 40%.",
  },
  {
    name: "Emily Johnson",
    role: "VP Operations, Enterprise Inc",
    avatar: "/placeholder-user.jpg",
    content: "The autonomous decision-making capabilities are incredible. It's like having a 24/7 executive team.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Forward-Thinking Leaders
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">See how companies are scaling with AI executives</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-6">"{testimonial.content}"</p>

                <div className="flex items-center">
                  <Avatar className="w-10 h-10 mr-3">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
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
