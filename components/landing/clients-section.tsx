"use client"

import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function ClientsSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Trusted by Industry Leaders",
      subtitle: "Companies worldwide rely on N3uralia's AI solutions",
    },
    es: {
      title: "Confianza de Líderes de la Industria",
      subtitle: "Empresas de todo el mundo confían en las soluciones de IA de N3uralia",
    },
  }

  const t = content[language]

  const clients = [
    {
      name: "N3U360",
      logo: "/logos/n3u360-logo.png",
      description: "Digital transformation platform",
    },
    {
      name: "Rosetta",
      logo: "/logos/rosetta-logo.png",
      description: "Language learning solutions",
    },
    {
      name: "Parrotfy",
      logo: "/logos/parrotfy-logo.png",
      description: "Communication platform",
    },
    {
      name: "EcoSuelo",
      logo: "/logos/ecosuelo-logo.png",
      description: "Environmental solutions",
    },
    {
      name: "HAWO",
      logo: "/logos/hawo-hotel-logo.png",
      description: "Virtual hotel chat rooms",
    },
    {
      name: "AxentAI",
      logo: "/logos/axentai-logo.jpg",
      description: "AI consulting services",
      grayscale: true,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6">{t.title}</h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">{t.subtitle}</p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative w-32 h-32 flex items-center justify-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={120}
                height={80}
                className={`max-w-full max-h-full object-contain transition-all duration-300 ${
                  client.grayscale ? "filter grayscale hover:grayscale-0" : "group-hover:scale-110"
                }`}
              />

              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                {client.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-600 mb-8">
            {language === "en"
              ? "Ready to join our growing community of successful businesses?"
              : "¿Listo para unirte a nuestra creciente comunidad de empresas exitosas?"}
          </p>
          <a
            href="https://wa.me/56940946660?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20N3uralia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            {language === "en" ? "Get Started Today" : "Comenzar Hoy"}
          </a>
        </div>
      </div>
    </section>
  )
}
