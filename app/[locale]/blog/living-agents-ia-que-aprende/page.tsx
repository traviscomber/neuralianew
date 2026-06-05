import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"
import { buildSeo } from "@/lib/metadata-utils"

export const metadata: Metadata = buildSeo({
  locale: "es",
  path: "/es/blog/living-agents-ia-que-aprende",
  title: "Living Agents: AI Agents que Aprenden | N3uralia Blog",
  description:
    "Living Agents de N3uralia: sistemas agenticos que evolucionan continuamente. Arquitectura fullstack, implementación y resultados reales de AI agents adaptativos.",
  keywords:
    "Living Agents, AI agents, n3uralia agents, IA que aprende, agentes evolutivos, sistemas agenticos, fullstack, machine learning, retroalimentación",
})

export default function BlogPost() {
  return (
    <>
      
      <Footer />
    </>
  )
}
