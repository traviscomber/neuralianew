import type { ReactNode } from "react"
import { SolutionsCapabilityScrollGlow } from "@/components/solutions-capability-scroll-glow"
import "../soluciones/section02-redo.css"
import "../soluciones/section03.css"
import "../soluciones/section04-redo.css"

export default function SolutionsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SolutionsCapabilityScrollGlow />
      {children}
    </>
  )
}
