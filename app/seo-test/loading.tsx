import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function SEOTestLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Skeleton */}
        <div className="text-center space-y-4">
          <Skeleton className="h-12 w-96 mx-auto bg-slate-700" />
          <Skeleton className="h-6 w-64 mx-auto bg-slate-700" />
          <Skeleton className="h-4 w-48 mx-auto bg-slate-700" />
        </div>

        {/* Google Tools Card Skeleton */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <Skeleton className="h-6 w-48 bg-slate-700" />
            <Skeleton className="h-4 w-96 bg-slate-700" />
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="p-4 bg-slate-900/50 rounded-lg">
                  <Skeleton className="h-5 w-32 mb-2 bg-slate-700" />
                  <Skeleton className="h-4 w-full mb-4 bg-slate-700" />
                  <Skeleton className="h-8 w-full bg-slate-700" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Schema Card Skeleton */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <Skeleton className="h-6 w-64 bg-slate-700" />
            <Skeleton className="h-4 w-80 bg-slate-700" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-64 w-full bg-slate-900/70" />
            <div className="mt-4 flex gap-2">
              <Skeleton className="h-8 w-24 bg-slate-700" />
              <Skeleton className="h-8 w-32 bg-slate-700" />
            </div>
          </CardContent>
        </Card>

        {/* Grid Skeleton */}
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Skeleton className="h-6 w-32 bg-slate-700" />
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((j) => (
                    <div key={j} className="flex items-center justify-between">
                      <Skeleton className="h-4 w-48 bg-slate-700" />
                      <Skeleton className="h-5 w-5 rounded-full bg-slate-700" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
