export interface PerformanceSnapshot {
  timestamp: Date
  sessionId: string
  metrics: Record<string, number>
  businessMetrics: Record<string, number>
  alerts: {
    triggered: number
    resolved: number
    active: number
  }
}

export interface PerformanceTrend {
  metric: string
  timeRange: string
  dataPoints: Array<{
    timestamp: Date
    value: number
  }>
  trend: "improving" | "declining" | "stable"
  changeRate: number
}

export class PerformanceTracker {
  private static instance: PerformanceTracker
  private snapshots: PerformanceSnapshot[] = []
  private _isTracking = false
  private trackingInterval: NodeJS.Timeout | null = null

  static getInstance(): PerformanceTracker {
    if (!PerformanceTracker.instance) {
      PerformanceTracker.instance = new PerformanceTracker()
    }
    return PerformanceTracker.instance
  }

  startTracking(sessionId: string, intervalMs = 30000): void {
    if (this._isTracking) {
      console.warn("Performance tracking is already active")
      return
    }

    this._isTracking = true
    console.log(`Starting performance tracking for session: ${sessionId}`)

    const captureSnapshot = () => {
      const snapshot: PerformanceSnapshot = {
        timestamp: new Date(),
        sessionId,
        metrics: this.collectCurrentMetrics(),
        businessMetrics: this.collectBusinessMetrics(),
        alerts: this.collectAlertMetrics(),
      }

      this.snapshots.push(snapshot)
      this.pruneOldSnapshots()

      // Emit event for real-time updates
      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("performanceSnapshot", {
            detail: snapshot,
          }),
        )
      }
    }

    // Capture initial snapshot
    captureSnapshot()

    // Set up interval for regular snapshots
    this.trackingInterval = setInterval(captureSnapshot, intervalMs)
  }

  stopTracking(): void {
    if (!this._isTracking) {
      console.warn("Performance tracking is not active")
      return
    }

    if (this.trackingInterval) {
      clearInterval(this.trackingInterval)
      this.trackingInterval = null
    }

    this._isTracking = false
    console.log("Performance tracking stopped")
  }

  private collectCurrentMetrics(): Record<string, number> {
    // Simulate collecting real performance metrics
    // In a real implementation, this would collect from various sources
    return {
      lcp: Math.random() * 1000 + 1500, // 1500-2500ms
      fcp: Math.random() * 500 + 800, // 800-1300ms
      cls: Math.random() * 0.1 + 0.02, // 0.02-0.12
      fid: Math.random() * 50 + 50, // 50-100ms
      ttfb: Math.random() * 200 + 100, // 100-300ms
      tti: Math.random() * 1000 + 1000, // 1000-2000ms
    }
  }

  private collectBusinessMetrics(): Record<string, number> {
    // Simulate collecting business metrics
    return {
      bounceRate: Math.random() * 10 + 20, // 20-30%
      conversionRate: Math.random() * 2 + 7, // 7-9%
      sessionDuration: Math.random() * 60 + 150, // 150-210s
      pageViews: Math.random() * 20 + 80, // 80-100
      errorRate: Math.random() * 0.5 + 0.5, // 0.5-1.0%
    }
  }

  private collectAlertMetrics(): { triggered: number; resolved: number; active: number } {
    // Simulate alert metrics
    const triggered = Math.floor(Math.random() * 5)
    const resolved = Math.floor(Math.random() * triggered)

    return {
      triggered,
      resolved,
      active: triggered - resolved,
    }
  }

  private pruneOldSnapshots(): void {
    // Keep only last 24 hours of snapshots
    const cutoffTime = new Date(Date.now() - 24 * 60 * 60 * 1000)
    this.snapshots = this.snapshots.filter((snapshot) => snapshot.timestamp > cutoffTime)
  }

  getSnapshots(sessionId?: string, timeRange?: string): PerformanceSnapshot[] {
    let filteredSnapshots = [...this.snapshots]

    if (sessionId) {
      filteredSnapshots = filteredSnapshots.filter((s) => s.sessionId === sessionId)
    }

    if (timeRange) {
      const now = new Date()
      let cutoffTime: Date

      switch (timeRange) {
        case "1h":
          cutoffTime = new Date(now.getTime() - 60 * 60 * 1000)
          break
        case "6h":
          cutoffTime = new Date(now.getTime() - 6 * 60 * 60 * 1000)
          break
        case "24h":
          cutoffTime = new Date(now.getTime() - 24 * 60 * 60 * 1000)
          break
        case "7d":
          cutoffTime = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
          break
        default:
          cutoffTime = new Date(now.getTime() - 60 * 60 * 1000) // Default to 1h
      }

      filteredSnapshots = filteredSnapshots.filter((s) => s.timestamp > cutoffTime)
    }

    return filteredSnapshots.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())
  }

  getTrends(metrics: string[], timeRange = "24h"): PerformanceTrend[] {
    const snapshots = this.getSnapshots(undefined, timeRange)

    return metrics.map((metric) => {
      const dataPoints = snapshots
        .map((snapshot) => ({
          timestamp: snapshot.timestamp,
          value: snapshot.metrics[metric] || snapshot.businessMetrics[metric] || 0,
        }))
        .filter((point) => point.value > 0)

      if (dataPoints.length < 2) {
        return {
          metric,
          timeRange,
          dataPoints,
          trend: "stable" as const,
          changeRate: 0,
        }
      }

      // Calculate trend
      const firstValue = dataPoints[0].value
      const lastValue = dataPoints[dataPoints.length - 1].value
      const changeRate = ((lastValue - firstValue) / firstValue) * 100

      let trend: "improving" | "declining" | "stable"

      // For performance metrics (ms), lower is better
      if (["lcp", "fcp", "fid", "ttfb", "tti"].includes(metric)) {
        trend = changeRate < -5 ? "improving" : changeRate > 5 ? "declining" : "stable"
      }
      // For business metrics, higher is usually better (except bounce rate, error rate)
      else if (["bounceRate", "errorRate"].includes(metric)) {
        trend = changeRate < -5 ? "improving" : changeRate > 5 ? "declining" : "stable"
      } else {
        trend = changeRate > 5 ? "improving" : changeRate < -5 ? "declining" : "stable"
      }

      return {
        metric,
        timeRange,
        dataPoints,
        trend,
        changeRate: Math.round(changeRate * 100) / 100,
      }
    })
  }

  getPerformanceScore(sessionId?: string): {
    overall: number
    performance: number
    business: number
    technical: number
    breakdown: Record<string, number>
  } {
    const snapshots = this.getSnapshots(sessionId)

    if (snapshots.length === 0) {
      return {
        overall: 0,
        performance: 0,
        business: 0,
        technical: 0,
        breakdown: {},
      }
    }

    const latestSnapshot = snapshots[snapshots.length - 1]

    // Calculate performance score (0-100)
    const performanceScore = this.calculatePerformanceScore(latestSnapshot.metrics)
    const businessScore = this.calculateBusinessScore(latestSnapshot.businessMetrics)
    const technicalScore = this.calculateTechnicalScore(latestSnapshot.metrics, latestSnapshot.alerts)

    const overall = Math.round((performanceScore + businessScore + technicalScore) / 3)

    return {
      overall,
      performance: performanceScore,
      business: businessScore,
      technical: technicalScore,
      breakdown: {
        ...latestSnapshot.metrics,
        ...latestSnapshot.businessMetrics,
      },
    }
  }

  private calculatePerformanceScore(metrics: Record<string, number>): number {
    const scores: number[] = []

    // LCP score (0-100, where 2500ms = 0, 1200ms = 100)
    if (metrics.lcp) {
      scores.push(Math.max(0, Math.min(100, 100 - ((metrics.lcp - 1200) / 1300) * 100)))
    }

    // FCP score (0-100, where 3000ms = 0, 800ms = 100)
    if (metrics.fcp) {
      scores.push(Math.max(0, Math.min(100, 100 - ((metrics.fcp - 800) / 2200) * 100)))
    }

    // CLS score (0-100, where 0.25 = 0, 0.02 = 100)
    if (metrics.cls) {
      scores.push(Math.max(0, Math.min(100, 100 - ((metrics.cls - 0.02) / 0.23) * 100)))
    }

    // FID score (0-100, where 300ms = 0, 50ms = 100)
    if (metrics.fid) {
      scores.push(Math.max(0, Math.min(100, 100 - ((metrics.fid - 50) / 250) * 100)))
    }

    return scores.length > 0 ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length) : 0
  }

  private calculateBusinessScore(businessMetrics: Record<string, number>): number {
    const scores: number[] = []

    // Bounce rate score (0-100, where 80% = 0, 20% = 100)
    if (businessMetrics.bounceRate) {
      scores.push(Math.max(0, Math.min(100, 100 - ((businessMetrics.bounceRate - 20) / 60) * 100)))
    }

    // Conversion rate score (0-100, where 1% = 0, 10% = 100)
    if (businessMetrics.conversionRate) {
      scores.push(Math.max(0, Math.min(100, ((businessMetrics.conversionRate - 1) / 9) * 100)))
    }

    // Session duration score (0-100, where 30s = 0, 300s = 100)
    if (businessMetrics.sessionDuration) {
      scores.push(Math.max(0, Math.min(100, ((businessMetrics.sessionDuration - 30) / 270) * 100)))
    }

    // Error rate score (0-100, where 5% = 0, 0.5% = 100)
    if (businessMetrics.errorRate) {
      scores.push(Math.max(0, Math.min(100, 100 - ((businessMetrics.errorRate - 0.5) / 4.5) * 100)))
    }

    return scores.length > 0 ? Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length) : 0
  }

  private calculateTechnicalScore(metrics: Record<string, number>, alerts: { active: number }): number {
    const scores: number[] = []

    // TTFB score (0-100, where 800ms = 0, 100ms = 100)
    if (metrics.ttfb) {
      scores.push(Math.max(0, Math.min(100, 100 - ((metrics.ttfb - 100) / 700) * 100)))
    }

    // TTI score (0-100, where 5000ms = 0, 1000ms = 100)
    if (metrics.tti) {
      scores.push(Math.max(0, Math.min(100, 100 - ((metrics.tti - 1000) / 4000) * 100)))
    }

    // Alert penalty (subtract 10 points per active alert)
    const alertPenalty = Math.min(50, alerts.active * 10)
    const baseScore = scores.length > 0 ? scores.reduce((sum, score) => sum + score, 0) / scores.length : 100

    return Math.max(0, Math.round(baseScore - alertPenalty))
  }

  exportData(sessionId?: string, format: "json" | "csv" = "json"): string {
    const snapshots = this.getSnapshots(sessionId)
    const trends = this.getTrends(["lcp", "fcp", "cls", "bounceRate", "conversionRate"])
    const score = this.getPerformanceScore(sessionId)

    const exportData = {
      metadata: {
        exportedAt: new Date().toISOString(),
        sessionId: sessionId || "all",
        snapshotCount: snapshots.length,
        timeRange:
          snapshots.length > 0
            ? {
                start: snapshots[0].timestamp.toISOString(),
                end: snapshots[snapshots.length - 1].timestamp.toISOString(),
              }
            : null,
      },
      performanceScore: score,
      trends,
      snapshots,
    }

    if (format === "json") {
      return JSON.stringify(exportData, null, 2)
    } else {
      // Convert to CSV format
      const csvHeaders = [
        "timestamp",
        "sessionId",
        "lcp",
        "fcp",
        "cls",
        "fid",
        "bounceRate",
        "conversionRate",
        "sessionDuration",
        "errorRate",
        "activeAlerts",
      ]

      const csvRows = snapshots.map((snapshot) => [
        snapshot.timestamp.toISOString(),
        snapshot.sessionId,
        snapshot.metrics.lcp || "",
        snapshot.metrics.fcp || "",
        snapshot.metrics.cls || "",
        snapshot.metrics.fid || "",
        snapshot.businessMetrics.bounceRate || "",
        snapshot.businessMetrics.conversionRate || "",
        snapshot.businessMetrics.sessionDuration || "",
        snapshot.businessMetrics.errorRate || "",
        snapshot.alerts.active || "",
      ])

      return [csvHeaders.join(","), ...csvRows.map((row) => row.join(","))].join("\n")
    }
  }

  isTracking(): boolean {
    return this._isTracking
  }

  getSnapshotCount(): number {
    return this.snapshots.length
  }

  clearSnapshots(sessionId?: string): void {
    if (sessionId) {
      this.snapshots = this.snapshots.filter((s) => s.sessionId !== sessionId)
    } else {
      this.snapshots = []
    }
    console.log(`Cleared snapshots${sessionId ? ` for session: ${sessionId}` : ""}`)
  }
}

// Export singleton instance
export const performanceTracker = PerformanceTracker.getInstance()
