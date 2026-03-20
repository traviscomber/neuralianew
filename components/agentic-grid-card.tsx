import React from "react"

interface AgenticGridCardProps {
  title: string
  description: string
}

export function AgenticGridCard({ title, description }: AgenticGridCardProps) {
  return (
    <div className="p-6 border border-border rounded-lg bg-card hover:bg-card/80 transition-all hover:border-primary/50 hover:shadow-md">
      <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  )
}
