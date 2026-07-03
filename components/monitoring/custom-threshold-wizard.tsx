"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  AlertTriangle,
  Info,
  Target,
  Bell,
  Mail,
  Webhook,
  Monitor,
  Clock,
  TrendingUp,
  TrendingDown,
  Brain,
  Sparkles,
  Save,
  Eye,
  BarChart3,
  Shield,
  RefreshCw,
  Download,
  Trash2,
  Play,
  Pause,
} from "lucide-react"
import {
  logoPerformanceMonitor,
  type PerformanceThreshold,
  type PerformanceReport,
} from "@/lib/logo-performance-monitor"
import { useAIThresholdRecommendations, type AIThresholdRecommendation } from "@/lib/ai-threshold-analyzer"
import { toast } from "@/hooks/use-toast"

interface ThresholdFormData {
  name: string
  description: string
  metric: "successRate" | "averageLoadTime" | "fallbackUsageRate" | ""
  condition: "above" | "below" | ""
  value: number
  enabled: boolean
  cooldownMinutes: number
  notificationChannels: string[]
}

interface ValidationError {
  field: string
  message: string
}

const NOTIFICATION_CHANNELS = [
  { id: "console", name: "Console Logging", icon: Monitor, description: "Log alerts to browser console" },
  { id: "browser", name: "Browser Notifications", icon: Bell, description: "Show desktop notifications" },
  { id: "webhook", name: "Webhook", icon: Webhook, description: "Send HTTP POST requests" },
  { id: "email", name: "Email", icon: Mail, description: "Send email notifications" },
]

const METRIC_INFO = {
  successRate: {
    name: "Success Rate",
    description: "Percentage of successful logo loads",
    unit: "%",
    icon: CheckCircle,
    color: "text-green-600",
    defaultValue: 95,
    range: [0, 100],
    step: 1,
    recommendations: {
      excellent: { min: 98, description: "Exceptional performance" },
      good: { min: 95, description: "Good performance" },
      fair: { min: 90, description: "Needs attention" },
      poor: { min: 0, description: "Critical issues" },
    },
  },
  averageLoadTime: {
    name: "Average Load Time",
    description: "Average time to load logos in milliseconds",
    unit: "ms",
    icon: Clock,
    color: "text-blue-600",
    defaultValue: 2000,
    range: [0, 10000],
    step: 100,
    recommendations: {
      excellent: { max: 1000, description: "Very fast" },
      good: { max: 2000, description: "Fast" },
      fair: { max: 3000, description: "Acceptable" },
      poor: { max: 10000, description: "Slow" },
    },
  },
  fallbackUsageRate: {
    name: "Fallback Usage Rate",
    description: "Percentage of times fallback URLs are used",
    unit: "%",
    icon: AlertTriangle,
    color: "text-orange-600",
    defaultValue: 10,
    range: [0, 100],
    step: 1,
    recommendations: {
      excellent: { max: 5, description: "Minimal fallback usage" },
      good: { max: 10, description: "Low fallback usage" },
      fair: { max: 20, description: "Moderate fallback usage" },
      poor: { max: 100, description: "High fallback usage" },
    },
  },
}

