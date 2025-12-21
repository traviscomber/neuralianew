"use client"

import { motion } from "framer-motion"
import { Brain, Zap, Shield, Eye, Database } from "lucide-react"

export function AiCoreDiagram() {
  const modules = [
    { icon: Brain, label: "Agent Systems", color: "from-slate-600 to-slate-700" },
    { icon: Zap, label: "AI Platforms", color: "from-slate-600 to-slate-700" },
    { icon: Eye, label: "Creative Engines", color: "from-slate-600 to-slate-700" },
    { icon: Database, label: "Data & Memory", color: "from-slate-600 to-slate-700" },
    { icon: Shield, label: "Automation", color: "from-slate-600 to-slate-700" },
  ]

  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 25,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
    },
  }

  const coreVariants = {
    pulse: {
      scale: [1, 1.02, 1],
      boxShadow: ["0 0 0px rgba(15, 23, 42, 0.1)", "0 0 12px rgba(15, 23, 42, 0.2)", "0 0 0px rgba(15, 23, 42, 0.1)"],
    },
  }

  return (
    <div className="relative w-full h-96 flex items-center justify-center py-12">
      <motion.div variants={orbitVariants} animate="animate" className="absolute w-96 h-96">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          variants={coreVariants}
          animate="pulse"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center shadow-lg border border-slate-500/30"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <Brain className="w-10 h-10 text-slate-400" />
          </motion.div>
        </motion.div>

        {modules.map((module, i) => {
          const angle = (i / modules.length) * Math.PI * 2
          const x = Math.cos(angle) * 140
          const y = Math.sin(angle) * 140

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.15, type: "spring" }}
              className="absolute left-1/2 top-1/2"
              style={{
                x: x - 32,
                y: y - 32,
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 4px 16px rgba(15, 23, 42, 0.15)",
                }}
                className={`w-16 h-16 rounded-lg bg-gradient-to-br ${module.color} flex items-center justify-center shadow-md cursor-pointer transition-all border border-slate-500/20`}
              >
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: i * 0.2 }}
                >
                  <module.icon className="w-6 h-6 text-slate-200" />
                </motion.div>
              </motion.div>
              <motion.div
                className="text-center mt-3 text-xs font-semibold text-slate-600 whitespace-nowrap"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.15 + 0.3 }}
              >
                {module.label}
              </motion.div>
            </motion.div>
          )
        })}
      </motion.div>

      <svg className="absolute w-full h-full" style={{ pointerEvents: "none" }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(100, 116, 139, 0.15)" />
            <stop offset="50%" stopColor="rgba(100, 116, 139, 0.25)" />
            <stop offset="100%" stopColor="rgba(100, 116, 139, 0.15)" />
          </linearGradient>
        </defs>
        {modules.map((_, i) => {
          const angle = (i / modules.length) * Math.PI * 2
          const x = Math.cos(angle) * 140
          const y = Math.sin(angle) * 140
          return (
            <motion.line
              key={i}
              x1="50%"
              y1="50%"
              x2={`calc(50% + ${x}px)`}
              y2={`calc(50% + ${y}px)`}
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            />
          )
        })}
      </svg>
    </div>
  )
}
