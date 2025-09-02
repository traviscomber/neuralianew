import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function SocialTestLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header Skeleton */}
        <div className="text-center space-y-4">
          <Skeleton className="h-12 w-96 mx-auto bg-slate-700" />
          <Skeleton className="h-6 w-64 mx-auto bg-slate-700" />
          <Skeleton className="h-4 w-48 mx-auto bg-slate-700" />
        </div>

        {/* Control Panel Skeleton */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <Skeleton className="h-6 w-48 bg-slate-700" />
            <Skeleton className="h-4 w-64 bg-slate-700" />
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-4">
              <Skeleton className="h-10 w-32 bg-slate-700" />
              <Skeleton className="h-10 w-24 bg-slate-700" />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <Skeleton className="h-16 bg-slate-700" />
              <Skeleton className="h-16 bg-slate-700" />
              <Skeleton className="h-16 bg-slate-700" />
            </div>
          </CardContent>
        </Card>

        {/* Metadata Preview Skeleton */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <Skeleton className="h-6 w-64 bg-slate-700" />
            <Skeleton className="h-4 w-48 bg-slate-700" />
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <Skeleton className="h-20 bg-slate-700" />
                <Skeleton className="h-20 bg-slate-700" />
                <Skeleton className="h-20 bg-slate-700" />
              </div>
              <div className="space-y-3">
                <Skeleton className="h-20 bg-slate-700" />
                <Skeleton className="h-20 bg-slate-700" />
                <Skeleton className="h-20 bg-slate-700" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Platform Tests Skeleton */}
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Skeleton className="h-10 w-10 rounded-lg bg-slate-700" />
                  <Skeleton className="h-6 w-24 bg-slate-700" />
                </div>
                <Skeleton className="h-4 w-48 bg-slate-700" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-32 bg-slate-700" />
                  <Skeleton className="h-16 bg-slate-700" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24 bg-slate-700" />
                  <Skeleton className="h-12 bg-slate-700" />
                </div>
                <div className="flex gap-2">
                  <Skeleton className="h-9 flex-1 bg-slate-700" />
                  <Skeleton className="h-9 w-24 bg-slate-700" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
