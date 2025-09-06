"use client"

import { useState, useEffect, useCallback, useRef } from "react"

export interface PerformanceMetric {
  name: string
  current: number
  previous: number
  target: number
  unit: string
  trend: "up" | "down" | "stable"
  improvement: number
  status: "excellent" | "good" | "warning" | "critical"
  category: string
  timestamp: Date
}

export interface BusinessImpact {
  metric: string
  beforeValue: number
  currentValue: number
  improvement: number
  revenueImpact: number
  confidence: number
  trend: "up" | "down" | "stable"
  timestamp: Date
}

export interface MonitoringSession {
  id: string
  startTime: Date
  endTime?: Date
  presetApplied: string
  totalMetrics: number
  improvementCount: number
  averageImprovement: number
  totalRevenueImpact: number
  status: "active" | "paused" | "completed"
}

export function usePerformanceMonitoring() {
  const [isMonitoring, setIsMonitoring] = useState(false)
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([])
  const [businessImpacts, setBusinessImpacts] = useState<BusinessImpact[]>([])
  const [currentSession, setCurrentSession] = useState<MonitoringSession | null>(null)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [alertsTriggered, setAlertsTriggered] = useState(0)
  const [alertsResolved, setAlertsResolved] = useState(0)

  const monitoringInterval = useRef<NodeJS.Timeout>()
  const sessionStartTime = useRef<Date>()

  // Initialize monitoring session
  const startMonitoring = useCallback((presetName = "SaaS High Performance") => {
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    const startTime = new Date()

    sessionStartTime.current = startTime

    const newSession: MonitoringSession = {
      id: sessionId,
      startTime,
      presetApplied: presetName,
      totalMetrics: 0,
      improvementCount: 0,
      averageImprovement: 0,
      totalRevenueImpact: 0,
      status: "active",
    }

    setCurrentSession(newSession)
    setIsMonitoring(true)
    setTimeElapsed(0)

    // Initialize with SaaS High Performance preset values
    const initialMetrics: PerformanceMetric[] = [
      {
        name: "Largest Contentful Paint",
        current: 2000,
        previous: 3200,
        target: 2000,
        unit: "ms",
        trend: "down",
        improvement: -37.5,
        status: "excellent",
        category: "performance",
        timestamp: startTime,
      },
      {
        name: "First Contentful Paint",
        current: 1200,
        previous: 2000,
        target: 1200,
        unit: "ms",
        trend: "down",
        improvement: -40,
        status: "excellent",
        category: "performance",
        timestamp: startTime,
      },
      {
        name: "Cumulative Layout Shift",
        current: 0.05,
        previous: 0.18,
        target: 0.05,
        unit: "",
        trend: "down",
        improvement: -72.2,
        status: "excellent",
        category: "performance",
        timestamp: startTime,
      },
      {
        name: "First Input Delay",
        current: 80,
        previous: 150,
        target: 80,
        unit: "ms",
        trend: "down",
        improvement: -46.7,
        status: "excellent",
        category: "performance",
        timestamp: startTime,
      },
      {
        name: "Bounce Rate",
        current: 25,
        previous: 45,
        target: 25,
        unit: "%",
        trend: "down",
        improvement: -44.4,
        status: "excellent",
        category: "business",
        timestamp: startTime,
      },
      {
        name: "Conversion Rate",
        current: 8.5,
        previous: 4.2,
        target: 8.5,
        unit: "%",
        trend: "up",
        improvement: 102.4,
        status: "excellent",
        category: "business",
        timestamp: startTime,
      },
      {
        name: "Session Duration",
        current: 180,
        previous: 120,
        target: 180,
        unit: "s",
        trend: "up",
        improvement: 50,
        status: "excellent",
        category: "business",
        timestamp: startTime,
      },
      {
        name: "Error Rate",
        current: 1.0,
        previous: 2.5,
        target: 1.0,
        unit: "%",
        trend: "down",
        improvement: -60,
        status: "excellent",
        category: "technical",
        timestamp: startTime,
      },
    ]

    const initialBusinessImpacts: BusinessImpact[] = [
      {
        metric: "Revenue Growth",
        beforeValue: 100000,
        currentValue: 118000,
        improvement: 18,
        revenueImpact: 245000,
        confidence: 92,
        trend: "up",
        timestamp: startTime,
      },
      {
        metric: "User Satisfaction",
        beforeValue: 72,
        currentValue: 88,
        improvement: 22.2,
        revenueImpact: 180000,
        confidence: 89,
        trend: "up",
        timestamp: startTime,
      },
      {
        metric: "Customer Retention",
        beforeValue: 78,
        currentValue: 89,
        improvement: 14.1,
        revenueImpact: 320000,
        confidence: 94,
        trend: "up",
        timestamp: startTime,
      },
      {
        metric: "Trial Conversion",
        beforeValue: 4.2,
        currentValue: 8.5,
        improvement: 102.4,
        revenueImpact: 420000,
        confidence: 96,
        trend: "up",
        timestamp: startTime,
      },
    ]

    setMetrics(initialMetrics)
    setBusinessImpacts(initialBusinessImpacts)

    console.log(`Performance monitoring started for session: ${sessionId}`)
  }, [])

  // Stop monitoring session
  const stopMonitoring = useCallback(() => {
    if (monitoringInterval.current) {
      clearInterval(monitoringInterval.current)
    }

    setIsMonitoring(false)

    if (currentSession) {
      const updatedSession: MonitoringSession = {
        ...currentSession,
        endTime: new Date(),
        status: "completed",
        totalMetrics: metrics.length,
        improvementCount: metrics.filter((m) => m.improvement > 0 || (m.improvement < 0 && ["ms", ""].includes(m.unit)))
          .length,
        averageImprovement: metrics.reduce((sum, m) => sum + Math.abs(m.improvement), 0) / metrics.length,
        totalRevenueImpact: businessImpacts.reduce((sum, b) => sum + b.revenueImpact, 0),
      }

      setCurrentSession(updatedSession)
      console.log(`Performance monitoring stopped for session: ${updatedSession.id}`)
    }
  }, [currentSession, metrics, businessImpacts])

  // Pause/resume monitoring
  const toggleMonitoring = useCallback(() => {
    if (isMonitoring) {
      if (monitoringInterval.current) {
        clearInterval(monitoringInterval.current)
      }
      setIsMonitoring(false)

      if (currentSession) {
        setCurrentSession({ ...currentSession, status: "paused" })
      }
    } else {
      setIsMonitoring(true)

      if (currentSession) {
        setCurrentSession({ ...currentSession, status: "active" })
      }
    }
  }, [isMonitoring, currentSession])

  // Real-time metric updates
  useEffect(() => {
    if (!isMonitoring) return

    const updateMetrics = () => {
      setTimeElapsed((prev) => prev + 1)

      // Simulate real-time metric updates with small variations
      setMetrics((prevMetrics) =>
        prevMetrics.map((metric) => {
          const variation = (Math.random() - 0.5) * 0.1 // ±5% variation
          let newCurrent = metric.current * (1 + variation)

          // Ensure metrics stay within realistic bounds
          if (metric.unit === "ms") {
            newCurrent = Math.max(50, Math.min(newCurrent, metric.previous))
          } else if (metric.unit === "%") {
            newCurrent = Math.max(0, Math.min(100, newCurrent))
          }

          const newImprovement =
            metric.unit === "ms" || metric.unit === ""
              ? ((metric.previous - newCurrent) / metric.previous) * 100
              : ((newCurrent - metric.previous) / metric.previous) * 100

          return {
            ...metric,
            current: Math.round(newCurrent * 100) / 100,
            improvement: Math.round(newImprovement * 10) / 10,
            timestamp: new Date(),
          }
        }),
      )

      // Simulate business impact updates
      setBusinessImpacts((prevImpacts) =>
        prevImpacts.map((impact) => {
          const variation = (Math.random() - 0.5) * 0.05 // ±2.5% variation
          const newCurrent = impact.currentValue * (1 + variation)

          return {
            ...impact,
            currentValue: Math.round(newCurrent * 100) / 100,
            improvement: Math.round(((newCurrent - impact.beforeValue) / impact.beforeValue) * 10000) / 100,
            timestamp: new Date(),
          }
        }),
      )

      // Simulate alert activity
      if (Math.random() > 0.95) {
        setAlertsTriggered((prev) => prev + 1)
      }
      if (Math.random() > 0.92) {
        setAlertsResolved((prev) => prev + 1)
      }
    }

    monitoringInterval.current = setInterval(updateMetrics, 2000)

    return () => {
      if (monitoringInterval.current) {
        clearInterval(monitoringInterval.current)
      }
    }
  }, [isMonitoring])

  // Get filtered metrics by category
  const getMetricsByCategory = useCallback(
    (category: string) => {
      return metrics.filter((metric) => metric.category === category)
    },
    [metrics],
  )

  // Get performance summary
  const getPerformanceSummary = useCallback(() => {
    const totalMetrics = metrics.length
    const improvedMetrics = metrics.filter(
      (m) => m.improvement > 0 || (m.improvement < 0 && ["ms", ""].includes(m.unit)),
    ).length

    const averageImprovement =
      totalMetrics > 0 ? metrics.reduce((sum, m) => sum + Math.abs(m.improvement), 0) / totalMetrics : 0

    const totalRevenueImpact = businessImpacts.reduce((sum, b) => sum + b.revenueImpact, 0)

    const averageConfidence =
      businessImpacts.length > 0
        ? businessImpacts.reduce((sum, b) => sum + b.confidence, 0) / businessImpacts.length
        : 0

    return {
      totalMetrics,
      improvedMetrics,
      improvementRate: totalMetrics > 0 ? (improvedMetrics / totalMetrics) * 100 : 0,
      averageImprovement,
      totalRevenueImpact,
      averageConfidence,
      activeAlerts: alertsTriggered - alertsResolved,
      alertsTriggered,
      alertsResolved,
    }
  }, [metrics, businessImpacts, alertsTriggered, alertsResolved])

  // Export monitoring data
  const exportMonitoringData = useCallback(() => {
    const summary = getPerformanceSummary()

    const exportData = {
      session: currentSession,
      summary,
      metrics,
      businessImpacts,
      exportedAt: new Date().toISOString(),
      monitoringDuration: timeElapsed,
    }

    return JSON.stringify(exportData, null, 2)
  }, [currentSession, metrics, businessImpacts, timeElapsed, getPerformanceSummary])

  // Format duration helper
  const formatDuration = useCallback((seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60

    if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`
    } else if (minutes > 0) {
      return `${minutes}m ${secs}s`
    } else {
      return `${secs}s`
    }
  }, [])

  return {
    // State
    isMonitoring,
    metrics,
    businessImpacts,
    currentSession,
    timeElapsed,
    alertsTriggered,
    alertsResolved,

    // Actions
    startMonitoring,
    stopMonitoring,
    toggleMonitoring,

    // Utilities
    getMetricsByCategory,
    getPerformanceSummary,
    exportMonitoringData,
    formatDuration,
  }
}
