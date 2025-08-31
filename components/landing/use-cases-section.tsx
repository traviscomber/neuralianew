"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, ShoppingCart, Users, GraduationCap, Building, Heart, ArrowRight, Sparkles } from "lucide-react"

const useCases = [
  {
    id: "customer-service",
    title: "Customer Service Revolution",
    description: "Transform customer support with AI agents that understand context and emotion through vibe coding",
    icon: <MessageSquare className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-500",
    metrics: ["95% Customer Satisfaction", "60% Faster Response Time", "24/7 Availability"],
    features: [
      "Emotional intelligence through vibe coding",
      "Multi-language support",
      "Seamless human handoff",
      "Real-time sentiment analysis",
    ],
  },
  {
    id: "sales-automation",
    title: "Sales & Lead Generation",
    description: "Boost sales with AI that understands buyer psychology and adapts using vibe coding insights",
    icon: <ShoppingCart className="h-6 w-6" />,
    color: "from-green-500 to-emerald-500",
    metrics: ["40% Increase in Conversions", "3x More Qualified Leads", "50% Faster Sales Cycle"],
    features: [
      "Personalized vibe coding interactions",
      "Lead scoring and qualification",
      "Automated follow-up sequences",
      "CRM integration",
    ],
  },
  {
    id: "education",
    title: "Educational Excellence",
    description: "Personalized learning experiences powered by vibe coding for adaptive education",
    icon: <GraduationCap className="h-6 w-6" />,
    color: "from-purple-500 to-pink-500",
    metrics: ["85% Learning Improvement", "70% Higher Engagement", "Personalized Paths"],
    features: [
      "Adaptive vibe coding curriculum",
      "Real-time progress tracking",
      "Personalized learning paths",
      "Interactive AI tutoring",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare Support",
    description: "Compassionate AI assistance for healthcare with empathetic vibe coding technology",
    icon: <Heart className="h-6 w-6" />,
    color: "from-red-500 to-pink-500",
    metrics: ["90% Patient Satisfaction", "50% Reduced Wait Times", "24/7 Support"],
    features: [
      "Empathetic vibe coding responses",
      "Symptom assessment",
      "Appointment scheduling",
      "Health monitoring integration",
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise Automation",
    description: "Streamline business processes with intelligent vibe coding automation solutions",
    icon: <Building className="h-6 w-6" />,
    color: "from-orange-500 to-red-500",
    metrics: ["60% Process Efficiency", "80% Cost Reduction", "99.9% Uptime"],
    features: [
      "Workflow vibe coding optimization",
      "Document processing",
      "Data analysis and insights",
      "System integrations",
    ],
  },
  {
    id: "hr-recruitment",
    title: "HR & Recruitment",
    description: "Revolutionize hiring with AI that understands candidate potential through vibe coding",
    icon: <Users className="h-6 w-6" />,
    color: "from-indigo-500 to-purple-500",
    metrics: ["75% Faster Hiring", "90% Better Matches", "Reduced Bias"],
    features: [
      "Candidate vibe coding assessment",
      "Automated screening",
      "Interview scheduling",
      "Performance prediction",
    ],
  },
]

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-24 px-4 sm:px-6 lg:px-8">
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
            Vibe Coding Applications
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Real-World <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how businesses across industries are transforming their operations with Neuralia's vibe coding AI
            solutions and achieving remarkable results.
          </p>
        </motion.div>

        <Tabs defaultValue="customer-service" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-8">
            {useCases.map((useCase) => (
              <TabsTrigger key={useCase.id} value={useCase.id} className="text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  {useCase.icon}
                  <span className="hidden sm:inline">{useCase.title.split(" ")[0]}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {useCases.map((useCase, index) => (
            <TabsContent key={useCase.id} value={useCase.id}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card className="overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-xl">
                  <div className={`h-2 bg-gradient-to-r ${useCase.color}`} />

                  <div className="grid lg:grid-cols-2 gap-8 p-8">
                    {/* Content */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${useCase.color} text-white`}>
                          {useCase.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{useCase.title}</h3>
                          <p className="text-muted-foreground">{useCase.description}</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Key Features</h4>
                        <ul className="space-y-2">
                          {useCase.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${useCase.color}`} />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button className={`bg-gradient-to-r ${useCase.color} text-white hover:opacity-90 group`}>
                        Learn More About This Solution
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>

                    {/* Metrics */}
                    <div className="space-y-6">
                      <h4 className="text-lg font-semibold">Success Metrics</h4>
                      <div className="grid gap-4">
                        {useCase.metrics.map((metric, idx) => (
                          <Card key={idx} className="p-4 bg-muted/50">
                            <div className="text-2xl font-bold text-primary mb-1">{metric.split(" ")[0]}</div>
                            <div className="text-sm text-muted-foreground">{metric.split(" ").slice(1).join(" ")}</div>
                          </Card>
                        ))}
                      </div>

                      <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">Vibe Coding Advantage</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Our vibe coding technology enables AI systems to understand context, emotion, and nuance,
                          delivering more human-like and effective interactions.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
