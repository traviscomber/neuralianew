'use client';

import Link from "next/link";
import { ArrowRight, Zap, TrendingUp, Lightbulb } from "lucide-react";
import type { Locale } from "@/content/dictionaries";
import type { CaseStudy } from "@/content/caseStudies";
import { t2 } from "@/content/caseStudies";

const iconMap: { [key: string]: any } = {
  "Agriculture": Zap,
  "Educación": TrendingUp,
  "Property Management": Lightbulb,
};

export function CaseStudyCard({ caseStudy, locale }: { caseStudy: CaseStudy; locale: Locale }) {
  const industry = t2(locale, caseStudy.industry);
  const IconComponent = iconMap[industry] || Zap;
  
  return (
    <Link href={`/${locale}/case-studies/${caseStudy.slug}`}>
      <div className="h-full group cursor-pointer">
        <div className="relative p-6 h-full rounded-xl border border-border bg-gradient-to-br from-card via-card to-muted/20 hover:border-primary/50 hover:from-card hover:via-primary/5 transition-all duration-300 hover:shadow-lg overflow-hidden">
          {/* Background gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col h-full">
            {/* Vertical tag badge */}
            <div className="mb-3 inline-block">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/15 text-primary">
                {t2(locale, caseStudy.verticalTag)}
              </span>
            </div>

            {/* Header with icon and category */}
            <div className="flex items-start justify-between mb-4">
              <div className="inline-flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                  {t2(locale, caseStudy.verticalTag)}
                </span>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-2 group-hover:translate-x-0">
                <ArrowRight className="w-5 h-5 text-primary" />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
              {t2(locale, caseStudy.title)}
            </h3>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors line-clamp-3">
              {t2(locale, caseStudy.summary)}
            </p>

            {/* Highlights - Two key metrics */}
            <div className="space-y-3 mb-6 flex-1">
              {caseStudy.highlights.slice(0, 2).map((h) => (
                <div key={h.label.es} className="flex justify-between items-center p-3 rounded-lg bg-muted/40 group-hover:bg-muted/60 transition-colors">
                  <span className="text-xs text-muted-foreground font-medium">
                    {t2(locale, h.label)}
                  </span>
                  <span className="text-sm font-bold text-primary">
                    {t2(locale, h.value)}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA - appears on hover */}
            <div className="flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
              <span>{locale === "es" ? "Ver caso completo" : "View full case"}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
