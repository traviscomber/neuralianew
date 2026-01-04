"use client"

import { CheckCircle2, Shield, Zap, Globe2, HeadphonesIcon, Building2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function CompetitiveAdvantages() {
  const { language } = useLanguage()

  const advantages = [
    {
      icon: Building2,
      title: language === "es" ? "100% Chileno" : "100% Chilean",
      description:
        language === "es"
          ? "Entendemos la cultura empresarial, regulaciones y necesidades del mercado chileno"
          : "We understand Chilean business culture, regulations and market needs",
    },
    {
      icon: HeadphonesIcon,
      title: language === "es" ? "Soporte 24/7 en Español" : "24/7 Spanish Support",
      description:
        language === "es"
          ? "Equipo local disponible cuando lo necesitas, sin barreras de idioma o zona horaria"
          : "Local team available when you need it, no language or timezone barriers",
    },
    {
      icon: Zap,
      title: language === "es" ? "Deploy en 2-3 Semanas" : "Deploy in 2-3 Weeks",
      description:
        language === "es"
          ? "Implementación rápida vs 3-6 meses de plataformas enterprise globales"
          : "Fast implementation vs 3-6 months of global enterprise platforms",
    },
    {
      icon: Shield,
      title: language === "es" ? "Datos en Chile" : "Data in Chile",
      description:
        language === "es"
          ? "Opción de hosting local para cumplimiento con regulaciones chilenas"
          : "Local hosting option for Chilean compliance requirements",
    },
    {
      icon: Globe2,
      title: language === "es" ? "Integraciones Locales" : "Local Integrations",
      description:
        language === "es"
          ? "Conectores nativos con SII, facturación electrónica y sistemas chilenos"
          : "Native connectors with SII, electronic invoicing and Chilean systems",
    },
    {
      icon: CheckCircle2,
      title: language === "es" ? "Precios Transparentes" : "Transparent Pricing",
      description:
        language === "es"
          ? "Sin costos ocultos ni sorpresas, todo en pesos chilenos"
          : "No hidden costs or surprises, everything in Chilean pesos",
    },
  ]

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            {language === "es" ? "Por Qué Empresas Chilenas Eligen N3uralia" : "Why Chilean Companies Choose N3uralia"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === "es"
              ? "Ventajas competitivas reales vs plataformas globales y regionales"
              : "Real competitive advantages vs global and regional platforms"}
          </p>
        </div>

        {/* Advantages grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border border-gray-200 hover:border-black transition-colors"
            >
              <advantage.icon className="w-10 h-10 text-black mb-4" />
              <h3 className="text-xl font-semibold text-black mb-2">{advantage.title}</h3>
              <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison callout */}
        <div className="mt-16 bg-black text-white p-8 rounded-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              {language === "es" ? "Plataforma Local vs Competidores Globales" : "Local Platform vs Global Competitors"}
            </h3>
            <p className="text-gray-300 mb-6">
              {language === "es"
                ? "Kore.ai, Zapier y Microsoft Power Platform son excelentes para empresas globales, pero N3uralia está optimizada específicamente para el mercado chileno con soporte local, integraciones nativas y precios en CLP."
                : "Kore.ai, Zapier and Microsoft Power Platform are excellent for global enterprises, but N3uralia is specifically optimized for the Chilean market with local support, native integrations and pricing in CLP."}
            </p>
            <button className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors">
              {language === "es" ? "Ver Comparativa Completa" : "See Full Comparison"}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
