export interface BusinessContext {
  industry: string
  businessType: string
  targetSegment: string
  optimizationGoal: string
  revenueModel: string
  userBase: number
  averageOrderValue?: number
  conversionRate: number
}

export interface ThresholdRule {
  metric: string
  baseThreshold: number
  industryMultiplier: number
  segmentMultiplier: number
  businessImpactWeight: number
  revenueImpactWeight: number
}

export interface OptimizationResult {
  metric: string
  originalThreshold: number
  optimizedThreshold: number
  confidence: number
  expectedImprovement: number
  businessImpact: number
  revenueImpact: number
  reasoning: string[]
}

export class ThresholdOptimizer {
  private static instance: ThresholdOptimizer
  private industryBenchmarks: Map<string, Record<string, number>> = new Map()
  private segmentMultipliers: Map<string, Record<string, number>> = new Map()
  private businessImpactWeights: Map<string, number> = new Map()

  static getInstance(): ThresholdOptimizer {
    if (!ThresholdOptimizer.instance) {
      ThresholdOptimizer.instance = new ThresholdOptimizer()
    }
    return ThresholdOptimizer.instance
  }

  constructor() {
    this.initializeBenchmarks()
    this.initializeSegmentMultipliers()
    this.initializeBusinessImpactWeights()
  }

  private initializeBenchmarks(): void {
    // Industry-specific performance benchmarks
    this.industryBenchmarks.set("technology", {
      lcp: 2200,
      fcp: 1300,
      cls: 0.08,
      fid: 85,
      bounceRate: 28,
      conversionRate: 7.5,
      wcagAA: 92,
      mobileSpeed: 82,
      errorRate: 1.5,
      sessionDuration: 180,
    })

    this.industryBenchmarks.set("retail", {
      lcp: 2000,
      fcp: 1200,
      cls: 0.06,
      fid: 80,
      bounceRate: 25,
      conversionRate: 12,
      wcagAA: 90,
      mobileSpeed: 85,
      errorRate: 1.2,
      sessionDuration: 240,
    })

    this.industryBenchmarks.set("finance", {
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
    })

    this.industryBenchmarks.set("healthcare", {
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
    })

    this.industryBenchmarks.set("education", {
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
    })

    this.industryBenchmarks.set("enterprise", {
      lcp: 3200,
      fcp: 2000,
      cls: 0.18,
      fid: 140,
      bounceRate: 45,
      conversionRate: 2.8,
      wcagAA: 98,
      mobileSpeed: 72,
      errorRate: 0.3,
      sessionDuration: 380,
    })
  }

  private initializeSegmentMultipliers(): void {
    // User segment-specific threshold multipliers
    this.segmentMultipliers.set("enterprise", {
      lcp: 0.75,
      fcp: 0.75,
      cls: 0.4,
      fid: 0.7,
      bounceRate: 0.6,
      conversionRate: 1.8,
      wcagAA: 1.05,
      mobileSpeed: 0.9,
      errorRate: 0.3,
    })

    this.segmentMultipliers.set("power-users", {
      lcp: 0.8,
      fcp: 0.8,
      cls: 0.5,
      fid: 0.75,
      bounceRate: 0.7,
      conversionRate: 1.4,
      wcagAA: 1.02,
      mobileSpeed: 0.95,
      errorRate: 0.5,
    })

    this.segmentMultipliers.set("mobile-users", {
      lcp: 1.3,
      fcp: 1.2,
      cls: 1.1,
      fid: 1.4,
      bounceRate: 1.2,
      conversionRate: 0.7,
      wcagAA: 1.0,
      mobileSpeed: 0.85,
      errorRate: 1.5,
    })

    this.segmentMultipliers.set("trial-users", {
      lcp: 0.6,
      fcp: 0.6,
      cls: 0.3,
      fid: 0.6,
      bounceRate: 0.5,
      conversionRate: 2.2,
      wcagAA: 1.0,
      mobileSpeed: 0.8,
      errorRate: 0.2,
    })

    this.segmentMultipliers.set("general", {
      lcp: 1.0,
      fcp: 1.0,
      cls: 1.0,
      fid: 1.0,
      bounceRate: 1.0,
      conversionRate: 1.0,
      wcagAA: 1.0,
      mobileSpeed: 1.0,
      errorRate: 1.0,
    })
  }

