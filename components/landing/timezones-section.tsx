"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin } from "lucide-react"

interface TimeZoneData {
  city: string
  timezone: string
  country: string
  flag: string
  coordinates: { x: number; y: number }
  workingHours: string
}

export function TimezonesSection() {
  const [currentTimes, setCurrentTimes] = useState<Record<string, string>>({})
  const [workingStatus, setWorkingStatus] = useState<Record<string, boolean>>({})

  const timezones: TimeZoneData[] = [
    {
      city: "Santiago",
      timezone: "America/Santiago",
      country: "Chile",
      flag: "🇨🇱",
      coordinates: { x: 25, y: 75 },
      workingHours: "9:00 - 18:00 CLT",
    },
    {
      city: "Kaliningrado",
      timezone: "Europe/Kaliningrad",
      country: "Rusia",
      flag: "🇷🇺",
      coordinates: { x: 52, y: 32 },
      workingHours: "9:00 - 18:00 KALT",
    },
    {
      city: "Singapur",
      timezone: "Asia/Singapore",
      country: "Singapur",
      flag: "🇸🇬",
      coordinates: { x: 75, y: 60 },
      workingHours: "9:00 - 18:00 SGT",
    },
  ]

  useEffect(() => {
    const updateTimes = () => {
      const times: Record<string, string> = {}
      const status: Record<string, boolean> = {}

      timezones.forEach((tz) => {
        const now = new Date()
        const timeString = now.toLocaleTimeString("es-CL", {
          timeZone: tz.timezone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
        times[tz.city] = timeString

        // Check if it's working hours (9 AM to 6 PM)
        const hour = Number.parseInt(timeString.split(":")[0])
        status[tz.city] = hour >= 9 && hour < 18
      })

      setCurrentTimes(times)
      setWorkingStatus(status)
    }

    updateTimes()
    const interval = setInterval(updateTimes, 1000)
    return () => clearInterval(interval)
  }, [])

  // Calculate if at least one team is always on duty
  const isAlwaysOnDuty = () => {
    return Object.values(workingStatus).some((status) => status)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            Soporte Global 24/7
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Equipos en{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              3 Continentes
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Nuestros equipos de ingenieros especializados en IA trabajan las 24 horas para garantizar que tus agentes
            conversacionales funcionen perfectamente en cualquier momento del día.
          </p>

          {/* Always On Duty Indicator */}
          <div
            className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium ${
              isAlwaysOnDuty()
                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
            }`}
          >
            <div
              className={`w-2 h-2 rounded-full ${isAlwaysOnDuty() ? "bg-green-400" : "bg-yellow-400"} animate-pulse`}
            ></div>
            <span>{isAlwaysOnDuty() ? "Equipo N3uralia siempre disponible" : "Verificando cobertura"}</span>
          </div>
        </div>

        {/* World Map with Floating Cards */}
        <div className="relative mb-16">
          <div className="relative w-full h-96 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-slate-700/50 overflow-hidden">
            {/* World Map SVG Background */}
            <div className="absolute inset-0 opacity-20">
              <svg viewBox="0 0 1000 500" className="w-full h-full">
                <defs>
                  <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#334155" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                {/* Simplified world continents */}
                <path
                  d="M100,200 Q200,150 300,180 Q400,160 500,200 Q600,180 700,220 Q800,200 900,240 L900,400 L100,400 Z"
                  fill="#1e293b"
                  stroke="#334155"
                  strokeWidth="2"
                />
                <path
                  d="M150,100 Q250,80 350,120 Q450,100 550,140 L550,200 Q450,160 350,180 Q250,150 150,200 Z"
                  fill="#1e293b"
                  stroke="#334155"
                  strokeWidth="2"
                />
                <path
                  d="M600,250 Q700,230 800,270 Q850,250 900,280 L900,350 Q850,320 800,340 Q700,300 600,320 Z"
                  fill="#1e293b"
                  stroke="#334155"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* Location Pins and Cards */}
            {timezones.map((tz, index) => (
              <div
                key={tz.city}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${tz.coordinates.x}%`, top: `${tz.coordinates.y}%` }}
              >
                {/* Pulsing Pin */}
                <div className="relative">
                  <div
                    className={`w-4 h-4 rounded-full animate-pulse ${
                      workingStatus[tz.city]
                        ? "bg-gradient-to-r from-green-500 to-emerald-500"
                        : "bg-gradient-to-r from-blue-500 to-purple-500"
                    }`}
                  ></div>
                  <div
                    className={`absolute inset-0 w-4 h-4 rounded-full animate-ping opacity-75 ${
                      workingStatus[tz.city]
                        ? "bg-gradient-to-r from-green-500 to-emerald-500"
                        : "bg-gradient-to-r from-blue-500 to-purple-500"
                    }`}
                  ></div>
                </div>

                {/* Floating Card */}
                <Card
                  className={`absolute ${index % 2 === 0 ? "-top-24 -left-20" : "-bottom-24 -left-20"} w-48 bg-slate-800/90 border-slate-600/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl">{tz.flag}</span>
                        <div>
                          <div className="font-semibold text-white text-sm">{tz.city}</div>
                          <div className="text-xs text-slate-400">{tz.country}</div>
                        </div>
                      </div>
                      <div
                        className={`w-2 h-2 rounded-full ${
                          workingStatus[tz.city] ? "bg-green-400" : "bg-red-400"
                        } animate-pulse`}
                      ></div>
                    </div>
                    <div className="text-lg font-mono text-blue-300 mb-1">{currentTimes[tz.city] || "00:00"}</div>
                    <div className="text-xs text-slate-400 mb-2">{tz.workingHours}</div>
                    <div
                      className={`text-xs font-medium ${workingStatus[tz.city] ? "text-green-400" : "text-red-400"}`}
                    >
                      {workingStatus[tz.city] ? "Equipo en línea" : "Fuera de horario"}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Live Clocks Section */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {timezones.map((tz) => (
            <Card
              key={tz.city}
              className="bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <span className="text-3xl">{tz.flag}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{tz.city}</h3>
                    <p className="text-sm text-slate-400">{tz.country}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span className="text-2xl font-mono text-white">{currentTimes[tz.city] || "00:00"}</span>
                  </div>

                  <div className="text-sm text-slate-400">{tz.workingHours}</div>

                  <div
                    className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium ${
                      workingStatus[tz.city]
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-red-500/20 text-red-400 border border-red-500/30"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        workingStatus[tz.city] ? "bg-green-400" : "bg-red-400"
                      } animate-pulse`}
                    ></div>
                    <span>{workingStatus[tz.city] ? "Equipo en línea" : "Fuera de horario"}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coverage Statistics */}
        <div className="mt-12 text-center">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/50">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-slate-300">Cobertura Continua</div>
            </div>
            <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/50">
              <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
              <div className="text-slate-300">Continentes</div>
            </div>
            <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/50">
              <div className="text-3xl font-bold text-purple-400 mb-2">&lt; 1h</div>
              <div className="text-slate-300">Tiempo de Respuesta</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
