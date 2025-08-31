"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Rodriguez",
    role: "Agricultural Engineer",
    company: "EcosueloLab User",
    content:
      "The soil analysis AI has revolutionized how we approach farming. Getting instant, accurate recommendations through WhatsApp has increased our crop yields by 30%. The vibe coding approach makes it so intuitive to use.",
    avatar: "/placeholder-user.jpg",
    rating: 5,
  },
  {
    name: "Maria Santos",
    role: "Language Student",
    company: "ParrotfyIA User",
    content:
      "I've tried many language learning apps, but ParrotfyIA is different. The AI conversations feel natural and adapt to my learning pace. I'm now fluent in English thanks to this amazing vibe coding technology.",
    avatar: "/placeholder-user.jpg",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Software Developer",
    company: "Career Transition Success",
    content:
      "The Career Coach AI helped me transition from junior to senior developer in just 8 months. The personalized guidance and industry insights were invaluable. This is what AI should be - helpful and human-centered.",
    avatar: "/placeholder-user.jpg",
    rating: 5,
  },
  {
    name: "Ana Gutierrez",
    role: "Farm Owner",
    company: "EcosueloLab Success Story",
    content:
      "As a small farm owner, I couldn't afford expensive soil testing. EcosueloLab's WhatsApp bot gives me professional-grade analysis instantly. The vibe coding methodology makes complex technology accessible to everyone.",
    avatar: "/placeholder-user.jpg",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "HR Director",
    company: "Corporate Training",
    content:
      "We use Neuralia's AI solutions for employee development. The results speak for themselves - 40% improvement in skill acquisition and 95% employee satisfaction. The vibe coding approach creates technology people actually want to use.",
    avatar: "/placeholder-user.jpg",
    rating: 5,
  },
  {
    name: "Sofia Martinez",
    role: "Startup Founder",
    company: "Tech Entrepreneur",
    content:
      "Neuralia's AI agents helped us scale our customer support from day one. The intelligent automation handles 80% of inquiries while maintaining a human touch. This is the future of business technology.",
    avatar: "/placeholder-user.jpg",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real people who've experienced the power of our vibe coding approach to AI.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-xs text-gray-500">{testimonial.company}</div>
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
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium">
            <Star className="w-5 h-5 mr-2 fill-current" />
            4.9/5 average rating from 10,000+ users
          </div>
        </motion.div>
      </div>
    </section>
  )
}
