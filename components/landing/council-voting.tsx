'use client'

import { ThumbsUp, AlertCircle, TrendingUp } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

interface CouncilAgent {
  name: string
  role: string
  vote: 'approve' | 'caution'
  reasoning: string
  color: string
}

interface CouncilVotingProps {
  title: string
  scenario: string
  agents: CouncilAgent[]
  decision: string
  confidence: number
}

export function CouncilVoting({ title, scenario, agents, decision, confidence }: CouncilVotingProps) {
  const { language } = useLanguage()

  const t = {
    es: {
      expertCouncil: 'N3uralia Expert Council™',
      scenario: 'Escenario',
      decision: 'Decisión Consensuada',
      confidence: 'Confianza',
      agents: 'Agentes Especializados',
    },
    en: {
      expertCouncil: 'N3uralia Expert Council™',
      scenario: 'Scenario',
      decision: 'Consensus Decision',
      confidence: 'Confidence',
      agents: 'Specialized Agents',
    },
  }[language]

  return (
    <div className="border border-primary/20 rounded-lg p-8 bg-white">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-primary rounded-full" />
          <span className="text-xs font-semibold text-primary uppercase tracking-wide">
            {t.expertCouncil}
          </span>
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
      </div>

      {/* Scenario */}
      <div className="mb-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
        <p className="text-xs font-semibold text-primary mb-2 uppercase">{t.scenario}</p>
        <p className="text-sm text-foreground">{scenario}</p>
      </div>

      {/* Voting Agents */}
      <div className="mb-8">
        <p className="text-xs font-semibold text-muted-foreground mb-4 uppercase">{t.agents}</p>
        <div className="grid md:grid-cols-5 gap-3">
          {agents.map((agent, i) => (
            <div key={i} className={`border rounded-lg p-3 ${agent.vote === 'approve' ? 'border-green-500/30 bg-green-50/50' : 'border-amber-500/30 bg-amber-50/50'}`}>
              <div className="flex items-center gap-2 mb-2">
                {agent.vote === 'approve' ? (
                  <ThumbsUp className="w-4 h-4 text-green-600" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                )}
                <span className="text-xs font-semibold text-foreground">{agent.name}</span>
              </div>
              <p className="text-xs text-muted-foreground mb-2">{agent.role}</p>
              <p className="text-xs text-foreground italic">{agent.reasoning}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decision */}
      <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-primary/10">
        <div>
          <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase">{t.decision}</p>
          <p className="text-lg font-semibold text-primary">{decision}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase">{t.confidence}</p>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all"
                style={{ width: `${confidence}%` }}
              />
            </div>
            <span className="text-sm font-semibold text-primary">{confidence}%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
