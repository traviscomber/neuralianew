"use client"

import { useEffect, useState } from "react"
import { BarChart3, Zap, Activity } from "lucide-react"

interface PerformanceMetrics {
  fcp: number | null
  lcp: number | null
  cls: number | null
  ttfb: number | null
}

type PerformanceEntryWithStartTime = PerformanceEntry & { renderTime?: number; loadTime?: number }
type PerformanceResourceTiming = PerformanceEntry & { responseStart?: number }

export function PerformanceMetrics() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    cls: null,
    ttfb: null,
  })
  const [score, setScore] = useState<number | null>(null)

  useEffect(() => {
    // Get Web Vitals using PerformanceObserver API
    const observers: PerformanceObserver[] = []

    // First Contentful Paint
    if ("PerformanceObserver" in window) {
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const fcp = entries[0]?.startTime
          if (fcp) {
            setMetrics((prev) => ({ ...prev, fcp: Math.round(fcp) }))
          }
        })
        fcpObserver.observe({ entryTypes: ["paint"] })
        observers.push(fcpObserver)

        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1] as PerformanceEntryWithStartTime
          const lcp = lastEntry?.renderTime || lastEntry?.loadTime
          if (lcp) {
            setMetrics((prev) => ({ ...prev, lcp: Math.round(lcp) }))
          }
        })
        lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] })
        observers.push(lcpObserver)

        // Cumulative Layout Shift
        let clsValue = 0
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
              setMetrics((prev) => ({ ...prev, cls: Math.round(clsValue * 1000) / 1000 }))
            }
          }
        })
        clsObserver.observe({ entryTypes: ["layout-shift"] })
        observers.push(clsObserver)

        // Time to First Byte
        const ttfbObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const navEntry = entries[0] as PerformanceResourceTiming
          const ttfb = navEntry?.responseStart
          if (ttfb) {
            setMetrics((prev) => ({ ...prev, ttfb: Math.round(ttfb) }))
          }
        })
        ttfbObserver.observe({ entryTypes: ["navigation"] })
        observers.push(ttfbObserver)
      } catch (error) {
        console.warn("[v0] Could not observe performance metrics:", error)
      }
    }

    // Calculate performance score
    const timer = setTimeout(() => {
      setMetrics((prev) => {
        const fcp = prev.fcp || 2500 // Default estimate
        const lcp = prev.lcp || 4000 // Default estimate

        // Simple scoring: lower values = higher scores
        let score = 100
        if (fcp > 1800) score -= (fcp - 1800) / 100
        if (lcp > 2500) score -= (lcp - 2500) / 100

        setScore(Math.max(50, Math.min(100, Math.round(score))))
        return prev
      })
    }, 3000)

    return () => {
      clearTimeout(timer)
      observers.forEach((obs) => obs.disconnect())
    }
  }, [])

  const getScoreColor = (value: number | null) => {
    if (!value) return "text-muted-foreground"
    if (value >= 90) return "text-green-600"
    if (value >= 75) return "text-amber-600"
    return "text-red-600"
  }

  const getMetricColor = (label: string, value: number | null) => {
    if (!value) return "text-muted-foreground"

    const thresholds: Record<string, { good: number; poor: number }> = {
      fcp: { good: 1800, poor: 3000 },
      lcp: { good: 2500, poor: 4000 },
      cls: { good: 0.1, poor: 0.25 },
      ttfb: { good: 600, poor: 1800 },
    }

    const threshold = thresholds[label]
    if (value <= threshold.good) return "text-green-600"
    if (value <= threshold.poor) return "text-amber-600"
    return "text-red-600"
  }

  return (
    <div className="py-12 px-4 bg-card rounded-lg border border-border">
      <div className="flex items-center gap-2 mb-6">
        <Activity className="w-5 h-5 text-primary" />
        <h3 className="font-semibold text-foreground">Performance Metrics</h3>
      </div>

      {score !== null ? (
        <>
          <div className="mb-6">
            <div className="flex items-end justify-between mb-2">
              <span className="text-sm text-muted-foreground">Page Performance Score</span>
              <span className={`text-2xl font-bold ${getScoreColor(score)}`}>{score}/100</span>
            </div>
            <div className="w-full h-3 bg-border rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${
                  score >= 90
                    ? "bg-green-600"
                    : score >= 75
                      ? "bg-amber-600"
                      : "bg-red-600"
                }`}
                style={{ width: `${score}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.fcp && (
              <div className="p-3 bg-background rounded border border-border/50">
                <p className="text-xs text-muted-foreground mb-1">FCP</p>
                <p className={`text-lg font-semibold ${getMetricColor("fcp", metrics.fcp)}`}>
                  {metrics.fcp}ms
                </p>
                <p className="text-xs text-muted-foreground mt-1">First Paint</p>
              </div>
            )}

            {metrics.lcp && (
              <div className="p-3 bg-background rounded border border-border/50">
                <p className="text-xs text-muted-foreground mb-1">LCP</p>
                <p className={`text-lg font-semibold ${getMetricColor("lcp", metrics.lcp)}`}>
                  {metrics.lcp}ms
                </p>
                <p className="text-xs text-muted-foreground mt-1">Largest Paint</p>
              </div>
            )}

            {metrics.cls !== null && (
              <div className="p-3 bg-background rounded border border-border/50">
                <p className="text-xs text-muted-foreground mb-1">CLS</p>
                <p className={`text-lg font-semibold ${getMetricColor("cls", metrics.cls)}`}>
                  {metrics.cls}
                </p>
                <p className="text-xs text-muted-foreground mt-1">Layout Shift</p>
              </div>
            )}

            {metrics.ttfb && (
              <div className="p-3 bg-background rounded border border-border/50">
                <p className="text-xs text-muted-foreground mb-1">TTFB</p>
                <p className={`text-lg font-semibold ${getMetricColor("ttfb", metrics.ttfb)}`}>
                  {metrics.ttfb}ms
                </p>
                <p className="text-xs text-muted-foreground mt-1">First Byte</p>
              </div>
            )}
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            Métricas calculadas en tiempo real durante la carga de la página. Los valores pueden variar según conexión y dispositivo.
          </p>
        </>
      ) : (
        <div className="flex items-center justify-center py-8">
          <div className="text-center">
            <Zap className="w-8 h-8 text-muted-foreground mx-auto mb-2 animate-pulse" />
            <p className="text-sm text-muted-foreground">Calculando métricas...</p>
          </div>
        </div>
      )}
    </div>
  )
}
