"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO",
    company: "TechFlow Solutions",
    content:
      "Neuralia's vibe coding completely transformed our customer support. Our AI now handles complex queries with the same empathy and expertise as our best human agents. Customer satisfaction increased by 40%.",
    rating: 5,
    industry: "SaaS",
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Marketing",
    company: "GreenLeaf Organics",
    content:
      "The AI understands our brand's environmental mission perfectly. It creates content that feels authentic to our values while engaging customers in meaningful conversations about sustainability.",
    rating: 5,
    industry: "E-commerce",
  },
  {
    name: "Dr. Emily Watson",
    role: "Director of Education",
    company: "Future Learning Academy",
    content:
      "Our students love their AI tutors! The personalized learning approach adapts to each child's unique style. We've seen a 60% improvement in engagement and learning outcomes.",
    rating: 5,
    industry: "Education",
  },
  {
    name: "James Park",
    role: "Operations Manager",
    company: "Urban Fitness Chain",
    content:
      "The AI scheduling assistant understands our members' preferences and schedules classes perfectly. It's like having a personal concierge for each of our 10,000+ members.",
    rating: 5,
    industry: "Fitness",
  },
  {
    name: "Lisa Thompson",
    role: "Creative Director",
    company: "Pixel Perfect Agency",
    content:
      "Working with Neuralia's creative AI is like having a brilliant creative partner who never sleeps. It understands our aesthetic and helps us deliver consistent, high-quality work faster.",
    rating: 5,
    industry: "Creative",
  },
  {
    name: "David Kumar",
    role: "CTO",
    company: "FinanceForward",
    content:
      "The AI's ability to explain complex financial concepts in simple terms while maintaining regulatory compliance is remarkable. Our clients trust it as much as they trust our human advisors.",
    rating: 5,
    industry: "Finance",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-white/50">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
            <Star className="mr-1 h-3 w-3" />
            Customer Success Stories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Loved by{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Thousands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what industry leaders are saying about their vibe coding experience and the transformative impact on
            their business.
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
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.industry}
                    </Badge>
                  </div>

                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-green-200" />
                    <p className="text-gray-700 leading-relaxed pl-6">{testimonial.content}</p>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
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
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-900">4.9/5</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Join Our Success Stories</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Over 1,000+ businesses trust Neuralia to deliver AI experiences that truly understand their vibe.
            </p>
            <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all">
              Start Your Success Story
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
