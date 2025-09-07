import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Smartphone, RefreshCw, Touchpad as Touch, Ruler } from "lucide-react"

export default function MobileButtonTestLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header Loading */}
        <div className="text-center space-y-4">
          <Skeleton className="h-10 w-80 mx-auto" />
          <Skeleton className="h-6 w-[500px] mx-auto" />
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-36" />
            </div>
          </CardContent>
        </Card>

        {/* Button Demo Loading */}
        <Card className="border-2 border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Touch className="w-5 h-5 animate-pulse" />
              <Skeleton className="h-6 w-64" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Skeleton className="h-4 w-full max-w-md" />
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Skeleton className="h-12 sm:h-10 w-full sm:w-36" />
                <Skeleton className="h-12 sm:h-10 w-full sm:w-40" />
                <Skeleton className="h-12 sm:h-10 w-full sm:w-24" />
              </div>
              <Skeleton className="h-3 w-64" />
            </div>
          </CardContent>
        </Card>

        {/* Test Results Loading */}
        <Card className="border-2 border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Ruler className="w-5 h-5 animate-pulse" />
              <Skeleton className="h-6 w-48" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                  <Skeleton className="w-4 h-4 rounded-full mt-0.5" />
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-center">
                      <Skeleton className="h-5 w-32" />
                      <Skeleton className="h-5 w-20" />
                    </div>
                    <Skeleton className="h-4 w-48" />
                    <Skeleton className="h-3 w-64" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Summary Stats Loading */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="bg-slate-50 border-slate-200">
              <CardContent className="p-4 text-center">
                <Skeleton className="h-8 w-8 mx-auto mb-2" />
                <Skeleton className="h-4 w-20 mx-auto" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Loading Animation */}
        <div className="text-center py-8">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-slate-400" />
          <p className="text-slate-600">Analyzing button measurements and touch targets...</p>
        </div>
      </div>
    </div>
  )
}
