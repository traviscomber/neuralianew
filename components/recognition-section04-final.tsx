import type { Locale } from '@/lib/get-locale'
import s from './recognition-page.module.css'
import p from './recognition-section04-final.module.css'

const copy = {
  en: {
    eyebrow: '04 · Platform',
    title: 'The system behind recognition.',
    body: 'N3uralia connects capture, vision intelligence, decision logic, operational records and enterprise integrations in one recognition stack.',
    layers: [
      ['01','Edge Capture','Camera scans the environment.'],
      ['02','Visual Intelligence','Classifies and compares with confidence.'],
      ['03','Logic & Action','Detection becomes an operational alert.'],
      ['04','Records & Insights','Every event recorded. Insights that matter.'],
      ['05','N3uralia Intelligence','One platform. Everything connected.'],
    ],
  },
  es: {
    eyebrow: '04 · Plataforma',
    title: 'El sistema detrás del reconocimiento.',
    body: 'N3uralia conecta captura, inteligencia visual, lógica de decisión, registros operacionales e integraciones empresariales en una sola arquitectura.',
    layers: [
      ['01','Captura Edge','La cámara escanea el entorno.'],
      ['02','Inteligencia Visual','Clasifica y compara con confianza.'],
      ['03','Lógica y Acción','La detección se convierte en una alerta operacional.'],
      ['04','Registros e Insights','Cada evento queda registrado. Insights que importan.'],
      ['05','Inteligencia N3uralia','Una plataforma. Todo conectado.'],
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
            <h2>{t.title}</h2>
            <i aria-hidden="true" />
          </div>
          <p>{t.body}</p>
        </header>

        <div className={p.layout}>
          <div className={p.rail} aria-label="Recognition platform stages">
            {t.layers.map((layer) => (
              <article className={p.stage} key={layer[0]}>
                <span className={p.stageNo}>{layer[0]}</span>
                <div>
                  <h3>{layer[1]}</h3>
                  <p>{layer[2]}</p>
                </div>
              </article>
            ))}
          </div>

          <div className={p.visual} aria-label="N3uralia recognition workflow">
            <section className={`${p.panel} ${p.capture}`}>
              <div className={p.camera} aria-hidden="true"><span/><span/></div>
              <div className={p.beam} aria-hidden="true" />
              <div className={p.detectFrame} aria-hidden="true" />
              <img src="/usecase-cougar-clean.webp" alt="Cougar detected by an edge camera" />
              <div className={p.metric}><span>REAL-TIME DETECTION</span><strong>COUGAR · 98.7%</strong><i/></div>
            </section>

            <section className={`${p.panel} ${p.classify}`}>
              <div className={p.classCard}><img src="/usecase-cougar-clean.webp" alt="Cougar classification"/><strong>COUGAR</strong><span>CONFIDENCE <b>98%</b></span></div>
              <div className={p.classCard}><img src="/usecase-cow-clean.webp" alt="Cow classification"/><strong>COW</strong><span>CONFIDENCE <b>12%</b></span></div>
              <div className={`${p.classCard} ${p.deerCard}`}><div className={p.deer} aria-hidden="true">Y</div><strong>CHILEAN DEER</strong><span>CONFIDENCE <b>4%</b></span></div>
            </section>

            <section className={`${p.panel} ${p.logic}`}>
              <div className={p.logicBox}><small>RULES & SCORING</small><b className={p.network}>◇—◇<br/>╲ ╱<br/>◇—◇</b><span>98.7%</span></div>
              <i className={p.arrow}>→</i>
              <div className={p.logicBox}><small>DECISION</small><b className={p.check}>✓</b></div>
              <i className={p.arrow}>→</i>
              <div className={p.logicBox}><small>REPORT SENT</small><b className={p.send}>➤</b></div>
              <i className={p.arrow}>→</i>
              <div className={`${p.logicBox} ${p.alertBox}`}><small>ALERT DELIVERY</small><b>▤ → ◉ → ▯</b></div>
              <img src="/usecase-security-clean.webp" alt="Trusted operator receiving the alert" />
            </section>

            <section className={`${p.panel} ${p.records}`}>
              <div className={p.eventCard}><small>NEW EVENT</small><strong>MAY 12, 2025</strong><span>07:32</span><span>PATAGONIA, CL</span></div>
              <div className={p.map}><i/><b>●</b></div>
              <div className={p.chart}>{[28,42,56,70,61,84].map((h,i)=><i key={i} style={{height:`${h}%`}}/>)}<b/></div>
            </section>

            <section className={`${p.panel} ${p.core}`}>
              <div className={p.circuit} aria-hidden="true" />
              <img src="/n3uralia-brand/n3uralia-wordmark-new.webp" alt="N3uralia" />
              <div className={p.integrations}><span>API</span><span>CLOUD</span><span>ANALYTICS</span><span>PARTNERS</span></div>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}
