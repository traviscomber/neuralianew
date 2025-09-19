"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function TestFreeCTASection() {
  const { language } = useLanguage()

  const translations = {
    en: {
      title: "Ready to Experience the Future?",
      subtitle: "Test Our Nano Agents for FREE",
      description:
        "Discover the power of N3uralia's advanced AI agents. No commitment, no credit card required. Experience the future of automation today.",
      buttonText: "TEST FOR FREE NOW",
      features: ["Instant Access", "No Setup Required", "Real AI Capabilities"],
    },
    es: {
      title: "¿Listo para Experimentar el Futuro?",
      subtitle: "Prueba Nuestros Nano Agentes GRATIS",
      description:
        "Descubre el poder de los agentes de IA avanzados de N3uralia. Sin compromiso, sin tarjeta de crédito requerida. Experimenta el futuro de la automatización hoy.",
      buttonText: "PROBAR GRATIS AHORA",
      features: ["Acceso Instantáneo", "Sin Configuración", "Capacidades de IA Reales"],
    },
  }

  const t = translations[language]

  const handleTestFreeClick = () => {
    window.open("https://www.n3uralianano.com/", "_blank")
  }

  return (
    <>
      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.4), 0 0 80px rgba(59, 130, 246, 0.2);
          }
          50% {
            box-shadow: 0 0 60px rgba(59, 130, 246, 0.6), 0 0 120px rgba(59, 130, 246, 0.3);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        .pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        .sparkle-animation {
          animation: sparkle 2s ease-in-out infinite;
        }
        
        .gradient-border {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6);
          background-size: 400% 400%;
          animation: gradient-shift 4s ease infinite;
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>

      <section className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full"></div>
        </div>

        {/* Floating Sparkles */}
        <div className="absolute inset-0 pointer-events-none">
          <Sparkles
            className="absolute top-20 left-20 w-6 h-6 text-blue-400 sparkle-animation"
            style={{ animationDelay: "0s" }}
          />
          <Sparkles
            className="absolute top-40 right-32 w-4 h-4 text-purple-400 sparkle-animation"
            style={{ animationDelay: "1s" }}
          />
          <Sparkles
            className="absolute bottom-32 left-1/3 w-5 h-5 text-cyan-400 sparkle-animation"
            style={{ animationDelay: "2s" }}
          />
          <Sparkles
            className="absolute bottom-20 right-20 w-6 h-6 text-blue-400 sparkle-animation"
            style={{ animationDelay: "0.5s" }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          {/* Main Content */}
          <div className="float-animation">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-2 mb-8">
              <Zap className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-medium">Limited Time Offer</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
              {t.title}
            </h2>

            <h3 className="text-3xl md:text-4xl font-semibold mb-8 text-blue-300">{t.subtitle}</h3>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">{t.description}</p>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              {t.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-6 py-3"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-white font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="relative inline-block">
              <div className="gradient-border p-1 rounded-2xl">
                <Button
                  onClick={handleTestFreeClick}
                  size="lg"
                  className="pulse-glow bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white font-bold text-xl md:text-2xl px-12 py-6 rounded-xl transition-all duration-300 hover:scale-105 transform relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Zap className="w-6 h-6" />
                    {t.buttonText}
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>

                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </Button>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 text-gray-400 text-sm">
              <p>✓ No Credit Card Required • ✓ Instant Access • ✓ Full Features Available</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
