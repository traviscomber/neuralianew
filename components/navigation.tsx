"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { LanguageToggle } from "@/components/language-toggle"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const translations = {
    en: {
      home: "Home",
      services: "Services",
      products: "Products",
      clients: "Clients",
      contact: "Contact",
      whatsappText: "Hello N3uralia! I'm interested in learning more about your AI solutions.",
    },
    es: {
      home: "Inicio",
      services: "Servicios",
      products: "Productos",
      clients: "Clientes",
      contact: "Contacto",
      whatsappText: "¡Hola N3uralia! Me interesa conocer más sobre sus soluciones de IA.",
    },
  }

  const t = translations[language]

  const menuItems = [
    { href: "/", label: t.home },
    { href: "/services", label: t.services },
    { href: "/products", label: t.products },
    { href: "/clients", label: t.clients },
    { href: "/contacts", label: t.contact },
  ]

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(t.whatsappText)
    window.open(`https://wa.me/56940946660?text=${message}`, "_blank")
  }

  return (
    <>
      <style jsx>{`
        @keyframes breathe {
          0%, 100% { 
            transform: scale(1);
            filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.3));
          }
          50% { 
            transform: scale(1.02);
            filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.5));
          }
        }
        
        @keyframes navGlow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
          }
          50% { 
            box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
          }
        }
        
        .logo-breathe {
          animation: breathe 4s ease-in-out infinite;
          border-radius: 12px;
          overflow: hidden;
        }
        
        .nav-glow {
          animation: navGlow 6s ease-in-out infinite;
        }
        
        .menu-item {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .menu-item::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #ffffff, transparent);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .menu-item:hover::after {
          width: 100%;
        }
        
        .menu-item:hover {
          transform: translateY(-1px);
          text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 nav-glow ${
          isScrolled
            ? "bg-black/95 backdrop-blur-sm shadow-2xl border-b border-white/10"
            : "bg-black border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center h-20 py-2">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="logo-breathe">
                <Image
                  src="/n3uralia-logo-new.png"
                  alt="N3uralia"
                  width={200}
                  height={50}
                  className="h-12 w-auto rounded-xl"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="menu-item text-white hover:text-gray-100 transition-all duration-300 font-light text-lg py-2"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-6">
              <LanguageToggle />
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <LanguageToggle />
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="text-white hover:text-gray-300 hover:bg-white/10 transition-all duration-300"
                  >
                    <Menu className="h-7 w-7" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[320px] bg-black text-white border-gray-800">
                  <div className="flex flex-col space-y-8 mt-12">
                    <div className="flex justify-center mb-6">
                      <div className="logo-breathe">
                        <Image
                          src="/n3uralia-logo-new.png"
                          alt="N3uralia"
                          width={160}
                          height={40}
                          className="h-10 w-auto rounded-lg"
                        />
                      </div>
                    </div>

                    {menuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-white hover:text-gray-300 transition-all duration-300 font-light text-xl py-3 px-4 rounded-lg hover:bg-white/5 border-l-2 border-transparent hover:border-white/30"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}

                    <div className="pt-8 border-t border-gray-800">
                      <Button
                        onClick={() => {
                          handleWhatsAppClick()
                          setIsOpen(false)
                        }}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                      >
                        <MessageCircle className="w-5 h-5 mr-3" />
                        WhatsApp
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
