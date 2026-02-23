import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export type CTAVariant = "primary" | "secondary" | "tertiary"

interface CTAButtonProps {
  href: string
  label: string
  variant?: CTAVariant
  icon?: boolean
  className?: string
  target?: "_blank" | "_self"
  rel?: string
}

/**
 * Standardized CTA Button Component
 * Ensures consistent styling and behavior across all N3uralia pages
 */
export function CTAButton({
  href,
  label,
  variant = "primary",
  icon = true,
  className = "",
  target,
  rel,
}: CTAButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold transition-all rounded-lg"

  const variantStyles = {
    primary: "px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 active:scale-95",
    secondary: "px-8 py-3 border border-primary text-primary hover:bg-primary/5",
    tertiary: "inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold",
  }

  return (
    <Link
      href={href}
      className={cn(baseStyles, variantStyles[variant], className)}
      target={target}
      rel={rel}
    >
      <span>{label}</span>
      {icon && <ArrowRight className="w-4 h-4" />}
    </Link>
  )
}

/**
 * CTA Group - For layouts with multiple CTAs (primary + secondary)
 */
export function CTAGroup({
  primary,
  secondary,
  className = "",
  layout = "horizontal",
}: {
  primary: CTAButtonProps
  secondary?: CTAButtonProps
  className?: string
  layout?: "horizontal" | "vertical"
}) {
  const layoutClass = layout === "vertical" ? "flex-col" : "flex-col sm:flex-row"

  return (
    <div className={cn(`flex ${layoutClass} gap-4 w-full`, className)}>
      <CTAButton {...primary} />
      {secondary && <CTAButton {...secondary} variant="secondary" />}
    </div>
  )
}
