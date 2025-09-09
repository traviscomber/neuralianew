import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Brain, Sparkles, TrendingUp, Award, Activity } from "lucide-react"

export default function AILearningLoading() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Brain className="w-10 h-10 text-blue-600 animate-pulse" />
          <Skeleton className="h-12 w-80" />
          <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />
        </div>
        <Skeleton className="h-6 w-full max-w-4xl mx-auto" />
      </div>

      {/* AI Learning Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[Brain, TrendingUp, Award, Activity].map((Icon, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-slate-200 rounded-full">
                  <Icon className="w-6 h-6 text-slate-400" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
              <Skeleton className="h-12 w-full mt-3" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Learning Process */}
      <Card className="animate-pulse">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-blue-600 animate-pulse" />
            <Skeleton className="h-8 w-64" />
          </div>
          <Skeleton className="h-4 w-full max-w-lg" />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center space-y-4">
                <Skeleton className="w-16 h-16 rounded-full mx-auto" />
                <Skeleton className="h-5 w-32 mx-auto" />
                <Skeleton className="h-16 w-full" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Features Grid */}
      <Card className="animate-pulse">
        <CardHeader>
          <Skeleton className="h-6 w-48" />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Skeleton className="w-5 h-5 rounded" />
                  <Skeleton className="h-5 w-32" />
                </div>
                <Skeleton className="h-16 w-full" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Main Dashboard Loading */}
      <Card className="animate-pulse">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-blue-600 animate-pulse" />
              <Skeleton className="h-6 w-48" />
            </div>
            <Skeleton className="h-8 w-20" />
          </div>
          <Skeleton className="h-4 w-full max-w-lg" />
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Tabs */}
            <div className="flex space-x-1 bg-slate-100 p-1 rounded-lg">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-8 w-24 rounded" />
              ))}
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Skeleton className="w-12 h-12 rounded-full" />
                      <div className="space-y-2">
                        <Skeleton className="h-6 w-16" />
                        <Skeleton className="h-4 w-20" />
                      </div>
                    </div>
                    <Skeleton className="h-2 w-full mb-2" />
                    <Skeleton className="h-4 w-24" />
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Content */}
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <Skeleton className="h-5 w-48" />
                    <Skeleton className="h-8 w-24 rounded-full" />
                  </div>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Loading Message */}
      <div className="text-center py-8">
        <div className="flex items-center justify-center gap-4 mb-4">
          <Brain className="w-12 h-12 text-blue-600 animate-pulse" />
          <Activity className="w-10 h-10 text-green-600 animate-pulse" />
          <TrendingUp className="w-8 h-8 text-purple-600 animate-pulse" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Loading AI Learning Intelligence...</h3>
        <p className="text-muted-foreground mb-4">Initializing advanced learning models and performance analytics</p>
        <div className="max-w-md mx-auto">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Models</span>
            <span>Insights</span>
            <span>Analytics</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: "85%" }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
