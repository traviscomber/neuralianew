"use client"

import { useState, useEffect } from "react"
import { Brain, Shield, Globe, Code, Database, Cpu } from "lucide-react"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { UseCasesSection } from "@/components/landing/use-cases-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { FAQSection } from "@/components/landing/faq-section"
import { Footer } from "@/components/landing/footer"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  const [activeDemo, setActiveDemo] = useState(0)
  const [stats, setStats] = useState({
    agentsBuilt: 0,
    industriesServed: 0,
    conversationsProcessed: 0,
    accuracyRate: 0,
  })

  // Auto-cycle through demos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Animate Neuralia's achievements on mount
  useEffect(() => {
    const animateStats = () => {
      const targets = {
        agentsBuilt: 150,
        industriesServed: 25,
        conversationsProcessed: 2500000,
        accuracyRate: 98.7,
      }
      const duration = 2500
      const steps = 60
      const increment = {
        agentsBuilt: targets.agentsBuilt / steps,
        industriesServed: targets.industriesServed / steps,
        conversationsProcessed: targets.conversationsProcessed / steps,
        accuracyRate: targets.accuracyRate / steps,
      }

      let step = 0
      const timer = setInterval(() => {
        step++
        setStats({
          agentsBuilt: Math.min(Math.floor(increment.agentsBuilt * step), targets.agentsBuilt),
          industriesServed: Math.min(Math.floor(increment.industriesServed * step), targets.industriesServed),
          conversationsProcessed: Math.min(
            Math.floor(increment.conversationsProcessed * step),
            targets.conversationsProcessed,
          ),
          accuracyRate: Math.min(Number((increment.accuracyRate * step).toFixed(1)), targets.accuracyRate),
        })

        if (step >= steps) {
          clearInterval(timer)
        }
      }, duration / steps)
    }

    animateStats()
  }, [])

  const neuraliaProducts = [
    {
      title: "EcosueloLab",
      subtitle: "Agente IA para Agricultura de Precisión",
      description: "Desarrollado por Neuralia para revolucionar el análisis de suelos",
      color: "from-green-500 to-emerald-600",
      icon: "🌱",
      achievements: [
        "Entrenado con 50,000+ análisis de suelos reales",
        "Precisión del 96% en recomendaciones agronómicas",
        "Integración con 15+ laboratorios certificados",
        "Soporte para 200+ tipos de cultivos",
      ],
      messages: [
        { role: "user", content: "Necesito optimizar el pH para mi cultivo de arándanos orgánicos" },
        {
          role: "assistant",
          content:
            "Perfecto. Para arándanos orgánicos, Neuralia recomienda pH entre 4.5-5.5. Basado en nuestro análisis de 12,000+ cultivos similares, te sugiero aplicar azufre elemental y materia orgánica ácida.",
        },
        { role: "user", content: "¿Qué cantidad específica necesito por hectárea?" },
        {
          role: "assistant",
          content:
            "Según nuestros algoritmos de Neuralia: 150-200 kg/ha de azufre elemental + 15-20 ton/ha de compost ácido. Nuestro sistema predice una mejora del pH en 3-4 meses con 94% de precisión.",
        },
      ],
    },
    {
      title: "Despega tu Carrera",
      subtitle: "Coach Profesional IA de Neuralia",
      description: "Sistema de coaching desarrollado con psicología organizacional avanzada",
      color: "from-blue-500 to-cyan-600",
      icon: "🚀",
      achievements: [
        "Entrenado con 100,000+ perfiles profesionales",
        "Metodología basada en 25+ frameworks de coaching",
        "Integración con 500+ ofertas laborales en tiempo real",
        "Tasa de éxito del 87% en transiciones de carrera",
      ],
      messages: [
        { role: "user", content: "Soy ingeniero civil pero quiero migrar a tecnología" },
        {
          role: "assistant",
          content:
            "Excelente decisión. Neuralia ha analizado 15,000+ transiciones similares. Tu perfil ingenieril es muy valorado en tech. Te recomiendo especializarte en DevOps o Data Engineering - aprovechas tu base matemática.",
        },
        { role: "user", content: "¿Cuál sería mi ruta de aprendizaje específica?" },
        {
          role: "assistant",
          content:
            "Basado en nuestro análisis de Neuralia:\n\n📚 Mes 1-2: Python + SQL\n🔧 Mes 3-4: Docker + AWS\n📊 Mes 5-6: Proyecto portfolio\n🎯 Mes 7: Aplicaciones estratégicas\n\nNuestros datos muestran 92% de éxito con esta ruta.",
        },
      ],
    },
    {
      title: "ParrotfyIA",
      subtitle: "Tutor de Idiomas IA de Neuralia",
      description: "Sistema de aprendizaje conversacional con neurociencia aplicada",
      color: "from-purple-500 to-pink-600",
      icon: "🦜",
      achievements: [
        "Entrenado con 500,000+ conversaciones nativas",
        "Algoritmos de pronunciación con 95% precisión",
        "Adaptación cultural para 30+ países",
        "Metodología basada en neuroplasticidad",
      ],
      messages: [
        { role: "user", content: "I want to improve my business English for international meetings" },
        {
          role: "assistant",
          content:
            "Perfect! Neuralia's business English module has trained with 50,000+ corporate conversations. Let's focus on executive communication patterns. I'll adapt to your industry - what sector do you work in?",
        },
        { role: "user", content: "I work in renewable energy consulting" },
        {
          role: "assistant",
          content:
            "Excellent! Neuralia has specialized vocabulary for renewable energy. Let's practice: 'Our solar capacity projections indicate a 40% efficiency improvement.' Try saying this - I'll analyze your pronunciation and suggest industry-specific improvements.",
        },
      ],
    },
  ]

  const neuraliaAchievements = [
    {
      icon: Brain,
      title: "Arquitectura IA Propietaria",
      description: "Neuralia desarrolló una arquitectura híbrida que combina LLMs con sistemas expertos especializados",
      metrics: "15+ patentes pendientes",
    },
    {
      icon: Database,
      title: "Datasets Especializados",
      description: "Hemos curado y etiquetado más de 10TB de datos específicos por industria",
      metrics: "10TB+ datos curados",
    },
    {
      icon: Cpu,
      title: "Infraestructura Escalable",
      description: "Nuestra plataforma procesa 50,000+ consultas simultáneas con latencia <200ms",
      metrics: "99.9% uptime garantizado",
    },
    {
      icon: Code,
      title: "APIs Enterprise",
      description: "SDKs nativos para 12+ lenguajes de programación con documentación completa",
      metrics: "12+ SDKs disponibles",
    },
    {
      icon: Shield,
      title: "Seguridad Certificada",
      description: "Certificaciones SOC 2, ISO 27001 y cumplimiento GDPR desde el diseño",
      metrics: "3+ certificaciones internacionales",
    },
    {
      icon: Globe,
      title: "Expansión Global",
      description: "Presencia activa en 15+ países con soporte multiidioma nativo",
      metrics: "15+ países activos",
    },
  ]

  const neuraliaTimeline = [
    {
      year: "2022",
      title: "Fundación de Neuralia",
      description: "Inicio del desarrollo de la primera generación de agentes IA especializados",
      achievement: "Equipo fundador de 8 expertos en IA",
    },
    {
      year: "2023",
      title: "Lanzamiento de EcosueloLab",
      description: "Primer agente IA especializado en agricultura, revolucionando el análisis de suelos",
      achievement: "10,000+ análisis procesados en 6 meses",
    },
    {
      year: "2024",
      title: "Expansión del Ecosistema",
      description: "Lanzamiento de Despega tu Carrera y ParrotfyIA, consolidando nuestro ecosistema",
      achievement: "150+ agentes IA desplegados",
    },
    {
      year: "2025",
      title: "Neuralia Enterprise",
      description: "Plataforma empresarial para crear agentes IA personalizados a gran escala",
      achievement: "Meta: 1,000+ agentes activos",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <UseCasesSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
