"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Zap, MessageSquare, Users, TrendingUp, Shield, Sparkles, Heart, Target } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Vibe Intelligence",
    description: "AI that understands context, emotion, and personality to create authentic interactions",
    badge: "Core Feature",
  },
  {
    icon: Sparkles,
    title: "Natural Conversations",
    description: "Chat experiences that feel genuinely human with personality-driven responses",
    badge: "Popular",
  },
  {
    icon: Heart,
    title: "Empathetic AI",
    description: "Built-in emotional intelligence that responds with care and understanding",
    badge: "Unique",
  },
  {
    icon: Target,
    title: "Brand Alignment",
    description: "AI agents that perfectly match your brand's voice, tone, and values",
    badge: "Essential",
  },
  {
    icon: Users,
    title: "Multi-Language Support",
    description: "Seamless conversations in multiple languages with cultural awareness",
    badge: "Global",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Enterprise-grade security with complete data privacy and compliance",
    badge: "Secure",
  },
  {
    icon: TrendingUp,
    title: "Analytics & Insights",
    description: "Deep insights into user interactions and AI performance metrics",
    badge: "Data-Driven",
  },
  {
    icon: Zap,
    title: "Instant Deployment",
    description: "Deploy your vibe-coded AI agents in minutes, not months",
    badge: "Fast",
  },
  {
    icon: MessageSquare,
    title: "Omnichannel Ready",
    description: "Works across web, mobile, WhatsApp, and all major platforms",
    badge: "Versatile",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Vibe Coding Features
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">AI That Understands Your Vibe</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the next generation of AI development with features designed for authentic, human-centered
            interactions that feel natural and engaging.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
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
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-blue-600/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">The Vibe Coding Difference</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Traditional AI focuses on functionality. Vibe coding focuses on connection. Our approach creates AI that
                doesn't just work—it resonates.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">96%</div>
                  <div className="text-sm text-muted-foreground">User Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3x</div>
                  <div className="text-sm text-muted-foreground">Engagement Increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                  <div className="text-sm text-muted-foreground">Happy Users</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
