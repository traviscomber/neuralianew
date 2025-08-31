"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  GraduationCap,
  ShoppingCart,
  Heart,
  Building,
  Users,
  MessageSquare,
  TrendingUp,
  Globe,
  Zap,
} from "lucide-react"

const useCases = [
  {
    icon: GraduationCap,
    title: "EcosueloLab - Career Coaching",
    description:
      "AI-powered career guidance that understands your professional vibe and helps you find the perfect career path.",
    features: ["Personalized career assessments", "Interview preparation", "Skill gap analysis", "Job market insights"],
    metrics: { users: "15,000+", success: "94%", placements: "2,300+" },
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Globe,
    title: "ParrotfyIA - Language Learning",
    description: "Conversational AI that adapts to your learning style and helps you master new languages naturally.",
    features: [
      "Adaptive conversation practice",
      "Cultural context learning",
      "Pronunciation coaching",
      "Progress tracking",
    ],
    metrics: { users: "28,000+", retention: "87%", fluency: "+65%" },
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: MessageSquare,
    title: "Customer Service Excellence",
    description: "Empathetic support AI that matches your brand's personality and resolves issues with genuine care.",
    features: ["24/7 multilingual support", "Emotion recognition", "Escalation management", "Brand voice consistency"],
    metrics: { resolution: "92%", satisfaction: "96%", response: "<30s" },
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Personal Shopper",
    description: "AI shopping assistant that understands your style and preferences to recommend perfect products.",
    features: ["Style profiling", "Personalized recommendations", "Size and fit guidance", "Trend insights"],
    metrics: { conversion: "+45%", satisfaction: "91%", returns: "-30%" },
    color: "from-orange-500 to-red-600",
  },
  {
    icon: Heart,
    title: "Mental Health Support",
    description: "Compassionate AI companion that provides emotional support and mental wellness guidance.",
    features: ["Mood tracking", "Coping strategies", "Crisis intervention", "Therapy preparation"],
    metrics: { engagement: "89%", improvement: "+78%", retention: "85%" },
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: Building,
    title: "Enterprise Solutions",
    description: "Custom AI agents for large organizations that maintain company culture and values.",
    features: ["Internal knowledge base", "Employee onboarding", "Process automation", "Compliance monitoring"],
    metrics: { efficiency: "+60%", satisfaction: "93%", adoption: "88%" },
    color: "from-indigo-500 to-blue-600",
  },
]

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8">
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
            Real-World Applications
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Vibe Coding in Action</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how our vibe coding approach transforms industries with AI that truly understands and connects with
            users on a human level.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-r ${useCase.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <useCase.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{useCase.title}</CardTitle>
                      <CardDescription className="text-base">{useCase.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {useCase.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Success Metrics
                      </h4>
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(useCase.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-lg font-bold text-primary">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-transparent" variant="outline">
                      Learn More
                    </Button>
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
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-blue-600/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Build Your Vibe-Coded AI?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Join thousands of businesses that have transformed their customer experience with AI that truly
                understands and connects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Start Building Now</Button>
                <Button variant="outline" size="lg">
                  Schedule Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
