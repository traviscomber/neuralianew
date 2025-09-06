"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Zap,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Activity,
  Clock,
  Target,
  Settings,
  RefreshCw,
  ArrowLeft,
  Download,
  Shield,
  Rocket,
  Users,
  DollarSign,
} from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

interface ApplicationStep {
  id: string
  name: string
  description: string
  status: "pending" | "running" | "completed" | "failed"
  duration: number
  progress: number
  details?: string[]
}

interface MetricComparison {
  name: string
  before: number
  after: number
  unit: string
  improvement: number
  impact: "positive" | "negative" | "neutral"
  category: "performance" | "business" | "user-experience" | "technical"
}

interface BusinessImpact {
  category: string
  metric: string
  improvement: number
  revenueImpact: number
  description: string
  icon: React.ReactNode
}

export default function ApplyPresetPage() {
  const router = useRouter()
  const [applicationSteps, setApplicationSteps] = useState<ApplicationStep[]>([])
  const [currentStep, setCurrentStep] = useState(0)
  const [isApplying, setIsApplying] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [metricComparisons, setMetricComparisons] = useState<MetricComparison[]>([])
  const [businessImpacts, setBusinessImpacts] = useState<BusinessImpact[]>([])
  const [overallProgress, setOverallProgress] = useState(0)
  const [estimatedCompletion, setEstimatedCompletion] = useState("")
  const [canRollback, setCanRollback] = useState(false)

  const saasPreset = {
    id: "tech-saas-aggressive",
    name: "SaaS High Performance",
    description: "Aggressive performance thresholds for competitive SaaS platforms",
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
    expectedImprovements: {
      performance: 35,
      conversion: 22,
      revenue: 18,
      userExperience: 40,
    },
  }

  useEffect(() => {
    initializeApplication()
  }, [])

  const initializeApplication = () => {
    const steps: ApplicationStep[] = [
      {
        id: "backup",
        name: "Create Configuration Backup",
        description: "Backing up current alert thresholds and configurations",
        status: "pending",
        duration: 5000,
        progress: 0,
        details: ["Exporting current thresholds", "Creating rollback point", "Validating backup integrity"],
      },
      {
        id: "validate",
        name: "Validate Preset Configuration",
        description: "Validating SaaS High Performance preset against system requirements",
        status: "pending",
        duration: 8000,
        progress: 0,
        details: [
          "Checking threshold compatibility",
          "Validating business rules",
          "Analyzing impact on existing alerts",
          "Verifying system capacity",
        ],
      },
      {
        id: "performance",
        name: "Apply Performance Thresholds",
        description: "Updating Core Web Vitals and performance monitoring thresholds",
        status: "pending",
        duration: 12000,
        progress: 0,
        details: [
          "LCP threshold: 3200ms → 2000ms",
          "FCP threshold: 2000ms → 1200ms",
          "CLS threshold: 0.18 → 0.05",
          "FID threshold: 150ms → 80ms",
        ],
      },
      {
        id: "business",
        name: "Apply Business Metric Thresholds",
        description: "Updating conversion, engagement, and business KPI thresholds",
        status: "pending",
        duration: 10000,
        progress: 0,
        details: [
          "Bounce rate threshold: 45% → 25%",
          "Conversion rate target: 4.2% → 8.5%",
          "Session duration target: 120s → 180s",
          "Error rate threshold: 2.5% → 1.0%",
        ],
      },
      {
        id: "technical",
        name: "Apply Technical Thresholds",
        description: "Updating API response times, uptime, and technical monitoring",
        status: "pending",
        duration: 7000,
        progress: 0,
        details: [
          "API response time: 450ms → 200ms",
          "Uptime target: 99.2% → 99.9%",
          "Mobile speed score: 72 → 85",
          "WCAG AA compliance: 85% → 95%",
        ],
      },
      {
        id: "alerts",
        name: "Update Alert Rules",
        description: "Reconfiguring alert rules and notification channels",
        status: "pending",
        duration: 6000,
        progress: 0,
        details: [
          "Updating alert rule conditions",
          "Adjusting notification frequencies",
          "Configuring escalation policies",
          "Testing alert channels",
        ],
      },
      {
        id: "monitor",
        name: "Initialize Monitoring",
        description: "Starting enhanced monitoring with new thresholds",
        status: "pending",
        duration: 4000,
        progress: 0,
        details: [
          "Activating real-time monitoring",
          "Initializing trend analysis",
          "Setting up performance baselines",
          "Enabling automated reporting",
        ],
      },
    ]

    setApplicationSteps(steps)
    generateMetricComparisons()
    generateBusinessImpacts()
  }

  const generateMetricComparisons = () => {
    const comparisons: MetricComparison[] = [
      {
        name: "Largest Contentful Paint",
        before: 3200,
        after: 2000,
        unit: "ms",
        improvement: -37.5,
        impact: "positive",
        category: "performance",
      },
      {
        name: "First Contentful Paint",
        before: 2000,
        after: 1200,
        unit: "ms",
        improvement: -40,
        impact: "positive",
        category: "performance",
      },
      {
        name: "Cumulative Layout Shift",
        before: 0.18,
        after: 0.05,
        unit: "",
        improvement: -72.2,
        impact: "positive",
        category: "performance",
      },
      {
        name: "First Input Delay",
        before: 150,
        after: 80,
        unit: "ms",
        improvement: -46.7,
        impact: "positive",
        category: "performance",
      },
      {
        name: "Bounce Rate",
        before: 45,
        after: 25,
        unit: "%",
        improvement: -44.4,
        impact: "positive",
        category: "business",
      },
      {
        name: "Conversion Rate",
        before: 4.2,
        after: 8.5,
        unit: "%",
        improvement: 102.4,
        impact: "positive",
        category: "business",
      },
      {
        name: "Session Duration",
        before: 120,
        after: 180,
        unit: "s",
        improvement: 50,
        impact: "positive",
        category: "user-experience",
      },
      {
        name: "Error Rate",
        before: 2.5,
        after: 1.0,
        unit: "%",
        improvement: -60,
        impact: "positive",
        category: "technical",
      },
      {
        name: "API Response Time",
        before: 450,
        after: 200,
        unit: "ms",
        improvement: -55.6,
        impact: "positive",
        category: "technical",
      },
      {
        name: "Mobile Speed Score",
        before: 72,
        after: 85,
        unit: "",
        improvement: 18.1,
        impact: "positive",
        category: "performance",
      },
      {
        name: "WCAG AA Compliance",
        before: 85,
        after: 95,
        unit: "%",
        improvement: 11.8,
        impact: "positive",
        category: "user-experience",
      },
      {
        name: "Uptime Target",
        before: 99.2,
        after: 99.9,
        unit: "%",
        improvement: 0.7,
        impact: "positive",
        category: "technical",
      },
    ]

    setMetricComparisons(comparisons)
  }

  const generateBusinessImpacts = () => {
    const impacts: BusinessImpact[] = [
      {
        category: "Revenue Growth",
        metric: "Expected Revenue Increase",
        improvement: 18,
        revenueImpact: 245000,
        description: "Improved conversion rates and user experience drive direct revenue growth",
        icon: <DollarSign className="w-5 h-5" />,
      },
      {
        category: "User Experience",
        metric: "User Satisfaction Score",
        improvement: 40,
        revenueImpact: 0,
        description: "Faster load times and better performance significantly improve user satisfaction",
        icon: <Users className="w-5 h-5" />,
      },
      {
        category: "Competitive Advantage",
        metric: "Performance vs Competitors",
        improvement: 35,
        revenueImpact: 0,
        description: "Superior performance creates competitive differentiation in the SaaS market",
        icon: <Target className="w-5 h-5" />,
      },
      {
        category: "Customer Retention",
        metric: "Churn Reduction",
        improvement: 22,
        revenueImpact: 180000,
        description: "Better performance reduces churn and increases customer lifetime value",
        icon: <Shield className="w-5 h-5" />,
      },
      {
        category: "Conversion Optimization",
        metric: "Trial-to-Paid Conversion",
        improvement: 102,
        revenueImpact: 320000,
        description: "Aggressive conversion thresholds maximize trial-to-paid conversion rates",
        icon: <TrendingUp className="w-5 h-5" />,
      },
      {
        category: "Operational Efficiency",
        metric: "System Reliability",
        improvement: 25,
        revenueImpact: 0,
        description: "Higher uptime targets and lower error rates improve operational efficiency",
        icon: <Activity className="w-5 h-5" />,
      },
    ]

    setBusinessImpacts(impacts)
  }

  const startApplication = async () => {
    setIsApplying(true)
    setCurrentStep(0)

    for (let i = 0; i < applicationSteps.length; i++) {
      setCurrentStep(i)

      // Update step status to running
      setApplicationSteps((prev) =>
        prev.map((step, index) => (index === i ? { ...step, status: "running", progress: 0 } : step)),
      )

      // Simulate step progress
      const step = applicationSteps[i]
      const progressInterval = setInterval(() => {
        setApplicationSteps((prev) =>
          prev.map((s, index) => {
            if (index === i) {
              const newProgress = Math.min(s.progress + Math.random() * 15 + 5, 100)
              return { ...s, progress: newProgress }
            }
            return s
          }),
        )
      }, 200)

      // Wait for step duration
      await new Promise((resolve) => setTimeout(resolve, step.duration))

      clearInterval(progressInterval)

      // Mark step as completed
      setApplicationSteps((prev) =>
        prev.map((step, index) => (index === i ? { ...step, status: "completed", progress: 100 } : step)),
      )

      // Update overall progress
      setOverallProgress(((i + 1) / applicationSteps.length) * 100)

      // Update estimated completion
      const remainingSteps = applicationSteps.length - (i + 1)
      const avgStepDuration = 7000
      const remainingTime = remainingSteps * avgStepDuration
      const completionTime = new Date(Date.now() + remainingTime)
      setEstimatedCompletion(completionTime.toLocaleTimeString())
    }

    setIsApplying(false)
    setIsCompleted(true)
    setCanRollback(true)

    toast({
      title: "Preset Applied Successfully!",
      description: "SaaS High Performance preset has been applied to your alert system.",
    })
  }

  const rollbackChanges = async () => {
    toast({
      title: "Rolling Back Changes",
      description: "Restoring previous configuration...",
    })

    // Simulate rollback
    await new Promise((resolve) => setTimeout(resolve, 3000))

    toast({
      title: "Rollback Complete",
      description: "Previous configuration has been restored successfully.",
    })

    router.push("/preset-selector")
  }

  const exportConfiguration = () => {
    const config = {
      preset: saasPreset,
      appliedAt: new Date().toISOString(),
      applicationSteps,
      metricComparisons,
      businessImpacts,
      rollbackAvailable: canRollback,
    }

    const blob = new Blob([JSON.stringify(config, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `saas-high-performance-applied-${new Date().toISOString().split("T")[0]}.json`
    a.click()
    URL.revokeObjectURL(url)

    toast({
      title: "Configuration Exported",
      description: "Applied configuration has been exported successfully.",
    })
  }

  const getStepIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case "running":
        return <Settings className="w-5 h-5 text-blue-600 animate-spin" />
      case "failed":
        return <AlertTriangle className="w-5 h-5 text-red-600" />
      default:
        return <Clock className="w-5 h-5 text-gray-400" />
    }
  }

  const getImpactIcon = (impact: string) => {
    switch (impact) {
      case "positive":
        return <TrendingUp className="w-4 h-4 text-green-600" />
      case "negative":
        return <TrendingDown className="w-4 h-4 text-red-600" />
      default:
        return <Activity className="w-4 h-4 text-gray-600" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "performance":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "business":
        return "bg-green-100 text-green-800 border-green-200"
      case "user-experience":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "technical":
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
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => router.push("/preset-selector")}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Presets
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-slate-900 flex items-center">
                  <Rocket className="w-8 h-8 mr-3 text-blue-600" />
                  Apply SaaS High Performance Preset
                </h1>
                <p className="text-slate-600 mt-2">
                  Applying aggressive performance thresholds for competitive advantage
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {isCompleted && (
                <>
                  <Button variant="outline" onClick={exportConfiguration}>
                    <Download className="w-4 h-4 mr-2" />
                    Export Config
                  </Button>
                  {canRollback && (
                    <Button variant="outline" onClick={rollbackChanges}>
                      <RefreshCw className="w-4 h-4 mr-2" />
                      Rollback
                    </Button>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Preset Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <div className="p-2 bg-blue-500 rounded-lg text-white">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <span>{saasPreset.name}</span>
                  <Badge className="ml-2 bg-blue-100 text-blue-800 border-blue-200">High Performance</Badge>
                </div>
              </CardTitle>
              <CardDescription>{saasPreset.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    +{saasPreset.expectedImprovements.performance}%
                  </div>
                  <div className="text-sm text-slate-600">Performance</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    +{saasPreset.expectedImprovements.conversion}%
                  </div>
                  <div className="text-sm text-slate-600">Conversion</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">+{saasPreset.expectedImprovements.revenue}%</div>
                  <div className="text-sm text-slate-600">Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    +{saasPreset.expectedImprovements.userExperience}%
                  </div>
                  <div className="text-sm text-slate-600">User Experience</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Application Progress */}
            <div className="lg:col-span-2 space-y-6">
              {/* Overall Progress */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Application Progress</span>
                    <span className="text-lg font-bold text-blue-600">{Math.round(overallProgress)}%</span>
                  </CardTitle>
                  <CardDescription>
                    {isCompleted
                      ? "Preset application completed successfully"
                      : isApplying
                        ? `Step ${currentStep + 1} of ${applicationSteps.length} - ${estimatedCompletion && `ETA: ${estimatedCompletion}`}`
                        : "Ready to apply SaaS High Performance preset"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={overallProgress} className="w-full mb-4" />
                  {!isApplying && !isCompleted && (
                    <Button onClick={startApplication} size="lg" className="w-full">
                      <Rocket className="w-4 h-4 mr-2" />
                      Start Application
                    </Button>
                  )}
                  {isCompleted && (
                    <div className="flex items-center justify-center space-x-2 text-green-600">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">Application Completed Successfully</span>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Application Steps */}
              <Card>
                <CardHeader>
                  <CardTitle>Application Steps</CardTitle>
                  <CardDescription>Detailed progress of each configuration step</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {applicationSteps.map((step, index) => (
                      <div
                        key={step.id}
                        className={`p-4 border rounded-lg ${
                          step.status === "completed"
                            ? "border-green-200 bg-green-50"
                            : step.status === "running"
                              ? "border-blue-200 bg-blue-50"
                              : step.status === "failed"
                                ? "border-red-200 bg-red-50"
                                : "border-slate-200"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            {getStepIcon(step.status)}
                            <div>
                              <h4 className="font-medium text-slate-900">{step.name}</h4>
                              <p className="text-sm text-slate-600">{step.description}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-medium text-slate-900">{Math.round(step.progress)}%</div>
                            <div className="text-xs text-slate-500">{step.duration / 1000}s</div>
                          </div>
                        </div>

                        {step.status === "running" && <Progress value={step.progress} className="w-full mb-2" />}

                        {step.details && (step.status === "running" || step.status === "completed") && (
                          <div className="mt-3 space-y-1">
                            {step.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-center space-x-2 text-sm text-slate-600">
                                <CheckCircle className="w-3 h-3 text-green-600" />
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Business Impact */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Expected Business Impact</CardTitle>
                  <CardDescription>Projected improvements from applying this preset</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {businessImpacts.map((impact, index) => (
                      <div key={index} className="p-3 border border-slate-200 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            {impact.icon}
                            <span className="font-medium text-slate-900">{impact.category}</span>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-green-600">+{impact.improvement}%</div>
                            {impact.revenueImpact > 0 && (
                              <div className="text-xs text-slate-600">${impact.revenueImpact.toLocaleString()}</div>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-slate-600">{impact.description}</p>
                      </div>
                    ))}
                  </div>

                  <Separator className="my-4" />

                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      ${businessImpacts.reduce((sum, impact) => sum + impact.revenueImpact, 0).toLocaleString()}
                    </div>
                    <div className="text-sm text-slate-600">Total Expected Revenue Impact</div>
                  </div>
                </CardContent>
              </Card>

              {/* Metric Comparison Preview */}
              <Card>
                <CardHeader>
                  <CardTitle>Key Metric Changes</CardTitle>
                  <CardDescription>Before vs. after threshold comparison</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {metricComparisons.slice(0, 6).map((metric, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {getImpactIcon(metric.impact)}
                          <span className="text-sm text-slate-600">{metric.name}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-slate-900">
                            {metric.before}
                            {metric.unit} → {metric.after}
                            {metric.unit}
                          </div>
                          <div className="text-xs text-green-600">
                            {metric.improvement > 0 ? "+" : ""}
                            {metric.improvement.toFixed(1)}%
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="text-center pt-2">
                      <Badge variant="secondary">+{metricComparisons.length - 6} more metrics</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Detailed Metric Comparison */}
          {isCompleted && (
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Complete Metric Comparison</CardTitle>
                <CardDescription>Detailed before and after analysis of all thresholds</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {metricComparisons.map((metric, index) => (
                    <div key={index} className="p-4 border border-slate-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          {getImpactIcon(metric.impact)}
                          <span className="font-medium text-slate-900">{metric.name}</span>
                        </div>
                        <Badge className={getCategoryColor(metric.category)}>{metric.category}</Badge>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Before:</span>
                          <span className="font-medium">
                            {metric.before}
                            {metric.unit}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">After:</span>
                          <span className="font-medium text-blue-600">
                            {metric.after}
                            {metric.unit}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-600">Change:</span>
                          <span className="font-bold text-green-600">
                            {metric.improvement > 0 ? "+" : ""}
                            {metric.improvement.toFixed(1)}%
                          </span>
                        </div>
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
