'use client'

import { useState } from 'react'
import { ArrowRight, TrendingUp, Zap, Clock } from 'lucide-react'

interface ROIResults {
  monthlySavings: number
  annualSavings: number
  paybackMonths: number
  year1ROI: number
  implementationCost: number
}

export function ROICalculator() {
  const [companySize, setCompanySize] = useState<'small' | 'medium' | 'large'>('medium')
  const [processComplexity, setProcessComplexity] = useState<'low' | 'medium' | 'high'>('medium')
  const [manualHours, setManualHours] = useState(40)
  const [hourlyRate, setHourlyRate] = useState(25)
  const [results, setResults] = useState<ROIResults | null>(null)

  // Configuration based on company size and complexity
  const config = {
    small: { implementationCost: 15000, automationRate: 0.65 },
    medium: { implementationCost: 35000, automationRate: 0.75 },
    large: { implementationCost: 75000, automationRate: 0.85 },
  }

  const complexityMultiplier = {
    low: 0.8,
    medium: 1.0,
    high: 1.3,
  }

  const calculate = () => {
    const baseCost = config[companySize].implementationCost
    const implementationCost = baseCost * complexityMultiplier[processComplexity]
    const automationRate = config[companySize].automationRate

    const hoursAutomated = manualHours * automationRate
    const monthlySavings = hoursAutomated * hourlyRate * 4.33 // 4.33 weeks/month
    const annualSavings = monthlySavings * 12
    const paybackMonths = Math.ceil(implementationCost / monthlySavings)
    const year1ROI = ((annualSavings - implementationCost) / implementationCost) * 100

    setResults({
      monthlySavings,
      annualSavings,
      paybackMonths: Math.min(paybackMonths, 24),
      year1ROI: Math.max(year1ROI, 0),
      implementationCost,
    })
  }

  const handleCalculate = () => {
    calculate()
  }

  return (
    <div className="w-full">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Input Section */}
        <div className="space-y-8">
          <div>
            <label className="text-sm font-semibold text-foreground mb-4 block">
              Tamaño de Empresa
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(['small', 'medium', 'large'] as const).map((size) => (
                <button
                  key={size}
                  onClick={() => setCompanySize(size)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all text-sm ${
                    companySize === size
                      ? 'bg-primary text-primary-foreground'
                      : 'border border-border bg-card hover:border-primary/50'
                  }`}
                  type="button"
                >
                  {size === 'small' ? '1-50' : size === 'medium' ? '50-500' : '500+'}
                </button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-2">Número de empleados</p>
          </div>

          <div>
            <label className="text-sm font-semibold text-foreground mb-4 block">
              Complejidad del Proceso
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(['low', 'medium', 'high'] as const).map((complexity) => (
                <button
                  key={complexity}
                  onClick={() => setProcessComplexity(complexity)}
                  className={`px-4 py-3 rounded-lg font-medium transition-all text-sm ${
                    processComplexity === complexity
                      ? 'bg-primary text-primary-foreground'
                      : 'border border-border bg-card hover:border-primary/50'
                  }`}
                  type="button"
                >
                  {complexity === 'low' ? 'Básica' : complexity === 'medium' ? 'Media' : 'Compleja'}
                </button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-2">Nivel de automatización requerida</p>
          </div>

          <div>
            <label className="text-sm font-semibold text-foreground mb-4 block">
              Horas Manuales por Semana: {manualHours}h
            </label>
            <input
              type="range"
              min="5"
              max="160"
              step="5"
              value={manualHours}
              onChange={(e) => setManualHours(parseInt(e.target.value))}
              className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>5h</span>
              <span>160h</span>
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-foreground mb-4 block">
              Costo Horario Promedio: ${hourlyRate}
            </label>
            <input
              type="range"
              min="10"
              max="100"
              step="5"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(parseInt(e.target.value))}
              className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>$10</span>
              <span>$100</span>
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
            type="button"
          >
            Calcular Mi ROI
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Results Section */}
        {results ? (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20">
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-8">
                Tu Potencial de ROI
              </h3>

              <div className="space-y-6">
                {/* Monthly Savings */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                      Ahorros Mensuales
                    </p>
                    <p className="text-3xl font-bold text-foreground">
                      ${results.monthlySavings.toLocaleString('es-CL', {
                        maximumFractionDigits: 0,
                      })}
                    </p>
                  </div>
                </div>

                {/* Annual Savings */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                      Ahorros Anuales
                    </p>
                    <p className="text-3xl font-bold text-foreground">
                      ${results.annualSavings.toLocaleString('es-CL', {
                        maximumFractionDigits: 0,
                      })}
                    </p>
                  </div>
                </div>

                {/* Payback Period */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                      Período de Retorno
                    </p>
                    <p className="text-3xl font-bold text-foreground">
                      {results.paybackMonths} meses
                    </p>
                  </div>
                </div>

                {/* Year 1 ROI */}
                <div className="border-t border-primary/30 pt-6 mt-6">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    ROI Año 1
                  </p>
                  <p className="text-4xl font-bold text-primary">
                    {results.year1ROI.toFixed(0)}%
                  </p>
                </div>

                {/* Implementation Cost */}
                <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                  <p className="text-xs text-muted-foreground mb-1">Inversión Estimada</p>
                  <p className="text-lg font-semibold text-foreground">
                    ${results.implementationCost.toLocaleString('es-CL', {
                      maximumFractionDigits: 0,
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="/diagnosis"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 text-center"
            >
              Agendar Demo con Resultados
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                setResults(null)
                setManualHours(40)
                setHourlyRate(25)
              }}
              className="w-full px-6 py-2 border border-border text-foreground rounded-lg font-medium hover:bg-muted/50 transition-all"
              type="button"
            >
              Recalcular
            </button>
          </div>
        ) : (
          <div className="bg-muted/30 rounded-xl p-8 border border-border/50 flex flex-col items-center justify-center min-h-96">
            <div className="text-center space-y-3">
              <TrendingUp className="w-12 h-12 text-primary/40 mx-auto" />
              <h3 className="font-semibold text-foreground">Calcula Tu ROI Potencial</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                Ajusta los parámetros a la izquierda y descubre cuánto podrías ahorrar con N3uralia
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
