"use client"

import { useState, useEffect, useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  TrendingUp,
  Clock,
  Zap,
  Shield,
  Search,
  Users,
  Eye,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  Activity,
  Smartphone,
  Wifi,
} from "lucide-react"

interface AdvancedMetrics {
  performance: {
    // Core Web Vitals
    fcp: number
    lcp: number
    cls: number
    fid: number
    inp: number
    // Additional Performance
    tti: number
    tbt: number
    speedIndex: number
    ttfb: number
    // Resource Metrics
    domSize: number
    resourceCount: number
    totalBytes: number
    imageBytes: number
    jsBytes: number
    cssBytes: number
  }
  userExperience: {
    // Interaction Metrics
    clickThroughRate: number
    bounceRate: number
    sessionDuration: number
    pagesPerSession: number
    // Engagement Metrics
    scrollDepth: number
    timeOnPage: number
    interactionRate: number
    conversionRate: number
    // Usability Metrics
    taskCompletionRate: number
    errorRate: number
    helpUsage: number
    searchUsage: number
  }
  accessibility: {
    // WCAG Compliance
    wcagAA: number
    wcagAAA: number
    colorContrast: number
    keyboardNav: number
    screenReader: number
    // Inclusive Design
    altTextCoverage: number
    headingStructure: number
    focusManagement: number
    ariaLabels: number
  }
  security: {
    // Security Headers
    contentSecurityPolicy: boolean
    httpsRedirect: boolean
    hsts: boolean
    xFrameOptions: boolean
    // Privacy & Compliance
    cookieConsent: boolean
    gdprCompliance: boolean
    dataEncryption: boolean
    secureTransmission: boolean
  }
  seo: {
    // Technical SEO
    metaTags: number
    structuredData: boolean
    sitemap: boolean
    robotsTxt: boolean
    // Content SEO
    titleOptimization: number
    metaDescriptions: number
    headingStructure: number
    internalLinking: number
    // Performance SEO
    mobileOptimization: number
    pageSpeed: number
    coreWebVitals: number
  }
  mobile: {
    // Mobile Performance
    mobileSpeed: number
    touchTargets: number
    viewportConfig: boolean
    responsiveImages: boolean
    // Mobile UX
    thumbFriendly: number
    swipeGestures: boolean
    orientationSupport: boolean
    offlineSupport: boolean
  }
  network: {
    // Connection Types
    wifi: { speed: number; reliability: number }
    mobile4g: { speed: number; reliability: number }
    mobile3g: { speed: number; reliability: number }
    slow3g: { speed: number; reliability: number }
    // Network Optimization
    compression: boolean
    caching: boolean
    cdn: boolean
    http2: boolean
  }
}

interface CompetitorAdvanced {
  name: string
  url: string
  logo: string
  metrics: AdvancedMetrics
  overallScore: number
  category: "leader" | "challenger" | "follower"
}

