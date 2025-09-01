"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bot, MessageSquare, Cog, Zap, Globe, Building } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Bot,
      title: "AI Agents & Automations",
      description:
        "Agentes inteligentes que automatizan procesos complejos, toman decisiones y aprenden continuamente de cada interacción para optimizar resultados.",
      badge: "24/7 Active",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      borderGradient: "from-blue-500/30 to-cyan-500/30",
    },
    {
      icon: MessageSquare,
      title: "Multichannel",
      description:
        "Integración perfecta en WhatsApp, web, móvil y redes sociales. Una experiencia unificada que mantiene contexto en todos los canales.",
      badge: "Omnichannel",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
      borderGradient: "from-purple-500/30 to-pink-500/30",
    },
    {
      icon: Cog,
      title: "Full Stack AI Systems",
      description:
        "Soluciones completas desde el frontend hasta la infraestructura, con modelos de IA personalizados y arquitectura escalable enterprise.",
      badge: "11+ Industries",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
      borderGradient: "from-orange-500/30 to-red-500/30",
    },
  ]

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,119,198,0.2),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Soluciones que
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              transforman negocios
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Implementamos tecnología de inteligencia artificial que se adapta a las necesidades específicas de tu
            industria y escala con tu crecimiento.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br ${feature.bgGradient} border-2 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300 group relative overflow-hidden`}
              style={{
                borderImage: `linear-gradient(135deg, ${feature.borderGradient.replace("from-", "").replace("to-", "").replace("/", ", ")}) 1`,
              }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <CardContent className="p-8 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <Badge
                    variant="secondary"
                    className={`bg-gradient-to-r ${feature.bgGradient} border-0 text-white font-medium`}
                  >
                    {feature.badge}
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                  {feature.title}
                </h3>

                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                  {feature.description}
                </p>

                {/* Additional Icons */}
                <div className="flex items-center gap-2 mt-6 opacity-60 group-hover:opacity-100 transition-opacity">
                  {index === 0 && (
                    <>
                      <Bot className="w-4 h-4 text-blue-400" />
                      <Zap className="w-4 h-4 text-cyan-400" />
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <Globe className="w-4 h-4 text-purple-400" />
                      <MessageSquare className="w-4 h-4 text-pink-400" />
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <Building className="w-4 h-4 text-orange-400" />
                      <Cog className="w-4 h-4 text-red-400" />
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
