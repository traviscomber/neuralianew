import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <Skeleton className="h-12 w-96 mx-auto mb-4 bg-gray-700" />
          <Skeleton className="h-6 w-64 mx-auto bg-gray-700" />
        </div>

        <div className="space-y-8">
          <Skeleton className="h-48 w-full bg-gray-700" />
          <Skeleton className="h-64 w-full bg-gray-700" />
          <Skeleton className="h-32 w-full bg-gray-700" />
        </div>
      </div>
    </div>
  )
}
