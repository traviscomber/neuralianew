"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function MinimalistCore() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations]

  const systems = [
    {
      title: t.conversational,
      description: t.conversationalDesc,
      icon: "💬",
    },
    {
      title: t.automation,
      description: t.automationDesc,
      icon: "⚡",
    },
    {
      title: t.integration,
      description: t.integrationDesc,
      icon: "🔗",
    },
    {
      title: t.analytics,
      description: t.analyticsDesc,
      icon: "📊",
    },
  ]

  return (
    <section className="bg-white py-24 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">{t.whatWeDo}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.whatWeDoDescription}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {systems.map((system, i) => (
            <div key={i} className="p-8 border border-gray-200 rounded-lg hover:border-gray-400 transition-colors">
              <div className="text-4xl mb-4">{system.icon}</div>
              <h3 className="text-2xl font-bold text-black mb-3">{system.title}</h3>
              <p className="text-gray-600 leading-relaxed">{system.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
