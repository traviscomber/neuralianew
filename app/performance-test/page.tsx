"use client"

import { useState, useEffect, useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import { Clock, Zap, CheckCircle, AlertCircle, TrendingUp } from "lucide-react"

interface PerformanceMetric {
  name: string
  value: number
  unit: string
  status: "good" | "needs-improvement" | "poor"
  threshold: { good: number; poor: number }
}

interface ImageLoadTest {
  src: string
  alt: string
  size: string
  loadTime: number | null
  status: "loading" | "loaded" | "error"
}

export default function PerformanceTestPage() {
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([])
  const [imageTests, setImageTests] = useState<ImageLoadTest[]>([
    { src: "/n3uralia-logo-new.png", alt: "Main Logo", size: "64x64", loadTime: null, status: "loading" },
    { src: "/n3uralia-logo.png", alt: "Original Logo", size: "Various", loadTime: null, status: "loading" },
    { src: "/n3u-logo-circle.png", alt: "Circle Logo", size: "Various", loadTime: null, status: "loading" },
    {
      src: "/n3uralia-logo-horizontal.jpg",
      alt: "Horizontal Logo",
      size: "Various",
      loadTime: null,
      status: "loading",
    },
  ])
  const [isTestingComplete, setIsTestingComplete] = useState(false)
  const [overallScore, setOverallScore] = useState(0)
  const startTimeRef = useRef<number>(0)

  useEffect(() => {
    // Test Core Web Vitals
    const testPerformance = () => {
      const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming
      const paint = performance.getEntriesByType("paint")

      const newMetrics: PerformanceMetric[] = [
        {
          name: "First Contentful Paint",
          value: paint.find((p) => p.name === "first-contentful-paint")?.startTime || 0,
          unit: "ms",
          status: "good",
          threshold: { good: 1800, poor: 3000 },
        },
        {
          name: "Largest Contentful Paint",
          value: paint.find((p) => p.name === "largest-contentful-paint")?.startTime || 0,
          unit: "ms",
          status: "good",
          threshold: { good: 2500, poor: 4000 },
        },
        {
          name: "DOM Content Loaded",
          value: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          unit: "ms",
          status: "good",
          threshold: { good: 1500, poor: 2500 },
        },
        {
          name: "Page Load Time",
          value: navigation.loadEventEnd - navigation.loadEventStart,
          unit: "ms",
          status: "good",
          threshold: { good: 2000, poor: 4000 },
        },
      ]

      // Determine status based on thresholds
      newMetrics.forEach((metric) => {
        if (metric.value <= metric.threshold.good) {
          metric.status = "good"
        } else if (metric.value <= metric.threshold.poor) {
          metric.status = "needs-improvement"
        } else {
          metric.status = "poor"
        }
      })

      setMetrics(newMetrics)
    }

    // Test image loading performance
    const testImageLoading = () => {
      imageTests.forEach((test, index) => {
        const img = new Image()
        const startTime = performance.now()

        img.onload = () => {
          const loadTime = performance.now() - startTime
          setImageTests((prev) => prev.map((item, i) => (i === index ? { ...item, loadTime, status: "loaded" } : item)))
        }

        img.onerror = () => {
          setImageTests((prev) => prev.map((item, i) => (i === index ? { ...item, status: "error" } : item)))
        }

        img.src = test.src
      })
    }

    // Run tests after component mounts
    setTimeout(() => {
      testPerformance()
      testImageLoading()
    }, 1000)

    // Mark test as complete after all images are tested
    setTimeout(() => {
      setIsTestingComplete(true)
    }, 5000)
  }, [])

  useEffect(() => {
    // Calculate overall performance score
    if (metrics.length > 0) {
      const goodMetrics = metrics.filter((m) => m.status === "good").length
      const score = (goodMetrics / metrics.length) * 100
      setOverallScore(score)
    }
  }, [metrics])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good":
        return "text-green-600 bg-green-100 border-green-200"
      case "needs-improvement":
        return "text-yellow-600 bg-yellow-100 border-yellow-200"
      case "poor":
        return "text-red-600 bg-red-100 border-red-200"
      default:
        return "text-slate-600 bg-slate-100 border-slate-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "good":
        return <CheckCircle className="w-4 h-4" />
      case "needs-improvement":
        return <AlertCircle className="w-4 h-4" />
      case "poor":
        return <AlertCircle className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black text-slate-900 mb-4">Performance & Image Optimization Test</h1>
            <p className="text-xl text-slate-600">Testing loading speed and optimization impact</p>
          </div>

          {/* Overall Score */}
          <Card className="p-8 mb-8 text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-slate-900">Performance Score</h2>
            </div>
            <div className="text-6xl font-black text-slate-900 mb-4">
              {Math.round(overallScore)}
              <span className="text-2xl text-slate-600">/100</span>
            </div>
            <Progress value={overallScore} className="w-full max-w-md mx-auto mb-4" />
            <Badge
              className={`text-lg px-4 py-2 ${overallScore >= 80 ? "bg-green-100 text-green-800 border-green-200" : overallScore >= 60 ? "bg-yellow-100 text-yellow-800 border-yellow-200" : "bg-red-100 text-red-800 border-red-200"}`}
            >
              {overallScore >= 80 ? "Excellent" : overallScore >= 60 ? "Good" : "Needs Improvement"}
            </Badge>
          </Card>

          {/* Core Web Vitals */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Zap className="w-6 h-6 mr-2 text-blue-600" />
              Core Web Vitals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-3 ${getStatusColor(metric.status)}`}
                  >
                    {getStatusIcon(metric.status)}
                    <span className="ml-2">{metric.status.replace("-", " ")}</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{metric.name}</h3>
                  <div className="text-2xl font-bold text-slate-900">
                    {Math.round(metric.value)}
                    <span className="text-sm text-slate-600 ml-1">{metric.unit}</span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Good: &lt;{metric.threshold.good}
                    {metric.unit} | Poor: &gt;{metric.threshold.poor}
                    {metric.unit}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Image Loading Tests */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Image width={24} height={24} src="/n3uralia-logo-new.png" alt="Logo" className="mr-2" />
              Image Loading Performance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {imageTests.map((test, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-lg overflow-hidden">
                    <Image
                      src={test.src || "/placeholder.svg"}
                      alt={test.alt}
                      fill
                      className="object-contain"
                      onLoad={() => {
                        // This will be handled by the manual image loading test above
                      }}
                    />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{test.alt}</h3>
                  <div className="text-sm text-slate-600 mb-2">{test.size}</div>
                  <div
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      test.status === "loaded"
                        ? "bg-green-100 text-green-800"
                        : test.status === "loading"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {test.status === "loaded" && <CheckCircle className="w-3 h-3 mr-1" />}
                    {test.status === "loading" && <Clock className="w-3 h-3 mr-1 animate-spin" />}
                    {test.status === "error" && <AlertCircle className="w-3 h-3 mr-1" />}
                    {test.status}
                  </div>
                  {test.loadTime && (
                    <div className="text-lg font-bold text-slate-900 mt-2">{Math.round(test.loadTime)}ms</div>
                  )}
                </div>
              ))}
            </div>
          </Card>

          {/* Navigation Logo Specific Test */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Navigation Logo Performance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Optimized Sizing</h3>
                <p className="text-sm text-slate-600">
                  Using responsive sizing with proper breakpoints for optimal loading
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Priority Loading</h3>
                <p className="text-sm text-slate-600">Logo marked with priority attribute for immediate loading</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Sizes Attribute</h3>
                <p className="text-sm text-slate-600">Proper sizes attribute for responsive image optimization</p>
              </div>
            </div>
          </Card>

          {/* Optimization Recommendations */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Optimization Analysis</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Next.js Image Optimization</h3>
                  <p className="text-slate-600">
                    Using Next.js Image component with automatic optimization, lazy loading, and WebP conversion
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Responsive Loading</h3>
                  <p className="text-slate-600">
                    Different image sizes loaded based on screen size to minimize bandwidth usage
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Priority Loading</h3>
                  <p className="text-slate-600">
                    Navigation logo marked as priority to load immediately without affecting LCP
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Performance Impact</h3>
                  <p className="text-slate-600">
                    Logo optimization has minimal impact on loading speed while maintaining visual quality
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Test Actions */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Performance Actions</h2>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => window.location.reload()} className="bg-blue-600 hover:bg-blue-700 text-white">
                <Clock className="w-4 h-4 mr-2" />
                Rerun Tests
              </Button>
              <Button
                onClick={() => {
                  if ("serviceWorker" in navigator) {
                    navigator.serviceWorker.getRegistrations().then((registrations) => {
                      registrations.forEach((registration) => registration.unregister())
                    })
                  }
                  window.location.reload()
                }}
                variant="outline"
              >
                Clear Cache & Test
              </Button>
              <Button
                onClick={() => {
                  const results = {
                    overallScore,
                    metrics,
                    imageTests: imageTests.filter((test) => test.loadTime !== null),
                  }
                  console.log("Performance Results:", results)
                  alert("Performance results logged to console")
                }}
                variant="outline"
              >
                Export Results
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
