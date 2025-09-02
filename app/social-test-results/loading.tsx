import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Skeleton */}
        <div className="text-center space-y-6">
          <div className="flex justify-center gap-4">
            <Skeleton className="w-16 h-16 rounded-full bg-slate-700" />
            <Skeleton className="w-16 h-16 rounded-full bg-slate-700" />
            <Skeleton className="w-16 h-16 rounded-full bg-slate-700" />
          </div>
          <Skeleton className="h-16 w-96 mx-auto bg-slate-700" />
          <Skeleton className="h-8 w-full max-w-4xl mx-auto bg-slate-700" />
          <div className="flex justify-center gap-4">
            <Skeleton className="h-10 w-32 bg-slate-700" />
            <Skeleton className="h-10 w-32 bg-slate-700" />
            <Skeleton className="h-10 w-32 bg-slate-700" />
          </div>
        </div>

        {/* Progress Card Skeleton */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Skeleton className="h-6 w-40 bg-slate-700" />
                <Skeleton className="h-8 w-16 bg-slate-700" />
              </div>
              <Skeleton className="h-4 w-full bg-slate-700" />
              <div className="grid grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="text-center space-y-2">
                    <Skeleton className="h-8 w-12 mx-auto bg-slate-700" />
                    <Skeleton className="h-4 w-16 mx-auto bg-slate-700" />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Platform Cards Skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="bg-slate-800/50 border-slate-700">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Skeleton className="w-8 h-8 bg-slate-700" />
                    <Skeleton className="h-6 w-20 bg-slate-700" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Skeleton className="w-5 h-5 bg-slate-700" />
                    <Skeleton className="h-6 w-12 bg-slate-700" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Skeleton className="h-6 w-16 bg-slate-700" />
                  <Skeleton className="h-12 w-full bg-slate-700" />
                  <Skeleton className="h-2 w-full bg-slate-700" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Business Impact Skeleton */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <Skeleton className="h-6 w-64 bg-slate-700" />
            <Skeleton className="h-4 w-96 bg-slate-700" />
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="text-center space-y-3">
                  <Skeleton className="w-8 h-8 mx-auto bg-slate-700" />
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-16 mx-auto bg-slate-700" />
                    <Skeleton className="h-4 w-24 mx-auto bg-slate-700" />
                  </div>
                  <Skeleton className="h-8 w-full bg-slate-700" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons Skeleton */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Skeleton className="h-14 w-48 bg-slate-700" />
          <Skeleton className="h-14 w-48 bg-slate-700" />
        </div>
      </div>
    </div>
  )
}
