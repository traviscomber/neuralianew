"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Settings, Wrench } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function WhyTrustSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Why Trust?",
      support: "24/7 Support",
      security: "Enterprise Security",
      projects: ">100 Projects Deployed",
    },
    es: {
      title: "¿Por Qué Confiar?",
      support: "Soporte 24/7",
      security: "Seguridad Empresarial",
      projects: ">100 Proyectos Desplegados",
    },
  }

  const t = content[language]

  const techLogos = [
    { src: "/tech-icons/redis-new-logo.png", alt: "Redis", width: 60, height: 60 },
    { src: "/tech-icons/js-logo.png", alt: "JavaScript", width: 60, height: 60 },
    { src: "/tech-icons/n8n-new-logo.png", alt: "N8n", width: 60, height: 60 },
    { src: "/tech-icons/nextjs-logo.png", alt: "Next.js", width: 120, height: 40 },
    { src: "/tech-icons/python-logo.png", alt: "Python", width: 60, height: 60 },
    { src: "/tech-icons/supabase-new-logo.png", alt: "Supabase", width: 60, height: 60 },
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 will-change-auto">
        <Image
          src="/cosmic-background.jpeg"
          alt="Cosmic Background"
          fill
          className="object-cover"
          priority={false}
          loading="lazy"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">{t.title}</h2>
        </div>

        {/* Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          {/* 24/7 Support */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Settings className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">{t.support}</h3>
            </CardContent>
          </Card>

          {/* Enterprise Security */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Image src="/icons/iso-logo.png" alt="ISO Certification" width={64} height={64} loading="lazy" />
              </div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">{t.security}</h3>
            </CardContent>
          </Card>

          {/* Projects Deployed */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Wrench className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">{t.projects}</h3>
            </CardContent>
          </Card>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {techLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
