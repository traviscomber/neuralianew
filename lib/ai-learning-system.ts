import { logoPerformanceMonitor, type PerformanceReport } from "@/lib/logo-performance-monitor"
import { aiThresholdAnalyzer, type AIThresholdRecommendation } from "@/lib/ai-threshold-analyzer"

export interface LearningDataPoint {
  id: string
  timestamp: Date
  recommendation: AIThresholdRecommendation
  implementation: {
    applied: boolean
    appliedAt?: Date
    rollbackAt?: Date
    userFeedback?: "positive" | "negative" | "neutral"
    effectivenessScore?: number // 0-100
  }
  outcomes: {
    alertsTriggered: number
    falsePositives: number
    truePositives: number
    performanceImpact: number
    userSatisfaction?: number
  }
  context: {
    systemLoad: number
    timeOfDay: number
    dayOfWeek: number
    seasonalFactor: number
    businessContext: string
  }
}

export interface ModelPerformance {
  modelId: string
  accuracy: number
  precision: number
  recall: number
  f1Score: number
  confidenceCalibration: number
  lastUpdated: Date
  trainingDataSize: number
  validationResults: {
    truePositives: number
    falsePositives: number
    trueNegatives: number
    falseNegatives: number
  }
}

export interface LearningInsight {
  id: string
  type: "pattern" | "improvement" | "warning" | "optimization"
  title: string
  description: string
  confidence: number
  impact: "low" | "medium" | "high"
  actionable: boolean
  recommendation?: string
  supportingData: {
    dataPoints: number
    timeframe: string
    correlations: Array<{
      factor: string
      correlation: number
      significance: number
    }>
  }
}

class AILearningSystem {
  private static instance: AILearningSystem
  private learningData: Map<string, LearningDataPoint> = new Map()
  private modelPerformance: Map<string, ModelPerformance> = new Map()
  private learningInsights: LearningInsight[] = []
  private isLearning = false

  static getInstance(): AILearningSystem {
    if (!AILearningSystem.instance) {
      AILearningSystem.instance = new AILearningSystem()
    }
    return AILearningSystem.instance
  }

  constructor() {
    this.initializeModels()
    this.startContinuousLearning()
  }

  private initializeModels() {
    // Initialize base model performance metrics
    const baseModels = [
      "threshold_optimizer",
      "anomaly_detector",
      "performance_predictor",
      "seasonal_analyzer",
      "risk_assessor",
    ]

    baseModels.forEach((modelId) => {
      this.modelPerformance.set(modelId, {
        modelId,
        accuracy: 75 + Math.random() * 20, // Start with 75-95% accuracy
        precision: 70 + Math.random() * 25,
        recall: 65 + Math.random() * 30,
        f1Score: 70 + Math.random() * 25,
        confidenceCalibration: 80 + Math.random() * 15,
        lastUpdated: new Date(),
        trainingDataSize: Math.floor(Math.random() * 1000) + 500,
        validationResults: {
          truePositives: Math.floor(Math.random() * 100) + 50,
          falsePositives: Math.floor(Math.random() * 20) + 5,
          trueNegatives: Math.floor(Math.random() * 150) + 100,
          falseNegatives: Math.floor(Math.random() * 15) + 3,
        },
      })
    })
  }

  private startContinuousLearning() {
    // Run learning cycle every 5 minutes
    setInterval(
      () => {
        if (!this.isLearning) {
          this.runLearningCycle()
        }
      },
      5 * 60 * 1000,
    )

    // Initial learning cycle
    setTimeout(() => this.runLearningCycle(), 1000)
  }

  private async runLearningCycle() {
    this.isLearning = true
    try {
      // Collect new performance data
      await this.collectPerformanceData()

      // Update model performance
      await this.updateModelPerformance()

      // Generate learning insights
      await this.generateLearningInsights()

      // Optimize recommendation algorithms
      await this.optimizeRecommendationAlgorithms()
    } catch (error) {
      console.error("Learning cycle error:", error)
    } finally {
      this.isLearning = false
    }
  }

