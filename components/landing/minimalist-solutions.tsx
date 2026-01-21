"use client"

import { useState } from "react"

export function MinimalistSolutions() {
  const [language] = useState("es")

  const solutions = [
    {
      name: "Mermazero",
      logo: "/logos/mermazero.png",
      description:
        language === "es"
          ? "Optimización industrial: reduce desperdicio en plantas de alimentos con IA en tiempo real"
          : "Industrial optimization: reduce waste in food plants with real-time AI",
      link: "https://mermazero.vercel.app",
    },
    {
      name: "Despega Tu Carrera",
      logo: "/logos/despega.png",
      description:
        language === "es"
          ? "Plataforma de desarrollo profesional y networking"
          : "Professional development and networking platform",
      link: "https://despegatucarrera.com",
    },
    {
      name: "DoubleC Information",
      logo: "/logos/doublec.png",
      description:
        language === "es"
          ? "Sistema de inteligencia de datos y análisis avanzado"
          : "Data intelligence and advanced analytics system",
      link: "https://doublec.information",
    },
    {
      name: "Blackswan Facility Core",
      logo: "/logos/blackswanfc.png",
      description:
        language === "es"
          ? "Sistema completo de gestión de campos productivos con IA"
          : "Complete productive field management system with AI",
      link: "https://blackswanfc.vercel.app",
      ceo: "Santiago Colvin",
    },
  ]

  return (
    <section className="bg-background py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
          {language === "es" ? "Nuestras Soluciones" : "Our Solutions"}
        </p>
        <h2 className="h2 text-foreground mb-12">
          {language === "es" ? "Productos que Desarrollamos" : "Products We Build"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <a
              key={solution.name}
              href={solution.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border p-8 bg-card hover:bg-card/80 hover:border-primary/40 transition-all cursor-pointer group"
            >
              <p className="text-foreground font-semibold text-lg">{solution.name}</p>
              <p className="text-muted-foreground text-sm mt-2">{solution.description}</p>
              {solution.ceo && (
                <p className="text-muted-foreground text-xs mt-3">
                  <span className="font-medium">{language === "es" ? "CEO: " : "CEO: "}</span>
                  {solution.ceo}
                </p>
              )}
              <p className="text-muted-foreground text-xs mt-4 group-hover:text-foreground transition-colors">
                {language === "es" ? "Visitar Sitio →" : "Visit Site →"}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
