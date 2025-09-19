import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function AnalyticsLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header Skeleton */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Skeleton className="h-9 w-24 bg-white/10" />
            <div>
              <Skeleton className="h-8 w-64 mb-2 bg-white/10" />
              <Skeleton className="h-4 w-80 bg-white/10" />
            </div>
          </div>
          <Skeleton className="h-9 w-32 bg-white/10" />
        </div>

        {/* Navigation Helper Skeleton */}
        <Card className="mb-8 bg-white/5 border-white/10">
          <CardHeader>
            <Skeleton className="h-6 w-48 bg-white/10" />
            <Skeleton className="h-4 w-96 bg-white/10" />
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-10 bg-white/10" />
              ))}
            </div>
            <div className="mt-4 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <Skeleton className="h-5 w-48 mb-2 bg-white/10" />
              <div className="grid md:grid-cols-2 gap-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-4 bg-white/10" />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Status Badges Skeleton */}
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-4">
            <Skeleton className="h-6 w-40 bg-white/10" />
            <Skeleton className="h-6 w-32 bg-white/10" />
          </div>
        </div>

        {/* Dashboard Skeleton */}
        <div className="space-y-6">
          {/* Overall Score Skeleton */}
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <Skeleton className="h-6 w-48 bg-white/10" />
              <Skeleton className="h-4 w-64 bg-white/10" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Skeleton className="h-12 w-16 bg-white/10" />
                <Skeleton className="h-3 flex-1 bg-white/10" />
                <Skeleton className="h-6 w-24 bg-white/10" />
              </div>
            </CardContent>
          </Card>

          {/* Metrics Grid Skeleton */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="bg-white/5 border-white/10">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-4 w-16 bg-white/10" />
                    <Skeleton className="h-5 w-20 bg-white/10" />
                  </div>
                  <Skeleton className="h-3 w-full bg-white/10" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Skeleton className="h-8 w-20 bg-white/10" />
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Skeleton className="h-3 w-16 bg-white/10" />
                        <Skeleton className="h-3 w-12 bg-white/10" />
                      </div>
                      <Skeleton className="h-2 w-full bg-white/10" />
                    </div>
                    <Skeleton className="h-12 w-full bg-white/10" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Instructions Skeleton */}
        <Card className="mt-8 bg-white/5 border-white/10">
          <CardHeader>
            <Skeleton className="h-6 w-48 bg-white/10" />
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Skeleton className="h-5 w-32 bg-white/10" />
                {Array.from({ length: 3 }).map((_, i) => (
                  <Skeleton key={i} className="h-4 w-full bg-white/10" />
                ))}
              </div>
              <div className="space-y-2">
                <Skeleton className="h-5 w-32 bg-white/10" />
                {Array.from({ length: 3 }).map((_, i) => (
                  <Skeleton key={i} className="h-4 w-full bg-white/10" />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
