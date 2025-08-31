"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote, Zap } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Head of Customer Experience",
    company: "TechFlow Solutions",
    avatar: "/placeholder-user.jpg",
    content:
      "Neuralia's vibe coding approach completely transformed our customer service. Our AI doesn't just solve problems—it connects with customers on an emotional level. We've seen a 40% increase in satisfaction scores.",
    rating: 5,
    metric: "40% ↑ Satisfaction",
  },
  {
    name: "Marcus Rodriguez",
    role: "Learning & Development Director",
    company: "Global Education Corp",
    avatar: "/placeholder-user.jpg",
    content:
      "The EcosueloLab career coaching AI has been a game-changer for our students. It understands their unique career aspirations and provides personalized guidance that feels genuinely supportive.",
    rating: 5,
    metric: "94% Success Rate",
  },
  {
    name: "Elena Kowalski",
    role: "Product Manager",
    company: "LinguaLearn",
    avatar: "/placeholder-user.jpg",
    content:
      "ParrotfyIA's conversational approach to language learning is revolutionary. Our users stay engaged 3x longer because the AI adapts to their personality and learning style.",
    rating: 5,
    metric: "3x Engagement",
  },
  {
    name: "David Park",
    role: "CTO",
    company: "RetailNext",
    avatar: "/placeholder-user.jpg",
    content:
      "The vibe coding methodology helped us create an AI shopping assistant that truly understands our customers' style preferences. Conversion rates increased by 45% in just three months.",
    rating: 5,
    metric: "45% ↑ Conversions",
  },
  {
    name: "Dr. Amanda Foster",
    role: "Clinical Director",
    company: "MindWell Therapy",
    avatar: "/placeholder-user.jpg",
    content:
      "The empathetic AI companion we built with Neuralia provides genuine emotional support to our clients. It's not just technology—it's a caring presence that makes a real difference.",
    rating: 5,
    metric: "89% User Engagement",
  },
  {
    name: "James Thompson",
    role: "VP of Operations",
    company: "Enterprise Solutions Inc",
    avatar: "/placeholder-user.jpg",
    content:
      "Implementing Neuralia's vibe-coded AI across our organization improved employee satisfaction and operational efficiency. The AI truly embodies our company culture and values.",
    rating: 5,
    metric: "60% ↑ Efficiency",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            <Zap className="w-4 h-4 mr-2" />
            Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Loved by Teams Worldwide</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how organizations across industries are transforming their customer experience with AI that truly
            understands and connects.
          </p>
        </motion.div>

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
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                    <p className="text-muted-foreground italic pl-6">"{testimonial.content}"</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
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
                        <div className="font-semibold text-sm">{testimonial.name}</div>
                        <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                        <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs font-semibold">
                      {testimonial.metric}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">96%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
