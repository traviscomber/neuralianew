import type { Metadata } from 'next'
import { RetroCaseStudy, type RetroCaseStudyContent } from '@/components/retro-case-study'
import { DEFAULT_LOCALE, isValidLocale, type Locale } from '@/lib/get-locale'
import { buildLocalizedMetadata } from '@/lib/page-metadata'

interface PageProps {
  params: Promise<{ locale: string }>
}

const content: Record<Locale, RetroCaseStudyContent & { metadataTitle: string; metadataDescription: string }> = {
  es: {
    metadataTitle: 'EcoSueloLab | Caso de implementación N3uralia',
    metadataDescription: 'Cómo EcoSueloLab acerca información agronómica y satelital al trabajo de campo mediante un agente de IA conectado a WhatsApp.',
    eyebrow: 'Agtech · WhatsApp IA',
    title: 'Datos de campo accesibles desde el canal donde ocurre el trabajo.',
    subtitle: 'EcoSueloLab conecta información agronómica y satelital con un agente conversacional para que el usuario pueda consultar contexto útil sobre cultivo y predio sin depender de navegar múltiples dashboards.',
    back: 'Volver a casos',
    facts: [
      { label: 'Industria', value: 'Agricultura' },
      { label: 'Canal', value: 'WhatsApp' },
      { label: 'Fuente', value: 'Datos agronómicos y satelitales' },
    ],
    challengeEyebrow: '01 / Problema',
    challengeTitle: 'Tener datos no significa que estén disponibles en el momento de decidir.',
    challenge: 'La información de monitoreo puede ser valiosa y aun así quedar lejos del usuario que trabaja en terreno. Cuando consultar el dato exige cambiar de herramienta, reconstruir contexto o interpretar salidas técnicas, la fricción aumenta.',
    signals: [
      { title: 'Consulta fragmentada', text: 'El usuario debe cambiar entre fuentes o interfaces para responder preguntas operativas simples.' },
      { title: 'Contexto técnico', text: 'Los datos necesitan contexto sobre cultivo, predio y condición antes de convertirse en una respuesta útil.' },
      { title: 'Canal separado', text: 'El trabajo cotidiano ocurre en mensajería, mientras la información relevante suele vivir en sistemas distintos.' },
    ],
    solutionEyebrow: '02 / Sistema',
    solutionTitle: 'Un agente que consulta la información disponible y devuelve contexto operativo.',
    solution: 'La capa conversacional conecta WhatsApp con la información disponible de EcoSueloLab. La pregunta del usuario se interpreta en lenguaje natural, se consulta el contexto pertinente y se devuelve una respuesta orientada al trabajo de campo.',
    flow: [
      'El usuario realiza una consulta en lenguaje natural desde WhatsApp.',
      'El sistema identifica el contexto necesario de cultivo, predio o condición.',
      'Se consulta la información agronómica o satelital disponible para esa pregunta.',
      'La respuesta vuelve al canal cotidiano del usuario con contexto explícito y sin crear una fuente paralela de verdad.',
    ],
    evidenceEyebrow: '03 / Evidencia',
    evidenceTitle: 'Qué puede revisarse en la implementación.',
    evidence: [
      { title: 'Canal conectado', text: 'WhatsApp funciona como interfaz de consulta sobre información existente, no como repositorio alternativo.' },
      { title: 'Contexto trazable', text: 'La respuesta depende del contexto disponible del cultivo o predio y puede distinguir dato fuente de interpretación.' },
      { title: 'Interacción simple', text: 'El usuario puede formular preguntas operativas en lenguaje natural sin navegar una cadena de pantallas.' },
    ],
    ctaEyebrow: '04 / Aplicación',
    ctaTitle: 'Si el dato existe pero está lejos del usuario, hay una capa de acceso por diseñar.',
    ctaBody: 'El diagnóstico identifica qué fuentes deben conectarse, qué preguntas son realmente operativas y qué respuestas requieren validación humana.',
    primaryCta: 'Agendar diagnóstico',
    secondaryCta: 'Ver soluciones',
  },
  en: {
    metadataTitle: 'EcoSueloLab | N3uralia implementation case',
    metadataDescription: 'How EcoSueloLab brings agronomic and satellite information into field work through an AI agent connected to WhatsApp.',
    eyebrow: 'Agtech · WhatsApp AI',
    title: 'Field data accessible from the channel where work happens.',
    subtitle: 'EcoSueloLab connects agronomic and satellite information to a conversational agent so users can query useful crop and field context without depending on multiple dashboards.',
    back: 'Back to cases',
    facts: [
      { label: 'Industry', value: 'Agriculture' },
      { label: 'Channel', value: 'WhatsApp' },
      { label: 'Source', value: 'Agronomic and satellite data' },
    ],
    challengeEyebrow: '01 / Problem',
    challengeTitle: 'Having data does not mean it is available at the moment of decision.',
    challenge: 'Monitoring information can be valuable and still remain far from the person working in the field. When retrieving it requires switching tools, rebuilding context or interpreting technical outputs, friction grows.',
    signals: [
      { title: 'Fragmented lookup', text: 'Users may need to move across sources or interfaces to answer simple operational questions.' },
      { title: 'Technical context', text: 'Data needs crop, field and condition context before it becomes a useful response.' },
      { title: 'Separate channel', text: 'Daily work happens in messaging while relevant information often lives in different systems.' },
    ],
    solutionEyebrow: '02 / System',
    solutionTitle: 'An agent that queries available information and returns operational context.',
    solution: 'The conversational layer connects WhatsApp to the information available in EcoSueloLab. A user question is interpreted in natural language, the relevant context is queried, and a response is returned for field work.',
    flow: [
      'The user asks a natural-language question from WhatsApp.',
      'The system identifies the crop, field or condition context required.',
      'Available agronomic or satellite information is queried for that question.',
      'The answer returns to the user’s everyday channel with explicit context and without creating a parallel source of truth.',
    ],
    evidenceEyebrow: '03 / Evidence',
    evidenceTitle: 'What can be reviewed in the implementation.',
    evidence: [
      { title: 'Connected channel', text: 'WhatsApp acts as a query interface over existing information rather than an alternative repository.' },
      { title: 'Traceable context', text: 'The answer depends on available crop or field context and can distinguish source data from interpretation.' },
      { title: 'Simple interaction', text: 'Users can ask operational questions in natural language without navigating a chain of screens.' },
    ],
    ctaEyebrow: '04 / Application',
    ctaTitle: 'If the data exists but is far from the user, there is an access layer to design.',
    ctaBody: 'The diagnosis identifies which sources must be connected, which questions are truly operational, and which answers require human validation.',
    primaryCta: 'Book diagnosis',
    secondaryCta: 'View solutions',
  },
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  const page = content[locale]

  return buildLocalizedMetadata({
    locale,
    path: '/case-studies/ecosuelolab',
    type: 'article',
    title: page.metadataTitle,
    description: page.metadataDescription,
  })
}

export default async function EcosuelolabCaseStudy(props: PageProps) {
  const params = await props.params
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  return <RetroCaseStudy locale={locale} page={content[locale]} />
}
