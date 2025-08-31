"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, Users, TrendingUp } from "lucide-react"

export function HeroSection() {
  const [stats, setStats] = useState({
    agents: 500,
    users: 10000,
    uptime: 99.9,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        agents: prev.agents + Math.floor(Math.random() * 3),
        users: prev.users + Math.floor(Math.random() * 10),
        uptime: 99.9,
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-teal-600/20 animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="mb-8">
          <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-2 text-sm font-medium">
            <Zap className="w-4 h-4 mr-2" />
            Fullstack AI Ecosystem Built by Neuralia
          </Badge>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          AI Agents That
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent block">
            Think & Act Autonomously
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Deploy intelligent AI agents that run on our fullstack ecosystem,
          <span className="text-blue-400 font-semibold"> copiloted by AI</span> for maximum efficiency and autonomous
          decision-making.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold"
          >
            Deploy Your Agent
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gray-600 text-white hover:bg-gray-800 px-8 py-4 text-lg bg-transparent"
          >
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center justify-center mb-2">
              <Zap className="w-8 h-8 text-blue-400 mr-2" />
              <span className="text-3xl font-bold text-white">{stats.agents.toLocaleString()}+</span>
            </div>
            <p className="text-gray-300">Active AI Agents</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-8 h-8 text-purple-400 mr-2" />
              <span className="text-3xl font-bold text-white">{stats.users.toLocaleString()}+</span>
            </div>
            <p className="text-gray-300">Happy Users</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-8 h-8 text-teal-400 mr-2" />
              <span className="text-3xl font-bold text-white">{stats.uptime}%</span>
            </div>
            <p className="text-gray-300">System Uptime</p>
          </div>
        </div>
      </div>
    </section>
  )
}
