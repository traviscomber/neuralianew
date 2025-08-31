"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sprout, GraduationCap, Languages, Building2, ArrowRight, CheckCircle } from "lucide-react"

export function UseCasesSection() {
  const products = [
    {
      icon: Sprout,
      title: "EcosueloLab",
      subtitle: "Soil Analysis AI",
      description: "AI that helps farmers grow better crops",
      results: ["35% better yields", "40% less fertilizer", "500+ farmers helped"],
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: GraduationCap,
      title: "Career Coach",
      subtitle: "Professional AI Guide",
      description: "AI coach for career transitions and growth",
      results: ["85% success rate", "10K+ professionals", "60% faster job search"],
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: Languages,
      title: "ParrotfyIA",
      subtitle: "Language Learning AI",
      description: "AI tutor that makes you fluent faster",
      results: ["3x faster learning", "25K+ students", "8 languages supported"],
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: Building2,
      title: "Enterprise AI",
      subtitle: "Custom Business Solutions",
      description: "AI agents built for your specific business",
      results: ["70% faster responses", "200+ companies", "300% ROI average"],
      gradient: "from-orange-500 to-red-600",
    },
  ]

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
            <Building2 className="w-3 h-3 mr-1" />
            Our AI Agents
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            <span className="gradient-text">Real Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">AI agents that solve real problems for real people</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <Card key={index} className="feature-card border-0 shadow-xl overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-4 bg-gradient-to-r ${product.gradient} rounded-xl shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge variant="secondary">Neuralia</Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold">{product.title}</CardTitle>
                  <p className="text-lg text-gray-600">{product.subtitle}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-gray-700 text-lg">{product.description}</p>

                  <div className="space-y-2">
                    {product.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium">{result}</span>
                      </div>
                    ))}
                  </div>

                  <Button className={`w-full bg-gradient-to-r ${product.gradient}`}>
                    Try {product.title}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
