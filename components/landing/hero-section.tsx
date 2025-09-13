"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-[#e8e8e8] min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20">
      <div className="container mx-auto text-center max-w-5xl">
        {/* Main Heading - Proper H1 hierarchy */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-[#666666] mb-16 leading-[1.1] tracking-tight">
          {t("hero.title")}
        </h1>

        {/* Description Paragraphs - Proper spacing and typography */}
        <div className="space-y-8 mb-20 max-w-4xl mx-auto">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#888888] font-light leading-relaxed">
            {t("hero.subtitle1")}
          </p>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#888888] font-light leading-relaxed">
            {t("hero.subtitle2")}
          </p>
        </div>

        {/* Action Buttons - Proper spacing and responsive design */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="bg-[#2c3e50] hover:bg-[#34495e] text-white font-medium px-10 py-5 rounded-full text-lg sm:text-xl min-w-[220px] h-auto transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t("hero.cta.explore")}
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="bg-[#5a6c7d] hover:bg-[#6b7d8f] text-white border-[#5a6c7d] hover:border-[#6b7d8f] font-medium px-10 py-5 rounded-full text-lg sm:text-xl min-w-[220px] h-auto transition-all duration-300 hover:scale-105"
            onClick={() => window.open("https://wa.me/56940946660", "_blank")}
          >
            {t("hero.cta.contact")}
          </Button>
        </div>
      </div>
    </section>
  )
}
