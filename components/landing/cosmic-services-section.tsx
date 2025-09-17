"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Bot, Wrench, Network } from "lucide-react"

export function CosmicServicesSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Our Services",
      subtitle: "Comprehensive AI Solutions for Modern Businesses",
      services: [
        {
          title: "AGENTS and AUTOMATIONS",
          description:
            "Intelligent AI agents that automate complex business processes, enhance customer interactions, and streamline operations with advanced machine learning capabilities.",
          icon: Bot,
          buttonText: "Visit Nano Agency",
          link: "/agents",
        },
        {
          title: "FULL STACK PROJECTS",
          description:
            "Complete end-to-end development solutions from concept to deployment, integrating AI capabilities with modern web technologies and scalable architectures.",
          icon: Wrench,
          buttonText: "Learn more",
          link: "/services",
        },
        {
          title: "OWN ECOSYSTEM",
          description:
            "Build your proprietary AI ecosystem with custom models, integrated workflows, and personalized solutions tailored to your specific business requirements.",
          icon: Network,
          buttonText: "Learn more",
          link: "/products",
        },
      ],
    },
    es: {
      title: "Nuestros Servicios",
      subtitle: "Soluciones Integrales de IA para Empresas Modernas",
      services: [
        {
          title: "AGENTES y AUTOMATIZACIONES",
          description:
            "Agentes de IA inteligentes que automatizan procesos empresariales complejos, mejoran las interacciones con clientes y optimizan operaciones con capacidades avanzadas de aprendizaje automático.",
          icon: Bot,
          buttonText: "Visitar Nano Agency",
          link: "/agents",
        },
        {
          title: "PROYECTOS FULL STACK",
          description:
            "Soluciones completas de desarrollo de extremo a extremo desde el concepto hasta el despliegue, integrando capacidades de IA con tecnologías web modernas y arquitecturas escalables.",
          icon: Wrench,
          buttonText: "Saber más",
          link: "/services",
        },
        {
          title: "ECOSISTEMA PROPIO",
          description:
            "Construye tu ecosistema de IA propietario con modelos personalizados, flujos de trabajo integrados y soluciones personalizadas adaptadas a tus requisitos empresariales específicos.",
          icon: Network,
          buttonText: "Saber más",
          link: "/products",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section
      className="relative py-20 min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/cosmic-services-background.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Geometric network overlay */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Network nodes and connections */}
          <g stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="rgba(255,255,255,0.1)">
            <line x1="100" y1="150" x2="300" y2="200" />
            <line x1="300" y1="200" x2="500" y2="180" />
            <line x1="500" y1="180" x2="700" y2="220" />
            <line x1="700" y1="220" x2="900" y2="160" />
            <line x1="200" y1="400" x2="400" y2="450" />
            <line x1="400" y1="450" x2="600" y2="420" />
            <line x1="600" y1="420" x2="800" y2="480" />
            <line x1="150" y1="600" x2="350" y2="650" />
            <line x1="350" y1="650" x2="550" y2="630" />
            <line x1="550" y1="630" x2="750" y2="680" />

            <circle cx="100" cy="150" r="4" />
            <circle cx="300" cy="200" r="4" />
            <circle cx="500" cy="180" r="4" />
            <circle cx="700" cy="220" r="4" />
            <circle cx="900" cy="160" r="4" />
            <circle cx="200" cy="400" r="4" />
            <circle cx="400" cy="450" r="4" />
            <circle cx="600" cy="420" r="4" />
            <circle cx="800" cy="480" r="4" />
            <circle cx="150" cy="600" r="4" />
            <circle cx="350" cy="650" r="4" />
            <circle cx="550" cy="630" r="4" />
            <circle cx="750" cy="680" r="4" />
          </g>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">{t.title}</h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            {t.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {t.services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="group bg-white/95 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:bg-white"
              >
                <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gray-100 rounded-full group-hover:bg-blue-50 transition-colors duration-300">
                      <IconComponent className="w-10 h-10 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight">{service.title}</h3>

                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">{service.description}</p>
                  </div>

                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full py-4 text-lg font-semibold border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 bg-transparent"
                    onClick={() => (window.location.href = service.link)}
                  >
                    {service.buttonText}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
