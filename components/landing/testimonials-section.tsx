"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Solutions",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Neuralia's vibe coding approach to AI has revolutionized our development process. The efficiency gains are remarkable, and the intuitive nature of their solutions makes implementation seamless.",
    rating: 5,
    badge: "Enterprise",
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Innovation",
    company: "Global Dynamics",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "The vibe coding methodology isn't just a buzzword - it's a game-changer. Our team productivity increased by 300% after implementing Neuralia's AI solutions.",
    rating: 5,
    badge: "Fortune 500",
  },
  {
    name: "Emily Watson",
    role: "Product Manager",
    company: "StartupX",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "As a startup, we needed AI solutions that could scale with us. Neuralia's vibe coding approach provided exactly that - powerful, flexible, and surprisingly intuitive.",
    rating: 5,
    badge: "Startup",
  },
  {
    name: "David Kim",
    role: "Operations Director",
    company: "ManufacturePro",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "The automation capabilities powered by vibe coding have transformed our manufacturing processes. We've seen a 40% reduction in operational costs.",
    rating: 5,
    badge: "Manufacturing",
  },
  {
    name: "Lisa Thompson",
    role: "Digital Transformation Lead",
    company: "RetailMax",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Neuralia's vibe coding AI solutions helped us create personalized customer experiences that increased our conversion rates by 60%. Absolutely phenomenal results.",
    rating: 5,
    badge: "Retail",
  },
  {
    name: "Alex Johnson",
    role: "Chief Data Officer",
    company: "FinanceFirst",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "The predictive analytics powered by vibe coding have given us insights we never thought possible. Our risk assessment accuracy improved by 85%.",
    rating: 5,
    badge: "Finance",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What Our Clients Say About <span className="gradient-text">Vibe Coding</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Hear from industry leaders who have experienced the transformative power of our vibe coding approach to AI
            solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full card-hover">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                        <AvatarFallback>
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.role}</CardDescription>
                        <CardDescription className="text-xs text-muted-foreground">
                          {testimonial.company}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="secondary">{testimonial.badge}</Badge>
                  </div>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base italic">"{testimonial.content}"</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
