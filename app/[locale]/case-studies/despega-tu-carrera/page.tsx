import type { Metadata } from 'next'
import { RetroCaseStudy, type RetroCaseStudyContent } from '@/components/retro-case-study'
import { DEFAULT_LOCALE, isValidLocale, type Locale } from '@/lib/get-locale'
import { buildLocalizedMetadata } from '@/lib/page-metadata'

interface PageProps {
  params: Promise<{ locale: string }>
}

const content: Record<Locale, RetroCaseStudyContent & { metadataTitle: string; metadataDescription: string }> = {
  es: {
    metadataTitle: 'Despega Tu Carrera | Caso de implementación N3uralia',
    metadataDescription: 'Cómo Despega Tu Carrera convierte reflexión, diagnóstico y próximos pasos en una experiencia AI-first con Vera, Perfil Vivo y una ruta estructurada.',
    eyebrow: 'Desarrollo profesional · IA',
    title: 'Una metodología convertida en un sistema que acumula contexto.',
    subtitle: 'Despega Tu Carrera organiza reflexión, fortalezas, brechas y próximos pasos dentro de una experiencia guiada por Vera. El sistema construye un Perfil Vivo desde las respuestas del usuario y lo usa para dar continuidad al recorrido.',
    back: 'Volver a casos',
    facts: [
      { label: 'Área', value: 'Desarrollo profesional' },
      { label: 'Asistente', value: 'Vera' },
      { label: 'Núcleo', value: 'Perfil Vivo + ruta estructurada' },
    ],
    challengeEyebrow: '01 / Problema',
    challengeTitle: 'El valor se pierde cuando el diagnóstico, los ejercicios y los siguientes pasos viven separados.',
    challenge: 'Una experiencia de desarrollo profesional necesita recordar lo que el usuario ya respondió, conectar esa información con el siguiente ejercicio y convertir reflexión en una secuencia coherente de acciones.',
    signals: [
      { title: 'Contexto que se reinicia', text: 'Sin una memoria estructurada, cada interacción vuelve a pedir información o pierde continuidad con lo anterior.' },
      { title: 'Contenido desconectado', text: 'Tests, ejercicios y recursos aislados no forman por sí solos una ruta de desarrollo.' },
      { title: 'Siguiente paso ambiguo', text: 'El usuario necesita entender qué hacer después y por qué esa acción se relaciona con su propio contexto.' },
    ],
    solutionEyebrow: '02 / Sistema',
    solutionTitle: 'Vera, Perfil Vivo y una metodología organizada en cuatro etapas.',
    solution: 'La plataforma estructura el recorrido en Radar Estratégico, Despega Cerebral, Entrenamiento y Tu Ruta. Las respuestas alimentan un Perfil Vivo que conserva contexto para ejercicios, recomendaciones y próximos pasos.',
    flow: [
      'Radar Estratégico organiza la situación inicial, fortalezas, señales y objetivos del usuario.',
      'Despega Cerebral convierte reflexión en ejercicios y nuevas perspectivas dentro del mismo contexto.',
      'Entrenamiento conecta brechas identificadas con prácticas y acciones concretas.',
      'Tu Ruta consolida el contexto acumulado en próximos pasos que el usuario puede revisar y continuar.',
    ],
    evidenceEyebrow: '03 / Evidencia',
    evidenceTitle: 'Qué puede revisarse en el producto.',
    evidence: [
      { title: 'Perfil Vivo', text: 'El contexto se construye a partir de las respuestas del usuario y permanece disponible dentro del recorrido.' },
      { title: 'Metodología explícita', text: 'Las cuatro etapas ordenan la experiencia y evitan que el producto sea sólo una colección de contenidos o prompts.' },
      { title: 'Continuidad', text: 'Ejercicios y próximos pasos pueden apoyarse en información ya construida en etapas anteriores.' },
    ],
    ctaEyebrow: '04 / Aplicación',
    ctaTitle: 'Si tu metodología tiene valor, conviértela en una experiencia que preserve contexto.',
    ctaBody: 'El diagnóstico separa contenido, reglas, datos del usuario y decisiones para diseñar un sistema que pueda crecer sin perder coherencia.',
    primaryCta: 'Agendar diagnóstico',
    secondaryCta: 'Ver soluciones',
  },
  en: {
    metadataTitle: 'Despega Tu Carrera | N3uralia implementation case',
    metadataDescription: 'How Despega Tu Carrera turns reflection, diagnosis and next actions into an AI-first experience with Vera, a Live Profile and a structured route.',
    eyebrow: 'Professional development · AI',
    title: 'A methodology turned into a system that accumulates context.',
    subtitle: 'Despega Tu Carrera organizes reflection, strengths, gaps and next actions inside an experience guided by Vera. The system builds a Live Profile from the user’s answers and uses it to preserve continuity across the journey.',
    back: 'Back to cases',
    facts: [
      { label: 'Area', value: 'Professional development' },
      { label: 'Assistant', value: 'Vera' },
      { label: 'Core', value: 'Live Profile + structured route' },
    ],
    challengeEyebrow: '01 / Problem',
    challengeTitle: 'Value is lost when diagnosis, exercises and next actions live separately.',
    challenge: 'A professional-development experience needs to remember what the user has already answered, connect that information to the next exercise and turn reflection into a coherent sequence of actions.',
    signals: [
      { title: 'Context resets', text: 'Without structured memory, each interaction asks for information again or loses continuity with what came before.' },
      { title: 'Disconnected content', text: 'Assessments, exercises and resources do not become a development route simply by existing in the same product.' },
      { title: 'Ambiguous next step', text: 'The user needs to understand what to do next and why that action relates to their own context.' },
    ],
    solutionEyebrow: '02 / System',
    solutionTitle: 'Vera, a Live Profile and a methodology organized into four stages.',
    solution: 'The platform structures the journey into Strategic Radar, Despega Cerebral, Training and Your Route. User answers feed a Live Profile that preserves context for exercises, recommendations and next actions.',
    flow: [
      'Strategic Radar organizes the user’s starting point, strengths, signals and goals.',
      'Despega Cerebral turns reflection into exercises and new perspectives inside the same context.',
      'Training connects identified gaps with practical exercises and concrete actions.',
      'Your Route consolidates accumulated context into next steps that the user can review and continue.',
    ],
    evidenceEyebrow: '03 / Evidence',
    evidenceTitle: 'What can be reviewed in the product.',
    evidence: [
      { title: 'Live Profile', text: 'Context is built from the user’s own answers and remains available throughout the journey.' },
      { title: 'Explicit methodology', text: 'The four stages organize the experience and keep the product from becoming only a collection of content or prompts.' },
      { title: 'Continuity', text: 'Exercises and next actions can build on information already established in earlier stages.' },
    ],
    ctaEyebrow: '04 / Application',
    ctaTitle: 'If your methodology has value, turn it into an experience that preserves context.',
    ctaBody: 'The diagnosis separates content, rules, user data and decisions so the system can grow without losing coherence.',
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
    path: '/case-studies/despega-tu-carrera',
    type: 'article',
    title: page.metadataTitle,
    description: page.metadataDescription,
  })
}

export default async function DespegaTuCarreraCaseStudy(props: PageProps) {
  const params = await props.params
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  return <RetroCaseStudy locale={locale} page={content[locale]} />
}
