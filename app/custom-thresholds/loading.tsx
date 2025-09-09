import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function CustomThresholdsLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section Skeleton */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Skeleton className="w-8 h-8 rounded-full" />
            <Skeleton className="h-10 w-80" />
            <Skeleton className="w-6 h-6 rounded-full" />
          </div>
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>

        {/* Feature Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="border-2">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <Skeleton className="w-5 h-5 rounded-full" />
                  <Skeleton className="h-6 w-32" />
                </div>
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-3" />
                <div className="flex items-center gap-2">
                  <Skeleton className="h-5 w-20 rounded-full" />
                  <Skeleton className="h-5 w-16 rounded-full" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Metrics Overview Skeleton */}
        <Card className="mb-8 border-2">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Skeleton className="w-5 h-5 rounded-full" />
              <Skeleton className="h-6 w-48" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                  <Skeleton className="w-8 h-8 rounded-full" />
                  <div className="flex-1">
                    <Skeleton className="h-5 w-24 mb-1" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Wizard Skeleton */}
        <div className="space-y-6">
          {/* Header Card */}
          <Card className="border-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Skeleton className="w-6 h-6 rounded-full" />
                  <Skeleton className="h-7 w-64" />
                  <Skeleton className="w-5 h-5 rounded-full" />
                </div>
                <div className="flex items-center gap-2">
                  <Skeleton className="h-8 w-20" />
                  <Skeleton className="h-8 w-20" />
                </div>
              </div>
              <Skeleton className="h-4 w-96 mt-2" />
            </CardHeader>
          </Card>

          {/* Progress Card */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-4 w-20" />
              </div>
              <Skeleton className="h-2 w-full mb-4" />
              <div className="flex items-center justify-between">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex flex-col items-center space-y-1">
                    <Skeleton className="w-8 h-8 rounded-full" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Configuration Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Skeleton className="w-5 h-5 rounded-full" />
                    <Skeleton className="h-6 w-40" />
                  </div>
                  <Skeleton className="h-4 w-64" />
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Form Fields */}
                  <div className="space-y-4">
                    <div>
                      <Skeleton className="h-4 w-24 mb-2" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                    <div>
                      <Skeleton className="h-4 w-32 mb-2" />
                      <Skeleton className="h-20 w-full" />
                    </div>
                    <div>
                      <Skeleton className="h-4 w-28 mb-2" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between pt-6 border-t">
                    <div className="flex items-center space-x-2">
                      <Skeleton className="h-9 w-20" />
                      <Skeleton className="h-9 w-16" />
                    </div>
                    <Skeleton className="h-9 w-16" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recommendations */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Skeleton className="w-4 h-4 rounded-full" />
                    <Skeleton className="h-5 w-32" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-6 w-12" />
                      </div>
                      <Skeleton className="h-4 w-16 mb-1" />
                      <Skeleton className="h-3 w-full" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Performance */}
              <Card>
                <CardHeader>
                  <Skeleton className="h-5 w-32" />
                </CardHeader>
                <CardContent className="space-y-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center justify-between">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-5 w-12" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Tips */}
              <Card>
                <CardHeader>
                  <Skeleton className="h-5 w-28" />
                </CardHeader>
                <CardContent className="space-y-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="p-2 bg-green-50 rounded">
                      <Skeleton className="h-3 w-full" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
