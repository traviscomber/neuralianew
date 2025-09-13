"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ArrowLeft } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/lib/language-context"
import { useSwipeGestures } from "@/hooks/use-swipe-gestures"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { language } = useLanguage()
  const isHomePage = pathname === "/"

  const swipeHandlers = useSwipeGestures({
    onSwipeLeft: () => setIsOpen(false),
    onSwipeRight: () => setIsOpen(true),
  })

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      router.push(`/#${sectionId}`)
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      const navHeight = 80
      const elementPosition = element.offsetTop - navHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
    setIsOpen(false)
  }

  const scrollToTop = () => {
    if (pathname !== "/") {
      router.push("/")
      return
    }
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const goBack = () => {
    router.back()
  }

  const navigationItems = [
    {
      label: language === "en" ? "Home" : "Inicio",
      action: () => router.push("/"),
    },
    {
      label: language === "en" ? "Use Cases" : "Casos de Uso",
      action: () => scrollToSection("use-cases"),
    },
    {
      label: language === "en" ? "Features" : "Características",
      action: () => scrollToSection("features"),
    },
    {
      label: language === "en" ? "Technology" : "Tecnología",
      action: () => scrollToSection("technical-features"),
    },
    {
      label: language === "en" ? "About Us" : "Nosotros",
      action: () => scrollToSection("team"),
    },
    {
      label: "FAQ",
      action: () => scrollToSection("faq"),
    },
    {
      label: language === "en" ? "Contact" : "Contacto",
      action: () => scrollToSection("contact"),
    },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 h-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo and Back Button */}
          <div className="flex items-center space-x-4">
            {!isHomePage && (
              <Button variant="ghost" size="sm" onClick={goBack} className="text-black hover:bg-gray-100 p-2">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            )}
            <button onClick={scrollToTop} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-bold text-black hidden sm:block">N3uralia</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="text-black hover:text-gray-600 font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Language Toggle and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <LanguageToggle />

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-black hover:bg-gray-100">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-80 bg-white border-l border-gray-200 transition-transform duration-300 ease-in-out"
                  {...swipeHandlers}
                >
                  <div className="flex flex-col space-y-6 mt-8">
                    <div className="flex items-center space-x-2 pb-4 border-b border-gray-200">
                      <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">N</span>
                      </div>
                      <span className="text-lg font-bold text-black">N3uralia</span>
                    </div>

                    {navigationItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={item.action}
                        className="text-left text-black hover:text-gray-600 font-medium py-2 transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}

                    <div className="pt-4 border-t border-gray-200">
                      <Button className="w-full bg-black hover:bg-gray-800 text-white" asChild>
                        <a
                          href="https://wa.me/56940946660?text=Hola%20N3uralia%2C%20quiero%20más%20información"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {language === "en" ? "Contact Us" : "Contáctanos"}
                        </a>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