  private initializeBusinessImpactWeights(): void {
    // Business impact weights for different metrics
    this.businessImpactWeights.set("lcp", 0.95) // Critical for user experience
    this.businessImpactWeights.set("fcp", 0.85) // Important for perceived performance
    this.businessImpactWeights.set("cls", 0.8) // Affects user interaction
    this.businessImpactWeights.set("fid", 0.75) // User interaction responsiveness
    this.businessImpactWeights.set("bounceRate", 0.9) // Direct business impact
    this.businessImpactWeights.set("conversionRate", 1.0) // Maximum business impact
    this.businessImpactWeights.set("wcagAA", 0.7) // Compliance and accessibility
    this.businessImpactWeights.set("mobileSpeed", 0.88) // Mobile-first importance
    this.businessImpactWeights.set("errorRate", 0.92) // User experience critical
    this.businessImpactWeights.set("sessionDuration", 0.65) // Engagement metric
  }

  optimizeThresholds(
    currentThresholds: Record<string, number>,
    businessContext: BusinessContext,
  ): OptimizationResult[] {
    const results: OptimizationResult[] = []
    const industryBenchmark = this.industryBenchmarks.get(businessContext.industry)
    const segmentMultipliers = this.segmentMultipliers.get(businessContext.targetSegment)

    if (!industryBenchmark || !segmentMultipliers) {
      throw new Error("Invalid business context configuration")
    }

    for (const [metric, currentThreshold] of Object.entries(currentThresholds)) {
      const result = this.optimizeMetricThreshold(
        metric,
        currentThreshold,
        industryBenchmark,
        segmentMultipliers,
        businessContext,
      )
      results.push(result)
    }

    return results.sort((a, b) => b.businessImpact - a.businessImpact)
  }

  private optimizeMetricThreshold(
    metric: string,
    currentThreshold: number,
    industryBenchmark: Record<string, number>,
    segmentMultipliers: Record<string, number>,
    businessContext: BusinessContext,
  ): OptimizationResult {
    const industryTarget = industryBenchmark[metric] || currentThreshold
    const segmentMultiplier = segmentMultipliers[metric] || 1.0
    const businessImpactWeight = this.businessImpactWeights.get(metric) || 0.5

    // Calculate optimized threshold
    let optimizedThreshold = industryTarget * segmentMultiplier

    // Apply business context adjustments
    optimizedThreshold = this.applyBusinessContextAdjustments(optimizedThreshold, metric, businessContext)

    // Calculate confidence based on data quality and business alignment
    const confidence = this.calculateConfidence(metric, currentThreshold, optimizedThreshold, businessContext)

    // Calculate expected improvement
    const expectedImprovement = this.calculateExpectedImprovement(
      metric,
      currentThreshold,
      optimizedThreshold,
      businessContext,
    )

    // Calculate business impact
    const businessImpact = businessImpactWeight * expectedImprovement * 100

    // Calculate revenue impact
    const revenueImpact = this.calculateRevenueImpact(metric, expectedImprovement, businessContext)

    // Generate reasoning
    const reasoning = this.generateReasoning(
      metric,
      currentThreshold,
      optimizedThreshold,
      businessContext,
      industryTarget,
      segmentMultiplier,
    )

    return {
      metric,
      originalThreshold: currentThreshold,
      optimizedThreshold: Math.round(optimizedThreshold * 100) / 100,
      confidence,
      expectedImprovement,
      businessImpact,
      revenueImpact,
      reasoning,
    }
  }

