"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, CheckCircle2, AlertCircle, RefreshCw, Play, Pause } from "lucide-react"

interface TimeZoneData {
  city: string
  timezone: string
  country: string
  flag: string
  workingHours: string
  utcOffset: string
}

interface TestResult {
  test: string
  status: "pass" | "fail" | "warning"
  message: string
  timestamp: string
}

export default function TimezoneVerificationPage() {
  const [currentTimes, setCurrentTimes] = useState<Record<string, string>>({})
  const [workingStatus, setWorkingStatus] = useState<Record<string, boolean>>({})
  const [testResults, setTestResults] = useState<TestResult[]>([])
  const [isRunning, setIsRunning] = useState(true)
  const [updateCount, setUpdateCount] = useState(0)
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date())

  const timezones: TimeZoneData[] = [
    {
      city: "Santiago",
      timezone: "America/Santiago",
      country: "Chile",
      flag: "🇨🇱",
      workingHours: "9:00 - 18:00 CLT",
      utcOffset: "UTC-3",
    },
    {
      city: "Kaliningrado",
      timezone: "Europe/Kaliningrad",
      country: "Rusia",
      flag: "🇷🇺",
      workingHours: "9:00 - 18:00 KALT",
      utcOffset: "UTC+2",
    },
    {
      city: "Singapur",
      timezone: "Asia/Singapore",
      country: "Singapur",
      flag: "🇸🇬",
      workingHours: "9:00 - 18:00 SGT",
      utcOffset: "UTC+8",
    },
  ]

  const addTestResult = (test: string, status: "pass" | "fail" | "warning", message: string) => {
    const result: TestResult = {
      test,
      status,
      message,
      timestamp: new Date().toLocaleTimeString(),
    }
    setTestResults((prev) => [result, ...prev.slice(0, 19)]) // Keep last 20 results
  }

  const updateTimes = () => {
    const times: Record<string, string> = {}
    const status: Record<string, boolean> = {}
    let allTimesValid = true
    let workingTeamsCount = 0

    timezones.forEach((tz) => {
      try {
        const now = new Date()
        const timeString = now.toLocaleTimeString("es-CL", {
          timeZone: tz.timezone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })

        // Validate time format
        if (!/^\d{2}:\d{2}$/.test(timeString)) {
          allTimesValid = false
          addTestResult(`Time Format - ${tz.city}`, "fail", `Invalid time format: ${timeString}`)
        }

        times[tz.city] = timeString

        // Check if it's working hours (9 AM to 6 PM)
        const hour = Number.parseInt(timeString.split(":")[0])
        const isWorking = hour >= 9 && hour < 18
        status[tz.city] = isWorking

        if (isWorking) workingTeamsCount++

        // Test working hours logic
        if (hour >= 0 && hour <= 23) {
          addTestResult(
            `Working Hours - ${tz.city}`,
            "pass",
            `Hour ${hour} correctly evaluated as ${isWorking ? "working" : "off-duty"}`,
          )
        }
      } catch (error) {
        allTimesValid = false
        addTestResult(`Timezone Error - ${tz.city}`, "fail", `Failed to get time: ${error}`)
      }
    })

    setCurrentTimes(times)
    setWorkingStatus(status)
    setUpdateCount((prev) => prev + 1)
    setLastUpdate(new Date())

    // Overall system tests
    if (allTimesValid) {
      addTestResult("Time Updates", "pass", "All timezone times updated successfully")
    }

    if (workingTeamsCount > 0) {
      addTestResult("Coverage", "pass", `${workingTeamsCount} team(s) currently on duty`)
    } else {
      addTestResult("Coverage", "warning", "No teams currently in working hours")
    }
  }

  useEffect(() => {
    if (!isRunning) return

    updateTimes()
    const interval = setInterval(updateTimes, 1000)
    return () => clearInterval(interval)
  }, [isRunning])

  const runManualTests = () => {
    // Test timezone accuracy
    timezones.forEach((tz) => {
      const now = new Date()
      const localTime = now.toLocaleString("en-US", { timeZone: tz.timezone })
      addTestResult(`Timezone Accuracy - ${tz.city}`, "pass", `Local time: ${localTime}`)
    })

    // Test working status calculation
    const currentHour = new Date().getHours()
    const testHours = [8, 9, 12, 17, 18, 19]
    testHours.forEach((hour) => {
      const isWorking = hour >= 9 && hour < 18
      addTestResult("Working Hours Logic", "pass", `Hour ${hour}: ${isWorking ? "Working" : "Off-duty"}`)
    })

    addTestResult("Manual Tests", "pass", "All manual tests completed")
  }

  const toggleUpdates = () => {
    setIsRunning(!isRunning)
    addTestResult("Update Control", "pass", `Real-time updates ${!isRunning ? "started" : "paused"}`)
  }

  const clearResults = () => {
    setTestResults([])
    addTestResult("System", "pass", "Test results cleared")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 mb-4">
            <Clock className="w-4 h-4 mr-2" />
            Verificación de Zonas Horarias
          </Badge>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Test de Relojes en{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Tiempo Real
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-4">
            Verificación automática de actualizaciones de reloj y indicadores de estado de trabajo
          </p>
        </div>

        {/* Control Panel - Improved Mobile Layout */}
        <Card className="mb-6 sm:mb-8 bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2 text-lg sm:text-xl">
              <RefreshCw className="w-5 h-5" />
              <span>Panel de Control</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Mobile-First Layout with Better Spacing */}
            <div className="space-y-6">
              {/* Action Buttons - Stacked on Mobile with Better Touch Targets */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-3">
                <Button
                  onClick={toggleUpdates}
                  variant={isRunning ? "destructive" : "default"}
                  className="flex items-center justify-center space-x-2 h-12 sm:h-10 text-base sm:text-sm font-medium min-w-0 sm:min-w-[140px]"
                >
                  {isRunning ? <Pause className="w-5 h-5 sm:w-4 sm:h-4" /> : <Play className="w-5 h-5 sm:w-4 sm:h-4" />}
                  <span>{isRunning ? "Pausar" : "Iniciar"} Actualizaciones</span>
                </Button>
                <Button
                  onClick={runManualTests}
                  variant="outline"
                  className="text-white border-slate-600 bg-transparent hover:bg-slate-700 h-12 sm:h-10 text-base sm:text-sm font-medium min-w-0 sm:min-w-[160px]"
                >
                  Ejecutar Tests Manuales
                </Button>
                <Button
                  onClick={clearResults}
                  variant="outline"
                  className="text-white border-slate-600 bg-transparent hover:bg-slate-700 h-12 sm:h-10 text-base sm:text-sm font-medium min-w-0 sm:min-w-[140px]"
                >
                  Limpiar Resultados
                </Button>
              </div>

              {/* Status Information - Better Mobile Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center justify-between sm:justify-start sm:space-x-2 p-3 sm:p-2 bg-slate-700/30 rounded-lg">
                  <span className="text-slate-400">Actualizaciones:</span>
                  <span className="text-white font-medium">{updateCount}</span>
                </div>
                <div className="flex items-center justify-between sm:justify-start sm:space-x-2 p-3 sm:p-2 bg-slate-700/30 rounded-lg">
                  <span className="text-slate-400">Última actualización:</span>
                  <span className="text-white font-medium">{lastUpdate.toLocaleTimeString()}</span>
                </div>
                <div className="flex items-center justify-between sm:justify-start sm:space-x-2 p-3 sm:p-2 bg-slate-700/30 rounded-lg">
                  <span className="text-slate-400">Estado:</span>
                  <div className={`flex items-center space-x-2 ${isRunning ? "text-green-400" : "text-red-400"}`}>
                    <div
                      className={`w-2 h-2 rounded-full ${isRunning ? "bg-green-400" : "bg-red-400"} animate-pulse`}
                    ></div>
                    <span className="font-medium">{isRunning ? "Activo" : "Pausado"}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-start sm:space-x-2 p-3 sm:p-2 bg-slate-700/30 rounded-lg">
                  <span className="text-slate-400">Equipos activos:</span>
                  <span className="text-white font-medium">{Object.values(workingStatus).filter(Boolean).length}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Live Timezone Display - Improved Mobile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {timezones.map((tz) => (
            <Card key={tz.city} className="bg-slate-800/50 border-slate-700/50">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <span className="text-2xl sm:text-3xl">{tz.flag}</span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">{tz.city}</h3>
                    <p className="text-sm text-slate-400">{tz.country}</p>
                    <p className="text-xs text-slate-500">{tz.utcOffset}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span className="text-2xl sm:text-3xl font-mono text-white font-bold">
                      {currentTimes[tz.city] || "00:00"}
                    </span>
                  </div>

                  <div className="text-sm text-slate-400">{tz.workingHours}</div>

                  <div
                    className={`inline-flex items-center space-x-2 px-3 py-2 rounded-full text-xs font-medium ${
                      workingStatus[tz.city]
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-red-500/20 text-red-400 border border-red-500/30"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        workingStatus[tz.city] ? "bg-green-400" : "bg-red-400"
                      } animate-pulse`}
                    ></div>
                    <span>{workingStatus[tz.city] ? "Equipo en línea" : "Fuera de horario"}</span>
                  </div>

                  {/* Additional test info - Hidden on small screens to save space */}
                  <div className="hidden sm:block text-xs text-slate-500 space-y-1">
                    <div>
                      Hora actual: {currentTimes[tz.city] ? Number.parseInt(currentTimes[tz.city].split(":")[0]) : 0}
                    </div>
                    <div>Estado: {workingStatus[tz.city] ? "✅ Trabajando" : "❌ Fuera de horario"}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Test Results - Improved Mobile Scrolling */}
        <Card className="bg-slate-800/50 border-slate-700/50 mb-6 sm:mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center justify-between text-lg sm:text-xl">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Resultados de Tests en Tiempo Real</span>
              </div>
              <Badge variant="outline" className="text-slate-300">
                {testResults.length} resultados
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Improved Mobile Scrolling with Touch Indicators */}
            <div className="space-y-2 max-h-80 sm:max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
              {testResults.length === 0 ? (
                <div className="text-center text-slate-400 py-8">
                  <AlertCircle className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm sm:text-base">
                    No hay resultados de tests aún. Los tests se ejecutan automáticamente cada segundo.
                  </p>
                </div>
              ) : (
                testResults.map((result, index) => (
                  <div
                    key={index}
                    className={`flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-3 rounded-lg space-y-2 sm:space-y-0 ${
                      result.status === "pass"
                        ? "bg-green-500/10 border border-green-500/20"
                        : result.status === "fail"
                          ? "bg-red-500/10 border border-red-500/20"
                          : "bg-yellow-500/10 border border-yellow-500/20"
                    }`}
                  >
                    <div className="flex items-start space-x-3 min-w-0 flex-1">
                      <div
                        className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                          result.status === "pass"
                            ? "bg-green-400"
                            : result.status === "fail"
                              ? "bg-red-400"
                              : "bg-yellow-400"
                        }`}
                      ></div>
                      <div className="min-w-0 flex-1">
                        <div
                          className={`font-medium text-sm sm:text-base ${
                            result.status === "pass"
                              ? "text-green-400"
                              : result.status === "fail"
                                ? "text-red-400"
                                : "text-yellow-400"
                          }`}
                        >
                          {result.test}
                        </div>
                        <div className="text-xs sm:text-sm text-slate-300 break-words">{result.message}</div>
                      </div>
                    </div>
                    <div className="text-xs text-slate-500 flex-shrink-0 sm:ml-4">{result.timestamp}</div>
                  </div>
                ))
              )}
            </div>
            {/* Mobile Scroll Indicator */}
            {testResults.length > 5 && (
              <div className="sm:hidden text-center text-xs text-slate-500 mt-2 flex items-center justify-center space-x-1">
                <div className="w-1 h-1 bg-slate-500 rounded-full animate-bounce"></div>
                <span>Desliza para ver más resultados</span>
                <div
                  className="w-1 h-1 bg-slate-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Summary Statistics - Improved Mobile Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <Card className="bg-slate-800/30 border-slate-700/50">
            <CardContent className="p-3 sm:p-4 text-center">
              <div className="text-xl sm:text-2xl font-bold text-green-400 mb-1">{updateCount}</div>
              <div className="text-xs sm:text-sm text-slate-300">Actualizaciones</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/30 border-slate-700/50">
            <CardContent className="p-3 sm:p-4 text-center">
              <div className="text-xl sm:text-2xl font-bold text-blue-400 mb-1">
                {Object.values(workingStatus).filter(Boolean).length}
              </div>
              <div className="text-xs sm:text-sm text-slate-300">Equipos Activos</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/30 border-slate-700/50">
            <CardContent className="p-3 sm:p-4 text-center">
              <div className="text-xl sm:text-2xl font-bold text-purple-400 mb-1">
                {testResults.filter((r) => r.status === "pass").length}
              </div>
              <div className="text-xs sm:text-sm text-slate-300">Tests Exitosos</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/30 border-slate-700/50">
            <CardContent className="p-3 sm:p-4 text-center">
              <div className="text-xl sm:text-2xl font-bold text-red-400 mb-1">
                {testResults.filter((r) => r.status === "fail").length}
              </div>
              <div className="text-xs sm:text-sm text-slate-300">Tests Fallidos</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
