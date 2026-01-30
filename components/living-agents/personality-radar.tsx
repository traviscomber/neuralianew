'use client'

import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend, Tooltip } from 'recharts'

interface PersonalityRadarProps {
  traits: string[]
  scores: number[]
  agentName: string
}

export function PersonalityRadar({ traits, scores, agentName }: PersonalityRadarProps) {
  // Prepare data for radar chart
  const data = traits.map((trait, index) => ({
    name: trait,
    value: scores[index],
    fullMark: 100,
  }))

  // N3uralia primary color: RGB(115, 150, 150) - Teal
  const primaryColor = 'rgb(115, 150, 150)'
  const primaryColorTransparent = 'rgba(115, 150, 150, 0.3)'

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="mb-4 text-center">
        <p className="text-sm text-muted-foreground mb-1">Perfil de Personalidad</p>
        <p className="text-lg font-semibold text-foreground">{agentName}</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
          <PolarGrid stroke="rgb(229, 231, 235)" strokeDasharray="3 3" />
          <PolarAngleAxis 
            dataKey="name" 
            tick={{ fontSize: 12, fill: 'rgb(107, 114, 128)' }}
          />
          <PolarRadiusAxis 
            angle={90} 
            domain={[0, 100]}
            tick={{ fontSize: 10, fill: 'rgb(107, 114, 128)' }}
          />
          <Radar 
            name="Puntuación" 
            dataKey="value" 
            stroke={primaryColor} 
            fill={primaryColorTransparent}
            dot={{ fill: primaryColor, r: 4 }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'rgb(255, 255, 255)',
              border: `1px solid ${primaryColor}`,
              borderRadius: '8px',
              padding: '8px 12px',
            }}
            formatter={(value) => `${value}%`}
            labelStyle={{ color: primaryColor }}
          />
        </RadarChart>
      </ResponsiveContainer>

      {/* Traits Legend */}
      <div className="mt-6 grid grid-cols-2 gap-2 w-full text-xs">
        {traits.map((trait, index) => (
          <div key={trait} className="flex items-center gap-2">
            <div 
              className="w-2 h-2 rounded-full" 
              style={{ backgroundColor: primaryColor }}
            />
            <span className="text-muted-foreground">
              {trait}: <span className="font-semibold text-foreground">{scores[index]}%</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
