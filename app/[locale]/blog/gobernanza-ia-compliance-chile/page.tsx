import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"
import { buildSeo } from "@/lib/metadata-utils"

export const metadata: Metadata = buildSeo({
  locale: "es",
  path: "/es/blog/gobernanza-ia-compliance-chile",
  title: "Gobernanza de IA y Compliance para Empresas Chilenas | N3uralia",
  description:
    "Marco legal, auditoría y seguridad. Cómo implementar agentes cumpliendo normativas chilenas e internacionales.",
  keywords:
    "gobernanza IA, compliance IA, LGPD chile, regulación IA, auditoría agentes, seguridad datos",
})

export default function BlogPost() {
  return (
    <>
      <Footer />
    </>
  )
}
