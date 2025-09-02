"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function AIResponseVerificationLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 p-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header Skeleton */}
        <div className="text-center mb-8">
          <Skeleton className="h-12 w-96 mx-auto mb-4 bg-slate-800" />
          <Skeleton className="h-6 w-[600px] mx-auto bg-slate-800" />
        </div>

        {/* Dashboard Skeleton */}
        <Card className="mb-8 bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <Skeleton className="h-6 w-64 bg-slate-700" />
            <Skeleton className="h-4 w-96 bg-slate-700" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <Skeleton className="h-10 w-32 bg-slate-700" />
              <div className="flex items-center gap-4">
                <Skeleton className="h-8 w-16 bg-slate-700" />
                <Skeleton className="h-4 w-24 bg-slate-700" />
              </div>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="text-center">
                  <Skeleton className="h-6 w-12 mx-auto mb-2 bg-slate-700" />
                  <Skeleton className="h-4 w-16 mx-auto mb-1 bg-slate-700" />
                  <Skeleton className="h-4 w-4 mx-auto bg-slate-700" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tabs Skeleton */}
        <div className="space-y-6">
          <div className="flex space-x-1 bg-slate-800/50 p-1 rounded-lg">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-10 flex-1 bg-slate-700" />
            ))}
          </div>

          {/* Content Skeleton */}
          <Card className="bg-slate-800/50 border-slate-700/50">
            <CardHeader>
              <Skeleton className="h-6 w-48 bg-slate-700" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg">
                    <div className="flex-1">
                      <Skeleton className="h-5 w-48 mb-2 bg-slate-700" />
                      <Skeleton className="h-4 w-64 bg-slate-700" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Skeleton className="h-5 w-5 bg-slate-700" />
                      <Skeleton className="h-6 w-16 bg-slate-700" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
