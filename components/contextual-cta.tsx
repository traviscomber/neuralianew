"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ContextualCTAProps {
  primary: string
  secondary: string
  primaryLink: string
  secondaryLink: string
  context?: "hero" | "capabilities" | "methodology" | "footer"
}

export function ContextualCTA({
  primary,
  secondary,
  primaryLink,
  secondaryLink,
  context = "hero",
}: ContextualCTAProps) {
  const containerClasses = {
    hero: "gap-4",
    capabilities: "gap-3",
    methodology: "gap-4",
    footer: "gap-4",
  }

  const primaryClasses = {
    hero: "px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2",
    capabilities: "px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 text-sm",
    methodology: "px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2",
    footer: "px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2",
  }

  const secondaryClasses = {
    hero: "px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors text-center",
    capabilities: "px-6 py-2.5 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors text-center text-sm",
    methodology: "px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors text-center",
    footer: "px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors text-center",
  }

  return (
    <div className={`flex flex-col sm:flex-row ${containerClasses[context]} justify-center w-full`}>
      <Link href={primaryLink} className={primaryClasses[context]}>
        {primary}
        <ArrowRight className="w-4 h-4" />
      </Link>
      <Link href={secondaryLink} className={secondaryClasses[context]}>
        {secondary}
      </Link>
    </div>
  )
}

// Variant for inline CTAs (single button)
export function ContextualCTAInline({
  label,
  href,
  variant = "primary",
}: {
  label: string
  href: string
  variant?: "primary" | "secondary"
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
        variant === "primary"
          ? "bg-primary text-primary-foreground hover:bg-primary/90"
          : "border border-primary text-primary hover:bg-primary/5"
      }`}
    >
      {label}
      <ArrowRight className="w-4 h-4" />
    </Link>
  )
}
