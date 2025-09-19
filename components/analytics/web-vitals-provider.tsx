"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { webVitalsMonitor, type WebVitalsMetric, type WebVitalsReport } from "@/lib/web-vitals"

interface WebVitalsContextType {
  metrics: WebVitalsMetric[]
  overallScore: number
  isLoading: boolean
  lastReport: WebVitalsReport | null
}

const WebVitalsContext = createContext<WebVitalsContextType | undefined>(undefined)

export function WebVitalsProvider({ children }: { children: React.ReactNode }) {
  const [metrics, setMetrics] = useState<WebVitalsMetric[]>([])
  const [overallScore, setOverallScore] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [lastReport, setLastReport] = useState<WebVitalsReport | null>(null)

  useEffect(() => {
    // Start monitoring when component mounts
    webVitalsMonitor.startMonitoring()

    const updateMetrics = () => {
      const currentMetrics = webVitalsMonitor.getMetrics()
      const currentScore = webVitalsMonitor.getOverallScore()

      setMetrics(currentMetrics)
      setOverallScore(currentScore)
      setIsLoading(false)
    }

    const updateReport = (report: WebVitalsReport) => {
      setLastReport(report)
    }

    // Subscribe to metric updates
    webVitalsMonitor.onMetric(updateMetrics)
    webVitalsMonitor.onReport(updateReport)

    // Initial update
    updateMetrics()

    // Set loading to false after initial setup
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <WebVitalsContext.Provider value={{ metrics, overallScore, isLoading, lastReport }}>
      {children}
    </WebVitalsContext.Provider>
  )
}

export function useWebVitals() {
  const context = useContext(WebVitalsContext)
  if (context === undefined) {
    throw new Error("useWebVitals must be used within a WebVitalsProvider")
  }
  return context
}
