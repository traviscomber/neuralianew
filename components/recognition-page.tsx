import Link from 'next/link'
import type { Locale } from '@/lib/get-locale'
import s from './recognition-page.module.css'

const copy = {
  en: {
    heroEyebrow: 'Recognition',
    heroTitle: 'Smart Recognition Systems.',
    heroBody: 'Computer vision for wildlife, livestock, production quality and security. N3uralia turns visual detections into trusted operational action.',
    explore: 'Explore the platform',
    talk: 'Talk to an expert',
    useEyebrow: '02 · Use cases',
    useTitle: 'Recognition across every domain.',
    useCases: [
      ['Wildlife recognition', 'Identify and monitor wild species in their natural habitats.'],
      ['Livestock recognition', 'Track and manage cattle health, movement and behavior.'],
      ['Quality / specimen recognition', 'Ensure quality and compliance with precise visual inspection.'],
      ['Perimeter / security recognition', 'Detect intrusions and anomalies in real time.'],
    ],
    valueEyebrow: '03 · Value chain',
    valueTitle: 'From vision to action.',
    valueBody: 'Capture → Detect → Validate → Manage → Act. A continuous feedback loop learns, adapts and improves performance over time.',
    platformEyebrow: '04 · Platform',
    platformTitle: 'The N3uralia Recognition Platform.',
    platformBody: 'Built for complexity. Designed for impact. A modular platform unifies data, models and operations in a secure, scalable architecture purpose-built for visual recognition at scale.',
    layers: [
      ['01', 'Data ingestion', 'Connect any sensor. Ingest any format.'],
      ['02', 'Data & model layer', 'Organize, label and train vision models.'],
      ['03', 'Workflow engine', 'Orchestrate rules, priorities and decisions.'],
      ['04', 'Intelligence layer', 'Dashboards, analytics and operational insights.'],
      ['05', 'Integration layer', 'Connect with ERP, MES, APIs, cloud and third-party systems.'],
    ],
    scaleEyebrow: '05 · Scale',
    scaleTitle: 'Monitor. Understand. Act at scale.',
    scaleBody: 'From single sites to global operations, N3uralia delivers unified situational awareness across assets, environments and teams. One platform. Complete control.',
    action: 'See N3uralia in action',
  },
  es: {
    heroEyebrow: 'Reconocimiento',
    heroTitle: 'Sistemas de reconocimiento inteligente.',
    heroBody: 'Visión computacional para fauna, ganadería, calidad de producción y seguridad. N3uralia convierte detecciones visuales en acción operacional confiable.',
    explore: 'Explorar la plataforma',
    talk: 'Hablar con un experto',
    useEyebrow: '02 · Casos de uso',
    useTitle: 'Reconocimiento en cada dominio.',
    useCases: [
      ['Reconocimiento de fauna', 'Identifica y monitorea especies silvestres en su hábitat natural.'],
      ['Reconocimiento ganadero', 'Monitorea salud, movimiento y comportamiento del ganado.'],
      ['Reconocimiento de calidad', 'Asegura calidad y cumplimiento mediante inspección visual precisa.'],
      ['Reconocimiento perimetral', 'Detecta intrusiones y anomalías en tiempo real.'],
    ],
    valueEyebrow: '03 · Cadena de valor',
    valueTitle: 'De visión a acción.',
    valueBody: 'Capturar → Detectar → Validar → Gestionar → Actuar. Un ciclo continuo aprende, se adapta y mejora el rendimiento con el tiempo.',
    platformEyebrow: '04 · Plataforma',
    platformTitle: 'La plataforma de reconocimiento N3uralia.',
    platformBody: 'Diseñada para la complejidad y para generar impacto. Una plataforma modular que unifica datos, modelos y operaciones en una arquitectura segura y escalable.',
    layers: [
      ['01', 'Ingesta de datos', 'Conecta cualquier sensor e incorpora cualquier formato.'],
      ['02', 'Capa de datos y modelos', 'Organiza, etiqueta y entrena modelos de visión.'],
      ['03', 'Motor de workflows', 'Orquesta reglas, prioridades y decisiones.'],
      ['04', 'Capa de inteligencia', 'Dashboards, analítica e insights operacionales.'],
      ['05', 'Capa de integración', 'Conecta ERP, MES, APIs, nube y sistemas de terceros.'],
    ],
    scaleEyebrow: '05 · Escala',
    scaleTitle: 'Monitorea. Comprende. Actúa a escala.',
    scaleBody: 'Desde un sitio hasta operaciones globales, N3uralia entrega conciencia situacional unificada sobre activos, entornos y equipos. Una plataforma. Control completo.',
    action: 'Ver N3uralia en acción',
  },
} as const