  private applyBusinessContextAdjustments(threshold: number, metric: string, businessContext: BusinessContext): number {
    let adjustedThreshold = threshold

    // Optimization goal adjustments
    switch (businessContext.optimizationGoal) {
      case "conversion":
        if (["lcp", "fcp", "bounceRate"].includes(metric)) {
          adjustedThreshold *= 0.85 // More aggressive for conversion-critical metrics
        }
        break
      case "performance":
        if (["lcp", "fcp", "cls", "fid"].includes(metric)) {
          adjustedThreshold *= 0.8 // Very aggressive for performance metrics
        }
        break
      case "retention":
        if (["sessionDuration", "bounceRate", "errorRate"].includes(metric)) {
          adjustedThreshold *= 0.9 // Focus on engagement metrics
        }
        break
      case "revenue":
        if (["conversionRate", "bounceRate", "lcp"].includes(metric)) {
          adjustedThreshold *= 0.82 // Revenue-focused optimization
        }
        break
      case "compliance":
        if (["wcagAA", "errorRate"].includes(metric)) {
          adjustedThreshold *= 0.95 // Conservative for compliance
        }
        break
    }

    // Business type adjustments
    switch (businessContext.businessType) {
      case "saas":
        if (["lcp", "fcp", "errorRate"].includes(metric)) {
          adjustedThreshold *= 0.88 // SaaS users expect high performance
        }
        break
      case "ecommerce":
        if (["lcp", "conversionRate", "mobileSpeed"].includes(metric)) {
          adjustedThreshold *= 0.85 // E-commerce is conversion-critical
        }
        break
      case "b2b":
        if (["wcagAA", "errorRate"].includes(metric)) {
          adjustedThreshold *= 0.95 // B2B focuses on reliability
        }
        break
    }

    // User base size adjustments
    if (businessContext.userBase > 100000) {
      adjustedThreshold *= 0.92 // Larger user base needs better performance
    } else if (businessContext.userBase < 10000) {
      adjustedThreshold *= 1.05 // Smaller user base can be more lenient
    }

    return adjustedThreshold
  }

  private calculateConfidence(
    metric: string,
    currentThreshold: number,
    optimizedThreshold: number,
    businessContext: BusinessContext,
  ): number {
    let confidence = 70 // Base confidence

    // Industry data quality
    const industryDataQuality = {
      technology: 95,
      retail: 90,
      finance: 85,
      healthcare: 80,
      education: 75,
      enterprise: 70,
    }
    confidence += (industryDataQuality[businessContext.industry as keyof typeof industryDataQuality] || 70) * 0.2

    // Threshold change magnitude (smaller changes = higher confidence)
    const changeRatio = Math.abs(optimizedThreshold - currentThreshold) / currentThreshold
    if (changeRatio < 0.1) confidence += 15
    else if (changeRatio < 0.2) confidence += 10
    else if (changeRatio < 0.3) confidence += 5
    else confidence -= 5

    // Metric importance and data availability
    const metricConfidenceBoost = {
      lcp: 15,
      fcp: 12,
      conversionRate: 18,
      bounceRate: 14,
      wcagAA: 10,
      mobileSpeed: 13,
      errorRate: 16,
    }
    confidence += metricConfidenceBoost[metric as keyof typeof metricConfidenceBoost] || 8

    return Math.min(98, Math.max(45, Math.round(confidence)))
  }

  private calculateExpectedImprovement(
    metric: string,
    currentThreshold: number,
    optimizedThreshold: number,
    businessContext: BusinessContext,
  ): number {
    const changeRatio = Math.abs(optimizedThreshold - currentThreshold) / currentThreshold

    // Base improvement based on threshold change
    let improvement = changeRatio * 100

    // Metric-specific improvement multipliers
    const improvementMultipliers = {
      lcp: 1.2, // Performance metrics have high impact
      fcp: 1.1,
      cls: 1.0,
      fid: 1.0,
      bounceRate: 1.3, // User behavior metrics
      conversionRate: 1.5, // Business metrics have highest impact
      wcagAA: 0.8, // Compliance metrics have moderate impact
      mobileSpeed: 1.1,
      errorRate: 1.25,
      sessionDuration: 0.9,
    }

    improvement *= improvementMultipliers[metric as keyof typeof improvementMultipliers] || 1.0

    // Business context multipliers
    if (businessContext.optimizationGoal === "conversion" && ["lcp", "bounceRate", "conversionRate"].includes(metric)) {
      improvement *= 1.3
    }

    if (businessContext.businessType === "ecommerce" && ["lcp", "mobileSpeed", "conversionRate"].includes(metric)) {
      improvement *= 1.2
    }

    return Math.min(50, Math.max(0.5, improvement))
  }

  private calculateRevenueImpact(
    metric: string,
    expectedImprovement: number,
    businessContext: BusinessContext,
  ): number {
    const baseRevenue =
      (businessContext.averageOrderValue || 100) * businessContext.userBase * (businessContext.conversionRate / 100)

    // Revenue impact multipliers by metric
    const revenueMultipliers = {
      lcp: 0.15, // 1% LCP improvement = 0.15% revenue increase
      fcp: 0.12,
      cls: 0.08,
      fid: 0.06,
      bounceRate: 0.18,
      conversionRate: 0.25, // Direct conversion impact
      wcagAA: 0.05,
      mobileSpeed: 0.14,
      errorRate: 0.2,
      sessionDuration: 0.04,
    }

    const revenueMultiplier = revenueMultipliers[metric as keyof typeof revenueMultipliers] || 0.05
    const revenueImpact = baseRevenue * (expectedImprovement / 100) * revenueMultiplier

    return Math.round(revenueImpact)
  }

