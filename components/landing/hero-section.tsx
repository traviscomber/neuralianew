"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Sparkles, Zap, Users, Code, Star } from "lucide-react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse delay-2000" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 animate-bounce delay-1000">
          <Code className="h-8 w-8 text-blue-500/30" />
        </div>
        <div className="absolute top-40 right-32 animate-bounce delay-2000">
          <Star className="h-6 w-6 text-purple-500/30" />
        </div>
        <div className="absolute bottom-32 left-32 animate-bounce delay-3000">
          <Users className="h-10 w-10 text-indigo-500/30" />
        </div>

        {/* Mouse Follower */}
        <div
          className="absolute w-32 h-32 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-xl pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <Badge
            variant="secondary"
            className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 border-0"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            AI Development Factory
            <div className="ml-2 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </Badge>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up delay-200">
          <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent">
            Custom AI Solutions
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
            From Concept to Production
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up delay-400">
          Your dedicated AI development team. We build, deploy, and scale intelligent solutions that transform your
          business.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up delay-600">
          <Button
            size="lg"
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Start Your AI Project
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group hover:bg-accent transition-all duration-300 transform hover:scale-105 bg-transparent"
          >
            <Zap className="mr-2 h-5 w-5 group-hover:text-yellow-500 transition-colors" />
            View Our Work
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up delay-800">
          <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                50+
              </div>
              <div className="text-sm text-muted-foreground">AI Models Deployed</div>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform">
                99.9%
              </div>
              <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-pink-600 mb-2 group-hover:scale-110 transition-transform">
                24h
              </div>
              <div className="text-sm text-muted-foreground">Deployment Time</div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        .delay-600 {
          animation-delay: 0.6s;
        }

        .delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>
    </section>
  )
}
