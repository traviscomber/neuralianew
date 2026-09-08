import type { Metadata } from 'next'
import { RetroCaseStudy, type RetroCaseStudyContent } from '@/components/retro-case-study'
import { DEFAULT_LOCALE, isValidLocale, type Locale } from '@/lib/get-locale'
import { buildLocalizedMetadata } from '@/lib/page-metadata'

interface PageProps {
  params: Promise<{ locale: string }>
}

const content: Record<Locale, RetroCaseStudyContent & { metadataTitle: string; metadataDescription: string }> = {
  es: {
    metadataTitle: 'Black Swan Facility Core | Caso de implementación N3uralia',
    metadataDescription: 'Cómo Black Swan Facility Core conecta reservas, personas, activos, inventario, compras, mantenimiento, finanzas y eventos mediante objetos canónicos compartidos.',
    eyebrow: 'Facility & Hospitality OS',
    title: 'Una misma verdad operacional para hospitality y facilities.',
    subtitle: 'Black Swan Facility Core está diseñado para que reservas, huéspedes, activos, compras, inventario, mantenimiento, cargos, pagos y evidencia no se conviertan en silos independientes.',
    back: 'Volver a casos',
    facts: [
      { label: 'Industria', value: 'Hospitality & facilities' },
      { label: 'Sistema', value: 'Facility Core' },
      { label: 'Principio', value: 'Objetos canónicos compartidos' },
    ],
    challengeEyebrow: '01 / Problema',
    challengeTitle: 'La complejidad aparece cuando un mismo objeto cambia de identidad entre áreas.',
    challenge: 'Una operación de hospitality conecta personas, habitaciones, activos, reservas, compras, mantenimiento, finanzas y eventos. Si cada área conserva su propia versión del mismo objeto, la coordinación pierde contexto y la evidencia se fragmenta.',
    signals: [
      { title: 'Identidad fragmentada', text: 'Reservas, activos, huéspedes y documentos pueden terminar representados de forma distinta según el módulo que los usa.' },
      { title: 'Flujos cruzados', text: 'Una solicitud puede tocar operación, mantenimiento, inventario, compras y finanzas antes de cerrarse.' },
      { title: 'Evidencia dispersa', text: 'Sin historial común, reconstruir qué ocurrió exige revisar múltiples pantallas, mensajes o registros.' },
    ],
    solutionEyebrow: '02 / Sistema',
    solutionTitle: 'Objetos canónicos que conservan contexto al cruzar flujos.',
    solution: 'El Facility Core modela relaciones compartidas en vez de replicar información por módulo. La misma operación puede avanzar entre áreas manteniendo identidad, estado, evidencia e historial.',
    flow: [
      'Reservation → Room → Guest → Activity → Charge → Payment → Invoice.',
      'Procurement → Receipt → Inventory para conectar compra, recepción y disponibilidad.',
      'Asset → Issue → Work → Evidence → Closure para mantenimiento y seguimiento.',
      'Roles y vistas operativas consumen los mismos objetos en lugar de reconstruirlos por separado.',
    ],
    evidenceEyebrow: '03 / Evidencia',
    evidenceTitle: 'Qué puede revisarse en el sistema.',
    evidence: [
      { title: 'Modelo compartido', text: 'Las áreas trabajan sobre objetos canónicos comunes, reduciendo identidades paralelas para la misma entidad.' },
      { title: 'Flujo trazable', text: 'Acciones, estados y evidencia permanecen conectados cuando un proceso atraviesa distintas funciones.' },
      { title: 'Arquitectura extensible', text: 'Nuevas automatizaciones y vistas pueden apoyarse en el mismo núcleo sin crear una segunda fuente de verdad.' },
    ],
    ctaEyebrow: '04 / Aplicación',
    ctaTitle: 'Si tu operación cruza áreas, primero conecta la verdad operacional.',
    ctaBody: 'El diagnóstico identifica qué objetos, estados y decisiones deben ser canónicos antes de sumar automatización o IA.',
    primaryCta: 'Agendar diagnóstico',
    secondaryCta: 'Ver soluciones',
  },
  en: {
    metadataTitle: 'Black Swan Facility Core | N3uralia implementation case',
    metadataDescription: 'How Black Swan Facility Core connects reservations, people, assets, inventory, procurement, maintenance, finance and events through shared canonical objects.',
    eyebrow: 'Facility & Hospitality OS',
    title: 'One operational truth for hospitality and facilities.',
    subtitle: 'Black Swan Facility Core is designed so reservations, guests, assets, procurement, inventory, maintenance, charges, payments and evidence do not become isolated silos.',
    back: 'Back to cases',
    facts: [
      { label: 'Industry', value: 'Hospitality & facilities' },
      { label: 'System', value: 'Facility Core' },
      { label: 'Principle', value: 'Shared canonical objects' },
    ],
    challengeEyebrow: '01 / Problem',
    challengeTitle: 'Complexity appears when the same object changes identity across functions.',
    challenge: 'A hospitality operation connects people, rooms, assets, reservations, procurement, maintenance, finance and events. If every function keeps its own version of the same object, coordination loses context and evidence fragments.',
    signals: [
      { title: 'Fragmented identity', text: 'Reservations, assets, guests and documents can be represented differently depending on which module consumes them.' },
      { title: 'Cross-functional workflows', text: 'A single request may touch operations, maintenance, inventory, procurement and finance before it closes.' },
      { title: 'Scattered evidence', text: 'Without shared history, reconstructing what happened requires checking multiple screens, messages or records.' },
    ],
    solutionEyebrow: '02 / System',
    solutionTitle: 'Canonical objects that preserve context across workflows.',
    solution: 'Facility Core models shared relationships instead of replicating information by module. The same operation can move across functions while preserving identity, state, evidence and history.',
    flow: [
      'Reservation → Room → Guest → Activity → Charge → Payment → Invoice.',
      'Procurement → Receipt → Inventory connects purchasing, receipt and availability.',
      'Asset → Issue → Work → Evidence → Closure connects maintenance and follow-up.',
      'Roles and operational views consume the same objects rather than rebuilding them independently.',
    ],
    evidenceEyebrow: '03 / Evidence',
    evidenceTitle: 'What can be reviewed in the system.',
    evidence: [
      { title: 'Shared model', text: 'Functions operate on common canonical objects, reducing parallel identities for the same entity.' },
      { title: 'Traceable flow', text: 'Actions, states and evidence remain connected as a process crosses different functions.' },
      { title: 'Extensible architecture', text: 'New automation and views can build on the same core without creating a second source of truth.' },
    ],
    ctaEyebrow: '04 / Application',
    ctaTitle: 'If your operation crosses functions, connect operational truth first.',
    ctaBody: 'The diagnosis identifies which objects, states and decisions must be canonical before adding automation or AI.',
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
    path: '/case-studies/blackswan-facility-core',
    type: 'article',
    title: page.metadataTitle,
    description: page.metadataDescription,
  })
}

export default async function BlackswanCaseStudy(props: PageProps) {
  const params = await props.params
  const locale = isValidLocale(params.locale) ? params.locale : DEFAULT_LOCALE
  return <RetroCaseStudy locale={locale} page={content[locale]} />
}
