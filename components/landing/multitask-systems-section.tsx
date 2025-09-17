"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function MultitaskSystemsSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Multitask Systems",
      subtitle: "Customized Full Stack Development",
      description:
        "From intelligent chatbots to enterprise automation, we deliver AI solutions that drive real business results.",
      cards: [
        {
          title: "Data Source",
          description: "We use your cloud or create new Database from scratch",
          icons: [
            { name: "Google Drive", src: "/icons/google-drive.png", alt: "Google Drive" },
            { name: "Supabase", src: "/icons/supabase.png", alt: "Supabase" },
            { name: "PostgreSQL", src: "/tech-icons/postgresql-logo.png", alt: "PostgreSQL" },
          ],
        },
        {
          title: "AI API Connection",
          description: "Connect or create AI tool and process data",
          icons: [
            { name: "Manus", src: "/icons/manus.png", alt: "Manus", size: "w-16 h-16" },
            { name: "Claude", src: "/icons/claude.png", alt: "Claude" },
            { name: "ChatGPT", src: "/icons/chatgpt.png", alt: "ChatGPT" },
          ],
        },
        {
          title: "Multiple Outputs",
          description: "Collect results or create an automated action",
          icons: [
            { name: "WhatsApp", src: "/tech-icons/whatsapp-logo.png", alt: "WhatsApp" },
            { name: "Telegram", src: "/tech-icons/telegram-logo.png", alt: "Telegram" },
            { name: "LinkedIn", src: "/icons/linkedin.png", alt: "LinkedIn" },
          ],
        },
      ],
    },
    es: {
      title: "Sistemas Multitarea",
      subtitle: "Desarrollo Full Stack Personalizado",
      description:
        "Desde chatbots inteligentes hasta automatización empresarial, entregamos soluciones de IA que generan resultados comerciales reales.",
      cards: [
        {
          title: "Fuente de Datos",
          description: "Usamos tu nube o creamos una nueva Base de Datos desde cero",
          icons: [
            { name: "Google Drive", src: "/icons/google-drive.png", alt: "Google Drive" },
            { name: "Supabase", src: "/icons/supabase.png", alt: "Supabase" },
            { name: "PostgreSQL", src: "/tech-icons/postgresql-logo.png", alt: "PostgreSQL" },
          ],
        },
        {
          title: "Conexión API de IA",
          description: "Conectamos o creamos herramientas de IA y procesamos datos",
          icons: [
            { name: "Manus", src: "/icons/manus.png", alt: "Manus", size: "w-16 h-16" },
            { name: "Claude", src: "/icons/claude.png", alt: "Claude" },
            { name: "ChatGPT", src: "/icons/chatgpt.png", alt: "ChatGPT" },
          ],
        },
        {
          title: "Múltiples Salidas",
          description: "Recopilamos resultados o creamos una acción automatizada",
          icons: [
            { name: "WhatsApp", src: "/tech-icons/whatsapp-logo.png", alt: "WhatsApp" },
            { name: "Telegram", src: "/tech-icons/telegram-logo.png", alt: "Telegram" },
            { name: "LinkedIn", src: "/icons/linkedin.png", alt: "LinkedIn" },
          ],
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6">{t.title}</h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-blue-600 mb-8">{t.subtitle}</h3>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">{t.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.cards.map((card, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">{card.title}</h4>
                <p className="text-gray-600 mb-8 leading-relaxed">{card.description}</p>
                <div className="flex justify-center items-center gap-6">
                  {card.icons.map((icon, iconIndex) => (
                    <div key={iconIndex} className="transition-transform duration-300 hover:scale-110">
                      <Image
                        src={icon.src || "/placeholder.svg"}
                        alt={icon.alt}
                        width={48}
                        height={48}
                        className={`${icon.size || "w-12 h-12"} object-contain`}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
