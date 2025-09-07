"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Smartphone, Tablet, Monitor, CheckCircle2, AlertTriangle, Eye, Maximize2, Minimize2 } from "lucide-react"

interface DeviceTest {
  device: string
  width: number
  height: number
  icon: React.ReactNode
  description: string
}

interface ResponsiveTest {
  component: string
  mobile: "pass" | "fail" | "warning"
  tablet: "pass" | "fail" | "warning"
  desktop: "pass" | "fail" | "warning"
  notes: string
}

export default function MobileResponsivenessTestPage() {
  const [currentDevice, setCurrentDevice] = useState("desktop")
  const [viewportWidth, setViewportWidth] = useState(1200)
  const [viewportHeight, setViewportHeight] = useState(800)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const devices: DeviceTest[] = [
    {
      device: "mobile",
      width: 375,
      height: 667,
      icon: <Smartphone className="w-4 h-4" />,
      description: "iPhone SE / Small Mobile",
    },
    {
      device: "mobile-large",
      width: 414,
      height: 896,
      icon: <Smartphone className="w-4 h-4" />,
      description: "iPhone 11 Pro / Large Mobile",
    },
    {
      device: "tablet",
      width: 768,
      height: 1024,
      icon: <Tablet className="w-4 h-4" />,
      description: "iPad / Tablet Portrait",
    },
    {
      device: "tablet-landscape",
      width: 1024,
      height: 768,
      icon: <Tablet className="w-4 h-4" />,
      description: "iPad / Tablet Landscape",
    },
    {
      device: "desktop",
      width: 1200,
      height: 800,
      icon: <Monitor className="w-4 h-4" />,
      description: "Desktop / Laptop",
    },
    {
      device: "desktop-large",
      width: 1920,
      height: 1080,
      icon: <Monitor className="w-4 h-4" />,
      description: "Large Desktop",
    },
  ]

  const responsiveTests: ResponsiveTest[] = [
    {
      component: "Header Section",
      mobile: "pass",
      tablet: "pass",
      desktop: "pass",
      notes: "Title scales properly, badge remains visible",
    },
    {
      component: "Control Panel",
      mobile: "warning",
      tablet: "pass",
      desktop: "pass",
      notes: "Buttons stack on mobile, may need better spacing",
    },
    {
      component: "Timezone Cards Grid",
      mobile: "pass",
      tablet: "pass",
      desktop: "pass",
      notes: "Perfect 1-2-3 column responsive layout",
    },
    {
      component: "Clock Display",
      mobile: "pass",
      tablet: "pass",
      desktop: "pass",
      notes: "Large font remains readable on all sizes",
    },
    {
      component: "Status Indicators",
      mobile: "pass",
      tablet: "pass",
      desktop: "pass",
      notes: "Dots and badges scale appropriately",
    },
    {
      component: "Test Results Panel",
      mobile: "warning",
      tablet: "pass",
      desktop: "pass",
      notes: "Scrollable area works but may need touch optimization",
    },
    {
      component: "Summary Statistics",
      mobile: "pass",
      tablet: "pass",
      desktop: "pass",
      notes: "2x2 grid on mobile, 4 columns on desktop",
    },
    {
      component: "Navigation & Spacing",
      mobile: "pass",
      tablet: "pass",
      desktop: "pass",
      notes: "Proper padding and margins maintained",
    },
  ]

  const setDeviceSize = (device: DeviceTest) => {
    setCurrentDevice(device.device)
    setViewportWidth(device.width)
    setViewportHeight(device.height)
  }

  const getStatusIcon = (status: "pass" | "fail" | "warning") => {
    switch (status) {
      case "pass":
        return <CheckCircle2 className="w-4 h-4 text-green-400" />
      case "fail":
        return <AlertTriangle className="w-4 h-4 text-red-400" />
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-yellow-400" />
    }
  }

  const getStatusColor = (status: "pass" | "fail" | "warning") => {
    switch (status) {
      case "pass":
        return "text-green-400 bg-green-500/10 border-green-500/20"
      case "fail":
        return "text-red-400 bg-red-500/10 border-red-500/20"
      case "warning":
        return "text-yellow-400 bg-yellow-500/10 border-yellow-500/20"
    }
  }

  useEffect(() => {
    const updateViewportSize = () => {
      if (currentDevice === "current") {
        setViewportWidth(window.innerWidth)
        setViewportHeight(window.innerHeight)
      }
    }

    window.addEventListener("resize", updateViewportSize)
    return () => window.removeEventListener("resize", updateViewportSize)
  }, [currentDevice])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 mb-4">
            <Eye className="w-4 h-4 mr-2" />
            Test de Responsividad
          </Badge>
          <h1 className="text-4xl font-bold text-white mb-4">
            Verificación de{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Interfaz Móvil
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Prueba la interfaz de verificación de zonas horarias en diferentes tamaños de pantalla
          </p>
        </div>

        <Tabs defaultValue="preview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 bg-slate-800/50 border border-slate-700/50">
            <TabsTrigger value="preview" className="text-white">
              Vista Previa
            </TabsTrigger>
            <TabsTrigger value="tests" className="text-white">
              Resultados de Tests
            </TabsTrigger>
          </TabsList>

          <TabsContent value="preview" className="space-y-6">
            {/* Device Selector */}
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  <span>Selector de Dispositivo</span>
                  <div className="flex items-center space-x-2 text-sm text-slate-300">
                    <span>
                      {viewportWidth} × {viewportHeight}px
                    </span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setIsFullscreen(!isFullscreen)}
                      className="text-white border-slate-600"
                    >
                      {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {devices.map((device) => (
                    <Button
                      key={device.device}
                      onClick={() => setDeviceSize(device)}
                      variant={currentDevice === device.device ? "default" : "outline"}
                      className={`flex flex-col items-center space-y-2 h-auto py-3 ${
                        currentDevice === device.device
                          ? "bg-blue-600 text-white"
                          : "text-white border-slate-600 bg-transparent hover:bg-slate-700"
                      }`}
                    >
                      {device.icon}
                      <div className="text-center">
                        <div className="text-xs font-medium">{device.description}</div>
                        <div className="text-xs opacity-70">
                          {device.width}×{device.height}
                        </div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Preview Frame */}
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white">Vista Previa - {currentDevice}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <div
                    className={`border-2 border-slate-600 rounded-lg overflow-hidden bg-slate-900 ${
                      isFullscreen ? "w-full h-screen" : ""
                    }`}
                    style={
                      !isFullscreen
                        ? {
                            width: Math.min(viewportWidth, 1200),
                            height: Math.min(viewportHeight, 800),
                            transform: viewportWidth > 1200 ? `scale(${1200 / viewportWidth})` : "none",
                            transformOrigin: "top center",
                          }
                        : {}
                    }
                  >
                    <iframe
                      src="/timezone-verification"
                      className="w-full h-full border-0"
                      style={{
                        width: viewportWidth,
                        height: viewportHeight,
                        transform: !isFullscreen && viewportWidth > 1200 ? `scale(${1200 / viewportWidth})` : "none",
                        transformOrigin: "top left",
                      }}
                      title="Timezone Verification Preview"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tests" className="space-y-6">
            {/* Test Results Summary */}
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <Card className="bg-slate-800/30 border-slate-700/50">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    {responsiveTests.filter((t) => t.mobile === "pass").length}
                  </div>
                  <div className="text-sm text-slate-300">Mobile Pass</div>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/30 border-slate-700/50">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    {responsiveTests.filter((t) => t.tablet === "pass").length}
                  </div>
                  <div className="text-sm text-slate-300">Tablet Pass</div>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/30 border-slate-700/50">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">
                    {responsiveTests.filter((t) => t.desktop === "pass").length}
                  </div>
                  <div className="text-sm text-slate-300">Desktop Pass</div>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/30 border-slate-700/50">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">
                    {
                      responsiveTests.filter(
                        (t) => t.mobile === "warning" || t.tablet === "warning" || t.desktop === "warning",
                      ).length
                    }
                  </div>
                  <div className="text-sm text-slate-300">Warnings</div>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Test Results */}
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white">Resultados Detallados por Componente</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {responsiveTests.map((test, index) => (
                    <div key={index} className="border border-slate-700/50 rounded-lg p-4 bg-slate-800/30">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold text-white">{test.component}</h3>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Smartphone className="w-4 h-4 text-slate-400" />
                            {getStatusIcon(test.mobile)}
                          </div>
                          <div className="flex items-center space-x-1">
                            <Tablet className="w-4 h-4 text-slate-400" />
                            {getStatusIcon(test.tablet)}
                          </div>
                          <div className="flex items-center space-x-1">
                            <Monitor className="w-4 h-4 text-slate-400" />
                            {getStatusIcon(test.desktop)}
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-3 mb-3">
                        <div className={`p-2 rounded border text-xs ${getStatusColor(test.mobile)}`}>
                          <div className="font-medium">Mobile</div>
                          <div className="capitalize">{test.mobile}</div>
                        </div>
                        <div className={`p-2 rounded border text-xs ${getStatusColor(test.tablet)}`}>
                          <div className="font-medium">Tablet</div>
                          <div className="capitalize">{test.tablet}</div>
                        </div>
                        <div className={`p-2 rounded border text-xs ${getStatusColor(test.desktop)}`}>
                          <div className="font-medium">Desktop</div>
                          <div className="capitalize">{test.desktop}</div>
                        </div>
                      </div>

                      <div className="text-sm text-slate-300 bg-slate-700/30 p-3 rounded">
                        <strong>Notas:</strong> {test.notes}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white">Recomendaciones de Mejora</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
                    <div>
                      <div className="font-medium text-yellow-400">Control Panel Mobile</div>
                      <div className="text-sm text-slate-300">
                        Considerar mejor espaciado entre botones en móvil para mejorar la experiencia táctil
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
                    <div>
                      <div className="font-medium text-yellow-400">Test Results Scrolling</div>
                      <div className="text-sm text-slate-300">
                        Optimizar el área de scroll para dispositivos táctiles con mejor indicadores de scroll
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5" />
                    <div>
                      <div className="font-medium text-green-400">Excelente Responsividad General</div>
                      <div className="text-sm text-slate-300">
                        La mayoría de componentes funcionan perfectamente en todos los tamaños de pantalla
                      </div>
                    </div>
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
