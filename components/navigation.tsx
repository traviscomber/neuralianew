"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"
import { Menu, X, MessageCircle } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsOpen(false)
  }

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/56940946660?text=Hola%20N3uralia,%20me%20interesa%20una%20solución%20full%20stack%20con%20IA%20para%20mi%20empresa",
      "_blank",
    )
    setIsOpen(false)
  }

  const navItems = [
    { label: language === "en" ? "Services" : "Servicios", id: "services" },
    { label: language === "en" ? "Solutions" : "Soluciones", id: "solutions" },
    { label: language === "en" ? "About" : "Acerca", id: "team" },
    { label: language === "en" ? "Contact" : "Contacto", id: "contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="flex items-center hover:opacity-80 transition-opacity duration-200 cursor-pointer"
          >
            <Image
              src="/n3uralia-logo-new.png"
              alt="N3uralia Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-black font-light transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <LanguageToggle />
            <Button
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-black transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu with Slide Animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <motion.div
            initial={false}
            animate={isOpen ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="py-4 space-y-2 bg-white/95 backdrop-blur-md rounded-b-lg shadow-lg"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={false}
                animate={isOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{
                  duration: 0.3,
                  delay: isOpen ? index * 0.05 : 0,
                  ease: "easeInOut",
                }}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 font-light transition-all duration-200 rounded-lg mx-2"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.div
              initial={false}
              animate={isOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
              transition={{
                duration: 0.3,
                delay: isOpen ? navItems.length * 0.05 : 0,
                ease: "easeInOut",
              }}
              className="px-2 pt-2"
            >
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition-colors duration-200"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </nav>
  )
}
