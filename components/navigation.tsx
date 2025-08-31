"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Brain } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-primary mr-2" />
            <span className="text-xl font-bold gradient-text">Neuralia</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#features"
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Features
              </a>
              <a
                href="#use-cases"
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Use Cases
              </a>
              <a
                href="#testimonials"
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#faq"
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                FAQ
              </a>
              <Button variant="outline" size="sm">
                Get Started
              </Button>
            </div>
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b">
            <a
              href="#features"
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
            >
              Features
            </a>
            <a
              href="#use-cases"
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
            >
              Use Cases
            </a>
            <a
              href="#testimonials"
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
            >
              Testimonials
            </a>
            <a
              href="#faq"
              className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
            >
              FAQ
            </a>
            <div className="px-3 py-2">
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
