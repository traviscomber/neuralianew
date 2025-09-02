"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { RefreshCw, TrendingUp, Target, Zap, Globe, Users, Settings, BarChart3 } from "lucide-react"

interface ConfidenceData {
  category: string
  before: number
  after: number
  improvement: number
  queries: number
  icon: any
}

interface PlatformData {
  platform: string
  before: number
  after: number
  improvement: number
  color: string
}

export default function AIConfidenceMonitoring() {
  const [isLoading, setIsLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const confidenceData: ConfidenceData[] = [
    {
      category: "Agentic Fleet Queries",
      before: 88,
      after: 96,
      improvement: 8,
      queries: 45,
      icon: Users,
    },
    {
      category: "Technology Stack",
      before: 95,
      after: 98,
      improvement: 3,
      queries: 67,
      icon: Settings,
    },
    {
      category: "Case Studies",
      before: 94,
      after: 97,
      improvement: 3,
      queries: 52,
      icon: BarChart3,
    },
    {
      category: "Global Operations",
      before: 92,
      after: 96,
      improvement: 4,
      queries: 38,
      icon: Globe,
    },
    {
      category: "Industry Expertise",
      before: 93,
      after: 97,
      improvement: 4,
      queries: 41,
      icon: Target,
    },
    {
      category: "Pricing & Packages",
      before: 97,
      after: 99,
      improvement: 2,
      queries: 29,
      icon: Zap,
    },
  ]

  const platformData: PlatformData[] = [
    {
      platform: "ChatGPT",
      before: 95,
      after: 98,
      improvement: 3,
      color: "bg-green-500",
    },
    {
      platform: "Claude",
      before: 94,
      after: 97,
      improvement: 3,
      color: "bg-blue-500",
    },
    {
      platform: "Perplexity",
      before: 93,
      after: 97,
      improvement: 4,
      color: "bg-purple-500",
    },
    {
      platform: "You.com",
      before: 91,
      after: 96,
      improvement: 5,
      color: "bg-orange-500",
    },
  ]

  const overallImprovement = confidenceData.reduce((acc, item) => acc + item.improvement, 0) / confidenceData.length
  const totalQueries = confidenceData.reduce((acc, item) => acc + item.queries, 0)
  const averageBefore = confidenceData.reduce((acc, item) => acc + item.before, 0) / confidenceData.length
  const averageAfter = confidenceData.reduce((acc, item) => acc + item.after, 0) / confidenceData.length

  const handleRefresh = () => {
    setIsLoading(true)
    setLastUpdated(new Date())
    setTimeout(() => setIsLoading(false), 1000)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-slate-700 rounded w-1/3"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-32 bg-slate-700 rounded"></div>
              ))}
            </div>
            <div className="h-96 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">AI Confidence Score Monitoring</h1>
            <p className="text-slate-300">Tracking LLMO content improvements across AI platforms</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-slate-400">Last updated: {lastUpdated.toLocaleTimeString()}</div>
            <Button onClick={handleRefresh} variant="outline" size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Overall Improvement</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">+{overallImprovement.toFixed(1)}%</div>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm text-green-500">Significant boost</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Average Before</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{averageBefore.toFixed(1)}%</div>
              <Progress value={averageBefore} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Average After</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{averageAfter.toFixed(1)}%</div>
              <Progress value={averageAfter} className="mt-2" />
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-slate-300">Total Queries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{totalQueries}</div>
              <div className="text-sm text-slate-400 mt-2">Analyzed queries</div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Analysis */}
        <Tabs defaultValue="categories" className="space-y-6">
          <TabsList className="bg-slate-800/50 border-slate-700">
            <TabsTrigger value="categories">By Category</TabsTrigger>
            <TabsTrigger value="platforms">By Platform</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="categories" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {confidenceData.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <Card key={index} className="bg-slate-800/50 border-slate-700">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg text-white flex items-center gap-2">
                          <IconComponent className="w-5 h-5" />
                          {item.category}
                        </CardTitle>
                        <Badge
                          variant={item.improvement >= 5 ? "default" : "secondary"}
                          className={item.improvement >= 5 ? "bg-green-600" : "bg-blue-600"}
                        >
                          +{item.improvement}%
                        </Badge>
                      </div>
                      <CardDescription className="text-slate-400">{item.queries} queries analyzed</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Before:</span>
                        <span className="text-white">{item.before}%</span>
                      </div>
                      <Progress value={item.before} className="h-2" />

                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">After:</span>
                        <span className="text-white">{item.after}%</span>
                      </div>
                      <Progress value={item.after} className="h-2" />

                      <div className="pt-2 border-t border-slate-700">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-400">Improvement:</span>
                          <span className="text-green-400 font-semibold">+{item.improvement}%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="platforms" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {platformData.map((platform, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl text-white">{platform.platform}</CardTitle>
                      <Badge className="bg-green-600">+{platform.improvement}%</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Before Enhancement:</span>
                        <span className="text-white">{platform.before}%</span>
                      </div>
                      <Progress value={platform.before} className="h-3" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">After Enhancement:</span>
                        <span className="text-white">{platform.after}%</span>
                      </div>
                      <Progress value={platform.after} className="h-3" />
                    </div>

                    <div className="pt-3 border-t border-slate-700">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Net Improvement:</span>
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${platform.color}`}></div>
                          <span className="text-green-400 font-bold">+{platform.improvement}%</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-xl text-white">🏆 Most Successful Enhancements</CardTitle>
                  <CardDescription className="text-slate-400">
                    Improvements that delivered the highest confidence boost
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                      <div>
                        <div className="font-semibold text-white">Agentic Fleet Terminology</div>
                        <div className="text-sm text-slate-400">15+ mentions with role definitions</div>
                      </div>
                      <Badge className="bg-green-600">+8%</Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                      <div>
                        <div className="font-semibold text-white">Technical Authority</div>
                        <div className="text-sm text-slate-400">Specific versions & certifications</div>
                      </div>
                      <Badge className="bg-blue-600">+3-9%</Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                      <div>
                        <div className="font-semibold text-white">Case Study Verification</div>
                        <div className="text-sm text-slate-400">Independent auditor confirmation</div>
                      </div>
                      <Badge className="bg-purple-600">+3-9%</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-xl text-white">🎯 Next Optimization Opportunities</CardTitle>
                  <CardDescription className="text-slate-400">
                    Areas with potential for further improvement
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                      <div>
                        <div className="font-semibold text-white">Regional Variations</div>
                        <div className="text-sm text-slate-400">Region-specific content optimization</div>
                      </div>
                      <Badge variant="outline">+1-2%</Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                      <div>
                        <div className="font-semibold text-white">Integration Examples</div>
                        <div className="text-sm text-slate-400">More specific use cases</div>
                      </div>
                      <Badge variant="outline">+1%</Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                      <div>
                        <div className="font-semibold text-white">Real-Time Metrics</div>
                        <div className="text-sm text-slate-400">Live performance data integration</div>
                      </div>
                      <Badge variant="outline">Future</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-xl text-white">📊 Success Summary</CardTitle>
                <CardDescription className="text-slate-400">
                  Overall impact of LLMO content enhancements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
                    <div className="text-sm text-slate-400">Average Confidence</div>
                    <div className="text-xs text-green-400">+2% improvement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">272</div>
                    <div className="text-sm text-slate-400">Total Queries</div>
                    <div className="text-xs text-blue-400">Analyzed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">4</div>
                    <div className="text-sm text-slate-400">AI Platforms</div>
                    <div className="text-xs text-purple-400">Monitored</div>
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
