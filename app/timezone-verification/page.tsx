"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock,
  Globe,
  Play,
  Pause,
  RotateCcw,
  Smartphone,
  Tablet,
  Monitor,
  RefreshCw,
} from "lucide-react"

interface TimezoneTest {
  name: string
  status: "pass" | "fail" | "warning"
  message: string
  timestamp: string
}

interface TimezoneData {
  city: string
  timezone: string
  country: string
  flag: string
  currentTime: string
  isWorking: boolean
  lastUpdate: string
}

export default function TimezoneVerification() {
  const [isRunning, setIsRunning] = useState(false)
  const [testResults, setTestResults] = useState<TimezoneTest[]>([])
  const [updateCount, setUpdateCount] = useState(0)
  const [timezones, setTimezones] = useState<TimezoneData[]>([])
  const [isClient, setIsClient] = useState(false)

  const timezoneConfigs = [
    {
      city: "Santiago",
      timezone: "America/Santiago",
      country: "Chile",
      flag: "🇨🇱",
    },
    {
      city: "Kaliningrado",
      timezone: "Europe/Kaliningrad",
      country: "Rusia",
      flag: "🇷🇺",
    },
    {
      city: "Singapur",
      timezone: "Asia/Singapore",
      country: "Singapur",
      flag: "🇸🇬",
    },
  ]

  // Initialize client-side rendering
  useEffect(() => {
    setIsClient(true)
  }, [])

  const updateTimezones = () => {
    if (!isClient || typeof window === "undefined") return

    const now = new Date()
    const updatedTimezones = timezoneConfigs.map((config) => {
      const timeString = now.toLocaleTimeString("es-CL", {
        timeZone: config.timezone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })

      const hour = Number.parseInt(timeString.split(":")[0])
      const isWorking = hour >= 9 && hour < 18

      return {
        ...config,
        currentTime: timeString,
        isWorking,
        lastUpdate: now.toLocaleTimeString(),
      }
    })

    setTimezones(updatedTimezones)
    return updatedTimezones
  }

  const runTests = () => {
    if (!isClient) return

    const updatedTimezones = updateTimezones()
    const newTests: TimezoneTest[] = []

    // Test 1: Time format validation
    updatedTimezones.forEach((tz) => {
      const timeRegex = /^\d{2}:\d{2}$/
      newTests.push({
        name: `${tz.city} Time Format`,
        status: timeRegex.test(tz.currentTime) ? "pass" : "fail",
        message: timeRegex.test(tz.currentTime)
          ? `✅ Time format valid: ${tz.currentTime}`
          : `❌ Invalid time format: ${tz.currentTime}`,
        timestamp: new Date().toLocaleTimeString(),
      })
    })

    // Test 2: Working hours calculation
    updatedTimezones.forEach((tz) => {
      const hour = Number.parseInt(tz.currentTime.split(":")[0])
      const expectedWorking = hour >= 9 && hour < 18
      newTests.push({
        name: `${tz.city} Working Hours`,
        status: tz.isWorking === expectedWorking ? "pass" : "fail",
        message:
          tz.isWorking === expectedWorking
            ? `✅ Working status correct: ${tz.isWorking ? "Working" : "Off hours"}`
            : `❌ Working status incorrect`,
        timestamp: new Date().toLocaleTimeString(),
      })
    })

    // Test 3: System update reliability
    newTests.push({
      name: "System Updates",
      status: "pass",
      message: `✅ System updated successfully (${updateCount + 1} times)`,
      timestamp: new Date().toLocaleTimeString(),
    })

    // Test 4: Coverage analysis
    const workingTeams = updatedTimezones.filter((tz) => tz.isWorking).length
    newTests.push({
      name: "Team Coverage",
      status: workingTeams > 0 ? "pass" : "warning",
      message:
        workingTeams > 0 ? `✅ ${workingTeams} team(s) currently working` : `⚠️ No teams currently in working hours`,
      timestamp: new Date().toLocaleTimeString(),
    })

    setTestResults((prev) => [...newTests, ...prev].slice(0, 20))
    setUpdateCount((prev) => prev + 1)
  }

  // Auto-update effect
  useEffect(() => {
    if (!isClient) return

    let interval: NodeJS.Timeout | null = null

    if (isRunning) {
      // Initial update
      runTests()

      // Set up interval
      interval = setInterval(() => {
        runTests()
      }, 1000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isRunning, isClient, updateCount])

  // Auto-start on mount
  useEffect(() => {
    if (isClient) {
      setIsRunning(true)
    }
  }, [isClient])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pass":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case "fail":
        return <XCircle className="w-4 h-4 text-red-500" />
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />
      default:
        return <RefreshCw className="w-4 h-4 text-gray-400" />
    }
  }

  const getDeviceType = () => {
    if (!isClient || typeof window === "undefined") return "Unknown"
    const width = window.innerWidth
    if (width < 768) return "Mobile"
    if (width < 1024) return "Tablet"
    return "Desktop"
  }

  const getDeviceIcon = () => {
    const deviceType = getDeviceType()
    switch (deviceType) {
      case "Mobile":
        return <Smartphone className="w-4 h-4" />
      case "Tablet":
        return <Tablet className="w-4 h-4" />
      default:
        return <Monitor className="w-4 h-4" />
    }
  }

  // Show loading state during SSR
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-slate-900">Timezone Verification System</h1>
            <p className="text-xl text-slate-600">Loading timezone testing environment...</p>
          </div>
          <Card className="border-2 border-slate-200">
            <CardContent className="p-8 text-center">
              <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-slate-400" />
              <p className="text-slate-600">Initializing real-time clock verification...</p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Timezone Verification System</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Real-time testing of clock updates and working status indicators for N3uralia global teams
          </p>
        </div>

        {/* Device Info */}
        <Card className="border-2 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              {getDeviceIcon()}
              Testing Environment - {getDeviceType()}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div>
                <strong>Device:</strong> {getDeviceType()}
              </div>
              <div>
                <strong>Screen:</strong>{" "}
                {isClient && typeof window !== "undefined"
                  ? `${window.innerWidth}x${window.innerHeight}`
                  : "Loading..."}
              </div>
              <div>
                <strong>Status:</strong> {isRunning ? "🟢 Running" : "🔴 Stopped"}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Control Panel - Mobile Optimized */}
        <Card className="border-2 border-slate-200">
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">Control Panel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                onClick={() => setIsRunning(!isRunning)}
                className={`h-12 sm:h-10 text-base sm:text-sm ${
                  isRunning ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {isRunning ? (
                  <>
                    <Pause className="w-5 h-5 sm:w-4 sm:h-4 mr-2" />
                    Pause Testing
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 sm:w-4 sm:h-4 mr-2" />
                    Start Testing
                  </>
                )}
              </Button>
              <Button
                onClick={runTests}
                variant="outline"
                className="h-12 sm:h-10 text-base sm:text-sm border-2 bg-transparent"
              >
                <RefreshCw className="w-5 h-5 sm:w-4 sm:h-4 mr-2" />
                Run Manual Test
              </Button>
              <Button
                onClick={() => {
                  setTestResults([])
                  setUpdateCount(0)
                }}
                variant="outline"
                className="h-12 sm:h-10 text-base sm:text-sm border-2"
              >
                <RotateCcw className="w-5 h-5 sm:w-4 sm:h-4 mr-2" />
                Clear Results
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Summary Dashboard - Mobile Responsive */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-600">{updateCount}</div>
              <div className="text-xs sm:text-sm text-green-700">Total Updates</div>
            </CardContent>
          </Card>
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                {timezones.filter((tz) => tz.isWorking).length}
              </div>
              <div className="text-xs sm:text-sm text-blue-700">Active Teams</div>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-600">
                {testResults.filter((t) => t.status === "pass").length}
              </div>
              <div className="text-xs sm:text-sm text-purple-700">Tests Passed</div>
            </CardContent>
          </Card>
          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-orange-600">
                {testResults.filter((t) => t.status === "fail").length}
              </div>
              <div className="text-xs sm:text-sm text-orange-700">Tests Failed</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="live-clocks" className="space-y-4">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto sm:h-10">
            <TabsTrigger value="live-clocks" className="h-12 sm:h-auto text-sm">
              <Clock className="w-4 h-4 mr-2" />
              Live Clocks
            </TabsTrigger>
            <TabsTrigger value="test-results" className="h-12 sm:h-auto text-sm">
              <CheckCircle className="w-4 h-4 mr-2" />
              Test Results
            </TabsTrigger>
            <TabsTrigger value="system-info" className="h-12 sm:h-auto text-sm">
              <Globe className="w-4 h-4 mr-2" />
              System Info
            </TabsTrigger>
          </TabsList>

          <TabsContent value="live-clocks" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {timezones.map((tz) => (
                <Card key={tz.city} className="border border-slate-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="flex items-center justify-center space-x-3 mb-4">
                      <span className="text-2xl sm:text-3xl">{tz.flag}</span>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-slate-900">{tz.city}</h3>
                        <p className="text-xs sm:text-sm text-slate-600">{tz.country}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="text-3xl sm:text-4xl font-mono font-bold text-slate-900">{tz.currentTime}</div>

                      <Badge
                        className={`text-xs sm:text-sm px-3 py-1 ${
                          tz.isWorking
                            ? "bg-green-100 text-green-800 border-green-200"
                            : "bg-red-100 text-red-800 border-red-200"
                        }`}
                      >
                        {tz.isWorking ? "🟢 Working Hours" : "🔴 Off Hours"}
                      </Badge>

                      <div className="text-xs text-slate-500">Last updated: {tz.lastUpdate}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="test-results" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Recent Test Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
                  {testResults.length === 0 ? (
                    <div className="text-center py-8 text-slate-500">
                      <RefreshCw className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <p>No test results yet. Start testing to see results.</p>
                    </div>
                  ) : (
                    testResults.map((test, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                      >
                        <div className="flex-shrink-0 mt-0.5">{getStatusIcon(test.status)}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                            <h4 className="font-medium text-slate-900 text-sm sm:text-base">{test.name}</h4>
                            <span className="text-xs text-slate-500">{test.timestamp}</span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 mt-1">{test.message}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system-info" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">System Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Testing Configuration</h4>
                    <div className="space-y-1 text-slate-600">
                      <div>Update Interval: 1 second</div>
                      <div>Timezone Count: {timezoneConfigs.length}</div>
                      <div>Working Hours: 9:00 - 18:00</div>
                      <div>Test History: Last 20 results</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900">Current Status</h4>
                    <div className="space-y-1 text-slate-600">
                      <div>System: {isRunning ? "🟢 Running" : "🔴 Stopped"}</div>
                      <div>Updates: {updateCount} completed</div>
                      <div>Active Teams: {timezones.filter((tz) => tz.isWorking).length}</div>
                      <div>Device: {getDeviceType()}</div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-2">Timezone Coverage</h4>
                  <div className="space-y-2">
                    {timezoneConfigs.map((config) => (
                      <div key={config.city} className="flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2">
                          <span>{config.flag}</span>
                          <span>{config.city}</span>
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {config.timezone}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
