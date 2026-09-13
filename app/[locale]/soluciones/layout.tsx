import type { ReactNode } from "react"
import { SolutionsCapabilityScrollGlow } from "@/components/solutions-capability-scroll-glow"
import "./section02-redo.css"
import "./section03.css"
import "./section04-redo.css"

export default function SolutionsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SolutionsCapabilityScrollGlow />
      {children}
    </>
  )
}
