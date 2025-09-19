"use client"

import { onCLS, onFID, onFCP, onLCP, onTTFB, onINP } from "web-vitals"
import React from "react"

export interface WebVitalsMetric {
  id: string
  name: string
  value: number
  rating: "good" | "needs-improvement" | "poor"
  delta: number
  navigationType: string
}

export interface WebVitalsReport {
  url: string
  timestamp: number
  metrics: WebVitalsMetric[]
  userAgent: string
  connectionType?: string
}

class WebVitalsMonitor {
  private static instance: WebVitalsMonitor
  private metrics: Map<string, WebVitalsMetric> = new Map()
  private callbacks: ((metric: WebVitalsMetric) => void)[] = []
  private reportCallbacks: ((report: WebVitalsReport) => void)[] = []

  static getInstance(): WebVitalsMonitor {
    if (!WebVitalsMonitor.instance) {
      WebVitalsMonitor.instance = new WebVitalsMonitor()
    }
    return WebVitalsMonitor.instance
  }

  startMonitoring(): void {
    if (typeof window === "undefined") return

    // Monitor Core Web Vitals with correct API
    onCLS(this.handleMetric.bind(this))
    onFID(this.handleMetric.bind(this))
    onFCP(this.handleMetric.bind(this))
    onLCP(this.handleMetric.bind(this))
    onTTFB(this.handleMetric.bind(this))
    onINP(this.handleMetric.bind(this))

    // Send report when page is about to unload
    window.addEventListener("beforeunload", () => {
      this.sendReport()
    })

    // Send report periodically
    setInterval(() => {
      this.sendReport()
    }, 30000) // Every 30 seconds
  }

  private handleMetric(metric: any): void {
    const webVitalsMetric: WebVitalsMetric = {
      id: metric.id,
      name: metric.name,
      value: metric.value,
      rating: this.getRating(metric.name, metric.value),
      delta: metric.delta || 0,
      navigationType: metric.navigationType || "unknown",
    }

    this.metrics.set(metric.name, webVitalsMetric)

    // Notify callbacks
    this.callbacks.forEach((callback) => callback(webVitalsMetric))

    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.log(`[Web Vitals] ${metric.name}:`, {
        value: metric.value,
        rating: webVitalsMetric.rating,
        delta: metric.delta,
      })
    }
  }

  private getRating(name: string, value: number): "good" | "needs-improvement" | "poor" {
    const thresholds = {
      CLS: { good: 0.1, poor: 0.25 },
      FID: { good: 100, poor: 300 },
      FCP: { good: 1800, poor: 3000 },
      LCP: { good: 2500, poor: 4000 },
      TTFB: { good: 800, poor: 1800 },
      INP: { good: 200, poor: 500 },
    }

    const threshold = thresholds[name as keyof typeof thresholds]
    if (!threshold) return "good"

    if (value <= threshold.good) return "good"
    if (value <= threshold.poor) return "needs-improvement"
    return "poor"
  }

  private sendReport(): void {
    if (this.metrics.size === 0) return

    const report: WebVitalsReport = {
      url: window.location.href,
      timestamp: Date.now(),
      metrics: Array.from(this.metrics.values()),
      userAgent: navigator.userAgent,
      connectionType: (navigator as any).connection?.effectiveType,
    }

    // Notify report callbacks
    this.reportCallbacks.forEach((callback) => callback(report))

    // Send to analytics endpoint
    this.sendToAnalytics(report)
  }

  private async sendToAnalytics(report: WebVitalsReport): Promise<void> {
    try {
      // Send to Vercel Analytics
      if (typeof window !== "undefined" && (window as any).va) {
        ;(window as any).va("track", "Web Vitals", {
          metrics: report.metrics,
          url: report.url,
          timestamp: report.timestamp,
        })
      }

      // Send to custom endpoint if available
      if (process.env.NODE_ENV === "production") {
        await fetch("/api/web-vitals", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(report),
        }).catch((error) => {
          console.warn("Failed to send web vitals report:", error)
        })
      }
    } catch (error) {
      console.warn("Failed to send web vitals to analytics:", error)
    }
  }

  onMetric(callback: (metric: WebVitalsMetric) => void): void {
    this.callbacks.push(callback)
  }

  onReport(callback: (report: WebVitalsReport) => void): void {
    this.reportCallbacks.push(callback)
  }

  getMetrics(): WebVitalsMetric[] {
    return Array.from(this.metrics.values())
  }

  getMetric(name: string): WebVitalsMetric | undefined {
    return this.metrics.get(name)
  }

  getOverallScore(): number {
    const metrics = this.getMetrics()
    if (metrics.length === 0) return 0

    const scores = metrics.map((metric) => {
      switch (metric.rating) {
        case "good":
          return 100
        case "needs-improvement":
          return 50
        case "poor":
          return 0
        default:
          return 0
      }
    })

    return Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length)
  }
}

export const webVitalsMonitor = WebVitalsMonitor.getInstance()

// Hook for React components
export function useWebVitals() {
  const [metrics, setMetrics] = React.useState<WebVitalsMetric[]>([])
  const [overallScore, setOverallScore] = React.useState<number>(0)

  React.useEffect(() => {
    webVitalsMonitor.startMonitoring()

    const updateMetrics = () => {
      setMetrics(webVitalsMonitor.getMetrics())
      setOverallScore(webVitalsMonitor.getOverallScore())
    }

    webVitalsMonitor.onMetric(updateMetrics)
    webVitalsMonitor.onReport(updateMetrics)

    return () => {
      // Cleanup if needed
    }
  }, [])

  return { metrics, overallScore }
}
