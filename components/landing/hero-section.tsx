"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Sparkles, Users, TrendingUp, Clock, Star } from "lucide-react"
import { HeroChatInterface } from "./hero-chat-interface"

export function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 relative overflow-hidden flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(255,206,84,0.2),transparent_50%)]" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30 transition-colors">
                <Sparkles className="w-4 h-4 mr-2" />
                Tecnología de Vanguardia
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                  Transforma tu negocio con
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  soluciones full stack de IA
                </span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                Implementamos sistemas de inteligencia artificial que automatizan procesos, mejoran la experiencia del
                cliente y aumentan la eficiencia operacional de tu empresa.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-5 h-5 text-blue-400 mr-1" />
                    <span className="text-2xl font-bold text-white">50+</span>
                  </div>
                  <p className="text-sm text-slate-400">Proyectos</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="w-5 h-5 text-green-400 mr-1" />
                    <span className="text-2xl font-bold text-white">250%</span>
                  </div>
                  <p className="text-sm text-slate-400">ROI Promedio</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Clock className="w-5 h-5 text-purple-400 mr-1" />
                    <span className="text-2xl font-bold text-white">24/7</span>
                  </div>
                  <p className="text-sm text-slate-400">Soporte</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                    <span className="text-2xl font-bold text-white">96%</span>
                  </div>
                  <p className="text-sm text-slate-400">Satisfacción</p>
                </CardContent>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Comenzar Proyecto
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white transition-all duration-300 bg-transparent"
              >
                Ver Casos de Éxito
              </Button>
            </div>
          </div>

          {/* Right Content - AI Chat Interface */}
          <div className="lg:pl-8">
            <HeroChatInterface />
          </div>
        </div>
      </div>
    </section>
  )
}
