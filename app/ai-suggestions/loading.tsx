import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Brain, Sparkles } from "lucide-react"

export default function AISuggestionsLoading() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Brain className="w-10 h-10 text-blue-600 animate-pulse" />
          <Skeleton className="h-12 w-96" />
          <Sparkles className="w-8 h-8 text-yellow-500 animate-pulse" />
        </div>
        <Skeleton className="h-6 w-full max-w-4xl mx-auto" />
      </div>

      {/* AI Intelligence Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Skeleton className="w-12 h-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-4 w-16" />
                </div>
              </div>
              <Skeleton className="h-16 w-full mt-3" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Features Showcase */}
      <Card className="animate-pulse">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
            <Skeleton className="h-8 w-64" />
          </div>
          <Skeleton className="h-4 w-full max-w-lg" />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="p-4 bg-white rounded-lg border animate-pulse">
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

      {/* Main Content Loading */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <Skeleton className="h-10 w-full max-w-2xl" />
          <Skeleton className="h-10 w-32" />
        </div>

        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Skeleton className="w-6 h-6 rounded" />
                    <Skeleton className="h-6 w-48" />
                  </div>
                  <Skeleton className="h-8 w-24 rounded-full" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <Skeleton className="h-24 w-full rounded-lg" />
                    <Skeleton className="h-24 w-full rounded-lg" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Loading Message */}
      <div className="text-center py-8">
        <Brain className="w-16 h-16 text-blue-600 animate-pulse mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">Loading AI Intelligence...</h3>
        <p className="text-muted-foreground">Analyzing performance data and generating intelligent recommendations</p>
      </div>
    </div>
  )
}
