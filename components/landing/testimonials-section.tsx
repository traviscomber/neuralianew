"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote, Sparkles } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Solutions",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    content:
      "Neuralia's vibe coding approach revolutionized our customer service. Our AI agents now understand context and emotion like never before. Customer satisfaction increased by 40% in just 3 months.",
    highlight: "40% increase in satisfaction",
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Operations",
    company: "Global Retail Corp",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    content:
      "The vibe coding technology is incredible. Our AI systems now adapt to customer moods and preferences in real-time. It's like having a team of empathetic experts working 24/7.",
    highlight: "24/7 empathetic support",
  },
  {
    name: "Dr. Emily Watson",
    role: "Director of Innovation",
    company: "HealthTech Innovations",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    content:
      "Implementing Neuralia's vibe coding solutions transformed our patient interactions. The AI understands medical concerns with remarkable sensitivity and provides appropriate responses.",
    highlight: "Remarkable sensitivity",
  },
  {
    name: "James Park",
    role: "VP of Sales",
    company: "Enterprise Solutions Inc",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    content:
      "Our sales team's productivity doubled with vibe coding AI assistants. They understand buyer psychology and help close deals more effectively than we ever imagined possible.",
    highlight: "2x productivity increase",
  },
  {
    name: "Lisa Thompson",
    role: "Chief Learning Officer",
    company: "EduTech Academy",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    content:
      "The personalized learning experiences created with vibe coding are phenomenal. Students are more engaged, and learning outcomes have improved significantly across all programs.",
    highlight: "Significantly improved outcomes",
  },
  {
    name: "David Kim",
    role: "Founder & CEO",
    company: "StartupLab",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    content:
      "As a startup, we needed AI that could grow with us. Neuralia's vibe coding platform scaled perfectly with our business, adapting to our changing needs effortlessly.",
    highlight: "Perfect scalability",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <Sparkles className="h-4 w-4 mr-2" />
            Client Success Stories
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            What Our Clients Say About <span className="gradient-text">Vibe Coding</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how businesses worldwide are transforming their operations and achieving unprecedented results with
            Neuralia's vibe coding AI solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                    <p className="text-muted-foreground leading-relaxed pl-6">{testimonial.content}</p>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                    </div>
                  </div>

                  <Badge variant="outline" className="text-xs">
                    {testimonial.highlight}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1M+</div>
              <div className="text-sm text-muted-foreground">Vibe Coding Interactions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Expert Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
