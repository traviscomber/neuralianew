import type { Metadata } from "next"
import { LivingAgentsContent } from "./content"

export const metadata: Metadata = {
  title: "Living Agents de N3uralia (Neuralia) | Agentes con Personalidad Emergente",
  description:
    "N3uralia (Neuralia) Living Agents: Sistema de arquetipos que evolucionan. El Curador, La Tejedora, El Cronista, El Visionario, El Arquitecto. Agentes que desarrollan personalidad a través de interacciones.",
  keywords:
    "N3uralia, Living Agents, agentes inteligentes, personalidad emergente, arquetipos IA, Neuralia Chile",
}

export default function LivingAgentsPage() {
  return (
    <SectionBackground section="hero">
      <LivingAgentsContent />
    </SectionBackground>
  )
}
