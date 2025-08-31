"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Zap className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Neuralia</span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#features" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Features
              </a>
              <a href="#use-cases" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Use Cases
              </a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                Testimonials
              </a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
                FAQ
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <a href="#features" className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-base font-medium">
              Features
            </a>
            <a href="#use-cases" className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-base font-medium">
              Use Cases
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-base font-medium">
              Testimonials
            </a>
            <a href="#faq" className="text-gray-600 hover:text-blue-600 block px-3 py-2 text-base font-medium">
              FAQ
            </a>
            <div className="px-3 py-2">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
