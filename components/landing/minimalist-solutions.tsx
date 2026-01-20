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
    <section className="bg-white py-20 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-4">
          {language === "es" ? "Nuestras Soluciones" : "Our Solutions"}
        </p>
        <h2 className="text-3xl font-bold text-black mb-12">
          {language === "es" ? "Productos que Desarrollamos" : "Products We Build"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <a
              key={solution.name}
              href={solution.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 p-8 bg-gray-50 hover:bg-white hover:border-black transition-all cursor-pointer group"
            >
              <p className="text-gray-700 font-semibold text-lg">{solution.name}</p>
              <p className="text-gray-500 text-sm mt-2">{solution.description}</p>
              {solution.ceo && (
                <p className="text-gray-400 text-xs mt-3">
                  <span className="font-medium">{language === "es" ? "CEO: " : "CEO: "}</span>
                  {solution.ceo}
                </p>
              )}
              <p className="text-gray-400 text-xs mt-4 group-hover:text-black transition-colors">
                {language === "es" ? "Visitar Sitio →" : "Visit Site →"}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
