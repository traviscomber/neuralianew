"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Github } from "lucide-react"

const teamMembers = [
  {
    name: "Dr. Alex Chen",
    role: "Co-Founder & CEO",
    bio: "Former Principal Research Scientist at Google DeepMind, led the team that developed breakthrough neural architectures for strategic decision-making. PhD in Computer Science from Stanford, published 40+ papers on AI and neural networks.",
    avatar: "/placeholder.svg?height=120&width=120",
    background: "Google DeepMind, Stanford PhD",
    expertise: ["Neural Architecture", "Strategic AI", "Deep Learning"],
    social: {
      linkedin: "https://linkedin.com/in/alexchen",
      twitter: "https://twitter.com/alexchen_ai",
    },
  },
  {
    name: "Sarah Rodriguez",
    role: "Co-Founder & CTO",
    bio: "Former Senior Principal Engineer at Microsoft Azure AI, architected large-scale AI systems serving 100M+ users. Led the quantum-inspired algorithms research that powers our neural executives. MS Computer Science from MIT.",
    avatar: "/placeholder.svg?height=120&width=120",
    background: "Microsoft Azure AI, MIT MS",
    expertise: ["Quantum Computing", "Distributed Systems", "AI Infrastructure"],
    social: {
      linkedin: "https://linkedin.com/in/sarahrodriguez",
      github: "https://github.com/srodriguez",
    },
  },
  {
    name: "Marcus Kim",
    role: "Co-Founder & Chief AI Officer",
    bio: "Former Director of AI at Tesla Autopilot, specialized in real-time decision-making systems. Pioneered the executive decision pattern recognition algorithms. PhD in Machine Learning from Carnegie Mellon.",
    avatar: "/placeholder.svg?height=120&width=120",
    background: "Tesla Autopilot, Carnegie Mellon PhD",
    expertise: ["Autonomous Systems", "Real-time AI", "Pattern Recognition"],
    social: {
      linkedin: "https://linkedin.com/in/marcuskim",
      twitter: "https://twitter.com/marcus_ai",
    },
  },
  {
    name: "Dr. Jennifer Walsh",
    role: "VP of Product",
    bio: "Former Product Lead at OpenAI, managed the development of GPT-4 enterprise features. MBA from Wharton, extensive experience in AI product strategy and enterprise deployment. Expert in AI-human collaboration.",
    avatar: "/placeholder.svg?height=120&width=120",
    background: "OpenAI, Wharton MBA",
    expertise: ["AI Product Strategy", "Enterprise AI", "User Experience"],
    social: {
      linkedin: "https://linkedin.com/in/jenniferwalsh",
      twitter: "https://twitter.com/jen_ai_product",
    },
  },
]

const companyInfo = {
  founded: "2023",
  funding: "Series A - $25M",
  investors: ["Andreessen Horowitz", "Sequoia Capital", "Google Ventures"],
  employees: "45+ AI researchers and engineers",
  headquarters: "San Francisco, CA",
  mission: "To democratize executive-level AI intelligence for businesses worldwide",
}

export function TeamSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Meet the Neural AI Pioneers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team combines decades of experience from Google DeepMind, Microsoft, Tesla, and OpenAI to bring you the
            most advanced AI executives ever created.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <CardHeader className="text-center pb-4">
                <img
                  src={member.avatar || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 bg-gray-200"
                />
                <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
                <Badge className="bg-blue-100 text-blue-700 mb-4">{member.role}</Badge>
                <div className="text-sm text-gray-600 font-medium">{member.background}</div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">{member.bio}</p>

                {/* Expertise */}
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-900 mb-2">Expertise:</div>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      className="text-blue-600 hover:text-blue-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      className="text-blue-600 hover:text-blue-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      className="text-blue-600 hover:text-blue-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Info */}
        <Card className="max-w-4xl mx-auto border-2 border-blue-200 bg-white">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-4">About Neuralia</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Company Overview</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium">Founded:</span> {companyInfo.founded}
                  </div>
                  <div>
                    <span className="font-medium">Funding:</span> {companyInfo.funding}
                  </div>
                  <div>
                    <span className="font-medium">Team Size:</span> {companyInfo.employees}
                  </div>
                  <div>
                    <span className="font-medium">Headquarters:</span> {companyInfo.headquarters}
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Backed by Leading VCs</h4>
                <div className="space-y-2">
                  {companyInfo.investors.map((investor, index) => (
                    <Badge key={index} variant="outline" className="mr-2 mb-2">
                      {investor}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4">
                  <h5 className="font-medium text-gray-900 mb-2">Our Mission</h5>
                  <p className="text-sm text-gray-600 leading-relaxed">{companyInfo.mission}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t text-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Enterprise Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">99.9%</div>
                  <div className="text-gray-600">Uptime SLA</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">SOC 2</div>
                  <div className="text-gray-600">Certified</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
