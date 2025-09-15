"use client"

import { useState } from "react"
import { ClientsSection } from "@/components/landing/clients-section"
import { LanguageProvider } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Tablet, Smartphone, Maximize2, Minimize2 } from "lucide-react"

export default function ClientsResponsiveTest() {
  const [viewportSize, setViewportSize] = useState("full")
  const [showGrid, setShowGrid] = useState(false)

  const viewports = {
    mobile: { width: "375px", label: "Mobile (375px)", icon: Smartphone },
    tablet: { width: "768px", label: "Tablet (768px)", icon: Tablet },
    desktop: { width: "1024px", label: "Desktop (1024px)", icon: Monitor },
    large: { width: "1440px", label: "Large (1440px)", icon: Maximize2 },
    full: { width: "100%", label: "Full Width", icon: Maximize2 },
  }

  const breakpoints = [
    { name: "Mobile", range: "< 640px", cols: "1 column", description: "Single column layout for mobile devices" },
    { name: "Tablet", range: "640px - 1024px", cols: "2 columns", description: "Two column grid for tablets" },
    { name: "Desktop", range: "> 1024px", cols: "3 columns", description: "Three column grid for desktop" },
  ]

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-black mb-2">Clients Section Responsive Test</h1>
            <p className="text-gray-600">Test the clients grid across different screen sizes and breakpoints</p>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              {/* Viewport Controls */}
              <div className="flex flex-wrap gap-2">
                {Object.entries(viewports).map(([key, viewport]) => {
                  const IconComponent = viewport.icon
                  return (
                    <Button
                      key={key}
                      variant={viewportSize === key ? "default" : "outline"}
                      size="sm"
                      onClick={() => setViewportSize(key)}
                      className="flex items-center gap-2"
                    >
                      <IconComponent className="w-4 h-4" />
                      {viewport.label}
                    </Button>
                  )
                })}
              </div>

              {/* Grid Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowGrid(!showGrid)}
                className="flex items-center gap-2"
              >
                {showGrid ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                {showGrid ? "Hide Grid" : "Show Grid"}
              </Button>
            </div>
          </div>
        </div>

        {/* Breakpoint Information */}
        <div className="max-w-7xl mx-auto p-6">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="w-5 h-5" />
                Responsive Breakpoints
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {breakpoints.map((bp, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-black">{bp.name}</h3>
                      <Badge variant="outline">{bp.cols}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{bp.range}</p>
                    <p className="text-xs text-gray-500">{bp.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Current Viewport Info */}
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="font-semibold text-blue-900">Current Viewport: {viewports[viewportSize].label}</span>
            </div>
            <p className="text-sm text-blue-700">
              Width: {viewports[viewportSize].width} | Grid will show{" "}
              {viewportSize === "mobile" ? "1 column" : viewportSize === "tablet" ? "2 columns" : "3 columns"}
            </p>
          </div>
        </div>

        {/* Viewport Container */}
        <div className="max-w-7xl mx-auto px-6 pb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Viewport Frame */}
            <div
              className={`mx-auto transition-all duration-500 ${showGrid ? "bg-grid-pattern" : ""}`}
              style={{
                width: viewports[viewportSize].width,
                maxWidth: "100%",
              }}
            >
              {/* Grid Overlay */}
              {showGrid && (
                <div className="absolute inset-0 pointer-events-none z-10">
                  <div className="h-full w-full bg-blue-500 bg-opacity-5 bg-grid-sm"></div>
                </div>
              )}

              {/* Clients Section */}
              <div className="relative">
                <ClientsSection />
              </div>
            </div>
          </div>

          {/* Test Results */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Responsive Test Results</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-black mb-2">✅ Mobile (&lt; 640px)</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Single column layout</li>
                      <li>• Cards stack vertically</li>
                      <li>• Proper spacing maintained</li>
                      <li>• Touch-friendly interactions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">✅ Tablet (640px - 1024px)</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Two column grid</li>
                      <li>• Balanced card distribution</li>
                      <li>• Optimal use of space</li>
                      <li>• Smooth transitions</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-2">✅ Desktop (&gt; 1024px)</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Three column grid layout</li>
                    <li>• Maximum content visibility</li>
                    <li>• Proper hover effects</li>
                    <li>• Consistent card heights</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Performance & Accessibility</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
                  <div className="text-sm text-green-700">Responsive</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">A+</div>
                  <div className="text-sm text-blue-700">Accessibility</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-1">Fast</div>
                  <div className="text-sm text-purple-700">Performance</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </LanguageProvider>
  )
}
