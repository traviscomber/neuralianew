import Link from "next/link"
import { ArrowRight, Brain, BookOpen, Zap } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Centro de Aprendizaje - N3uralia | Conceptos y Guías de IA",
  description:
    "Centro de Aprendizaje de N3uralia: Conceptos fundamentales sobre Agentic AI, Living Agents, guías técnicas y casos de estudio sobre sistemas inteligentes en producción.",
  keywords:
    "learning hub, centro de aprendizaje, conceptos IA, agentes inteligentes, Living Agents, guías técnicas",
  openGraph: {
    title: "Centro de Aprendizaje - N3uralia",
    description: "Aprende sobre IA y sistemas inteligentes",
    type: "website",
    locale: "es_CL",
  },
}

export default function LearningHubPage() {
  return (
    <>
      <main className="min-h-screen bg-background">


        <Footer />
      </main>
    </>
  )
}
