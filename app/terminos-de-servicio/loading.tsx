import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation skeleton */}
      <div className="h-16 bg-background/80 backdrop-blur-sm border-b" />

      {/* Main content skeleton */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Skeleton className="h-12 w-96 mb-8" />
        <Skeleton className="h-4 w-48 mb-8" />

        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="mb-8">
            <Skeleton className="h-8 w-64 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-4" />
          </div>
        ))}
      </div>

      {/* Footer skeleton */}
      <div className="h-32 bg-muted" />
    </div>
  )
}
