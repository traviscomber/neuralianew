import Link from 'next/link'
import type { Locale } from '@/lib/get-locale'
import s from './recognition-page.module.css'

const copy = {
  en: {
    heroEyebrow: 'Vision · Recognition · Workflows',
    heroTitle: 'Smart Recognition Systems.',
    heroBody: 'Computer vision systems for wildlife, production quality, agriculture and security that connect detections to real operational workflows.',
    heroPrimary: 'Book a diagnosis',
    heroSecondary: 'See use cases',
    useEyebrow: '02 · Core Use Cases',
    useTitle: 'Recognition across real operations.',
    useIntro: 'One recognition layer. Multiple operational contexts. Each use case connects visual evidence to a measurable workflow.',
    useCases: [
      ['Wildlife Recognition', 'Detect cougar, pudú and conservation events in forests, parks and remote areas.'],
      ['Cattle Recognition', 'Count livestock, register feeding events and monitor herd movement.'],
      ['Production Quality Recognition', 'Measure size, color, defects and premium quality across products and batches.'],
      ['Security Recognition', 'Detect people, vehicles, intrusion and perimeter events in critical areas.'],
    ],
    valueEyebrow: '03 · Value Chain',
    valueTitle: 'Detection becomes action.',
    valueBody: 'N3uralia transforms visual detections into operational records, decisions and actions that can be traced and improved over time.',
    flow: ['Detect', 'Identify / Classify', 'Evaluate / Score', 'Register / Record', 'Trigger Action'],
    trace: 'Trace & Improve',
    platformEyebrow: '04 · Platform',
    platformTitle: 'The system behind recognition.',
    platformBody: 'N3uralia connects capture, vision intelligence, decision logic, operational records and enterprise integrations in one recognition stack.',
    layers: [
      ['01', 'Edge Capture', 'Cameras, sensors and field devices.'],
      ['02', 'Vision Intelligence', 'Classification of animals, people, vehicles and objects.'],
      ['03', 'Logic & Scoring', 'Confidence thresholds, rules and decision paths.'],
      ['04', 'Records & Insights', 'Structured events, dashboards and measurable history.'],
      ['05', 'Integrations', 'ERP, MES, APIs, cloud and third-party systems.'],
    ],
    workEyebrow: 'Start with one use case.',
    workTitle: 'From diagnosis to pilot to scale.',
    work: [
      ['01', 'Diagnose', 'Assess your operation, constraints, and goals.'],
      ['02', 'Pilot', 'Deploy a measurable pilot in one site or line.'],
      ['03', 'Scale', 'Scale across teams, workflows, and facilities.'],
    ],
    book: 'Book a diagnosis',
    talk: 'Talk to us',
  },
  es: {
    heroEyebrow: 'Visión · Reconocimiento · Flujos',
    heroTitle: 'Sistemas de reconocimiento inteligente.',
    heroBody: 'Sistemas de visión computacional para fauna, calidad de producción, agricultura y seguridad que conectan detecciones con flujos operacionales reales.',
    heroPrimary: 'Agendar diagnóstico',
    heroSecondary: 'Ver casos de uso',
    useEyebrow: '02 · Casos de Uso',
    useTitle: 'Reconocimiento en operaciones reales.',
    useIntro: 'Una capa de reconocimiento. Múltiples contextos operacionales. Cada caso conecta evidencia visual con un flujo medible.',
    useCases: [
      ['Reconocimiento de Fauna', 'Detecta puma, pudú y eventos de conservación en bosques, parques y zonas remotas.'],
      ['Reconocimiento Ganadero', 'Cuenta ganado, registra eventos de alimentación y monitorea el movimiento del rebaño.'],
      ['Reconocimiento de Calidad', 'Mide tamaño, color, defectos y calidad premium en productos y lotes.'],
      ['Reconocimiento de Seguridad', 'Detecta personas, vehículos, intrusión y eventos perimetrales en áreas críticas.'],
    ],
    valueEyebrow: '03 · Cadena de Valor',
    valueTitle: 'La detección se convierte en acción.',
    valueBody: 'N3uralia convierte detecciones visuales en registros, decisiones y acciones operacionales que pueden trazarse y mejorarse en el tiempo.',
    flow: ['Detectar', 'Identificar / Clasificar', 'Evaluar / Puntuar', 'Registrar', 'Activar Acción'],
    trace: 'Trazar y Mejorar',
    platformEyebrow: '04 · Plataforma',
    platformTitle: 'El sistema detrás del reconocimiento.',
    platformBody: 'N3uralia conecta captura, inteligencia visual, lógica de decisión, registros operacionales e integraciones empresariales en una sola arquitectura.',
    layers: [
      ['01', 'Captura Edge', 'Cámaras, sensores y dispositivos de terreno.'],
      ['02', 'Inteligencia Visual', 'Clasificación de animales, personas, vehículos y objetos.'],
      ['03', 'Lógica y Scoring', 'Umbrales de confianza, reglas y rutas de decisión.'],
      ['04', 'Registros e Insights', 'Eventos estructurados, tableros e historial medible.'],
      ['05', 'Integraciones', 'ERP, MES, APIs, nube y sistemas de terceros.'],
    ],
    workEyebrow: 'Comienza con un caso de uso.',
    workTitle: 'Del diagnóstico al piloto y a escala.',
    work: [
      ['01', 'Diagnosticar', 'Evalúa tu operación, restricciones y objetivos.'],
      ['02', 'Piloto', 'Implementa un piloto medible en un sitio o línea.'],
      ['03', 'Escalar', 'Escala entre equipos, flujos e instalaciones.'],
    ],
    book: 'Agendar diagnóstico',
    talk: 'Hablar con nosotros',
  },
} as const

