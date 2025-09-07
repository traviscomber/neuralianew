import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { RefreshCw, Smartphone } from "lucide-react"

export default function TimezoneVerificationLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header Loading */}
        <div className="text-center space-y-4">
          <Skeleton className="h-10 w-96 mx-auto" />
          <Skeleton className="h-6 w-[600px] mx-auto" />
        </div>

        {/* Device Info Loading */}
        <Card className="border-2 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="w-5 h-5 animate-pulse" />
              <Skeleton className="h-6 w-48" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-4 w-24" />
            </div>
          </CardContent>
        </Card>

        {/* Control Panel Loading */}
        <Card className="border-2 border-slate-200">
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-6 w-32" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {/* Mobile-optimized button skeletons */}
              <Skeleton className="h-12 sm:h-10 w-full sm:w-36" />
              <Skeleton className="h-12 sm:h-10 w-full sm:w-40" />
              <Skeleton className="h-12 sm:h-10 w-full sm:w-32" />
            </div>
          </CardContent>
        </Card>

        {/* Summary Dashboard Loading */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="bg-slate-50 border-slate-200">
              <CardContent className="p-4 sm:p-6 text-center">
                <Skeleton className="h-8 w-12 mx-auto mb-2" />
                <Skeleton className="h-4 w-20 mx-auto" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs Loading */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full max-w-md">
              <Skeleton className="h-12 sm:h-10" />
              <Skeleton className="h-12 sm:h-10" />
              <Skeleton className="h-12 sm:h-10" />
            </div>
          </div>

          {/* Live Clocks Loading */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border border-slate-200">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <Skeleton className="w-8 h-8 rounded" />
                    <div>
                      <Skeleton className="h-6 w-24 mb-1" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Skeleton className="h-12 w-20 mx-auto" />
                    <Skeleton className="h-6 w-32 mx-auto" />
                    <Skeleton className="h-4 w-28 mx-auto" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Loading Animation */}
        <div className="text-center py-8">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-slate-400" />
          <p className="text-slate-600">Loading timezone verification system...</p>
        </div>
      </div>
    </div>
  )
}
