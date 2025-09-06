import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function PerformanceMonitoringLoading() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Skeleton className="h-12 w-96 mx-auto mb-4" />
            <Skeleton className="h-6 w-80 mx-auto" />
          </div>

          {/* Monitoring Status */}
          <Card className="p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-6 w-32" />
              </div>
              <div className="flex items-center space-x-4">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-8 w-20" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="text-center">
                  <Skeleton className="h-10 w-20 mx-auto mb-2" />
                  <Skeleton className="h-4 w-32 mx-auto mb-1" />
                  <Skeleton className="h-3 w-24 mx-auto" />
                </div>
              ))}
            </div>
          </Card>

          {/* Tabs */}
          <div className="mb-8">
            <div className="flex space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-10 w-24" />
              ))}
            </div>

            <Card className="p-8">
              <div className="flex items-center mb-6">
                <Skeleton className="h-6 w-6 mr-2" />
                <Skeleton className="h-8 w-64" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="p-6 bg-white rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-4">
                      <Skeleton className="h-5 w-5" />
                      <div className="flex items-center space-x-1">
                        <Skeleton className="h-4 w-4" />
                        <Skeleton className="h-6 w-16" />
                      </div>
                    </div>

                    <div className="mb-4">
                      <Skeleton className="h-5 w-32 mb-2" />
                      <Skeleton className="h-8 w-20 mb-1" />
                      <Skeleton className="h-4 w-24" />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-4 w-12" />
                      </div>
                      <Skeleton className="h-2 w-full" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Actions */}
          <Card className="p-8">
            <Skeleton className="h-8 w-48 mb-6" />
            <div className="flex flex-wrap gap-4">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-10 w-32" />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
