import { notFound } from "next/navigation"

// Catch-all route for invalid page segments
// This will return 404 for any page route that doesn't match a real route
export default function CatchAllPage() {
  notFound()
}

export function generateStaticParams() {
  // Empty array means this route won't be statically generated
  // and will trigger dynamic rendering, which will call notFound()
  return []
}
