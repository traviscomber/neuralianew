import { ReactNode } from "react"
import { SectionBackground } from "./section-background"

interface BillingualSectionProps {
  section: "hero" | "workflow" | "solutions" | "capabilities" | "blog" | "faq"
  borderPosition?: "border-b" | "border-t" | "border-t border-b"
  children: ReactNode
  className?: string
}

export function BillingualSection({
  section,
  borderPosition = "border-b",
  children,
  className = "",
}: BillingualSectionProps) {
  return (
    <SectionBackground section={section} className={`${borderPosition} border-border ${className}`}>
      {children}
    </SectionBackground>
  )
}

interface SectionHeaderProps {
  tag: string
  title: string
  subtitle?: string
  align?: "left" | "center"
  maxWidth?: "2xl" | "3xl" | "4xl"
}

export function SectionHeader({
  tag,
  title,
  subtitle,
  align = "center",
  maxWidth = "3xl",
}: SectionHeaderProps) {
  const containerClass = align === "center" ? "text-center mx-auto" : ""
  const maxWidthClass = `max-w-${maxWidth}`

  return (
    <div className={`${containerClass} ${maxWidthClass}`}>
      <p className="text-primary font-semibold mb-2 text-sm uppercase tracking-wide">{tag}</p>
      <h2 className="text-4xl font-bold text-foreground mb-6 leading-tight">{title}</h2>
      {subtitle && <p className="text-base text-muted-foreground">{subtitle}</p>}
    </div>
  )
}

interface ValueCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="group">
      <div className="bg-card border border-border rounded-lg p-8 h-full hover:border-primary/40 transition-colors">
        <div className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

interface PhilosophyItemProps {
  title: string
  description: string
}

export function PhilosophyItem({ title, description }: PhilosophyItemProps) {
  return (
    <div>
      <h3 className="text-lg font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  )
}
