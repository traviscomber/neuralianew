import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - N3uralia",
  description: "Artículos técnicos y recursos sobre IA en producción",
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