export function CustomThresholdWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<ThresholdFormData>({
    name: "",
    description: "",
    metric: "",
    condition: "",
    value: 0,
    enabled: true,
    cooldownMinutes: 15,
    notificationChannels: ["console"],
  })
  const [validationErrors, setValidationErrors] = useState<ValidationError[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [performanceReport, setPerformanceReport] = useState<PerformanceReport | null>(null)
  const [aiRecommendations, setAiRecommendations] = useState<AIThresholdRecommendation[]>([])
  const [showAiSuggestions, setShowAiSuggestions] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState<string>("")
  const [existingThresholds, setExistingThresholds] = useState<PerformanceThreshold[]>([])
  const [previewDialogOpen, setPreviewDialogOpen] = useState(false)
  const [exportDialogOpen, setExportDialogOpen] = useState(false)

  const { generateRecommendations, getConfidenceScore } = useAIThresholdRecommendations()

  const totalSteps = 4

  useEffect(() => {
    loadInitialData()
  }, [])

  useEffect(() => {
    if (formData.metric) {
      loadAiRecommendations()
    }
  }, [formData.metric])

  useEffect(() => {
    validateForm()
  }, [formData, currentStep])

  const loadInitialData = async () => {
    try {
      // Load performance report
      const report = logoPerformanceMonitor.generateReport()
      setPerformanceReport(report)

      // Load existing thresholds
      const thresholds = logoPerformanceMonitor.getThresholds()
      setExistingThresholds(thresholds)

      // Start monitoring if not already started
      logoPerformanceMonitor.startMonitoring()
    } catch (error) {
      console.error("Failed to load initial data:", error)
      toast({
        title: "Loading Error",
        description: "Failed to load performance data. Some features may be limited.",
        variant: "destructive",
      })
    }
  }

  const loadAiRecommendations = async () => {
    if (!formData.metric) return

    try {
      setIsLoading(true)
      const recommendations = await generateRecommendations({
        businessContext: {
          environment: "production",
          criticality: "high",
          userBase: "mixed",
          geographicDistribution: "global",
        },
        technicalContext: {
          infrastructure: "cdn",
          caching: "aggressive",
          fallbackStrategy: "comprehensive",
        },
      })

      // Filter recommendations for the selected metric
      const filteredRecs = recommendations.filter((rec) => rec.metric === formData.metric)
      setAiRecommendations(filteredRecs)
    } catch (error) {
      console.error("Failed to load AI recommendations:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const validateForm = () => {
    const errors: ValidationError[] = []

    if (currentStep >= 1) {
      if (!formData.name.trim()) {
        errors.push({ field: "name", message: "Threshold name is required" })
      } else if (formData.name.length < 3) {
        errors.push({ field: "name", message: "Name must be at least 3 characters" })
      }
    }

    if (currentStep >= 2) {
      if (!formData.metric) {
        errors.push({ field: "metric", message: "Please select a metric to monitor" })
      }
      if (!formData.condition) {
        errors.push({ field: "condition", message: "Please select a condition" })
      }
      if (formData.value === 0 && formData.metric) {
        const metricInfo = METRIC_INFO[formData.metric]
        if (metricInfo) {
          errors.push({ field: "value", message: `Please set a ${formData.condition} value` })
        }
      }
    }

    if (currentStep >= 3) {
      if (formData.notificationChannels.length === 0) {
        errors.push({ field: "notificationChannels", message: "Select at least one notification channel" })
      }
      if (formData.cooldownMinutes < 1) {
        errors.push({ field: "cooldownMinutes", message: "Cooldown must be at least 1 minute" })
      }
    }

    setValidationErrors(errors)
  }

  const handleInputChange = (field: keyof ThresholdFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleMetricChange = (metric: string) => {
    const metricKey = metric as keyof typeof METRIC_INFO
    const metricInfo = METRIC_INFO[metricKey]

    setFormData((prev) => ({
      ...prev,
      metric: metricKey,
      value: metricInfo?.defaultValue || 0,
      condition: metricKey === "averageLoadTime" || metricKey === "fallbackUsageRate" ? "above" : "below",
    }))
  }

  const applyAiRecommendation = (recommendation: AIThresholdRecommendation) => {
    setFormData((prev) => ({
      ...prev,
      metric: recommendation.metric,
      condition: recommendation.condition,
      value: recommendation.recommendedValue,
      name: `AI: ${recommendation.metric.replace(/([A-Z])/g, " $1")} Alert`,
      description: recommendation.reasoning,
      cooldownMinutes: recommendation.priority === "critical" ? 5 : recommendation.priority === "high" ? 10 : 15,
      notificationChannels: recommendation.priority === "critical" ? ["browser", "console"] : ["console"],
    }))

    toast({
      title: "AI Recommendation Applied! 🤖",
      description: `Smart threshold values have been set based on your performance data.`,
    })
  }

  const applyTemplate = (templateName: string) => {
    const templates = logoPerformanceMonitor.getThresholdTemplates()
    const template = templates[templateName]

    if (template && template.length > 0) {
      const firstThreshold = template[0]
      setFormData((prev) => ({
        ...prev,
        name: firstThreshold.name || `${templateName} Threshold`,
        metric: firstThreshold.metric || "successRate",
        condition: firstThreshold.condition || "below",
        value: firstThreshold.value || 95,
        cooldownMinutes: firstThreshold.cooldownMinutes || 15,
        notificationChannels: firstThreshold.notificationChannels || ["console"],
        description: `Applied ${templateName} template configuration`,
      }))

      toast({
        title: "Template Applied",
        description: `${templateName} template configuration has been loaded.`,
      })
    }
  }

  const handleNext = () => {
    const stepErrors = validationErrors.filter((error) => {
      if (currentStep === 1) return ["name"].includes(error.field)
      if (currentStep === 2) return ["metric", "condition", "value"].includes(error.field)
      if (currentStep === 3) return ["notificationChannels", "cooldownMinutes"].includes(error.field)
      return false
    })

    if (stepErrors.length > 0) {
      toast({
        title: "Validation Error",
        description: stepErrors[0].message,
        variant: "destructive",
      })
      return
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    if (validationErrors.length > 0) {
      toast({
        title: "Validation Error",
        description: "Please fix all validation errors before saving.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      const threshold = logoPerformanceMonitor.addThreshold({
        name: formData.name,
        metric: formData.metric as any,
        condition: formData.condition as any,
        value: formData.value,
        enabled: formData.enabled,
        cooldownMinutes: formData.cooldownMinutes,
        notificationChannels: formData.notificationChannels,
      })

      toast({
        title: "Threshold Created! 🎯",
        description: `"${threshold.name}" is now monitoring your logo performance.`,
      })

      // Reset form
      setFormData({
        name: "",
        description: "",
        metric: "",
        condition: "",
        value: 0,
        enabled: true,
        cooldownMinutes: 15,
        notificationChannels: ["console"],
      })
      setCurrentStep(1)

      // Reload existing thresholds
      const updatedThresholds = logoPerformanceMonitor.getThresholds()
      setExistingThresholds(updatedThresholds)
    } catch (error) {
      toast({
        title: "Creation Error",
        description: "Failed to create threshold. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const exportConfiguration = () => {
    const config = {
      threshold: formData,
      timestamp: new Date().toISOString(),
      performanceContext: performanceReport,
    }
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `threshold-config-${formData.name.replace(/\s+/g, "-").toLowerCase()}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    toast({
      title: "Configuration Exported",
      description: "Threshold configuration has been downloaded.",
    })
  }

  const getCurrentStepErrors = () => {
    return validationErrors.filter((error) => {
      if (currentStep === 1) return ["name"].includes(error.field)
      if (currentStep === 2) return ["metric", "condition", "value"].includes(error.field)
      if (currentStep === 3) return ["notificationChannels", "cooldownMinutes"].includes(error.field)
      return false
    })
  }

  const getPerformanceContext = () => {
    if (!performanceReport || !formData.metric) return null

    const currentValue = performanceReport[formData.metric as keyof PerformanceReport] as number
    const metricInfo = METRIC_INFO[formData.metric as keyof typeof METRIC_INFO]

    if (!metricInfo) return null

    let status = "unknown"
    let statusColor = "text-gray-600"
    let recommendation = ""

    if (formData.metric === "successRate") {
      if (currentValue >= 98) {
        status = "excellent"
        statusColor = "text-green-600"
        recommendation = "Consider setting threshold around 96-97% to maintain excellence"
      } else if (currentValue >= 95) {
        status = "good"
        statusColor = "text-blue-600"
        recommendation = "Consider setting threshold around 92-94% for balanced monitoring"
      } else if (currentValue >= 90) {
        status = "fair"
        statusColor = "text-yellow-600"
        recommendation = "Consider setting threshold around 88-90% to track improvements"
      } else {
        status = "poor"
        statusColor = "text-red-600"
        recommendation = "Consider setting threshold around 85% for immediate alerts"
      }
    } else if (formData.metric === "averageLoadTime") {
      if (currentValue <= 1000) {
        status = "excellent"
        statusColor = "text-green-600"
        recommendation = "Consider setting threshold around 1500ms to maintain speed"
      } else if (currentValue <= 2000) {
        status = "good"
        statusColor = "text-blue-600"
        recommendation = "Consider setting threshold around 2500ms for balanced monitoring"
      } else if (currentValue <= 3000) {
        status = "fair"
        statusColor = "text-yellow-600"
        recommendation = "Consider setting threshold around 3500ms to track improvements"
      } else {
        status = "poor"
        statusColor = "text-red-600"
        recommendation = "Consider setting threshold around 4000ms for immediate alerts"
      }
    } else if (formData.metric === "fallbackUsageRate") {
      if (currentValue <= 5) {
        status = "excellent"
        statusColor = "text-green-600"
        recommendation = "Consider setting threshold around 8-10% to detect degradation"
      } else if (currentValue <= 10) {
        status = "good"
        statusColor = "text-blue-600"
        recommendation = "Consider setting threshold around 15% for balanced monitoring"
      } else if (currentValue <= 20) {
        status = "fair"
        statusColor = "text-yellow-600"
        recommendation = "Consider setting threshold around 25% to track improvements"
      } else {
        status = "poor"
        statusColor = "text-red-600"
        recommendation = "Consider setting threshold around 30% for immediate alerts"
      }
    }

    return {
      currentValue,
      status,
      statusColor,
      recommendation,
      unit: metricInfo.unit,
    }
  }

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              step <= currentStep
                ? "bg-blue-600 text-white"
                : step === currentStep + 1
                  ? "bg-blue-100 text-blue-600 border-2 border-blue-600"
                  : "bg-gray-200 text-gray-500"
            }`}
          >
            {step < currentStep ? <CheckCircle className="w-4 h-4" /> : step}
          </div>
          {step < totalSteps && (
            <div className={`w-12 h-1 mx-2 ${step < currentStep ? "bg-blue-600" : "bg-gray-200"}`} />
          )}
        </div>
      ))}
    </div>
  )

  const renderStep1 = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="w-5 h-5 text-blue-600" />
          Step 1: Basic Configuration
        </CardTitle>
        <p className="text-sm text-muted-foreground">Set up the basic information for your performance threshold</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Threshold Name */}
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium">
            Threshold Name *
          </Label>
          <Input
            id="name"
            placeholder="e.g., Critical Success Rate Alert"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className={validationErrors.some((e) => e.field === "name") ? "border-red-500" : ""}
          />
          {validationErrors.find((e) => e.field === "name") && (
            <p className="text-sm text-red-600">{validationErrors.find((e) => e.field === "name")?.message}</p>
          )}
          <p className="text-xs text-muted-foreground">
            Choose a descriptive name that clearly identifies the purpose of this threshold
          </p>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label htmlFor="description" className="text-sm font-medium">
            Description (Optional)
          </Label>
          <Textarea
            id="description"
            placeholder="Describe when this threshold should trigger and what action to take..."
            value={formData.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            rows={3}
          />
          <p className="text-xs text-muted-foreground">
            Add context about this threshold's purpose and expected response actions
          </p>
        </div>

        {/* Enable/Disable Toggle */}
        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
          <div>
            <Label htmlFor="enabled" className="text-sm font-medium">
              Enable Threshold
            </Label>
            <p className="text-xs text-muted-foreground">Threshold will start monitoring immediately when enabled</p>
          </div>
          <Switch
            id="enabled"
            checked={formData.enabled}
            onCheckedChange={(checked) => handleInputChange("enabled", checked)}
          />
        </div>

        {/* Template Selection */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Quick Start Templates</Label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {Object.entries(logoPerformanceMonitor.getThresholdTemplates()).map(([templateName, template]) => (
              <Button
                key={templateName}
                variant="outline"
                size="sm"
                onClick={() => applyTemplate(templateName)}
                className="justify-start h-auto p-3"
              >
                <div className="text-left">
                  <div className="font-medium capitalize">{templateName}</div>
                  <div className="text-xs text-muted-foreground">
                    {template.length} threshold{template.length !== 1 ? "s" : ""}
                  </div>
                </div>
              </Button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            Templates provide pre-configured thresholds for different environments
          </p>
        </div>
      </CardContent>
    </Card>
  )

  const renderStep2 = () => {
    const performanceContext = getPerformanceContext()

    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            Step 2: Threshold Conditions
          </CardTitle>
          <p className="text-sm text-muted-foreground">Configure the metric to monitor and threshold conditions</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Metric Selection */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Performance Metric *</Label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {Object.entries(METRIC_INFO).map(([key, info]) => {
                const Icon = info.icon
                return (
                  <Button
                    key={key}
                    variant={formData.metric === key ? "default" : "outline"}
                    onClick={() => handleMetricChange(key)}
                    className="h-auto p-4 justify-start"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`w-5 h-5 ${info.color}`} />
                      <div className="text-left">
                        <div className="font-medium">{info.name}</div>
                        <div className="text-xs text-muted-foreground">{info.description}</div>
                      </div>
                    </div>
                  </Button>
                )
              })}
            </div>
            {validationErrors.find((e) => e.field === "metric") && (
              <p className="text-sm text-red-600">{validationErrors.find((e) => e.field === "metric")?.message}</p>
            )}
          </div>

          {/* Current Performance Context */}
          {performanceContext && (
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Current Performance:</span>
                    <Badge variant="outline" className={performanceContext.statusColor}>
                      {performanceContext.currentValue.toFixed(1)}
                      {performanceContext.unit} ({performanceContext.status})
                    </Badge>
                  </div>
                  <p className="text-sm">{performanceContext.recommendation}</p>
                </div>
              </AlertDescription>
            </Alert>
          )}

          {/* Condition and Value */}
          {formData.metric && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Condition Selection */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Condition *</Label>
                  <Select value={formData.condition} onValueChange={(value) => handleInputChange("condition", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="above">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-red-500" />
                          Above (Alert when higher)
                        </div>
                      </SelectItem>
                      <SelectItem value="below">
                        <div className="flex items-center gap-2">
                          <TrendingDown className="w-4 h-4 text-red-500" />
                          Below (Alert when lower)
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {validationErrors.find((e) => e.field === "condition") && (
                    <p className="text-sm text-red-600">
                      {validationErrors.find((e) => e.field === "condition")?.message}
                    </p>
                  )}
                </div>

                {/* Threshold Value */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium">
                    Threshold Value * ({METRIC_INFO[formData.metric as keyof typeof METRIC_INFO]?.unit})
                  </Label>
                  <Input
                    type="number"
                    value={formData.value}
                    onChange={(e) => handleInputChange("value", Number.parseFloat(e.target.value) || 0)}
                    min={METRIC_INFO[formData.metric as keyof typeof METRIC_INFO]?.range[0]}
                    max={METRIC_INFO[formData.metric as keyof typeof METRIC_INFO]?.range[1]}
                    step={METRIC_INFO[formData.metric as keyof typeof METRIC_INFO]?.step}
                    className={validationErrors.some((e) => e.field === "value") ? "border-red-500" : ""}
                  />
                  {validationErrors.find((e) => e.field === "value") && (
                    <p className="text-sm text-red-600">{validationErrors.find((e) => e.field === "value")?.message}</p>
                  )}
                </div>
              </div>

              {/* Visual Slider */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Visual Threshold Selector</Label>
                <div className="px-3">
                  <Slider
                    value={[formData.value]}
                    onValueChange={(value) => handleInputChange("value", value[0])}
                    min={METRIC_INFO[formData.metric as keyof typeof METRIC_INFO]?.range[0]}
                    max={METRIC_INFO[formData.metric as keyof typeof METRIC_INFO]?.range[1]}
                    step={METRIC_INFO[formData.metric as keyof typeof METRIC_INFO]?.step}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>{METRIC_INFO[formData.metric as keyof typeof METRIC_INFO]?.range[0]}</span>
                    <span className="font-medium">
                      {formData.value}
                      {METRIC_INFO[formData.metric as keyof typeof METRIC_INFO]?.unit}
                    </span>
                    <span>{METRIC_INFO[formData.metric as keyof typeof METRIC_INFO]?.range[1]}</span>
                  </div>
                </div>
              </div>

              {/* AI Recommendations */}
              {aiRecommendations.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium flex items-center gap-2">
                      <Brain className="w-4 h-4 text-blue-600" />
                      AI Recommendations
                    </Label>
                    <Button variant="ghost" size="sm" onClick={() => setShowAiSuggestions(!showAiSuggestions)}>
                      {showAiSuggestions ? "Hide" : "Show"} Suggestions
                    </Button>
                  </div>

                  {showAiSuggestions && (
                    <div className="space-y-2">
                      {aiRecommendations.map((rec, index) => (
                        <div
                          key={index}
                          className="p-3 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Brain className="w-4 h-4 text-blue-600" />
                              <span className="font-medium text-sm">
                                AI Suggests: {rec.condition} {rec.recommendedValue}
                                {METRIC_INFO[rec.metric]?.unit}
                              </span>
                              <Badge variant="outline" className="text-xs">
                                {rec.confidence}% confidence
                              </Badge>
                            </div>
                            <Button size="sm" variant="outline" onClick={() => applyAiRecommendation(rec)}>
                              <Sparkles className="w-3 h-3 mr-1" />
                              Apply
                            </Button>
                          </div>
                          <p className="text-xs text-slate-600">{rec.reasoning}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    )
  }

  const renderStep3 = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="w-5 h-5 text-blue-600" />
          Step 3: Notification Setup
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Configure how and when you want to be notified about threshold violations
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Notification Channels */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Notification Channels *</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {NOTIFICATION_CHANNELS.map((channel) => {
              const Icon = channel.icon
              const isSelected = formData.notificationChannels.includes(channel.id)
              return (
                <div
                  key={channel.id}
                  className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                    isSelected ? "border-blue-500 bg-blue-50" : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => {
                    const channels = isSelected
                      ? formData.notificationChannels.filter((c) => c !== channel.id)
                      : [...formData.notificationChannels, channel.id]
                    handleInputChange("notificationChannels", channels)
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Checkbox checked={isSelected} readOnly />
                    <Icon className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium text-sm">{channel.name}</div>
                      <div className="text-xs text-muted-foreground">{channel.description}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          {validationErrors.find((e) => e.field === "notificationChannels") && (
            <p className="text-sm text-red-600">
              {validationErrors.find((e) => e.field === "notificationChannels")?.message}
            </p>
          )}
        </div>

        {/* Cooldown Period */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Cooldown Period (minutes) *</Label>
          <div className="space-y-2">
            <Input
              type="number"
              value={formData.cooldownMinutes}
              onChange={(e) => handleInputChange("cooldownMinutes", Number.parseInt(e.target.value) || 1)}
              min={1}
              max={1440}
              className={validationErrors.some((e) => e.field === "cooldownMinutes") ? "border-red-500" : ""}
            />
            <Slider
              value={[formData.cooldownMinutes]}
              onValueChange={(value) => handleInputChange("cooldownMinutes", value[0])}
              min={1}
              max={60}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1 min</span>
              <span className="font-medium">{formData.cooldownMinutes} minutes</span>
              <span>60 min</span>
            </div>
          </div>
          {validationErrors.find((e) => e.field === "cooldownMinutes") && (
            <p className="text-sm text-red-600">
              {validationErrors.find((e) => e.field === "cooldownMinutes")?.message}
            </p>
          )}
          <p className="text-xs text-muted-foreground">Minimum time between notifications to prevent alert spam</p>
        </div>

        {/* Notification Preview */}
        <Alert>
          <Bell className="h-4 w-4" />
          <AlertDescription>
            <div className="space-y-2">
              <div className="font-medium">Notification Preview:</div>
              <div className="text-sm bg-white p-2 rounded border">
                🚨 <strong>{formData.name || "Threshold Name"}</strong>: {formData.metric || "metric"} is{" "}
                {formData.condition} {formData.value}
                {formData.metric ? METRIC_INFO[formData.metric as keyof typeof METRIC_INFO]?.unit : ""}
              </div>
              <div className="text-xs text-muted-foreground">
                Notifications will be sent via: {formData.notificationChannels.join(", ") || "none selected"}
              </div>
            </div>
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  )

  const renderStep4 = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-600" />
          Step 4: Review & Save
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Review your threshold configuration and save to start monitoring
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Configuration Summary */}
        <div className="space-y-4">
          <h3 className="font-medium">Configuration Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="p-3 bg-slate-50 rounded-lg">
                <div className="text-sm font-medium text-slate-700">Threshold Name</div>
                <div className="text-lg font-semibold">{formData.name || "Unnamed Threshold"}</div>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <div className="text-sm font-medium text-slate-700">Metric & Condition</div>
                <div className="text-lg font-semibold">
                  {formData.metric ? METRIC_INFO[formData.metric as keyof typeof METRIC_INFO]?.name : "No metric"}{" "}
                  {formData.condition} {formData.value}
                  {formData.metric ? METRIC_INFO[formData.metric as keyof typeof METRIC_INFO]?.unit : ""}
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-slate-50 rounded-lg">
                <div className="text-sm font-medium text-slate-700">Status</div>
                <div className="flex items-center gap-2">
                  <Badge variant={formData.enabled ? "default" : "secondary"}>
                    {formData.enabled ? "Enabled" : "Disabled"}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {formData.enabled ? "Will start monitoring immediately" : "Will remain inactive"}
                  </span>
                </div>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <div className="text-sm font-medium text-slate-700">Notifications</div>
                <div className="text-sm">
                  {formData.notificationChannels.length} channel{formData.notificationChannels.length !== 1 ? "s" : ""}{" "}
                  • {formData.cooldownMinutes}min cooldown
                </div>
              </div>
            </div>
          </div>

          {formData.description && (
            <div className="p-3 bg-slate-50 rounded-lg">
              <div className="text-sm font-medium text-slate-700 mb-1">Description</div>
              <div className="text-sm">{formData.description}</div>
            </div>
          )}
        </div>

        {/* Validation Status */}
        <div className="space-y-2">
          <h3 className="font-medium">Validation Status</h3>
          {validationErrors.length === 0 ? (
            <Alert>
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">
                ✅ Configuration is valid and ready to save
              </AlertDescription>
            </Alert>
          ) : (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <div className="space-y-1">
                  <div className="font-medium">Please fix the following issues:</div>
                  {validationErrors.map((error, index) => (
                    <div key={index} className="text-sm">
                      • {error.message}
                    </div>
                  ))}
                </div>
              </AlertDescription>
            </Alert>
          )}
        </div>

        {/* Performance Impact */}
        {performanceReport && (
          <div className="space-y-2">
            <h3 className="font-medium">Expected Impact</h3>
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                <div className="space-y-2">
                  <div className="text-sm">
                    Based on your current performance data ({performanceReport.totalLogos} samples):
                  </div>
                  <div className="text-sm">
                    • This threshold would have triggered{" "}
                    <strong>
                      {formData.metric && formData.condition && formData.value
                        ? (() => {
                            const currentValue = performanceReport[formData.metric as keyof PerformanceReport] as number
                            if (formData.condition === "above") {
                              return currentValue > formData.value ? "immediately" : "0 times"
                            } else {
                              return currentValue < formData.value ? "immediately" : "0 times"
                            }
                          })()
                        : "unknown"}
                    </strong>{" "}
                    in the current dataset
                  </div>
                  <div className="text-sm">
                    • Notifications will be limited by the {formData.cooldownMinutes}-minute cooldown period
                  </div>
                </div>
              </AlertDescription>
            </Alert>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Button onClick={handleSubmit} disabled={validationErrors.length > 0 || isLoading} className="flex-1">
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Creating...
              </>
            ) : (
              <>
                <Save className="w-4 h-4 mr-2" />
                Create Threshold
              </>
            )}
          </Button>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" onClick={() => setPreviewDialogOpen(true)}>
                  <Eye className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Preview Configuration</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" onClick={exportConfiguration}>
                  <Download className="w-4 h-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Export Configuration</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <TooltipProvider>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Progress Indicator */}
        {renderStepIndicator()}

        {/* Current Step Content */}
        <div className="min-h-[600px]">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1}>
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">
              Step {currentStep} of {totalSteps}
            </span>
            {getCurrentStepErrors().length > 0 && (
              <Badge variant="destructive" className="text-xs">
                {getCurrentStepErrors().length} error{getCurrentStepErrors().length !== 1 ? "s" : ""}
              </Badge>
            )}
          </div>

          {currentStep < totalSteps ? (
            <Button onClick={handleNext}>
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} disabled={validationErrors.length > 0 || isLoading}>
              {isLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Creating...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Create Threshold
                </>
              )}
            </Button>
          )}
        </div>

        {/* Existing Thresholds */}
        {existingThresholds.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                Active Thresholds ({existingThresholds.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {existingThresholds.map((threshold) => (
                  <div key={threshold.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Badge variant={threshold.enabled ? "default" : "secondary"}>
                        {threshold.enabled ? "Active" : "Disabled"}
                      </Badge>
                      <div>
                        <div className="font-medium">{threshold.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {threshold.metric} {threshold.condition} {threshold.value}
                          {threshold.metric === "averageLoadTime" ? "ms" : "%"}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                logoPerformanceMonitor.updateThreshold(threshold.id, {
                                  enabled: !threshold.enabled,
                                })
                                loadInitialData()
                              }}
                            >
                              {threshold.enabled ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{threshold.enabled ? "Disable" : "Enable"} Threshold</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                logoPerformanceMonitor.deleteThreshold(threshold.id)
                                loadInitialData()
                                toast({
                                  title: "Threshold Deleted",
                                  description: `"${threshold.name}" has been removed.`,
                                })
                              }}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Delete Threshold</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Preview Dialog */}
        <Dialog open={previewDialogOpen} onOpenChange={setPreviewDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Threshold Configuration Preview</DialogTitle>
              <DialogDescription>Review the complete threshold configuration</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <pre className="text-sm bg-slate-50 p-4 rounded-lg overflow-auto">
                {JSON.stringify(
                  {
                    ...formData,
                    id: "preview",
                    createdAt: new Date().toISOString(),
                  },
                  null,
                  2,
                )}
              </pre>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setPreviewDialogOpen(false)}>
                Close
              </Button>
              <Button onClick={exportConfiguration}>
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </TooltipProvider>
  )
}
