import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Brain, BarChart3, Target, TrendingUp, Lightbulb, Shield } from "lucide-react"

export default function AIReasoningExplorerLoading() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Brain className="w-10 h-10 text-blue-600 animate-pulse" />
          <Skeleton className="h-12 w-80" />
        </div>
        <Skeleton className="h-6 w-full max-w-3xl mx-auto" />
      </div>

      {/* AI Analysis Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Brain, label: "AI Analysis" },
          { icon: BarChart3, label: "Data Insights" },
          { icon: Target, label: "Recommendations" },
          { icon: TrendingUp, label: "Predictions" },
        ].map((item, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-slate-200 rounded-full">
                  <item.icon className="w-6 h-6 text-slate-400" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-4 w-16" />
                </div>
              </div>
              <Skeleton className="h-12 w-full mt-3" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Analysis Interface */}
      <Card className="animate-pulse">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="w-6 h-6 text-blue-600 animate-pulse" />
              <Skeleton className="h-6 w-64" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="h-8 w-20 rounded-full" />
              <Skeleton className="h-8 w-16 rounded" />
            </div>
          </div>
          <Skeleton className="h-4 w-full max-w-lg" />
        </CardHeader>
        <CardContent>
          {/* Tabs Loading */}
          <div className="space-y-6">
            <div className="flex space-x-1 bg-slate-100 p-1 rounded-lg">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className="h-8 w-24 rounded" />
              ))}
            </div>

            {/* Content Loading */}
            <div className="space-y-6">
              {/* Executive Summary */}
              <Card className="animate-pulse">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-yellow-500 animate-pulse" />
                    <Skeleton className="h-5 w-32" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-4/6" />
                  </div>
                </CardContent>
              </Card>

              {/* Analysis Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2].map((i) => (
                  <Card key={i} className="animate-pulse">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Skeleton className="w-5 h-5 rounded" />
                        <Skeleton className="h-5 w-40" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-4 w-16" />
                          </div>
                          <Skeleton className="h-2 w-full rounded-full" />
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Skeleton className="h-4 w-20" />
                            <Skeleton className="h-6 w-20 rounded-full" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Skeleton className="h-4 w-28" />
                            <div className="flex items-center gap-2">
                              <Skeleton className="h-2 w-20 rounded-full" />
                              <Skeleton className="h-4 w-8" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Detailed Analysis */}
              <Card className="animate-pulse">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-600 animate-pulse" />
                    <Skeleton className="h-5 w-48" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                        <Skeleton className="w-4 h-4 rounded mt-0.5 flex-shrink-0" />
                        <div className="space-y-2 flex-1">
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-4 w-3/4" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="text-center p-3 bg-slate-50 rounded-lg animate-pulse">
                    <Skeleton className="h-8 w-16 mx-auto mb-2" />
                    <Skeleton className="h-3 w-20 mx-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Loading Progress */}
      <div className="text-center py-8">
        <div className="flex items-center justify-center gap-4 mb-4">
          <Brain className="w-12 h-12 text-blue-600 animate-pulse" />
          <BarChart3 className="w-10 h-10 text-green-600 animate-pulse" />
          <Target className="w-8 h-8 text-purple-600 animate-pulse" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Analyzing AI Reasoning...</h3>
        <p className="text-muted-foreground mb-4">
          Processing comprehensive performance data and generating detailed insights
        </p>
        <div className="max-w-md mx-auto">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Data Analysis</span>
            <span>AI Reasoning</span>
            <span>Insights</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: "75%" }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
