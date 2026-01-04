"use client"

import { useLanguage } from "@/lib/language-context"

export function MinimalistClients() {
  const { language } = useLanguage()

  const clients = [
    { name: "EcosueloLab", logo: "/logos/ecosuelo.png" },
    { name: "N3uralia360", logo: "/logos/n3uralia360.png" },
    { name: "Seguralia", logo: "/logos/seguralia.png" },
    { name: "Rosetta", logo: "/logos/rosetta.png" },
    { name: "Backswan Facility Core", logo: "/logos/backswan.png" },
  ]

  return (
    <section className="bg-gray-50 py-20 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-12">
          {language === "es" ? "Empresas que confían en nosotros" : "Companies that trust us"}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center">
          {clients.map((client) => (
            <div key={client.name} className="flex justify-center items-center h-16 px-4">
              <p className="text-gray-400 font-semibold">{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
