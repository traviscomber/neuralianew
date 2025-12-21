"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"

export function TechStackVisualization() {
  const { language } = useLanguage()

  const layers = {
    en: [
      { name: "User Interface", icon: "🎨", description: "React, Next.js, Tailwind" },
      { name: "API & Business Logic", icon: "⚙️", description: "Node.js, Python, FastAPI" },
      { name: "Agent Orchestration", icon: "🧠", description: "Multi-agent frameworks, LLMs" },
      { name: "Data Processing", icon: "📊", description: "Real-time streams, ETL" },
      { name: "Memory & Knowledge", icon: "💾", description: "Vector DB, Knowledge graphs" },
      { name: "Security & Compliance", icon: "🔒", description: "Auth, RLS, Encryption" },
      { name: "Infrastructure", icon: "🌐", description: "Cloud, Docker, Kubernetes" },
    ],
    es: [
      { name: "Interfaz de Usuario", icon: "🎨", description: "React, Next.js, Tailwind" },
      { name: "APIs y Lógica", icon: "⚙️", description: "Node.js, Python, FastAPI" },
      { name: "Orquestación de Agentes", icon: "🧠", description: "Multi-agentes, LLMs" },
      { name: "Procesamiento de Datos", icon: "📊", description: "Streams en tiempo real, ETL" },
      { name: "Memoria y Conocimiento", icon: "💾", description: "BD Vectoriales, Grafos" },
      { name: "Seguridad y Cumplimiento", icon: "🔒", description: "Auth, RLS, Encriptación" },
      { name: "Infraestructura", icon: "🌐", description: "Cloud, Docker, Kubernetes" },
    ],
  }

  const t = layers[language]

  return (
    <div className="space-y-3">
      {t.map((layer, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.05 }}
          className="p-4 rounded-lg border border-slate-200 hover:border-blue-300 bg-gradient-to-r from-slate-50 to-white hover:shadow-md transition-all"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">{layer.icon}</span>
            <div className="flex-1">
              <h3 className="font-semibold text-slate-900">{layer.name}</h3>
              <p className="text-sm text-slate-600">{layer.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
