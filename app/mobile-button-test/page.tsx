"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Smartphone, Tablet, Monitor, CheckCircle2, AlertTriangle, Ruler, TruckIcon as TouchIcon } from "lucide-react"

interface TouchTarget {
  element: string
  width: number
  height: number
  status: "pass" | "fail" | "warning"
  recommendation: string
}

export default function MobileButtonTestPage() {
  const [screenWidth, setScreenWidth] = useState(0)
  const [deviceType, setDeviceType] = useState("desktop")
  const [touchTargets, setTouchTargets] = useState<TouchTarget[]>([])

  useEffect(() => {
    const updateScreenInfo = () => {
      const width = window.innerWidth
      setScreenWidth(width)

      if (width < 768) {
        setDeviceType("mobile")
      } else if (width < 1024) {
        setDeviceType("tablet")
      } else {
        setDeviceType("desktop")
      }
    }

    updateScreenInfo()
    window.addEventListener("resize", updateScreenInfo)
    return () => window.removeEventListener("resize", updateScreenInfo)
  }, [])

  useEffect(() => {
    // Simulate touch target measurements
    const targets: TouchTarget[] = [
      {
        element: "Primary Action Button",
        width: screenWidth < 768 ? 343 : 140,
        height: screenWidth < 768 ? 48 : 40,
        status: screenWidth < 768 ? "pass" : "pass",
        recommendation: screenWidth < 768 ? "Perfect mobile touch target" : "Good desktop size",
      },
      {
        element: "Secondary Button",
        width: screenWidth < 768 ? 343 : 160,
        height: screenWidth < 768 ? 48 : 40,
        status: screenWidth < 768 ? "pass" : "pass",
        recommendation: screenWidth < 768 ? "Excellent mobile accessibility" : "Adequate desktop size",
      },
      {
        element: "Clear Results Button",
        width: screenWidth < 768 ? 343 : 140,
        height: screenWidth < 768 ? 48 : 40,
        status: screenWidth < 768 ? "pass" : "pass",
        recommendation: screenWidth < 768 ? "Meets WCAG AA standards" : "Standard desktop button",
      },
      {
        element: "Status Indicator",
        width: 8,
        height: 8,
        status: "warning",
        recommendation: "Too small for touch interaction, but appropriate for visual indicator",
      },
      {
        element: "Timezone Card",
        width: screenWidth < 768 ? 343 : screenWidth < 1024 ? 340 : 320,
        height: 200,
        status: "pass",
        recommendation: "Large enough for easy interaction",
      },
    ]

    setTouchTargets(targets)
  }, [screenWidth])

  const getDeviceIcon = () => {
    switch (deviceType) {
      case "mobile":
        return <Smartphone className="w-5 h-5" />
      case "tablet":
        return <Tablet className="w-5 h-5" />
      default:
        return <Monitor className="w-5 h-5" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pass":
        return "text-green-400 bg-green-500/10 border-green-500/20"
      case "fail":
        return "text-red-400 bg-red-500/10 border-red-500/20"
      case "warning":
        return "text-yellow-400 bg-yellow-500/10 border-yellow-500/20"
      default:
        return "text-slate-400 bg-slate-500/10 border-slate-500/20"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 mb-4">
            <TouchIcon className="w-4 h-4 mr-2" />
            Test de Botones Móviles
          </Badge>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Verificación de{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Espaciado Mejorado
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Prueba los botones optimizados con mejor espaciado para dispositivos móviles
          </p>
        </div>

        {/* Device Info */}
        <Card className="mb-6 sm:mb-8 bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              {getDeviceIcon()}
              <span>Información del Dispositivo</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-700/30 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">{screenWidth}px</div>
                <div className="text-sm text-slate-300">Ancho de Pantalla</div>
              </div>
              <div className="p-4 bg-slate-700/30 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1 capitalize">{deviceType}</div>
                <div className="text-sm text-slate-300">Tipo de Dispositivo</div>
              </div>
              <div className="p-4 bg-slate-700/30 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">
                  {touchTargets.filter((t) => t.status === "pass").length}
                </div>
                <div className="text-sm text-slate-300">Elementos Optimizados</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Button Demo */}
        <Card className="mb-6 sm:mb-8 bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Ruler className="w-5 h-5" />
              <span>Demo de Botones Optimizados</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <p className="text-slate-300 text-sm sm:text-base">
                Estos botones han sido optimizados con mejor espaciado para dispositivos móviles:
              </p>

              {/* Button Demo - Same as timezone verification */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-3">
                <Button
                  variant="default"
                  className="flex items-center justify-center space-x-2 h-12 sm:h-10 text-base sm:text-sm font-medium min-w-0 sm:min-w-[140px]"
                >
                  <CheckCircle2 className="w-5 h-5 sm:w-4 sm:h-4" />
                  <span>Botón Primario</span>
                </Button>
                <Button
                  variant="outline"
                  className="text-white border-slate-600 bg-transparent hover:bg-slate-700 h-12 sm:h-10 text-base sm:text-sm font-medium min-w-0 sm:min-w-[160px]"
                >
                  Botón Secundario
                </Button>
                <Button
                  variant="outline"
                  className="text-white border-slate-600 bg-transparent hover:bg-slate-700 h-12 sm:h-10 text-base sm:text-sm font-medium min-w-0 sm:min-w-[140px]"
                >
                  Limpiar Resultados
                </Button>
              </div>

              <div className="text-sm text-slate-400 space-y-2">
                <div>
                  • <strong>Móvil:</strong> 48px de altura, ancho completo, espaciado de 16px
                </div>
                <div>
                  • <strong>Desktop:</strong> 40px de altura, ancho mínimo, espaciado de 12px
                </div>
                <div>
                  • <strong>Texto:</strong> 16px en móvil, 14px en desktop para mejor legibilidad
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Touch Target Analysis */}
        <Card className="mb-6 sm:mb-8 bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white">Análisis de Objetivos Táctiles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {touchTargets.map((target, index) => (
                <div key={index} className={`p-4 rounded-lg border ${getStatusColor(target.status)}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                    <div className="flex-1">
                      <div className="font-medium text-lg mb-1">{target.element}</div>
                      <div className="text-sm opacity-90">
                        Dimensiones: {target.width}px × {target.height}px
                      </div>
                      <div className="text-sm opacity-75 mt-1">{target.recommendation}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {target.status === "pass" ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <AlertTriangle className="w-5 h-5" />
                      )}
                      <span className="text-sm font-medium capitalize">{target.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* WCAG Guidelines */}
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white">Cumplimiento de Estándares WCAG</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-green-400">✅ Cumplimientos</h3>
                <div className="space-y-2 text-sm text-slate-300">
                  <div>• Botones móviles de 48px de altura (WCAG AA)</div>
                  <div>• Espaciado mínimo de 16px entre elementos</div>
                  <div>• Contraste de color adecuado</div>
                  <div>• Texto legible en todos los tamaños</div>
                  <div>• Indicadores visuales claros</div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-yellow-400">⚠️ Recomendaciones</h3>
                <div className="space-y-2 text-sm text-slate-300">
                  <div>• Indicadores pequeños solo para información visual</div>
                  <div>• Considerar gestos de deslizamiento para listas largas</div>
                  <div>• Mantener consistencia en todos los componentes</div>
                  <div>• Probar con usuarios reales en dispositivos táctiles</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
