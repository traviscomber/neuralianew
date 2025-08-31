"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos Mendoza",
      role: "Agricultural Cooperative Director",
      company: "AgroValle Cooperative",
      image: "/placeholder-user.jpg",
      content:
        "EcosueloLab transformed our farming operations. Our farmers now get instant soil analysis through WhatsApp, leading to 40% better yields. The AI understands our local conditions perfectly.",
      rating: 5,
      industry: "Agriculture",
    },
    {
      name: "Sarah Chen",
      role: "Customer Experience Director",
      company: "TechFlow Solutions",
      image: "/placeholder-user.jpg",
      content:
        "Our AI executive handles 10,000+ customer inquiries daily with 95% satisfaction. It's like having a brilliant customer service director who never sleeps.",
      rating: 5,
      industry: "Technology",
    },
    {
      name: "Michael Rodriguez",
      role: "CFO",
      company: "InvestCorp Financial",
      image: "/placeholder-user.jpg",
      content:
        "The financial analysis AI processes millions in transactions daily with 99.9% accuracy. It's revolutionized our risk management and investment strategies.",
      rating: 5,
      industry: "Finance",
    },
    {
      name: "Elena Vasquez",
      role: "HR Director",
      company: "GlobalTech Industries",
      image: "/placeholder-user.jpg",
      content:
        "Our HR AI executive manages 5,000+ employees, reduced hiring time by 70%, and improved retention to 92%. It's like having a strategic HR partner.",
      rating: 5,
      industry: "Technology",
    },
    {
      name: "David Kim",
      role: "Operations Manager",
      company: "Manufacturing Plus",
      image: "/placeholder-user.jpg",
      content:
        "The operations AI optimized our entire supply chain, reducing costs by 35% while improving quality metrics. It thinks strategically about every decision.",
      rating: 5,
      industry: "Manufacturing",
    },
    {
      name: "Ana Silva",
      role: "Marketing Director",
      company: "BrandForward Agency",
      image: "/placeholder-user.jpg",
      content:
        "Our content strategist AI creates campaigns that consistently outperform human-only efforts by 60%. It understands our brand voice perfectly.",
      rating: 5,
      industry: "Marketing",
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from businesses that have deployed our AI executives and achieved measurable results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {testimonial.industry}
                  </Badge>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-muted-foreground/20" />
                  <p className="text-muted-foreground italic pl-4">"{testimonial.content}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