// Every path below is already committed under /public. Keep the page free of
// references to unmaterialized staging assets so production never renders an
// empty media frame while the final Recognition WebPs are being synchronized.
const useCaseAssets = [
  ['/usecase-cougar-clean.webp', 'Clean dark image of a Chilean cougar for wildlife recognition.'],
  ['/usecase-cow-clean.webp', 'Clean dark image of a healthy cow for cattle recognition.'],
  ['/background-demo-capabilities.jpg', 'Technology inspection visual for production quality recognition.'],
  ['/background-demo-workflow.jpg', 'Operational monitoring visual for security recognition.'],
] as const

export function RecognitionPage({ locale }: { locale: Locale }) {
  const t = copy[locale]

  return (
    <main className={s.page}>
      <section className={`${s.section} ${s.hero}`}>
        <div className={`${s.shell} ${s.heroContent}`}>
          <span className={s.eyebrow}>{t.heroEyebrow}</span>
          <h1>{t.heroTitle}</h1>
          <p className={s.heroBody}>{t.heroBody}</p>
          <div className={s.actions}>
            <Link href={`/${locale}/diagnostico`} className={`${s.button} ${s.buttonPrimary}`}>{t.heroPrimary}</Link>
            <a href="#use-cases" className={s.button}>{t.heroSecondary}</a>
          </div>
          <div className={s.heroSignal} aria-hidden="true">
            <span className={s.signalMark} />
            <span>Intelligence built on real data.<br />Impact delivered in the field.</span>
          </div>
        </div>
      </section>

      <section id="use-cases" className={`${s.section} ${s.useCases}`}>
        <div className={s.shell}>
          <div className={s.useCaseLead}>
            <header className={s.sectionHead}>
              <span className={s.eyebrow}>{t.useEyebrow}</span>
              <h2>{t.useTitle}</h2>
              <p>{t.useIntro}</p>
            </header>
            <figure className={`${s.mediaFrame} ${s.useCaseFeature}`}>
              <img src="/usecase-cougar-clean.webp" alt="Chilean cougar used as the lead wildlife recognition example." className={s.visual} />
            </figure>
          </div>

          <div className={s.cardGrid}>
            {t.useCases.map((item, i) => (
              <article className={s.useCaseCard} key={item[0]}>
                <div className={s.cardMedia}>
                  <img src={useCaseAssets[i][0]} alt={useCaseAssets[i][1]} loading="lazy" className={s.visual} />
                </div>
                <div className={s.cardBody}>
                  <span>0{i + 1}</span>
                  <h3>{item[0]}</h3>
                  <p>{item[1]}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.value}`}>
        <div className={s.shell}>
          <header className={s.splitHead}>
            <div><span className={s.eyebrow}>{t.valueEyebrow}</span><h2>{t.valueTitle}</h2></div>
            <p>{t.valueBody}</p>
          </header>
          <figure className={`${s.mediaFrame} ${s.diagramFrame}`}>
            <img src="/background-demo-workflow.jpg" alt="Recognition workflow from detection to classification, scoring, record and action." loading="lazy" className={`${s.visual} ${s.containVisual}`} />
          </figure>
          <div className={s.flowLabels} aria-label={t.flow.join(' to ')}>
            {t.flow.map((label, index) => <div key={label}><span>0{index + 1}</span><b>{label}</b></div>)}
          </div>
          <p className={s.trace}>{t.trace}</p>
        </div>
      </section>

      <section id="platform" className={`${s.section} ${s.platform}`}>
        <div className={`${s.shell} ${s.platformGrid}`}>
          <div className={s.platformCopy}>
            <span className={s.eyebrow}>{t.platformEyebrow}</span>
            <h2>{t.platformTitle}</h2>
            <p>{t.platformBody}</p>
            <div className={s.layerList}>
              {t.layers.map((layer) => (
                <div key={layer[0]} className={s.layerItem}>
                  <span>{layer[0]}</span>
                  <div><h3>{layer[1]}</h3><p>{layer[2]}</p></div>
                </div>
              ))}
            </div>
          </div>
          <figure className={`${s.mediaFrame} ${s.platformVisual}`}>
            <img src="/background-demo-capabilities.jpg" alt="Layered architecture showing edge capture, vision intelligence, scoring, records and integrations." loading="lazy" className={`${s.visual} ${s.containVisual}`} />
          </figure>
        </div>
      </section>

      <section className={`${s.section} ${s.work}`}>
        <div className={`${s.shell} ${s.workGrid}`}>
          <div className={s.workCopy}>
            <span className={s.eyebrow}>{t.workEyebrow}</span>
            <h2>{t.workTitle}</h2>
            <div className={s.workSteps}>
              {t.work.map((step) => (
                <article key={step[0]} className={s.workStep}>
                  <span>{step[0]}</span>
                  <div><h3>{step[1]}</h3><p>{step[2]}</p></div>
                </article>
              ))}
            </div>
            <div className={s.actions}>
              <Link href={`/${locale}/diagnostico`} className={`${s.button} ${s.buttonPrimary}`}>{t.book}</Link>
              <Link href={`/${locale}/contact`} className={s.button}>{t.talk}</Link>
            </div>
            <address className={s.contact}>
              <a href="mailto:juan@n3uralia.com">juan@n3uralia.com</a>
              <a href="https://wa.me/56993826127">+56 9 9382 6127</a>
              <span>Santiago, Chile · LATAM</span>
            </address>
          </div>
          <figure className={`${s.mediaFrame} ${s.workVisual}`}>
            <img src="/background-demo-solutions.jpg" alt="Operational command center monitoring recognition systems at scale." loading="lazy" className={s.visual} />
          </figure>
        </div>
      </section>
    </main>
  )
}

export function recognitionHref(locale: Locale) {
  return locale === 'es' ? '/es/reconocimiento' : '/en/recognition'
}
