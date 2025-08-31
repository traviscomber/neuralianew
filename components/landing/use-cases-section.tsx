"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Building2, ShoppingCart, GraduationCap, Heart, TrendingUp, Users } from "lucide-react"
import { motion } from "framer-motion"

const useCases = [
  {
    id: "enterprise",
    label: "Enterprise",
    icon: Building2,
    title: "Enterprise Automation",
    description: "Streamline complex business processes with AI-powered automation and vibe coding efficiency.",
    features: [
      "Automated workflow management",
      "Intelligent document processing",
      "Predictive analytics and forecasting",
      "Custom AI agent deployment",
    ],
    badge: "Most Popular",
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    icon: ShoppingCart,
    title: "Smart E-commerce Solutions",
    description:
      "Enhance customer experience and boost sales with AI-driven recommendations and vibe coding personalization.",
    features: [
      "Personalized product recommendations",
      "Intelligent customer support",
      "Dynamic pricing optimization",
      "Inventory management automation",
    ],
    badge: "High ROI",
  },
  {
    id: "education",
    label: "Education",
    icon: GraduationCap,
    title: "Educational AI Platforms",
    description: "Transform learning experiences with adaptive AI tutors and vibe coding educational methodologies.",
    features: [
      "Personalized learning paths",
      "Automated grading systems",
      "Student performance analytics",
      "Interactive AI tutoring",
    ],
    badge: "Innovation",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    icon: Heart,
    title: "Healthcare AI Solutions",
    description: "Improve patient outcomes with AI-assisted diagnostics and vibe coding healthcare innovations.",
    features: [
      "Medical image analysis",
      "Patient data management",
      "Treatment recommendation systems",
      "Healthcare workflow optimization",
    ],
    badge: "Critical",
  },
]

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Real-World Applications of <span className="gradient-text">Vibe Coding AI</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Discover how our vibe coding approach to AI is transforming industries and creating new possibilities for
            businesses worldwide.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="enterprise" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {useCases.map((useCase) => (
                <TabsTrigger key={useCase.id} value={useCase.id} className="flex items-center gap-2">
                  <useCase.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{useCase.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {useCases.map((useCase) => (
              <TabsContent key={useCase.id} value={useCase.id}>
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <useCase.icon className="h-8 w-8 text-primary" />
                      <Badge variant="secondary">{useCase.badge}</Badge>
                    </div>
                    <CardTitle className="text-2xl">{useCase.title}</CardTitle>
                    <CardDescription className="text-lg">{useCase.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {useCase.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card className="text-center card-hover">
            <CardHeader>
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle>95% Efficiency Gain</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Average improvement in operational efficiency using our vibe coding AI solutions
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center card-hover">
            <CardHeader>
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle>10,000+ Users</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>Businesses worldwide trust our vibe coding approach to AI automation</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center card-hover">
            <CardHeader>
              <Building2 className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle>500+ Enterprises</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Large organizations have adopted our vibe coding AI solutions successfully
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
