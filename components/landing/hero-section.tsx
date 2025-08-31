"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, Zap, Brain, Rocket } from "lucide-react"
import { AuthModal } from "@/components/auth/auth-modal"
import { ThemeToggle } from "@/components/theme-toggle"

export function HeroSection() {
  const [showAuthModal, setShowAuthModal] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
            <Brain className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">Neuralia</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-white/80 hover:text-white transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-white/80 hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors">
            About
          </a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">
            Contact
          </a>
          <ThemeToggle />
          <Button
            onClick={() => setShowAuthModal(true)}
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
          >
            Sign In
          </Button>
        </div>

        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button
            onClick={() => setShowAuthModal(true)}
            variant="outline"
            size="sm"
            className="border-white/20 text-white hover:bg-white/10"
          >
            Sign In
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm text-white">AI Development Factory</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Custom AI Solutions
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              From Concept to Production
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Your dedicated AI development team. We build, deploy, and scale intelligent solutions tailored to your
            business needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Button
              onClick={() => setShowAuthModal(true)}
              size="lg"
              className="bg-white text-indigo-900 hover:bg-white/90 px-8 py-4 text-lg font-semibold"
            >
              Start Building
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-xl mb-4 mx-auto">
                <Zap className="w-6 h-6 text-blue-300" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-white/70">AI Models Deployed</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-xl mb-4 mx-auto">
                <Brain className="w-6 h-6 text-purple-300" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-white/70">Uptime Guarantee</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-pink-500/20 rounded-xl mb-4 mx-auto">
                <Rocket className="w-6 h-6 text-pink-300" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">24h</div>
              <div className="text-white/70">Average Deployment</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-400 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/4 w-5 h-5 bg-pink-400 rounded-full animate-bounce"></div>

      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </div>
  )
}
