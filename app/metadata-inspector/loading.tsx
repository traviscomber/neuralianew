import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Skeleton */}
        <div className="text-center space-y-4">
          <Skeleton className="h-12 w-96 mx-auto bg-slate-800" />
          <Skeleton className="h-6 w-64 mx-auto bg-slate-800" />

          {/* Stats Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="bg-slate-900/50 border-slate-700/50">
                <CardContent className="p-4 text-center">
                  <Skeleton className="w-8 h-8 mx-auto mb-2 bg-slate-700" />
                  <Skeleton className="h-8 w-12 mx-auto mb-1 bg-slate-700" />
                  <Skeleton className="h-4 w-20 mx-auto bg-slate-700" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Content Skeleton */}
        <Card className="bg-slate-900/50 border-slate-700/50">
          <CardHeader>
            <Skeleton className="h-6 w-48 bg-slate-700" />
          </CardHeader>
          <CardContent className="space-y-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Skeleton className="h-6 w-20 bg-slate-700" />
                  <Skeleton className="h-4 w-4 bg-slate-700" />
                </div>
                <Skeleton className="h-4 w-32 mb-1 bg-slate-700" />
                <Skeleton className="h-3 w-full bg-slate-700" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
