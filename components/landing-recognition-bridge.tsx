import Image from 'next/image'
import Link from 'next/link'
import type { Locale } from '@/lib/get-locale'
import s from './landing-recognition-bridge.module.css'

const copy = {
  en: {
    eyebrow: 'Vision · Recognition · Workflows',
    title: 'Recognition that becomes action.',
    body: 'Computer vision for wildlife, livestock, production quality and security — connected to the operational workflows that follow each detection.',
    cta: 'Explore recognition systems',
    labels: ['Wildlife', 'Cattle', 'Production quality', 'Security'],
  },
  es: {
    eyebrow: 'Visión · Reconocimiento · Flujos',
    title: 'Reconocimiento que se convierte en acción.',
    body: 'Visión computacional para fauna, ganadería, calidad de producción y seguridad — conectada con los flujos operacionales que siguen a cada detección.',
    cta: 'Explorar reconocimiento',
    labels: ['Fauna', 'Ganadería', 'Calidad de producción', 'Seguridad'],
  },
} as const

const assets = [
  '/usecase-cougar-clean.webp',
  '/usecase-cow-clean.webp',
  '/usecase-sea-urchin-clean.webp',
  '/usecase-security-clean.webp',
] as const

export function LandingRecognitionBridge({ locale }: { locale: Locale }) {
  const t = copy[locale]
  const href = locale === 'es' ? '/es/reconocimiento' : '/en/recognition'

  return (
    <section className={s.section} aria-labelledby="landing-recognition-title">
      <div className={s.shell}>
        <div className={s.copy}>
          <span className={s.eyebrow}>{t.eyebrow}</span>
          <h2 id="landing-recognition-title" className={s.title}>{t.title}</h2>
          <p className={s.body}>{t.body}</p>
          <Link href={href} className={s.link}>{t.cta}</Link>
        </div>

        <div className={s.visual} aria-label={locale === 'es' ? 'Contextos de reconocimiento' : 'Recognition contexts'}>
          {assets.map((src, index) => (
            <article className={s.tile} key={src}>
              <Image
                src={src}
                alt=""
                fill
                sizes="(min-width: 901px) 27vw, (min-width: 561px) 48vw, 100vw"
                className={s.image}
              />
              <i className={`${s.corner} ${s.tl}`} aria-hidden="true" />
              <i className={`${s.corner} ${s.tr}`} aria-hidden="true" />
              <i className={`${s.corner} ${s.bl}`} aria-hidden="true" />
              <i className={`${s.corner} ${s.br}`} aria-hidden="true" />
              <div className={s.label}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{t.labels[index]}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
