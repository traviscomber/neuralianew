"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Github, MapPin, Users, TrendingUp, Award } from "lucide-react"

export function TeamSection() {
  const founders = [
    {
      name: "Dr. Alex Chen",
      role: "CEO & Co-Founder",
      background: "Former Google DeepMind Principal Researcher",
      education: "PhD Computer Science, Stanford University",
      expertise: "Neural Architecture, Quantum Computing, AI Safety",
      image: "AC",
      description:
        "Led breakthrough research in quantum-inspired neural networks at DeepMind. Published 47 papers on AI consciousness and decision-making algorithms.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Sarah Rodriguez",
      role: "CTO & Co-Founder",
      background: "Former Microsoft AI Platform Lead",
      education: "MS Computer Science, MIT",
      expertise: "Distributed Systems, MLOps, Enterprise AI",
      image: "SR",
      description:
        "Built Microsoft's enterprise AI infrastructure serving 100M+ users. Expert in scaling neural networks for business applications.",
      social: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Dr. Marcus Kim",
      role: "Chief AI Officer",
      background: "Former Tesla Autopilot Neural Networks Lead",
      education: "PhD Machine Learning, Carnegie Mellon",
      expertise: "Autonomous Systems, Real-time AI, Neural Optimization",
      image: "MK",
      description:
        "Developed Tesla's neural decision-making systems. Pioneer in real-time AI inference and autonomous agent behavior.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Jennifer Park",
      role: "Chief Business Officer",
      background: "Former OpenAI Business Development VP",
      education: "MBA, Wharton School",
      expertise: "AI Commercialization, Enterprise Sales, Strategic Partnerships",
      image: "JP",
      description:
        "Led OpenAI's enterprise partnerships and scaled revenue from $10M to $1B+. Expert in AI product-market fit and executive relationship building.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ]

  const companyStats = [
    { label: "Series A Funding", value: "$25M", icon: TrendingUp },
    { label: "Team Members", value: "47", icon: Users },
    { label: "Patents Filed", value: "23", icon: Award },
    { label: "Enterprise Clients", value: "500+", icon: Users },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Meet the Neural Pioneers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team combines decades of experience from the world's leading AI companies to bring you the future of
            executive intelligence.
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {companyStats.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.label} className="text-center border-0 shadow-md bg-white">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {founders.map((founder, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {founder.image}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">{founder.name}</CardTitle>
                    <CardDescription className="text-blue-600 font-medium">{founder.role}</CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="text-xs">
                    {founder.background}
                  </Badge>
                  <Badge variant="outline" className="text-xs ml-2">
                    {founder.education}
                  </Badge>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">{founder.description}</p>

                <div className="space-y-2">
                  <div className="text-sm font-medium text-gray-700">Expertise:</div>
                  <div className="text-sm text-gray-600">{founder.expertise}</div>
                </div>

                <div className="flex space-x-2 pt-2">
                  {founder.social.linkedin && (
                    <Button variant="outline" size="sm">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  )}
                  {founder.social.twitter && (
                    <Button variant="outline" size="sm">
                      <Twitter className="h-4 w-4" />
                    </Button>
                  )}
                  {founder.social.github && (
                    <Button variant="outline" size="sm">
                      <Github className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Info */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
          <CardContent className="p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg mb-6 text-blue-100">
                To democratize executive-level AI intelligence and empower every business with neural decision-making
                capabilities. We believe that advanced AI should augment human leadership, not replace it.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">2021</div>
                  <div className="text-blue-100">Founded in San Francisco</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">$25M</div>
                  <div className="text-blue-100">Series A led by Andreessen Horowitz</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">99.9%</div>
                  <div className="text-blue-100">Uptime SLA guarantee</div>
                </div>
              </div>

              <div className="flex items-center justify-center mt-6 text-blue-100">
                <MapPin className="mr-2 h-4 w-4" />
                <span>Headquarters: San Francisco, CA • Remote-first team across 12 countries</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
