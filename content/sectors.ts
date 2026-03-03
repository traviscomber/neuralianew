import { Package, Cpu, TrendingUp, Users, Building2, Workflow } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface Sector {
  titleES: string
  titleEN: string
  descES: string
  descEN: string
  icon: LucideIcon
  link: string
}

export const SECTORS: Sector[] = [
  {
    titleES: "Retail & E-commerce",
    titleEN: "Retail & E-commerce",
    descES: "Recomendaciones personalizadas, gestión de inventario, servicio al cliente 24/7",
    descEN: "Personalized recommendations, inventory management, 24/7 customer service",
    icon: Package,
    link: "#",
  },
  {
    titleES: "Manufactura",
    titleEN: "Manufacturing",
    descES: "Optimización de procesos, control de calidad, mantenimiento predictivo",
    descEN: "Process optimization, quality control, predictive maintenance",
    icon: Cpu,
    link: "#",
  },
  {
    titleES: "Servicios Financieros",
    titleEN: "Financial Services",
    descES: "Análisis de riesgo, detección de fraude, asesoría personalizada",
    descEN: "Risk analysis, fraud detection, personalized advice",
    icon: TrendingUp,
    link: "#",
  },
  {
    titleES: "Salud",
    titleEN: "Healthcare",
    descES: "Análisis de documentos, triaje de pacientes, gestión de citas",
    descEN: "Document analysis, patient triage, appointment management",
    icon: Users,
    link: "#",
  },
  {
    titleES: "Legal",
    titleEN: "Legal",
    descES: "Revisión de contratos, investigación legal, cumplimiento normativo",
    descEN: "Contract review, legal research, regulatory compliance",
    icon: Building2,
    link: "#",
  },
  {
    titleES: "Logística",
    titleEN: "Logistics",
    descES: "Optimización de rutas, predicción de demanda, automatización de almacén",
    descEN: "Route optimization, demand prediction, warehouse automation",
    icon: Workflow,
    link: "#",
  },
]
