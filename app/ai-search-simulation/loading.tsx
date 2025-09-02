import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 p-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header Skeleton */}
        <div className="text-center mb-8">
          <Skeleton className="h-12 w-96 mx-auto mb-4 bg-slate-800" />
          <Skeleton className="h-6 w-[600px] mx-auto bg-slate-800" />
        </div>

        {/* Metrics Skeleton */}
        <Card className="mb-8 bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <Skeleton className="h-6 w-64 bg-slate-700" />
            <Skeleton className="h-4 w-96 bg-slate-700" />
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="text-center">
                  <Skeleton className="h-8 w-16 mx-auto mb-2 bg-slate-700" />
                  <Skeleton className="h-4 w-20 mx-auto mb-2 bg-slate-700" />
                  <Skeleton className="h-5 w-12 mx-auto bg-slate-700" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Search Simulation Skeleton */}
        <Card className="mb-8 bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <Skeleton className="h-6 w-48 bg-slate-700" />
            <Skeleton className="h-4 w-80 bg-slate-700" />
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <Skeleton key={i} className="h-8 w-32 bg-slate-700" />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Platform Results Skeleton */}
        <div className="space-y-6">
          {Array.from({ length: 2 }).map((_, i) => (
            <Card key={i} className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Skeleton className="h-6 w-80 bg-slate-700" />
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-20 bg-slate-700" />
                    <Skeleton className="h-6 w-24 bg-slate-700" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Skeleton className="h-24 w-full mb-4 bg-slate-700" />
                <div className="flex gap-2 mb-4">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <Skeleton key={j} className="h-5 w-20 bg-slate-700" />
                  ))}
                </div>
                <div className="flex gap-4">
                  {Array.from({ length: 3 }).map((_, j) => (
                    <Skeleton key={j} className="h-4 w-16 bg-slate-700" />
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
