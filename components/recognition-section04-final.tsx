import type { Locale } from '@/lib/get-locale'
import s from './recognition-page.module.css'
import p from './recognition-section04-final.module.css'
import artworkPart0 from './recognition-section04-reference-part0'
import artworkPart1 from './recognition-section04-reference-part1'

const artworkSrc = `data:image/webp;base64,${artworkPart0}${artworkPart1}`

const copy = {
  en: {
    eyebrow: '04 · Platform',
    title: ['The system', 'behind', 'recognition.'],
    body: 'N3uralia connects capture, vision intelligence, decision logic, operational records and enterprise integrations in one recognition stack.',
    artworkAlt: 'N3uralia recognition platform: camera capture, cougar classification, operational alerting, event records, analytics and connected integrations.',
    layers: [
      ['01', 'Edge Capture', 'Camera scans the environment.'],
      ['02', 'Visual Intelligence', 'Classifies and compares with confidence.'],
      ['03', 'Logic & Action', 'Detection becomes an operational alert.'],
      ['04', 'Records & Insights', 'Every event recorded. Insights that matter.'],
      ['05', 'N3uralia Intelligence', 'One platform. Everything connected.'],
    ],
  },
  es: {
    eyebrow: '04 · Plataforma',
    title: ['El sistema', 'detrás del', 'reconocimiento.'],
    body: 'N3uralia conecta captura, inteligencia visual, lógica de decisión, registros operacionales e integraciones empresariales en una sola arquitectura.',
    artworkAlt: 'Plataforma de reconocimiento N3uralia: captura por cámara, clasificación de puma, alertas operacionales, registros, analítica e integraciones conectadas.',
    layers: [
      ['01', 'Captura Edge', 'La cámara escanea el entorno.'],
      ['02', 'Inteligencia Visual', 'Clasifica y compara con confianza.'],
      ['03', 'Lógica y Acción', 'La detección se convierte en una alerta operacional.'],
      ['04', 'Registros e Insights', 'Cada evento queda registrado. Insights que importan.'],
      ['05', 'Inteligencia N3uralia', 'Una plataforma. Todo conectado.'],
    ],
  },
} as const

export function RecognitionSection04Final({ locale }: { locale: Locale }) {
  const t = copy[locale]

  return (
    <section id="platform" className={`${s.section} ${p.section}`}>
      <div className={s.shell}>
        <header className={p.header}>
          <div className={p.titleBlock}>
            <span className={s.eyebrow}>{t.eyebrow}</span>
            <h2>{t.title.map((line) => <span key={line}>{line}</span>)}</h2>
            <i aria-hidden="true" />
          </div>
          <p>{t.body}</p>
        </header>

        <div className={p.layout}>
          <div className={p.rail} aria-label="Recognition platform stages">
            {t.layers.map((layer) => (
              <article className={p.stage} key={layer[0]}>
                <span className={p.stageNo}>{layer[0]}</span>
                <div className={p.stageCopy}>
                  <h3>{layer[1]}</h3>
                  <p>{layer[2]}</p>
                </div>
              </article>
            ))}
          </div>

          <figure className={p.artwork}>
            <img
              src={artworkSrc}
              alt={t.artworkAlt}
              width={700}
              height={877}
              loading="eager"
              decoding="sync"
              fetchPriority="high"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
