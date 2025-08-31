"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, Zap } from "lucide-react"

const testimonials = [
  {
    name: "Dr. Maria Rodriguez",
    role: "Environmental Scientist",
    company: "EcoTech Solutions",
    content:
      "EcosueloLab with vibe coding has revolutionized how we monitor environmental data. The AI doesn't just process numbers—it understands the ecological story behind the data. Our prediction accuracy improved by 40%.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=MR",
    project: "EcosueloLab Implementation",
  },
  {
    name: "James Chen",
    role: "Language Learning Director",
    company: "Global Education Corp",
    content:
      "ParrotfyIA's vibe coding approach to language learning is incredible. Students don't just memorize—they truly understand cultural context and emotional nuances. Our completion rates increased by 300%.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=JC",
    project: "ParrotfyIA Integration",
  },
  {
    name: "Sarah Thompson",
    role: "HR Director",
    company: "TechStart Inc",
    content:
      "The Career Coach AI with vibe coding understands our company culture and individual aspirations. It's like having a human career counselor who never sleeps. Employee satisfaction with career development jumped to 95%.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=ST",
    project: "Career AI Deployment",
  },
  {
    name: "Carlos Mendoza",
    role: "Operations Manager",
    company: "Manufacturing Plus",
    content:
      "Neuralia's vibe coding AI transformed our operations. It doesn't just automate—it understands our workflow culture and adapts accordingly. We've seen 60% efficiency gains while maintaining our team's morale.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=CM",
    project: "Enterprise AI Solution",
  },
  {
    name: "Dr. Lisa Park",
    role: "Education Technology Lead",
    company: "Future Learning Institute",
    content:
      "The vibe coding methodology in educational AI is groundbreaking. It adapts to each student's emotional state and learning style. Our student engagement scores reached an all-time high of 89%.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=LP",
    project: "Educational AI Platform",
  },
  {
    name: "Michael O'Connor",
    role: "Healthcare Innovation Director",
    company: "MedCare Systems",
    content:
      "Healthcare AI with vibe coding provides the empathy our patients need. It understands emotional cues and provides appropriate support. Patient satisfaction improved by 35% since implementation.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=MO",
    project: "Healthcare AI Integration",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-green-600/20 text-green-400 border-green-600/30">
            <Zap className="h-3 w-3 mr-1" />
            Vibe Coding Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            What Our Clients Say About <span className="gradient-text">Vibe Coding</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how organizations worldwide are transforming their operations with our vibe coding AI solutions.
            Real results from real implementations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 h-full group hover:scale-105">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="h-8 w-8 text-blue-400 opacity-50" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-gray-300 leading-relaxed mb-6">"{testimonial.content}"</blockquote>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full bg-slate-700"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}</div>
                      <div className="text-sm text-blue-400">{testimonial.company}</div>
                    </div>
                  </div>

                  {/* Project Badge */}
                  <div className="mt-4 pt-4 border-t border-slate-700">
                    <Badge variant="outline" className="border-blue-600/30 text-blue-400 text-xs">
                      {testimonial.project}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-600/30">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Vibe Coding Impact Across Industries</h3>
                <p className="text-gray-300">Real metrics from our vibe coding AI implementations worldwide</p>
              </div>

              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-gray-400">AI Agents Deployed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">15K+</div>
                  <div className="text-gray-400">Users Empowered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">99.9%</div>
                  <div className="text-gray-400">Uptime Achieved</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
