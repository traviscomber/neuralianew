'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface EvolutionData {
  date: string
  analytic: number
  observer: number
  reflexive: number
  organizer: number
  historian: number
}

interface EvolutionTimelineProps {
  data: EvolutionData[]
  agentName: string
}

export function EvolutionTimeline({ data, agentName }: EvolutionTimelineProps) {
  // N3uralia primary color
  const primaryColor = 'rgb(115, 150, 150)'

  return (
    <div className="w-full flex flex-col">
      <div className="mb-4">
        <p className="text-sm text-muted-foreground mb-1">Evolución en el Tiempo</p>
        <p className="text-lg font-semibold text-foreground">{agentName}</p>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgb(229, 231, 235)" />
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 12, fill: 'rgb(107, 114, 128)' }}
          />
          <YAxis 
            tick={{ fontSize: 12, fill: 'rgb(107, 114, 128)' }}
            domain={[0, 100]}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'rgb(255, 255, 255)',
              border: `1px solid ${primaryColor}`,
              borderRadius: '8px',
            }}
            formatter={(value) => `${value}%`}
            labelStyle={{ color: primaryColor }}
          />
          <Line 
            type="monotone" 
            dataKey="analytic" 
            stroke={primaryColor}
            strokeWidth={2}
            dot={{ fill: primaryColor, r: 3 }}
            name="Analítico"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