  private async collectPerformanceData() {
    const report = logoPerformanceMonitor.generateReport()
    const currentTime = new Date()

    // Simulate collecting data about recent recommendations
    const recentRecommendations = aiThresholdAnalyzer.getAnalysisHistory().slice(-10)

    recentRecommendations.forEach((rec) => {
      if (!this.learningData.has(rec.id)) {
        const dataPoint: LearningDataPoint = {
          id: rec.id,
          timestamp: currentTime,
          recommendation: rec,
          implementation: {
            applied: Math.random() > 0.3, // 70% application rate
            appliedAt: Math.random() > 0.3 ? new Date(currentTime.getTime() - Math.random() * 86400000) : undefined,
            userFeedback: Math.random() > 0.5 ? "positive" : Math.random() > 0.5 ? "neutral" : "negative",
            effectivenessScore: 60 + Math.random() * 35,
          },
          outcomes: {
            alertsTriggered: Math.floor(Math.random() * 20),
            falsePositives: Math.floor(Math.random() * 5),
            truePositives: Math.floor(Math.random() * 15) + 5,
            performanceImpact: (Math.random() - 0.5) * 20, // -10% to +10%
            userSatisfaction: 60 + Math.random() * 35,
          },
          context: {
            systemLoad: report.totalLogos / 1000,
            timeOfDay: currentTime.getHours(),
            dayOfWeek: currentTime.getDay(),
            seasonalFactor: this.calculateSeasonalFactor(currentTime),
            businessContext: this.inferBusinessContext(report),
          },
        }

        this.learningData.set(rec.id, dataPoint)
      }
    })
  }

  private async updateModelPerformance() {
    const dataPoints = Array.from(this.learningData.values())

    this.modelPerformance.forEach((performance, modelId) => {
      // Calculate new performance metrics based on recent data
      const relevantData = dataPoints
        .filter((dp) => dp.implementation.applied && dp.implementation.effectivenessScore !== undefined)
        .slice(-50) // Last 50 data points

      if (relevantData.length > 10) {
        const avgEffectiveness =
          relevantData.reduce((sum, dp) => sum + (dp.implementation.effectivenessScore || 0), 0) / relevantData.length

        const positiveOutcomes = relevantData.filter(
          (dp) => dp.outcomes.truePositives > dp.outcomes.falsePositives,
        ).length

        // Update accuracy based on effectiveness
        const newAccuracy = Math.min(
          99,
          Math.max(50, performance.accuracy * 0.9 + (avgEffectiveness / 100) * 0.1 * 100),
        )

        // Update precision based on positive outcomes
        const newPrecision = Math.min(
          99,
          Math.max(50, performance.precision * 0.9 + (positiveOutcomes / relevantData.length) * 0.1 * 100),
        )

        this.modelPerformance.set(modelId, {
          ...performance,
          accuracy: newAccuracy,
          precision: newPrecision,
          recall: Math.min(99, Math.max(50, performance.recall + (Math.random() - 0.5) * 2)),
          f1Score: (newAccuracy + newPrecision) / 2,
          lastUpdated: new Date(),
          trainingDataSize: performance.trainingDataSize + relevantData.length,
        })
      }
    })
  }

  private async generateLearningInsights() {
    const dataPoints = Array.from(this.learningData.values())
    const insights: LearningInsight[] = []

    // Pattern Recognition Insights
    const timePatterns = this.analyzeTimePatterns(dataPoints)
    if (timePatterns.significance > 0.7) {
      insights.push({
        id: `pattern_time_${Date.now()}`,
        type: "pattern",
        title: "Time-Based Performance Pattern Detected",
        description: `AI has identified a significant performance pattern: ${timePatterns.description}. Recommendations during ${timePatterns.optimalTime} show ${(timePatterns.improvement * 100).toFixed(1)}% better effectiveness.`,
        confidence: Math.round(timePatterns.significance * 100),
        impact: timePatterns.improvement > 0.2 ? "high" : timePatterns.improvement > 0.1 ? "medium" : "low",
        actionable: true,
        recommendation: `Consider implementing time-weighted recommendation scoring to optimize for ${timePatterns.optimalTime} patterns.`,
        supportingData: {
          dataPoints: dataPoints.length,
          timeframe: "Last 30 days",
          correlations: [
            {
              factor: "time_of_day",
              correlation: timePatterns.correlation,
              significance: timePatterns.significance,
            },
          ],
        },
      })
    }

    // Model Improvement Insights
    const modelImprovements = this.analyzeModelImprovements()
    modelImprovements.forEach((improvement) => {
      insights.push({
        id: `improvement_${improvement.modelId}_${Date.now()}`,
        type: "improvement",
        title: `${improvement.modelId} Model Performance Improvement`,
        description: `The ${improvement.modelId} model has improved by ${improvement.improvementPercent.toFixed(1)}% over the last ${improvement.timeframe}. Current accuracy: ${improvement.currentAccuracy.toFixed(1)}%.`,
        confidence: 95,
        impact: improvement.improvementPercent > 10 ? "high" : improvement.improvementPercent > 5 ? "medium" : "low",
        actionable: false,
        supportingData: {
          dataPoints: improvement.dataPoints,
          timeframe: improvement.timeframe,
          correlations: [],
        },
      })
    })

    // Warning Insights
    const warnings = this.detectWarnings(dataPoints)
    warnings.forEach((warning) => {
      insights.push({
        id: `warning_${warning.type}_${Date.now()}`,
        type: "warning",
        title: warning.title,
        description: warning.description,
        confidence: warning.confidence,
        impact: warning.impact,
        actionable: true,
        recommendation: warning.recommendation,
        supportingData: warning.supportingData,
      })
    })

    // Optimization Insights
    const optimizations = this.identifyOptimizations(dataPoints)
    optimizations.forEach((opt) => {
      insights.push({
        id: `optimization_${opt.area}_${Date.now()}`,
        type: "optimization",
        title: opt.title,
        description: opt.description,
        confidence: opt.confidence,
        impact: opt.impact,
        actionable: true,
        recommendation: opt.recommendation,
        supportingData: opt.supportingData,
      })
    })

    // Keep only the most recent and relevant insights
    this.learningInsights = [...insights, ...this.learningInsights]
      .sort((a, b) => b.confidence - a.confidence)
      .slice(0, 20)
  }

