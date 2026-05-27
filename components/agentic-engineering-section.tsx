import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Dict } from "@/content/dictionaries"
import type { Locale } from "@/content/dictionaries"

interface AgenticEngineeringSectionProps {
  locale: Locale
  d: Dict
}

export function AgenticEngineeringSection({
  locale,
  d,
}: AgenticEngineeringSectionProps) {
  const isES = locale === "es"
  const content = d?.agenticEngineering

  if (!content) {
    console.error("[v0] agenticEngineering content not found for locale:", locale)
    return null
  }

  return (
    <section className="py-24 px-4 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Headline Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
            {content.headline}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            {content.subheadline}
          </p>
        </div>

        {/* Four Value Blocks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            content.humanInLoop,
            content.toolAware,
            content.vendorAgnostic,
            content.builtToShip,
          ].map((block, i) => (
            <div
              key={i}
              className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <div className="w-6 h-6 bg-primary rounded-sm" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">
                {block.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {block.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mini Manifesto */}
        <div className="bg-card border border-border/50 rounded-lg p-8 mb-12">
          <h3 className="text-xl font-bold text-foreground mb-6">
            {isES ? "Nuestro Manifiesto" : "Our Manifesto"}
          </h3>
          <div className="space-y-4">
            {content.manifesto.map((statement, i) => (
              <div
                key={i}
                className="flex items-start gap-4 pb-4 border-b border-border/30 last:border-b-0 last:pb-0"
              >
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-base text-foreground leading-relaxed">
                  {statement}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href={`/${locale}/agentic-systems`}
            className="inline-flex items-center gap-3 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1"
          >
            {content.cta}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

