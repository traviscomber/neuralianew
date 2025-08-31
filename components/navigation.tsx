"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, X, Zap } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">Neuralia</span>
            <Badge variant="secondary" className="ml-2 text-xs">
              Vibe
            </Badge>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#products" className="text-gray-700 hover:text-blue-600">
              Products
            </a>
            <a href="#tech" className="text-gray-700 hover:text-blue-600">
              Tech
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">
              About
            </a>
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
              Start Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#products" onClick={() => setIsOpen(false)}>
                Products
              </a>
              <a href="#tech" onClick={() => setIsOpen(false)}>
                Tech
              </a>
              <a href="#about" onClick={() => setIsOpen(false)}>
                About
              </a>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                Start Free
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
