import type { Metadata } from "next"
import { SolutionsContent } from "./content"

export const metadata: Metadata = {
  title: "Soluciones N3uralia | Sistemas Agenticos en Producción",
  description:
    "N3uralia: Soluciones de inteligencia artificial para producción. Arquitecturas multi-agente, recuperación híbrida, provenance-first, memoria episódica y sistemas auto-reparables.",
  keywords:
    "N3uralia, soluciones IA, sistemas agenticos, multi-agente, arquitectura producción, hybrid retrieval, episodic memory, IA producción",
}

export default function SolutionsPage() {
  return <SolutionsContent />
}
