import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Award, Brain } from "lucide-react"

export default function HighConfidenceAILoading() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Header Skeleton */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Award className="w-8 h-8 text-gold-600 animate-pulse" />
          <div className="h-8 bg-slate-200 rounded w-96 animate-pulse"></div>
        </div>
        <div className="h-6 bg-slate-200 rounded w-2/3 mx-auto animate-pulse"></div>
      </div>

      {/* Features Overview Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-slate-200 rounded"></div>
                <div className="h-4 bg-slate-200 rounded w-24"></div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="h-3 bg-slate-200 rounded w-full"></div>
                <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                <div className="h-3 bg-slate-200 rounded w-1/2"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Panel Skeleton */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-blue-600 animate-pulse" />
              <div className="h-6 bg-slate-200 rounded w-64 animate-pulse"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 bg-slate-200 rounded w-20 animate-pulse"></div>
              <div className="h-8 bg-slate-200 rounded w-32 animate-pulse"></div>
            </div>
          </div>
          <div className="h-4 bg-slate-200 rounded w-3/4 animate-pulse"></div>
        </CardHeader>
        <CardContent className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 bg-slate-50 rounded-lg animate-pulse">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-slate-200 rounded"></div>
                  <div className="h-4 bg-slate-200 rounded w-32"></div>
                  <div className="h-6 bg-slate-200 rounded w-16"></div>
                </div>
                <div className="h-6 bg-slate-200 rounded w-20"></div>
              </div>
              <div className="space-y-2">
                <div className="h-3 bg-slate-200 rounded w-full"></div>
                <div className="h-3 bg-slate-200 rounded w-3/4"></div>
                <div className="h-3 bg-slate-200 rounded w-1/2"></div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="h-8 bg-slate-200 rounded w-20"></div>
                <div className="h-8 bg-slate-200 rounded w-24"></div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
