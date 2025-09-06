"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import {
  Target,
  Users,
  Zap,
  Eye,
  Shield,
  Search,
  Smartphone,
  Wifi,
  Activity,
  Settings,
  BarChart3,
  CheckCircle,
  Lightbulb,
  RefreshCw,
  Save,
  Download,
} from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface BusinessRequirement {
  id: string
  name: string
  description: string
  priority: "low" | "medium" | "high" | "critical"
  category: string
  targetValue: number
  currentValue: number
  businessImpact: number
  revenueImpact: number
}

interface ThresholdPreset {
  id: string
  name: string
  description: string
  industry: string
  businessType: string
  thresholds: Record<string, number>
  userSegments: string[]
  businessContext: string
}

interface UserSegment {
  id: string
  name: string
  description: string
  characteristics: string[]
  thresholdMultipliers: Record<string, number>
  businessValue: number
  conversionRate: number
}

interface ThresholdRecommendation {
  metric: string
  currentThreshold: number
  recommendedThreshold: number
  confidence: number
  reasoning: string
  businessImpact: "positive" | "negative" | "neutral"
  expectedImprovement: number
}

export default function ThresholdOptimizationPage() {
  const [businessRequirements, setBusinessRequirements] = useState<BusinessRequirement[]>([])
  const [thresholdPresets, setThresholdPresets] = useState<ThresholdPreset[]>([])
  const [userSegments, setUserSegments] = useState<UserSegment[]>([])
  const [recommendations, setRecommendations] = useState<ThresholdRecommendation[]>([])
  const [selectedIndustry, setSelectedIndustry] = useState("technology")
  const [selectedBusinessType, setSelectedBusinessType] = useState("saas")
  const [selectedSegment, setSelectedSegment] = useState("all")
  const [optimizationGoal, setOptimizationGoal] = useState("conversion")
  const [isOptimizing, setIsOptimizing] = useState(false)
  const [optimizationProgress, setOptimizationProgress] = useState(0)

  useEffect(() => {
    loadBusinessRequirements()
    loadThresholdPresets()
    loadUserSegments()
    generateRecommendations()
  }, [selectedIndustry, selectedBusinessType, selectedSegment, optimizationGoal])

  const loadBusinessRequirements = () => {
    const requirements: BusinessRequirement[] = [
      {
        id: "1",
        name: "Page Load Performance",
        description: "Critical for user experience and conversion rates",
        priority: "critical",
        category: "performance",
        targetValue: 2.5,
        currentValue: 3.2,
        businessImpact: 95,
        revenueImpact: 250000,
      },
      {
        id: "2",
        name: "Mobile User Experience",
        description: "Essential for mobile-first audience",
        priority: "high",
        category: "mobile",
        targetValue: 85,
        currentValue: 78,
        businessImpact: 88,
        revenueImpact: 180000,
      },
      {
        id: "3",
        name: "Conversion Rate Optimization",
        description: "Direct impact on revenue generation",
        priority: "critical",
        category: "userExperience",
        targetValue: 8.5,
        currentValue: 6.2,
        businessImpact: 92,
        revenueImpact: 320000,
      },
      {
        id: "4",
        name: "Accessibility Compliance",
        description: "Legal requirement and market expansion",
        priority: "high",
        category: "accessibility",
        targetValue: 95,
        currentValue: 87,
        businessImpact: 75,
        revenueImpact: 120000,
      },
      {
        id: "5",
        name: "Security Standards",
        description: "Trust and compliance requirements",
        priority: "critical",
        category: "security",
        targetValue: 98,
        currentValue: 94,
        businessImpact: 85,
        revenueImpact: 200000,
      },
    ]
    setBusinessRequirements(requirements)
  }

  const loadThresholdPresets = () => {
    const presets: ThresholdPreset[] = [
      {
        id: "saas-aggressive",
        name: "SaaS Aggressive",
        description: "High-performance thresholds for competitive SaaS products",
        industry: "technology",
        businessType: "saas",
        thresholds: {
          lcp: 2000,
          fcp: 1200,
          cls: 0.05,
          fid: 80,
          bounceRate: 25,
          conversionRate: 8,
          wcagAA: 95,
          mobileSpeed: 85,
        },
        userSegments: ["enterprise", "power-users"],
        businessContext: "High-value customers expect premium performance",
      },
      {
        id: "saas-balanced",
        name: "SaaS Balanced",
        description: "Balanced thresholds for sustainable growth",
        industry: "technology",
        businessType: "saas",
        thresholds: {
          lcp: 2500,
          fcp: 1500,
          cls: 0.1,
          fid: 100,
          bounceRate: 35,
          conversionRate: 5,
          wcagAA: 90,
          mobileSpeed: 80,
        },
        userSegments: ["general", "small-business"],
        businessContext: "Balanced approach for diverse user base",
      },
      {
        id: "ecommerce-conversion",
        name: "E-commerce Conversion",
        description: "Optimized for maximum conversion rates",
        industry: "retail",
        businessType: "ecommerce",
        thresholds: {
          lcp: 2200,
          fcp: 1300,
          cls: 0.08,
          fid: 90,
          bounceRate: 30,
          conversionRate: 12,
          wcagAA: 92,
          mobileSpeed: 88,
        },
        userSegments: ["shoppers", "mobile-users"],
        businessContext: "Every millisecond impacts purchase decisions",
      },
      {
        id: "enterprise-conservative",
        name: "Enterprise Conservative",
        description: "Conservative thresholds for enterprise reliability",
        industry: "enterprise",
        businessType: "b2b",
        thresholds: {
          lcp: 3000,
          fcp: 1800,
          cls: 0.15,
          fid: 120,
          bounceRate: 40,
          conversionRate: 3,
          wcagAA: 98,
          mobileSpeed: 75,
        },
        userSegments: ["enterprise", "decision-makers"],
        businessContext: "Stability and compliance over aggressive optimization",
      },
    ]
    setThresholdPresets(presets)
  }

  const loadUserSegments = () => {
    const segments: UserSegment[] = [
      {
        id: "enterprise",
        name: "Enterprise Users",
        description: "Large organization decision makers and power users",
        characteristics: ["High-value accounts", "Complex workflows", "Performance sensitive"],
        thresholdMultipliers: {
          lcp: 0.8,
          fcp: 0.8,
          cls: 0.5,
          bounceRate: 0.7,
          conversionRate: 1.5,
        },
        businessValue: 95,
        conversionRate: 12.5,
      },
      {
        id: "power-users",
        name: "Power Users",
        description: "Frequent users with high engagement",
        characteristics: ["Daily active users", "Feature adoption", "Performance aware"],
        thresholdMultipliers: {
          lcp: 0.85,
          fcp: 0.85,
          cls: 0.6,
          bounceRate: 0.75,
          conversionRate: 1.3,
        },
        businessValue: 88,
        conversionRate: 9.8,
      },
      {
        id: "mobile-users",
        name: "Mobile Users",
        description: "Primarily mobile device users",
        characteristics: ["Mobile-first", "On-the-go usage", "Network sensitive"],
        thresholdMultipliers: {
          lcp: 1.2,
          fcp: 1.1,
          mobileSpeed: 0.9,
          bounceRate: 1.1,
          conversionRate: 0.8,
        },
        businessValue: 72,
        conversionRate: 6.2,
      },
      {
        id: "general",
        name: "General Users",
        description: "Typical website visitors and users",
        characteristics: ["Mixed usage patterns", "Standard expectations", "Price sensitive"],
        thresholdMultipliers: {
          lcp: 1.0,
          fcp: 1.0,
          cls: 1.0,
          bounceRate: 1.0,
          conversionRate: 1.0,
        },
        businessValue: 65,
        conversionRate: 5.5,
      },
      {
        id: "trial-users",
        name: "Trial Users",
        description: "Users evaluating the product",
        characteristics: ["First impressions critical", "Comparison shopping", "Quick decisions"],
        thresholdMultipliers: {
          lcp: 0.7,
          fcp: 0.7,
          cls: 0.4,
          bounceRate: 0.6,
          conversionRate: 2.0,
        },
        businessValue: 85,
        conversionRate: 15.2,
      },
    ]
    setUserSegments(segments)
  }

  const generateRecommendations = () => {
    const currentThresholds = {
      lcp: 2500,
      fcp: 1500,
      cls: 0.1,
      fid: 100,
      bounceRate: 35,
      conversionRate: 5,
      wcagAA: 90,
      mobileSpeed: 80,
    }

    const selectedPreset = thresholdPresets.find(
      (preset) => preset.industry === selectedIndustry && preset.businessType === selectedBusinessType,
    )

    if (!selectedPreset) return

    const newRecommendations: ThresholdRecommendation[] = Object.entries(currentThresholds).map(
      ([metric, currentValue]) => {
        const presetValue = selectedPreset.thresholds[metric] || currentValue
        const segment = userSegments.find((s) => s.id === selectedSegment)
        const multiplier = segment?.thresholdMultipliers[metric] || 1

        const recommendedValue = presetValue * multiplier
        const improvement = Math.abs(currentValue - recommendedValue) / currentValue
        const confidence = Math.min(95, 60 + improvement * 100)

        let reasoning = `Based on ${selectedPreset.name} preset for ${selectedIndustry} industry`
        if (segment && segment.id !== "general") {
          reasoning += ` with ${segment.name.toLowerCase()} optimization`
        }

        const businessImpact = recommendedValue < currentValue ? "positive" : "negative"
        const expectedImprovement = improvement * (segment?.businessValue || 65)

        return {
          metric,
          currentThreshold: currentValue,
          recommendedThreshold: Math.round(recommendedValue * 100) / 100,
          confidence,
          reasoning,
          businessImpact,
          expectedImprovement,
        }
      },
    )

    setRecommendations(newRecommendations)
  }

  const optimizeThresholds = async () => {
    setIsOptimizing(true)
    setOptimizationProgress(0)

    // Simulate optimization process
    for (let i = 0; i <= 100; i += 10) {
      await new Promise((resolve) => setTimeout(resolve, 200))
      setOptimizationProgress(i)
    }

    // Generate optimized recommendations
    const optimizedRecommendations = recommendations.map((rec) => ({
      ...rec,
      confidence: Math.min(98, rec.confidence + 15),
      expectedImprovement: rec.expectedImprovement * 1.2,
      reasoning: rec.reasoning + " (AI-optimized based on business requirements)",
    }))

    setRecommendations(optimizedRecommendations)
    setIsOptimizing(false)

    toast({
      title: "Optimization Complete",
      description: "Thresholds have been optimized based on your business requirements.",
    })
  }

  const applyRecommendations = () => {
    // Apply recommendations to alert system
    const appliedCount = recommendations.filter((rec) => rec.businessImpact === "positive").length

    toast({
      title: "Recommendations Applied",
      description: `${appliedCount} threshold recommendations have been applied to your alert system.`,
    })
  }

  const exportConfiguration = () => {
    const config = {
      businessRequirements,
      thresholdPresets,
      userSegments,
      recommendations,
      settings: {
        industry: selectedIndustry,
        businessType: selectedBusinessType,
        segment: selectedSegment,
        goal: optimizationGoal,
      },
    }

    const blob = new Blob([JSON.stringify(config, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "threshold-configuration.json"
    a.click()
    URL.revokeObjectURL(url)

    toast({
      title: "Configuration Exported",
      description: "Threshold configuration has been exported successfully.",
    })
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "critical":
        return "bg-red-100 text-red-800 border-red-200"
      case "high":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "performance":
        return <Zap className="w-4 h-4" />
      case "userExperience":
        return <Users className="w-4 h-4" />
      case "accessibility":
        return <Eye className="w-4 h-4" />
      case "security":
        return <Shield className="w-4 h-4" />
      case "seo":
        return <Search className="w-4 h-4" />
      case "mobile":
        return <Smartphone className="w-4 h-4" />
      case "network":
        return <Wifi className="w-4 h-4" />
      default:
        return <Activity className="w-4 h-4" />
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
                Threshold Optimization
              </h1>
              <p className="text-slate-600 mt-2">
                Fine-tune alert thresholds based on business requirements and user segments
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={exportConfiguration}>
                <Download className="w-4 h-4 mr-2" />
                Export Config
              </Button>
              <Button onClick={optimizeThresholds} disabled={isOptimizing}>
                {isOptimizing ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Optimizing...
                  </>
                ) : (
                  <>
                    <Lightbulb className="w-4 h-4 mr-2" />
                    Optimize
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Business Context Configuration */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Business Context</CardTitle>
              <CardDescription>
                Configure your business context for personalized threshold recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <Label htmlFor="industry">Industry</Label>
                  <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
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
                  <Label htmlFor="businessType">Business Type</Label>
                  <Select value={selectedBusinessType} onValueChange={setSelectedBusinessType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="saas">SaaS Platform</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="b2b">B2B Services</SelectItem>
                      <SelectItem value="b2c">B2C Services</SelectItem>
                      <SelectItem value="marketplace">Marketplace</SelectItem>
                      <SelectItem value="content">Content/Media</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="segment">Target Segment</Label>
                  <Select value={selectedSegment} onValueChange={setSelectedSegment}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Users</SelectItem>
                      <SelectItem value="enterprise">Enterprise</SelectItem>
                      <SelectItem value="power-users">Power Users</SelectItem>
                      <SelectItem value="mobile-users">Mobile Users</SelectItem>
                      <SelectItem value="trial-users">Trial Users</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="goal">Optimization Goal</Label>
                  <Select value={optimizationGoal} onValueChange={setOptimizationGoal}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="conversion">Conversion Rate</SelectItem>
                      <SelectItem value="performance">Performance</SelectItem>
                      <SelectItem value="retention">User Retention</SelectItem>
                      <SelectItem value="revenue">Revenue Impact</SelectItem>
                      <SelectItem value="compliance">Compliance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Optimization Progress */}
          {isOptimizing && (
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <RefreshCw className="w-6 h-6 text-blue-600 animate-spin" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-900">Optimizing Thresholds</span>
                      <span className="text-sm text-slate-600">{optimizationProgress}%</span>
                    </div>
                    <Progress value={optimizationProgress} className="w-full" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <Tabs defaultValue="requirements" className="space-y-6">
            <TabsList>
              <TabsTrigger value="requirements">Business Requirements</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
              <TabsTrigger value="presets">Industry Presets</TabsTrigger>
              <TabsTrigger value="segments">User Segments</TabsTrigger>
            </TabsList>

            <TabsContent value="requirements">
              <Card>
                <CardHeader>
                  <CardTitle>Business Requirements</CardTitle>
                  <CardDescription>
                    Define your business requirements and their impact on threshold optimization
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {businessRequirements.map((requirement) => (
                      <div key={requirement.id} className="p-6 border border-slate-200 rounded-lg">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            {getCategoryIcon(requirement.category)}
                            <div>
                              <h3 className="font-semibold text-slate-900">{requirement.name}</h3>
                              <p className="text-sm text-slate-600">{requirement.description}</p>
                            </div>
                          </div>
                          <Badge className={getPriorityColor(requirement.priority)}>{requirement.priority}</Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                          <div>
                            <Label className="text-sm font-medium text-slate-700">Target Value</Label>
                            <div className="mt-1 text-2xl font-bold text-green-600">{requirement.targetValue}</div>
                          </div>
                          <div>
                            <Label className="text-sm font-medium text-slate-700">Current Value</Label>
                            <div className="mt-1 text-2xl font-bold text-slate-900">{requirement.currentValue}</div>
                          </div>
                          <div>
                            <Label className="text-sm font-medium text-slate-700">Business Impact</Label>
                            <div className="mt-1">
                              <div className="text-2xl font-bold text-blue-600">{requirement.businessImpact}%</div>
                              <Progress value={requirement.businessImpact} className="mt-2" />
                            </div>
                          </div>
                          <div>
                            <Label className="text-sm font-medium text-slate-700">Revenue Impact</Label>
                            <div className="mt-1 text-2xl font-bold text-purple-600">
                              ${requirement.revenueImpact.toLocaleString()}
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-slate-200">
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-slate-600">
                              Gap: {Math.abs(requirement.targetValue - requirement.currentValue).toFixed(1)} units
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button variant="outline" size="sm">
                                <Settings className="w-4 h-4 mr-1" />
                                Configure
                              </Button>
                              <Button variant="outline" size="sm">
                                <BarChart3 className="w-4 h-4 mr-1" />
                                Analyze
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="recommendations">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Threshold Recommendations</CardTitle>
                        <CardDescription>
                          AI-powered recommendations based on your business context and requirements
                        </CardDescription>
                      </div>
                      <Button onClick={applyRecommendations}>
                        <Save className="w-4 h-4 mr-2" />
                        Apply All
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recommendations.map((rec) => (
                        <div key={rec.metric} className="p-4 border border-slate-200 rounded-lg">
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <h3 className="font-semibold text-slate-900 capitalize">{rec.metric}</h3>
                              <p className="text-sm text-slate-600">{rec.reasoning}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge
                                className={
                                  rec.confidence >= 80
                                    ? "bg-green-100 text-green-800 border-green-200"
                                    : rec.confidence >= 60
                                      ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                                      : "bg-red-100 text-red-800 border-red-200"
                                }
                              >
                                {rec.confidence}% confidence
                              </Badge>
                              <Badge
                                className={
                                  rec.businessImpact === "positive"
                                    ? "bg-green-100 text-green-800 border-green-200"
                                    : "bg-red-100 text-red-800 border-red-200"
                                }
                              >
                                {rec.businessImpact}
                              </Badge>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div>
                              <Label className="text-sm font-medium text-slate-700">Current Threshold</Label>
                              <div className="mt-1 text-lg font-semibold text-slate-900">{rec.currentThreshold}</div>
                            </div>
                            <div>
                              <Label className="text-sm font-medium text-slate-700">Recommended</Label>
                              <div className={`mt-1 text-lg font-semibold ${getImpactColor(rec.businessImpact)}`}>
                                {rec.recommendedThreshold}
                              </div>
                            </div>
                            <div>
                              <Label className="text-sm font-medium text-slate-700">Expected Improvement</Label>
                              <div className="mt-1 text-lg font-semibold text-blue-600">
                                +{rec.expectedImprovement.toFixed(1)}%
                              </div>
                            </div>
                            <div className="flex items-end">
                              <Button variant="outline" size="sm" className="w-full bg-transparent">
                                Apply
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Impact Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle>Impact Summary</CardTitle>
                    <CardDescription>Projected business impact of applying all recommendations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 mb-2">
                          +{recommendations.reduce((sum, rec) => sum + rec.expectedImprovement, 0).toFixed(1)}%
                        </div>
                        <div className="text-sm text-slate-600">Total Performance Improvement</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                          $
                          {Math.round(
                            recommendations.reduce((sum, rec) => sum + rec.expectedImprovement * 5000, 0),
                          ).toLocaleString()}
                        </div>
                        <div className="text-sm text-slate-600">Estimated Revenue Impact</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">
                          {recommendations.filter((rec) => rec.businessImpact === "positive").length}
                        </div>
                        <div className="text-sm text-slate-600">Positive Recommendations</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="presets">
              <Card>
                <CardHeader>
                  <CardTitle>Industry Presets</CardTitle>
                  <CardDescription>
                    Pre-configured threshold sets optimized for different industries and business types
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {thresholdPresets.map((preset) => (
                      <div key={preset.id} className="p-6 border border-slate-200 rounded-lg">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-slate-900">{preset.name}</h3>
                            <p className="text-sm text-slate-600 mt-1">{preset.description}</p>
                            <div className="flex items-center space-x-2 mt-2">
                              <Badge variant="outline">{preset.industry}</Badge>
                              <Badge variant="outline">{preset.businessType}</Badge>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Apply Preset
                          </Button>
                        </div>

                        <div className="space-y-3">
                          <div className="text-sm font-medium text-slate-700">Key Thresholds:</div>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            {Object.entries(preset.thresholds)
                              .slice(0, 6)
                              .map(([metric, value]) => (
                                <div key={metric} className="flex justify-between">
                                  <span className="text-slate-600 capitalize">{metric}:</span>
                                  <span className="font-medium">{value}</span>
                                </div>
                              ))}
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-slate-200">
                          <div className="text-sm text-slate-600">{preset.businessContext}</div>
                          <div className="flex items-center space-x-2 mt-2">
                            <span className="text-xs text-slate-500">Target segments:</span>
                            {preset.userSegments.map((segment) => (
                              <Badge key={segment} variant="secondary" className="text-xs">
                                {segment}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="segments">
              <Card>
                <CardHeader>
                  <CardTitle>User Segments</CardTitle>
                  <CardDescription>Configure threshold adjustments for different user segments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {userSegments.map((segment) => (
                      <div key={segment.id} className="p-6 border border-slate-200 rounded-lg">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-semibold text-slate-900">{segment.name}</h3>
                            <p className="text-sm text-slate-600 mt-1">{segment.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-slate-600">Business Value</div>
                            <div className="text-lg font-semibold text-blue-600">{segment.businessValue}%</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <div className="text-sm font-medium text-slate-700 mb-3">Characteristics:</div>
                            <div className="space-y-1">
                              {segment.characteristics.map((char, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                  <CheckCircle className="w-4 h-4 text-green-600" />
                                  <span className="text-sm text-slate-600">{char}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-700 mb-3">Threshold Multipliers:</div>
                            <div className="space-y-2">
                              {Object.entries(segment.thresholdMultipliers).map(([metric, multiplier]) => (
                                <div key={metric} className="flex items-center justify-between">
                                  <span className="text-sm text-slate-600 capitalize">{metric}:</span>
                                  <Badge
                                    className={
                                      multiplier < 1
                                        ? "bg-green-100 text-green-800 border-green-200"
                                        : multiplier > 1
                                          ? "bg-orange-100 text-orange-800 border-orange-200"
                                          : "bg-gray-100 text-gray-800 border-gray-200"
                                    }
                                  >
                                    {multiplier}x
                                  </Badge>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-slate-200">
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-slate-600">
                              Conversion Rate: {segment.conversionRate}% | Business Value: {segment.businessValue}%
                            </div>
                            <Button variant="outline" size="sm">
                              <Settings className="w-4 h-4 mr-1" />
                              Configure
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
