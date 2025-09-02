"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

export function TimezonesSection() {
  const [currentTime, setCurrentTime] = useState({
    santiago: new Date(),
    singapore: new Date(),
    moscow: new Date(),
  })

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date()
      setCurrentTime({
        santiago: new Date(now.toLocaleString("en-US", { timeZone: "America/Santiago" })),
        singapore: new Date(now.toLocaleString("en-US", { timeZone: "Asia/Singapore" })),
        moscow: new Date(now.toLocaleString("en-US", { timeZone: "Europe/Moscow" })),
      })
    }

    updateTimes()
    const interval = setInterval(updateTimes, 1000)
    return () => clearInterval(interval)
  }, [])

  const isWorkingHours = (time: Date) => {
    const hour = time.getHours()
    return hour >= 9 && hour < 18
  }

  const formatTime = (time: Date) => {
    return time.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  }

  const timezones = [
    {
      city: "Santiago",
      country: "Chile",
      time: currentTime.santiago,
      flag: "🇨🇱",
      position: { x: 25, y: 65 },
    },
    {
      city: "Singapur",
      country: "Singapur",
      time: currentTime.singapore,
      flag: "🇸🇬",
      position: { x: 75, y: 45 },
    },
    {
      city: "Moscú",
      country: "Rusia",
      time: currentTime.moscow,
      flag: "🇷🇺",
      position: { x: 60, y: 25 },
    },
  ]

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-green-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(34,197,94,0.2),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 border-green-500/30 mb-6">
            <Clock className="w-4 h-4 mr-2" />
            Equipo Multidisciplinario
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-green-100 to-blue-200 bg-clip-text text-transparent">
              Soporte global
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              las 24 horas
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Nuestro equipo distribuido globalmente garantiza soporte continuo y expertise multicultural para proyectos
            en cualquier zona horaria.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* World Map */}
          <div className="relative">
            <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm p-8">
              <div className="relative h-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden">
                {/* Simplified World Map SVG */}
                <svg viewBox="0 0 100 60" className="w-full h-full">
                  <defs>
                    <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="rgb(147, 51, 234)" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>

                  {/* Continents simplified shapes */}
                  <path d="M15 20 L35 15 L40 25 L35 35 L20 40 L10 35 Z" fill="url(#mapGradient)" opacity="0.6" />
                  <path d="M40 15 L65 10 L70 20 L65 30 L45 35 L40 25 Z" fill="url(#mapGradient)" opacity="0.6" />
                  <path d="M70 20 L85 15 L90 25 L85 35 L75 40 L70 30 Z" fill="url(#mapGradient)" opacity="0.6" />

                  {/* Location pins */}
                  {timezones.map((tz, index) => (
                    <g key={index}>
                      <circle
                        cx={tz.position.x}
                        cy={tz.position.y}
                        r="2"
                        fill={isWorkingHours(tz.time) ? "#10b981" : "#ef4444"}
                        className="animate-pulse"
                      />
                      <circle
                        cx={tz.position.x}
                        cy={tz.position.y}
                        r="4"
                        fill="none"
                        stroke={isWorkingHours(tz.time) ? "#10b981" : "#ef4444"}
                        strokeWidth="0.5"
                        opacity="0.6"
                        className="animate-ping"
                      />
                    </g>
                  ))}
                </svg>

                {/* Floating timezone cards */}
                {timezones.map((tz, index) => (
                  <div
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                      left: `${tz.position.x}%`,
                      top: `${tz.position.y}%`,
                      marginTop: "20px",
                    }}
                  >
                    <div className="bg-slate-800/90 backdrop-blur-sm border border-slate-600 rounded-lg p-2 text-center min-w-[120px]">
                      <div className="text-lg mb-1">{tz.flag}</div>
                      <div className="text-white font-semibold text-sm">{tz.city}</div>
                      <div className="text-slate-300 text-xs">{tz.country}</div>
                      <div
                        className={`text-sm font-mono mt-1 ${isWorkingHours(tz.time) ? "text-green-400" : "text-red-400"}`}
                      >
                        {formatTime(tz.time)}
                      </div>
                      <div className={`text-xs mt-1 ${isWorkingHours(tz.time) ? "text-green-400" : "text-red-400"}`}>
                        {isWorkingHours(tz.time) ? "● Activo" : "● Fuera de horario"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Live Clocks */}
          <div className="space-y-4">
            {timezones.map((tz, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{tz.flag}</span>
                      <div>
                        <div className="font-semibold text-white">
                          {tz.city}, {tz.country}
                        </div>
                        <div className={`text-sm ${isWorkingHours(tz.time) ? "text-green-400" : "text-red-400"}`}>
                          {isWorkingHours(tz.time) ? "Horario laboral" : "Fuera de horario"}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-mono text-white">{formatTime(tz.time)}</div>
                      <div
                        className={`w-3 h-3 rounded-full mx-auto mt-1 ${isWorkingHours(tz.time) ? "bg-green-400 animate-pulse" : "bg-red-400"}`}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
