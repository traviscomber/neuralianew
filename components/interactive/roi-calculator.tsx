"use client"

import { useState, useEffect } from "react"
import { ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"

interface ROIState {
  employees: number
  currentHours: number
  hourlyRate: number
  automationPercentage: number
}

export function ROICalculator() {
  const [state, setState] = useState<ROIState>({
    employees: 10,
    currentHours: 40,
    hourlyRate: 50,
    automationPercentage: 50,
  })

  const [roi, setROI] = useState({
    monthlySavings: 0,
    yearlySavings: 0,
    hoursFreed: 0,
    paybackMonths: 0,
  })

  // Recalculate ROI whenever values change
  useEffect(() => {
    const monthlyHours = state.employees * state.currentHours * 4.33 // weeks per month
    const automatedHours = monthlyHours * (state.automationPercentage / 100)
    const monthlySavings = automatedHours * state.hourlyRate
    const yearlySavings = monthlySavings * 12

    // Assume implementation cost is roughly 3 months of savings
    const implementationCost = monthlySavings * 3
    const paybackMonths = implementationCost > 0 ? implementationCost / monthlySavings : 0

    setROI({
      monthlySavings: Math.round(monthlySavings),
      yearlySavings: Math.round(yearlySavings),
      hoursFreed: Math.round(automatedHours),
      paybackMonths: Math.round(paybackMonths),
    })
  }, [state])

  const handleChange = (key: keyof ROIState, value: number) => {
    setState(prev => ({ ...prev, [key]: value }))
  }

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 bg-primary/10 px-4 py-2 rounded-full">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Calcula tu ROI</span>
          </div>
          <h2 className="section-heading mb-4">¿Cuánto Podrías Ahorrar?</h2>
          <p className="section-subheading">
            Usa esta calculadora para estimar el impacto financiero de automatizar tus procesos con N3uralia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Controls */}
          <div className="space-y-8 bg-card rounded-lg border border-border p-8">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Empleados Afectados: <span className="text-primary">{state.employees}</span>
              </label>
              <input
                type="range"
                min="1"
                max="200"
                value={state.employees}
                onChange={(e) => handleChange("employees", parseInt(e.target.value))}
                className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>1</span>
                <span>200+</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Horas/Semana en Tareas Repetitivas: <span className="text-primary">{state.currentHours}h</span>
              </label>
              <input
                type="range"
                min="5"
                max="40"
                value={state.currentHours}
                onChange={(e) => handleChange("currentHours", parseInt(e.target.value))}
                className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>5h</span>
                <span>40h</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Tarifa Horaria Promedio: <span className="text-primary">${state.hourlyRate}</span>
              </label>
              <input
                type="range"
                min="20"
                max="150"
                step="10"
                value={state.hourlyRate}
                onChange={(e) => handleChange("hourlyRate", parseInt(e.target.value))}
                className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>$20/h</span>
                <span>$150/h</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                % de Automatización: <span className="text-primary">{state.automationPercentage}%</span>
              </label>
              <input
                type="range"
                min="10"
                max="100"
                step="10"
                value={state.automationPercentage}
                onChange={(e) => handleChange("automationPercentage", parseInt(e.target.value))}
                className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>10%</span>
                <span>100%</span>
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="space-y-6">
            {/* Monthly Savings Card */}
            <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg border border-primary/40 p-8 hover:border-primary/60 transition-colors">
              <p className="text-sm text-muted-foreground mb-2">Ahorros Mensuales</p>
              <h3 className="text-4xl font-bold text-primary mb-2">
                ${roi.monthlySavings.toLocaleString()}
              </h3>
              <p className="text-sm text-muted-foreground">En costos operacionales</p>
            </div>

            {/* Yearly Savings Card */}
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 rounded-lg border border-green-500/40 p-8 hover:border-green-500/60 transition-colors">
              <p className="text-sm text-muted-foreground mb-2">Ahorros Anuales</p>
              <h3 className="text-3xl font-bold text-green-600 mb-2">
                ${roi.yearlySavings.toLocaleString()}
              </h3>
              <p className="text-sm text-muted-foreground">Impacto financiero año completo</p>
            </div>

            {/* Hours Freed Card */}
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-lg border border-blue-500/40 p-8 hover:border-blue-500/60 transition-colors">
              <p className="text-sm text-muted-foreground mb-2">Horas Liberadas Mensualmente</p>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">
                {roi.hoursFreed.toLocaleString()}h
              </h3>
              <p className="text-sm text-muted-foreground">Tu equipo puede enfocarse en estrategia</p>
            </div>

            {/* Payback Period Card */}
            <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/5 rounded-lg border border-amber-500/40 p-8 hover:border-amber-500/60 transition-colors">
              <p className="text-sm text-muted-foreground mb-2">Periodo de Recuperación</p>
              <h3 className="text-3xl font-bold text-amber-600 mb-2">
                {Math.max(1, roi.paybackMonths)} meses
              </h3>
              <p className="text-sm text-muted-foreground">Tiempo para recuperar inversión</p>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 mt-6"
            >
              Iniciar Conversación
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-4 bg-muted/50 rounded-lg border border-border text-center text-xs text-muted-foreground">
          <p>
            *Esta calculadora proporciona estimaciones basadas en valores ingresados. Los resultados reales pueden variar
            según la complejidad, industria e implementación específica. Contacta a nuestro equipo para una evaluación
            personalizada.
          </p>
        </div>
      </div>
    </section>
  )
}
