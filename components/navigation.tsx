"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language } = useLanguage()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#4a4a4a] border-b border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-white text-xl font-bold">N3URALIA</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#agents"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                {language === "en" ? "Agents" : "Agentes"}
              </a>
              <a
                href="#systems"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                {language === "en" ? "Systems" : "Sistemas"}
              </a>
              <a
                href="#products"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                {language === "en" ? "Products" : "Productos"}
              </a>
              <a
                href="#contacts"
                className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              >
                {language === "en" ? "Contacts" : "Contactos"}
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#4a4a4a]">
              <a href="#agents" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
                {language === "en" ? "Agents" : "Agentes"}
              </a>
              <a href="#systems" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
                {language === "en" ? "Systems" : "Sistemas"}
              </a>
              <a href="#products" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
                {language === "en" ? "Products" : "Productos"}
              </a>
              <a href="#contacts" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">
                {language === "en" ? "Contacts" : "Contactos"}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
