"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Zap, Brain } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Powered by Vibe Coding
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Transform Your Business with <span className="gradient-text">AI Solutions</span>
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Neuralia delivers cutting-edge AI agents and automation tools that revolutionize how businesses operate.
            Experience the power of vibe coding and intelligent automation.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button size="lg" className="group">
              Start Your AI Journey
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Brain className="h-5 w-5 text-primary" />
              <span>AI-Powered Intelligence</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Zap className="h-5 w-5 text-primary" />
              <span>Lightning Fast Deployment</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Sparkles className="h-5 w-5 text-primary" />
              <span>Vibe Coding Innovation</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