  private generateReasoning(
    metric: string,
    currentThreshold: number,
    optimizedThreshold: number,
    businessContext: BusinessContext,
    industryTarget: number,
    segmentMultiplier: number,
  ): string[] {
    const reasoning: string[] = []

    // Industry comparison
    if (Math.abs(industryTarget - currentThreshold) > currentThreshold * 0.1) {
      const direction = industryTarget < currentThreshold ? "more aggressive" : "more conservative"
      reasoning.push(
        `Industry benchmark suggests ${direction} threshold (${industryTarget} vs current ${currentThreshold})`,
      )
    }

    // Segment optimization
    if (segmentMultiplier !== 1.0) {
      const adjustment = segmentMultiplier < 1.0 ? "tightened" : "relaxed"
      reasoning.push(`${adjustment} for ${businessContext.targetSegment} segment (${segmentMultiplier}x multiplier)`)
    }

    // Business context reasoning
    switch (businessContext.optimizationGoal) {
      case "conversion":
        reasoning.push("Optimized for conversion rate improvement")
        break
      case "performance":
        reasoning.push("Optimized for maximum performance gains")
        break
      case "retention":
        reasoning.push("Optimized for user retention and engagement")
        break
      case "revenue":
        reasoning.push("Optimized for direct revenue impact")
        break
      case "compliance":
        reasoning.push("Optimized for compliance and accessibility standards")
        break
    }

    // Business type specific reasoning
    switch (businessContext.businessType) {
      case "saas":
        reasoning.push("SaaS platform requires high performance for user productivity")
        break
      case "ecommerce":
        reasoning.push("E-commerce optimization focuses on conversion and mobile experience")
        break
      case "b2b":
        reasoning.push("B2B platform emphasizes reliability and compliance")
        break
    }

    // Threshold direction reasoning
    const change = ((optimizedThreshold - currentThreshold) / currentThreshold) * 100
    if (Math.abs(change) > 5) {
      const direction = change < 0 ? "stricter" : "more lenient"
      reasoning.push(
        `Recommends ${direction} threshold (${Math.abs(change).toFixed(1)}% ${change < 0 ? "decrease" : "increase"})`,
      )
    }

    return reasoning
  }

  generateBusinessImpactReport(
    results: OptimizationResult[],
    businessContext: BusinessContext,
  ): {
    totalRevenueImpact: number
    totalBusinessImpact: number
    highImpactMetrics: string[]
    implementationPriority: OptimizationResult[]
    riskAssessment: string
    timeToValue: string
  } {
    const totalRevenueImpact = results.reduce((sum, result) => sum + result.revenueImpact, 0)
    const totalBusinessImpact = results.reduce((sum, result) => sum + result.businessImpact, 0) / results.length

    const highImpactMetrics = results.filter((result) => result.businessImpact > 70).map((result) => result.metric)

    const implementationPriority = [...results].sort((a, b) => {
      // Sort by business impact * confidence
      const scoreA = a.businessImpact * (a.confidence / 100)
      const scoreB = b.businessImpact * (b.confidence / 100)
      return scoreB - scoreA
    })

    // Risk assessment based on threshold changes
    const highRiskChanges = results.filter(
      (result) => Math.abs(result.optimizedThreshold - result.originalThreshold) / result.originalThreshold > 0.3,
    ).length

    let riskAssessment = "Low Risk"
    if (highRiskChanges > results.length * 0.5) {
      riskAssessment = "High Risk"
    } else if (highRiskChanges > results.length * 0.25) {
      riskAssessment = "Medium Risk"
    }

    // Time to value estimation
    const avgConfidence = results.reduce((sum, result) => sum + result.confidence, 0) / results.length
    let timeToValue = "2-4 weeks"
    if (avgConfidence > 85) {
      timeToValue = "1-2 weeks"
    } else if (avgConfidence < 65) {
      timeToValue = "4-8 weeks"
    }

    return {
      totalRevenueImpact,
      totalBusinessImpact,
      highImpactMetrics,
      implementationPriority,
      riskAssessment,
      timeToValue,
    }
  }

