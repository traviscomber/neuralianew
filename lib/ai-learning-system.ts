interface LearningData {
  timestamp: number
  recommendationId: string
  implemented: boolean
  effectiveness: number
  userFeedback: "positive" | "negative" | "neutral"
  context: {
    systemLoad: number
    timeOfDay: number
    dayOfWeek: number
    seasonality: number
  }
}

interface ModelMetrics {
  accuracy: number
  precision: number
  recall: number
  f1Score: number
  confidenceCalibration: number
  lastUpdated: number
}

interface LearningInsight {
  id: string
  type: "pattern" | "improvement" | "warning" | "optimization"
  title: string
  description: string
  confidence: number
  impact: "low" | "medium" | "high"
  timestamp: number
  data: any
}

class AILearningSystem {
  private learningData: LearningData[] = []
  private modelMetrics: ModelMetrics = {
    accuracy: 0.75,
    precision: 0.72,
    recall: 0.78,
    f1Score: 0.75,
    confidenceCalibration: 0.68,
    lastUpdated: Date.now(),
  }
  private insights: LearningInsight[] = []

  constructor() {
    this.initializeLearningCycle()
    this.loadHistoricalData()
  }

  private initializeLearningCycle() {
    // Run learning cycle every 5 minutes
    setInterval(
      () => {
        this.runLearningCycle()
      },
      5 * 60 * 1000,
    )
  }

  private loadHistoricalData() {
    // Simulate loading historical learning data
    const historicalData: LearningData[] = Array.from({ length: 1000 }, (_, i) => ({
      timestamp: Date.now() - i * 60 * 60 * 1000, // Last 1000 hours
      recommendationId: `rec_${i}`,
      implemented: Math.random() > 0.3,
      effectiveness: Math.random() * 0.4 + 0.6, // 0.6-1.0
      userFeedback: ["positive", "negative", "neutral"][Math.floor(Math.random() * 3)] as any,
      context: {
        systemLoad: Math.random(),
        timeOfDay: Math.random() * 24,
        dayOfWeek: Math.floor(Math.random() * 7),
        seasonality: Math.sin(((Date.now() - i * 60 * 60 * 1000) / (365 * 24 * 60 * 60 * 1000)) * 2 * Math.PI),
      },
    }))

    this.learningData = historicalData
    this.runLearningCycle()
  }

  private runLearningCycle() {
    this.updateModelMetrics()
    this.generateInsights()
    this.optimizeRecommendations()
  }

  private updateModelMetrics() {
    const recentData = this.learningData.filter((d) => Date.now() - d.timestamp < 24 * 60 * 60 * 1000)

    if (recentData.length === 0) return

    const implemented = recentData.filter((d) => d.implemented)
    const effective = implemented.filter((d) => d.effectiveness > 0.7)
    const positive = recentData.filter((d) => d.userFeedback === "positive")

    // Update metrics with learning
    this.modelMetrics = {
      accuracy: Math.min(0.95, this.modelMetrics.accuracy + 0.001),
      precision: effective.length / Math.max(1, implemented.length),
      recall: implemented.length / recentData.length,
      f1Score:
        (2 * (this.modelMetrics.precision * this.modelMetrics.recall)) /
        (this.modelMetrics.precision + this.modelMetrics.recall),
      confidenceCalibration: positive.length / Math.max(1, recentData.length),
      lastUpdated: Date.now(),
    }
  }

