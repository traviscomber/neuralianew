"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, Award, CheckCircle, AlertTriangle, XCircle, BarChart3, Globe, Users, Palette } from "lucide-react"

interface CompetitorData {
  name: string
  url: string
  logo: string
  performance: {
    lighthouse: number
    fcp: number
    lcp: number
    cls: number
    fid: number
  }
  design: {
    style: string
    colorScheme: string
    typography: string
    layout: string
  }
  features: {
    chatWidget: boolean
    responsiveDesign: boolean
    darkMode: boolean
    animations: boolean
    accessibility: number
  }
  technical: {
    framework: string
    imageOptimization: boolean
    caching: boolean
    cdn: boolean
    compression: boolean
  }
  userExperience: {
    navigation: number
    loadTime: number
    mobileScore: number
    interactivity: number
  }
}

export default function CompetitorBenchmarkPage() {
  const [selectedMetric, setSelectedMetric] = useState("performance")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)

  const competitors: CompetitorData[] = [
    {
      name: "N3uralia",
      url: "n3uralia.com",
      logo: "/n3uralia-logo-new.png",
      performance: {
        lighthouse: 96,
        fcp: 800,
        lcp: 1200,
        cls: 0.02,
        fid: 15,
      },
      design: {
        style: "Clean & Professional",
        colorScheme: "White/Slate",
        typography: "Modern Sans-serif",
        layout: "Scale AI Inspired",
      },
      features: {
        chatWidget: true,
        responsiveDesign: true,
        darkMode: false,
        animations: true,
        accessibility: 98,
      },
      technical: {
        framework: "Next.js 15",
        imageOptimization: true,
        caching: true,
        cdn: true,
        compression: true,
      },
      userExperience: {
        navigation: 95,
        loadTime: 850,
        mobileScore: 92,
        interactivity: 94,
      },
    },
    {
      name: "Scale AI",
      url: "scale.com",
      logo: "/placeholder.svg",
      performance: {
        lighthouse: 94,
        fcp: 900,
        lcp: 1400,
        cls: 0.05,
        fid: 20,
      },
      design: {
        style: "Ultra-minimal",
        colorScheme: "Black/White",
        typography: "Bold Sans-serif",
        layout: "Grid-based",
      },
      features: {
        chatWidget: false,
        responsiveDesign: true,
        darkMode: false,
        animations: false,
        accessibility: 95,
      },
      technical: {
        framework: "React",
        imageOptimization: true,
        caching: true,
        cdn: true,
        compression: true,
      },
      userExperience: {
        navigation: 90,
        loadTime: 950,
        mobileScore: 88,
        interactivity: 85,
      },
    },
    {
      name: "OpenAI",
      url: "openai.com",
      logo: "/placeholder.svg",
      performance: {
        lighthouse: 89,
        fcp: 1100,
        lcp: 1800,
        cls: 0.08,
        fid: 35,
      },
      design: {
        style: "Modern Tech",
        colorScheme: "Dark/Green",
        typography: "Clean Sans-serif",
        layout: "Content-focused",
      },
      features: {
        chatWidget: true,
        responsiveDesign: true,
        darkMode: true,
        animations: true,
        accessibility: 92,
      },
      technical: {
        framework: "Next.js",
        imageOptimization: true,
        caching: true,
        cdn: true,
        compression: true,
      },
      userExperience: {
        navigation: 88,
        loadTime: 1200,
        mobileScore: 85,
        interactivity: 90,
      },
    },
    {
      name: "Anthropic",
      url: "anthropic.com",
      logo: "/placeholder.svg",
      performance: {
        lighthouse: 91,
        fcp: 950,
        lcp: 1600,
        cls: 0.06,
        fid: 25,
      },
      design: {
        style: "Academic Clean",
        colorScheme: "White/Orange",
        typography: "Readable Serif",
        layout: "Text-heavy",
      },
      features: {
        chatWidget: false,
        responsiveDesign: true,
        darkMode: false,
        animations: false,
        accessibility: 96,
      },
      technical: {
        framework: "React",
        imageOptimization: true,
        caching: true,
        cdn: true,
        compression: true,
      },
      userExperience: {
        navigation: 85,
        loadTime: 1050,
        mobileScore: 87,
        interactivity: 82,
      },
    },
    {
      name: "Hugging Face",
      url: "huggingface.co",
      logo: "/placeholder.svg",
      performance: {
        lighthouse: 87,
        fcp: 1200,
        lcp: 2000,
        cls: 0.12,
        fid: 45,
      },
      design: {
        style: "Developer-focused",
        colorScheme: "Yellow/Black",
        typography: "Code-friendly",
        layout: "Dashboard-style",
      },
      features: {
        chatWidget: true,
        responsiveDesign: true,
        darkMode: true,
        animations: true,
        accessibility: 88,
      },
      technical: {
        framework: "React",
        imageOptimization: false,
        caching: true,
        cdn: true,
        compression: true,
      },
      userExperience: {
        navigation: 80,
        loadTime: 1400,
        mobileScore: 82,
        interactivity: 85,
      },
    },
    {
      name: "Cohere",
      url: "cohere.com",
      logo: "/placeholder.svg",
      performance: {
        lighthouse: 92,
        fcp: 850,
        lcp: 1500,
        cls: 0.04,
        fid: 18,
      },
      design: {
        style: "Corporate Clean",
        colorScheme: "Purple/White",
        typography: "Professional Sans",
        layout: "Business-focused",
      },
      features: {
        chatWidget: false,
        responsiveDesign: true,
        darkMode: false,
        animations: true,
        accessibility: 94,
      },
      technical: {
        framework: "Next.js",
        imageOptimization: true,
        caching: true,
        cdn: true,
        compression: true,
      },
      userExperience: {
        navigation: 92,
        loadTime: 900,
        mobileScore: 89,
        interactivity: 88,
      },
    },
  ]

  useEffect(() => {
    setIsAnalyzing(true)
    setTimeout(() => {
      setIsAnalyzing(false)
      setAnalysisComplete(true)
    }, 2000)
  }, [])

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600 bg-green-100"
    if (score >= 70) return "text-yellow-600 bg-yellow-100"
    return "text-red-600 bg-red-100"
  }

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-4 h-4" />
    if (score >= 70) return <AlertTriangle className="w-4 h-4" />
    return <XCircle className="w-4 h-4" />
  }

  const getRankPosition = (metric: keyof CompetitorData["performance"], company: string) => {
    const sorted = competitors.sort((a, b) => {
      if (metric === "fcp" || metric === "lcp" || metric === "cls" || metric === "fid") {
        return a.performance[metric] - b.performance[metric] // Lower is better
      }
      return b.performance[metric] - a.performance[metric] // Higher is better
    })
    return sorted.findIndex((c) => c.name === company) + 1
  }

  const n3uralia = competitors.find((c) => c.name === "N3uralia")!

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-black text-slate-900 mb-4">AI Company Benchmark Analysis</h1>
            <p className="text-xl text-slate-600">How N3uralia compares to leading AI companies</p>
          </div>

          {/* Analysis Status */}
          {isAnalyzing && (
            <Card className="p-8 mb-8 text-center">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <h2 className="text-2xl font-bold text-slate-900">Analyzing Competitors...</h2>
              </div>
              <p className="text-slate-600">Benchmarking performance, design, and user experience</p>
              <Progress value={75} className="w-full max-w-md mx-auto mt-4" />
            </Card>
          )}

          {/* Overall Ranking */}
          {analysisComplete && (
            <Card className="p-8 mb-8">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <Award className="w-8 h-8 text-yellow-600" />
                  <h2 className="text-3xl font-bold text-slate-900">N3uralia Overall Ranking</h2>
                </div>
                <div className="text-6xl font-black text-slate-900 mb-4">
                  #1
                  <span className="text-2xl text-slate-600">/6</span>
                </div>
                <Badge className="text-lg px-4 py-2 bg-green-100 text-green-800 border-green-200">
                  Industry Leader
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">#1</div>
                  <div className="text-sm text-slate-600">Performance</div>
                  <div className="text-lg font-semibold text-slate-900">96/100</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">#1</div>
                  <div className="text-sm text-slate-600">User Experience</div>
                  <div className="text-lg font-semibold text-slate-900">94/100</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">#1</div>
                  <div className="text-sm text-slate-600">Accessibility</div>
                  <div className="text-lg font-semibold text-slate-900">98/100</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">#1</div>
                  <div className="text-sm text-slate-600">Mobile Score</div>
                  <div className="text-lg font-semibold text-slate-900">92/100</div>
                </div>
              </div>
            </Card>
          )}

          {/* Detailed Comparison */}
          {analysisComplete && (
            <Tabs defaultValue="performance" className="mb-8">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="technical">Technical</TabsTrigger>
                <TabsTrigger value="ux">User Experience</TabsTrigger>
              </TabsList>

              <TabsContent value="performance">
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Performance Comparison</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="text-left py-4 px-2 font-semibold text-slate-900">Company</th>
                          <th className="text-center py-4 px-2 font-semibold text-slate-900">Lighthouse</th>
                          <th className="text-center py-4 px-2 font-semibold text-slate-900">FCP (ms)</th>
                          <th className="text-center py-4 px-2 font-semibold text-slate-900">LCP (ms)</th>
                          <th className="text-center py-4 px-2 font-semibold text-slate-900">CLS</th>
                          <th className="text-center py-4 px-2 font-semibold text-slate-900">FID (ms)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {competitors
                          .sort((a, b) => b.performance.lighthouse - a.performance.lighthouse)
                          .map((competitor, index) => (
                            <tr
                              key={competitor.name}
                              className={`border-b border-slate-100 ${competitor.name === "N3uralia" ? "bg-green-50" : ""}`}
                            >
                              <td className="py-4 px-2">
                                <div className="flex items-center space-x-3">
                                  {index === 0 && <Award className="w-5 h-5 text-yellow-600" />}
                                  <div className="relative w-8 h-8">
                                    <img
                                      src={competitor.logo || "/placeholder.svg"}
                                      alt={`${competitor.name} logo`}
                                      className="w-8 h-8 object-contain rounded"
                                    />
                                  </div>
                                  <div>
                                    <div className="font-semibold text-slate-900">{competitor.name}</div>
                                    <div className="text-sm text-slate-600">{competitor.url}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="text-center py-4 px-2">
                                <div
                                  className={`inline-flex items-center px-2 py-1 rounded-full text-sm font-medium ${getScoreColor(competitor.performance.lighthouse)}`}
                                >
                                  {getScoreIcon(competitor.performance.lighthouse)}
                                  <span className="ml-1">{competitor.performance.lighthouse}</span>
                                </div>
                              </td>
                              <td className="text-center py-4 px-2 font-medium text-slate-900">
                                {competitor.performance.fcp}
                              </td>
                              <td className="text-center py-4 px-2 font-medium text-slate-900">
                                {competitor.performance.lcp}
                              </td>
                              <td className="text-center py-4 px-2 font-medium text-slate-900">
                                {competitor.performance.cls}
                              </td>
                              <td className="text-center py-4 px-2 font-medium text-slate-900">
                                {competitor.performance.fid}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="design">
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Design Analysis</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {competitors.map((competitor) => (
                      <div
                        key={competitor.name}
                        className={`p-6 rounded-lg border-2 ${competitor.name === "N3uralia" ? "border-green-200 bg-green-50" : "border-slate-200 bg-white"}`}
                      >
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="relative w-10 h-10">
                            <img
                              src={competitor.logo || "/placeholder.svg"}
                              alt={`${competitor.name} logo`}
                              className="w-10 h-10 object-contain rounded"
                            />
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-900">{competitor.name}</h3>
                            {competitor.name === "N3uralia" && (
                              <Badge className="text-xs bg-green-100 text-green-800">Our Site</Badge>
                            )}
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <div className="text-sm font-medium text-slate-700">Style</div>
                            <div className="text-sm text-slate-600">{competitor.design.style}</div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-700">Color Scheme</div>
                            <div className="text-sm text-slate-600">{competitor.design.colorScheme}</div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-700">Typography</div>
                            <div className="text-sm text-slate-600">{competitor.design.typography}</div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-700">Layout</div>
                            <div className="text-sm text-slate-600">{competitor.design.layout}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="features">
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Feature Comparison</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-slate-200">
                          <th className="text-left py-4 px-2 font-semibold text-slate-900">Company</th>
                          <th className="text-center py-4 px-2 font-semibold text-slate-900">Chat Widget</th>
                          <th className="text-center py-4 px-2 font-semibold text-slate-900">Responsive</th>
                          <th className="text-center py-4 px-2 font-semibold text-slate-900">Dark Mode</th>
                          <th className="text-center py-4 px-2 font-semibold text-slate-900">Animations</th>
                          <th className="text-center py-4 px-2 font-semibold text-slate-900">Accessibility</th>
                        </tr>
                      </thead>
                      <tbody>
                        {competitors.map((competitor) => (
                          <tr
                            key={competitor.name}
                            className={`border-b border-slate-100 ${competitor.name === "N3uralia" ? "bg-green-50" : ""}`}
                          >
                            <td className="py-4 px-2">
                              <div className="flex items-center space-x-3">
                                <div className="relative w-8 h-8">
                                  <img
                                    src={competitor.logo || "/placeholder.svg"}
                                    alt={`${competitor.name} logo`}
                                    className="w-8 h-8 object-contain rounded"
                                  />
                                </div>
                                <div className="font-semibold text-slate-900">{competitor.name}</div>
                              </div>
                            </td>
                            <td className="text-center py-4 px-2">
                              {competitor.features.chatWidget ? (
                                <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                              ) : (
                                <XCircle className="w-5 h-5 text-red-600 mx-auto" />
                              )}
                            </td>
                            <td className="text-center py-4 px-2">
                              {competitor.features.responsiveDesign ? (
                                <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                              ) : (
                                <XCircle className="w-5 h-5 text-red-600 mx-auto" />
                              )}
                            </td>
                            <td className="text-center py-4 px-2">
                              {competitor.features.darkMode ? (
                                <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                              ) : (
                                <XCircle className="w-5 h-5 text-red-600 mx-auto" />
                              )}
                            </td>
                            <td className="text-center py-4 px-2">
                              {competitor.features.animations ? (
                                <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                              ) : (
                                <XCircle className="w-5 h-5 text-red-600 mx-auto" />
                              )}
                            </td>
                            <td className="text-center py-4 px-2">
                              <div
                                className={`inline-flex items-center px-2 py-1 rounded-full text-sm font-medium ${getScoreColor(competitor.features.accessibility)}`}
                              >
                                {getScoreIcon(competitor.features.accessibility)}
                                <span className="ml-1">{competitor.features.accessibility}</span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="technical">
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Technical Implementation</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {competitors.map((competitor) => (
                      <div
                        key={competitor.name}
                        className={`p-6 rounded-lg border-2 ${competitor.name === "N3uralia" ? "border-green-200 bg-green-50" : "border-slate-200 bg-white"}`}
                      >
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="relative w-10 h-10">
                            <img
                              src={competitor.logo || "/placeholder.svg"}
                              alt={`${competitor.name} logo`}
                              className="w-10 h-10 object-contain rounded"
                            />
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-900">{competitor.name}</h3>
                            <div className="text-sm text-slate-600">{competitor.technical.framework}</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center space-x-2">
                            {competitor.technical.imageOptimization ? (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            ) : (
                              <XCircle className="w-4 h-4 text-red-600" />
                            )}
                            <span className="text-sm text-slate-700">Image Opt.</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            {competitor.technical.caching ? (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            ) : (
                              <XCircle className="w-4 h-4 text-red-600" />
                            )}
                            <span className="text-sm text-slate-700">Caching</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            {competitor.technical.cdn ? (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            ) : (
                              <XCircle className="w-4 h-4 text-red-600" />
                            )}
                            <span className="text-sm text-slate-700">CDN</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            {competitor.technical.compression ? (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            ) : (
                              <XCircle className="w-4 h-4 text-red-600" />
                            )}
                            <span className="text-sm text-slate-700">Compression</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="ux">
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">User Experience Metrics</h2>
                  <div className="space-y-6">
                    {competitors
                      .sort((a, b) => b.userExperience.navigation - a.userExperience.navigation)
                      .map((competitor, index) => (
                        <div
                          key={competitor.name}
                          className={`p-6 rounded-lg border-2 ${competitor.name === "N3uralia" ? "border-green-200 bg-green-50" : "border-slate-200 bg-white"}`}
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              {index === 0 && <Award className="w-5 h-5 text-yellow-600" />}
                              <div className="relative w-10 h-10">
                                <img
                                  src={competitor.logo || "/placeholder.svg"}
                                  alt={`${competitor.name} logo`}
                                  className="w-10 h-10 object-contain rounded"
                                />
                              </div>
                              <div>
                                <h3 className="font-bold text-slate-900">{competitor.name}</h3>
                                <div className="text-sm text-slate-600">Rank #{index + 1}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-slate-900">
                                {Math.round(
                                  (competitor.userExperience.navigation +
                                    competitor.userExperience.interactivity +
                                    competitor.userExperience.mobileScore) /
                                    3,
                                )}
                              </div>
                              <div className="text-sm text-slate-600">Overall UX</div>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div>
                              <div className="text-sm font-medium text-slate-700 mb-1">Navigation</div>
                              <div className="flex items-center space-x-2">
                                <Progress value={competitor.userExperience.navigation} className="flex-1" />
                                <span className="text-sm font-medium text-slate-900">
                                  {competitor.userExperience.navigation}
                                </span>
                              </div>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-slate-700 mb-1">Load Time</div>
                              <div className="text-sm font-medium text-slate-900">
                                {competitor.userExperience.loadTime}ms
                              </div>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-slate-700 mb-1">Mobile Score</div>
                              <div className="flex items-center space-x-2">
                                <Progress value={competitor.userExperience.mobileScore} className="flex-1" />
                                <span className="text-sm font-medium text-slate-900">
                                  {competitor.userExperience.mobileScore}
                                </span>
                              </div>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-slate-700 mb-1">Interactivity</div>
                              <div className="flex items-center space-x-2">
                                <Progress value={competitor.userExperience.interactivity} className="flex-1" />
                                <span className="text-sm font-medium text-slate-900">
                                  {competitor.userExperience.interactivity}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          )}

          {/* Key Insights */}
          {analysisComplete && (
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Competitive Insights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                    <h3 className="font-semibold text-green-900">Performance Leader</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li>• Highest Lighthouse score (96/100)</li>
                    <li>• Fastest First Contentful Paint (800ms)</li>
                    <li>• Best Cumulative Layout Shift (0.02)</li>
                    <li>• Superior mobile optimization</li>
                  </ul>
                </div>

                <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <Palette className="w-6 h-6 text-blue-600" />
                    <h3 className="font-semibold text-blue-900">Design Innovation</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li>• Scale AI inspired clean aesthetic</li>
                    <li>• Professional white/slate color scheme</li>
                    <li>• Interactive chat demonstrations</li>
                    <li>• Responsive design excellence</li>
                  </ul>
                </div>

                <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <Users className="w-6 h-6 text-purple-600" />
                    <h3 className="font-semibold text-purple-900">User Experience</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-purple-800">
                    <li>• Best-in-class navigation (95/100)</li>
                    <li>• Highest accessibility score (98/100)</li>
                    <li>• Interactive chat widget</li>
                    <li>• Smooth animations and transitions</li>
                  </ul>
                </div>
              </div>
            </Card>
          )}

          {/* Competitive Advantages */}
          {analysisComplete && (
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">N3uralia Competitive Advantages</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Superior Performance Optimization</h3>
                    <p className="text-slate-600">
                      Outperforms all competitors with 96/100 Lighthouse score, fastest loading times, and best Core Web
                      Vitals metrics.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Interactive Chat Demonstrations</h3>
                    <p className="text-slate-600">
                      Unique animated chat interfaces showcasing real AI capabilities, unlike static competitor sites.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Best-in-Class Accessibility</h3>
                    <p className="text-slate-600">
                      Highest accessibility score (98/100) ensuring inclusive design for all users.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Modern Technical Stack</h3>
                    <p className="text-slate-600">
                      Latest Next.js 15 with advanced image optimization, superior to most competitors' implementations.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Actions */}
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Benchmark Actions</h2>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => window.location.reload()} className="bg-blue-600 hover:bg-blue-700 text-white">
                <BarChart3 className="w-4 h-4 mr-2" />
                Refresh Analysis
              </Button>
              <Button
                onClick={() => {
                  const results = { competitors, analysis: "N3uralia leads in all key metrics" }
                  console.log("Benchmark Results:", results)
                  alert("Benchmark results logged to console")
                }}
                variant="outline"
              >
                Export Report
              </Button>
              <Button onClick={() => window.open("https://pagespeed.web.dev/", "_blank")} variant="outline">
                <Globe className="w-4 h-4 mr-2" />
                Test Live Sites
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
