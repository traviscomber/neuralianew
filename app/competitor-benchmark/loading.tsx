"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { Card } from "@/components/ui/card"

export default function CompetitorBenchmarkLoading() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Skeleton */}
          <div className="text-center mb-12">
            <Skeleton className="h-12 w-96 mx-auto mb-4" />
            <Skeleton className="h-6 w-64 mx-auto" />
          </div>

          {/* Analysis Status Skeleton */}
          <Card className="p-8 mb-8 text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Skeleton className="h-8 w-8 rounded-full" />
              <Skeleton className="h-8 w-64" />
            </div>
            <Skeleton className="h-4 w-48 mx-auto mb-4" />
            <Skeleton className="h-2 w-80 mx-auto" />
          </Card>

          {/* Overall Ranking Skeleton */}
          <Card className="p-8 mb-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Skeleton className="h-8 w-8" />
                <Skeleton className="h-8 w-64" />
              </div>
              <Skeleton className="h-16 w-32 mx-auto mb-4" />
              <Skeleton className="h-8 w-32 mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="text-center">
                  <Skeleton className="h-8 w-8 mx-auto mb-2" />
                  <Skeleton className="h-4 w-20 mx-auto mb-2" />
                  <Skeleton className="h-6 w-16 mx-auto" />
                </div>
              ))}
            </div>
          </Card>

          {/* Tabs Skeleton */}
          <div className="mb-8">
            <div className="flex space-x-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-10 w-24" />
              ))}
            </div>
            <Card className="p-8">
              <Skeleton className="h-8 w-48 mb-6" />
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded" />
                    <div className="flex-1">
                      <Skeleton className="h-4 w-32 mb-2" />
                      <Skeleton className="h-3 w-24" />
                    </div>
                    <Skeleton className="h-8 w-16" />
                    <Skeleton className="h-8 w-16" />
                    <Skeleton className="h-8 w-16" />
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Key Insights Skeleton */}
          <Card className="p-8 mb-8">
            <Skeleton className="h-8 w-48 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-6 bg-slate-50 rounded-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Skeleton className="h-6 w-6" />
                    <Skeleton className="h-5 w-32" />
                  </div>
                  <div className="space-y-2">
                    {[1, 2, 3, 4].map((j) => (
                      <Skeleton key={j} className="h-3 w-full" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
