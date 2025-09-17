"use client"

import { useLanguage } from "@/lib/language-context"

export function MultitaskSystemsSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Multitask Systems",
      subtitle: "Customized Full Stack Development",
      description:
        "From intelligent chatbots to enterprise automation, we deliver AI solutions that drive real business results.",
      dataSource: {
        title: "Data Source",
        description: "We use your cloud or create new Database from scratch",
        icons: [
          { src: "/icons/google-drive.png", alt: "Google Drive" },
          { src: "/tech-icons/supabase-logo.svg", alt: "Supabase" },
          { src: "/tech-icons/postgresql-logo.png", alt: "PostgreSQL" },
        ],
      },
      apiConnection: {
        title: "AI API Connection",
        description: "Connect or create AI tool and process data",
        icons: [
          { src: "/icons/manus.png", alt: "Manus" },
          { src: "/icons/chatgpt.png", alt: "ChatGPT" },
          { src: "/tech-icons/openai-logo.png", alt: "OpenAI" },
        ],
      },
      multipleOutputs: {
        title: "Multiple Outputs",
        description: "Collect results or create an automated action",
        icons: [
          { src: "/tech-icons/whatsapp-logo.png", alt: "WhatsApp" },
          { src: "/tech-icons/telegram-logo.png", alt: "Telegram" },
          { src: "/icons/linkedin.png", alt: "LinkedIn" },
        ],
      },
    },
    es: {
      title: "Sistemas Multitarea",
      subtitle: "Desarrollo Full Stack Personalizado",
      description:
        "Desde chatbots inteligentes hasta automatización empresarial, entregamos soluciones de IA que generan resultados comerciales reales.",
      dataSource: {
        title: "Fuente de Datos",
        description: "Usamos tu nube o creamos una nueva Base de Datos desde cero",
        icons: [
          { src: "/icons/google-drive.png", alt: "Google Drive" },
          { src: "/tech-icons/supabase-logo.svg", alt: "Supabase" },
          { src: "/tech-icons/postgresql-logo.png", alt: "PostgreSQL" },
        ],
      },
      apiConnection: {
        title: "Conexión API de IA",
        description: "Conectamos o creamos herramientas de IA y procesamos datos",
        icons: [
          { src: "/icons/manus.png", alt: "Manus" },
          { src: "/icons/chatgpt.png", alt: "ChatGPT" },
          { src: "/tech-icons/openai-logo.png", alt: "OpenAI" },
        ],
      },
      multipleOutputs: {
        title: "Múltiples Salidas",
        description: "Recopilamos resultados o creamos una acción automatizada",
        icons: [
          { src: "/tech-icons/whatsapp-logo.png", alt: "WhatsApp" },
          { src: "/tech-icons/telegram-logo.png", alt: "Telegram" },
          { src: "/icons/linkedin.png", alt: "LinkedIn" },
        ],
      },
    },
  }

  const t = content[language]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6">{t.title}</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-600 mb-8">{t.subtitle}</h3>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">{t.description}</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Data Source Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">{t.dataSource.title}</h4>
            <p className="text-gray-600 mb-8 leading-relaxed">{t.dataSource.description}</p>
            <div className="flex justify-center items-center gap-6">
              {t.dataSource.icons.map((icon, index) => (
                <img
                  key={index}
                  src={icon.src || "/placeholder.svg"}
                  alt={icon.alt}
                  className="w-12 h-12 object-contain hover:scale-110 transition-transform duration-300"
                />
              ))}
            </div>
          </div>

          {/* AI API Connection Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">{t.apiConnection.title}</h4>
            <p className="text-gray-600 mb-8 leading-relaxed">{t.apiConnection.description}</p>
            <div className="flex justify-center items-center gap-6">
              {t.apiConnection.icons.map((icon, index) => (
                <img
                  key={index}
                  src={icon.src || "/placeholder.svg"}
                  alt={icon.alt}
                  className="w-12 h-12 object-contain hover:scale-110 transition-transform duration-300"
                />
              ))}
            </div>
          </div>

          {/* Multiple Outputs Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
            <h4 className="text-2xl font-bold text-gray-800 mb-4">{t.multipleOutputs.title}</h4>
            <p className="text-gray-600 mb-8 leading-relaxed">{t.multipleOutputs.description}</p>
            <div className="flex justify-center items-center gap-6">
              {t.multipleOutputs.icons.map((icon, index) => (
                <img
                  key={index}
                  src={icon.src || "/placeholder.svg"}
                  alt={icon.alt}
                  className="w-12 h-12 object-contain hover:scale-110 transition-transform duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
