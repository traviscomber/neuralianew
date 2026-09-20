import type { Metadata } from "next"
import { DiagnosisV2Client } from "@/components/diagnosis/diagnosis-v2-client"
import { DEFAULT_LOCALE, isValidLocale } from "@/lib/get-locale"
import { buildLocalizedMetadata } from "@/lib/page-metadata"
import "./diagnosis-v2.css"

interface PageProps {
  params: Promise<{
    locale: string
  }>
}

const metadataCopy = {
  es: {
    title: "Diagnóstico IA para Operaciones Reales | N3uralia",
    description:
      "Diagnóstico operacional de N3uralia. Recibe una lectura preliminar y, si hace sentido, una recomendación revisada para definir dónde empezar a mejorar tu operación.",
  },
  en: {
    title: "AI Diagnosis for Real Operations | N3uralia",
    description:
      "N3uralia operational diagnosis. Receive a preliminary operational read and, when useful, a reviewed recommendation for where to start improving your operation.",
  },
} as const

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = metadataCopy[locale]

  return buildLocalizedMetadata({
    locale,
    title: page.title,
    description: page.description,
    path: "/diagnostico",
  })
}

export default async function DiagnosisPage(props: PageProps) {
  const params = await props.params
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE

  return <DiagnosisV2Client locale={locale} />
}
