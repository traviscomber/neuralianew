"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, TrendingUp, TrendingDown, Users, Eye, Clock, Zap } from "lucide-react"

interface RealTimeMetric {
  name: string
  value: number | string
  unit: string
  trend: "up" | "down" | "stable"
  change: number
  icon: React.ReactNode
  color: string
}

export function RealTimeDashboard() {
  const [metrics, setMetrics] = useState<RealTimeMetric[]>([])
  const [isLive, setIsLive] = useState(true)

  useEffect(() => {
    const updateMetrics = () => {
      const newMetrics: RealTimeMetric[] = [
        {
          name: "Active Users",
          value: Math.floor(Math.random() * 50) + 100,
          unit: "",
          trend: Math.random() > 0.5 ? "up" : "down",
          change: Math.floor(Math.random() * 20) + 5,
          icon: <Users className="w-5 h-5" />,
          color: "text-blue-600",
        },
        {
          name: "Page Load Time",
          value: Math.floor(Math.random() * 200) + 800,
          unit: "ms",
          trend: Math.random() > 0.3 ? "down" : "up",
          change: Math.floor(Math.random() * 15) + 3,
          icon: <Clock className="w-5 h-5" />,
          color: "text-green-600",
        },
        {
          name: "Core Web Vitals",
          value: Math.floor(Math.random() * 10) + 90,
          unit: "/100",
          trend: "up",
          change: Math.floor(Math.random() * 5) + 1,
          icon: <Zap className="w-5 h-5" />,
          color: "text-purple-600",
        },
        {
          name: "Accessibility Score",
          value: Math.floor(Math.random() * 5) + 95,
          unit: "%",
          trend: "stable",
          change: 0,
          icon: <Eye className="w-5 h-5" />,
          color: "text-emerald-600",
        },
        {
          name: "Error Rate",
          value: (Math.random() * 2).toFixed(2),
          unit: "%",
          trend: Math.random() > 0.7 ? "down" : "up",
          change: Math.floor(Math.random() * 10) + 5,
          icon: <Activity className="w-5 h-5" />,
          color: "text-red-600",
        },
      ]
      setMetrics(newMetrics)
    }

    updateMetrics()
    const interval = setInterval(updateMetrics, 3000)

    return () => clearInterval(interval)
  }, [])

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-green-600" />
      case "down":
        return <TrendingDown className="w-4 h-4 text-red-600" />
      default:
        return <div className="w-4 h-4 bg-gray-400 rounded-full" />
    }
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-900 flex items-center">
          <Activity className="w-5 h-5 mr-2 text-blue-600" />
          Real-time Performance Metrics
        </h3>
        <Badge className={`${isLive ? "bg-green-100 text-green-800 animate-pulse" : "bg-gray-100 text-gray-800"}`}>
          {isLive ? "Live" : "Paused"}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="p-4 bg-white rounded-lg border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <div className={`${metric.color}`}>{metric.icon}</div>
              {getTrendIcon(metric.trend)}
            </div>
            <div className="text-2xl font-bold text-slate-900 mb-1">
              {metric.value}
              {metric.unit}
            </div>
            <div className="text-sm text-slate-600 mb-2">{metric.name}</div>
            {metric.change > 0 && (
              <div className={`text-xs flex items-center ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                {metric.trend === "up" ? "+" : "-"}
                {metric.change}% vs yesterday
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  )
}