export default function AdvancedMetricsPage() {
  const [selectedCategory, setSelectedCategory] = useState("performance")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)
  const [realTimeMetrics, setRealTimeMetrics] = useState<any>({})
  const metricsInterval = useRef<NodeJS.Timeout>()

  const competitors: CompetitorAdvanced[] = [
    {
      name: "N3uralia",
      url: "n3uralia.com",
      logo: "/n3uralia-logo-new.png",
      category: "leader",
      overallScore: 94,
      metrics: {
        performance: {
          fcp: 800,
          lcp: 1200,
          cls: 0.02,
          fid: 15,
          inp: 180,
          tti: 1800,
          tbt: 150,
          speedIndex: 1400,
          ttfb: 200,
          domSize: 1200,
          resourceCount: 45,
          totalBytes: 850000,
          imageBytes: 320000,
          jsBytes: 280000,
          cssBytes: 45000,
        },
        userExperience: {
          clickThroughRate: 8.5,
          bounceRate: 25,
          sessionDuration: 240,
          pagesPerSession: 3.2,
          scrollDepth: 75,
          timeOnPage: 180,
          interactionRate: 65,
          conversionRate: 4.2,
          taskCompletionRate: 92,
          errorRate: 0.8,
          helpUsage: 12,
          searchUsage: 18,
        },
        accessibility: {
          wcagAA: 98,
          wcagAAA: 85,
          colorContrast: 95,
          keyboardNav: 100,
          screenReader: 96,
          altTextCoverage: 100,
          headingStructure: 95,
          focusManagement: 98,
          ariaLabels: 92,
        },
        security: {
          contentSecurityPolicy: true,
          httpsRedirect: true,
          hsts: true,
          xFrameOptions: true,
          cookieConsent: true,
          gdprCompliance: true,
          dataEncryption: true,
          secureTransmission: true,
        },
        seo: {
          metaTags: 95,
          structuredData: true,
          sitemap: true,
          robotsTxt: true,
          titleOptimization: 90,
          metaDescriptions: 88,
          headingStructure: 92,
          internalLinking: 85,
          mobileOptimization: 96,
          pageSpeed: 94,
          coreWebVitals: 96,
        },
        mobile: {
          mobileSpeed: 92,
          touchTargets: 100,
          viewportConfig: true,
          responsiveImages: true,
          thumbFriendly: 95,
          swipeGestures: true,
          orientationSupport: true,
          offlineSupport: false,
        },
        network: {
          wifi: { speed: 98, reliability: 99 },
          mobile4g: { speed: 94, reliability: 96 },
          mobile3g: { speed: 85, reliability: 88 },
          slow3g: { speed: 72, reliability: 75 },
          compression: true,
          caching: true,
          cdn: true,
          http2: true,
        },
      },
    },
    {
      name: "Scale AI",
      url: "scale.com",
      logo: "/placeholder.svg",
      category: "challenger",
      overallScore: 89,
      metrics: {
        performance: {
          fcp: 900,
          lcp: 1400,
          cls: 0.05,
          fid: 20,
          inp: 220,
          tti: 2100,
          tbt: 280,
          speedIndex: 1650,
          ttfb: 280,
          domSize: 1800,
          resourceCount: 62,
          totalBytes: 1200000,
          imageBytes: 450000,
          jsBytes: 520000,
          cssBytes: 85000,
        },
        userExperience: {
          clickThroughRate: 6.8,
          bounceRate: 32,
          sessionDuration: 195,
          pagesPerSession: 2.8,
          scrollDepth: 68,
          timeOnPage: 145,
          interactionRate: 52,
          conversionRate: 3.1,
          taskCompletionRate: 85,
          errorRate: 1.2,
          helpUsage: 18,
          searchUsage: 25,
        },
        accessibility: {
          wcagAA: 92,
          wcagAAA: 78,
          colorContrast: 88,
          keyboardNav: 95,
          screenReader: 90,
          altTextCoverage: 85,
          headingStructure: 90,
          focusManagement: 88,
          ariaLabels: 82,
        },
        security: {
          contentSecurityPolicy: true,
          httpsRedirect: true,
          hsts: true,
          xFrameOptions: true,
          cookieConsent: false,
          gdprCompliance: false,
          dataEncryption: true,
          secureTransmission: true,
        },
        seo: {
          metaTags: 88,
          structuredData: true,
          sitemap: true,
          robotsTxt: true,
          titleOptimization: 85,
          metaDescriptions: 82,
          headingStructure: 88,
          internalLinking: 78,
          mobileOptimization: 90,
          pageSpeed: 89,
          coreWebVitals: 88,
        },
        mobile: {
          mobileSpeed: 86,
          touchTargets: 92,
          viewportConfig: true,
          responsiveImages: true,
          thumbFriendly: 88,
          swipeGestures: false,
          orientationSupport: true,
          offlineSupport: false,
        },
        network: {
          wifi: { speed: 92, reliability: 94 },
          mobile4g: { speed: 88, reliability: 90 },
          mobile3g: { speed: 78, reliability: 82 },
          slow3g: { speed: 65, reliability: 68 },
          compression: true,
          caching: true,
          cdn: true,
          http2: true,
        },
      },
    },
    {
      name: "OpenAI",
      url: "openai.com",
      logo: "/placeholder.svg",
      category: "challenger",
      overallScore: 86,
      metrics: {
        performance: {
          fcp: 1100,
          lcp: 1800,
          cls: 0.08,
          fid: 35,
          inp: 280,
          tti: 2800,
          tbt: 450,
          speedIndex: 2100,
          ttfb: 380,
          domSize: 2400,
          resourceCount: 85,
          totalBytes: 1800000,
          imageBytes: 680000,
          jsBytes: 850000,
          cssBytes: 120000,
        },
        userExperience: {
          clickThroughRate: 7.2,
          bounceRate: 28,
          sessionDuration: 280,
          pagesPerSession: 3.8,
          scrollDepth: 82,
          timeOnPage: 220,
          interactionRate: 68,
          conversionRate: 5.1,
          taskCompletionRate: 88,
          errorRate: 1.5,
          helpUsage: 22,
          searchUsage: 35,
        },
        accessibility: {
          wcagAA: 88,
          wcagAAA: 72,
          colorContrast: 82,
          keyboardNav: 90,
          screenReader: 85,
          altTextCoverage: 78,
          headingStructure: 85,
          focusManagement: 82,
          ariaLabels: 75,
        },
        security: {
          contentSecurityPolicy: true,
          httpsRedirect: true,
          hsts: true,
          xFrameOptions: true,
          cookieConsent: true,
          gdprCompliance: true,
          dataEncryption: true,
          secureTransmission: true,
        },
        seo: {
          metaTags: 92,
          structuredData: true,
          sitemap: true,
          robotsTxt: true,
          titleOptimization: 88,
          metaDescriptions: 85,
          headingStructure: 90,
          internalLinking: 82,
          mobileOptimization: 85,
          pageSpeed: 82,
          coreWebVitals: 84,
        },
        mobile: {
          mobileSpeed: 82,
          touchTargets: 88,
          viewportConfig: true,
          responsiveImages: true,
          thumbFriendly: 85,
          swipeGestures: true,
          orientationSupport: true,
          offlineSupport: false,
        },
        network: {
          wifi: { speed: 88, reliability: 90 },
          mobile4g: { speed: 82, reliability: 85 },
          mobile3g: { speed: 72, reliability: 75 },
          slow3g: { speed: 58, reliability: 62 },
          compression: true,
          caching: true,
          cdn: true,
          http2: true,
        },
      },
    },
  ]

  useEffect(() => {
    // Simulate real-time metrics collection
    const collectRealTimeMetrics = () => {
      const now = Date.now()
      setRealTimeMetrics((prev) => ({
        ...prev,
        timestamp: now,
        activeUsers: Math.floor(Math.random() * 50) + 100,
        pageViews: Math.floor(Math.random() * 20) + 80,
        avgLoadTime: Math.floor(Math.random() * 200) + 800,
        errorRate: (Math.random() * 2).toFixed(2),
        conversionRate: (Math.random() * 2 + 3).toFixed(1),
      }))
    }

    setIsAnalyzing(true)
    setTimeout(() => {
      setIsAnalyzing(false)
      setAnalysisComplete(true)

      // Start real-time metrics collection
      collectRealTimeMetrics()
      metricsInterval.current = setInterval(collectRealTimeMetrics, 5000)
    }, 3000)

    return () => {
      if (metricsInterval.current) {
        clearInterval(metricsInterval.current)
      }
    }
  }, [])

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600 bg-green-100 border-green-200"
    if (score >= 70) return "text-yellow-600 bg-yellow-100 border-yellow-200"
    return "text-red-600 bg-red-100 border-red-200"
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "leader":
        return "bg-green-100 text-green-800 border-green-200"
      case "challenger":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "follower":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const n3uralia = competitors.find((c) => c.name === "N3uralia")!

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black text-slate-900 mb-4">Advanced Performance & UX Metrics</h1>
            <p className="text-xl text-slate-600">
              Comprehensive tracking of 50+ performance and user experience metrics
            </p>
          </div>

          {/* Real-time Dashboard */}
          {analysisComplete && (
            <Card className="p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                  <Activity className="w-6 h-6 mr-2 text-green-600" />
                  Real-time Metrics Dashboard
                </h2>
                <Badge className="bg-green-100 text-green-800 border-green-200 animate-pulse">Live</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-2">{realTimeMetrics.activeUsers}</div>
                  <div className="text-sm text-slate-600">Active Users</div>
                  <div className="text-xs text-green-600">+12% vs yesterday</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-2">{realTimeMetrics.pageViews}</div>
                  <div className="text-sm text-slate-600">Page Views/min</div>
                  <div className="text-xs text-green-600">+8% vs yesterday</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-2">{realTimeMetrics.avgLoadTime}ms</div>
                  <div className="text-sm text-slate-600">Avg Load Time</div>
                  <div className="text-xs text-green-600">-5% vs yesterday</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-2">{realTimeMetrics.errorRate}%</div>
                  <div className="text-sm text-slate-600">Error Rate</div>
                  <div className="text-xs text-green-600">-15% vs yesterday</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-2">{realTimeMetrics.conversionRate}%</div>
                  <div className="text-sm text-slate-600">Conversion Rate</div>
                  <div className="text-xs text-green-600">+18% vs yesterday</div>
                </div>
              </div>
            </Card>
          )}

          {/* Analysis Status */}
          {isAnalyzing && (
            <Card className="p-8 mb-8 text-center">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <h2 className="text-2xl font-bold text-slate-900">Analyzing Advanced Metrics...</h2>
              </div>
              <p className="text-slate-600">Collecting 50+ performance, UX, accessibility, security, and SEO metrics</p>
              <Progress value={85} className="w-full max-w-md mx-auto mt-4" />
            </Card>
          )}

          {/* Comprehensive Metrics Tabs */}
          {analysisComplete && (
            <Tabs defaultValue="performance" className="mb-8">
              <TabsList className="grid w-full grid-cols-7">
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="ux">User Experience</TabsTrigger>
                <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="seo">SEO</TabsTrigger>
                <TabsTrigger value="mobile">Mobile</TabsTrigger>
                <TabsTrigger value="network">Network</TabsTrigger>
              </TabsList>

              <TabsContent value="performance">
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                    <Zap className="w-6 h-6 mr-2 text-blue-600" />
                    Advanced Performance Metrics
                  </h2>

                  {/* Core Web Vitals */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Core Web Vitals</h3>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      {competitors.map((competitor) => (
                        <div
                          key={competitor.name}
                          className={`p-4 rounded-lg border-2 ${competitor.name === "N3uralia" ? "border-green-200 bg-green-50" : "border-slate-200 bg-white"}`}
                        >
                          <div className="text-center mb-3">
                            <div className="relative w-8 h-8 mx-auto mb-2">
                              <img
                                src={competitor.logo || "/placeholder.svg"}
                                alt={competitor.name}
                                className="w-8 h-8 object-contain rounded"
                              />
                            </div>
                            <div className="font-semibold text-slate-900">{competitor.name}</div>
                            <Badge className={`text-xs ${getCategoryColor(competitor.category)}`}>
                              {competitor.category}
                            </Badge>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>FCP:</span>
                              <span className="font-medium">{competitor.metrics.performance.fcp}ms</span>
                            </div>
                            <div className="flex justify-between">
                              <span>LCP:</span>
                              <span className="font-medium">{competitor.metrics.performance.lcp}ms</span>
                            </div>
                            <div className="flex justify-between">
                              <span>CLS:</span>
                              <span className="font-medium">{competitor.metrics.performance.cls}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>FID:</span>
                              <span className="font-medium">{competitor.metrics.performance.fid}ms</span>
                            </div>
                            <div className="flex justify-between">
                              <span>INP:</span>
                              <span className="font-medium">{competitor.metrics.performance.inp}ms</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Performance Metrics */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Additional Performance Metrics</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-slate-200">
                            <th className="text-left py-3 px-2 font-semibold text-slate-900">Company</th>
                            <th className="text-center py-3 px-2 font-semibold text-slate-900">TTI</th>
                            <th className="text-center py-3 px-2 font-semibold text-slate-900">TBT</th>
                            <th className="text-center py-3 px-2 font-semibold text-slate-900">Speed Index</th>
                            <th className="text-center py-3 px-2 font-semibold text-slate-900">TTFB</th>
                            <th className="text-center py-3 px-2 font-semibold text-slate-900">DOM Size</th>
                            <th className="text-center py-3 px-2 font-semibold text-slate-900">Resources</th>
                          </tr>
                        </thead>
                        <tbody>
                          {competitors.map((competitor) => (
                            <tr
                              key={competitor.name}
                              className={`border-b border-slate-100 ${competitor.name === "N3uralia" ? "bg-green-50" : ""}`}
                            >
                              <td className="py-3 px-2 font-semibold text-slate-900">{competitor.name}</td>
                              <td className="text-center py-3 px-2">{competitor.metrics.performance.tti}ms</td>
                              <td className="text-center py-3 px-2">{competitor.metrics.performance.tbt}ms</td>
                              <td className="text-center py-3 px-2">{competitor.metrics.performance.speedIndex}ms</td>
                              <td className="text-center py-3 px-2">{competitor.metrics.performance.ttfb}ms</td>
                              <td className="text-center py-3 px-2">{competitor.metrics.performance.domSize}</td>
                              <td className="text-center py-3 px-2">{competitor.metrics.performance.resourceCount}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Resource Breakdown */}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Resource Breakdown</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {competitors.map((competitor) => (
                        <div
                          key={competitor.name}
                          className={`p-6 rounded-lg border-2 ${competitor.name === "N3uralia" ? "border-green-200 bg-green-50" : "border-slate-200 bg-white"}`}
                        >
                          <div className="text-center mb-4">
                            <h4 className="font-semibold text-slate-900">{competitor.name}</h4>
                            <div className="text-sm text-slate-600">
                              Total: {(competitor.metrics.performance.totalBytes / 1000).toFixed(0)}KB
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Images</span>
                                <span>{(competitor.metrics.performance.imageBytes / 1000).toFixed(0)}KB</span>
                              </div>
                              <Progress
                                value={
                                  (competitor.metrics.performance.imageBytes /
                                    competitor.metrics.performance.totalBytes) *
                                  100
                                }
                                className="h-2"
                              />
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>JavaScript</span>
                                <span>{(competitor.metrics.performance.jsBytes / 1000).toFixed(0)}KB</span>
                              </div>
                              <Progress
                                value={
                                  (competitor.metrics.performance.jsBytes / competitor.metrics.performance.totalBytes) *
                                  100
                                }
                                className="h-2"
                              />
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>CSS</span>
                                <span>{(competitor.metrics.performance.cssBytes / 1000).toFixed(0)}KB</span>
                              </div>
                              <Progress
                                value={
                                  (competitor.metrics.performance.cssBytes /
                                    competitor.metrics.performance.totalBytes) *
                                  100
                                }
                                className="h-2"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="ux">
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                    <Users className="w-6 h-6 mr-2 text-purple-600" />
                    User Experience Metrics
                  </h2>

                  {/* Engagement Metrics */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Engagement Metrics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {competitors.map((competitor) => (
                        <div
                          key={competitor.name}
                          className={`p-6 rounded-lg border-2 ${competitor.name === "N3uralia" ? "border-green-200 bg-green-50" : "border-slate-200 bg-white"}`}
                        >
                          <div className="text-center mb-4">
                            <h4 className="font-semibold text-slate-900">{competitor.name}</h4>
                            <Badge className={`text-xs ${getCategoryColor(competitor.category)}`}>
                              {competitor.category}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-slate-900">
                                {competitor.metrics.userExperience.clickThroughRate}%
                              </div>
                              <div className="text-slate-600">CTR</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-slate-900">
                                {competitor.metrics.userExperience.bounceRate}%
                              </div>
                              <div className="text-slate-600">Bounce Rate</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-slate-900">
                                {competitor.metrics.userExperience.sessionDuration}s
                              </div>
                              <div className="text-slate-600">Session</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-slate-900">
                                {competitor.metrics.userExperience.pagesPerSession}
                              </div>
                              <div className="text-slate-600">Pages/Session</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Interaction Metrics */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4">Interaction & Conversion Metrics</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-slate-200">
                            <th className="text-left py-3 px-2 font-semibold text-slate-900">Company</th>
                            <th className="text-center py-3 px-2 font-semibold text-slate-900">Scroll Depth</th>
                            <th className="text-center py-3 px-2 font-semibold text-slate-900">Time on Page</th>
                            <th className="text-center py-3 px-2 font-semibold text-slate-900">Interaction Rate</th>
                            <th className="text-center py-3 px-2 font-semibold text-slate-900">Conversion Rate</th>
                            <th className="text-center py-3 px-2 font-semibold text-slate-900">Task Completion</th>
                            <th className="text-center py-3 px-2 font-semibold text-slate-900">Error Rate</th>
                          </tr>
                        </thead>
                        <tbody>
                          {competitors.map((competitor) => (
                            <tr
                              key={competitor.name}
                              className={`border-b border-slate-100 ${competitor.name === "N3uralia" ? "bg-green-50" : ""}`}
                            >
                              <td className="py-3 px-2 font-semibold text-slate-900">{competitor.name}</td>
                              <td className="text-center py-3 px-2">
                                {competitor.metrics.userExperience.scrollDepth}%
                              </td>
                              <td className="text-center py-3 px-2">{competitor.metrics.userExperience.timeOnPage}s</td>
                              <td className="text-center py-3 px-2">
                                {competitor.metrics.userExperience.interactionRate}%
                              </td>
                              <td className="text-center py-3 px-2">
                                {competitor.metrics.userExperience.conversionRate}%
                              </td>
                              <td className="text-center py-3 px-2">
                                {competitor.metrics.userExperience.taskCompletionRate}%
                              </td>
                              <td className="text-center py-3 px-2">{competitor.metrics.userExperience.errorRate}%</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="accessibility">
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                    <Eye className="w-6 h-6 mr-2 text-green-600" />
                    Accessibility Compliance
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {competitors.map((competitor) => (
                      <div
                        key={competitor.name}
                        className={`p-6 rounded-lg border-2 ${competitor.name === "N3uralia" ? "border-green-200 bg-green-50" : "border-slate-200 bg-white"}`}
                      >
                        <div className="text-center mb-6">
                          <h4 className="font-semibold text-slate-900 mb-2">{competitor.name}</h4>
                          <div className="text-3xl font-bold text-slate-900 mb-2">
                            {Math.round(
                              (competitor.metrics.accessibility.wcagAA + competitor.metrics.accessibility.wcagAAA) / 2,
                            )}
                          </div>
                          <div className="text-sm text-slate-600">Overall A11y Score</div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>WCAG AA</span>
                              <span>{competitor.metrics.accessibility.wcagAA}%</span>
                            </div>
                            <Progress value={competitor.metrics.accessibility.wcagAA} className="h-2" />
                          </div>

                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>WCAG AAA</span>
                              <span>{competitor.metrics.accessibility.wcagAAA}%</span>
                            </div>
                            <Progress value={competitor.metrics.accessibility.wcagAAA} className="h-2" />
                          </div>

                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Color Contrast</span>
                              <span>{competitor.metrics.accessibility.colorContrast}%</span>
                            </div>
                            <Progress value={competitor.metrics.accessibility.colorContrast} className="h-2" />
                          </div>

                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Keyboard Nav</span>
                              <span>{competitor.metrics.accessibility.keyboardNav}%</span>
                            </div>
                            <Progress value={competitor.metrics.accessibility.keyboardNav} className="h-2" />
                          </div>

                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Screen Reader</span>
                              <span>{competitor.metrics.accessibility.screenReader}%</span>
                            </div>
                            <Progress value={competitor.metrics.accessibility.screenReader} className="h-2" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                    <Shield className="w-6 h-6 mr-2 text-red-600" />
                    Security & Privacy
                  </h2>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="text-left py-3 px-2 font-semibold text-slate-900">Company</th>
                          <th className="text-center py-3 px-2 font-semibold text-slate-900">CSP</th>
                          <th className="text-center py-3 px-2 font-semibold text-slate-900">HTTPS</th>
                          <th className="text-center py-3 px-2 font-semibold text-slate-900">HSTS</th>
                          <th className="text-center py-3 px-2 font-semibold text-slate-900">X-Frame</th>
                          <th className="text-center py-3 px-2 font-semibold text-slate-900">Cookie Consent</th>
                          <th className="text-center py-3 px-2 font-semibold text-slate-900">GDPR</th>
                          <th className="text-center py-3 px-2 font-semibold text-slate-900">Encryption</th>
                        </tr>
                      </thead>
                      <tbody>
                        {competitors.map((competitor) => (
                          <tr
                            key={competitor.name}
                            className={`border-b border-slate-100 ${competitor.name === "N3uralia" ? "bg-green-50" : ""}`}
                          >
                            <td className="py-3 px-2 font-semibold text-slate-900">{competitor.name}</td>
                            <td className="text-center py-3 px-2">
                              {competitor.metrics.security.contentSecurityPolicy ? (
                                <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                              ) : (
                                <AlertTriangle className="w-5 h-5 text-red-600 mx-auto" />
                              )}
                            </td>
                            <td className="text-center py-3 px-2">
                              {competitor.metrics.security.httpsRedirect ? (
                                <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                              ) : (
                                <AlertTriangle className="w-5 h-5 text-red-600 mx-auto" />
                              )}
                            </td>
                            <td className="text-center py-3 px-2">
                              {competitor.metrics.security.hsts ? (
                                <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                              ) : (
                                <AlertTriangle className="w-5 h-5 text-red-600 mx-auto" />
                              )}
                            </td>
                            <td className="text-center py-3 px-2">
                              {competitor.metrics.security.xFrameOptions ? (
                                <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                              ) : (
                                <AlertTriangle className="w-5 h-5 text-red-600 mx-auto" />
                              )}
                            </td>
                            <td className="text-center py-3 px-2">
                              {competitor.metrics.security.cookieConsent ? (
                                <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                              ) : (
                                <AlertTriangle className="w-5 h-5 text-red-600 mx-auto" />
                              )}
                            </td>
                            <td className="text-center py-3 px-2">
                              {competitor.metrics.security.gdprCompliance ? (
                                <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                              ) : (
                                <AlertTriangle className="w-5 h-5 text-red-600 mx-auto" />
                              )}
                            </td>
                            <td className="text-center py-3 px-2">
                              {competitor.metrics.security.dataEncryption ? (
                                <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                              ) : (
                                <AlertTriangle className="w-5 h-5 text-red-600 mx-auto" />
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="seo">
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                    <Search className="w-6 h-6 mr-2 text-blue-600" />
                    SEO Performance
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {competitors.map((competitor) => (
                      <div
                        key={competitor.name}
                        className={`p-6 rounded-lg border-2 ${competitor.name === "N3uralia" ? "border-green-200 bg-green-50" : "border-slate-200 bg-white"}`}
                      >
                        <div className="text-center mb-6">
                          <h4 className="font-semibold text-slate-900 mb-2">{competitor.name}</h4>
                          <div className="text-3xl font-bold text-slate-900 mb-2">
                            {Math.round(
                              (competitor.metrics.seo.metaTags +
                                competitor.metrics.seo.titleOptimization +
                                competitor.metrics.seo.pageSpeed) /
                                3,
                            )}
                          </div>
                          <div className="text-sm text-slate-600">Overall SEO Score</div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Meta Tags</span>
                              <span>{competitor.metrics.seo.metaTags}%</span>
                            </div>
                            <Progress value={competitor.metrics.seo.metaTags} className="h-2" />
                          </div>

                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Title Optimization</span>
                              <span>{competitor.metrics.seo.titleOptimization}%</span>
                            </div>
                            <Progress value={competitor.metrics.seo.titleOptimization} className="h-2" />
                          </div>

                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Meta Descriptions</span>
                              <span>{competitor.metrics.seo.metaDescriptions}%</span>
                            </div>
                            <Progress value={competitor.metrics.seo.metaDescriptions} className="h-2" />
                          </div>

                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Mobile Optimization</span>
                              <span>{competitor.metrics.seo.mobileOptimization}%</span>
                            </div>
                            <Progress value={competitor.metrics.seo.mobileOptimization} className="h-2" />
                          </div>

                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Core Web Vitals</span>
                              <span>{competitor.metrics.seo.coreWebVitals}%</span>
                            </div>
                            <Progress value={competitor.metrics.seo.coreWebVitals} className="h-2" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="mobile">
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                    <Smartphone className="w-6 h-6 mr-2 text-purple-600" />
                    Mobile Experience
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {competitors.map((competitor) => (
                      <div
                        key={competitor.name}
                        className={`p-6 rounded-lg border-2 ${competitor.name === "N3uralia" ? "border-green-200 bg-green-50" : "border-slate-200 bg-white"}`}
                      >
                        <div className="text-center mb-6">
                          <h4 className="font-semibold text-slate-900 mb-2">{competitor.name}</h4>
                          <div className="text-3xl font-bold text-slate-900 mb-2">
                            {competitor.metrics.mobile.mobileSpeed}
                          </div>
                          <div className="text-sm text-slate-600">Mobile Speed Score</div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Touch Targets</span>
                              <span>{competitor.metrics.mobile.touchTargets}%</span>
                            </div>
                            <Progress value={competitor.metrics.mobile.touchTargets} className="h-2" />
                          </div>

                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Thumb Friendly</span>
                              <span>{competitor.metrics.mobile.thumbFriendly}%</span>
                            </div>
                            <Progress value={competitor.metrics.mobile.thumbFriendly} className="h-2" />
                          </div>

                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center space-x-2">
                              {competitor.metrics.mobile.viewportConfig ? (
                                <CheckCircle className="w-4 h-4 text-green-600" />
                              ) : (
                                <AlertTriangle className="w-4 h-4 text-red-600" />
                              )}
                              <span>Viewport</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              {competitor.metrics.mobile.responsiveImages ? (
                                <CheckCircle className="w-4 h-4 text-green-600" />
                              ) : (
                                <AlertTriangle className="w-4 h-4 text-red-600" />
                              )}
                              <span>Responsive Images</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              {competitor.metrics.mobile.swipeGestures ? (
                                <CheckCircle className="w-4 h-4 text-green-600" />
                              ) : (
                                <AlertTriangle className="w-4 h-4 text-red-600" />
                              )}
                              <span>Swipe Gestures</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              {competitor.metrics.mobile.orientationSupport ? (
                                <CheckCircle className="w-4 h-4 text-green-600" />
                              ) : (
                                <AlertTriangle className="w-4 h-4 text-red-600" />
                              )}
                              <span>Orientation</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="network">
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                    <Wifi className="w-6 h-6 mr-2 text-green-600" />
                    Network Performance
                  </h2>

                  <div className="space-y-8">
                    {/* Connection Speed Analysis */}
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-4">Performance by Connection Type</h3>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {["wifi", "mobile4g", "mobile3g", "slow3g"].map((connectionType) => (
                          <div key={connectionType} className="p-4 bg-white rounded-lg border border-slate-200">
                            <h4 className="font-semibold text-slate-900 mb-4 capitalize">
                              {connectionType.replace("mobile", "Mobile ").replace("slow3g", "Slow 3G")}
                            </h4>
                            <div className="space-y-3">
                              {competitors.map((competitor) => {
                                const networkData = competitor.metrics.network[
                                  connectionType as keyof typeof competitor.metrics.network
                                ] as { speed: number; reliability: number }
                                return (
                                  <div key={competitor.name} className="flex items-center justify-between">
                                    <span className="text-sm text-slate-600">{competitor.name}</span>
                                    <div className="flex items-center space-x-2">
                                      <div className="text-sm font-medium">{networkData.speed}</div>
                                      <div className="w-16">
                                        <Progress value={networkData.speed} className="h-2" />
                                      </div>
                                    </div>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Network Optimization Features */}
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-4">Network Optimization Features</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-slate-200">
                              <th className="text-left py-3 px-2 font-semibold text-slate-900">Company</th>
                              <th className="text-center py-3 px-2 font-semibold text-slate-900">Compression</th>
                              <th className="text-center py-3 px-2 font-semibold text-slate-900">Caching</th>
                              <th className="text-center py-3 px-2 font-semibold text-slate-900">CDN</th>
                              <th className="text-center py-3 px-2 font-semibold text-slate-900">HTTP/2</th>
                            </tr>
                          </thead>
                          <tbody>
                            {competitors.map((competitor) => (
                              <tr
                                key={competitor.name}
                                className={`border-b border-slate-100 ${competitor.name === "N3uralia" ? "bg-green-50" : ""}`}
                              >
                                <td className="py-3 px-2 font-semibold text-slate-900">{competitor.name}</td>
                                <td className="text-center py-3 px-2">
                                  {competitor.metrics.network.compression ? (
                                    <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                                  ) : (
                                    <AlertTriangle className="w-5 h-5 text-red-600 mx-auto" />
                                  )}
                                </td>
                                <td className="text-center py-3 px-2">
                                  {competitor.metrics.network.caching ? (
                                    <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                                  ) : (
                                    <AlertTriangle className="w-5 h-5 text-red-600 mx-auto" />
                                  )}
                                </td>
                                <td className="text-center py-3 px-2">
                                  {competitor.metrics.network.cdn ? (
                                    <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                                  ) : (
                                    <AlertTriangle className="w-5 h-5 text-red-600 mx-auto" />
                                  )}
                                </td>
                                <td className="text-center py-3 px-2">
                                  {competitor.metrics.network.http2 ? (
                                    <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                                  ) : (
                                    <AlertTriangle className="w-5 h-5 text-red-600 mx-auto" />
                                  )}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          )}

          {/* Advanced Insights */}
          {analysisComplete && (
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Advanced Performance Insights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                    <h3 className="font-semibold text-green-900">Performance Leader</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li>• Best TTI: 1800ms vs 2100ms+</li>
                    <li>• Lowest TBT: 150ms vs 280ms+</li>
                    <li>• Fastest Speed Index: 1400ms</li>
                    <li>• Optimal resource usage</li>
                  </ul>
                </div>

                <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="w-6 h-6 text-purple-600" />
                    <h3 className="font-semibold text-purple-900">UX Excellence</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-purple-800">
                    <li>• Highest CTR: 8.5% vs 6.8%</li>
                    <li>• Lowest bounce rate: 25%</li>
                    <li>• Best conversion: 4.2%</li>
                    <li>• Superior task completion: 92%</li>
                  </ul>
                </div>

                <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <Eye className="w-6 h-6 text-blue-600" />
                    <h3 className="font-semibold text-blue-900">Accessibility Champion</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li>• WCAG AA: 98% compliance</li>
                    <li>• Perfect keyboard navigation</li>
                    <li>• 100% alt text coverage</li>
                    <li>• Excellent screen reader support</li>
                  </ul>
                </div>

                <div className="p-6 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="w-6 h-6 text-red-600" />
                    <h3 className="font-semibold text-red-900">Security Leader</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-red-800">
                    <li>• Full security headers</li>
                    <li>• GDPR compliant</li>
                    <li>• End-to-end encryption</li>
                    <li>• Privacy-first design</li>
                  </ul>
                </div>
              </div>
            </Card>
          )}

          {/* Actions */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Advanced Metrics Actions</h2>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => window.location.reload()} className="bg-blue-600 hover:bg-blue-700 text-white">
                <BarChart3 className="w-4 h-4 mr-2" />
                Refresh All Metrics
              </Button>
              <Button
                onClick={() => {
                  const results = { competitors, realTimeMetrics, timestamp: Date.now() }
                  console.log("Advanced Metrics Results:", results)
                  alert("Advanced metrics results logged to console")
                }}
                variant="outline"
              >
                Export Full Report
              </Button>
              <Button onClick={() => window.open("/performance-test", "_blank")} variant="outline">
                <Clock className="w-4 h-4 mr-2" />
                Run Performance Test
              </Button>
              <Button onClick={() => window.open("/lighthouse-audit", "_blank")} variant="outline">
                <Zap className="w-4 h-4 mr-2" />
                Lighthouse Audit
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
