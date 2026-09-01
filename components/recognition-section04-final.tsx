import type { Locale } from '@/lib/get-locale'
import Image from 'next/image'
import s from './recognition-page.module.css'
import p from './recognition-section04-final.module.css'

const copy = {
  en: {
    eyebrow: '04 · Platform',
    title: ['The system', 'behind', 'recognition.'],
    body: 'N3uralia connects capture, vision intelligence, decision logic, operational records and enterprise integrations in one recognition stack.',
    artworkAlt: 'Minimal N3uralia recognition architecture showing capture, comparison, action, records and intelligence.',
    layers: [
      ['01', 'Edge Capture', 'Camera scans the environment.'],
      ['02', 'Visual Intelligence', 'Compares recognition patterns.'],
      ['03', 'Logic & Action', 'Detection becomes an alert.'],
      ['04', 'Records & Insights', 'Events become operational knowledge.'],
      ['05', 'N3uralia Intelligence', 'One connected intelligence layer.'],
    ],
  },
  es: {
    eyebrow: '04 · Plataforma',
    title: ['El sistema', 'detrás del', 'reconocimiento.'],
    body: 'N3uralia conecta captura, inteligencia visual, lógica de decisión, registros operacionales e integraciones empresariales en una sola arquitectura.',
    artworkAlt: 'Arquitectura minimalista N3uralia con captura, comparación, acción, registros e inteligencia.',
    layers: [
      ['01', 'Captura Edge', 'La cámara escanea el entorno.'],
      ['02', 'Inteligencia Visual', 'Compara patrones de reconocimiento.'],
      ['03', 'Lógica y Acción', 'La detección genera una alerta.'],
      ['04', 'Registros e Insights', 'Los eventos generan conocimiento operacional.'],
      ['05', 'Inteligencia N3uralia', 'Una capa conectada de inteligencia.'],
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
            <Image src="/recognition-platform-minimal.svg" alt={t.artworkAlt} width={920} height={900} priority sizes="(max-width:820px) 100vw, 70vw" />
          </figure>
        </div>
      </div>
    </section>
  )
}
