"use client"

import { useLanguage } from "@/lib/language-context"
import { Bot, Wrench, Network } from "lucide-react"

export function CosmicServicesSection() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Our Services",
      subtitle: "Transforming Business Through AI Innovation",
      services: [
        {
          title: "AGENTS and AUTOMATIONS",
          description:
            "Custom AI agents that handle repetitive tasks, qualify leads, provide customer support, and automate complex workflows with intelligent decision-making capabilities.",
          icon: Bot,
          link: "/agents",
          buttonText: "Visit Nano Agency",
        },
        {
          title: "FULL STACK PROJECTS",
          description:
            "Complete end-to-end solutions from concept to deployment, including web applications, mobile apps, and enterprise systems with AI integration.",
          icon: Wrench,
          link: "/projects",
          buttonText: "Learn more",
        },
        {
          title: "OWN ECOSYSTEM",
          description:
            "Build your proprietary AI ecosystem with custom models, data pipelines, and integrated platforms tailored to your specific business needs.",
          icon: Network,
          link: "/ecosystem",
          buttonText: "Learn more",
        },
      ],
    },
    es: {
      title: "Nuestros Servicios",
      subtitle: "Transformando Negocios a Través de la Innovación en IA",
      services: [
        {
          title: "AGENTES y AUTOMATIZACIONES",
          description:
            "Agentes de IA personalizados que manejan tareas repetitivas, califican leads, brindan soporte al cliente y automatizan flujos de trabajo complejos con capacidades de toma de decisiones inteligentes.",
          icon: Bot,
          link: "/agentes",
          buttonText: "Visitar Nano Agency",
        },
        {
          title: "PROYECTOS FULL STACK",
          description:
            "Soluciones completas de extremo a extremo desde el concepto hasta el despliegue, incluyendo aplicaciones web, apps móviles y sistemas empresariales con integración de IA.",
          icon: Wrench,
          link: "/proyectos",
          buttonText: "Saber más",
        },
        {
          title: "ECOSISTEMA PROPIO",
          description:
            "Construye tu ecosistema de IA propietario con modelos personalizados, pipelines de datos y plataformas integradas adaptadas a tus necesidades específicas de negocio.",
          icon: Network,
          link: "/ecosistema",
          buttonText: "Saber más",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section className="relative py-20 min-h-screen flex items-center">
      {/* High Resolution Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('/cosmic-background.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          filter: "brightness(0.8) contrast(1.1)",
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Geometric Network Overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cosmic-network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="rgba(255,255,255,0.4)" />
              <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <line x1="0" y1="0" x2="100" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              <line x1="100" y1="0" x2="0" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cosmic-network)" />
        </svg>
      </div>

      {/* Floating Cosmic Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-cyan-400 rounded-full animate-pulse opacity-70 glow-cyan"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-50 animation-delay-1000 glow-purple"></div>
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-pink-400 rounded-full animate-pulse opacity-60 animation-delay-2000 glow-pink"></div>
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-pulse opacity-80 animation-delay-3000 glow-blue"></div>
        <div className="absolute top-1/2 left-1/6 w-4 h-4 bg-teal-400 rounded-full animate-pulse opacity-55 animation-delay-4000 glow-teal"></div>
        <div className="absolute top-3/4 right-1/6 w-3 h-3 bg-indigo-400 rounded-full animate-pulse opacity-65 animation-delay-5000 glow-indigo"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {t.services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:transform hover:scale-105 hover:bg-white/15"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-white/20 rounded-2xl backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 text-center tracking-wide">{service.title}</h3>

                  {/* Description */}
                  <p className="text-white/80 text-center leading-relaxed mb-8 text-sm">{service.description}</p>

                  {/* Button */}
                  <div className="text-center">
                    <a
                      href={service.link}
                      className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-full font-semibold transition-all duration-300 backdrop-blur-sm border border-white/30 hover:border-white/50 hover:transform hover:scale-105"
                    >
                      {service.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        .glow-cyan {
          box-shadow: 0 0 20px rgba(34, 211, 238, 0.5);
        }
        .glow-purple {
          box-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
        }
        .glow-pink {
          box-shadow: 0 0 20px rgba(244, 114, 182, 0.5);
        }
        .glow-blue {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }
        .glow-teal {
          box-shadow: 0 0 20px rgba(20, 184, 166, 0.5);
        }
        .glow-indigo {
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-5000 {
          animation-delay: 5s;
        }
      `}</style>
    </section>
  )
}
