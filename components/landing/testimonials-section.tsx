"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, CheckCircle, TrendingUp, Clock, Users } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function TestimonialsSection() {
  const { t } = useLanguage()

  const testimonials = [
    {
      name: t("testimonials.carlos.name"),
      role: t("testimonials.carlos.role"),
      text: t("testimonials.carlos.text"),
      project: t("testimonials.carlos.project"),
      delivered: t("testimonials.carlos.delivered"),
      rating: 5,
      technologies: ["OpenAI GPT-4", "WhatsApp API", "React", "Node.js", "PostgreSQL"],
    },
    {
      name: t("testimonials.maria.name"),
      role: t("testimonials.maria.role"),
      text: t("testimonials.maria.text"),
      project: t("testimonials.maria.project"),
      delivered: t("testimonials.maria.delivered"),
      rating: 5,
      technologies: ["AI Coaching", "LinkedIn API", "Gamification", "Analytics", "Mobile App"],
    },
    {
      name: t("testimonials.roberto.name"),
      role: t("testimonials.roberto.role"),
      text: t("testimonials.roberto.text"),
      project: t("testimonials.roberto.project"),
      delivered: t("testimonials.roberto.delivered"),
      rating: 5,
      technologies: ["SAP Integration", "ERP Systems", "Real-time Analytics", "Multi-language", "Enterprise API"],
    },
  ]

  const stats = [
    { value: "50+", label: t("testimonials.stats.projects"), icon: CheckCircle, color: "text-green-400" },
    { value: "95%", label: t("testimonials.stats.satisfaction"), icon: Users, color: "text-blue-400" },
    { value: "250%", label: t("testimonials.stats.roi"), icon: TrendingUp, color: "text-purple-400" },
    { value: "48h", label: t("testimonials.stats.setup"), icon: Clock, color: "text-emerald-400" },
  ]

  return (
    <section id="testimonials" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-green-600 text-white mb-4 px-4 py-2 text-sm font-semibold">
            <CheckCircle className="w-4 h-4 mr-2" />
            {t("testimonials.title")}
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">{t("testimonials.title")}</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">{t("testimonials.subtitle")}</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all duration-300"
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-300 mb-6 leading-relaxed">"{testimonial.text}"</p>

                {/* Author */}
                <div className="mb-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                </div>

                {/* Project Info */}
                <div className="mb-4">
                  <div className="text-sm font-medium text-blue-400">{testimonial.project}</div>
                  <div className="text-xs text-slate-500">{testimonial.delivered}</div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {testimonial.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs border-slate-700 text-slate-400">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-slate-900 rounded-xl">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