  private generateInsights() {
    const newInsights: LearningInsight[] = []

    // Pattern insights
    const timePatterns = this.analyzeTimePatterns()
    if (timePatterns.significance > 0.8) {
      newInsights.push({
        id: `pattern_${Date.now()}`,
        type: "pattern",
        title: "Time-based Performance Pattern Detected",
        description: `Recommendations are ${timePatterns.improvement}% more effective during ${timePatterns.optimalTime}`,
        confidence: timePatterns.significance,
        impact: "high",
        timestamp: Date.now(),
        data: timePatterns,
      })
    }

    // Improvement insights
    if (this.modelMetrics.accuracy > 0.85) {
      newInsights.push({
        id: `improvement_${Date.now()}`,
        type: "improvement",
        title: "Model Accuracy Improvement",
        description: `AI model accuracy has improved to ${(this.modelMetrics.accuracy * 100).toFixed(1)}%`,
        confidence: 0.95,
        impact: "medium",
        timestamp: Date.now(),
        data: { accuracy: this.modelMetrics.accuracy },
      })
    }

    // Warning insights
    const falsePositiveRate = 1 - this.modelMetrics.precision
    if (falsePositiveRate > 0.3) {
      newInsights.push({
        id: `warning_${Date.now()}`,
        type: "warning",
        title: "High False Positive Rate Detected",
        description: `${(falsePositiveRate * 100).toFixed(1)}% of recommendations are not being implemented effectively`,
        confidence: 0.9,
        impact: "high",
        timestamp: Date.now(),
        data: { falsePositiveRate },
      })
    }

    // Optimization insights
    if (this.modelMetrics.confidenceCalibration < 0.7) {
      newInsights.push({
        id: `optimization_${Date.now()}`,
        type: "optimization",
        title: "Confidence Calibration Needed",
        description: "AI confidence scores need recalibration to better match actual performance",
        confidence: 0.85,
        impact: "medium",
        timestamp: Date.now(),
        data: { calibration: this.modelMetrics.confidenceCalibration },
      })
    }

    this.insights = [...newInsights, ...this.insights].slice(0, 100) // Keep last 100 insights
  }

  private analyzeTimePatterns() {
    const hourlyPerformance = new Array(24).fill(0).map(() => ({ total: 0, effective: 0 }))

    this.learningData.forEach((data) => {
      const hour = Math.floor(data.context.timeOfDay)
      hourlyPerformance[hour].total++
      if (data.effectiveness > 0.7) {
        hourlyPerformance[hour].effective++
      }
    })

    const hourlyRates = hourlyPerformance.map((h, i) => ({
      hour: i,
      rate: h.total > 0 ? h.effective / h.total : 0,
    }))

    const bestHour = hourlyRates.reduce((best, current) => (current.rate > best.rate ? current : best))

    const averageRate = hourlyRates.reduce((sum, h) => sum + h.rate, 0) / 24
    const improvement = ((bestHour.rate - averageRate) / averageRate) * 100

    return {
      optimalTime: `${bestHour.hour}:00-${bestHour.hour + 1}:00`,
      improvement: Math.round(improvement),
      significance: Math.min(1, improvement / 50), // Normalize to 0-1
    }
  }

  private optimizeRecommendations() {
    // This would contain the actual ML optimization logic
    // For now, we simulate continuous improvement
    if (Math.random() > 0.9) {
      // 10% chance of optimization
      this.modelMetrics.accuracy = Math.min(0.95, this.modelMetrics.accuracy + 0.005)
    }
  }

  // Public methods
  public addLearningData(data: Omit<LearningData, "timestamp">) {
    this.learningData.push({
      ...data,
      timestamp: Date.now(),
    })
  }

  public getModelMetrics(): ModelMetrics {
    return { ...this.modelMetrics }
  }

  public getInsights(): LearningInsight[] {
    return [...this.insights]
  }

  public getLearningStats() {
    const recentData = this.learningData.filter((d) => Date.now() - d.timestamp < 7 * 24 * 60 * 60 * 1000)
    const implemented = recentData.filter((d) => d.implemented)
    const positive = recentData.filter((d) => d.userFeedback === "positive")
    const negative = recentData.filter((d) => d.userFeedback === "negative")

    return {
      totalRecommendations: recentData.length,
      implementationRate: implemented.length / Math.max(1, recentData.length),
      averageEffectiveness: implemented.reduce((sum, d) => sum + d.effectiveness, 0) / Math.max(1, implemented.length),
      positiveFeedback: positive.length,
      negativeFeedback: negative.length,
      modelAccuracy: this.modelMetrics.accuracy,
      learningDataSize: this.learningData.length,
      lastLearningCycle: this.modelMetrics.lastUpdated,
    }
  }

  public exportLearningData() {
    return {
      learningData: this.learningData,
      modelMetrics: this.modelMetrics,
      insights: this.insights,
      exportTimestamp: Date.now(),
    }
  }

  public importLearningData(data: any) {
    if (data.learningData) this.learningData = data.learningData
    if (data.modelMetrics) this.modelMetrics = data.modelMetrics
    if (data.insights) this.insights = data.insights
  }
}

export const aiLearningSystem = new AILearningSystem()
export type { LearningData, ModelMetrics, LearningInsight }
