"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Tablet, Monitor, CheckCircle, XCircle, Eye, Navigation } from "lucide-react"

interface ScreenInfo {
  width: number
  height: number
  breakpoint: string
  isMobile: boolean
}

const deviceSizes = [
  { name: "iPhone SE", width: 375, height: 667, icon: Smartphone },
  { name: "iPhone 12", width: 390, height: 844, icon: Smartphone },
  { name: "Samsung Galaxy", width: 412, height: 915, icon: Smartphone },
  { name: "iPad Mini", width: 768, height: 1024, icon: Tablet },
  { name: "iPad Pro", width: 1024, height: 1366, icon: Tablet },
  { name: "Laptop", width: 1366, height: 768, icon: Monitor },
  { name: "Desktop", width: 1920, height: 1080, icon: Monitor },
]

const breakpoints = [
  { name: "xs", min: 0, max: 639, description: "Extra Small (Mobile)" },
  { name: "sm", min: 640, max: 767, description: "Small (Large Mobile)" },
  { name: "md", min: 768, max: 1023, description: "Medium (Tablet)" },
  { name: "lg", min: 1024, max: 1279, description: "Large (Small Desktop)" },
  { name: "xl", min: 1280, max: 1535, description: "Extra Large (Desktop)" },
  { name: "2xl", min: 1536, max: 9999, description: "2X Large (Large Desktop)" },
]

export default function MobileNavTest() {
  const [screenInfo, setScreenInfo] = useState<ScreenInfo>({
    width: 0,
    height: 0,
    breakpoint: "",
    isMobile: false,
  })

  const updateScreenInfo = () => {
    const width = window.innerWidth
    const height = window.innerHeight
    const isMobile = width < 768

    let breakpoint = "xs"
    for (const bp of breakpoints) {
      if (width >= bp.min && width <= bp.max) {
        breakpoint = bp.name
        break
      }
    }

    setScreenInfo({ width, height, breakpoint, isMobile })
  }

  useEffect(() => {
    updateScreenInfo()
    window.addEventListener("resize", updateScreenInfo)
    return () => window.removeEventListener("resize", updateScreenInfo)
  }, [])

  const simulateDevice = (width: number, height: number) => {
    // This would typically require browser dev tools or a testing framework
    // For demonstration, we'll just show what the dimensions would be
    alert(
      `Simulating device: ${width}×${height}px\n\nTo test this size:\n1. Open browser dev tools (F12)\n2. Toggle device toolbar\n3. Set custom dimensions to ${width}×${height}`,
    )
  }

  const getBreakpointColor = (bp: string) => {
    const colors = {
      xs: "bg-red-100 text-red-800",
      sm: "bg-orange-100 text-orange-800",
      md: "bg-yellow-100 text-yellow-800",
      lg: "bg-green-100 text-green-800",
      xl: "bg-blue-100 text-blue-800",
      "2xl": "bg-purple-100 text-purple-800",
    }
    return colors[bp as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Navigation className="w-6 h-6" />
              Mobile Navigation Test Interface
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Test the navigation behavior across different screen sizes. The navigation switches to mobile mode at
              768px (md breakpoint).
            </p>
          </CardContent>
        </Card>

        {/* Current Screen Info */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Current Screen
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-2xl font-bold">
                {screenInfo.width} × {screenInfo.height}px
              </div>
              <Badge className={getBreakpointColor(screenInfo.breakpoint)}>
                {screenInfo.breakpoint.toUpperCase()} Breakpoint
              </Badge>
              <div className="flex items-center gap-2">
                <span className="font-medium">Navigation Mode:</span>
                <Badge variant={screenInfo.isMobile ? "destructive" : "default"}>
                  {screenInfo.isMobile ? "Mobile Menu" : "Desktop Menu"}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Navigation Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-medium">Desktop (≥768px):</h4>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Logo: 64px height (100% bigger)</li>
                  <li>• Background: Black navigation bar</li>
                  <li>• Menu: Horizontal layout</li>
                  <li>• Toggles: Theme & Language visible</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Mobile (&lt;768px):</h4>
                <ul className="text-sm space-y-1 text-gray-600">
                  <li>• Logo: 64px height maintained</li>
                  <li>• Background: Black navigation bar</li>
                  <li>• Menu: Hamburger menu</li>
                  <li>• Layout: Collapsible navigation</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Device Testing */}
        <Card>
          <CardHeader>
            <CardTitle>Device Size Testing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {deviceSizes.map((device) => {
                const IconComponent = device.icon
                return (
                  <Button
                    key={device.name}
                    variant="outline"
                    className="h-auto p-3 flex flex-col items-center gap-2 bg-transparent"
                    onClick={() => simulateDevice(device.width, device.height)}
                  >
                    <IconComponent className="w-6 h-6" />
                    <div className="text-center">
                      <div className="font-medium text-xs">{device.name}</div>
                      <div className="text-xs text-gray-500">
                        {device.width}×{device.height}
                      </div>
                    </div>
                  </Button>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Breakpoint Table */}
        <Card>
          <CardHeader>
            <CardTitle>Tailwind CSS Breakpoints</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Breakpoint</th>
                    <th className="text-left p-2">Range</th>
                    <th className="text-left p-2">Description</th>
                    <th className="text-left p-2">Navigation</th>
                    <th className="text-left p-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {breakpoints.map((bp) => {
                    const isActive = screenInfo.breakpoint === bp.name
                    const navMode = bp.min < 768 ? "Mobile" : "Desktop"

                    return (
                      <tr key={bp.name} className={`border-b ${isActive ? "bg-blue-50" : ""}`}>
                        <td className="p-2">
                          <Badge className={getBreakpointColor(bp.name)}>{bp.name}</Badge>
                        </td>
                        <td className="p-2 font-mono">
                          {bp.min}px - {bp.max === 9999 ? "∞" : `${bp.max}px`}
                        </td>
                        <td className="p-2">{bp.description}</td>
                        <td className="p-2">
                          <Badge variant={navMode === "Mobile" ? "destructive" : "default"}>{navMode}</Badge>
                        </td>
                        <td className="p-2">
                          {isActive ? (
                            <CheckCircle className="w-4 h-4 text-green-500" />
                          ) : (
                            <XCircle className="w-4 h-4 text-gray-300" />
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Testing Instructions */}
        <Card>
          <CardHeader>
            <CardTitle>Testing Instructions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Manual Testing:</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
                <li>Resize your browser window to different widths</li>
                <li>Watch the navigation mode change at 768px breakpoint</li>
                <li>Verify logo remains 64px height (100% bigger) at all sizes</li>
                <li>Test hamburger menu functionality on mobile sizes</li>
                <li>Confirm black background provides good logo contrast</li>
                <li>Check that all navigation links work in both modes</li>
              </ol>
            </div>

            <div>
              <h4 className="font-medium mb-2">Key Verification Points:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>Logo visibility: 64px height clearly visible on black background</li>
                <li>Breakpoint accuracy: Mobile menu activates below 768px</li>
                <li>Animation smoothness: Menu transitions are fluid</li>
                <li>Touch targets: All buttons properly sized for mobile</li>
                <li>Accessibility: All controls remain accessible</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