  private analyzeTimePatterns(dataPoints: LearningDataPoint[]) {
    const hourlyEffectiveness = new Map<number, number[]>()

    dataPoints.forEach((dp) => {
      if (dp.implementation.effectivenessScore) {
        const hour = dp.context.timeOfDay
        if (!hourlyEffectiveness.has(hour)) {
          hourlyEffectiveness.set(hour, [])
        }
        hourlyEffectiveness.get(hour)!.push(dp.implementation.effectivenessScore)
      }
    })

    const hourlyAvgs = new Map<number, number>()
    hourlyEffectiveness.forEach((scores, hour) => {
      hourlyAvgs.set(hour, scores.reduce((sum, score) => sum + score, 0) / scores.length)
    })

    if (hourlyAvgs.size < 3) {
      return { significance: 0, correlation: 0, improvement: 0, optimalTime: "", description: "" }
    }

    const avgScores = Array.from(hourlyAvgs.values())
    const maxScore = Math.max(...avgScores)
    const minScore = Math.min(...avgScores)
    const improvement = (maxScore - minScore) / 100

    const optimalHour = Array.from(hourlyAvgs.entries()).reduce(
      (max, [hour, score]) => (score > max.score ? { hour, score } : max),
      { hour: 0, score: 0 },
    )

    return {
      significance: improvement > 0.1 ? 0.8 : improvement > 0.05 ? 0.6 : 0.4,
      correlation: improvement * 2,
      improvement,
      optimalTime: `${optimalHour.hour}:00-${optimalHour.hour + 1}:00`,
      description: `recommendations show ${(improvement * 100).toFixed(1)}% better effectiveness during optimal hours`,
    }
  }

  private analyzeModelImprovements() {
    const improvements: Array<{
      modelId: string
      improvementPercent: number
      currentAccuracy: number
      timeframe: string
      dataPoints: number
    }> = []

    this.modelPerformance.forEach((performance, modelId) => {
      // Simulate improvement tracking (in real implementation, this would compare with historical data)
      const baselineAccuracy = 75 + Math.random() * 15 // Simulated baseline
      const improvementPercent = ((performance.accuracy - baselineAccuracy) / baselineAccuracy) * 100

      if (improvementPercent > 2) {
        // Only report significant improvements
        improvements.push({
          modelId: modelId.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
          improvementPercent,
          currentAccuracy: performance.accuracy,
          timeframe: "7 days",
          dataPoints: performance.trainingDataSize,
        })
      }
    })

    return improvements
  }

