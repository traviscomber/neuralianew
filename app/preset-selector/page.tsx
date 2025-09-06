"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Target,
  Zap,
  ShoppingCart,
  Building2,
  GraduationCap,
  Heart,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Activity,
  ArrowRight,
  Compass as Compare,
  Download,
  Settings,
} from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface IndustryPreset {
  id: string
  name: string
  description: string
  industry: string
  businessType: string
  icon: React.ReactNode
  color: string
  thresholds: Record<string, number>
  userSegments: string[]
  businessContext: string
  benefits: string[]
  useCases: string[]
  expectedImprovements: {
    performance: number
    conversion: number
    revenue: number
    userExperience: number
  }
  implementationComplexity: "low" | "medium" | "high"
  timeToValue: string
  riskLevel: "low" | "medium" | "high"
}

interface ComparisonMetric {
  name: string
  current: number
  preset: number
  unit: string
  impact: "positive" | "negative" | "neutral"
  importance: "high" | "medium" | "low"
}

export default function PresetSelectorPage() {
  const [industryPresets, setIndustryPresets] = useState<IndustryPreset[]>([])
  const [selectedPreset, setSelectedPreset] = useState<IndustryPreset | null>(null)
  const [currentThresholds, setCurrentThresholds] = useState<Record<string, number>>({})
  const [comparisonMetrics, setComparisonMetrics] = useState<ComparisonMetric[]>([])
  const [selectedIndustry, setSelectedIndustry] = useState("all")
  const [selectedComplexity, setSelectedComplexity] = useState("all")
  const [isApplying, setIsApplying] = useState(false)
  const [showComparison, setShowComparison] = useState(false)

  useEffect(() => {
    loadIndustryPresets()
    loadCurrentThresholds()
  }, [])

  useEffect(() => {
    if (selectedPreset) {
      generateComparisonMetrics()
    }
  }, [selectedPreset, currentThresholds])

  const loadIndustryPresets = () => {
    const presets: IndustryPreset[] = [
      {
        id: "tech-saas-aggressive",
        name: "SaaS High Performance",
        description: "Aggressive performance thresholds for competitive SaaS platforms",
        industry: "technology",
        businessType: "saas",
        icon: <Zap className="w-6 h-6" />,
        color: "bg-blue-500",
        thresholds: {
          lcp: 2000,
          fcp: 1200,
          cls: 0.05,
          fid: 80,
          bounceRate: 25,
          conversionRate: 8.5,
          wcagAA: 95,
          mobileSpeed: 85,
          errorRate: 1.0,
          sessionDuration: 180,
          apiResponseTime: 200,
          uptime: 99.9,
        },
        userSegments: ["enterprise", "power-users"],
        businessContext: "High-value customers expect premium performance with zero tolerance for delays",
        benefits: [
          "Superior user experience drives customer retention",
          "Competitive advantage in performance-sensitive markets",
          "Higher conversion rates from enterprise prospects",
          "Reduced churn from performance-related issues",
        ],
        useCases: [
          "Enterprise SaaS platforms",
          "Developer tools and IDEs",
          "Real-time collaboration software",
          "High-frequency trading platforms",
        ],
        expectedImprovements: {
          performance: 35,
          conversion: 22,
          revenue: 18,
          userExperience: 40,
        },
        implementationComplexity: "high",
        timeToValue: "2-3 weeks",
        riskLevel: "medium",
      },
      {
        id: "tech-saas-balanced",
        name: "SaaS Balanced Growth",
        description: "Balanced thresholds for sustainable SaaS growth",
        industry: "technology",
        businessType: "saas",
        icon: <Target className="w-6 h-6" />,
        color: "bg-green-500",
        thresholds: {
          lcp: 2500,
          fcp: 1500,
          cls: 0.1,
          fid: 100,
          bounceRate: 35,
          conversionRate: 5.5,
          wcagAA: 90,
          mobileSpeed: 80,
          errorRate: 1.5,
          sessionDuration: 150,
          apiResponseTime: 300,
          uptime: 99.5,
        },
        userSegments: ["general", "small-business"],
        businessContext: "Balanced approach optimizing for growth while maintaining operational efficiency",
        benefits: [
          "Sustainable performance improvements",
          "Cost-effective optimization strategy",
          "Broad market appeal and accessibility",
          "Manageable implementation complexity",
        ],
        useCases: [
          "Growing SaaS startups",
          "B2B productivity tools",
          "Project management platforms",
          "CRM and marketing automation",
        ],
        expectedImprovements: {
          performance: 25,
          conversion: 15,
          revenue: 12,
          userExperience: 28,
        },
        implementationComplexity: "medium",
        timeToValue: "1-2 weeks",
        riskLevel: "low",
      },
      {
        id: "ecommerce-conversion",
        name: "E-commerce Conversion",
        description: "Conversion-optimized thresholds for online retail",
        industry: "retail",
        businessType: "ecommerce",
        icon: <ShoppingCart className="w-6 h-6" />,
        color: "bg-purple-500",
        thresholds: {
          lcp: 2200,
          fcp: 1300,
          cls: 0.08,
          fid: 90,
          bounceRate: 30,
          conversionRate: 12,
          wcagAA: 92,
          mobileSpeed: 88,
          errorRate: 1.2,
          sessionDuration: 240,
          checkoutTime: 180,
          cartAbandonmentRate: 65,
        },
        userSegments: ["shoppers", "mobile-users"],
        businessContext: "Every millisecond impacts purchase decisions and revenue generation",
        benefits: [
          "Maximized conversion rates and revenue",
          "Reduced cart abandonment",
          "Enhanced mobile shopping experience",
          "Improved customer lifetime value",
        ],
        useCases: [
          "Online retail stores",
          "Fashion and lifestyle brands",
          "Electronics marketplaces",
          "Subscription commerce",
        ],
        expectedImprovements: {
          performance: 30,
          conversion: 28,
          revenue: 25,
          userExperience: 32,
        },
        implementationComplexity: "medium",
        timeToValue: "1-2 weeks",
        riskLevel: "low",
      },
      {
        id: "enterprise-conservative",
        name: "Enterprise Reliability",
        description: "Conservative thresholds prioritizing stability and compliance",
        industry: "enterprise",
        businessType: "b2b",
        icon: <Building2 className="w-6 h-6" />,
        color: "bg-slate-600",
        thresholds: {
          lcp: 3000,
          fcp: 1800,
          cls: 0.15,
          fid: 120,
          bounceRate: 40,
          conversionRate: 3.5,
          wcagAA: 98,
          mobileSpeed: 75,
          errorRate: 0.5,
          sessionDuration: 380,
          securityScore: 95,
          complianceScore: 98,
        },
        userSegments: ["enterprise", "decision-makers"],
        businessContext: "Stability, compliance, and reliability take precedence over aggressive optimization",
        benefits: [
          "Maximum system reliability and uptime",
          "Full compliance with enterprise standards",
          "Reduced risk of performance degradation",
          "Enhanced security and data protection",
        ],
        useCases: [
          "Enterprise resource planning",
          "Financial management systems",
          "Healthcare information systems",
          "Government and public sector",
        ],
        expectedImprovements: {
          performance: 15,
          conversion: 8,
          revenue: 10,
          userExperience: 20,
        },
        implementationComplexity: "low",
        timeToValue: "3-4 weeks",
        riskLevel: "low",
      },
      {
        id: "finance-security",
        name: "Financial Services",
        description: "Security-first thresholds for financial applications",
        industry: "finance",
        businessType: "fintech",
        icon: <DollarSign className="w-6 h-6" />,
        color: "bg-emerald-600",
        thresholds: {
          lcp: 2800,
          fcp: 1600,
          cls: 0.12,
          fid: 100,
          bounceRate: 35,
          conversionRate: 4.5,
          wcagAA: 98,
          mobileSpeed: 78,
          errorRate: 0.8,
          sessionDuration: 320,
          securityScore: 98,
          fraudDetectionRate: 99.5,
        },
        userSegments: ["investors", "financial-advisors"],
        businessContext: "Security, compliance, and trust are paramount in financial services",
        benefits: [
          "Enhanced security and fraud protection",
          "Regulatory compliance assurance",
          "Increased user trust and confidence",
          "Reduced financial and reputational risk",
        ],
        useCases: [
          "Banking and investment platforms",
          "Payment processing systems",
          "Insurance applications",
          "Cryptocurrency exchanges",
        ],
        expectedImprovements: {
          performance: 20,
          conversion: 12,
          revenue: 15,
          userExperience: 25,
        },
        implementationComplexity: "high",
        timeToValue: "4-6 weeks",
        riskLevel: "medium",
      },
      {
        id: "healthcare-accessibility",
        name: "Healthcare Accessibility",
        description: "Accessibility-focused thresholds for healthcare applications",
        industry: "healthcare",
        businessType: "healthtech",
        icon: <Heart className="w-6 h-6" />,
        color: "bg-red-500",
        thresholds: {
          lcp: 3000,
          fcp: 1800,
          cls: 0.15,
          fid: 120,
          bounceRate: 40,
          conversionRate: 3.2,
          wcagAA: 98,
          mobileSpeed: 75,
          errorRate: 0.5,
          sessionDuration: 280,
          accessibilityScore: 98,
          dataPrivacyScore: 99,
        },
        userSegments: ["patients", "healthcare-providers"],
        businessContext: "Accessibility, privacy, and reliability are critical for healthcare applications",
        benefits: [
          "Maximum accessibility for all users",
          "HIPAA and privacy compliance",
          "Enhanced patient safety and care",
          "Reduced liability and regulatory risk",
        ],
        useCases: [
          "Electronic health records",
          "Telemedicine platforms",
          "Patient portals",
          "Medical device interfaces",
        ],
        expectedImprovements: {
          performance: 18,
          conversion: 10,
          revenue: 8,
          userExperience: 35,
        },
        implementationComplexity: "medium",
        timeToValue: "3-5 weeks",
        riskLevel: "low",
      },
      {
        id: "education-engagement",
        name: "Education Engagement",
        description: "Engagement-optimized thresholds for educational platforms",
        industry: "education",
        businessType: "edtech",
        icon: <GraduationCap className="w-6 h-6" />,
        color: "bg-indigo-500",
        thresholds: {
          lcp: 2600,
          fcp: 1500,
          cls: 0.1,
          fid: 95,
          bounceRate: 32,
          conversionRate: 5.8,
          wcagAA: 95,
          mobileSpeed: 80,
          errorRate: 1.0,
          sessionDuration: 420,
          engagementRate: 75,
          completionRate: 65,
        },
        userSegments: ["students", "educators"],
        businessContext: "Engagement and accessibility drive learning outcomes and platform success",
        benefits: [
          "Increased student engagement and retention",
          "Better learning outcomes and completion rates",
          "Enhanced accessibility for diverse learners",
          "Improved educator satisfaction and adoption",
        ],
        useCases: [
          "Learning management systems",
          "Online course platforms",
          "Educational games and simulations",
          "Virtual classroom tools",
        ],
        expectedImprovements: {
          performance: 22,
          conversion: 18,
          revenue: 14,
          userExperience: 30,
        },
        implementationComplexity: "medium",
        timeToValue: "2-3 weeks",
        riskLevel: "low",
      },
    ]
    setIndustryPresets(presets)
  }

  const loadCurrentThresholds = () => {
    // Simulate current system thresholds
    const current = {
      lcp: 3200,
      fcp: 2000,
      cls: 0.18,
      fid: 150,
      bounceRate: 45,
      conversionRate: 4.2,
      wcagAA: 85,
      mobileSpeed: 72,
      errorRate: 2.5,
      sessionDuration: 120,
      apiResponseTime: 450,
      uptime: 99.2,
    }
    setCurrentThresholds(current)
  }

  const generateComparisonMetrics = () => {
    if (!selectedPreset) return

    const metrics: ComparisonMetric[] = [
      {
        name: "Largest Contentful Paint",
        current: currentThresholds.lcp || 3200,
        preset: selectedPreset.thresholds.lcp,
        unit: "ms",
        impact: selectedPreset.thresholds.lcp < (currentThresholds.lcp || 3200) ? "positive" : "negative",
        importance: "high",
      },
      {
        name: "First Contentful Paint",
        current: currentThresholds.fcp || 2000,
        preset: selectedPreset.thresholds.fcp,
        unit: "ms",
        impact: selectedPreset.thresholds.fcp < (currentThresholds.fcp || 2000) ? "positive" : "negative",
        importance: "high",
      },
      {
        name: "Cumulative Layout Shift",
        current: currentThresholds.cls || 0.18,
        preset: selectedPreset.thresholds.cls,
        unit: "",
        impact: selectedPreset.thresholds.cls < (currentThresholds.cls || 0.18) ? "positive" : "negative",
        importance: "medium",
      },
      {
        name: "First Input Delay",
        current: currentThresholds.fid || 150,
        preset: selectedPreset.thresholds.fid,
        unit: "ms",
        impact: selectedPreset.thresholds.fid < (currentThresholds.fid || 150) ? "positive" : "negative",
        importance: "medium",
      },
      {
        name: "Bounce Rate",
        current: currentThresholds.bounceRate || 45,
        preset: selectedPreset.thresholds.bounceRate,
        unit: "%",
        impact: selectedPreset.thresholds.bounceRate < (currentThresholds.bounceRate || 45) ? "positive" : "negative",
        importance: "high",
      },
      {
        name: "Conversion Rate",
        current: currentThresholds.conversionRate || 4.2,
        preset: selectedPreset.thresholds.conversionRate,
        unit: "%",
        impact:
          selectedPreset.thresholds.conversionRate > (currentThresholds.conversionRate || 4.2)
            ? "positive"
            : "negative",
        importance: "high",
      },
      {
        name: "WCAG AA Compliance",
        current: currentThresholds.wcagAA || 85,
        preset: selectedPreset.thresholds.wcagAA,
        unit: "%",
        impact: selectedPreset.thresholds.wcagAA > (currentThresholds.wcagAA || 85) ? "positive" : "negative",
        importance: "medium",
      },
      {
        name: "Mobile Speed Score",
        current: currentThresholds.mobileSpeed || 72,
        preset: selectedPreset.thresholds.mobileSpeed,
        unit: "",
        impact: selectedPreset.thresholds.mobileSpeed > (currentThresholds.mobileSpeed || 72) ? "positive" : "negative",
        importance: "high",
      },
    ]

    setComparisonMetrics(metrics)
  }

  const applyPreset = async () => {
    if (!selectedPreset) return

    setIsApplying(true)

    // Simulate applying the preset
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Update current thresholds to match the preset
    setCurrentThresholds(selectedPreset.thresholds)

    setIsApplying(false)

    toast({
      title: "Preset Applied Successfully",
      description: `${selectedPreset.name} thresholds have been applied to your alert system.`,
    })
  }

  const exportPresetConfig = () => {
    if (!selectedPreset) return

    const config = {
      preset: selectedPreset,
      appliedAt: new Date().toISOString(),
      previousThresholds: currentThresholds,
      comparisonMetrics,
    }

    const blob = new Blob([JSON.stringify(config, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${selectedPreset.id}-preset-config.json`
    a.click()
    URL.revokeObjectURL(url)

    toast({
      title: "Configuration Exported",
      description: "Preset configuration has been exported successfully.",
    })
  }

  const getFilteredPresets = () => {
    let filtered = industryPresets

    if (selectedIndustry !== "all") {
      filtered = filtered.filter((preset) => preset.industry === selectedIndustry)
    }

    if (selectedComplexity !== "all") {
      filtered = filtered.filter((preset) => preset.implementationComplexity === selectedComplexity)
    }

    return filtered
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "positive":
        return "text-green-600"
      case "negative":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  const getImpactIcon = (impact: string) => {
    switch (impact) {
      case "positive":
        return <TrendingUp className="w-4 h-4 text-green-600" />
      case "negative":
        return <AlertTriangle className="w-4 h-4 text-red-600" />
      default:
        return <Activity className="w-4 h-4 text-gray-600" />
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "low":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "medium":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "high":
        return "bg-orange-100 text-orange-800 border-orange-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 flex items-center">
                <Target className="w-8 h-8 mr-3 text-blue-600" />
                Industry Preset Selector
              </h1>
              <p className="text-slate-600 mt-2">
                Select and apply industry-specific threshold presets optimized for your business type
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {selectedPreset && (
                <Button variant="outline" onClick={exportPresetConfig}>
                  <Download className="w-4 h-4 mr-2" />
                  Export Config
                </Button>
              )}
              <Button onClick={() => setShowComparison(!showComparison)} variant="outline">
                <Compare className="w-4 h-4 mr-2" />
                {showComparison ? "Hide" : "Show"} Comparison
              </Button>
            </div>
          </div>

          {/* Filters */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Filter Presets</CardTitle>
              <CardDescription>Narrow down presets based on your requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="industry">Industry</Label>
                  <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Industries</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="retail">Retail/E-commerce</SelectItem>
                      <SelectItem value="finance">Financial Services</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="enterprise">Enterprise</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="complexity">Implementation Complexity</Label>
                  <Select value={selectedComplexity} onValueChange={setSelectedComplexity}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Complexity Levels</SelectItem>
                      <SelectItem value="low">Low Complexity</SelectItem>
                      <SelectItem value="medium">Medium Complexity</SelectItem>
                      <SelectItem value="high">High Complexity</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <div className="text-sm text-slate-600">
                    Showing {getFilteredPresets().length} of {industryPresets.length} presets
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Preset Selection */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Available Presets</CardTitle>
                  <CardDescription>Choose the preset that best matches your business requirements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {getFilteredPresets().map((preset) => (
                      <div
                        key={preset.id}
                        className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                          selectedPreset?.id === preset.id
                            ? "border-blue-500 bg-blue-50"
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                        onClick={() => setSelectedPreset(preset)}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className={`p-3 rounded-lg ${preset.color} text-white`}>{preset.icon}</div>
                            <div>
                              <h3 className="font-semibold text-slate-900 text-lg">{preset.name}</h3>
                              <p className="text-slate-600 mt-1">{preset.description}</p>
                              <div className="flex items-center space-x-2 mt-2">
                                <Badge variant="outline">{preset.industry}</Badge>
                                <Badge variant="outline">{preset.businessType}</Badge>
                                <Badge className={getRiskColor(preset.riskLevel)}>{preset.riskLevel} risk</Badge>
                                <Badge className={getComplexityColor(preset.implementationComplexity)}>
                                  {preset.implementationComplexity} complexity
                                </Badge>
                              </div>
                            </div>
                          </div>
                          {selectedPreset?.id === preset.id && <CheckCircle className="w-6 h-6 text-blue-600" />}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label className="text-sm font-medium text-slate-700">Expected Improvements</Label>
                            <div className="space-y-2 mt-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-600">Performance:</span>
                                <span className="font-medium text-green-600">
                                  +{preset.expectedImprovements.performance}%
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-600">Conversion:</span>
                                <span className="font-medium text-green-600">
                                  +{preset.expectedImprovements.conversion}%
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-600">Revenue:</span>
                                <span className="font-medium text-green-600">
                                  +{preset.expectedImprovements.revenue}%
                                </span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-600">User Experience:</span>
                                <span className="font-medium text-green-600">
                                  +{preset.expectedImprovements.userExperience}%
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <Label className="text-sm font-medium text-slate-700">Implementation Details</Label>
                            <div className="space-y-2 mt-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-600">Time to Value:</span>
                                <span className="font-medium">{preset.timeToValue}</span>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-600">Target Segments:</span>
                                <div className="flex space-x-1">
                                  {preset.userSegments.slice(0, 2).map((segment) => (
                                    <Badge key={segment} variant="secondary" className="text-xs">
                                      {segment}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-slate-200">
                          <p className="text-sm text-slate-600">{preset.businessContext}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Selected Preset Details */}
            <div className="space-y-6">
              {selectedPreset ? (
                <>
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        {selectedPreset.icon}
                        <span>{selectedPreset.name}</span>
                      </CardTitle>
                      <CardDescription>{selectedPreset.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <Label className="text-sm font-medium text-slate-700">Key Benefits</Label>
                          <ul className="mt-2 space-y-1">
                            {selectedPreset.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-slate-600">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Separator />

                        <div>
                          <Label className="text-sm font-medium text-slate-700">Use Cases</Label>
                          <ul className="mt-2 space-y-1">
                            {selectedPreset.useCases.map((useCase, index) => (
                              <li key={index} className="flex items-start space-x-2">
                                <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-slate-600">{useCase}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Separator />

                        <div className="space-y-3">
                          <Button onClick={applyPreset} disabled={isApplying} className="w-full" size="lg">
                            {isApplying ? (
                              <>
                                <Settings className="w-4 h-4 mr-2 animate-spin" />
                                Applying Preset...
                              </>
                            ) : (
                              <>
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Apply This Preset
                              </>
                            )}
                          </Button>
                          <Button variant="outline" onClick={exportPresetConfig} className="w-full bg-transparent">
                            <Download className="w-4 h-4 mr-2" />
                            Export Configuration
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Threshold Preview */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Threshold Preview</CardTitle>
                      <CardDescription>Key thresholds that will be applied</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {Object.entries(selectedPreset.thresholds)
                          .slice(0, 8)
                          .map(([metric, value]) => (
                            <div key={metric} className="flex items-center justify-between">
                              <span className="text-sm text-slate-600 capitalize">
                                {metric.replace(/([A-Z])/g, " $1").trim()}:
                              </span>
                              <span className="font-medium">{value}</span>
                            </div>
                          ))}
                        {Object.keys(selectedPreset.thresholds).length > 8 && (
                          <div className="text-center">
                            <Badge variant="secondary">
                              +{Object.keys(selectedPreset.thresholds).length - 8} more thresholds
                            </Badge>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Target className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                    <h3 className="font-semibold text-slate-900 mb-2">Select a Preset</h3>
                    <p className="text-slate-600">
                      Choose a preset from the list to see detailed information and apply it to your system.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Comparison View */}
          {showComparison && selectedPreset && (
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Threshold Comparison</CardTitle>
                <CardDescription>Compare your current thresholds with the selected preset</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {comparisonMetrics.map((metric) => (
                    <div key={metric.name} className="p-4 border border-slate-200 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          {getImpactIcon(metric.impact)}
                          <span className="font-medium text-slate-900">{metric.name}</span>
                          <Badge
                            className={
                              metric.importance === "high"
                                ? "bg-red-100 text-red-800 border-red-200"
                                : metric.importance === "medium"
                                  ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                                  : "bg-blue-100 text-blue-800 border-blue-200"
                            }
                          >
                            {metric.importance} priority
                          </Badge>
                        </div>
                        <div className={`font-semibold ${getImpactColor(metric.impact)}`}>
                          {metric.impact === "positive" ? "Improvement" : "Regression"}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <Label className="text-sm font-medium text-slate-700">Current</Label>
                          <div className="text-lg font-semibold text-slate-900">
                            {metric.current}
                            {metric.unit}
                          </div>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-slate-700">Preset Target</Label>
                          <div className={`text-lg font-semibold ${getImpactColor(metric.impact)}`}>
                            {metric.preset}
                            {metric.unit}
                          </div>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-slate-700">Change</Label>
                          <div className={`text-lg font-semibold ${getImpactColor(metric.impact)}`}>
                            {metric.impact === "positive" ? "+" : ""}
                            {(((metric.preset - metric.current) / metric.current) * 100).toFixed(1)}%
                          </div>
                        </div>
                      </div>

                      <div className="mt-3">
                        <Progress
                          value={Math.abs((metric.preset - metric.current) / metric.current) * 100}
                          className="w-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
