"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Smartphone, Tablet, Monitor, Laptop } from "lucide-react"

export default function MobileNavTest() {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 })
  const [currentBreakpoint, setCurrentBreakpoint] = useState("")

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })

      // Determine current breakpoint
      if (window.innerWidth < 640) {
        setCurrentBreakpoint("Mobile (< 640px)")
      } else if (window.innerWidth < 768) {
        setCurrentBreakpoint("Small Mobile (640px - 768px)")
      } else if (window.innerWidth < 1024) {
        setCurrentBreakpoint("Tablet (768px - 1024px)")
      } else if (window.innerWidth < 1280) {
        setCurrentBreakpoint("Desktop (1024px - 1280px)")
      } else {
        setCurrentBreakpoint("Large Desktop (> 1280px)")
      }
    }

    updateScreenSize()
    window.addEventListener("resize", updateScreenSize)
    return () => window.removeEventListener("resize", updateScreenSize)
  }, [])

  const testSizes = [
    { name: "iPhone SE", width: 375, height: 667, icon: Smartphone },
    { name: "iPhone 12", width: 390, height: 844, icon: Smartphone },
    { name: "Samsung Galaxy", width: 412, height: 915, icon: Smartphone },
    { name: "iPad Mini", width: 768, height: 1024, icon: Tablet },
    { name: "iPad Pro", width: 1024, height: 1366, icon: Tablet },
    { name: "Laptop", width: 1366, height: 768, icon: Laptop },
    { name: "Desktop", width: 1920, height: 1080, icon: Monitor },
  ]

  const simulateScreenSize = (width: number, height: number) => {
    // This would typically require iframe or viewport manipulation
    // For demo purposes, we'll show the information
    alert(`Simulating ${width}x${height} screen size. Please resize your browser window to test.`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Navigation Component Being Tested */}
      <Navigation />

      <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Mobile Navigation Test</h1>
          <p className="text-gray-300 text-lg">Testing navigation responsiveness across different screen sizes</p>
        </div>

        {/* Current Screen Info */}
        <Card className="mb-8 bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Monitor className="h-5 w-5" />
              Current Screen Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-gray-400 text-sm">Screen Size</p>
                <p className="text-white font-mono text-lg">
                  {screenSize.width} × {screenSize.height}
                </p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-sm">Breakpoint</p>
                <Badge variant="outline" className="text-white border-gray-600">
                  {currentBreakpoint}
                </Badge>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-sm">Navigation Mode</p>
                <Badge
                  variant={screenSize.width < 768 ? "destructive" : "default"}
                  className={screenSize.width < 768 ? "bg-blue-600" : "bg-green-600"}
                >
                  {screenSize.width < 768 ? "Mobile Menu" : "Desktop Menu"}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Test Different Screen Sizes */}
        <Card className="mb-8 bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Test Different Screen Sizes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {testSizes.map((size) => {
                const Icon = size.icon
                return (
                  <Button
                    key={size.name}
                    variant="outline"
                    className="h-auto p-4 flex flex-col items-center gap-2 bg-gray-700/50 border-gray-600 hover:bg-gray-600/50 text-white"
                    onClick={() => simulateScreenSize(size.width, size.height)}
                  >
                    <Icon className="h-6 w-6" />
                    <div className="text-center">
                      <p className="font-medium">{size.name}</p>
                      <p className="text-xs text-gray-400">
                        {size.width} × {size.height}
                      </p>
                    </div>
                  </Button>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Navigation Features Test */}
        <Card className="mb-8 bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Navigation Features Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-white font-medium">Desktop Features (≥768px)</h3>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Logo visible at 64px height (100% bigger)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Horizontal menu items visible
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Language and theme toggles visible
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Black background with proper contrast
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-white font-medium">Mobile Features (&lt;768px)</h3>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Hamburger menu button visible
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Logo still prominent and visible
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Collapsible menu with smooth animation
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      Language toggle accessible in mobile
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Responsive Breakpoints */}
        <Card className="mb-8 bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Tailwind CSS Breakpoints</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-2 text-gray-300">Breakpoint</th>
                    <th className="text-left py-2 text-gray-300">Min Width</th>
                    <th className="text-left py-2 text-gray-300">Navigation Behavior</th>
                    <th className="text-left py-2 text-gray-300">Status</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-700">
                    <td className="py-2">sm</td>
                    <td className="py-2">640px</td>
                    <td className="py-2">Mobile menu (hamburger)</td>
                    <td className="py-2">
                      <Badge variant={screenSize.width >= 640 ? "default" : "secondary"}>
                        {screenSize.width >= 640 ? "Active" : "Inactive"}
                      </Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-2">md</td>
                    <td className="py-2">768px</td>
                    <td className="py-2">Desktop menu (horizontal)</td>
                    <td className="py-2">
                      <Badge variant={screenSize.width >= 768 ? "default" : "secondary"}>
                        {screenSize.width >= 768 ? "Active" : "Inactive"}
                      </Badge>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-700">
                    <td className="py-2">lg</td>
                    <td className="py-2">1024px</td>
                    <td className="py-2">Full desktop layout</td>
                    <td className="py-2">
                      <Badge variant={screenSize.width >= 1024 ? "default" : "secondary"}>
                        {screenSize.width >= 1024 ? "Active" : "Inactive"}
                      </Badge>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2">xl</td>
                    <td className="py-2">1280px</td>
                    <td className="py-2">Large desktop optimizations</td>
                    <td className="py-2">
                      <Badge variant={screenSize.width >= 1280 ? "default" : "secondary"}>
                        {screenSize.width >= 1280 ? "Active" : "Inactive"}
                      </Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Test Instructions */}
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Testing Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-white font-medium mb-2">Manual Testing Steps:</h3>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Resize your browser window to different widths</li>
                  <li>Observe the navigation behavior at 768px breakpoint</li>
                  <li>Test the hamburger menu functionality on mobile</li>
                  <li>Verify logo visibility and size across all breakpoints</li>
                  <li>Check that all menu items are accessible</li>
                  <li>Test language and theme toggles on both desktop and mobile</li>
                </ol>
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">Key Things to Verify:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Logo is 100% bigger (64px height) and clearly visible on black background</li>
                  <li>Navigation switches from desktop to mobile at 768px breakpoint</li>
                  <li>Mobile menu opens/closes smoothly with proper animations</li>
                  <li>All interactive elements have proper hover states</li>
                  <li>Text remains readable across all screen sizes</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
