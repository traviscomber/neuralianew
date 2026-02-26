import type { Metadata } from 'next'
import { EvolutionPageContent } from './content'

export const metadata: Metadata = {
  title: 'Evolución de Living Agents | N3uralia (Neuralia)',
  description: 'Visualiza la evolución de personalidad de los agentes a lo largo del tiempo. Gráficos, métricas y hitos de desarrollo.',
}

export default function EvolutionPage() {
  return <EvolutionPageContent />
}
