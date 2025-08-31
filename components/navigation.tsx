"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Neuralia
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#features" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">
                Características
              </Link>
              <Link href="#use-cases" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">
                Casos de Uso
              </Link>
              <Link href="#team" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">
                Equipo
              </Link>
              <Link href="#faq" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">
                FAQ
              </Link>
            </div>
          </div>

          {/* WhatsApp Contact */}
          <div className="hidden md:block">
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <a
                href="https://wa.me/56912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none focus:text-purple-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="#features"
                className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Características
              </Link>
              <Link
                href="#use-cases"
                className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Casos de Uso
              </Link>
              <Link
                href="#team"
                className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Equipo
              </Link>
              <Link
                href="#faq"
                className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <div className="px-3 py-2">
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <a
                    href="https://wa.me/56912345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
