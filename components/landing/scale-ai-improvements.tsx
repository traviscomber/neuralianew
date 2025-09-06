"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Target, Palette, Layout } from "lucide-react"

export function ScaleAIImprovements() {
  const improvements = [
    {
      icon: Palette,
      title: "Ultra-Minimal Color Palette",
      current: "Multiple accent colors (blue, purple, emerald)",
      scaleAI: "Primarily black/white with single strategic accent",
      recommendation: "Reduce to black (#000000), white (#FFFFFF), and one accent color (#0066FF)",
      impact: "Higher visual focus and professional credibility",
    },
    {
      icon: Layout,
      title: "Card Component Simplification",
      current: "Colored backgrounds with multiple visual elements",
      scaleAI: "White backgrounds with subtle borders only",
      recommendation: "Remove colored backgrounds, use white with border-gray-200",
      impact: "Cleaner, more professional appearance",
    },
    {
      icon: Target,
      title: "Typography Boldness",
      current: "text-7xl font-bold (good)",
      scaleAI: "text-8xl font-black with tighter tracking",
      recommendation: "Increase hero headline size and use font-black",
      impact: "Stronger visual hierarchy and impact",
    },
    {
      icon: Zap,
      title: "Content Density",
      current: "Good information architecture",
      scaleAI: "Even more generous whitespace",
      recommendation: "Increase vertical spacing between sections",
      impact: "Better readability and premium feel",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-black text-white border-0 text-lg px-6 py-2 font-semibold">
            Refinement Opportunities
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
            Achieving{" "}
            <span className="bg-gradient-to-r from-blue-600 to-black bg-clip-text text-transparent">
              Scale AI Level
            </span>{" "}
            Polish
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Specific improvements to match Scale AI's ultra-professional aesthetic while maintaining N3uralia's unique
            value proposition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {improvements.map((improvement, index) => (
            <Card
              key={index}
              className="bg-white border border-gray-200 shadow-sm rounded-2xl hover:shadow-md transition-shadow"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                    <improvement.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{improvement.title}</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">Current</span>
                    <p className="text-slate-700 mt-1">{improvement.current}</p>
                  </div>

                  <div>
                    <span className="text-sm font-semibold text-black uppercase tracking-wide">Scale AI</span>
                    <p className="text-slate-700 mt-1">{improvement.scaleAI}</p>
                  </div>

                  <div>
                    <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Recommendation</span>
                    <p className="text-slate-700 mt-1">{improvement.recommendation}</p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Expected Impact</span>
                    <p className="text-blue-700 mt-1 font-medium">{improvement.impact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Implementation Priority */}
        <Card className="bg-slate-50 border border-slate-200 rounded-2xl">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Implementation Priority</h3>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">High Priority</h4>
                <p className="text-slate-600 text-sm">Card simplification - biggest visual impact</p>
              </div>

              <div className="text-center">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Medium Priority</h4>
                <p className="text-slate-600 text-sm">Color palette reduction - professional credibility</p>
              </div>

              <div className="text-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Low Priority</h4>
                <p className="text-slate-600 text-sm">Typography and spacing refinements</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-lg">
                Implement Scale AI Refinements
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
