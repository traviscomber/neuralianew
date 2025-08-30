"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO",
      company: "TechFlow Inc",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Neuralia's AI executives have transformed how we approach strategic planning. They don't just execute tasks—they think through problems like our best senior engineers.",
      rating: 5,
      badge: "Enterprise",
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Developer",
      company: "DataStream Solutions",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Finally, an AI platform built by developers who understand our workflow. The API is clean, the documentation is excellent, and the results speak for themselves.",
      rating: 5,
      badge: "Developer",
    },
    {
      name: "Emily Watson",
      role: "VP of Engineering",
      company: "CloudScale Systems",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "We deployed three AI executives last month. They're already handling complex decision-making that used to require multiple team meetings. Game changer.",
      rating: 5,
      badge: "Scale-up",
    },
    {
      name: "David Kim",
      role: "Founder",
      company: "InnovateLab",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "The contextual intelligence is incredible. Our AI executive remembers every project detail and makes connections we sometimes miss. It's like having a senior partner.",
      rating: 5,
      badge: "Startup",
    },
    {
      name: "Lisa Thompson",
      role: "Head of Product",
      company: "NextGen Analytics",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "Integration was seamless. Within hours, we had an AI executive analyzing user data and providing strategic recommendations. The ROI is already clear.",
      rating: 5,
      badge: "Product",
    },
    {
      name: "James Wilson",
      role: "Senior Architect",
      company: "BuildRight Technologies",
      avatar: "/placeholder.svg?height=40&width=40",
      content:
        "The multi-agent orchestration is brilliant. Watching multiple AI executives collaborate on complex problems is like seeing the future of software development.",
      rating: 5,
      badge: "Architecture",
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Trusted by Developers
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Who Build the Future
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of developers and engineering teams who've deployed AI executives to transform their
            workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {testimonial.badge}
                  </Badge>
                </div>
              </CardContent>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-600/10 to-blue-600/10 border border-green-200 dark:border-green-800">
            <Star className="h-5 w-5 text-green-600 mr-2 fill-current" />
            <span className="text-sm font-medium">4.9/5 average rating from 500+ developer teams</span>
          </div>
        </div>
      </div>
    </section>
  )
}
