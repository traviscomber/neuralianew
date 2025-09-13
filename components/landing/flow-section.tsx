"use client"

import { useLanguage } from "@/lib/language-context"

export function FlowSection() {
  const { language } = useLanguage()

  const flowSteps = [
    {
      title: "Data Source",
      titleEs: "Fuente de Datos",
      description: "Use your cloud or create new Database from scratch",
      descriptionEs: "Usa tu nube o crea nueva Base de Datos desde cero",
      logos: [
        {
          name: "Google Drive",
          src: "https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg",
        },
        { name: "Cloudify", src: "https://www.cloudify.co/wp-content/uploads/2019/08/cloudify-logo.svg" },
        { name: "PostgreSQL", src: "/tech-icons/postgresql-logo.png" },
        { name: "Meta", src: "/tech-icons/meta-logo.png" },
        { name: "Twilio", src: "/tech-icons/twilio-logo.png" },
      ],
    },
    {
      title: "AI API Connection",
      titleEs: "Conexión API IA",
      description: "Connect or create AI tool and process data",
      descriptionEs: "Conecta o crea herramienta IA y procesa datos",
      logos: [
        { name: "Manus", src: "https://manus.ai/favicon.ico" },
        { name: "Circle", src: "https://via.placeholder.com/60x60/666/fff?text=O" },
        { name: "Star", src: "https://via.placeholder.com/60x60/ff6b35/fff?text=★" },
        { name: "Intel", src: "/tech-icons/intel-logo.png" },
        { name: "Migration", src: "https://via.placeholder.com/60x60/4a90e2/fff?text=🐦" },
      ],
    },
    {
      title: "Multiple Outputs",
      titleEs: "Múltiples Salidas",
      description: "Collect results or create an automated action",
      descriptionEs: "Recolecta resultados o crea una acción automatizada",
      logos: [
        { name: "Instagram", src: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" },
        { name: "Circles", src: "https://via.placeholder.com/60x60/ff4444/fff?text=●●●" },
        { name: "Facebook", src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" },
        { name: "LinkedIn", src: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" },
        { name: "X", src: "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg" },
        { name: "WhatsApp", src: "/tech-icons/whatsapp-logo.png" },
      ],
    },
  ]

  return (
    <section id="flow" className="bg-[#e8e8e8] py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-[#666666]">N3uralia's Flow</h2>
        </div>

        {/* Flow Steps */}
        <div className="max-w-6xl mx-auto space-y-16">
          {flowSteps.map((step, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left side - Text */}
              <div className="text-left">
                <h3 className="text-2xl font-light text-gray-600 mb-4">
                  {language === "en" ? step.title : step.titleEs}
                </h3>
                <p className="text-lg text-gray-500 font-light leading-relaxed">
                  {language === "en" ? step.description : step.descriptionEs}
                </p>
              </div>

              {/* Right side - Logo container */}
              <div className="bg-[#d0d0d0] rounded-lg p-8">
                <div className="flex flex-wrap items-center justify-center gap-6">
                  {step.logos.map((logo, logoIndex) => (
                    <div key={logoIndex} className="w-12 h-12 flex items-center justify-center">
                      <img
                        src={logo.src || "/placeholder.svg"}
                        alt={logo.name}
                        className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement
                          target.style.display = "none"
                          const placeholder = document.createElement("div")
                          placeholder.className =
                            "w-12 h-12 bg-gray-400 rounded flex items-center justify-center text-white text-xs font-bold"
                          placeholder.textContent = logo.name.substring(0, 2).toUpperCase()
                          target.parentNode?.replaceChild(placeholder, target)
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-32 bg-[#4a4a4a] rounded-lg py-16 px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-6xl md:text-7xl font-light text-gray-400 mb-4">300%</div>
              <div className="text-xl font-light text-gray-400 tracking-wider">ROI</div>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-light text-gray-400 mb-4">60%</div>
              <div className="text-xl font-light text-gray-400 tracking-wider">AUTOMATION</div>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-light text-gray-400 mb-4">95%</div>
              <div className="text-xl font-light text-gray-400 tracking-wider">SATISFACTION</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
