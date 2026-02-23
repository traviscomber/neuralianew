"use client"

import { clientsAndResults } from "@/app/constants/content"

export function ClientsSection() {
  return (
    <section className="py-16 px-4 bg-background border-y border-border/40">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {clientsAndResults.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Más de 50 sistemas en producción. Empresas que ya automatizaron, mejoraron y crecieron.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {clientsAndResults.clients.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center p-6 rounded-lg border border-border/50 bg-card hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group"
            >
              {/* Placeholder for real logo - using initials for demo */}
              <div className="flex flex-col items-center gap-2 group-hover:scale-110 transition-transform">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-white font-bold text-sm">
                  {client.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </div>
                <div className="text-center">
                  <p className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors">
                    {client.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{client.industry}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientsAndResults.results.map((result, i) => (
            <div
              key={i}
              className="border border-border/60 rounded-lg p-6 bg-gradient-to-br from-primary/5 to-background hover:from-primary/10 transition-all duration-300 group text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform origin-center">
                {result.metric}
              </div>
              <p className="text-sm font-semibold text-foreground mb-3">{result.label}</p>
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <span>{result.industry}</span>
                <span>•</span>
                <span>{result.timeline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
