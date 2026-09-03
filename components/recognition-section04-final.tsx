import type { CSSProperties } from 'react'
import type { Locale } from '@/lib/get-locale'
import s from './recognition-page.module.css'
import p from './recognition-section04-final.module.css'
import { ProcessNode, type ProcessIconName } from './recognition-process-node'
import { RecognitionSectionNote } from './recognition-section-note'

const PLATFORM_ARTWORK_SRC = '/recognition-section04-platform-final.webp?v=20260903-5'

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

const platformIcons: ProcessIconName[] = ['capture', 'classify', 'decision', 'insights', 'intelligence']

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
          <RecognitionSectionNote icon="platform">{t.body}</RecognitionSectionNote>
        </header>

        <div className={p.layout}>
          <div className={p.rail} aria-label="Recognition platform stages">
            {t.layers.map((layer, index) => (
              <div className={p.stageSlot} key={layer[0]}>
                <ProcessNode
                  index={layer[0]}
                  icon={platformIcons[index]}
                  title={layer[1]}
                  description={layer[2]}
                  orientation="vertical"
                  emphasis={index === 4}
                />
                {index < t.layers.length - 1 ? (
                  <span
                    className={p.stageConnector}
                    aria-hidden="true"
                    style={{ '--connector-index': index } as CSSProperties}
                  />
                ) : null}
              </div>
            ))}
          </div>

          <figure className={p.artwork}>
            <img
              src={PLATFORM_ARTWORK_SRC}
              alt={t.artworkAlt}
              width={560}
              height={995}
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
