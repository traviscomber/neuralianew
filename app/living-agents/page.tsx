import type { Metadata } from "next"
import { LivingAgentsContent } from "./content"

export const metadata: Metadata = {
  title: "Living Agents de N3uralia | Cuatro Arquetipos de Inteligencia Aumentada",
  description:
    "N3uralia Living Agents: El Centinela, El Estratega, El Arquitecto, El Guardián. Agentes especializados que desarrollan personalidad emergente y se coordinan automáticamente. Inteligencia aumentada production-grade.",
  keywords:
    "N3uralia, Living Agents, agentes inteligentes, personalidad emergente, arquetipos IA, inteligencia aumentada, Centinela, Estratega, Arquitecto, Guardián",
}

export default function LivingAgentsPage() {
  return <LivingAgentsContent />
}
