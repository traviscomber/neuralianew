"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    role: "Career Coach at EcosueloLab",
    company: "EcosueloLab",
    image: "/placeholder-user.jpg",
    content:
      "Vibe coding transformed how we approach career guidance. Our AI coach understands emotional nuances and provides personalized advice that feels genuinely human. Client satisfaction increased by 85%.",
    rating: 5,
    gradient: "from-green-500 to-emerald-600",
  },
  {
    name: "Dr. James Wilson",
    role: "Language Learning Director",
    company: "ParrotfyIA",
    image: "/placeholder-user.jpg",
    content:
      "The pronunciation feedback and cultural context awareness in our ParrotfyIA platform is remarkable. Students achieve 92% improvement rates because the AI truly understands language learning challenges.",
    rating: 5,
    gradient: "from-purple-500 to-violet-600",
  },
  {
    name: "Sarah Chen",
    role: "Customer Experience Manager",
    company: "TechCorp Solutions",
    image: "/placeholder-user.jpg",
    content:
      "Our customer service AI handles complex queries with incredible accuracy. The contextual understanding and human-like responses reduced our support costs by 40% while improving satisfaction scores.",
    rating: 5,
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    name: "Carlos Rodriguez",
    role: "E-commerce Director",
    company: "RetailMax",
    image: "/placeholder-user.jpg",
    content:
      "The personalized shopping assistant increased our sales by 35%. Customers love how it understands their preferences and provides relevant recommendations that feel natural, not pushy.",
    rating: 5,
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "Lisa Thompson",
    role: "HR Technology Lead",
    company: "InnovateCorp",
    image: "/placeholder-user.jpg",
    content:
      "Vibe coding revolutionized our recruitment process. The AI screens candidates with human-like intuition, saving us 60% of our time while maintaining quality hiring standards.",
    rating: 5,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    name: "Dr. Michael Park",
    role: "Digital Health Director",
    company: "HealthTech Plus",
    image: "/placeholder-user.jpg",
    content:
      "Patient interactions with our healthcare AI are incredibly positive. The empathetic responses and accurate health guidance achieve 95% patient satisfaction while reducing staff workload.",
    rating: 5,
    gradient: "from-pink-500 to-rose-500",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Vibe Coders
            </span>{" "}
            Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from industry leaders who are transforming their businesses with intelligent AI agents built using vibe
            coding principles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-gray-300 mr-2" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>

                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className={`bg-gradient-to-r ${testimonial.gradient} text-white font-semibold`}>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm font-medium text-blue-600">{testimonial.company}</p>
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
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Join the Vibe Coding Revolution</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Thousands of developers and businesses are already building the future with AI agents that understand,
              empathize, and respond naturally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Start Your Journey
              </button>
              <button className="border border-gray-600 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors">
                Read More Stories
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