  private detectWarnings(dataPoints: LearningDataPoint[]) {
    const warnings: Array<{
      type: string
      title: string
      description: string
      confidence: number
      impact: "low" | "medium" | "high"
      recommendation: string
      supportingData: any
    }> = []

    // Check for high false positive rate
    const recentData = dataPoints.slice(-20)
    const falsePositiveRate =
      recentData.reduce((sum, dp) => sum + dp.outcomes.falsePositives, 0) /
      Math.max(
        1,
        recentData.reduce((sum, dp) => sum + dp.outcomes.alertsTriggered, 0),
      )

    if (falsePositiveRate > 0.3) {
      warnings.push({
        type: "false_positives",
        title: "High False Positive Rate Detected",
        description: `Recent recommendations are generating ${(falsePositiveRate * 100).toFixed(1)}% false positive alerts, which may lead to alert fatigue and reduced team responsiveness.`,
        confidence: 85,
        impact: "high",
        recommendation:
          "Consider increasing threshold sensitivity or implementing additional validation layers for high-impact alerts.",
        supportingData: {
          dataPoints: recentData.length,
          timeframe: "Last 20 implementations",
          correlations: [
            {
              factor: "false_positive_rate",
              correlation: falsePositiveRate,
              significance: 0.85,
            },
          ],
        },
      })
    }

    // Check for declining user satisfaction
    const satisfactionTrend = this.calculateSatisfactionTrend(dataPoints)
    if (satisfactionTrend.isDecreasing && satisfactionTrend.significance > 0.7) {
      warnings.push({
        type: "satisfaction_decline",
        title: "User Satisfaction Declining",
        description: `User satisfaction with AI recommendations has decreased by ${satisfactionTrend.decline.toFixed(1)}% over the recent period, indicating potential issues with recommendation quality or relevance.`,
        confidence: Math.round(satisfactionTrend.significance * 100),
        impact: satisfactionTrend.decline > 15 ? "high" : satisfactionTrend.decline > 8 ? "medium" : "low",
        recommendation:
          "Review recent recommendation patterns and consider adjusting confidence thresholds or improving contextual analysis.",
        supportingData: {
          dataPoints: satisfactionTrend.dataPoints,
          timeframe: "Last 30 days",
          correlations: [
            {
              factor: "user_satisfaction",
              correlation: -satisfactionTrend.decline / 100,
              significance: satisfactionTrend.significance,
            },
          ],
        },
      })
    }

    return warnings
  }

  private identifyOptimizations(dataPoints: LearningDataPoint[]) {
    const optimizations: Array<{
      area: string
      title: string
      description: string
      confidence: number
      impact: "low" | "medium" | "high"
      recommendation: string
      supportingData: any
    }> = []

    // Identify confidence calibration opportunities
    const confidenceAnalysis = this.analyzeConfidenceCalibration(dataPoints)
    if (confidenceAnalysis.improvementPotential > 0.1) {
      optimizations.push({
        area: "confidence_calibration",
        title: "Confidence Score Calibration Opportunity",
        description: `AI confidence scores could be better calibrated. Analysis shows ${(confidenceAnalysis.improvementPotential * 100).toFixed(1)}% improvement potential in prediction accuracy through better confidence modeling.`,
        confidence: 88,
        impact: confidenceAnalysis.improvementPotential > 0.2 ? "high" : "medium",
        recommendation:
          "Implement confidence score recalibration using recent performance data to improve prediction reliability.",
        supportingData: {
          dataPoints: confidenceAnalysis.dataPoints,
          timeframe: "All historical data",
          correlations: [
            {
              factor: "confidence_accuracy_gap",
              correlation: confidenceAnalysis.improvementPotential,
              significance: 0.88,
            },
          ],
        },
      })
    }

    // Identify context-aware optimization opportunities
    const contextAnalysis = this.analyzeContextualFactors(dataPoints)
    if (contextAnalysis.significantFactors.length > 0) {
      optimizations.push({
        area: "contextual_awareness",
        title: "Context-Aware Recommendation Enhancement",
        description: `Analysis reveals ${contextAnalysis.significantFactors.length} contextual factors that significantly impact recommendation effectiveness. Incorporating these factors could improve accuracy by ${(contextAnalysis.improvementPotential * 100).toFixed(1)}%.`,
        confidence: 82,
        impact: contextAnalysis.improvementPotential > 0.15 ? "high" : "medium",
        recommendation: `Enhance recommendation algorithms to consider: ${contextAnalysis.significantFactors.join(", ")}`,
        supportingData: {
          dataPoints: contextAnalysis.dataPoints,
          timeframe: "Last 60 days",
          correlations: contextAnalysis.significantFactors.map((factor) => ({
            factor,
            correlation: 0.6 + Math.random() * 0.3,
            significance: 0.7 + Math.random() * 0.2,
          })),
        },
      })
    }

    return optimizations
  }

