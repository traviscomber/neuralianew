"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MessageSquare, Zap, Users, Globe, CheckCircle, TrendingUp } from "lucide-react"
import { HeroChatInterface } from "./hero-chat-interface"
import { ChatWidget } from "@/components/chat/chat-widget"

export function HeroSection() {
  const [activeTab, setActiveTab] = useState("chat")

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-3 lg:gap-4">
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-3 py-1">
                <CheckCircle className="w-3 h-3 mr-1" />
                Integración WhatsApp Certificada
              </Badge>
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-3 py-1">
                <Zap className="w-3 h-3 mr-1" />
                OpenAI GPT-4 Partner
              </Badge>
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30 px-3 py-1">
                <Globe className="w-3 h-3 mr-1" />
                Presencia Global
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-white">Full Stack</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  IA Systems
                </span>
              </h1>

              <div className="space-y-2">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-300 font-semibold">
                  FULL STACK Engineering
                </p>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-purple-300 font-semibold">
                  Agentic Fleet + Custom AGENTS
                </p>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-green-300 font-semibold">
                  Next Level AI TOOLS for Your Business
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Transformamos tu negocio con{" "}
              <span className="text-blue-400 font-semibold">agentes conversacionales inteligentes</span> que realmente
              entienden a tus usuarios. Desde automatización empresarial hasta integración completa con WhatsApp, CRM y
              ERP. <span className="text-purple-400 font-semibold">Soporte 24/7 global</span> con equipos en Chile,
              Singapur y Rusia.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:flex gap-3 lg:gap-4">
              <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm flex-1">
                <CardContent className="p-3 lg:p-4 text-center">
                  <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5 text-green-400 mx-auto mb-1" />
                  <div className="text-lg lg:text-xl font-bold text-white">250%</div>
                  <div className="text-xs lg:text-sm text-slate-400">ROI Promedio</div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm flex-1">
                <CardContent className="p-3 lg:p-4 text-center">
                  <Users className="w-4 h-4 lg:w-5 lg:h-5 text-blue-400 mx-auto mb-1" />
                  <div className="text-lg lg:text-xl font-bold text-white">50+</div>
                  <div className="text-xs lg:text-sm text-slate-400">Proyectos Exitosos</div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm flex-1">
                <CardContent className="p-3 lg:p-4 text-center">
                  <Globe className="w-4 h-4 lg:w-5 lg:h-5 text-purple-400 mx-auto mb-1" />
                  <div className="text-lg lg:text-xl font-bold text-white">24/7</div>
                  <div className="text-xs lg:text-sm text-slate-400">Soporte Global</div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm flex-1">
                <CardContent className="p-3 lg:p-4 text-center">
                  <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-400 mx-auto mb-1" />
                  <div className="text-lg lg:text-xl font-bold text-white">95%</div>
                  <div className="text-xs lg:text-sm text-slate-400">Satisfacción</div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 min-h-[48px]"
                onClick={() =>
                  window.open(
                    "https://wa.me/56940946660?text=Hola%20N3uralia,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20de%20IA",
                    "_blank",
                  )
                }
              >
                <MessageSquare className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                Hablar con Experto
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent min-h-[48px]"
                onClick={() => setActiveTab("demo")}
              >
                <Zap className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                Ver Demo en Vivo
              </Button>
            </div>
          </div>

          {/* Right Column - Interactive Chat */}
          <div className="lg:pl-8">
            <div className="space-y-4">
              {/* Tab Selector */}
              <div className="flex gap-2">
                <Button
                  variant={activeTab === "chat" ? "default" : "outline"}
                  size="sm"
                  className={`${
                    activeTab === "chat"
                      ? "bg-blue-500 text-white border-0"
                      : "border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                  } transition-all duration-300`}
                  onClick={() => setActiveTab("chat")}
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Chat en Vivo
                </Button>
                <Button
                  variant={activeTab === "demo" ? "default" : "outline"}
                  size="sm"
                  className={`${
                    activeTab === "demo"
                      ? "bg-purple-500 text-white border-0"
                      : "border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
                  } transition-all duration-300`}
                  onClick={() => setActiveTab("demo")}
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Ver Demos
                </Button>
              </div>

              {/* Content */}
              {activeTab === "chat" ? (
                <div className="bg-slate-900/80 border border-slate-700/50 rounded-lg p-6 backdrop-blur-sm">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                      <MessageSquare className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Chat Directo con N3uralia</h3>
                      <p className="text-slate-400 mb-4">
                        Habla directamente con nuestro equipo de expertos en IA. Respuesta garantizada en menos de 1
                        hora.
                      </p>
                      <div className="flex items-center justify-center gap-2 text-green-400 text-sm">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        Equipo disponible 24/7
                      </div>
                    </div>
                    <Button
                      className="bg-green-500 hover:bg-green-600 text-white w-full"
                      onClick={() =>
                        window.open(
                          "https://wa.me/56940946660?text=Hola%20N3uralia,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20de%20IA",
                          "_blank",
                        )
                      }
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Iniciar Chat en WhatsApp
                    </Button>
                  </div>
                </div>
              ) : (
                <HeroChatInterface />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <ChatWidget />
    </section>
  )
}
