"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings } from "lucide-react"
import {
  Activity,
  Clock,
  AlertTriangle,
  CheckCircle,
  Download,
  RefreshCw,
  Smartphone,
  Monitor,
  Tablet,
} from "lucide-react"
import { logoPerformanceMonitor, type PerformanceReport } from "@/lib/logo-performance-monitor"

export function LogoPerformanceDashboard() {
  const [report, setReport] = useState<PerformanceReport | null>(null)
  const [isMonitoring, setIsMonitoring] = useState(false)
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null)

  const updateReport = () => {
    const newReport = logoPerformanceMonitor.generateReport()
    setReport(newReport)
    setLastUpdate(new Date())
  }

  const startMonitoring = () => {
    logoPerformanceMonitor.startMonitoring()
    setIsMonitoring(true)
    updateReport()
  }

  const stopMonitoring = () => {
    logoPerformanceMonitor.stopMonitoring()
    setIsMonitoring(false)
  }

  const exportData = () => {
    const data = logoPerformanceMonitor.exportMetrics()
    const blob = new Blob([data], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `logo-performance-${new Date().toISOString().split("T")[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const clearData = () => {
    logoPerformanceMonitor.clearMetrics()
    updateReport()
  }

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isMonitoring) {
      interval = setInterval(updateReport, 5000) // Update every 5 seconds
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isMonitoring])

  const getStatusColor = (value: number, thresholds: { good: number; warning: number }) => {
    if (value >= thresholds.good) return "text-green-600 bg-green-100"
    if (value >= thresholds.warning) return "text-yellow-600 bg-yellow-100"
    return "text-red-600 bg-red-100"
  }

  const getLoadTimeColor = (time: number) => {
    if (time < 1000) return "text-green-600 bg-green-100"
    if (time < 2000) return "text-yellow-600 bg-yellow-100"
    return "text-red-600 bg-red-100"
  }

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5" />
                Logo Performance Monitor
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Real-time monitoring of logo loading performance and fallback usage
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button onClick={() => (window.location.href = "/performance-alerts")} variant="outline">
                <Settings className="w-4 h-4 mr-2" />
                Configure Alerts
              </Button>
              <div className={`w-3 h-3 rounded-full ${isMonitoring ? "bg-green-500 animate-pulse" : "bg-gray-400"}`} />
              <span className="text-sm font-medium">{isMonitoring ? "Monitoring Active" : "Monitoring Inactive"}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={isMonitoring ? stopMonitoring : startMonitoring}
              variant={isMonitoring ? "destructive" : "default"}
            >
              {isMonitoring ? "Stop Monitoring" : "Start Monitoring"}
            </Button>
            <Button onClick={updateReport} variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh Report
            </Button>
            <Button onClick={exportData} variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
            <Button onClick={clearData} variant="outline">
              Clear Data
            </Button>
          </div>
          {lastUpdate && (
            <p className="text-xs text-muted-foreground mt-3">Last updated: {lastUpdate.toLocaleTimeString()}</p>
          )}
        </CardContent>
      </Card>

      {report && (
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="errors">Errors</TabsTrigger>
            <TabsTrigger value="devices">Devices</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Logos</p>
                      <p className="text-2xl font-bold">{report.totalLogos}</p>
                    </div>
                    <Activity className="w-8 h-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Success Rate</p>
                      <p className="text-2xl font-bold">{report.successRate.toFixed(1)}%</p>
                    </div>
                    <CheckCircle
                      className={`w-8 h-8 ${getStatusColor(report.successRate, { good: 95, warning: 90 }).split(" ")[0]}`}
                    />
                  </div>
                  <Progress value={report.successRate} className="mt-2" />
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Avg Load Time</p>
                      <p className="text-2xl font-bold">{report.averageLoadTime.toFixed(0)}ms</p>
                    </div>
                    <Clock className={`w-8 h-8 ${getLoadTimeColor(report.averageLoadTime).split(" ")[0]}`} />
                  </div>
                  <Badge className={getLoadTimeColor(report.averageLoadTime)}>
                    {report.averageLoadTime < 1000 ? "Fast" : report.averageLoadTime < 2000 ? "Moderate" : "Slow"}
                  </Badge>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Fallback Usage</p>
                      <p className="text-2xl font-bold">{report.fallbackUsageRate.toFixed(1)}%</p>
                    </div>
                    <AlertTriangle
                      className={`w-8 h-8 ${report.fallbackUsageRate > 20 ? "text-red-600" : report.fallbackUsageRate > 10 ? "text-yellow-600" : "text-green-600"}`}
                    />
                  </div>
                  <Progress value={report.fallbackUsageRate} className="mt-2" />
                </CardContent>
              </Card>
            </div>

            {/* Performance Extremes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Fastest Logo</CardTitle>
                </CardHeader>
                <CardContent>
                  {report.fastestLogo ? (
                    <div className="space-y-2">
                      <p className="font-semibold">{report.fastestLogo.logoName}</p>
                      <Badge className="bg-green-100 text-green-800">{report.fastestLogo.loadTime.toFixed(0)}ms</Badge>
                      <p className="text-sm text-muted-foreground">
                        {report.fastestLogo.deviceType} • {report.fastestLogo.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No data available</p>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Slowest Logo</CardTitle>
                </CardHeader>
                <CardContent>
                  {report.slowestLogo ? (
                    <div className="space-y-2">
                      <p className="font-semibold">{report.slowestLogo.logoName}</p>
                      <Badge className="bg-red-100 text-red-800">{report.slowestLogo.loadTime.toFixed(0)}ms</Badge>
                      <p className="text-sm text-muted-foreground">
                        {report.slowestLogo.deviceType} • {report.slowestLogo.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No data available</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Performance Thresholds</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <p className="font-medium">Success Rate</p>
                      <p className="text-sm text-muted-foreground">Should be above 95%</p>
                    </div>
                    <Badge className={getStatusColor(report.successRate, { good: 95, warning: 90 })}>
                      {report.successRate.toFixed(1)}%
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <p className="font-medium">Average Load Time</p>
                      <p className="text-sm text-muted-foreground">Should be under 2000ms</p>
                    </div>
                    <Badge className={getLoadTimeColor(report.averageLoadTime)}>
                      {report.averageLoadTime.toFixed(0)}ms
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <p className="font-medium">Fallback Usage</p>
                      <p className="text-sm text-muted-foreground">Should be under 10%</p>
                    </div>
                    <Badge
                      className={
                        report.fallbackUsageRate > 20
                          ? "bg-red-100 text-red-800"
                          : report.fallbackUsageRate > 10
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                      }
                    >
                      {report.fallbackUsageRate.toFixed(1)}%
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="errors" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Error Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                {Object.keys(report.errorBreakdown).length > 0 ? (
                  <div className="space-y-3">
                    {Object.entries(report.errorBreakdown).map(([error, count]) => (
                      <div key={error} className="flex items-center justify-between p-3 border rounded">
                        <div>
                          <p className="font-medium capitalize">{error.replace(/_/g, " ")}</p>
                          <p className="text-sm text-muted-foreground">{count} occurrences</p>
                        </div>
                        <Badge variant="destructive">{count}</Badge>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No errors recorded</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="devices" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Device Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(report.deviceBreakdown).map(([device, data]) => {
                    const DeviceIcon = device === "mobile" ? Smartphone : device === "tablet" ? Tablet : Monitor
                    return (
                      <div key={device} className="flex items-center justify-between p-4 border rounded">
                        <div className="flex items-center gap-3">
                          <DeviceIcon className="w-5 h-5" />
                          <div>
                            <p className="font-medium capitalize">{device}</p>
                            <p className="text-sm text-muted-foreground">{data.count} loads</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className={getLoadTimeColor(data.avgLoadTime)}>
                            {data.avgLoadTime.toFixed(0)}ms avg
                          </Badge>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}

      {!report && (
        <Card>
          <CardContent className="p-12 text-center">
            <Activity className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Performance Data</h3>
            <p className="text-muted-foreground mb-4">Start monitoring to collect logo performance metrics</p>
            <Button onClick={startMonitoring}>Start Monitoring</Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
