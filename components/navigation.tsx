"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, MessageCircle } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const navigationItems = [
  { name: "Inicio", href: "#hero" },
  { name: "Casos de Éxito", href: "#use-cases" },
  { name: "Equipo", href: "#team" },
  { name: "FAQ", href: "#faq" },
  { name: "Contáctenos", href: "#footer" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const navigateToSection = (sectionId: string) => {
    const cleanId = sectionId.replace("#", "")

    if (pathname === "/") {
      const element = document.getElementById(cleanId)
      if (element) {
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    } else {
      router.push(`/${sectionId}`)
    }

    setIsOpen(false)
  }

  const handleLogoClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      router.push("/")
    }
  }

  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const hash = window.location.hash.substring(1)
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          const headerOffset = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }, 500)
    }
  }, [pathname])

  return (
    <>
      <style jsx>{`
        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }
        
        .logo-breathe {
          animation: breathe 3s ease-in-out infinite;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .logo-breathe {
            animation: none;
          }
        }
      `}</style>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <button
                onClick={handleLogoClick}
                className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg p-1"
                aria-label="Ir al inicio"
              >
                <div className="logo-breathe">
                  <Image
                    src="/n3uralia-logo-new.png"
                    alt="N3uralia"
                    width={150}
                    height={50}
                    priority
                    sizes="150px"
                    className="h-10 w-auto transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </button>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => navigateToSection(item.href)}
                    className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                <a
                  href="https://wa.me/56940946660?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20agentes%20de%20IA%20conversacional"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </Button>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-foreground" aria-label="Abrir menú">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col space-y-4 mt-8">
                    {navigationItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => navigateToSection(item.href)}
                        className="text-left text-foreground hover:text-primary px-4 py-3 rounded-md text-lg font-medium transition-colors duration-200 hover:bg-muted"
                      >
                        {item.name}
                      </button>
                    ))}
                    <div className="pt-4 border-t border-border">
                      <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <a
                          href="https://wa.me/56940946660?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20agentes%20de%20IA%20conversacional"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>Contactar por WhatsApp</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
