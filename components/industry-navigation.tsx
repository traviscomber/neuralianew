import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Locale } from "@/content/dictionaries"
import { SECTORS } from "@/content/sectors"

interface IndustryNavigationProps {
  locale: Locale
}

export function IndustryNavigation({ locale }: IndustryNavigationProps) {
  const isES = locale === "es"
  
  // Show top 3 most relevant industries
  const topIndustries = SECTORS.slice(0, 3)

  return (
    <section className="py-16 px-4 border-t border-border bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            {isES ? "Soluciones por Industria" : "Solutions by Industry"}
          </h2>
          <p className="text-muted-foreground">
            {isES 
              ? "Explora cómo N3uralia se adapta a tu sector."
              : "Explore how N3uralia adapts to your industry."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {topIndustries.map((sector, index) => {
            const Icon = sector.icon
            const title = isES ? sector.titleES : sector.titleEN
            const desc = isES ? sector.descES : sector.descEN
            
            // Determine if this is top performing industry
            const isHighlight = index === 0

            return (
              <Link
                key={sector.titleES}
                href={`/${locale}/solutions#${sector.titleES.toLowerCase().replace(/\s+/g, "-")}`}
                className={`group p-6 rounded-lg border transition-all hover:shadow-lg hover:-translate-y-1 ${
                  isHighlight
                    ? "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/40 hover:border-primary/60"
                    : "bg-card border-border/50 hover:border-primary/30"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${
                    isHighlight
                      ? "bg-primary/20"
                      : "bg-muted"
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      isHighlight
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`} />
                  </div>
                  <ArrowRight className={`w-5 h-5 transition-all ${
                    isHighlight
                      ? "text-primary opacity-100 group-hover:translate-x-1"
                      : "text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                  }`} />
                </div>

                <h3 className={`font-semibold mb-2 ${
                  isHighlight
                    ? "text-lg text-foreground"
                    : "text-foreground group-hover:text-primary transition-colors"
                }`}>
                  {title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {desc}
                </p>

                {isHighlight && (
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    {isES ? "Más Popular" : "Most Popular"}
                  </div>
                )}
              </Link>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Link
            href={`/${locale}/solutions`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary/40 text-primary rounded-lg font-semibold hover:border-primary hover:bg-primary/5 transition-all"
          >
            {isES ? "Ver Todas las Soluciones" : "View All Solutions"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
