"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle, ArrowRight } from "lucide-react"

export function ComparisonAnalysis() {
  const comparisons = [
    {
      category: "Typography & Hierarchy",
      scaleAI: {
        approach: "Extremely large, bold headlines (80px+) with perfect hierarchy",
        implementation: "System fonts, tight letter-spacing, excellent contrast",
        example: "text-8xl font-black tracking-tight",
      },
      ourImplementation: {
        approach: "Large headlines (text-7xl) with good hierarchy",
        implementation: "Good font weights, proper spacing",
        status: "good",
        improvement: "Could go even larger and bolder on hero headlines",
      },
    },
    {
      category: "Color Palette",
      scaleAI: {
        approach: "Primarily black/white with strategic blue accents",
        implementation: "Very minimal color usage, high contrast",
        example: "Black (#000), White (#FFF), Blue (#0066FF)",
      },
      ourImplementation: {
        approach: "Slate-based with blue/purple/emerald accents",
        implementation: "Clean but more colorful than Scale AI",
        status: "good",
        improvement: "Could be even more minimal - focus on black/white/single accent",
      },
    },
    {
      category: "Layout & Spacing",
      scaleAI: {
        approach: "Generous whitespace, perfect grid alignment",
        implementation: "Consistent 8px grid system, breathing room",
        example: "py-24, px-8, gap-16 consistently",
      },
      ourImplementation: {
        approach: "Good spacing with consistent patterns",
        implementation: "Proper grid usage, good whitespace",
        status: "excellent",
        improvement: "Matches Scale AI's approach well",
      },
    },
    {
      category: "Button Design",
      scaleAI: {
        approach: "Simple, high-contrast buttons with subtle shadows",
        implementation: "Black primary, white secondary, minimal styling",
        example: "bg-black text-white, clean hover states",
      },
      ourImplementation: {
        approach: "Slate-900 primary with clean styling",
        implementation: "Professional appearance with good hover states",
        status: "excellent",
        improvement: "Very close to Scale AI's approach",
      },
    },
    {
      category: "Card Components",
      scaleAI: {
        approach: "Subtle borders, minimal shadows, clean backgrounds",
        implementation: "border-gray-200, subtle shadow-sm",
        example: "Clean white cards with hairline borders",
      },
      ourImplementation: {
        approach: "Colored backgrounds with borders and shadows",
        implementation: "More visual variety than Scale AI",
        status: "needs-adjustment",
        improvement: "Should use white backgrounds with subtle borders only",
      },
    },
    {
      category: "Content Structure",
      scaleAI: {
        approach: "Clear value props, technical credibility, social proof",
        implementation: "Bullet points, stats, customer logos",
        example: "Simple lists, clean metrics display",
      },
      ourImplementation: {
        approach: "Good value props with stats and features",
        implementation: "Well-structured content hierarchy",
        status: "excellent",
        improvement: "Content structure matches Scale AI well",
      },
    },
    {
      category: "Visual Elements",
      scaleAI: {
        approach: "Minimal icons, clean illustrations, strategic imagery",
        implementation: "Lucide icons, simple graphics",
        example: "Small, consistent icons with purpose",
      },
      ourImplementation: {
        approach: "Good icon usage with consistent styling",
        implementation: "Lucide icons, proper sizing",
        status: "good",
        improvement: "Could be even more minimal",
      },
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent":
        return "bg-emerald-50 text-emerald-700 border-emerald-200"
      case "good":
        return "bg-blue-50 text-blue-700 border-blue-200"
      case "needs-adjustment":
        return "bg-orange-50 text-orange-700 border-orange-200"
      default:
        return "bg-slate-50 text-slate-700 border-slate-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "excellent":
        return <CheckCircle className="w-4 h-4 text-emerald-600" />
      case "good":
        return <CheckCircle className="w-4 h-4 text-blue-600" />
      case "needs-adjustment":
        return <AlertCircle className="w-4 h-4 text-orange-600" />
      default:
        return <AlertCircle className="w-4 h-4 text-slate-600" />
    }
  }

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-slate-100 text-slate-700 border-slate-200 text-lg px-6 py-2 font-semibold">
            Design Analysis
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
            N3uralia vs{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Scale AI</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Detailed comparison of our design implementation against Scale AI's proven aesthetic and functionality
            patterns.
          </p>
        </div>

        <div className="space-y-8">
          {comparisons.map((comparison, index) => (
            <Card key={index} className="bg-white border border-slate-200 shadow-sm rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-slate-900">{comparison.category}</h3>
                  <Badge className={`${getStatusColor(comparison.ourImplementation.status)} font-semibold border`}>
                    {getStatusIcon(comparison.ourImplementation.status)}
                    <span className="ml-2 capitalize">{comparison.ourImplementation.status.replace("-", " ")}</span>
                  </Badge>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Scale AI Approach */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-black rounded-full"></div>
                      <h4 className="font-bold text-slate-900">Scale AI Approach</h4>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Strategy</span>
                        <p className="text-slate-700 mt-1">{comparison.scaleAI.approach}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                          Implementation
                        </span>
                        <p className="text-slate-700 mt-1">{comparison.scaleAI.implementation}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Example</span>
                        <code className="block bg-slate-100 text-slate-800 p-2 rounded text-sm mt-1 font-mono">
                          {comparison.scaleAI.example}
                        </code>
                      </div>
                    </div>
                  </div>

                  {/* Our Implementation */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      <h4 className="font-bold text-slate-900">N3uralia Implementation</h4>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">Strategy</span>
                        <p className="text-slate-700 mt-1">{comparison.ourImplementation.approach}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                          Implementation
                        </span>
                        <p className="text-slate-700 mt-1">{comparison.ourImplementation.implementation}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                          Improvement Opportunity
                        </span>
                        <div className="flex items-start gap-2 mt-1">
                          <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                          <p className="text-slate-700">{comparison.ourImplementation.improvement}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary */}
        <Card className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Overall Assessment</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Excellent Match</h4>
                <p className="text-slate-600">
                  Layout, spacing, buttons, and content structure closely follow Scale AI patterns
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Good Implementation</h4>
                <p className="text-slate-600">
                  Typography and visual elements are well-executed with minor refinement opportunities
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <AlertCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Needs Refinement</h4>
                <p className="text-slate-600">
                  Card components could be more minimal to better match Scale AI's ultra-clean aesthetic
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
