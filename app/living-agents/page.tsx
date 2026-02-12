import type { Metadata } from "next"
import { LivingAgentsContent } from "./content"

export const metadata: Metadata = {
  title: "Living Agents | Tu Equipo de Expertos en IA 24/7",
  description:
    "Centinela (tu detective), Estratega (tu CEO), Arquitecto (tu CTO), Guardián (tu COO). 4 expertos que trabajan sin salario. Especializado pero coordinado.",
  keywords:
    "Living Agents, equipo IA, startup builder, automatización, inteligencia aumentada",
}

export default function LivingAgentsPage() {
  return <LivingAgentsContent />
}