  private calculateSatisfactionTrend(dataPoints: LearningDataPoint[]) {
    const satisfactionData = dataPoints
      .filter((dp) => dp.outcomes.userSatisfaction !== undefined)
      .map((dp) => ({
        timestamp: dp.timestamp,
        satisfaction: dp.outcomes.userSatisfaction!,
      }))
      .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())

    if (satisfactionData.length < 10) {
      return { isDecreasing: false, decline: 0, significance: 0, dataPoints: satisfactionData.length }
    }

    const midpoint = Math.floor(satisfactionData.length / 2)
    const firstHalf = satisfactionData.slice(0, midpoint)
    const secondHalf = satisfactionData.slice(midpoint)

    const firstAvg = firstHalf.reduce((sum, d) => sum + d.satisfaction, 0) / firstHalf.length
    const secondAvg = secondHalf.reduce((sum, d) => sum + d.satisfaction, 0) / secondHalf.length

    const decline = firstAvg - secondAvg
    const isDecreasing = decline > 0
    const significance = Math.min(1, decline / 20) // Normalize to 0-1

    return {
      isDecreasing,
      decline,
      significance,
      dataPoints: satisfactionData.length,
    }
  }

  private analyzeConfidenceCalibration(dataPoints: LearningDataPoint[]) {
    const calibrationData = dataPoints
      .filter((dp) => dp.implementation.effectivenessScore !== undefined)
      .map((dp) => ({
        confidence: dp.recommendation.confidence,
        effectiveness: dp.implementation.effectivenessScore! / 100,
      }))

    if (calibrationData.length < 20) {
      return { improvementPotential: 0, dataPoints: calibrationData.length }
    }

    // Calculate calibration error (simplified)
    const avgConfidence = calibrationData.reduce((sum, d) => sum + d.confidence, 0) / calibrationData.length / 100
    const avgEffectiveness = calibrationData.reduce((sum, d) => sum + d.effectiveness, 0) / calibrationData.length

    const calibrationError = Math.abs(avgConfidence - avgEffectiveness)

    return {
      improvementPotential: calibrationError,
      dataPoints: calibrationData.length,
    }
  }

  private analyzeContextualFactors(dataPoints: LearningDataPoint[]) {
    const factors = ["systemLoad", "timeOfDay", "dayOfWeek", "seasonalFactor"]
    const significantFactors: string[] = []

    factors.forEach((factor) => {
      const correlation = this.calculateFactorCorrelation(dataPoints, factor)
      if (correlation > 0.3) {
        // Significant correlation threshold
        significantFactors.push(factor.replace(/([A-Z])/g, " $1").toLowerCase())
      }
    })

    const improvementPotential = significantFactors.length * 0.05 // 5% per significant factor

    return {
      significantFactors,
      improvementPotential,
      dataPoints: dataPoints.length,
    }
  }

  private calculateFactorCorrelation(dataPoints: LearningDataPoint[], factor: string): number {
    // Simplified correlation calculation
    const validData = dataPoints.filter(
      (dp) =>
        dp.implementation.effectivenessScore !== undefined &&
        dp.context[factor as keyof typeof dp.context] !== undefined,
    )

    if (validData.length < 10) return 0

    // Return a simulated correlation (in real implementation, this would be proper statistical correlation)
    return 0.2 + Math.random() * 0.6
  }

  private async optimizeRecommendationAlgorithms() {
    // This would contain the actual algorithm optimization logic
    // For now, we'll simulate improvements to model performance

    const learningRate = 0.01
    const dataPoints = Array.from(this.learningData.values())

    if (dataPoints.length > 50) {
      // Simulate algorithm optimization based on learning data
      this.modelPerformance.forEach((performance, modelId) => {
        const relevantData = dataPoints.filter((dp) => dp.implementation.applied).slice(-30)

        if (relevantData.length > 10) {
          const avgEffectiveness =
            relevantData.reduce((sum, dp) => sum + (dp.implementation.effectivenessScore || 0), 0) /
            relevantData.length /
            100

          // Gradually improve model performance based on effectiveness
          const improvement = (avgEffectiveness - 0.75) * learningRate // Target 75% effectiveness

          this.modelPerformance.set(modelId, {
            ...performance,
            accuracy: Math.min(99, Math.max(50, performance.accuracy + improvement)),
            precision: Math.min(99, Math.max(50, performance.precision + improvement * 0.8)),
            recall: Math.min(99, Math.max(50, performance.recall + improvement * 0.6)),
            lastUpdated: new Date(),
          })
        }
      })
    }
  }

  private calculateSeasonalFactor(date: Date): number {
    const month = date.getMonth()
    const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000)

    // Simulate seasonal patterns (higher in winter months, lower in summer)
    return 0.8 + 0.4 * Math.cos((dayOfYear / 365) * 2 * Math.PI)
  }

  private inferBusinessContext(report: PerformanceReport): string {
    if (report.totalLogos > 10000) return "high_traffic"
    if (report.totalLogos > 1000) return "medium_traffic"
    return "low_traffic"
  }

  // Public API methods

  recordRecommendationFeedback(
    recommendationId: string,
    feedback: "positive" | "negative" | "neutral",
    effectivenessScore?: number,
  ) {
    const dataPoint = this.learningData.get(recommendationId)
    if (dataPoint) {
      dataPoint.implementation.userFeedback = feedback
      if (effectivenessScore !== undefined) {
        dataPoint.implementation.effectivenessScore = effectivenessScore
      }
      this.learningData.set(recommendationId, dataPoint)
    }
  }

  recordImplementationOutcome(recommendationId: string, outcome: Partial<LearningDataPoint["outcomes"]>) {
    const dataPoint = this.learningData.get(recommendationId)
    if (dataPoint) {
      dataPoint.outcomes = { ...dataPoint.outcomes, ...outcome }
      this.learningData.set(recommendationId, dataPoint)
    }
  }

  getLearningInsights(): LearningInsight[] {
    return [...this.learningInsights]
  }

  getModelPerformance(): Map<string, ModelPerformance> {
    return new Map(this.modelPerformance)
  }

  getLearningStatistics() {
    const dataPoints = Array.from(this.learningData.values())
    const appliedRecommendations = dataPoints.filter((dp) => dp.implementation.applied)

    return {
      totalRecommendations: dataPoints.length,
      appliedRecommendations: appliedRecommendations.length,
      applicationRate: appliedRecommendations.length / Math.max(1, dataPoints.length),
      averageEffectiveness:
        appliedRecommendations.reduce((sum, dp) => sum + (dp.implementation.effectivenessScore || 0), 0) /
        Math.max(1, appliedRecommendations.length),
      positiveFeeback: dataPoints.filter((dp) => dp.implementation.userFeedback === "positive").length,
      negativeFeeback: dataPoints.filter((dp) => dp.implementation.userFeedback === "negative").length,
      learningDataSize: dataPoints.length,
      modelAccuracy:
        Array.from(this.modelPerformance.values()).reduce((sum, model) => sum + model.accuracy, 0) /
        Math.max(1, this.modelPerformance.size),
      lastLearningCycle: new Date(),
      isLearning: this.isLearning,
    }
  }

  exportLearningData() {
    return {
      learningData: Array.from(this.learningData.entries()),
      modelPerformance: Array.from(this.modelPerformance.entries()),
      learningInsights: this.learningInsights,
      statistics: this.getLearningStatistics(),
      exportedAt: new Date().toISOString(),
    }
  }

  importLearningData(data: any) {
    try {
      if (data.learningData) {
        this.learningData = new Map(data.learningData)
      }
      if (data.modelPerformance) {
        this.modelPerformance = new Map(data.modelPerformance)
      }
      if (data.learningInsights) {
        this.learningInsights = data.learningInsights
      }
      return true
    } catch (error) {
      console.error("Failed to import learning data:", error)
      return false
    }
  }
}

export const aiLearningSystem = AILearningSystem.getInstance()

// Hook for React components
export function useAILearningSystem() {
  const recordFeedback = (
    recommendationId: string,
    feedback: "positive" | "negative" | "neutral",
    effectivenessScore?: number,
  ) => aiLearningSystem.recordRecommendationFeedback(recommendationId, feedback, effectivenessScore)

  const recordOutcome = (recommendationId: string, outcome: Partial<LearningDataPoint["outcomes"]>) =>
    aiLearningSystem.recordImplementationOutcome(recommendationId, outcome)

  const getLearningInsights = () => aiLearningSystem.getLearningInsights()

  const getModelPerformance = () => aiLearningSystem.getModelPerformance()

  const getLearningStatistics = () => aiLearningSystem.getLearningStatistics()

  const exportData = () => aiLearningSystem.exportLearningData()

  const importData = (data: any) => aiLearningSystem.importLearningData(data)

  return {
    recordFeedback,
    recordOutcome,
    getLearningInsights,
    getModelPerformance,
    getLearningStatistics,
    exportData,
    importData,
  }
}
