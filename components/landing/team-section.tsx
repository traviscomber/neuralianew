"use client"

import { Globe, Users, Bot, Code } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TeamSection() {
  const teamStats = [
    {
      icon: Users,
      title: "Ingenieros Reales",
      description: "Desarrolladores especializados en IA empresarial",
      locations: ["Chile", "Rusia", "Vietnam", "Singapur"],
    },
    {
      icon: Bot,
      title: "Sistemas IA",
      description: "Agentes especializados trabajando 24/7",
      locations: ["Neural Networks", "LLMs", "Decision Trees", "NLP"],
    },
  ]

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestro Equipo</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ingenieros y desarrolladores reales + IA (principalmente) de todo el mundo
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {teamStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{stat.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{stat.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {stat.locations.map((location, locationIndex) => (
                      <Badge key={locationIndex} variant="outline" className="text-sm">
                        {location}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Global Presence */}
        <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200">
          <CardContent className="p-8 text-center">
            <Globe className="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Equipo Global</h3>
            <p className="text-gray-600 mb-4">
              Combinamos talento humano internacional con sistemas de IA especializados para crear soluciones
              empresariales únicas
            </p>
            <div className="flex justify-center items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4" />
                <span>Full Stack</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bot className="w-4 h-4" />
                <span>IA Empresarial</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>24/7 Global</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
