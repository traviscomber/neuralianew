"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, MessageCircle, Brain, Code, Users, Clock, HelpCircle, ExternalLink, ChevronDown } from "lucide-react"

const navigationItems = [
  { name: "Características", href: "#features", icon: Brain },
  { name: "Casos de Éxito", href: "#use-cases", icon: Code },
  { name: "Arquitectura", href: "#technical-features", icon: Code },
  { name: "Equipo Global", href: "#team", icon: Users },
  { name: "Soporte 24/7", href: "#timezones", icon: Clock },
  { name: "FAQ", href: "#faq", icon: HelpCircle },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setIsOpen(false)
      }
    }
  }

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-slate-700"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-lg">N3</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-black text-slate-900 dark:text-white transition-colors duration-300">
                  N3uralia
                </h1>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-semibold -mt-1 transition-colors duration-300">
                  Agentes IA Inteligentes
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigationItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-semibold transition-colors duration-300 group"
                >
                  <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  {item.name}
                </motion.button>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle - Always Visible */}
              <div className="flex items-center">
                <ThemeToggle />
              </div>

              {/* WhatsApp CTA - Desktop */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="hidden md:block"
              >
                <Button
                  size="sm"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <a
                    href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20conocer%20más%20sobre%20sus%20agentes%20de%20IA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Consulta Gratis
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300"
              >
                {isOpen ? (
                  <X className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                ) : (
                  <Menu className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-slate-900 shadow-2xl border-l border-slate-200 dark:border-slate-700 transition-colors duration-300"
            >
              <div className="p-6">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-black text-lg">N3</span>
                    </div>
                    <div>
                      <h2 className="text-lg font-black text-slate-900 dark:text-white transition-colors duration-300">
                        N3uralia
                      </h2>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-semibold -mt-1 transition-colors duration-300">
                        Menú de Navegación
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300"
                  >
                    <X className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                  </button>
                </div>

                {/* Mobile Navigation Items */}
                <div className="space-y-2 mb-8">
                  {navigationItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      onClick={() => scrollToSection(item.href)}
                      className="w-full flex items-center gap-3 p-3 text-left text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg font-semibold transition-all duration-300 group"
                    >
                      <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-auto opacity-50" />
                    </motion.button>
                  ))}
                </div>

                {/* Mobile Theme Toggle */}
                <div className="mb-6 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300 font-semibold transition-colors duration-300">
                      Tema
                    </span>
                    <ThemeToggle />
                  </div>
                </div>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="space-y-3"
                >
                  <Button
                    size="lg"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <a
                      href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20conocer%20más%20sobre%20sus%20agentes%20de%20IA"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Consulta Gratis por WhatsApp
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>

                  <div className="text-center">
                    <Badge className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 font-semibold transition-colors duration-300">
                      <Clock className="w-3 h-3 mr-1" />
                      Respuesta en 15 minutos
                    </Badge>
                  </div>
                </motion.div>

                {/* Mobile Footer */}
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 text-center transition-colors duration-300">
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium transition-colors duration-300">
                    Soporte 24/7 • Chile, Singapur, Rusia
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Theme Toggle (Hero Section) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="fixed top-20 right-4 z-40 lg:hidden"
      >
        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full p-2 shadow-lg border border-slate-200 dark:border-slate-700 transition-colors duration-300">
          <ThemeToggle />
        </div>
      </motion.div>
    </>
  )
}