  validateThresholds(thresholds: Record<string, number>): {
    isValid: boolean
    warnings: string[]
    errors: string[]
  } {
    const warnings: string[] = []
    const errors: string[] = []

    // Validate performance metrics
    if (thresholds.lcp && thresholds.lcp > 4000) {
      warnings.push("LCP threshold above 4s may result in poor user experience")
    }
    if (thresholds.lcp && thresholds.lcp < 1000) {
      errors.push("LCP threshold below 1s is unrealistic for most applications")
    }

    if (thresholds.fcp && thresholds.fcp > 3000) {
      warnings.push("FCP threshold above 3s may impact perceived performance")
    }

    if (thresholds.cls && thresholds.cls > 0.25) {
      warnings.push("CLS threshold above 0.25 indicates poor visual stability")
    }

    // Validate business metrics
    if (thresholds.bounceRate && thresholds.bounceRate < 10) {
      warnings.push("Bounce rate threshold below 10% may be too optimistic")
    }
    if (thresholds.bounceRate && thresholds.bounceRate > 80) {
      errors.push("Bounce rate threshold above 80% indicates serious UX issues")
    }

    if (thresholds.conversionRate && thresholds.conversionRate > 25) {
      warnings.push("Conversion rate threshold above 25% may be unrealistic")
    }

    // Validate accessibility metrics
    if (thresholds.wcagAA && thresholds.wcagAA < 80) {
      errors.push("WCAG AA compliance below 80% may violate accessibility standards")
    }

    return {
      isValid: errors.length === 0,
      warnings,
      errors,
    }
  }

  exportOptimizationConfig(results: OptimizationResult[], businessContext: BusinessContext): string {
    const config = {
      metadata: {
        generatedAt: new Date().toISOString(),
        businessContext,
        optimizationEngine: "N3uralia Threshold Optimizer v1.0",
      },
      optimizedThresholds: results.reduce(
        (acc, result) => {
          acc[result.metric] = result.optimizedThreshold
          return acc
        },
        {} as Record<string, number>,
      ),
      recommendations: results,
      businessImpact: this.generateBusinessImpactReport(results, businessContext),
      implementation: {
        priority: results.slice(0, 5).map((r) => r.metric),
        phaseRollout: this.generatePhaseRollout(results),
        monitoringPlan: this.generateMonitoringPlan(results),
      },
    }

    return JSON.stringify(config, null, 2)
  }

  private generatePhaseRollout(results: OptimizationResult[]): Array<{
    phase: number
    metrics: string[]
    duration: string
    description: string
  }> {
    const highConfidence = results.filter((r) => r.confidence > 80)
    const mediumConfidence = results.filter((r) => r.confidence >= 60 && r.confidence <= 80)
    const lowConfidence = results.filter((r) => r.confidence < 60)

    return [
      {
        phase: 1,
        metrics: highConfidence.slice(0, 3).map((r) => r.metric),
        duration: "Week 1-2",
        description: "High-confidence, low-risk threshold adjustments",
      },
      {
        phase: 2,
        metrics: highConfidence
          .slice(3)
          .concat(mediumConfidence.slice(0, 2))
          .map((r) => r.metric),
        duration: "Week 3-4",
        description: "Medium-impact threshold optimizations with monitoring",
      },
      {
        phase: 3,
        metrics: mediumConfidence
          .slice(2)
          .concat(lowConfidence)
          .map((r) => r.metric),
        duration: "Week 5-8",
        description: "Experimental thresholds with A/B testing validation",
      },
    ]
  }

  private generateMonitoringPlan(results: OptimizationResult[]): Array<{
    metric: string
    monitoringFrequency: string
    alertConditions: string[]
    rollbackTriggers: string[]
  }> {
    return results.map((result) => ({
      metric: result.metric,
      monitoringFrequency: result.confidence > 80 ? "Daily" : "Hourly",
      alertConditions: [
        `${result.metric} exceeds optimized threshold by 20%`,
        `${result.metric} shows degradation trend over 3 days`,
        "Business metrics show negative correlation",
      ],
      rollbackTriggers: [
        `${result.metric} consistently exceeds threshold by 50%`,
        "Conversion rate drops by more than 10%",
        "User complaints increase significantly",
      ],
    }))
  }
}

// Export singleton instance
export const thresholdOptimizer = ThresholdOptimizer.getInstance()