export function RecognitionPage({ locale }: { locale: Locale }) {
  const t = copy[locale]

  return (
    <main className={s.page}>
      <section className={`${s.section} ${s.hero}`}>
        <div className={s.shell}>
          <div className={s.heroCopy}>
            <span className={s.eyebrow}>{t.heroEyebrow}</span>
            <h1>{t.heroTitle}</h1>
            <p>{t.heroBody}</p>
            <div className={s.actions}>
              <a href="#platform" className={`${s.button} ${s.buttonPrimary}`}>{t.explore}</a>
              <Link href={`/${locale}/contact`} className={s.button}>{t.talk}</Link>
            </div>
          </div>
          <div className={`${s.atlasFrame} ${s.frame1}`} role="img" aria-label="N3uralia command center detecting a cougar on a visual intelligence display." />
        </div>
      </section>

      <section id="use-cases" className={`${s.section} ${s.useCases}`}>
        <div className={s.shell}>
          <header className={s.centerHead}>
            <span className={s.eyebrow}>{t.useEyebrow}</span>
            <h2>{t.useTitle}</h2>
          </header>
          <div className={s.useCaseVisual}>
            <div className={`${s.atlasFrame} ${s.frame2}`} role="img" aria-label="Four recognition examples: cougar, cow, sea urchin and perimeter security person." />
            <div className={s.useCaseLabels}>
              {t.useCases.map((item, i) => (
                <article key={item[0]} className={s.useCaseLabel}>
                  <span>0{i + 1}</span>
                  <h3>{item[0]}</h3>
                  <p>{item[1]}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.value}`}>
        <div className={s.shell}>
          <header className={s.splitHead}>
            <div><span className={s.eyebrow}>{t.valueEyebrow}</span><h2>{t.valueTitle}</h2></div>
            <p>{t.valueBody}</p>
          </header>
          <div className={`${s.atlasFrame} ${s.frame3} ${s.diagramFrame}`} role="img" aria-label="Recognition value chain from capture through action with a continuous feedback loop." />
        </div>
      </section>

      <section id="platform" className={`${s.section} ${s.platform}`}>
        <div className={s.shell}>
          <header className={s.platformHead}>
            <span className={s.eyebrow}>{t.platformEyebrow}</span>
            <h2>{t.platformTitle}</h2>
          </header>
          <div className={s.platformGrid}>
            <aside className={s.platformIntro}>
              <p>{t.platformBody}</p>
              <Link href={`/${locale}/contact`} className={s.button}>{t.talk}</Link>
            </aside>
            <div className={`${s.atlasFrame} ${s.frame4} ${s.platformVisual}`} role="img" aria-label="Layered N3uralia recognition platform architecture with sensors, vision models, logic, records and integrations." />
            <div className={s.layerList}>
              {t.layers.map((layer) => (
                <div key={layer[0]} className={s.layerItem}>
                  <span>{layer[0]}</span>
                  <div><h3>{layer[1]}</h3><p>{layer[2]}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${s.section} ${s.scale}`}>
        <div className={s.shell}>
          <header className={s.centerHead}>
            <span className={s.eyebrow}>{t.scaleEyebrow}</span>
            <h2>{t.scaleTitle}</h2>
          </header>
          <div className={s.scaleGrid}>
            <div className={s.scaleCopy}>
              <p>{t.scaleBody}</p>
              <Link href={`/${locale}/diagnostico`} className={`${s.button} ${s.buttonPrimary}`}>{t.action}</Link>
              <div className={s.contact}>
                <a href="mailto:juan@n3uralia.com">juan@n3uralia.com</a>
                <a href="https://wa.me/56993826127">+56 9 9382 6127</a>
                <span>Santiago, Chile · LATAM</span>
              </div>
            </div>
            <div className={`${s.atlasFrame} ${s.frame5} ${s.scaleVisual}`} role="img" aria-label="N3uralia operational command center monitoring recognition systems at scale." />
          </div>
        </div>
      </section>
    </main>
  )
}

export function recognitionHref(locale: Locale) {
  return locale === 'es' ? '/es/reconocimiento' : '/en/recognition'
}
