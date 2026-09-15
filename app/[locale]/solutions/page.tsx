import type { Metadata } from "next"
import { absoluteUrl } from "@/lib/site"

type Props = {
  params: Promise<{ locale: string }>
}

// Dynamic metadata based on locale - /es/solutions points to /es/soluciones canonical
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const isES = locale === 'es'
  const esUrl = absoluteUrl('/es/soluciones')
  const enUrl = absoluteUrl('/en/solutions')
  const canonical = isES ? esUrl : enUrl

  return {
    title: isES
      ? "Soluciones de Sistemas Agénticos - Automatización para Múltiples Industrias"
      : "Agentic Systems Solutions - Automation for Every Industry",
    description: isES
      ? "Soluciones especializadas de sistemas agénticos para operaciones reales en retail, manufactura, turismo, minería, logística y otros sectores."
      : "AI and software systems for real operations across retail, manufacturing, hospitality, mining, logistics and other sectors.",
    alternates: {
      canonical,
      languages: {
        'es-CL': esUrl,
        es: esUrl,
        en: enUrl,
        'en-US': enUrl,
        'x-default': enUrl,
      },
    },
    openGraph: {
      title: isES
        ? "Soluciones de Sistemas Agénticos"
        : "Agentic Systems Solutions",
      description: isES
        ? "Sistemas de IA, automatización y software para operaciones reales."
        : "AI, automation and software systems for real operations.",
      url: canonical,
      type: 'website',
      locale: isES ? 'es_CL' : 'en_US',
    },
  }
}

export { /* @next-codemod-error `default` export is re-exported. Check if this component uses `params` or `searchParams`*/
default } from "../soluciones/page"
