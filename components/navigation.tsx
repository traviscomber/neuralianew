"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Zap, Brain, MessageCircle } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Neuralia
              </h1>
              <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-700">
                Vibe Coding
              </Badge>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Características
            </a>
            <a href="#success-cases" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Casos de Éxito
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Testimonios
            </a>
            <a href="#faq" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              FAQ
            </a>
            <a
              href="https://wa.me/56940946660"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
              <Zap className="w-4 h-4 mr-2" />
              Empezar Ahora
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-purple-100"
          >
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                Características
              </a>
              <a href="#success-cases" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                Casos de Éxito
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                Testimonios
              </a>
              <a href="#faq" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                FAQ
              </a>
              <a
                href="https://wa.me/56940946660"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white w-full">
                <Zap className="w-4 h-4 mr-2" />
                Empezar Ahora
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
