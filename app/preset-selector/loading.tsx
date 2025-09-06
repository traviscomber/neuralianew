"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function PresetSelectorLoading() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Skeleton */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <Skeleton className="h-8 w-80 mb-2" />
              <Skeleton className="h-4 w-96" />
            </div>
            <div className="flex items-center space-x-4">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-40" />
            </div>
          </div>

          {/* Filters Skeleton */}
          <Card className="mb-8">
            <CardHeader>
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-4 w-64" />
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Skeleton className="h-4 w-16 mb-2" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div>
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="flex items-end">
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Preset Selection Skeleton */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <Skeleton className="h-6 w-40" />
                  <Skeleton className="h-4 w-80" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="p-6 border-2 rounded-lg">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <Skeleton className="w-12 h-12 rounded-lg" />
                            <div>
                              <Skeleton className="h-6 w-48 mb-2" />
                              <Skeleton className="h-4 w-80 mb-2" />
                              <div className="flex items-center space-x-2">
                                <Skeleton className="h-6 w-20" />
                                <Skeleton className="h-6 w-16" />
                                <Skeleton className="h-6 w-24" />
                                <Skeleton className="h-6 w-32" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Skeleton className="h-4 w-32 mb-2" />
                            <div className="space-y-2">
                              {[1, 2, 3, 4].map((j) => (
                                <div key={j} className="flex items-center justify-between">
                                  <Skeleton className="h-3 w-20" />
                                  <Skeleton className="h-3 w-12" />
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <Skeleton className="h-4 w-32 mb-2" />
                            <div className="space-y-2">
                              {[1, 2].map((j) => (
                                <div key={j} className="flex items-center justify-between">
                                  <Skeleton className="h-3 w-24" />
                                  <Skeleton className="h-3 w-16" />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Details Skeleton */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <Skeleton className="h-6 w-40" />
                  <Skeleton className="h-4 w-60" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Skeleton className="h-4 w-24 mb-2" />
                      <div className="space-y-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex items-start space-x-2">
                            <Skeleton className="w-4 h-4 mt-0.5" />
                            <Skeleton className="h-3 w-full" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Skeleton className="h-12 w-full" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
