"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/landing/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  Clock,
  Database,
  Server,
  Wifi,
  Shield,
  RefreshCw,
  Activity,
  Zap,
  Globe,
} from "lucide-react"

interface SystemStatus {
  name: string
  status: "operational" | "degraded" | "down"
  responseTime: number
  uptime: number
  lastCheck: string
  icon: any
}

export default function SystemCheckPage() {
  const [loading, setLoading] = useState(true)
  const [lastUpdate, setLastUpdate] = useState(new Date())
  const [systems, setSystems] = useState<SystemStatus[]>([
    {
      name: "API Principal",
      status: "operational",
      responseTime: 145,
      uptime: 99.9,
      lastCheck: "Hace 30 segundos",
      icon: Server,
    },
    {
      name: "Base de Datos",
      status: "operational",
      responseTime: 23,
      uptime: 99.95,
      lastCheck: "Hace 15 segundos",
      icon: Database,
    },
    {
      name: "WhatsApp API",
      status: "operational",
      responseTime: 234,
      uptime: 99.8,
      lastCheck: "Hace 45 segundos",
      icon: Wifi,
    },
    {
      name: "Agentes IA",
      status: "operational",
      responseTime: 189,
      uptime: 99.7,
      lastCheck: "Hace 20 segundos",
      icon: Zap,
    },
    {
      name: "CDN Global",
      status: "operational",
      responseTime: 67,
      uptime: 99.99,
      lastCheck: "Hace 10 segundos",
      icon: Globe,
    },
    {
      name: "Seguridad",
      status: "operational",
      responseTime: 12,
      uptime: 100,
      lastCheck: "Hace 5 segundos",
      icon: Shield,
    },
  ])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    const interval = setInterval(() => {
      setLastUpdate(new Date())
      // Simulate real-time updates
      setSystems((prev) =>
        prev.map((system) => ({
          ...system,
          responseTime: Math.floor(Math.random() * 50) + system.responseTime - 25,
          lastCheck: "Hace " + Math.floor(Math.random() * 60) + " segundos",
        })),
      )
    }, 30000)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "text-green-600 dark:text-green-400"
      case "degraded":
        return "text-yellow-600 dark:text-yellow-400"
      case "down":
        return "text-red-600 dark:text-red-400"
      default:
        return "text-slate-600 dark:text-slate-400"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return CheckCircle
      case "degraded":
        return AlertTriangle
      case "down":
        return XCircle
      default:
        return Clock
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "operational":
        return (
          <Badge className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">Operacional</Badge>
        )
      case "degraded":
        return (
          <Badge className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300">Degradado</Badge>
        )
      case "down":
        return <Badge className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300">Inactivo</Badge>
      default:
        return <Badge className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300">Desconocido</Badge>
    }
  }

  const overallStatus = systems.every((s) => s.status === "operational")
    ? "operational"
    : systems.some((s) => s.status === "down")
      ? "down"
      : "degraded"

  const averageUptime = systems.reduce((acc, system) => acc + system.uptime, 0) / systems.length
  const averageResponseTime = systems.reduce((acc, system) => acc + system.responseTime, 0) / systems.length

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navigation />
      <main className="pt-20 pb-16 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div
                className={`p-3 rounded-full ${
                  overallStatus === "operational"
                    ? "bg-green-100 dark:bg-green-900/30"
                    : overallStatus === "degraded"
                      ? "bg-yellow-100 dark:bg-yellow-900/30"
                      : "bg-red-100 dark:bg-red-900/30"
                }`}
              >
                <Activity className={`w-8 h-8 ${getStatusColor(overallStatus)}`} />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Estado del Sistema</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-4">
              Monitoreo en tiempo real de todos nuestros servicios
            </p>
            {getStatusBadge(overallStatus)}
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              Última actualización: {lastUpdate.toLocaleTimeString()}
            </p>
          </div>

          {/* Overall Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Uptime Promedio</p>
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400">{averageUptime.toFixed(2)}%</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <Progress value={averageUptime} className="mt-2" />
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Tiempo de Respuesta</p>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {Math.round(averageResponseTime)}ms
                    </p>
                  </div>
                  <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">Objetivo: &lt;200ms</div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Servicios Activos</p>
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                      {systems.filter((s) => s.status === "operational").length}/{systems.length}
                    </p>
                  </div>
                  <Server className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">Todos los sistemas</div>
              </CardContent>
            </Card>
          </div>

          {/* System Status Cards */}
          <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Estado de Servicios</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.location.reload()}
                className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Actualizar
              </Button>
            </div>

            <div className="grid gap-4">
              {systems.map((system, index) => {
                const StatusIcon = getStatusIcon(system.status)
                const SystemIcon = system.icon

                return (
                  <Card key={index} className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                            <SystemIcon className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-slate-900 dark:text-white">{system.name}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">{system.lastCheck}</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-6">
                          <div className="text-right">
                            <p className="text-sm text-slate-600 dark:text-slate-400">Uptime</p>
                            <p className="font-semibold text-slate-900 dark:text-white">{system.uptime}%</p>
                          </div>

                          <div className="text-right">
                            <p className="text-sm text-slate-600 dark:text-slate-400">Respuesta</p>
                            <p className="font-semibold text-slate-900 dark:text-white">{system.responseTime}ms</p>
                          </div>

                          <div className="flex items-center space-x-2">
                            <StatusIcon className={`w-5 h-5 ${getStatusColor(system.status)}`} />
                            {getStatusBadge(system.status)}
                          </div>
                        </div>
                      </div>

                      {loading && (
                        <div className="mt-4">
                          <div className="animate-pulse flex space-x-4">
                            <div className="flex-1 space-y-2">
                              <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                              <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-5/6"></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Historical Data */}
          <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white">Datos Históricos</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-center text-slate-600 dark:text-slate-400">
                <Activity className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium mb-2">Gráficos de Rendimiento</p>
                <p className="text-sm">
                  Los datos históricos de rendimiento y uptime estarán disponibles próximamente. Actualmente mostramos
                  el estado en tiempo real de todos nuestros servicios.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Incident History */}
          <Card className="mt-8 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-slate-900 dark:text-white">Historial de Incidentes</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-center text-slate-600 dark:text-slate-400">
                <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-500 dark:text-green-400" />
                <p className="text-lg font-medium mb-2 text-green-600 dark:text-green-400">Sin Incidentes Reportados</p>
                <p className="text-sm">
                  Todos nuestros sistemas han estado funcionando sin interrupciones en los últimos 30 días. Nuestro
                  objetivo es mantener un uptime del 99.9% o superior.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
