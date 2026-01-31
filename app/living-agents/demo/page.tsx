import type { Metadata } from 'next'
import { DemoContent } from './content'

export const metadata: Metadata = {
  title: 'Living Agents Demo | N3uralia (Neuralia) - Chat Interactivo',
  description: 'Conversa con los 5 arquetipos de Living Agents. Observa cómo evolucionan sus personalidades a través de interacciones en tiempo real.',
}

export default function DemoPage() {
  return <DemoContent />
}
