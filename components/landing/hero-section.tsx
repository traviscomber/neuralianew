"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Play, Bot, Code, Zap, Star } from "lucide-react"
import { ChatWidget } from "@/components/chat/chat-widget"
import { HeroChatInterface } from "./hero-chat-interface"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [activeTab, setActiveTab] = useState("chat")
  const [isChatOpen, setIsChatOpen] = useState(false)

  const handleStartChat = () => {
    setIsChatOpen(true)
  }

  return (
    <section
      id="hero"
      data-section="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Clean Background with Subtle Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Trust Badge */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100 font-medium">
                <Star className="w-3 h-3 mr-1 fill-current" />
                Líder en Chile
              </Badge>
              <Badge className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 font-medium">
                <Code className="w-3 h-3 mr-1" />
                Full Stack AI
              </Badge>
              <Badge className="bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100 font-medium">
                <Zap className="w-3 h-3 mr-1" />
                Enterprise Ready
              </Badge>
            </div>

            {/* Main Headline - Scale AI Style */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-slate-900">
                Acelera tu negocio con{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  IA Full Stack
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Desarrollamos ecosistemas tecnológicos completos que transforman empresas con inteligencia artificial de
                vanguardia.
              </p>
            </div>

            {/* Value Props - Clean List */}
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-3 text-slate-700">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-lg font-medium">Plataformas completas: Frontend + Backend + IA</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-slate-700">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-lg font-medium">Arquitectura enterprise escalable</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-slate-700">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-lg font-medium">Soporte técnico especializado</span>
              </div>
            </div>
          </div>

          {/* Right Column - Clean Demo Interface */}
          <div className="relative">
            <Card className="bg-white border border-slate-200 shadow-2xl shadow-slate-900/10 rounded-2xl overflow-hidden">
              <CardContent className="p-0">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-slate-50 border-b border-slate-200 rounded-none">
                    <TabsTrigger
                      value="chat"
                      className="data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm font-semibold"
                    >
                      <Bot className="w-4 h-4 mr-2" />
                      Chat con N3uralia
                    </TabsTrigger>
                    <TabsTrigger
                      value="demo"
                      className="data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm font-semibold"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Demo en vivo
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="chat" className="mt-0">
                    <div className="p-8 space-y-6">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto">
                          <MessageSquare className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-2">Habla con nuestro agente IA</h3>
                          <p className="text-slate-600 leading-relaxed">
                            Conecta directamente con nuestro asistente inteligente especializado en soluciones full
                            stack. Respuesta inmediata las 24 horas.
                          </p>
                        </div>
                      </div>

                      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                        <div className="flex items-center justify-center space-x-3 text-sm">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                          <span className="text-emerald-700 font-semibold">Agente IA disponible</span>
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                          <span className="text-emerald-700 font-semibold">Respuesta inmediata</span>
                        </div>
                      </div>

                      <Button
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white border-0 shadow-lg font-semibold py-4 text-lg rounded-lg"
                        onClick={handleStartChat}
                      >
                        <MessageSquare className="w-5 h-5 mr-2" />
                        Iniciar conversación con nuestro agente
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="demo" className="mt-0">
                    <HeroChatInterface />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <ChatWidget isOpen={isChatOpen} onToggle={setIsChatOpen} />
    </section>
  )
}
